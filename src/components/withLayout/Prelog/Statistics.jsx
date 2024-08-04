import Image from "next/image";
import React from "react";
import stateIcon1 from "@/assest/icons/state_icon1.png";
import stateIcon2 from "@/assest/icons/state_icon2.png";
import stateIcon3 from "@/assest/icons/state_icon3.png";
import stateIcon4 from "@/assest/icons/state_icon4.png";

const Statistics = () => {
  return (
    <div className="mt-16">
      <div className="border-y-2 border-[#909DAD] py-7 lg:flex justify-center items-center text-center">
        <div className="lg:px-16 lg:border-e-2 border-[#090B0E] ">
          <Image
            src={stateIcon1}
            alt="ring_image"
            width={0}
            height={0}
            sizes="100vw"
            className="h-[60px] w-[100px] mb-2 mx-auto"
          />
          <p className="text-xs text-[#090B0E] mb-2">
            Total Groom and Bride’s Biodatas
          </p>
          <h3 className="text-3xl text-[#090B0E] mb-2">5,165</h3>
        </div>
        <div className="lg:px-16 lg:border-e-2 border-[#090B0E] ">
          <Image
            src={stateIcon2}
            alt="ring_image"
            width={0}
            height={0}
            sizes="100vw"
            className="h-[60px] w-[60px] mb-2 mx-auto"
          />
          <p className="text-xs text-[#090B0E] mb-2">Total Groom Biodatass</p>
          <h3 className="text-3xl text-[#090B0E] mb-2">2,184</h3>
        </div>
        <div className="lg:px-16 lg:border-e-2 border-[#090B0E] ">
          <Image
            src={stateIcon3}
            alt="ring_image"
            width={0}
            height={0}
            sizes="100vw"
            className="h-[60px] w-[60px] mb-2 mx-auto"
          />
          <p className="text-xs text-[#090B0E] mb-2">Total Bride’s Biodatas</p>
          <h3 className="text-3xl text-[#090B0E] mb-2">5,165</h3>
        </div>
        <div className="lg:px-16">
          <Image
            src={stateIcon4}
            alt="ring_image"
            width={0}
            height={0}
            sizes="100vw"
            className="h-[60px] w-[60px] mb-2 mx-auto"
          />
          <p className="text-xs text-[#090B0E] mb-2">Review</p>
          <h3 className="text-3xl text-[#090B0E] mb-2">4.7/5</h3>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
