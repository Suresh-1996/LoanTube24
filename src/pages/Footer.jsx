import React, { useState } from "react";
import TermsModal from "./TermsModal";
import PrivacyPolicy from "./PrivacyPolicy";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  return (
    <footer className="bg-[#330b00] text-white py-10 ">
      <div className=" flex  flex-col w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3  gap-8 mb-8">
          {/* Contact Info */}
          <div className=" py-2 space-y-7">
            <div className="flex items-center space-x-4">
              <img src="phone-2.svg" alt="phone" className="w-[35px] h-35px" />
              <div>
                <p className=" font-bold text-base">+94 11 44 111 22</p>
                <p className="text-gray-400 text-sm">Mon - Sat: 08am - 05pm</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="email-2.svg"
                alt="email"
                className="w-[35px] h-[35px]"
              />
              <p className="text-md font-bold">info@loanplus.lk</p>
            </div>
            <div className="flex items-center space-x-4">
              <img src="time-2.svg" alt="time" className="w-35px h-[35px]" />
              <p className="text-md font-bold">Mon - Sat: 08am - 05pm</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="py-2 space-y-2">
            <div className=" space-y-3 ">
              {[
                "How to borrow",
                "How to repay",
                "FAQ",
                "About us",
                "Contact us",
              ].map((item, index) => (
                <p
                  key={index}
                  className="text-md font-bold hover:text-indigo-600 cursor-pointer"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Social Networks */}
          <div className=" py-2 space-y-18">
            <div className="flex justify-between items-center ">
              <p className="text-md font-bold">Our social networks</p>
              <div className="flex space-x-4 ">
                <img
                  src="Facebook.webp"
                  alt="fb"
                  className="text-2xl text-gray-400 cursor-pointer hover:text-white"
                />
                <img
                  src="insgram.png"
                  alt="fb"
                  className="text-2xl text-gray-400 cursor-pointer hover:text-white"
                />
                <img
                  src="linkIn.png"
                  alt="fb"
                  className="text-2xl text-gray-400 cursor-pointer hover:text-white"
                />
              </div>
            </div>

            {/* Mobile App Section */}
            <div className="flex flex-col space-y-2">
              <p className="text-lg font-bold">Download our Mobile App</p>
              <a href="#" className="block mt-1">
                <img src="goolePlay.svg" alt="Google Play" className="w-30" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-col justify-start gap-2">
            <p className="text-white text-[10px] mb-4 md:mb-0">
              © 2025 All Rights Reserved.
            </p>

            <div className="flex space-x-10">
              <p className="text-sm">
                <button
                  onClick={() => setIsPrivacyModalOpen(true)}
                  className="text-[#EE5A30] underline hover:text-[#d14a27] transition duration-300"
                >
                  Privacy and Policy
                </button>
              </p>
              <p className="text-sm">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-[#EE5A30] underline hover:text-[#d14a27] transition duration-300"
                >
                  Terms and Conditions
                </button>
              </p>
              {/* Modal Component */}
            </div>
          </div>
        </div>
        <TermsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
        <PrivacyPolicy
          isPrivacyOpen={isPrivacyModalOpen}
          onClose={() => setIsPrivacyModalOpen(false)}
        />
      </div>
    </footer>
  );
};

export default Footer;
