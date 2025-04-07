import React from "react";
import { GoPerson } from "react-icons/go";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineEventNote } from "react-icons/md";

const WhoUseServices = () => {
  return (
    <div className="flex items-center justify-center w-full ">
      <div className=" flex w-6xl  pb-10 flex-col flex-initial justify-center items-center">
        <div className="flex flex-col justify-center items-center text-center pt-16 pb-8 font-semibold">
          <h1 className="text-[28px] md:text-[32px] font-bold text-black ">
            Who can use our services ?
          </h1>
        </div>
        <div className="grid md:grid-cols-3 lg:gap-10 group w-full grid-cols-1 gap-2 px-2 lg:px-0">
          <div className="border-none rounded-xl shadow-md  bg-[#fa6237]   ">
            <div className="flex  p-5 justify-self-start flex-col ">
              <div className="pb-4">
                <GoPerson className="w-[50px] h-[50px] rounded-full bg-white p-2 text-[#EE5A30] " />
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <h2 className="text-[20px] font-semibold text-white">Age</h2>
                </div>
                <div>
                  <p className="text-[16px] font-medium text-white">
                    20-60 years old
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-none rounded-xl shadow-md  bg-[#fa6237]  w-full ">
            <div className="flex  p-5 justify-self-start flex-col">
              <div className="pb-4">
                <SlLocationPin className="w-[50px] h-[50px] rounded-full   bg-white p-2 text-[#EE5A30]" />
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <h2 className="text-[20px] font-semibold text-white">
                    Location
                  </h2>
                </div>
                <div>
                  <p className="text-[16px] font-medium text-white">
                    Resident on Worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-none rounded-xl shadow-md  bg-[#fa6237]  w-full ">
            <div className="flex  p-5 justify-self-start flex-col">
              <div className="pb-4">
                <MdOutlineEventNote className="w-[50px] h-[50px] rounded-full  bg-white p-2 text-[#EE5A30]" />
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <h2 className="text-[20px] font-semibold text-white">
                    Occupation
                  </h2>
                </div>
                <div>
                  <p className="text-[16px] font-medium text-white">
                    Have an income
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" py-10">
          <button
            className="w-full px-20 py-2 text-white rounded-full  hover:shadow-gray-50 hover:shadow-sm text-lg font-bold transition duration-300"
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
export default WhoUseServices;
