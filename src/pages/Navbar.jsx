import React from "react";
import { IoLogIn, IoTimeOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-white  transition-all duration-300 z-50 ${
        isScrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <nav
        className={`bg-white transition-all duration-300 py-2  ${
          isScrolled ? "lg:py-3" : " lg:py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center transition-all duration-300">
            <span
              className={`font-bold mr-1 transition-all duration-300 text-sm ${
                isScrolled ? " lg:text-lg" : "lg:text-xl "
              }`}
            >
              Loan
            </span>
            <div className="relative">
              <span
                className={`font-bold text-[#EE5A30] transition-all duration-300 text-sm ${
                  isScrolled ? " lg:text-lg" : "lg:text-xl "
                }`}
              >
                (Tube 24)
              </span>
            </div>
          </div>

          {/* Lg screen Navigation Items */}
          <div className=" hidden lg:block space-x-8 pr-15 text-[17px] font-normal text-[#0C122A]">
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
          <div className="flex items-center lg:space-x-6">
            {/* Phone number */}
            <a
              href="tel:+94114411122"
              className=" text-gray-800 font-medium hidden lg:text-sm"
            >
              +94 11 44 111 22
            </a>

            {/* Login button */}
            <button className="bg-[#fa6237] text-white font-bold lg:text-sm lg:px-3 px-2 lg:py-2 py-1 hover:bg-[#EE5A30] rounded-full flex gap-1">
              <IoLogIn className="text-xl" />
              <span className="text-sm">Log in</span>
            </button>

            {/* Language selector */}
            <div className="flex items-center space-x-2 pl-2  ">
              <span className="text-gray-800 font-medium text-sm">Eng</span>
              <span className="text-gray-400 text-sm">සිංහල</span>

              {/* mobile toggle  */}
              <button
                className="lg:hidden text-white text-2xl "
                onClick={() => setIsOpen(!isOpen)}
              >
                <BiMenu className="text-black" />
              </button>
              {/* Mobile menu */}
              <div className=" lg:hidden  ">
                {isOpen && (
                  <div className="fixed  right-0 top-2 bg-white bg-opacity-95 flex flex-col   w-3/4 h-full z-50">
                    <div className="w-full border-t border-b  py-2 p-2 border-gray-200">
                      <div className="flex  justify-between items-center">
                        <div>
                          <span className="font-bold text-black text-sm ">
                            Loan
                          </span>
                          <span className="font-bold text-[#EE5A30] text-sm">
                            (Tube 24)
                          </span>
                        </div>
                        <div className="flex flex-row gap-2 pr-2">
                          <button className="bg-[#fa6237] text-white font-bold   px-2  py-1 hover:bg-[#EE5A30] rounded-full flex gap-1">
                            <IoLogIn className="text-xl" />
                            <span className="text-sm">Log in</span>
                          </button>
                          <button
                            className="  text-black text-3xl"
                            onClick={() => setIsOpen(false)}
                          >
                            <IoMdClose />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="w-full   py-2 p-2 border-gray-200">
                      <div className="flex justify-start items-center space-x-1 ">
                        <div className="w-8 h-8  rounded-md flex justify-center items-center bg-amber-600">
                          <FaPhone className=" text-white size-4 " />
                        </div>

                        <div className="flex flex-col justify-items-start items-center">
                          <h3 className="text-sm font-semibold">
                            +94 11 44 111 22
                          </h3>
                          <p className="text-[8px]">Mon - Sat: 08am - 05pm</p>
                        </div>
                      </div>
                    </div>

                    <div className="w-full   py-2 p-2 border-gray-200">
                      <div className="flex justify-start items-center space-x-1 ">
                        <div className="w-8 h-8  rounded-md flex justify-center items-center bg-amber-600">
                          <IoTimeOutline className=" text-white size-6" />
                        </div>

                        <p className="text-sm font-semibold">
                          Mon - Sat: 08am - 05pm
                        </p>
                      </div>
                    </div>
                    <div className="w-full border-t border-b border-gray-200 py-2 px-2">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-800 font-medium text-sm">
                          Eng
                        </span>
                        <span className="text-gray-200">|</span>
                        <span className="text-gray-400 text-sm">සිංහල</span>
                      </div>
                    </div>
                    <div className="w-full border-t border-b border-gray-200 py-2 px-2">
                      <div className="flex items-center justify-between">
                        <a
                          href="#"
                          className="text-black text-sm font-semibold hover:text-gray-200"
                        >
                          How to borrow
                        </a>
                        <span className="text-gray-400 text-sm">
                          <MdOutlineArrowForwardIos />
                        </span>
                      </div>
                    </div>
                    <div className="w-full  border-b border-gray-200 py-2 px-2">
                      <div className="flex items-center justify-between">
                        <a
                          href="#"
                          className="text-black text-sm font-semibold hover:text-gray-200"
                        >
                          How to replay
                        </a>
                        <span className="text-gray-400 text-sm">
                          <MdOutlineArrowForwardIos />
                        </span>
                      </div>
                    </div>
                    <div className="w-full border-b border-gray-200 py-2 px-2">
                      <div className="flex items-center justify-between">
                        <a
                          href="#"
                          className="text-black text-sm font-semibold hover:text-gray-200"
                        >
                          FAQ
                        </a>
                        <span className="text-gray-400 text-sm">
                          <MdOutlineArrowForwardIos />
                        </span>
                      </div>
                    </div>
                    <div className="w-full  border-b border-gray-200 py-2 px-2">
                      <div className="flex items-center justify-between">
                        <a
                          href="#"
                          className="text-black text-sm font-semibold hover:text-gray-200"
                        >
                          About us
                        </a>
                        <span className="text-gray-400 text-sm">
                          <MdOutlineArrowForwardIos />
                        </span>
                      </div>
                    </div>
                    <div className="w-full  border-b border-gray-200 py-2 px-2">
                      <div className="flex items-center justify-between">
                        <a
                          href="#"
                          className="text-black text-sm font-semibold hover:text-gray-200"
                        >
                          Contact us
                        </a>
                        <span className="text-gray-400 text-sm">
                          <MdOutlineArrowForwardIos />
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
