const mongoose = require("mongoose");

const URI = "mongodb+srv://Admin:Admin123@cluster0.89hhh.mongodb.net/hotel_reservation?retryWrites=true&w=majority"

const connectDB = async () => {
    await mongoose.connect(URI);
    console.log("Database Connected");
    
}

module.exports = connectDB;