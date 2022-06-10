// about schema

const mongoose = require("mongoose"); // Erase if already required
// Declare the Schema of the Mongo model
const aboutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  portfolio_title: {
    type: String,
  },
  portfolio_welcome: {
    type: String,
  },
  message: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
//Export the model
module.exports = mongoose.model("About", aboutSchema);
