const express = require("express");
const adminRouter = express.Router();
const adminController = require("../controllers/admin_controller");

adminRouter.get("/reservations", adminController.view_all_reservations);
adminRouter.get("/rooms", adminController.view_all_rooms);

adminRouter.get("/reservation/details/:id", adminController.get_reservation);
adminRouter.get("/room/details/:id", adminController.get_room_details);

adminRouter.put("/room/edit/:id", adminController.edit_room_details);
adminRouter.put("/room/empty/:id", adminController.empty_room);


module.exports = adminRouter;