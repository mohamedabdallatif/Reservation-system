const express = require("express");
const userRouter = require("./routes/user_route");
const adminRouter = require("./routes/admin_route");

const app = express();

app.use(express.json());
app.use("/api/users/", userRouter);
app.use("/api/admins/", adminRouter);

module.exports = app;