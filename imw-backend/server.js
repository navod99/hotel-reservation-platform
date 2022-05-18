const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require ("dotenv").config();
const app = express();



const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());

const MONGODB_URL = 'mongodb+srv://Admin:Admin123@cluster0.89hhh.mongodb.net/hotel_reservation?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URL)
.then(() => {
    console.log('DB Connected');
})
.catch((err) => console.log('DB connection Unsuccessful',err));


app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
  });

  const hotelRouter = require("./routes/addHotel");

  app.use("/hotel", hotelRouter);


