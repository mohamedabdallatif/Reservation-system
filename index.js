const mongoose = require("mongoose");
const { app } = require("./app");
const {connectionUrl} = require('./services/dbconfig');

const port = process.env.PORT || 3000;

app.listen(port, async () => {
    const connectionResult = await mongoose.connect(connectionUrl);
    if (connectionResult == null) return console.log('Cannot connect to MongoDB!');
    console.log(`Connected Successfully to Mongo Database ! listening on localhost:${port} ...`)
});
