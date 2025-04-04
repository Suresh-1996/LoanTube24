import React from "react";
import { GoPerson } from "react-icons/go";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineEventNote } from "react-icons/md";

const ClearLoanTerms = () => {
  return (
    <div className="flex items-center justify-center w-full ">
      <div className=" flex w-6xl  pb-10 flex-col flex-initial justify-center items-center">
        <div className="flex flex-col justify-center items-center text-center pt-16 pb-8 font-semibold">
          <h1 className="text-[28px] md:text-[32px] font-bold text-black ">
            Clear loan terms
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 group w-full px-2 lg:px-0 ">
          <div className="  bg-[#fa6237] shadow-sm shadow-gray-400 min-h-35 lg:min-h-0 ">
            <div className="flex  pt-6 pb-10 justify-center items-center flex-col lg:border-r border-gray-50  border-b lg:border-b-0">
              <div className="flex flex-col  justify-center items-center gap-5 ">
                <div>
                  <h2 className="text-[20px] font-bold text-white">Terms</h2>
                </div>
                <div>
                  <p className="text-[16px] font-medium text-white">
                    5 days to 30 days
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="  bg-[#fa6237]  border-r border-gray-50 shadow-sm min-h-35 lg:min-h-0 shadow-gray-400  ">
            <div className="flex  pt-6 justify-center items-center flex-col lg:border-r border-gray-50  border-b lg:border-b-0 ">
              <div className="flex flex-col justify-center items-center gap-6">
                <div>
                  <h2 className="text-[20px] font-bold text-white">Amounts</h2>
                </div>
                <div>
                  <p className="text-[16px] font-medium text-white">
                    5000 to 200,000
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="   bg-[#fa6237] shadow-sm shadow-gray-400 min-h-35 lg:min-h-0 ">
            <div className="flex  pt-6  justify-center items-center flex-col   ">
              <div className="flex flex-col justify-center items-center gap-6 ">
                <div>
                  <h2 className="text-[20px] font-bold text-white">
                    Free( Consulting services)
                  </h2>
                </div>
                <div className="w-full flex flex-col justify-center items-center px-4">
                  <p className="text-[16px] font-medium text-white text-center max-w-[90%]">
                    Interest rate - 0%, Consulting fee - 0.7%, Service fee -
                    1.5%, Transaction fee from 1%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" py-1 px-2 lg:px-0 ">
          <p className="p-2 font-base text-gray-700">
            A representative example: You apply for Rs. 10,000 and choose
            comfortable repayment over 10 days, your payment will be only Rs.
            12,300 per 10 days, so your total cost of the loan will be Rs. 2300
            per 10 days
          </p>
        </div>
      </div>
    </div>
  );
};
export default ClearLoanTerms;
