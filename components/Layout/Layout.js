import React from "react";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex w-full min-h-[calc(100vh-60px)] h-full background-gradient">
        {children}
      </div>
    </>
  );
};

export default Layout;
