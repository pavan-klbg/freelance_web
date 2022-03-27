const { request, response } = require('express');
const express=require('express')
const hbs=require('hbs')
const mongoose=require("mongoose");
const Detail=require("./models/Detail")
const Slider=require('./models/Slider')

const app=express()

const routes=require("./routes/main")

app.use('/static',express.static("public"))
app.use('',routes)

// db connections

mongoose.connect("mongodb://localhost/website_tut",()=>{
    console.log("db connected")

//     Slider.create([
//     {
//         title:"Java is booming",
//         subTitle:"Used in most of projects",
//         imageUrl:"/static/images/slider1.jpg"

//     },
//     {
//         title:"sales force development",
//         subTitle:"Used in cutting edge tech stack",
//         imageUrl:"/static/images/slider2.jpg"

//     },
//     {
//         title:"azure learning platform",
//         subTitle:"cloud is the future",
//         imageUrl:"/static/images/slider3.jpg"

//     },

// ])






    Detail.updateMany({
        brandName:"Info solutins",
        brandIconUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEuH-xFs_K8oxhtjbKeA8caoHhvU1MjSQHcA&usqp=CAU",
        links:[
            {
            label:"Home",
            url:"/",
        },
        {
            label:"Service",
            url:"/services"
        },
        {
            label:"About",
            url:"/about"
        },
        {
            label:"ContactUs",
            url:"/contact"
        },
        {
            label:"Gallary",
            url:"/gallary"
        }
    ]
    })
})
// setting template engine

app.set("view engine",'hbs')
app.set("views","views")
hbs.registerPartials("views/partials")

app.get("/home",(request,response)=>{
response.send("welcome ")
})


app.listen(process.env.PORT | 3333,()=>{
    console.log("server start")
});