const mongoose = require("mongoose");

// Schema defintion
const registrationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: "Please Enter first name"
  },
  lastName: String,
  emailAddress: {
    type: String,
    required: true
  },
  gender: String,
  country: String,
  city: String
});

module.exports = mongoose.model("registrationPost", registrationSchema);
