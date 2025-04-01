import { useState } from "react"
import RadioButton from "../components/RadioButton"

const PayFrequencyPage = () => {
  const [selected, setSelected] = useState("")

  const handlePurposeChange = (selectedItem) => {
    setSelected(selectedItem)
  }

  const payFrequencies = [
    { title: "Weekly", subtitle: "I get paid every week" },
    { title: "Bi-Weekly", subtitle: "I get paid every two week" },
    { title: "Semi-Monthly", subtitle: "I get paid twice per month" },
    { title: "Monthly", subtitle: "I get paid once per month" },
    { title: "Other", subtitle: "My pay schedule is different" },
  ]

  return (
    <div className="flex w-full flex-col items-center px-4 py-8 md:px-13 lg:px-45 lg:py-16 xl:px-84 2xl:px-157">
      <h1 className="text-center font-serif text-[34px] leading-10 font-medium md:w-[80%] md:text-[44px] md:leading-13">
        How often do you get paid?
      </h1>
      <div className="mt-8 flex w-full flex-col gap-3 lg:mt-10">
        {payFrequencies.map((frequency, index) => (
          <RadioButton
            title={frequency.title}
            subtitle={frequency.subtitle}
            selected={selected}
            handleItemChange={handlePurposeChange}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default PayFrequencyPage
