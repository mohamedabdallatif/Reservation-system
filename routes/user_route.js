const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/user_controller");

// make/book new reservation
userRouter.post("/", userController.make_reservation);

// edit/update reservation
userRouter.put("/:title", userController.edit_reservation);

// get all user reservation
userRouter.get("/", userController.get_all_reservations);

// get user reservation by id
userRouter.get("/:id", userController.get_reservation_details);

module.exports = userRouter;
