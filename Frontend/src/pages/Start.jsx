import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1593950315186-76a92975b60c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWJlcnxlbnwwfHwwfHx8MA%3D%3D')] h-screen w-full flex flex-col">
      <div className="flex justify-start items-start p-6">
        {/* <img
          src="https://www.edigitalagency.com.au/wp-content/uploads/Uber-logo-white-png-900x313.png"
          alt="Uber Logo"
          className="h-8"
        /> */}
      </div>

      <div className="bg-white w-full p-6 mt-auto rounded-t-3xl shadow-lg">
        <h2 className="text-2xl font-bold mb-5 text-gray-800">
          Get Started with Uber
        </h2>
        <Link
          to="/login"
          className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Start;
