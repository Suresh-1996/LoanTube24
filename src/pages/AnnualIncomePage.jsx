import { useState } from "react"

const AnnualIncomePage = () => {
  const [value, setValue] = useState(9000)

  const min = 0
  const max = 150000

  const progress = ((value - min) / (max - min)) * 100

  return (
    <div className="w-screen px-3 md:px-16 lg:px-48 xl:px-100 2xl:px-160">
      <div className="flex w-full flex-col items-center py-8 lg:py-16">
        <h1 className="font-playfair text-center text-[34px] leading-10 font-semibold md:text-[44px] md:leading-14">
          What's your estimated <br /> annual income?
        </h1>
        <div className="relative mt-8 flex w-full flex-col items-center gap-3 lg:mt-12">
          <h2 className="mb-4 text-[2.5rem] text-[#008254]">
            {value.toLocaleString() === "0"
              ? "No Income"
              : value.toLocaleString() === "150,000"
                ? "Over $150000+"
                : `$${value.toLocaleString()}`}
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
            No Income
          </span>
          <span className="absolute end-0 -bottom-9 text-sm font-semibold md:text-base">
            Over $150,000+
          </span>
        </div>
        <button className="mt-15 w-full cursor-pointer rounded-sm bg-[#006642] p-4 text-sm font-bold text-white">
          CONTINUE
        </button>
        <p className="mt-8 text-center text-xs">
          Calculate your available gross income including wages, retirement,
          investments, and rental properties. Alimony, child support, or
          separate maintenance is optional and does not need to be included
          unless you want it to be considered as a basis for repaying the loan.
          If applicable, include self-employment salary. For total commission
          earnings, provide an annual. Increase any non-taxable income or
          benefits by 25%.
        </p>
      </div>
    </div>
  )
}

export default AnnualIncomePage
