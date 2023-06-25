require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT;
const roomsRoute = require("./route/roomsRoute");
const usersRoute = require("./route/usersRoute");
const bookingsRoute = require("./route/bookingsRoute");
app.use(express.json());
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);
app.use("/api/bookings", bookingsRoute);
//database
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("COnnected to the adatbase");
    app.listen(port, () => {
      console.log(" Listening to port " + port);
    });
  } catch (e) {
    console.log(e, "errrorr==============================");
  }
};
connectDb();
