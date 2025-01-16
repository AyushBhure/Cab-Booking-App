import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setCaptainData({
      email: email,
      password: password,
    });
    console.log(captainData);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-6 h-screen flex flex-col justify-between bg-gray-50">
      <div className="flex justify-center mb-2">
        <img
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt="Uber Driver Logo"
          className="h-16"
        />
      </div>

      <form
        onSubmit={submitHandler}
        className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg"
      >
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
          Login
        </button>
        <p className="text-center mt-4 text-sm text-gray-600">
          Join a fleet?{" "}
          <Link to="/captain-signup" className="text-blue-600">
            Register as a Captain
          </Link>
        </p>
      </form>

      <div className="mt-6 w-full max-w-md mx-auto">
        <Link
          to="/login"
          className="bg-orange-500 text-white font-semibold rounded px-4 py-2 w-full block text-center hover:bg-orange-600"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
