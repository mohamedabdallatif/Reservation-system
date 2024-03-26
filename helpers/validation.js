const Joi = require("joi");

function validateRoom (room) {
    const schema = Joi.object({
        type: Joi.string().min(1).required()
      });
      return schema.validate(room); 
}
module.exports={
    validateRoom,
};