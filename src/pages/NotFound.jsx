import React from "react";
import background from "../assets/images/background.jpg";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo_no_background from "../assets/images/logo_no_background.png";

function NotFound() {
  return (
    <div
      className="h-[100vh] flex justify-center items-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-xs p-4 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center">
          <img src={logo_no_background} alt="logo" className="w-24" />
        </div>
        <Typography variant="h4" className="text-center mt-4">
          404 Not Found
        </Typography>
        <Typography variant="body1" className="text-center mt-4">
          The page you are looking for does not exist.
        </Typography>
        <div className="flex justify-center mt-4">
          <Link to="/" className="text-blue-500 underline">
            Go back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
