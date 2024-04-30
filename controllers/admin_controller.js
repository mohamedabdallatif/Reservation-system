const Reservation = require("../models/reservation");
//* hesham
async function view_all_rooms(req, res) {
    
}

//* michael
async function get_room_details(req, res) {
    
}

//* michael
async function edit_room_details(req, res) {
    
}

//* michael
async function empty_room(req, res) {
    
}

//* tifa
async function view_all_reservations(req, res) {
    try {
        const allReservations = await Reservation.find();
        res.status(200).send(allReservations);
    } catch (error) {
        res.status(400).send(error);
    }
}

//* tifa
async function get_reservation(req, res) {
    try {
        const oneReservation = await Reservation.findOne({
            _id: req.params.id,
        });
        res.status(200).send(oneReservation);
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = {
    view_all_rooms,
    get_room_details,
    edit_room_details,
    empty_room,
    view_all_reservations,
    get_reservation
}