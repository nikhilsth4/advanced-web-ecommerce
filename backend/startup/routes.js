const express = require("express");
const products = require("../routes/products");
const orders = require("../routes/orders");
const users = require("../routes/users");
const error = require("../middleware/error");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/products", products);
  app.use("/api/orders", orders);
  app.use("/api/users", users);
  app.use(error);
};
