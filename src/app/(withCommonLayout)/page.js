import Banner from "@/components/withLayout/Prelog/Banner";
import Membership from "@/components/withLayout/Prelog/Membership";
import Welcome from "@/components/withLayout/Prelog/Welcome";
import Works from "@/components/withLayout/Prelog/Works";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner />
      <Welcome />
      <Works />
      <Membership />
    </div>
  );
};

export default page;
