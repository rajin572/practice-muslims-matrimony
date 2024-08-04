import Image from "next/image";
import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin, FaFacebookF } from "react-icons/fa";
import love from "@/assest/icons/love.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-14">
      <hr className="bg-[#FF65C0] border-[#FF65C0] text-[#FF65C0]" />
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex flex-col items-center justify-center my-10 lg:pe-10 lg:border-e-2 border-[#FF65C0]">
          <div className="mr-3 flex items-center mb-5">
            <Image
              src={love}
              alt="love_image"
              width={0}
              height={0}
              sizes="100vw"
              className="h-[30px] w-[30px] mr-2"
            />
            <h1 className="text-xl font-bold text-[#FF65C0]">
              Muslim Matrimony
            </h1>
          </div>

          <p className="mb-5">
            Enjoy secure conversations using our chat <br /> services without
            revealing your number
          </p>
          <div className="flex mt-4">
            <div
              className="border border-[#FF65C0] rounded-full p-3 mx-1 
                bg-[#FF65C0] text-[#090B0E]"
            >
              <FaTwitter className="h-3 w-3" />
            </div>
            <div
              className="border border-[#FF65C0] rounded-full p-3 mx-1 
                bg-[#FF65C0] text-[#090B0E]"
            >
              <FaFacebookF className="h-3 w-3" />
            </div>
            <div
              className="border border-[#FF65C0] rounded-full p-3 mx-1 
                bg-[#FF65C0] text-[#090B0E]"
            >
              <FaLinkedin className="h-3 w-3" />
            </div>
          </div>
        </div>
        <div className="flex lg:ps-10 ">
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                Review
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                Membership Plan
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
