import React from "react";

const LoanTubeAdvantages = () => {
  return (
    <div className="flex items-center justify-center w-full bg-[#fa6237] ">
      <div className=" flex w-6xl flex-col  flex-initial justify-center items-center">
        <div className="flex flex-col justify-center items-center text-center pt-16 pb-8 font-semibold">
          <h1 className="text-[28px] md:text-[32px] font-bold text-white ">
            Loan Tube 24 advantages
          </h1>
        </div>

        <div className="grid md:grid-cols-3   lg:gap-10 grid-cols-1 gap-2 px-2 lg:px-0 ">
          <div className="border-none rounded-xl shadow-md  bg-white  w-full ">
            <div className="flex  p-5 items-center justify-center flex-col">
              <div>
                <img src="fast-money.png" alt="fast-payment-image" />
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <h2 className="text-[20px] font-semibold">Fast money</h2>
                </div>
                <div>
                  <p className="text-[16px] font-medium text-gray-800">
                    We are transfer up to 200,000 instantly to your account
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-none rounded-xl shadow-md bg-white  w-full ">
            <div className="flex  p-5 items-center justify-center flex-col">
              <div>
                <img src="simple-process.png" alt="simple-process-image" />
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <h2 className="text-[20px] font-semibold">Fast money</h2>
                </div>
                <div>
                  <p className="text-[16px] font-medium text-gray-800">
                    We are transfer up to 200,000 instantly to your account
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-none rounded-xl shadow-md bg-white  w-full ">
            <div className="flex  p-5 items-center justify-center flex-col">
              <div>
                <img src="easy-payment.png" alt="easy-payment-image" />
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <h2 className="text-[20px] font-semibold">Fast money</h2>
                </div>
                <div>
                  <p className="text-[16px] font-medium text-gray-800">
                    We are transfer up to 200,000 instantly to your account
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
export default LoanTubeAdvantages;
