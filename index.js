require("dotenv").config();
const mongoose = require('mongoose')
const express = require('express')
const app = express()

const db = mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    dbName: "FoodOrderingDB",
  })
  .catch((err) => console.log(err));
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(process.env.PORT, () => {
    console.log(`API listening on http://${process.env.IP}:${process.env.PORT}`);
  });