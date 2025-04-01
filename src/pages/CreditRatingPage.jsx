import { useState } from "react"
import RadioButton from "../components/RadioButton"

const CreditRatingPage = () => {
  const [selected, setSelected] = useState("")

  const handlePurposeChange = (selectedItem) => {
    setSelected(selectedItem)
  }

  const rates = [
    { title: "Excellent", subtitle: "720 or higher" },
    { title: "Good", subtitle: "680 - 719" },
    { title: "Fair", subtitle: "640 - 679" },
    { title: "Poor", subtitle: "Less than 640" },
  ]

  return (
    <div className="my-8 flex w-full flex-col items-center md:my-15">
      <h1 className="text-center font-serif text-[34px] leading-10 font-medium md:w-[90%] md:text-[44px] md:leading-13 lg:w-[90%]">
        How would you rate your credit?
      </h1>
      <div className="mt-8 flex w-[90%] flex-col gap-3 md:my-10 md:w-[85%] lg:w-[65%]">
        {rates.map((rate, index) => (
          <RadioButton
            title={rate.title}
            subtitle={rate.subtitle}
            selected={selected}
            handleItemChange={handlePurposeChange}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default CreditRatingPage
