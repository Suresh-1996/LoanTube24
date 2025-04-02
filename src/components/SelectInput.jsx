import React, { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"

const SelectInput = ({ options, label }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState("")
  const [selectedLabel, setSelectedLabel] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const [dropdownPosition, setDropdownPosition] = useState("bottom")
  const dropdownRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const calculateDropdownPosition = () => {
    if (inputRef.current) {
      const inputRect = inputRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const spaceBelow = windowHeight - inputRect.bottom
      const spaceAbove = inputRect.top
      const dropdownHeight = Math.min(options.length * 40, 240) // Assuming each option is 40px high, max 240px

      if (spaceBelow < dropdownHeight && spaceAbove > spaceBelow) {
        setDropdownPosition("top")
      } else {
        setDropdownPosition("bottom")
      }
    }
  }

  const toggleDropdown = () => {
    if (!isOpen) {
      calculateDropdownPosition()
    }
    setIsOpen(!isOpen)
  }

  const selectOption = (value, label) => {
    setSelectedValue(value)
    setSelectedLabel(label)
    setIsOpen(false)
  }

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div className="relative">
        <div
          ref={inputRef}
          className="flex w-full cursor-pointer items-center justify-between rounded-sm border border-gray-300 bg-white px-3 py-5 pt-4 shadow-sm hover:border-black focus:border-2 focus:border-[#006642] focus:outline-none"
          onClick={toggleDropdown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          tabIndex={0}
        >
          <span className={selectedValue ? "text-gray-900" : "text-gray-400"}>
            {selectedLabel || " "}
          </span>
          <ChevronDown
            className={`h-4 w-4 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </div>

        <label
          className={`pointer-events-none absolute px-1 text-lg transition-all duration-200 ${
            selectedValue || isOpen
              ? `-top-2 left-2 bg-white text-xs ${isFocused ? "text-[#006642]" : "text-gray-500"}`
              : "top-3 left-3 text-gray-500"
          }`}
        >
          {label}
        </label>

        {isOpen && (
          <div
            className={`absolute z-10 w-full overflow-auto rounded-md border border-gray-300 bg-white shadow-lg ${
              dropdownPosition === "top"
                ? "bottom-[calc(100%+0.25rem)] max-h-[15rem]"
                : "top-[calc(100%+0.25rem)] max-h-[15rem]"
            }`}
          >
            {options.map((option) => (
              <div
                key={option.value}
                className={`cursor-pointer px-3 py-2 hover:bg-green-50 ${
                  selectedValue === option.value
                    ? "bg-green-100 text-[#006642]"
                    : "text-gray-900"
                }`}
                onClick={() => selectOption(option.value, option.label)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default SelectInput
