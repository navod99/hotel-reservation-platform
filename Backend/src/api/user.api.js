const express = require('express');
const router = express.Router();
const UserController = require('../controller/user.controller.js');

module.exports = function (){
    router.post('/create', UserController.createUser);
    
    return router;
}