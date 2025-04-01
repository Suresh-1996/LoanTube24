import { useState } from "react"
import RadioButton from "../components/RadioButton"

const EmploymentStatusPage = () => {
  const [selected, setSelected] = useState("")

  const handlePurposeChange = (selectedItem) => {
    setSelected(selectedItem)
  }

  const employmentStatus = [
    { title: "Full Time", subtitle: "I work 30+ hours per week" },
    { title: "Part Time", subtitle: "I work less than 30 hours per week" },
    { title: "Self Employed", subtitle: "I work for myself" },
    { title: "Retired", subtitle: "I am retired" },
    { title: "Military", subtitle: "I am in the military" },
    { title: "Unemployed", subtitle: "I am currently unemployed" },
    { title: "Other", subtitle: "My employment status is different" },
  ]

  return (
    <div className="flex w-full flex-col items-center px-4 py-8 md:px-16 lg:px-48 lg:py-16 xl:px-86 2xl:px-160">
      <h1 className="text-center font-serif text-[34px] leading-10 font-medium md:text-[44px] md:leading-13">
        What's your employment status?
      </h1>
      <div className="mt-8 flex w-full flex-col gap-3 lg:mt-10">
        {employmentStatus.map((status, index) => (
          <RadioButton
            title={status.title}
            subtitle={status.subtitle}
            selected={selected}
            handleItemChange={handlePurposeChange}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default EmploymentStatusPage
