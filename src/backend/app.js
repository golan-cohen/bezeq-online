const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const app = express();

mongoose
 .connect("mongodb+srv://golanco99:r2ciWydJYKSIN5ju@cluster0.mo519.mongodb.net/bezeq-online?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
 })
 .then((db) => console.log("db is connected"))
 .catch((err) => console.log(err));



  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization "
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT , DELETE, OPTIONS"
  );
  next();
});

app.use("/api" ,userRoutes);

module.exports = app;
