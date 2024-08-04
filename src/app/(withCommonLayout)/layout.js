import Navbar from "@/components/shared/Navbar";
import React from "react";

const Mainlayout = ({ children }) => {
  return (
    <div className="">
      <div className="fixed top-0 z-50 w-full">
        <Navbar />
      </div>
      <div>{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Mainlayout;
