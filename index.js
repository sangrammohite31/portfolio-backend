
const express = require('express')
const cors = require("cors");
const axios = require("axios")
const mongoose = require('mongoose')
const project = require("./modelforprojectload")
const mngo = require("./mong")
const schema =  require("./schema");
const port = process.env.PORT ||3000;
const app = express();
app.use(express.urlencoded());
app.use(express.json());
app.use(cors({
    origin: 'https://sangram-portfolio.vercel.app',
  }));

app.get('/api/get',async(req,res)=>{

    const data = await schema.find();
    res.json(data);
})

app.get('/project/get',async(req,res)=>{
    const dat = await project.find();
    res.json(dat);
})
app.post('/project/add',async(req,res)=>{
    const {name,githublink}=req.body;

    let data = new project({name:name,githublink:githublink});
    data= await data.save();
    res.json({"data":"project add succesffuly"})
})
app.post('/api/post',async(req,res)=>{
try{
    const{title,description,url}= req.body;
    let data =new schema({title:title,description:description,url:url});
    data = await data.save();
    res.json({"data":"successfully added"})
}catch(e){
    console.log("mfasnjf")
    res.json({"data":"sangram"})
}
    
})


app.listen(port,()=>{
    console.log("listening sucessfulllyy prot")
})


