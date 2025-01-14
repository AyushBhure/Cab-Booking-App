const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "First name must be 3 characters long"],
    },
    Lasttname: {
      type: String,
      // required: true,
      minlength: [3, "Last name must be 3 characters long"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, "Email must be 5 characters long"],
  },
  password: {
    type: String,
    required: true,
    Select: false,
  },
  socketId: {
    type: String,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
  return token;
};

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashpassword = async function (password) {
  return await bcrypt.hash(password, 10);
}; 

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;

