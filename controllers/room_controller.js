const { rooms } = require("../models/room");
const { validateRoom } = require("../helpers/validation");

const getRoomById = (req, res) => {
    const room = rooms.find((r) => r.id === parseInt(req.params.id));
    if (!room) {
        res.status(404).send("The room with the given Id not found");
    } else {
        res.send(room);
    }
};

const addRoom = (req, res) => {
    console.log(req.body);
    const result = validateRoom(req.body);
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        console.log(result);
        return;
    }
    const room = {
        id: rooms.length + 1,
        type: req.body.type,
    };
    rooms.push(room);
    res.send(room);
};

const editRoom = (req, res) => {
    const room = rooms.find((r) => r.id === parseInt(req.params.id));
    if (!room) {
        res.status(404).send("The room with the given Id not found");
    }

    const result = validateRoom(req.body);

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        console.log(result);
        return;
    }
    room.type = req.body.name;
    res.send(room);
};

const deleteRoom = (req, res) => {
    const room = rooms.find((r) => r.id === parseInt(req.params.id));
    if (!room) {
        res.status(404).send("The room with the given Id not found");
    }
    const index = rooms.indexOf(room);
    rooms.splice(index, 1);
    res.send(room);
};

const getAllRooms = (req, res) => {
    const roomsList = rooms;
    if (roomsList.length == 0)
        res.status(200).send({
            message: "There is no reserved rooms",
        });
    res.status(200).send(roomsList);
};

module.exports = {
    getRoomById,
    addRoom,
    editRoom,
    deleteRoom,
    getAllRooms,
};
