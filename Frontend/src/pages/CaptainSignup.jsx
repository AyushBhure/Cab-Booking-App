import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainSignup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const { captain, setCaptain } = React.useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email,
      password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: parseInt(vehicleCapacity),
        vehicleType: vehicleType,
      },
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      captainData
    );
    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");

    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");

    {
      error && <div className="text-red-500 text-center">{error}</div>;
    }
  };

  return (
    <div className="p-6 h-screen flex flex-col justify-between bg-gray-50">
      <div className="flex justify-center mb-4">
        <img
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt="Uber Driver Logo"
          className="h-16"
        />
      </div>
      <form
        onSubmit={submitHandler}
        className="w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Personal Information
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <input
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="First Name"
              className="bg-gray-100 rounded px-3 py-2 border text-gray-700"
            />
            <input
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Last Name"
              className="bg-gray-100 rounded px-3 py-2 border text-gray-700"
            />
          </div>
        </div>
        <div>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email@example.com"
            className="bg-gray-100 rounded px-3 py-2 border w-full text-gray-700"
          />
        </div>
        <div>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            className="bg-gray-100 rounded px-3 py-2 border w-full text-gray-700"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Vehicle Information
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <input
              required
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              type="text"
              placeholder="Vehicle Color"
              className="bg-gray-100 rounded px-3 py-2 border text-gray-700"
            />
            <input
              required
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              type="text"
              placeholder="Vehicle Plate"
              className="bg-gray-100 rounded px-3 py-2 border text-gray-700"
            />
            <input
              required
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              type="number"
              placeholder="Capacity"
              className="bg-gray-100 rounded px-3 py-2 border text-gray-700"
            />
            <select
              required
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="bg-gray-100 rounded px-3 py-2 border text-gray-700"
            >
              <option value="">Select Vehicle</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="motorcycle">Motorcycle</option>
            </select>
          </div>
        </div>
        <button className="bg-black text-white font-semibold rounded px-4 py-2 w-full hover:bg-gray-800">
          Create Account
        </button>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/captain-login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </form>
      <div className="mt-6 w-full max-w-lg mx-auto text-xs text-gray-600 text-center">
        <p>
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service</span> apply.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
