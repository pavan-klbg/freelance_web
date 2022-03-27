const express=require('express')
const req = require('express/lib/request')
const Detail =require('../models/Detail')
const Slider = require('../models/Slider')
const routes=express.Router()

routes.get("/",async(req,res)=>{
    const details=await Detail.findOne({"_id":"61fd5de30acdd95e3b44be0f"})
    const slides=await Slider.find()
    //console.log(details)
    res.render("index",{
        details:details,
        slides:slides
    })
})


routes.get("/gallery",(req,res)=>{
    res.render("gallery")
})


module.exports=routes