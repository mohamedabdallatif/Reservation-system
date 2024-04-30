const Room = require("../models/room");
const Reservation = require("../models/reservation");
const {
    validateReservation,
    validateEditReservation,
} = require("../services/validation");

//* mamdouh
async function make_reservation(req, res) {
    try {
        // extract data from request body
        const userReservation = {
            title: req.body.title,
            board: req.body.board,
            time: req.body.time ?? Date.now(),
        };

        // validate the data according to joi validator
        const validationResult = validateReservation(userReservation);
        if (validationResult.error)
            return res.status(400).send({
                error: validationResult.error,
            });

        // check if there is any empty room
        const emptyRoom = await Room.findOne({ reserved: false });
        if (!emptyRoom)
            return res.status(400).send({
                error: "There is no empty room !",
            });
        userReservation.roomId = emptyRoom._id;

        // create reservation
        const newReservation = await Reservation.create(userReservation);
        if (!newReservation)
            return res.status(400).send({
                error: "Couldn't make your reservation !",
            });

        // mark the room as reserved
        emptyRoom.reserved = true;
        await emptyRoom.save();

        res.status(201).send(newReservation);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

//* mamdouh
async function edit_reservation(req, res) {
    try {
        // search for reservation with title in req.params
        const user_reservation = await Reservation.findOne({
            title: req.params.title,
        });
        if (!user_reservation)
            return res.status(400).send({
                error: "The reservation with the given title not found",
            });

        // validate new values in req.body
        const validationResult = validateEditReservation(req.body);
        if (validationResult.error)
            return res.status(400).send({
                error: validationResult.error,
            });
        
        // update values by req.body
        user_reservation.time = req.body.time ?? user_reservation.time;
        user_reservation.board = req.body.board ?? user_reservation.board;
        await user_reservation.save();

        res.status(200).send(user_reservation);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

//* hesham
async function cancel_reservation(req, res) {}

//* mostafa
async function get_all_reservations(req, res) {
    try {
        const allReservations = await Reservation.find();
        res.status(200).send(allReservations);
    } catch (error) {
        res.status(400).send(error);
    }
}

//* mostafa
async function get_reservation_details(req, res) {
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
    make_reservation,
    edit_reservation,
    cancel_reservation,
    get_all_reservations,
    get_reservation_details,
};
