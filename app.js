const express = require("express");
<<<<<<< Updated upstream
const app = express();
app.use(express.json());
=======
const { roomRouter } = require("./routes/room_route");
const { reservationRouter } = require("./routes/user_route");

const app = express();
app.use(express.json());
app.use("/api/rooms/", roomRouter);
app.use("/api/user/", reservationRouter);


>>>>>>> Stashed changes

const {roomRouter}=require('./routes/room_route')
app.use('/api/rooms/',roomRouter);
module.exports={
    app
}