const RadioButton = ({ item, selected, handleItemChange }) => {
  return (
    <div
      className={`flex items-center rounded-sm border-2 px-4 ${selected === item ? "border-blue-400 bg-blue-50" : "border-gray-200"}`}
    >
      <input
        id={item}
        type="radio"
        value={item}
        name="bordered-radio"
        className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600"
        checked={selected === item}
        onChange={(e) => handleItemChange(e.target.value)}
      />
      <label
        htmlFor={item}
        className="ms-2 w-full py-4 text-sm font-medium text-gray-900"
      >
        {item}
      </label>
    </div>
  )
}

export default RadioButton
