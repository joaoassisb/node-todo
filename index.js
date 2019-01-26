const express = require("express");
const app = express();
const mongoose = require("mongoose");

const apiController = require("./controllers/api-controller");

var port = process.env.PORT || 3000;

var mlab = process.env.MLAB_NODE_TODO || "";

if (!mlab) {
  throw new Error("Enviroment variable MLAB_NODE_TODO not defined");
}

mongoose.connect(
  mlab,
  { useNewUrlParser: true },
  function(err) {
    if (err) {
      throw new Error(err);
    }
    console.info("MongoDB is connected");
  }
);

app.use("/assets", express.static(__dirname + "/public"));

app.set("view engine", "ejs ");

apiController(app);

app.listen(port);

module.exports = app;
