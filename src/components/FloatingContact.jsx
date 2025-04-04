import { useState } from "react";
import {
  FaEnvelope,
  FaWhatsapp,
  FaCommentDots,
  FaTimes,
  FaPhone,
  FaPhoneAlt,
} from "react-icons/fa";
import PhoneMsgButton from "./PhoneMsgButton";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-10 right-5 z-50 flex flex-col items-end bg-white  hover:shadow-[0px_0px_12px_0px_rgba(255,255,255,1)] p-3 rounded-full ">
      {/* Expandable Icons */}

      {isOpen && (
        <div
          className={`flex flex-col items-center gap-3 mt-2 transition-all duration-500 ${
            isOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-90 translate-y-5 pointer-events-none"
          }`}
        >
          <div className="w-15 h-15 bg-[#fcd9cf] rounded-full flex items-center justify-center">
            <a
              href="mailto:your-email@example.com"
              className="w-12 h-12 bg-[#EE5A30] rounded-full flex items-center justify-center shadow-md hover:scale-110 transition"
            >
              <FaEnvelope size={20} className="text-white" />
            </a>
          </div>
          <div className="w-15 h-15 bg-[#fcd9cf] rounded-full flex items-center justify-center">
            <a
              href="https://wa.me/your-number"
              className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition"
            >
              <FaWhatsapp size={20} className="text-white" />
            </a>
          </div>
          <div className="w-15 h-15 bg-[#fcd9cf] rounded-full flex items-center justify-center">
            <a
              href="https://your-chat-link"
              className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition"
            >
              <FaCommentDots size={20} className="text-white" />
            </a>
          </div>
        </div>
      )}
      <button
        className="w-15 h-15 bg-[#EE5A30] rounded-full flex hover:scale-110 items-center justify-center transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <FaTimes size={24} className="text-white" />
        ) : (
          <PhoneMsgButton size={24} />
        )}
      </button>
    </div>
  );
};

export default FloatingContact;
