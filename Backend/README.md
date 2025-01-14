# UBER Project

## Overview

This project is a backend service for a ride-sharing application similar to Uber. It includes user registration, login, profile management, and token-based authentication.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Models](#models)
- [Middleware](#middleware)
- [Database](#database)
- [License](#license)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/uber-project.git
    ```
2. Navigate to the project directory:
    ```bash
    cd uber-project/Backend
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Create a `.env` file and add your environment variables:
    ```env
    PORT=3000
    DB_CONNECT=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

## Usage

1. Start the server:
    ```bash
    npm start
    ```
2. The server will be running on `http://localhost:3000`.

## API Endpoints

### User Routes

- **Register a new user**
    ```http
    POST /register
    ```
    Request Body:
    ```json
    {
        "firstname": "John",
        "lastname": "Doe",
        "email": "john.doe@example.com",
        "password": "password123"
    }
    ```

- **Login a user**
    ```http
    POST /login
    ```
    Request Body:
    ```json
    {
        "email": "john.doe@example.com",
        "password": "password123"
    }
    ```

- **Get user profile**
    ```http
    GET /profile
    ```
    Headers:
    ```http
    Authorization: Bearer <token>
    ```

- **Logout a user**
    ```http
    GET /logout
    ```
    Headers:
    ```http
    Authorization: Bearer <token>
    ```

## Models

### User Model

Defined in `models/user.model.js`:
```javascript
// ...existing code...
const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "First name must be 3 characters long"],
    },
    lastname: {
      type: String,
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
    select: false,
  },
  socketId: {
    type: String,
  },
});
// ...existing code...
```

### Blacklist Token Model

Defined in `models/blacklistToken.model.js`:
```javascript
// ...existing code...
const blacklistTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400,
  },
});
// ...existing code...
```

## Middleware

### Authentication Middleware

Defined in `middlewares/auth.middleware.js`:
```javascript
// ...existing code...
module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const isBlacklisted = await userModel.findOne({ token: token });

  if (isBlacklisted) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);

    req.user = user;

    return next();
  } catch {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
```

## Database

### Connection

Defined in `db/db.js`:
```javascript
// ...existing code...
function connectToDb() {
  mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => console.log(err));
}
// ...existing code...
```

## License

This project is licensed under the MIT License.
