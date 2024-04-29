const { Reservation } = require('../models/reservation'); 

const getAllReservations = async (req, res) => {
    try {
        const allReservations = await Reservation.find({});
        res.status(200).send(allReservations);
    }catch(error){
        res.status(400).send(error);
    }
};



const getReservationById = async(req, res) => {
    try {
        const oneReservation = await Reservation.findOne({_id: req.params.id});
        res.status(200).send(oneReservation);
    }catch(error){
        res.status(400).send(error);
    }
};

module.exports = {
    getAllReservations,
    getReservationById
};