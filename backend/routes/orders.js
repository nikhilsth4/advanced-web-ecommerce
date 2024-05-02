const express = require("express");
const { Order } = require("../models/order");
const { User } = require("../models/user");
const router = express.Router();

const getUserId = async (userId) => {
  let user = await User.findOneAndUpdate(
    { userId },
    { userId },
    { new: true, upsert: true }
  );
  return user;
};

router.get("/", async (req, res) => {
  try {
    const orders = await Order.find({});
    if (!orders) return res.status(404).send("cannot find");
    res.status(201).send(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const userId = await getUserId(req.params.userId);
    const orders = await Order.find({ user: userId._id });
    if (!orders) return res.status(404).send("cannot find");
    res.status(201).send(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    // Extract data from the request body
    const { user, products, totalAmount, shippingAddress, paymentMethod } =
      req.body.order;

    const userId = await getUserId(user);
    // Create a new order document
    const order = new Order({
      user: userId._id,
      products,
      totalAmount: totalAmount,
      shippingAddress: String(shippingAddress),
      paymentMethod,
    });

    // Save the order to the database
    await order.save();

    // Respond with the created order
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
