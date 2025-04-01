import { useState } from "react"
import RadioButton from "../components/RadioButton"

const HousingTypePage = () => {
  const [selected, setSelected] = useState("")

  const handlePurposeChange = (selectedItem) => {
    setSelected(selectedItem)
  }

  const housingTypes = [
    { title: "Renter", subtitle: "I am renting my current residence" },
    { title: "Homeowner", subtitle: "I own my current residence" },
    { title: "Other", subtitle: "Neither of these apply to me" },
  ]

  return (
    <div className="flex w-full flex-col items-center px-4 py-8 md:px-13 lg:px-45 lg:py-16 xl:px-89 2xl:px-157">
      <h1 className="text-center font-serif text-[34px] leading-10 font-medium md:text-[44px] md:leading-13">
        Do you rent or own your home?
      </h1>
      <div className="mt-8 flex w-full flex-col gap-3 lg:mt-10">
        {housingTypes.map((type, index) => (
          <RadioButton
            title={type.title}
            subtitle={type.subtitle}
            selected={selected}
            handleItemChange={handlePurposeChange}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default HousingTypePage
