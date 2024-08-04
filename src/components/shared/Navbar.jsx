"use client";

import Link from "next/link";
import { useState } from "react";
import logo from "@/assest/logo/logo.png";
import Image from "next/image";
import Container from "../ui/Container";

const NavItems = [
  { name: "Home", route: "/" },
  { name: "Favorite", route: "/" },
  { name: "Messages", route: "/" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(false);
  return (
    <div className="bg-transparent z-[999] pt-3 text-[#FDFDFD]">
      <Container className="max-w-[1180px]">
        <header className=" mx-auto flex justify-between items-center z-50 ">
          {/* //* Menu Icons for mobile */}
          <div className="lg:hidden">
            {mobileMenuOpen ? (
              <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 md:text-[18px] "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            ) : (
              <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 md:text-[18px] "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
            )}
          </div>
          {/* //*Company logo */}
          <div>
            <Link href="/" className="cursor-pointer">
              <Image
                src={logo}
                alt="logo"
                width={0}
                height={0}
                sizes="100vw"
                className="w-20 h-10 md:w-40 md:h-20 "
              />
            </Link>
          </div>
          {/* //*Nav links */}
          <nav
            className={
              mobileMenuOpen
                ? "w-full lg:w-fit lg:static absolute top-[60px] left-0 lg:bg-none bg-transparent transition-all duration-500 lg:z-0 -z-50"
                : "w-full lg:w-fit lg:static absolute top-[-550px] left-0 transition-all duration-500 lg:z-0 -z-50"
            }
          >
            {/* //* For Laptop or Desktop */}
            <div className="hidden lg:block">
              <ul className="flex justify-end items-center gap-2 lg:flex-row flex-col lg:py-0 py-10">
                {NavItems.map((navItem, index) => (
                  <Link key={index} href={navItem.route}>
                    <li className=" lg:mb-0 mb-5 cursor-pointer lg:text-sm xl:text-base group relative px-3 text-[#FDFDFD] hover:text-[#FF65C0]">
                      {navItem.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
            {/* //*For Tab or Mobile */}
            <div className="block lg:hidden">
              <ul className="flex justify-end items-center gap-2 lg:flex-row flex-col lg:py-0 py-10 bg-transparent border-b border-secondary">
                {NavItems.map((navItem, index) => (
                  <li
                    key={index}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="w-full lg:w-fit text-center py-2 cursor-pointer group text-sm relative md:text-[18px] "
                  >
                    <Link href={navItem.route}>{navItem.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* //*More nav Links */}
          <div className="">
            <ul className="flex justify-end items-center gap-2 flex-row py-0">
              {user ? (
                <Link href="/signup">
                  <li className="cursor-pointer text-sm font-semibold group relative px-2 md:text-[18px] ">
                    <button
                      onClick={() => signOut()}
                      className="px-6 py-3 bg-[#E33183] text-[#FDFDFD] hover:bg-[#E33183] hover:text-[#FDFDFD] "
                    >
                      Sign Out
                    </button>
                  </li>
                </Link>
              ) : (
                <>
                  <Link href="/login">
                    <li className="cursor-pointer group relative px-2 md:text-[18px] ">
                      <button className="px-2 py-1 lg:px-4 lg:py-2 text-xs lg:text-sm bg-[#E33183] text-[#FDFDFD] hover:bg-[#E33183] hover:text-[#FDFDFD] rounded-tl-xl rounded-br-xl">
                        Log in
                      </button>
                    </li>
                  </Link>
                  <Link href="/signup">
                    <li className="cursor-pointer group relative px-2 md:text-[18px]  ">
                      <button className="px-2 py-1 lg:px-4 lg:py-2 text-xs lg:text-sm bg-[#E33183] text-[#FDFDFD] hover:bg-[#E33183] hover:text-[#FDFDFD] rounded-tl-xl rounded-br-xl">
                        Sign up
                      </button>
                    </li>
                  </Link>
                </>
              )}
            </ul>
          </div>
        </header>
      </Container>
    </div>
  );
};

export default Navbar;
