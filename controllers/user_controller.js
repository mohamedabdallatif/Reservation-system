const Reservation = require("../models/reservation");
const Room = require("../models/room");
const { validateReservation } = require("../services/validation");

//* mamdouh
async function make_reservation(req, res) {
    try {
        // extract data from request body
        const user_reservation = req.body;

        // validate the data according to joi validator
        const validationResult = validateReservation(user_reservation);
        if (validationResult.error) throw Error(validationResult.error);

        // if user forget to assign reservation date
        if (!user_reservation.time) user_reservation.time = Date.now();

        // check if there is any empty room
        const emptyRoom = await Room.findOne({ reserved: false });
        if (!emptyRoom) throw Error("There is no empty room !");
        user_reservation.roomId = emptyRoom._id;

        // create reservation
        const newReservation = await Reservation.create(user_reservation);
        if (!newReservation) throw Error("Couldn't make your reservation !");

        // mark the room as reserved
        emptyRoom.reserved = true;
        await emptyRoom.save();

        res.status(201).send(newReservation);
    } catch (error) {
        res.status(400).send(error);
    }
}

//* mamdouh
async function edit_reservation(req, res) {}

//* hesham
async function cancel_reservation(req, res) {}

//* mostafa
const getAllReservations = async (req, res) => {
    try {
        const allReservations = await Reservation.find({});
        res.status(200).send(allReservations);
    }catch(error){
        res.status(400).send(error);
    }
};


//* mostafa
const getReservationById = async(req, res) => {
    try {
        const oneReservation = await Reservation.findOne({_id: req.params.id});
        res.status(200).send(oneReservation);
    }catch(error){
        res.status(400).send(error);
    }
};

module.exports = {
    make_reservation,
    edit_reservation,
    cancel_reservation,
    getAllReservations,
    getReservationById,
};
