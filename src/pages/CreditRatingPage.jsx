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
    <div className="flex w-full flex-col items-center px-4 py-8 md:px-14 lg:px-46 lg:py-16 xl:px-98 2xl:px-158">
      <h1 className="font-playfair text-center text-[34px] leading-10 font-semibold md:text-[44px] md:leading-13">
        How would you rate your credit?
      </h1>
      <div className="mt-8 flex w-full flex-col gap-3 md:mt-12">
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
