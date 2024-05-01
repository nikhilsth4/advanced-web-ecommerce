const mongoose = require("mongoose");
const Joi = require("joi");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true, // Ensure uniqueness of the email field
  },
});

function validateUser(user) {
  const schema = {
    userId: Joi.required(),
  };
  return Joi.validate(user, schema);
}

const User = mongoose.model("User", userSchema);

exports.User = User;
exports.validate = validateUser;
