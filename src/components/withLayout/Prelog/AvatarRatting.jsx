import Image from "next/image";
import React from "react";
import { IoStar } from "react-icons/io5";
import avatar1 from "@/assest/images/avatar1.png";
import avatar2 from "@/assest/images/avatar2.png";
import avatar3 from "@/assest/images/avatar3.png";

const AvatarRatting = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-5 ">
      <div className="flex -space-x-2">
        <div className="hs-tooltip inline-block">
          <Image
            src={avatar1}
            alt="avatar_image"
            width={0}
            height={0}
            sizes="100vw"
            className="hs-tooltip-toggle relative inline-block size-[46px] rounded-full ring-2 ring-white hover:z-10 dark:ring-neutral-900"
          />
          <span
            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
            role="tooltip"
          >
            James
          </span>
        </div>
        <div className="hs-tooltip inline-block">
          <Image
            src={avatar2}
            alt="avatar_image"
            width={0}
            height={0}
            sizes="100vw"
            className="hs-tooltip-toggle relative inline-block size-[46px] rounded-full ring-2 ring-white hover:z-10 dark:ring-neutral-900"
          />
          <span
            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
            role="tooltip"
          >
            Maria
          </span>
        </div>
        <div className="hs-tooltip inline-block">
          <Image
            src={avatar3}
            alt="avatar_image"
            width={0}
            height={0}
            sizes="100vw"
            className="hs-tooltip-toggle relative inline-block size-[46px] rounded-full ring-2 ring-white hover:z-10 dark:ring-neutral-900"
          />
          <span
            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
            role="tooltip"
          >
            Anna
          </span>
        </div>
        <div className="hs-tooltip inline-block">
          <Image
            src={avatar1}
            alt="avatar_image"
            width={0}
            height={0}
            sizes="100vw"
            className="hs-tooltip-toggle relative inline-block size-[46px] rounded-full ring-2 ring-white hover:z-10 dark:ring-neutral-900"
          />
          <span
            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
            role="tooltip"
          >
            Brian
          </span>
        </div>
        <div className="hs-tooltip inline-block">
          <Image
            src={avatar2}
            alt="avatar_image"
            width={0}
            height={0}
            sizes="100vw"
            className="hs-tooltip-toggle relative inline-block size-[46px] rounded-full ring-2 ring-white hover:z-10 dark:ring-neutral-900"
          />
          <span
            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
            role="tooltip"
          >
            Maria
          </span>
        </div>
        <div className="hs-tooltip inline-block">
          <Image
            src={avatar3}
            alt="avatar_image"
            width={0}
            height={0}
            sizes="100vw"
            className="hs-tooltip-toggle relative inline-block size-[46px] rounded-full ring-2 ring-white hover:z-10 dark:ring-neutral-900"
          />
          <span
            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
            role="tooltip"
          >
            James
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <IoStar className="h-7 w-fit text-[#E33183]" />
        <div className="flex items-center gap-1">
          <IoStar className="h-6 w-fit text-white bg-[#E33183] p-1" />
          <IoStar className="h-6 w-fit text-white bg-[#E33183] p-1" />
          <IoStar className="h-6 w-fit text-white bg-[#E33183] p-1" />
          <IoStar className="h-6 w-fit text-white bg-[#E33183] p-1" />
          <IoStar className="h-6 w-fit text-white bg-[#E33183] p-1" />
          <span className="text-white lg:ml-3">4.5 / 5</span>
        </div>
      </div>
    </div>
  );
};

export default AvatarRatting;
