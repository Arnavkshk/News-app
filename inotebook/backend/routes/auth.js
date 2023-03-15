const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt=require('bcryptjs');
var jwt=require('jsonwebtoken');
const JWT_SECRET="hellow";
var fetchuser=require("../middleware/fetchuser")
router.post(
  "/createuser",
  [
    body("name", "name is too small").isLength({ min: 3 }),
    body("email", "enter a valid email").isEmail(),
    body("password", "password must be of atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exists" });
      }
      const salt= await bcrypt.genSalt(10);
      const secpass= await bcrypt.hash(req.body.password,salt);

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secpass,
      });
      const data={
        user:{
          id:user.id
        }
      }
      const authdata=jwt.sign(data,JWT_SECRET);
      res.json({authdata});

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

router.post(
  "/login",
  [
    body("email", "enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
    
  ],async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({errors:errors.array()});
    }
const {email,password}=req.body;
  try {
    let user= await User.findOne({email});
    if(!user){
      return res.status(400).json({error:"please try to login with correct credentials"});
    }
    const passwordComapre= await bcrypt.compare(password,user.password);
    if(!passwordComapre){
      return res.status(400).json({error:"please try to login with correct credentials"})
    }
    const data={
      user:{
        id:user.id
      }
    }
    const authdata=jwt.sign(data,JWT_SECRET);
    res.json({authdata});


  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
  });


  router.post("/getuser",fetchuser,async (req,res)=>{
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user);

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
    })
module.exports = router;
