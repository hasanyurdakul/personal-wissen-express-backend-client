import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function LayoutWithNavbar() {
  return (
    // <div className="flex flex-col justify-center align-middle items-center mx-auto max-w-[800px]">
    <div className="flex flex-col justify-center align-middle items-center mx-auto ">
      <Navbar className="w-[100vw]" />
      <Outlet className="w-6xl bg-red-900 " />
    </div>
  );
}

export default LayoutWithNavbar;
