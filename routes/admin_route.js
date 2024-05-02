const express = require("express");
const adminRouter = express.Router();
const adminController = require("../controllers/admin_controller");

adminRouter.get("/", adminController.view_all_reservations);
adminRouter.get("/:id", adminController.get_reservation);

adminRouter.get("/:id", adminController.get_room_details);
adminRouter.put("/:id", adminController.edit_room_details);
adminRouter.put("/:id", adminController.empty_room);

module.exports = adminRouter;
