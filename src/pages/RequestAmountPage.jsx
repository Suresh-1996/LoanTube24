import { useState } from "react";

const RequestAmountPage = () => {
  const [value, setValue] = useState(9000);

  const min = 2000;
  const max = 100000;

  const progress = ((value - min) / (max - min)) * 100;

  return (
    <div className="w-screen px-3 md:px-16 lg:px-48 xl:px-100 2xl:px-160">
      <div className="flex w-full flex-col items-center py-8 lg:py-16">
        <h1 className="font-playfair text-center text-[34px] leading-10 font-semibold md:text-[44px] md:leading-14">
          What's your estimated <br /> debt balance?
        </h1>
        <div className="relative mt-8 flex w-full flex-col items-center gap-3 lg:mt-12">
          <h2 className="mb-4 text-[2.5rem] text-[#008254]">
            ${value.toLocaleString()}
          </h2>
          <div className="w-full px-4">
            <input
              type="range"
              min={min}
              max={max}
              step={100}
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              style={{
                background: `linear-gradient(to right, #008254 ${progress}%, #E5E7EB ${progress}%)`,
              }}
              className="h-4 w-full cursor-pointer appearance-none rounded-lg"
            />
          </div>
          <span className="absolute start-0 -bottom-9 text-sm font-semibold md:text-base">
            $2,000
          </span>
          <span className="absolute end-0 -bottom-9 text-sm font-semibold md:text-base">
            $100,000
          </span>
        </div>
        <button className="mt-15 w-full cursor-pointer rounded-sm bg-[#006642] p-4 text-sm font-bold text-white">
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default RequestAmountPage;
