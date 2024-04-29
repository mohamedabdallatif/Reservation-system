const express = require("express");
const { roomRouter } = require("./routes/room_route");
// const { userRouter } = require("./routes/user_route");

const app = express();
app.use(express.json());
app.use("/api/rooms/", roomRouter);
// app.use("/api/user/", userRouter);



module.exports = {
    app,
};
