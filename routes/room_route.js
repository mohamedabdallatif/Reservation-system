const Router = require('express');
const roomRouter = Router();


const roomController = require('../controllers/room');


roomRouter.post('/',roomController.addRoom);
roomRouter.get('/:id',roomController.getRoomById);
roomRouter.put('/:id',roomController.editRoom);

module.exports={
    roomRouter,
};