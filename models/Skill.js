//Skills model schema
const mongoose = require("mongoose"); // Erase if already required
// Declare the Schema of the Mongo model
const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  percentage: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
//Export the model
module.exports = mongoose.model("Skill", skillSchema);
