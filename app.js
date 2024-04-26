const express = require("express");
const { roomRouter } = require("./routes/room_route");

const app = express();
app.use(express.json());
app.use("/api/rooms/", roomRouter);

module.exports = {
    app,
};
