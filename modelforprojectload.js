const mongoose =require('mongoose')

const project = mongoose.Schema({
 name:{
    type:String,
    required:true
 },
 githublink:{
    type:String
 }
   

})

const projec = mongoose.model("Projectkeeper",project)
module.exports = projec