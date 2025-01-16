import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });
    console.log(userData);

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };

  return (
    <>
      <div className="p-6 h-screen flex flex-col justify-between bg-gray-50">
        <div className="flex justify-center mb-10">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt="Uber Logo"
            className="h-8"
          />
        </div>

        <form
          onSubmit={submitHandler}
          className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            What's your name
          </h3>
          <div className="flex gap-4 mb-4">
            <input
              required
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              type="text"
              placeholder="First Name"
              className="bg-gray-100 rounded px-3 py-2 border w-1/2 text-gray-700 placeholder-gray-400"
            />
            <input
              required
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              type="text"
              placeholder="Last Name"
              className="bg-gray-100 rounded px-3 py-2 border w-1/2 text-gray-700 placeholder-gray-400"
            />
          </div>

          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            What's your email
          </h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="email@example.com"
            className="bg-gray-100 mb-4 rounded px-3 py-2 border w-full text-gray-700 placeholder-gray-400"
          />

          <h3 className="text-lg font-semibold mb-4 text-gray-700">Password</h3>
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Enter your password"
            className="bg-gray-100 mb-6 rounded px-3 py-2 border w-full text-gray-700 placeholder-gray-400"
          />

          <button className="bg-black text-white font-semibold rounded px-4 py-2 w-full hover:bg-gray-800">
            Sign Up
          </button>

          <p className="text-center mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login here
            </Link>
          </p>
        </form>

        <div className="mt-6 w-full max-w-md mx-auto text-xs text-gray-600 text-center">
          <p>
            This site is protected by reCAPTCHA and the{" "}
            <span className="underline">Google Privacy Policy</span> and{" "}
            <span className="underline">Terms of Service</span> apply.
          </p>
        </div>
      </div>
    </>
  );
};

export default UserSignup;
