const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/"

const connectToMongo = async()=>{
mongoose.connect(mongoURI).then(()=>console.log("Connected to Mongo Successfully")).catch((e)=>console.log(e.message))
}

module.exports = connectToMongo;