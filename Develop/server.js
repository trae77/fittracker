const express = require("express");

const mongoose = require("mongoose");

const routes = require('./routes');
const path = require("path");

const PORT = process.env.PORT || 8080;

const app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI ||
    // "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false", 
    "mongodb://localhost/workout",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

app.use(routes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});