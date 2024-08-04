import Container from "@/components/ui/Container";
import Image from "next/image";
import React from "react";
import ring from "@/assest/images/ring.png";
import welcomeImg1 from "@/assest/images/welcome_Img1.png";
import welcomeImg2 from "@/assest/images/welcome_Img2.png";
import Statistics from "./Statistics";

const Welcome = () => {
  return (
    <div className="my-20">
      <Container className="max-w-[1190px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="relative">
            <Image
              src={ring}
              alt="ring_image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
            />
            <Image
              src={welcomeImg1}
              alt="welcome_image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[200px] h-[320px] md:w-[340px] md:h-[480px] ml-12 -mt-12"
            />
            <Image
              src={welcomeImg2}
              alt="welcome_image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[240px] h-[120px] md:w-[340px] md:h-[220px] ml-36 -mt-[120px] md:-mt-[220px]"
            />
          </div>
          <div>
            <h2 className=" text-3xl md:text-4xl text-[#3D4C5E] font-bold">
              WELCOME TO
            </h2>
            <h2 className=" text-2xl md:text-3xl  text-[#E33183] font-bold mb-5">
              WEDDING MATRIMONY
            </h2>
            <p className="text-[#1D242D] text-xs md:text-sm mb-5">
              Best wedding matrimony it is a long established fact that a reader
              will be distracted by the readable content of a page when looking
              at it’s layout.
            </p>
            <p className="text-[#1D242D] mb-10  text-xs md:text-sm">
              <span className="text-[#E33183]">Click here to </span>Start you
              matrimony service now.
            </p>
            <hr className="bg-[#909DAD] border-[#909DAD] text-[#909DAD] mb-10" />
            <p className="text-[#1D242D] text-xs md:text-sm mb-10">
              There are many variations of passages of Lorem ipsum available,
              but the mojority have suffered alteraction in some from, by
              injected humor, or randomised word which don’t look even slighty
              believable.
            </p>
            <div className="text-xs md:text-sm flex justify-between items-center px-5">
              <div>
                <p className="text-[#E33183]">Enquiry</p>
                <p className="text-[#090B0E]">+880 179 765 0987</p>
              </div>
              <div>
                <p className="text-[#E33183]">Get Support</p>
                <p className="text-[#090B0E]">info@example.com</p>
              </div>
            </div>
          </div>
        </div>
        <Statistics />
      </Container>
    </div>
  );
};

export default Welcome;
