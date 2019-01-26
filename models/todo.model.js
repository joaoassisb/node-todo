"use strict";

const mongoose = require("mongoose");

const { Schema } = mongoose;

const todoSchema = new Schema({
  username: String,
  description: String,
  isDone: Boolean,
  hasAttachment: Boolean
});

module.exports = mongoose.model("Todo", todoSchema, "todos");
