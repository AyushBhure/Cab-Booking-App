import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CapatinDetails from "../components/CapatinDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {
  const [ridePopUpPanel, setRidePopUpPanel] = useState(true);
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);
  const ridePopUpPanelRef = useRef(null);
  const confirmRidePopUpPanelRef = useRef(null);

  useGSAP(
    function () {
      if (ridePopUpPanel) {
        gsap.to(ridePopUpPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ridePopUpPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopUpPanel]
  );

  useGSAP(
    function () {
      if (confirmRidePopUpPanel) {
        gsap.to(confirmRidePopUpPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePopUpPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePopUpPanel]
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
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover bg-bottom"
          src="https://user-images.githubusercontent.com/6416095/52931260-c6bb5e80-3371-11e9-9d46-83f7d1389d18.gif"
          alt=""
        />
      </div>
      <div className="h-2/5 p-7 bg-white rounded-lg shadow-md">
        <CapatinDetails></CapatinDetails>
      </div>
      <div
        ref={ridePopUpPanelRef}
        className="fixed bottom-0 translate-y-full w-full z-10 bg-white px-4 rounded-t-3xl shadow-lg"
      >
        <RidePopUp
          setRidePopUpPanel={setRidePopUpPanel}
          setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}
        ></RidePopUp>
      </div>
      <div
        ref={confirmRidePopUpPanelRef}
        className="fixed bottom-0 translate-y-full w-full z-10 bg-white p-6  shadow-lg"
      >
        <ConfirmRidePopUp
          setRidePopUpPanel={setRidePopUpPanel}
          setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}
        ></ConfirmRidePopUp>
      </div>
    </div>
  );
};

export default CaptainHome;
