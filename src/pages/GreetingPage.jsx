import React from "react";
import { useNavigate } from "react-router-dom";

const GreetingPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="w-screen px-4 md:px-16 lg:px-48 xl:px-100 2xl:px-160">
      <div className="flex w-full flex-col items-center py-8 lg:py-16">
        <h1 className="font-playfair text-center text-[34px] leading-10 font-semibold md:text-[44px] md:leading-14">
          Thank you for submitting. <br />
          Our lending officer will contact you to assist with your request.
        </h1>
        <button
          onClick={handleClick}
          className="mt-10 w-full cursor-pointer rounded-sm bg-[#006642] p-4 text-sm font-bold text-white"
        >
          BACK TO HOMEPAGE
        </button>
      </div>
    </div>
  );
};

export default GreetingPage;
