import React from "react";

const RidePopUp = (props) => {
  return (
    <div>
      <div className="bg-white rounded-xl w-full max-w-sm p-6">
        <div className="text-2xl font-bold mb-6">
          <div
            onClick={() => {
              props.setRidePopUpPanel(false);
            }}
            className="absolute top-[-10px] left-1/2 mt-4 transform -translate-x-1/2 rounded-full p-2"
          >
            <i className=" text-2xl text-gray-600 ri-arrow-down-wide-line"></i>
          </div>
          <div className="mt-5">
            <h4>New Ride Available!</h4>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
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
        <div className="mb-4">
          <div className="mb-3">
            <p className="text-xs font-semibold text-gray-500">PICK UP</p>
            <p className="text-sm text-gray-800">7958 Swift Village</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500">DROP OFF</p>
            <p className="text-sm text-gray-800">105 The Leaf Soc, Pune, IN</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={() => {
              props.setRidePopUpPanel(false);
            }}
            className="bg-gray-200 text-gray-500 text-sm font-semibold px-4 py-2 rounded-md"
          >
            Ignore
          </button>
          <button onClick={()=>{
            props.setConfirmRidePopUpPanel(true)
          }} className="bg-yellow-500 text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-yellow-600 transition-all">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default RidePopUp;
