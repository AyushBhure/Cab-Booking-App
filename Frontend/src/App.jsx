import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Userlogin from "../src/pages/UserLogin";
import UserSignup from "../src/pages/UserSignup";
import Captainlogin from "../src/pages/Captainlogin";
import CaptainSignup from "../src/pages/CaptainSignup";

const App = () => {
  return (
    <div className="text-black">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Userlogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<Captainlogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
      </Routes>
    </div>
  );
};

export default App;
