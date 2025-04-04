import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"

const HeroSection = ({ open }) => {
  const [isNewClient, setIsNewClient] = useState(true)
  const [loanAmount, setLoanAmount] = useState(128000)
  const [showPromo, setShowPromo] = useState(false)
  const [promoCode, setPromoCode] = useState("")
  const navigate = useNavigate()

  const hadleClick = () => {
    navigate("/loanPurpose")
  }

  return (
    <div
      className={`w-full flex items-center justify-center pt-30 ${
        open && "mt-[4.375rem]"
      }`}
    >
      <div className=" flex w-6xl flex-initial pb-25">
        <div className="w-1/2  py-6 pb-14 bg-[#EE5A30] border-none rounded-l-xl">
          <div className=" mt-12">
            <div className="max-w-md mx-auto ">
              <h1 className="text-4xl font-bold">Get online loan</h1>
              <h1 className="text-4xl font-bold ">
                up to <span className="text-[#6552D8]">$200 000</span>
              </h1>
              <div className="pt-4 pb-8">
                <button className="bg-white rounded-full py-2 px-3 text-base font-semibold text-[#4d4d4d]">
                  Loan cost <span className="font-bold">from 0,01%</span>
                </button>
              </div>
            </div>
            <div className="max-w-sm mx-auto p-6 bg-white rounded-2xl shadow-md text-center space-y-6">
              {/* Tabs */}
              <div className="flex justify-center bg-[#fcd9cf] p-1 rounded-full">
                <button
                  onClick={() => setIsNewClient(true)}
                  className={`w-1/2 py-2 rounded-full text-sm font-semibold ${
                    isNewClient ? "text-white" : "text-black"
                  }`}
                  style={
                    isNewClient
                      ? {
                          background:
                            "radial-gradient(125% 125% at 85.42% 0%, #9c2402 0%, #EE5A30 100%)",
                        }
                      : {}
                  }
                >
                  New client
                </button>
                <button
                  onClick={() => setIsNewClient(false)}
                  className={`w-1/2 py-2 rounded-full text-sm font-semibold ${
                    !isNewClient ? "text-white" : "text-black"
                  }`}
                  style={
                    !isNewClient
                      ? {
                          background:
                            "radial-gradient(125% 125% at 85.42% 0%, #9c2402  0%, #EE5A30 100%)",
                        }
                      : {}
                  }
                >
                  Repeat client
                </button>
              </div>

              {/* Loan Slider */}
              <div>
                <div className="flex justify-self-start text-gray-800 text-sm font-medium mb-2  ">
                  Loan amount
                </div>
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>$ 5 000</span>
                  <span className="text-black font-bold text-base ">
                    $ {loanAmount.toLocaleString()}
                  </span>
                  <span>$ 200 000</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="200000"
                  step="1000"
                  value={loanAmount}
                  onChange={e => setLoanAmount(e.target.value)}
                  className="w-full h-3 accent-[#EE5A30] "
                />
              </div>

              {/* Button */}
              <button
                onClick={hadleClick}
                className="w-full py-3 text-white rounded-full text-lg font-bold transition duration-300"
                style={{
                  background:
                    "radial-gradient(125% 125% at 85.42% 0%, #9c2402 0%, #EE5A30 100%)",
                }}
                onMouseEnter={e =>
                  (e.target.style.background =
                    "radial-gradient(125% 110% at 50% -10%, #9c2402 0%, #EE5A30 100%)")
                }
                onMouseLeave={e =>
                  (e.target.style.background =
                    "radial-gradient(125% 135% at 85.42% 0%, #9c2402 0%, #EE5A30 100%)")
                }
              >
                {isNewClient ? "Take a loan" : "Take money"}
              </button>

              {/* Promo Code Section */}
              <div className="text-left">
                <button
                  onClick={() => setShowPromo(!showPromo)}
                  className="flex items-center gap-2 text-sm font-medium text-gray-600"
                >
                  <span>Get special discount</span>
                  {showPromo ? <FiChevronUp /> : <FiChevronDown />}
                </button>

                {/* Promo Code Input */}
                {showPromo && (
                  <div className="flex  mt-3 justify-between gap-2 ">
                    <input
                      type="text"
                      placeholder="Enter promo-code"
                      value={promoCode}
                      onChange={e => setPromoCode(e.target.value)}
                      className="w-full px-4 py-2 border-1 border-gray-400 rounded-lg focus:outline-none placeholder:font-bold placeholder:text-sm"
                    />
                    <button className=" py-2 px-3 bg-[#EE5A30] text-white font-semibold rounded-lg hover:bg-[#9c2402] transition">
                      Apply
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>{" "}
        {/* #E6E1FF */}
        <div className="w-1/2 bg-[#EE5A30] border-none rounded-r-xl ">
          <div className=" flex-wrap group relative  mt-12 py-2 ">
            <div className="absolute border flex-wrap group right-0 mt-4  "></div>
            <img src="wladies.png" alt="ladies image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
