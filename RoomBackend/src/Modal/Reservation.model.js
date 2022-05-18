const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
    UserId: { type: String, required: false },
    HotelId:{type:String, required:false},
    AdultCount: { type: String, required: false },
    ChildCount: { type: String, required: false },
    CheckinDate: { type: String, required: false },
    ChekoutDate: { type: String, required: false },
    numberOfRooms:{type:String,required:false}
})

const reservation = mongoose.model('reservation', ReservationSchema);
module.exports = reservation;