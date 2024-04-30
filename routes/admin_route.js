const express = require("express");
const adminRouter = express.Router();
const adminController = require("../controllers/admin_controller");

adminRouter.get("/", adminController.view_all_reservations);
adminRouter.get("/:id", adminController.get_reservation);


module.exports = adminRouter;
