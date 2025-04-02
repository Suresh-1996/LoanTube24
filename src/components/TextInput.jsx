const TextInput = ({ label }) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        id="floating_outlined"
        className="peer block w-full appearance-none rounded-sm border-1 border-gray-300 bg-transparent px-3.5 py-4 text-gray-900 hover:border-black focus:border-2 focus:border-[#006642] focus:outline-none"
        placeholder=" "
      />
      <label
        for="floating_outlined"
        className="absolute start-1 top-0 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-3 text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#006642] rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
      >
        {label}
      </label>
    </div>
  )
}

export default TextInput
