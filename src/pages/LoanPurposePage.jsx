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
  ]

  return (
    <div className="my-8 flex w-full flex-col items-center md:my-10">
      <h1 className="text-center font-serif text-[34px] leading-10 font-medium md:w-[70%] md:text-[44px] md:leading-13 lg:w-[50%]">
        How are you going to use the money?
      </h1>
      <div className="mt-8 flex w-[90%] flex-col gap-3 md:my-10 md:w-[85%] lg:w-[65%]">
        {purposes.map((purpose, index) => (
          <RadioButton
            item={purpose}
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
