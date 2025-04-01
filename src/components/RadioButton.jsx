const RadioButton = ({ title, selected, handleItemChange, subtitle }) => {
  return (
    <div
      className={`flex cursor-pointer items-center rounded-sm border-2 px-4 ${selected === title ? "border-blue-600 bg-blue-100" : "border-gray-300"}`}
    >
      <input
        id={title}
        type="radio"
        value={title}
        name="bordered-radio"
        className="h-5 w-5 border-gray-300 bg-gray-100 text-blue-600"
        checked={selected === title}
        onChange={(e) => handleItemChange(e.target.value)}
      />
      <div className="mx-4 flex w-full flex-col py-3">
        <label
          htmlFor={title}
          className="text-sm font-bold text-gray-900 md:text-base"
        >
          {title}
        </label>
        {subtitle && (
          <label className="text-xs font-medium text-gray-900 md:text-sm">
            {subtitle}
          </label>
        )}
      </div>
    </div>
  )
}

export default RadioButton
