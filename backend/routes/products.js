const express = require("express");
const { Product } = require("../models/product");
const axios = require("axios");

const router = express.Router();

//Get all Method
router.get("/", async (req, res) => {
  const data = await Product.find();
  if (!data) return res.status(404).send("cannot find");
  res.json(data);
});

router.get("/:id", async (req, res) => {
  const response = await axios.get(
    `https://www.course-api.com/react-store-single-product?id=${req.params.id}`
  );
  if (!response.data)
    return res.status(404).send("The product with the given ID was not found.");
  res.send(response.data);
});

module.exports = router;
