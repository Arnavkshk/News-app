const express=require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

router.post('/',[
    body('name',"name is too small").isLength({min : 3}),
    body('email',"enter a valid email").isEmail(),
    body('password',"password must be of atleast 5 characters").isLength({min:5})

],async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      let user=User.findOne({email:req.body.email});
      if(user){
        return res.status(400).json({error:"Sorry a user with this email already exists"})
      }
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password:req.body.password,
      }).then(user => res.json(user));
})
module.exports=router;
