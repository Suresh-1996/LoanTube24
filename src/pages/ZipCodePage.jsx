import React from "react"

const ZipCodePage = () => {
  return (
    <div className="w-screen px-4 md:px-16 lg:px-48 xl:px-90 2xl:px-160">
      <div className="flex w-full flex-col items-center py-8 lg:py-16">
        <h1 className="text-center font-serif text-[34px] leading-10 font-medium md:text-[44px] md:leading-14">
          What’s your ZIP Code?
        </h1>
        <div className="mt-8 flex w-full flex-col items-center gap-5 lg:mt-12">
          <div className="relative w-full">
            <input
              type="text"
              id="floating_outlined"
              className="peer block w-full appearance-none rounded-sm border-1 border-gray-300 bg-transparent px-3.5 py-4 text-gray-900 hover:border-black focus:border-2 focus:border-[#006642] focus:outline-none"
              placeholder=" "
            />
            <label
              for="floating_outlined"
              className="absolute start-1 top-0 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-3 text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#006642] rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
            >
              ZIP Code
            </label>
          </div>
        </div>
        <button className="mt-8 w-full cursor-pointer rounded-sm bg-[#006642] p-4 text-sm font-bold text-white">
          CONTINUE
        </button>
      </div>
    </div>
  )
}

export default ZipCodePage
