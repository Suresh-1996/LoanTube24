import React from "react";
import { IoLogIn } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white py-4 ">
        <div className="max-w-6xl mx-auto px-4 pt-2 flex items-center justify-between  ">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold mr-1">Loan</span>
            <div className="relative">
              <span className="text-xl font-bold text-[#EE5A30]">
                (Tube 24)
              </span>
            </div>
          </div>

          {/* Main Navigation Items */}
          <div className=" space-x-8 pr-15 text-[17px] font-normal text-[#0C122A]">
            <a href="#" className=" hover:text-[#9c2402]">
              How to borrow
            </a>
            <a href="#" className=" hover:text-[#9c2402]">
              How to repay
            </a>
            <a href="#" className="hover:text-[#9c2402]">
              FAQ
            </a>
            <a href="#" className="hover:text-[#9c2402]">
              About us
            </a>
            <a href="#" className="hover:text-[#9c2402]">
              Contact us
            </a>
          </div>

          {/* Right side elements */}
          <div className="flex items-center space-x-6">
            {/* Phone number */}
            <a
              href="tel:+94114411122"
              className=" text-gray-800 font-medium text-sm"
            >
              +94 11 44 111 22
            </a>

            {/* Login button */}
            <button className="bg-[#fa6237] text-white font-bold text-sm px-3 py-2  hover:bg-[#EE5A30] rounded-full flex gap-1">
              <IoLogIn className="text-xl" />
              <span>Log in</span>
            </button>

            {/* Language selector */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-800 font-medium">Eng</span>
              <span className="text-gray-400 text-sm">සිංහල</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
