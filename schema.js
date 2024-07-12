const mongoose =require('mongoose')

const schema = mongoose.Schema({
 title:{
    type:String,
    required:true
 },
 description:{
    type:String
 }, url:{
   type:String
       }
   

})

const keep = mongoose.model("Keeper",schema)
module.exports = keep