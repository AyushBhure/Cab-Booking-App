import React from "react";

const CapatainDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <img
            src="https://t4.ftcdn.net/jpg/09/47/18/39/240_F_947183945_ZF8mSKiQz0TVh3PSzIH0BPGA3n8Jaf4x.jpg"
            alt="User Avatar"
            className="w-12 h-12 rounded-full object-cover "
          />
          <h4 className="text-lg font-semibold">Ayush Bhure</h4>
        </div>
        <div className="text-right">
          <h4 className="text-xl font-bold">₹193.20</h4>
          <p className="text-sm text-gray-500">Earned</p>
        </div>
      </div>

      <div className="py-4 bg-gray-100 rounded-2xl shadow-lg grid grid-cols-3 gap-4 text-center">
        <div>
          <i className="ri-timer-2-line text-2xl text-blue-500"></i>
          <h5 className="text-lg font-semibold">10.2</h5>
          <p className="text-sm text-gray-500">Hours Online</p>
        </div>
        <div>
          <i className="ri-speed-up-line text-2xl text-green-500"></i>
          <h5 className="text-lg font-semibold">10.2</h5>
          <p className="text-sm text-gray-500">Completed Rides</p>
        </div>
        <div>
          <i className="ri-booklet-line text-2xl text-purple-500"></i>
          <h5 className="text-lg font-semibold">10.2</h5>
          <p className="text-sm text-gray-500">Orders Delivered</p>
        </div>
      </div>
    </div>
  );
};

export default CapatainDetails;
