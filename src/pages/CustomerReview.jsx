import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    name: "Malith",
    text: "I searched for instant loans on Google as I was in an immediate need of money. I found LoanPlus and I applied for it. The eligibility criteria was minimal and fees were also nominal. Fast processing and disbursal as per the promise. Thank you.",
  },
  {
    name: "Arosha",
    text: "I've had a loan from this company before and have found their website easy to use and the money was in my account within a matter of minutes. Will use again if I need any more home improvements doing.",
  },
  {
    name: "Raveena",
    text: "Excellent Support! I got my loan approved on the same day when I applied. Good service!!",
  },
  {
    name: "Samantha",
    text: "Excellent Support! I got my loan approved on the same day when I applied. Good service!!",
  },
];

const CustomerReview = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3); // default for desktop

  // Update visibleCount on window resize
  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth < 768 ? 1 : 3); // <768px is mobile
    };

    handleResize(); // check initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxStartIndex = reviews.length - visibleCount;

  const prevReview = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const nextReview = () => {
    if (startIndex < maxStartIndex) {
      setStartIndex(startIndex + 1);
    }
  };

  const visibleReviews = reviews.slice(startIndex, startIndex + visibleCount);
  const isAtBeginning = startIndex === 0;
  const isAtEnd = startIndex >= maxStartIndex;

  return (
    <div className="flex items-center justify-center w-full bg-[#fa6237]">
      <div className="flex w-full max-w-6xl flex-col justify-center items-center px-2 lg:px-0">
        <div className="flex flex-col justify-center items-center text-center pt-16 pb-8 font-semibold">
          <h1 className="text-[28px] md:text-[32px] font-bold text-white ">
            Customer reviews
          </h1>
        </div>

        <div className="flex justify-center mt-8 w-full overflow-hidden">
          <div
            className={`w-full grid grid-cols-1 md:grid-cols-${visibleCount} gap-6 relative`}
          >
            <AnimatePresence mode="popLayout">
              {visibleReviews.map((review, i) => (
                <motion.div
                  key={i + startIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="p-6 bg-white rounded-lg shadow-md flex flex-col min-h-[300px]"
                >
                  <FaQuoteLeft className="text-[#EE5A30] text-2xl" />
                  <div className="flex flex-col flex-grow justify-between">
                    <p className="mt-4 text-gray-800">{review.text}</p>
                    <p className="text-gray-500 mt-4 self-start">
                      {review.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-4 pb-16">
          <button
            onClick={prevReview}
            className={`p-2 rounded-full ${
              isAtBeginning
                ? "bg-gray-200 cursor-not-allowed"
                : "bg-[#9c2402] text-white"
            }`}
            disabled={isAtBeginning}
          >
            <FiChevronLeft
              className={`text-lg ${
                isAtBeginning ? "text-gray-400" : "text-white"
              }`}
            />
          </button>
          <button
            onClick={nextReview}
            className={`p-2 rounded-full ${
              isAtEnd
                ? "bg-gray-200 cursor-not-allowed"
                : "bg-[#9c2402] text-white"
            }`}
            disabled={isAtEnd}
          >
            <FiChevronRight
              className={`text-lg ${isAtEnd ? "text-gray-400" : "text-white"}`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
