const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const CustomerRoute = require("./routes/customer.route");
const StateRoute = require("./routes/states.route");

const app = express();
const port = 8080;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/customers", CustomerRoute);
app.use("/api/states", StateRoute);

app.listen(port, () => {
  console.log(`Samla API listening at http://localhost:${port}`);
});

mongoose
  .connect(
    "mongodb+srv://sanricaardo:qT5f2suruBtnstIE@bedatabase.wzhja.mongodb.net/main?retryWrites=true&w=majority&appName=BEDataBase"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(() => {
    console.log("Connection Failed!");
  });
