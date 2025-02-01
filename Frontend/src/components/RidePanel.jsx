import React from "react";

const RidePanel = (props) => {
  return (
    <div>
      <div className="bg-white rounded-3xl  w-full max-w-md p-6 relative">
        <div
          onClick={() => {
            props.setRidepanel(false);
            props.setVehiclepanel(false);
          }}
          className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 rounded-full p-2"
        >
          <i className=" text-2xl text-gray-600 ri-arrow-down-wide-line"></i>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Confirm your Ride
        </h2>

        <div className="flex justify-center mb-3">
          <img
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt="Car"
            className="h-20"
          />
        </div>

        <div className="flex items-center gap-4 mb-6">
          <i className="ri-map-pin-line text-2xl text-gray-500"></i>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">562/11-A</h3>
            <p className="text-sm text-gray-500">Kankariya Talab, Bhopal</p>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <i className="ri-map-pin-line text-2xl text-gray-500"></i>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">562/11-A</h3>
            <p className="text-sm text-gray-500">Kankariya Talab, Bhopal</p>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-gray-200 pt-4 mb-6">
          <div className="flex items-center gap-3">
            <i className="ri-wallet-line text-2xl text-gray-500"></i>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">₹193.20</h3>
              <p className="text-sm text-gray-500">Cash</p>
            </div>
          </div>
        </div>

        <button onClick={()=>{
            props.setVehicleFound(true)
            props.setRidepanel(false);
            props.setVehiclepanel(false)
        }} className="w-full bg-green-500 text-white font-semibold py-2 rounded-full hover:bg-green-600 transition-all">
          Confirm Ride
        </button>
      </div>
    </div>
  );
};

export default RidePanel;
