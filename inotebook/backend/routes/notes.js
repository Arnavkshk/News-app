const express=require('express');
const router = express.Router();
var fetchuser=require("../middleware/fetchuser")
const Notes = require("../models/Notes");

router.get('/fetchallnotes',fetchuser,(req,res)=>{
    const notes= await Notes.find({user:req.user})
    res.json([])
})
module.exports=router;
