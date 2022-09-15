const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var visitorSchema = new mongoose.Schema({
  //avatar

  IP: {
    type: String,
  },
  city: {
    type: String,
  },
  country_code: {
    type: String,
  },
  country_name: {
    type: String,
  },
  latitude: {
    type: String,
  },
  longitude: {
    type: String,
  },
  postal: {
    type: String,
  },
  state: {
    type: String,
  },
},{timestamps:true});

//Export the model
module.exports = mongoose.model("Visitor", visitorSchema);
