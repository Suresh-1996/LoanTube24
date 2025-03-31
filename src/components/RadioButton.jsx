const RadioButton = ({ item, selected, handleItemChange }) => {
  return (
    <div
      className={`flex cursor-pointer items-center rounded-sm border-2 px-4 ${selected === item ? "border-blue-600 bg-blue-100" : "border-gray-200"}`}
    >
      <input
        id={item}
        type="radio"
        value={item}
        name="bordered-radio"
        className="h-5 w-5 border-gray-300 bg-gray-100 text-blue-600"
        checked={selected === item}
        onChange={(e) => handleItemChange(e.target.value)}
      />
      <label
        htmlFor={item}
        className="mx-4 w-full py-4 text-sm font-semibold text-gray-900 md:text-base"
      >
        {item}
      </label>
    </div>
  )
}

export default RadioButton
