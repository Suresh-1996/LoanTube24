import { useState } from "react";
import {
  FaEnvelope,
  FaWhatsapp,
  FaCommentDots,
  FaTimes,
  FaPhone,
} from "react-icons/fa";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-10 right-5 z-50 flex flex-col items-end">
      {/* Contact Button */}

      {/* Expandable Icons */}
      {isOpen && (
        <div className="flex flex-col items-center gap-3 mt-2">
          <a
            href="mailto:your-email@example.com"
            className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition"
          >
            <FaEnvelope size={20} className="text-white" />
          </a>
          <a
            href="https://wa.me/your-number"
            className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition"
          >
            <FaWhatsapp size={20} className="text-white" />
          </a>
          <a
            href="https://your-chat-link"
            className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition"
          >
            <FaCommentDots size={20} className="text-white" />
          </a>
        </div>
      )}
      <button
        className="w-14 h-14 bg-purple-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={24} /> : <FaPhone size={24} />}
      </button>
    </div>
  );
};

export default FloatingContact;
