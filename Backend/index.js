const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const connectDB = require("./src/config/config");
const UserAPI = require("./src/api/user.api");
const HotelAPI = require("./src/api/hotel.api");
const TaxiAPI = require("./src/api/taxi.api");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());


connectDB();

app.use("/user", UserAPI());
app.use("/hotel", HotelAPI);
app.use("/taxi", TaxiAPI());


app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });
