import React from "react";

const WaitingDriver = (props) => {
  return (
    <div className="bottom-0 flex flex-col items-center justify-center">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-6 relative">
        <div onClick={()=>{
          props.WaitingForDriver(false)
        }} className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 rounded-full p-6">
          <i className=" text-2xl text-gray-600 ri-arrow-down-wide-line"></i>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center mt-5">
          Waiting for a Driver
        </h2>

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
            <h3 className="text-lg font-semibold text-gray-800">562/11-A</h3>
            <p className="text-sm text-gray-500">Kankariya Talab, Bhopal</p>
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
      </div>
    </div>
  );
};

export default WaitingDriver;
