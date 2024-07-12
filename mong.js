const express = require('express')
const mongoose = require('mongoose')

const db = 'mongodb+srv://sangram31200431:eRKUPPUVPdkCLlDw@cluster0.dpxxpx3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'


const mongo = mongoose.connect(db).then(()=>{
    console.log("Connected to Databasee successfully")
})

module.exports = mongo;