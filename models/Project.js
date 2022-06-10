const mongoose = require("mongoose"); // Erase if already required
// Declare the Schema of the Mongo model
const mongoosePaginate = require("mongoose-paginate-v2");
const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  demo: {
    type: String,
  },
  github: {
    type: String,
  },
  description: {
    type: String,
  },

  tools: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
//Export the model
projectSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Project", projectSchema);
