const express = require('express');
const router = express.Router();
const TaxiController = require('../controller/taxi.controller.js')

module.exports = function (){
    router.post('/create', TaxiController.addTaxi)
    router.get('/', TaxiController.viewTaxis)
    router.get('/user/:id', TaxiController.getTaxisByUser)
    // router.delete('/delete/:id', ReservationController.deleteReservation)
    // router.put('/Edit/:id',ReservationController.updateResrvation)
    // console.log("api")
    return router
}