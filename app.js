const express = require("express");
const app = express();
app.use(express.json());

const {roomRouter}=require('./routes/room_route')
app.use('/api/rooms/',roomRouter);
module.exports={
    app
}