const Joi = require("joi");

function validateRoom(room) {
    const schema = Joi.object({
        type: Joi.string().min(2).required(),
    });
    return schema.validate(room);
}

function validateReservation(reservation) {
    const schema = Joi.object({
        title: Joi.string().min(2).required(),
        board: Joi.string().valid("none", "half", "full").required(),
        time: Joi.date().required(),
    });
    return schema.validate(reservation);
}

function validateEditReservation(editReservation) {
    const schema = Joi.object({
        board: Joi.string().valid("none", "half", "full"),
        time: Joi.date(),
    });
    return schema.validate(editReservation);
}

module.exports = {
    validateRoom,
    validateReservation,
    validateEditReservation,
};
