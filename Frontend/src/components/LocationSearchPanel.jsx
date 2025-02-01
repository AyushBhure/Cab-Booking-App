import React from "react";

const LocationSearchPanel = (props) => {
  const location = [
    "14, Sankheshwar Soc., Station Road, Bhestan, Surat 395023",
    "123, Sunrise Avenue, Green Park, New Delhi 110001",
    "56, Oakwood Lane, Sector 12, Faridabad 121001",
    "77, Rose Garden, MG Road, Bangalore 560001",
    "101, Palm Grove, East End, Mumbai 400098",
  ];

  return (
    <div>
      {location.map(function (e, idx) {
        return (
          <div
            key={idx}
            onClick={() => {
              props.setVehiclepanel(true);
              props.setPanelOpen(false);
            }}
            className="flex border-2 p-1 rounded-xl border-gray-50 active:border-gray-700 text-sm items-center space-x-4 my-4"
          >
            <h2 className="rounded-full h-10 flex items-center justify-center">
              <i className="ri-map-pin-line text-xl text-[#000000]"></i>
            </h2>
            <h4>{e}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
