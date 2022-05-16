const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const connectDB = require("./src/config/config");
const ReservationAPI = require('./src/api/reservation.api')
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

connectDB();
// app.use((ctx) => {
//     ctx.set('Content-Type', 'text/html');
//     ctx.body = '<h3>Note found</h3>';
//     ctx.status = 404;
// });

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });

app.use('/reservation',ReservationAPI())