const {rooms} = require('../models/room');
const {validateRoom} = require('../helpers/validation');

const addRoom = (req,res)=>{
  console.log(req.body);
    const result = validateRoom(req.body);
  if(result.error){
    res.status(400).send(result.error.details[0].message);
    console.log(result);
    return;
  }
  const room = {
    id:rooms.length+1,
    type:req.body.type
  };
  rooms.push(room);
  res.send(room);
};

module.exports = {
    addRoom
}