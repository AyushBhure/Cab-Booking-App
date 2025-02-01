import React from "react";
import { Link } from "react-router-dom";

const FinishRide = (props) => {
  return (
    <div className="h-[75%] flex items-center justify-center py-6 bg-white ">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
        <div
          onClick={() => {
            props.setFinishRidePanel(false);
          }}
          className="absolute top-[-10px] left-1/2 mt-4 transform -translate-x-1/2 rounded-full p-2 cursor-pointer"
        >
          <i className="text-2xl font-bold text-gray-600 ri-arrow-down-wide-line"></i>
        </div>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-2">
            Finish Your Ride
          </h2>
          <p className="text-sm text-gray-600">
            Please review your ride details and confirm to proceed.
          </p>
        </div>

        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div
              className="h-12 w-12 bg-center bg-cover object-cover rounded-full"
              style={{
                backgroundImage:
                  "url('https://t3.ftcdn.net/jpg/02/58/89/90/360_F_258899008_tJr6IpPpTfLcNhu8aOljDfM6DDDW0sSj.jpg')",
              }}
            ></div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                Ayush BHURE
              </h4>
            </div>
          </div>
          <div className="text-right">
            <h4 className="text-xl font-bold text-gray-800">₹195.20</h4>
            <p className="text-sm text-gray-500">2.2 km</p>
          </div>
        </div>

        <div className="mb-6">
          <div className="mb-3">
            <p className="text-xs font-semibold text-gray-500">Pick Up</p>
            <p className="text-sm text-gray-800">7958 Swift Village</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500">Drop Off</p>
            <p className="text-sm text-gray-800">105 The Leaf Soc, Pune, IN</p>
          </div>
        </div>

        <div className="flex justify-between">
          <Link
            to="/captain-home"
            className="bg-yellow-500 flex items-center justify-center text-white text-sm font-semibold py-2 px-6 rounded-md w-full hover:bg-yellow-600 transition-all"
          >
            Finish Ride
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FinishRide;
