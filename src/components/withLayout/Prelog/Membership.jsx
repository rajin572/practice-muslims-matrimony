"use client";

import Container from "@/components/ui/Container";
import Image from "next/image";
import React, { useState } from "react";
import gold from "@/assest/icons/gold.png";
import silver from "@/assest/icons/silver.png";
import bronze from "@/assest/icons/bronze.png";
import { Button } from "antd";
import Link from "next/link";

const Membership = () => {
  const [activeTab, setActiveTab] = useState("Gold");

  return (
    <div className="text-center my-20">
      <Container>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pink-500 mb-10">
          Membership <span className="text-[#3D4C5E]">Plan</span>
        </h2>

        <div className="flex gap-10 items-center justify-center my-8 bg-[#47586e] text-white">
          <button
            className={`flex items-center  gap-2 text-2xl ${
              activeTab === "Gold"
                ? "border-b-4 py-2 border-b-[#FF65C0]"
                : "border-none"
            }`}
            onClick={() => setActiveTab("Gold")}
          >
            <Image src={gold} className="h-6 w-fit" alt="image" />
            <span>Gold</span>
          </button>
          <button
            className={`flex items-center  gap-2 text-2xl ${
              activeTab === "Silver"
                ? "border-b-4 py-2 border-b-[#FF65C0]"
                : "border-none"
            }`}
            onClick={() => setActiveTab("Silver")}
          >
            <Image src={silver} className="h-6 w-fit" alt="image" />
            <span>Silver</span>
          </button>
          <button
            className={`flex items-center  gap-2 text-2xl ${
              activeTab === "Bronze"
                ? "border-b-4 py-2 border-b-[#FF65C0]"
                : "border-none"
            }`}
            onClick={() => setActiveTab("Bronze")}
          >
            <Image src={bronze} className="h-6 w-fit" alt="image" />
            <span>Bronze</span>
          </button>
        </div>
        <p className="md:w-[60%] text-center mx-auto my-10">
          <span className="font-semibold">
            The website will be free for 7 days. After 7 days
          </span>
          , users need to buy subscriptions. Upgrade your plan as per your
          customized requirements. With a paid membership, you can seamlessly
          connect with your prospects and get more reponses.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          <div className="bg-[#546881] text-white flex flex-col items-center justify-center lg:max-w-[350px] px-3 py-5 rounded-lg">
            <h1 className="text-xl font-semibold py-2">3 Months Plan</h1>
            <div className="flex justify-center items-center gap-5 mt-3 mb-4">
              <div className="text-5xl font-bold">
                <div>
                  <p>
                    {activeTab === "Gold"
                      ? "19$"
                      : activeTab === "Silver"
                      ? "30$"
                      : "45$"}
                  </p>
                </div>
              </div>
              <p className="font-bold text-start text-xl leading-5">
                <span>Per Month</span> <br />{" "}
                <span className="font-normal text-sm ">
                  Best plan for management
                </span>
              </p>
            </div>
            <p className="w-10 text-white border "></p>
            <p className="text-sm my-3">
              Slate helps you see how many more days you need...
            </p>
            <div className="w-full px-4 ">
              <button className="my-2 w-full text-[#090B0E] bg-[#FDFDFD] font-semibold py-2 border-white rounded">
                Choose Plan
              </button>
            </div>
          </div>
          <div className="bg-[#3D4C5E] text-white flex flex-col items-center justify-center lg:max-w-[350px] px-3 py-5 rounded-lg">
            <h1 className="text-xl font-semibold py-2">6 Months Plan</h1>
            <div className="flex justify-center items-center gap-5 mt-3 mb-4">
              <div className="text-5xl font-bold">
                <div>
                  <p>
                    {" "}
                    {activeTab === "Gold"
                      ? "19$"
                      : activeTab === "Silver"
                      ? "30$"
                      : "45$"}
                  </p>
                </div>
              </div>
              <p className="font-bold text-start text-xl leading-5">
                <span>Per Month</span> <br />{" "}
                <span className="font-normal text-sm ">
                  Best plan for management
                </span>
              </p>
            </div>
            <p className="w-10 text-white border "></p>
            <p className="text-sm my-3">
              Slate helps you see how many more days you need...
            </p>
            <div className="w-full px-4 ">
              <button className="my-2 w-full text-[#090B0E] bg-[#FDFDFD] font-semibold py-2 border-white rounded">
                Choose Plan
              </button>
            </div>
          </div>
          <div className="bg-[#1D242D] text-white flex flex-col items-center justify-center lg:max-w-[350px] px-3 py-5 rounded-lg">
            <h1 className="text-xl font-semibold py-2">1 Year Plan</h1>
            <div className="flex justify-center items-center gap-5 mt-3 mb-4">
              <div className="text-5xl font-bold">
                <div>
                  <p>
                    {activeTab === "Gold"
                      ? "69$"
                      : activeTab === "Silver"
                      ? "79$"
                      : "99$"}
                  </p>
                </div>
              </div>
              <p className="font-bold text-start text-xl leading-5">
                <span>Per Month</span> <br />{" "}
                <span className="font-normal text-sm ">
                  Best plan for management
                </span>
              </p>
            </div>
            <p className="w-10 text-white border "></p>
            <p className="text-sm my-3">
              Slate helps you see how many more days you need...
            </p>

            <div className="w-full px-4 ">
              <button className="my-2 w-full text-[#090B0E] bg-[#FDFDFD] font-semibold py-2 border-white rounded">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Membership;
