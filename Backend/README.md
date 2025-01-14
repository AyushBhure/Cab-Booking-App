```

# User Registration Feature

This document provides a step-by-step guide to set up and use the user registration feature in the project.

## Prerequisites

- Node.js installed
- MongoDB installed and running
- Environment variables set up (`JWT_SECRET`)

## File Structure

- `services/user.service.js`
- `routes/user.routes.js`
- `models/user.model.js`
- `controllers/user.controller.js`

## Step-by-Step Guide

### 1. User Service

The `user.service.js` file contains the logic for creating a new user.

```javascript
const userModel = require("../models/user.model");

module.exports.createUser = async ({
  firstname,
  lastname,
  email,
  password,
}) => {
  if (!firstname || !email || !password) {
    throw new Error("All fields are required");
  }
  const user = userModel({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
  });
  return user;
};
```

### 2. User Routes

The `user.routes.js` file defines the route for user registration.

```javascript
// filepath: /c:/Users/ayush bhure/OneDrive/Desktop/PROJECTS/UBER/Backend/routes/user.routes.js
const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const usercontroller = require("../controllers/user.controller");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  usercontroller.registeruser
);

module.exports = router;
```

### 3. User Model

The `user.model.js` file defines the user schema and methods.

```javascript
// filepath: /c:/Users/ayush bhure/OneDrive/Desktop/PROJECTS/UBER/Backend/models/user.model.js
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
```

### 4. User Controller

The `user.controller.js` file handles the registration logic.

```javascript
// filepath: /c:/Users/ayush bhure/OneDrive/Desktop/PROJECTS/UBER/Backend/controllers/user.controller.js
const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");

module.exports.registeruser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password } = req.body;

  const hashedPassword = await userModel.hashpassword(password);

  const user = await userService.createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
  });
  const token = user.generateAuthToken();

  res.status(201).json({ user, token });
};
```

## Running the Application

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

3. Make a POST request to `/register` with the following JSON body:
   ```json
   {
     "fullname": {
       "firstname": "John",
       "lastname": "Doe"
     },
     "email": "john.doe@example.com",
     "password": "password123"
   }
   ```

4. If successful, you will receive a response with the user details and a JWT token.

## Sample Example

Here is a sample example using `curl` to register a new user:

```bash
curl -X POST http://localhost:3000/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}'
```

If the registration is successful, you will receive a response similar to this:

```json
{
  "user": {
    "_id": "60c72b2f9b1d8c001c8e4b8e",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36Zf4z6WqF4J6z6WqF4J6z6",
    "socketId": null,
    "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```
