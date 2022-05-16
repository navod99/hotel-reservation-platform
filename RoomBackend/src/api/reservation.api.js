const express = require('express');
const router = express.Router();
const ReservationController = require('../Controller/Reservation.Controll.js')

module.exports = function (){
    router.post('/create', ReservationController.addReservation)
    router.get('/',ReservationController.viewReservations)
    console.log("api")
    return router
}