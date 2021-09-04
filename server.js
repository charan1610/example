const express=require('express');
const app = express();
const mongoose=require('mongoose');
app.listen(3000,(req,res)=>{
    console.log("app is running on port number 3000");
})
app.get('/',async(req,res)=>{
    try{
        res.send("hello node js")
    }catch(err){
        res.status(400).send("internal server error");
    }
})
mongoose.connect('mongodb://localhost:27017',{useNewUrlParser},(err,res)=>{
    if(err){
        console.log("db connection is fail")
    }else{
        console.log("db connection is sucessful")
    }
})
