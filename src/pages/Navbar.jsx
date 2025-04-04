import React from "react"
import { IoLogIn } from "react-icons/io5"
import { useState, useEffect } from "react"

const Navbar = ({ open }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className={`fixed ${
        open ? "top-17" : "top-0"
      } left-0 w-full bg-white  transition-all duration-300 z-50 ${
        isScrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <nav
        className={`bg-white transition-all duration-300 ${
          isScrolled ? "py-3" : "py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center transition-all duration-300">
            <span
              className={`font-bold mr-1 transition-all duration-300 ${
                isScrolled ? "text-lg" : "text-xl"
              }`}
            >
              Loan
            </span>
            <div className="relative">
              <span
                className={`font-bold text-[#EE5A30] transition-all duration-300 ${
                  isScrolled ? "text-lg" : "text-xl"
                }`}
              >
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
  )
}

export default Navbar
