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
    <div className="mt-5 flex w-full flex-col items-center md:mt-10">
      <h1 className="text-center font-serif text-3xl font-medium md:text-4xl">
        How are you going to use <br /> the money?
      </h1>
      <div className="my-5 flex w-[85%] flex-col gap-3 md:my-10 md:w-[45%]">
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
