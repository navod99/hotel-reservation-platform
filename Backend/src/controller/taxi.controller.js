const Taxi = require("../models/taxi.model");

//Add Taxi
const addTaxi = async (req, res) => {
  const taxi = new Taxi(req.body);
  await taxi
    .save()
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send(err));
};

//View TaxiDetails
const viewTaxis = async (req, res) => {
    Taxi.find()
    .then((data)=>{res.send(data)})
}

//View TaxiDetails by ID
const getTaxisByUser = async (req, res) => {
    const id = req.params.id
    await Taxi.find({ UserId: id })
        .then((data) => { res.status(200).send(data) })
    .catch((err)=> console.log(err))
}

module.exports = {
    addTaxi,
    viewTaxis,
    getTaxisByUser,
};