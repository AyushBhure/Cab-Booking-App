import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link
        to="/home"
        className="h-10 right-2 top-2 w-10 bg-white fixed flex items-center justify-center rounded-full"
      >
        <i className=" text-lg font-medium ri-home-3-line"></i>
      </Link>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover bg-bottom"
          src="https://user-images.githubusercontent.com/6416095/52931260-c6bb5e80-3371-11e9-9d46-83f7d1389d18.gif"
          alt=""
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between py-2 mb-2 ">
          <img
            className="h-12"
            src="https://swyft.pl/wp-content/uploads/2023/05/can-1-person-use-uberx.jpg"
            alt="UberGo Car"
          />
          <div className="text-right ">
            <h2 className="text-lg font-medium">ayush</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">GJ 05 AZ 3420</h4>
            <p className="text-sm text-gray-600 ">Hundai i20</p>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <i className="ri-map-pin-line text-2xl text-gray-500"></i>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">102/22-B</h3>
            <p className="text-sm text-gray-500">New Market, Bhopal</p>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="flex items-center gap-3">
            <i className="ri-wallet-line text-2xl text-gray-500"></i>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">₹193.20</h3>
              <p className="text-sm text-gray-500">Cash</p>
            </div>
          </div>
        </div>
        <button className="w-full mt-6 bg-green-500 text-white font-semibold py-2 rounded-full hover:bg-green-600 transition-all">
          Make a payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
