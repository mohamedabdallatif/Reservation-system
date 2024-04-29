const express = require('express');
const reservationRouter = express.Router(); 

const userController = require('../controllers/user_controller');


// get all user reservation 
reservationRouter.get('/', userController.getAllReservations);

// get user reservation by id 
reservationRouter.get('/:id', userController.getReservationById);


module.exports={
    reservationRouter
};