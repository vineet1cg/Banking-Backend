const mongoose = require('mongoose');

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB CONNECTED 🗿");
    }catch(e){
        console.log("DB ERROR  ", e);
        process.exit(1)
    }
}

module.exports = connectDB;