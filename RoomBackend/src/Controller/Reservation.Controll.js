const Reservation = require("../Modal/Reservation.model");
console.log("hugu")
const addReservation = async (req, res) => {
    console.log("Controll")
  const reservation = new Reservation(req.body);
  await reservation
    .save()
    .then((data) => res.status(200).send(data))
    .catch((err) => res.send(err));
};
const viewReservations = async (req, res) => {
    Reservation.find()
    .then((data)=>{res.send(data)})
}
module.exports = {
    addReservation,
    viewReservations
};
