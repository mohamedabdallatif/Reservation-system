const { Schema, model } = require("mongoose");

const reservationScheme = new Schema({
    id: {
        type: String,
        unique: true,
        required: true,
    },
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
        enum: ["none", "half", "full"],
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
