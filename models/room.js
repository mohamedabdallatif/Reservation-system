const {Schema, model} = require("mongoose");

const roomScheme = new Schema({
    id: {
        type: String,
        unique: true,
        required: true,
    },
    type: {
        type: String,
        enum: ["single", "double","triple"],
        required: true,
        default: "single",
    },
    
    price: {
        type: Number,
        required: true,
    },
    reserved: {
        type: Boolean,
        default:false
    }
});

const Room = model("Room", roomScheme);

module.exports = Room;