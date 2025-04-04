import React from "react";
import { FaCommentDots, FaPhoneAlt } from "react-icons/fa";

const PhoneMsgButton = () => {
  return (
    <div className="relative  w-15 h-15 bg-[EE5A30] rounded-full flex items-center justify-center">
      {/* Phone Icon */}
      <FaPhoneAlt className="absolute text-white size-4   left-4 top-7  text-[14px]" />
      {/* Chat Icon */}
      <FaCommentDots className="absolute text-white size-4  right-4  top-5 text-[18px]" />
    </div>
  );
};

export default PhoneMsgButton;
