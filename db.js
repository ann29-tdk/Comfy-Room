const mongoose = require("mongoose");

var mongoDBURL = 'mongodb+srv://test-anurag:test123@cluster0.g2tqnwo.mongodb.net/comfyRooms';

mongoose.connect(mongoDBURL , {useUnifiedTopology:true , useNewUrlParser:true})

var dbconnect = mongoose.connection

dbconnect.on('error' , ()=>{
    console.log(`Mongo DB Connection Failed`);
})

dbconnect.on('connected' , ()=>{
    console.log(`Mongo DB Connection Successfull`);
})

module.exports = mongoose
