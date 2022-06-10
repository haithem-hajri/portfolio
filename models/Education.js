// Education schema
const mongoose = require("mongoose"); // Erase if already required
// Declare the Schema of the Mongo model
const educationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  establishment: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
//Export the model
module.exports = mongoose.model("Education", educationSchema);
