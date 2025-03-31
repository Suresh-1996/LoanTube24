import React, { useState } from "react"
import Header from "../components/Header"

const RequestAmountPage = () => {
  const [value, setValue] = useState(9000)

  const min = 2000
  const max = 100000

  const progress = ((value - min) / (max - min)) * 100

  return (
    <div className="w-[90%] md:w-[60%] lg:w-[50%]">
      <div className="mt-10 flex w-full flex-col items-center">
        <h1 className="text-center font-serif text-3xl font-medium md:text-4xl">
          What's your estimated <br /> debt balance?
        </h1>
        <div className="relative my-10 flex w-full flex-col items-center gap-3">
          <h2 className="mb-4 text-4xl text-green-800">
            ${value.toLocaleString()}
          </h2>
          <input
            type="range"
            min={min}
            max={max}
            step={100}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            style={{
              background: `linear-gradient(to right, #16A34A ${progress}%, #E5E7EB ${progress}%)`,
            }}
            className="h-3 w-[90%] cursor-pointer appearance-none rounded-lg md:w-[95%]"
          />
          <span className="absolute start-0 -bottom-9 font-medium text-gray-500">
            $2,000
          </span>
          <span className="absolute end-0 -bottom-9 font-medium text-gray-500">
            $100,000
          </span>
        </div>
        <button className="mt-5 w-full cursor-pointer rounded-sm bg-green-800 py-3 text-sm font-bold text-white">
          CONTINUE
        </button>
      </div>
    </div>
  )
}

export default RequestAmountPage
