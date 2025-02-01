import { React, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import RidePanel from "../components/RidePanel";
import LookingDriver from "../components/LookingDriver";
import WaitingDriver from "../components/WaitingDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const vehiclepanelRef = useRef(null);
  const ridepanelRef = useRef(null);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  const [vehiclepanel, setVehiclepanel] = useState(false);
  const [ridepanel, setRidepanel] = useState(false);
  const [vehiclefound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        opacity: 1,
        padding: "24px",
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
        duration: 0.3,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0",
        opacity: 0,
        padding: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
        duration: 0.2,
      });
    }
  }, [panelOpen]);

  useGSAP(
    function () {
      if (vehiclepanel) {
        gsap.to(vehiclepanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclepanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclepanel]
  );

  useGSAP(
    function () {
      if (ridepanel) {
        gsap.to(ridepanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ridepanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridepanel]
  );

  useGSAP(
    function () {
      if (vehiclefound) {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclefound]
  );

  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriver]
  );

  return (
    <div className="relative h-screen overflow-hidden">
      <div>
        <img
          className="w-16 absolute left-5 top-5"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
      </div>
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover bg-bottom"
          src="https://user-images.githubusercontent.com/6416095/52931260-c6bb5e80-3371-11e9-9d46-83f7d1389d18.gif"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-6 border-gray-400 rounded-t-3xl bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute opacity-0 right-6 top-6 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="relative py-3"
          >
            <div className="line  absolute h-16 w-1 top-[50%] -translate-y-1/2 left-5 bg-gray-700 rounded-full"></div>
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              className="bg-gray-100 px-12 py-2 text-lg rounded-lg w-full"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              className="bg-gray-100 px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-white ">
          <LocationSearchPanel
            vehiclepanel={vehiclepanel}
            setVehiclepanel={setVehiclepanel}
            setPanelOpen={setPanelOpen}
          />
        </div>
      </div>
      <div
        ref={vehiclepanelRef}
        className="fixed bottom-0 translate-y-full w-full z-10 bg-white px-4 py-4 rounded-t-3xl shadow-lg"
      >
        <VehiclePanel
          setRidepanel={setRidepanel}
          setVehiclepanel={setVehiclepanel}
        ></VehiclePanel>
      </div>
      <div
        ref={ridepanelRef}
        className="fixed bottom-0 translate-y-full w-full z-10 bg-white px-4 py-4 rounded-t-3xl shadow-lg"
      >
        <RidePanel
          setRidepanel={setRidepanel}
          setVehiclepanel={setVehiclepanel}
          setVehicleFound={setVehicleFound}
        ></RidePanel>
      </div>
      <div
        ref={vehicleFoundRef}
        className="fixed bottom-0 translate-y-full w-full z-10 bg-white px-4 py-4 rounded-t-3xl shadow-lg"
      >
        <LookingDriver
          setRidepanel={setRidepanel}
          setVehiclepanel={setVehiclepanel}
        ></LookingDriver>
      </div>
      <div
        ref={waitingForDriverRef}
        className="fixed bottom-0 w-full rounded-t-3xl"
      >
        <WaitingDriver waitingForDriver={waitingForDriver}></WaitingDriver>
      </div>
    </div>
  );
};

export default Home;
