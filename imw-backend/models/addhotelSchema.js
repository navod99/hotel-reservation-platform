const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const addhotelSchema = new Schema({

    roomname: {
        type: String,
        required: true,
    },
    occupants: {
        type: Number,
        required: true,
    },
    area: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    numberofrooms:{
        type: Number,
        required: true,
    },
    pricepernight:{
        type: Number,
        required: true,
    },
    hotelID: {
        type: String,
        required:true
    }


});

const Room = mongoose.model("Room", addhotelSchema)

module.exports = Room;