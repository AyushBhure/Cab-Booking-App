import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          // No token found, navigate to login immediately
          navigate("/login");
          return;
        }

        // Remove the token from localStorage
        localStorage.removeItem("token");

        // Redirect to login immediately
        navigate("/login");

        // Perform backend logout in the background
        await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        console.error("Logout failed:", error.response ? error.response.data : error.message);
      }
    };

    logoutUser();
  }, [navigate]);

  // Display a fallback loader while processing (optional)
  return (
    <div style={{ textAlign: "center", marginTop: "20%" }}>
      <h3>Logging out...</h3>
    </div>
  );
};

export default UserLogout;
