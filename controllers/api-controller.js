"use strict";

const Todo = require("../models/todo.model");
const bodyParser = require("body-parser");

module.exports = function(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get("/api/todos", function(req, res, next) {
    Todo.find(req.query)
      .then(todos => {
        res.send(todos);
      })
      .catch(next);
  });

  app.post("/api/todos", function(req, res, next) {
    Todo.create(req.body)
      .then(todo => {
        res.send(todo);
      })
      .catch(next);
  });

  app.get("/api/todos/:id", function(req, res, next) {
    Todo.findById(req.params.id)
      .then(todo => {
        if (!todo) {
          throw new Error("Todo not found");
        }

        res.send(todo);
      })
      .catch(next);
  });

  app.post("/api/todos/:id", function(req, res, next) {
    Todo.updateOne({ _id: req.params.id }, req.body)
      .then(todo => {
        res.send("Todo succesfully updated");
      })
      .catch(next);
  });

  app.delete("/api/todos/:id", function(req, res, next) {
    Todo.deleteOne({ _id: req.params.id })
      .then(() => {
        res.send("Todo succesfully deleted");
      })
      .catch(next);
  });
};
