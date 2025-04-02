import { useState } from "react"
import RadioButton from "../components/RadioButton"

const LoanPurposePage = () => {
  const [selected, setSelected] = useState("")

  const handlePurposeChange = (selectedItem) => {
    setSelected(selectedItem)
  }

  const purposes = [
    "Debt consolidation",
    "Medical",
    "Home improvement",
    "Credit card consolidation",
    "Auto",
    "Motorcycle",
    "Major purchase",
    "Start a business",
    "Grow my business",
    "Education",
    "Vacation",
    "Wedding",
    "IRS tax debt",
    "Other",
  ]

  return (
    <div className="flex w-full flex-col items-center px-4 py-8 md:px-16 lg:px-48 lg:py-16 xl:px-101 2xl:px-161">
      <h1 className="font-playfair text-center text-[34px] leading-10 font-semibold md:w-[80%] md:text-[44px] md:leading-13 xl:w-[90%]">
        How are you going to use the money?
      </h1>
      <div className="mt-8 flex w-full flex-col gap-3 lg:mt-10">
        {purposes.map((purpose, index) => (
          <RadioButton
            title={purpose}
            selected={selected}
            handleItemChange={handlePurposeChange}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default LoanPurposePage
