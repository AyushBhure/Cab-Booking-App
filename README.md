# Cab Booking App
This project is a clone of the Uber application, built with a React frontend and a Node.js backend. It includes user and captain (driver) functionalities, allowing users to book rides and captains to manage rides.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and authorization
- Captain (driver) authentication and authorization
- Booking rides
- Viewing ride details
- Managing ride status
- Real-time updates using WebSockets

## Technologies Used

### Frontend

- React
- Tailwind CSS
- GSAP (GreenSock Animation Platform)
- Axios
- React Router

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- bcrypt

## Installation

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/uber-clone.git
    cd uber-clone
    ```

2. Install dependencies for both frontend and backend:

    ```bash
    # Navigate to the backend directory and install dependencies
    cd Backend
    npm install

    # Navigate to the frontend directory and install dependencies
    cd ../Frontend
    npm install
    ```

3. Create a `.env` file in the `Backend` directory and add the following environment variables:

    ```env
    DB_CONNECT=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    PORT=3000
    ```

4. Start the backend server:

    ```bash
    cd Backend
    npm start
    ```

5. Start the frontend development server:

    ```bash
    cd ../Frontend
    npm run dev
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000` to access the application.
2. Sign up as a user or captain.
3. Log in to your account.
4. As a user, you can book rides and view ride details.
5. As a captain, you can manage rides and update ride status.

## Project Structure

```
uber-clone/
├── Backend/
│   ├── controllers/
│   ├── db/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── app.js
│   ├── server.js
│   └── package.json
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .gitignore
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
└── README.md
```

## API Endpoints

### User Endpoints

- **POST /users/register**: Register a new user
- **POST /users/login**: Login a user
- **GET /users/profile**: Get user profile (requires authentication)
- **GET /users/logout**: Logout a user (requires authentication)

### Captain Endpoints

- **POST /captains/register**: Register a new captain
- **POST /captains/login**: Login a captain
- **GET /captains/profile**: Get captain profile (requires authentication)
- **GET /captains/logout**: Logout a captain (requires authentication)


