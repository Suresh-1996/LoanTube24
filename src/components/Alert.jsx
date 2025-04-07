import { ChevronRight, X } from "lucide-react";
import React from "react";

const Alert = ({ setOpen }) => {
  return (
    <div className="font-inter lg:h-[4.375rem] h-[3.75rem] w-screen border-b border-gray-200 bg-[#F7F7FA] py-[0.46875rem] fixed top-0 left-0 right-0 z-[1000]">
      <div className="mx-auto flex lg:h-[3.375rem] h-[2.75rem] lg:w-[71.25rem] w-[22.5rem] items-center md:justify-between justify-center">
        <div className="flex w-full justify-center">
          <div className="flex h-full w-[34rem] cursor-pointer items-center justify-between rounded-lg border border-gray-300 bg-[#fff] px-3 lg:py-4 py-1">
            <div className="flex items-center md:gap-3   ">
              <div className="flex items-center lg:w-full font-bold gap-1 text-[10px] lg:text-base whitespace-nowrap">
                <span>Loan</span>
                <span className="text-[#EE5A30]">(Tube 24)</span>
              </div>
              <span className="hidden lg:block whitespace-nowrap ">
                Add the LoanTube site shortcut to your desktop
              </span>
              <span className="block lg:hidden whitespace-wrap text-[6px]">
                Add the LoanPlus website shortcut in the menu of your smartphone
              </span>
            </div>
            <ChevronRight size={20} className="text-[#EE5A30]" />
          </div>
        </div>
        <div
          className="  ml-[0.9375rem] cursor-pointer "
          onClick={() => setOpen(false)}
        >
          <X className="text-gray-400  " size={18} />
        </div>
      </div>
    </div>
  );
};

export default Alert;
