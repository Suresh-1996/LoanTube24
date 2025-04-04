import React from "react";
import TextInput from "../components/TextInput";
import { useNavigate } from "react-router-dom";

const StreetAddressPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/greetingPage");
  };
  return (
    <div className="w-screen px-4 md:px-16 lg:px-48 xl:px-100 2xl:px-160">
      <div className="flex w-full flex-col items-center py-8 lg:py-16">
        <h1 className="font-playfair text-center text-[34px] leading-10 font-semibold md:text-[44px] md:leading-14">
          What’s your street address?
        </h1>
        <div className="mt-8 flex w-full flex-col items-center gap-4 lg:mt-12">
          <TextInput label="Street Address" />
          <TextInput label="Apt, Unit, Suite" />
        </div>
        <span className="mt-4 text-xs font-semibold">Some text here</span>
        <button
          onClick={handleClick}
          className="mt-8 w-full cursor-pointer rounded-sm bg-[#006642] p-4 text-sm font-bold text-white"
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default StreetAddressPage;
