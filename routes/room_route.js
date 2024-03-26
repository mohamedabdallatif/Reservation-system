const Router = require('express');
const roomRouter = Router();


const roomController = require('../controllers/room');


roomRouter.post('/',roomController.addRoom);


module.exports={
    roomRouter,
};