import React from "react";

const VehiclePanel = (props) => {
  return (
    <div className="bg-white rounded-3xl  w-full max-w-md p-2 relative">
      <div
        onClick={() => {
          props.setVehiclepanel(false);
        }}
        className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 rounded-full  p-2"
      >
        <i className=" text-2xl text-gray-600 ri-arrow-down-wide-line"></i>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 text-center mt-4 mb-4">
        Choose a vehicle
      </h2>

      <div
        onClick={() => {
          props.setRidepanel(true);
          props.setVehiclepanel(false);
        }}
        className="flex items-center justify-between p-4 border active:border-gray-700 rounded-2xl shadow-sm mb-3"
      >
        <img
          className="h-12"
          src="https://swyft.pl/wp-content/uploads/2023/05/can-1-person-use-uberx.jpg"
          alt="UberGo Car"
        />
        <div className="flex-1 px-4">
          <h4 className="text-base font-semibold text-gray-900 flex items-center gap-2">
            UberGo{" "}
            <span className="text-gray-600 text-sm flex items-center gap-1">
              <i className="ri-user-fill"></i> 4
            </span>
          </h4>
          <p className="text-xs text-gray-600 flex items-center gap-1">
            2 mins away <span className="text-gray-400">•</span> 15:24
          </p>
          <p className="text-xs font-medium text-gray-500">compact rides</p>
        </div>
        <h2 className=" font-semibold text-gray-900">₹193.20</h2>
      </div>
      <div
        onClick={() => {
          props.setRidepanel(true);
          props.setVehiclepanel(false);
        }}
        className="flex items-center justify-between p-4 border active:border-gray-700 rounded-2xl shadow-sm mb-3"
      >
        <img
          className="h-14"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt="UberMoto"
        />
        <div className="flex-1 px-4">
          <h4 className="text-base font-semibold text-gray-900 flex items-center gap-2">
            UberMoto{" "}
            <span className="text-gray-600 text-sm flex items-center gap-1">
              <i className="ri-user-fill"></i> 1
            </span>
          </h4>
          <p className="text-xs text-gray-600 flex items-center gap-1">
            3 mins away <span className="text-gray-400">•</span> 15:25
          </p>
          <p className="text-xs font-medium text-gray-500">motorcycle rides</p>
        </div>
        <h2 className=" font-semibold text-gray-900">₹65.17</h2>
      </div>
      <div
        onClick={() => {
          props.setRidepanel(true);
          props.setVehiclepanel(false);
        }}
        className="flex items-center justify-between p-4 border active:border-gray-700 rounded-2xl shadow-sm"
      >
        <img
          className="h-14"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt="UberAuto"
        />
        <div className="flex-1 px-4">
          <h4 className="text-base font-semibold text-gray-900 flex items-center gap-2">
            UberAuto{" "}
            <span className="text-gray-600 text-sm flex items-center gap-1">
              <i className="ri-user-fill"></i> 3
            </span>
          </h4>
          <p className="text-xs text-gray-600 flex items-center gap-1">
            2 mins away <span className="text-gray-400">•</span> 15:24
          </p>
          <p className="text-xs font-medium text-gray-500">
            Affordable, auto rides
          </p>
        </div>
        <h2 className=" font-semibold text-gray-900">₹118.86</h2>
      </div>
      
    </div>
  );
};

export default VehiclePanel;
