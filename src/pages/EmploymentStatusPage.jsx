import { useState } from "react";
import RadioButton from "../components/RadioButton";
import { useNavigate } from "react-router-dom";

const EmploymentStatusPage = () => {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();
  const handlePurposeChange = (selectedItem) => {
    setSelected(selectedItem);
    navigate("/payFrequencyPage");
  };

  const employmentStatus = [
    { title: "Full Time", subtitle: "I work 30+ hours per week" },
    { title: "Part Time", subtitle: "I work less than 30 hours per week" },
    { title: "Self Employed", subtitle: "I work for myself" },
    { title: "Retired", subtitle: "I am retired" },
    { title: "Military", subtitle: "I am in the military" },
    { title: "Unemployed", subtitle: "I am currently unemployed" },
    { title: "Other", subtitle: "My employment status is different" },
  ];

  return (
    <div className="flex w-full flex-col items-center px-6 py-8 md:px-14 lg:px-46 lg:py-16 xl:px-97 2xl:px-158">
      <h1 className="font-playfair text-center text-[34px] leading-10 font-semibold md:text-[44px] md:leading-13">
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
  );
};

export default EmploymentStatusPage;
