import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const { user, setUser } = useContext(UserDataContext);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userData
    );
    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }

    setEmail("");
    setPassword("");
  };

  return (
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
          New here?{" "}
          <Link to="/signup" className="text-blue-600">
            Create a new account
          </Link>
        </p>
      </form>

      <div className="mt-6 w-full max-w-md mx-auto">
        <Link
          to="/captain-login"
          className="bg-green-500 text-white font-semibold rounded px-4 py-2 w-full block text-center hover:bg-green-600"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
