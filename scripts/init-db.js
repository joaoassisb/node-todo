"use strict";

require("../index");

const Todo = require("../models/todo.model");

const todos = [
  {
    username: "teste",
    description: "1",
    isDone: false,
    hasAttachment: false
  },
  {
    username: "teste",
    description: "1",
    isDone: false,
    hasAttachment: false
  },
  {
    username: "teste",
    description: "1",
    isDone: false,
    hasAttachment: false
  }
];

return Todo.find()
  .then(res => {
    if (res.length > 0) {
      console.log("Todos alreaty exists");
      return;
    }

    return Todo.create(todos).then(() => {
      if (err) {
        throw new Error("Couldn´t create todos");
      }

      console.log("Todos successfully created");
      return todos;
    });
  })
  .then(process.exit);
