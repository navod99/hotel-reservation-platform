const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema({
    hotelName: { type: String },
    title: { type: String },
    district: { type: String },
    description: { type: String },
    image:{type: String},
    firstName: { type: String},
    lastName: { type: String},
    email: { type: String},
    type: { type: String},
    password: {type:String}
});

const HotelDetail = mongoose.model('hoteldetail', HotelSchema);
module.exports = HotelDetail;