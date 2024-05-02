const Reservation = require("../models/reservation");
const Room = require("../models/room");

//* hesham
async function view_all_rooms(req, res) {
    try {
        // Find all rooms
        const allRooms = await Room.find();
        res.status(200).send(allRooms);
    } catch (error) {
        res.status(400).send(error);
    }

//* michael
async function get_room_details(req, res) {
    try {
        const roomDetails = await Room.findOne({
            _id: req.params.id,
        });
        if (!roomDetails) return res.status(404).send("Room not found");
        res.status(200).send(roomDetails);
    } catch (error) {
        res.status(400).send(error);
    }
}

//* michael
async function edit_room_details(req, res) {
    try {
        const roomDetails = await Room.findOne({
            _id: req.params.id,
        });
        if (!roomDetails) {
            return res.status(404).send("Room not found");
        }
        if (req.body.type) roomDetails.type = req.body.type;
        ء;
        if (req.body.price) roomDetails.price = req.body.price;
        if (req.body.reserved) roomDetails.reserved = req.body.reserved;

        await roomDetails.save();
        res.status(200).send(roomDetails);
    } catch (error) {
        res.status(400).send(error);
    }
}

//* michael
async function empty_room(req, res) {
    try {
        const roomDetails = await Room.findOne({
            _id: req.params.id,
        });
        if (!roomDetails) {
            return res.status(404).send("Room not found");
        }
        roomDetails.reserved = false;
        await roomDetails.save();
        res.status(200).send(roomDetails);
    } catch (error) {
        res.status(400).send(error);
    }
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
    get_reservation,
};
