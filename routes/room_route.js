const Router = require('express');
const roomRouter = Router();


const roomController = require('../controllers/room_controller');


roomRouter.post('/',roomController.addRoom);
roomRouter.get('/:id',roomController.getRoomById);
roomRouter.put('/:id',roomController.editRoom);
roomRouter.delete('/:id', roomController.deleteRoom);
roomRouter.get('/',roomController.getAllRooms);

module.exports={
    roomRouter,
};