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
const getReservationsByUser = async (req, res) => {
    const id = req.params.id
    await Reservation.find({ UserId: id })
        .then((data) => { res.status(200).send(data) })
    .catch((err)=> console.log(err))
}
const deleteReservation = async (req, res) => {
    const id = req.params.id
    console.log(id)
    await Reservation.findByIdAndDelete( req.params.id )
        .then(() => { res.status(200).send("Deleted") })
    .catch((err)=>console.log(err))
}
module.exports = {
    addReservation,
    viewReservations,
    getReservationsByUser,
    deleteReservation
};
