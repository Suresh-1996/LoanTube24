import React from "react";
import { GoPerson } from "react-icons/go";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineEventNote } from "react-icons/md";

const StepToGetLoan = () => {
  return (
    <div className="flex items-center justify-center w-full bg-[#fa6237]">
      <div className=" flex w-6xl  pb-10 flex-col flex-initial justify-center items-center">
        <div className="pt-16 pb-8 font-semibold">
          <h1 className="text-[32px] font-bold text-white">
            Easy and fast services to get loan
          </h1>
        </div>
        <div className="grid grid-cols-4 gap-10 group w-full ">
          <div className="border-none rounded-xl shadow-md  bg-white  ">
            <div className="flex  p-5 justify-start flex-col ">
              <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#fcd9cf] ">
                <span className=" text-[#fa6237] text-[20px] font-bold">1</span>
              </div>
              <div className="flex flex-col gap-2 py-4">
                <div>
                  <h2 className="text-[20px] font-semibold text-gray-800">
                    Choose the loan loan amount
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="border-none rounded-xl shadow-md  bg-white  ">
            <div className="flex  p-5 justify-start flex-col ">
              <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#fcd9cf]">
                <span className=" text-[#fa6237]  text-[20px] font-bold">
                  2
                </span>
              </div>
              <div className="flex flex-col gap-2 py-4">
                <div>
                  <h2 className="text-[20px] font-semibold text-gray-800">
                    Complete the form with personal data
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="border-none rounded-xl shadow-md  bg-white  ">
            <div className="flex  p-5 justify-start flex-col ">
              <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#fcd9cf] ">
                <span className=" text-[#fa6237] text-[20px] font-bold">3</span>
              </div>
              <div className="flex flex-col gap-2 py-4">
                <div>
                  <h2 className="text-[20px] font-semibold text-gray-800">
                    Wait for review results
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="border-none rounded-xl shadow-md  bg-white  ">
            <div className="flex  p-5 justify-start flex-col ">
              <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#fcd9cf] ">
                <span className=" text-[#fa6237]  text-[20px] font-bold">
                  4
                </span>
              </div>
              <div className="flex flex-col gap-2 py-4">
                <div>
                  <h2 className="text-[20px] font-semibold text-gray-800">
                    Choose the loan amount
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" py-10">
          <button
            className="w-full px-20 py-2 text-white rounded-full text-lg font-bold transition duration-300  hover:shadow-gray-50 hover:shadow-sm"
            style={{
              background:
                "radial-gradient(125% 135% at 85.42% 0%, #9c2402 0%, #EE5A30 100%)",
            }}
            onMouseEnter={(e) =>
              (e.target.style.background =
                "radial-gradient(125% 110% at 50% -10%, #9c2402 0%, #EE5A30 100%)")
            }
            onMouseLeave={(e) =>
              (e.target.style.background =
                "radial-gradient(125% 135% at 85.42% 0%, #9c2402 0%, #EE5A30 100%)")
            }
          >
            Take a loan
          </button>
        </div>
      </div>
    </div>
  );
};
export default StepToGetLoan;
