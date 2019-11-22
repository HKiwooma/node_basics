const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

// Schema defintion
const registrationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please Enter first name"]
  },
  lastName: String,
  emailAddress: {
    type: String,
    required: false
  },
  userName: {
    type: String,
    required: [true, "Please Enter User name"]
  },
  gender: String,
  country: String,
  city: String,
  password: {
    type: String,
    required: [true, "Please Enter password"]
  }
});

/* registrationSchema.add({
  
}); */
//hashing a password before saving it to the database pre-save hook
registrationSchema.pre('save',(next)=>{
  this.password=bcryptjs.hashSync(this.password,25)
  next()
})

module.exports = mongoose.model("registrationPost", registrationSchema);


