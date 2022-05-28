const mongoose = require("mongoose");

const TaxiSchema = new mongoose.Schema({
    city: { type: String, required: false },
    address: { type: String, required: false },
    vehicleType: { type: String, required: false },
    no: { type: String, required: false }
});

const taxi = mongoose.model('taxidetails', TaxiSchema);
module.exports = taxi;