import React from "react"
import SelectInput from "../components/SelectInput"

const DateofBirthPage = () => {
  const currentYear = new Date().getFullYear()

  const months = Array.from({ length: 12 }, (_, i) => ({
    label: new Date(0, i).toLocaleString("default", { month: "long" }),
    value: new Date(0, i)
      .toLocaleString("default", { month: "long" })
      .toLowerCase(),
  }))

  const dates = Array.from({ length: 31 }, (_, i) => ({
    label: i + 1,
    value: i + 1,
  }))

  const years = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => ({
    label: 1900 + i,
    value: 1900 + i,
  })).reverse()

  return (
    <div className="w-screen px-3 md:px-16 lg:px-48 xl:px-100 2xl:px-160">
      <div className="flex w-full flex-col items-center py-8 lg:py-16">
        <h1 className="font-playfair text-center text-[34px] leading-10 font-semibold md:text-[44px] md:leading-14">
          What's your birthday?
        </h1>
        <div className="mt-8 flex w-full flex-col items-center gap-5 lg:mt-12">
          <SelectInput label="Birth Month" options={months} />
          <SelectInput label="Birth Day" options={dates} />
          <SelectInput label="Birth Year" options={years} />
        </div>
        <button className="mt-8 w-full cursor-pointer rounded-sm bg-[#006642] p-4 text-sm font-bold text-white">
          CONTINUE
        </button>
      </div>
    </div>
  )
}

export default DateofBirthPage
