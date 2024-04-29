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
        board: Joi.string().valid('none', 'half', 'full').required(),
    });
    return schema.validate(reservation);
}

module.exports = {
    validateRoom,
    validateReservation,
};
