const { required } = require("joi");
const { Schema, model } = require("mongoose");

const reservationScheme = new Schema({
    title: {
        type: String,
        required: true,
    },
    time: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    board: {
        type: String,
        required: true,
        default: "none",
    },
    roomId: {
        type: String,
        required: true,
    },
});

const Reservation = model("Reservation", reservationScheme);

module.exports = Reservation;
