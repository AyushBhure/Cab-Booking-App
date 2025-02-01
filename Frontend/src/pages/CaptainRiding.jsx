import { useGSAP } from "@gsap/react";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import FinishRide from "../components/FinishRide";

const CaptainRiding = (props) => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);

  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePanel]
  );
  return (
    <div className="h-screen">
      <div className="fixed p-3 w-full top-0 flex items-center justify-between  ">
        <img
          className="h-6"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to="/captain-login"
          className="h-10 right-0 w-10 bg-white  flex items-center justify-center rounded-full"
        >
          <i className=" text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover bg-bottom"
          src="https://user-images.githubusercontent.com/6416095/52931260-c6bb5e80-3371-11e9-9d46-83f7d1389d18.gif"
          alt=""
        />
      </div>
      <div
        onClick={() => {
          setFinishRidePanel(true);
        }}
        className="relative h-1/5 p-6 bg-yellow-500 rounded-t-xl flex flex-col justify-center items-center space-y-4"
      >
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-1">
          <i className="text-black font-bold text-3xl ri-arrow-up-wide-line cursor-pointer hover:text-black-200 transition-all"></i>
        </div>

        <h4 className="text-xl  font-bold text-gray-800">4 KM Away</h4>

        <button className="w-full py-2 text-xl font-semibold text-white bg-green-600 rounded-md hover:bg-gray-700 focus:outline-none transition-all">
          Complete Ride
        </button>
      </div>
      <div
        ref={finishRidePanelRef}
        className="fixed bottom-0 translate-y-full w-full z-10 bg-white px-4 rounded-t-3xl shadow-lg"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel}></FinishRide>
      </div>
    </div>
  );
};

export default CaptainRiding;
