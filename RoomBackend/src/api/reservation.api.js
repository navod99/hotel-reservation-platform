const express = require('express');
const router = express.Router();
const ReservationController = require('../Controller/Reservation.Controll.js')

module.exports = function (){
    router.post('/create', ReservationController.addReservation)
    router.get('/', ReservationController.viewReservations)
    router.get('/user/:id', ReservationController.getReservationsByUser)
    router.delete('/delete/:id', ReservationController.deleteReservation)
    router.put('/Edit/:id',ReservationController.updateResrvation)
    console.log("api")
    return router
}