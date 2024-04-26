const {Schema, model} = require("mongoose");

const roomScheme = new Schema({
    id: {
        type: String,
        unique: true,
        required: true,
    },
    type: {
        enum: ["single", "double"],
        required: true,
        default: "single",
    },
    price: {
        type: Number,
        required: true,
    }
});

const Room = model("Room", roomScheme);

module.exports = Room;