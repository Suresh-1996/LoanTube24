import React, { useState } from "react";

const InfoLoan = () => {
  const [showMore, setShowMore] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  const toggleServices = () => {
    setShowServices(!showServices);
  };

  return (
    <div className="lg:w-6xl mx-auto py-6 bg-white px-2 lg:px-0 ">
      <h2 className="text-xl font-bold text-gray-700 mb-4 w-full">
        Welcome to <span className="text-[#EE5A30]"> LoanTube24</span> - Your
        Ultimate Online Loan Solution!
      </h2>

      <div className="mb-6">
        <p className="text-gray-700 mb-4 text-justify">
          At <span className="text-[#EE5A30]"> LoanTube24</span>, we understand
          that unexpected expenses can be stressful. That's why we offer a
          quick, hassle-free solution to get the cash you need—right when you
          need it. Say goodbye to long queues and endless paperwork! Our online
          loan application process is simple, fast, and user-friendly. With just
          an internet connection, a few minutes of your time, and the necessary
          documents, you can get approved instantly.
        </p>
        <p className="text-gray-700 mb-4 text-justify">
          We offer flexible loan terms designed to suit your needs, ensuring you
          have access to quick cash without the hassle. Whether you need to
          cover emergency expenses, pay off bills, or fund a personal project,
          <span className="text-[#EE5A30]"> LoanTube24</span> is here to help!
        </p>

        {showMore && (
          <>
            <h1 className="font-semibold mb-4 text-[26px]">
              How to Get a Profitable Loan Online?
            </h1>
            <p className="text-gray-700 mb-4 text-justify">
              Online loans are an excellent option when unexpected expenses
              arise. Traditional bank loans can take weeks or even months to
              process, but with online cash loans, you can receive funds almost
              instantly.
            </p>
            <p className="text-justify">
              Whether it's for paying off bills, covering medical expenses, or
              handling other financial needs, an online cash loan provides a
              fast and convenient way to access the money you need—without
              unnecessary delays.
            </p>

            <h1 className="font-semibold mb-4 text-[26px]">
              How Can Online Loans Help You?
            </h1>
            <p className="text-justify">
              Looking for a way to manage sudden expenses without financial
              strain? Online loans provide a flexible and accessible solution.
              Whether you're facing an emergency or just need temporary
              financial relief,{" "}
              <span className="text-[#EE5A30]"> LoanTube24 </span> offers a
              convenient option.
            </p>

            <h2 className="text-xl font-bold text-gray-700 mb-4">
              Common Reasons for Online Loans:
            </h2>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                <strong>Delayed Wages & Unexpected Bills:</strong> Need to pay
                expenses while waiting for your salary? A quick loan can bridge
                the gap.
              </li>
              <li className="mb-2">
                <strong>Medical Expenses:</strong> Cover urgent medical bills
                without delay.
              </li>
              <li className="mb-2">
                <strong>Home Improvements:</strong> Fund essential repairs or
                renovations.
              </li>
              <li className="mb-2">
                <strong>Travel & Vacations:</strong> Make your dream trip a
                reality with an affordable loan.
              </li>
            </ul>
            <p className="text-justify mb-4">
              No matter the reason,{" "}
              <span className="text-[#EE5A30]"> LoanTube24 </span> ensures that
              you have fast and reliable financial support when you need it
              most.
            </p>

            <h1 className="font-semibold mb-4 text-[26px]">
              How to Apply for a Loan?
            </h1>
            <p className="text-justify mb-4">
              Applying for an online loan with{" "}
              <span className="text-[#EE5A30]"> LoanTube24 </span>is quick and
              easy! Follow these simple steps:
            </p>

            <h3 className="font-semibold text-lg mb-2">
              Step 1: Create Your Account
            </h3>
            <p className="text-justify mb-4">
              Fill out a short form with your personal details and required
              documents. This takes only a few minutes.
            </p>

            <h3 className="font-semibold text-lg mb-2">
              Step 2: Sign the Contract
            </h3>
            <p className="text-justify mb-4">
              Confirm your consent to obtain the loan online. You'll receive a
              verification code for added security.
            </p>

            <h3 className="font-semibold text-lg mb-2">
              Step 3: Receive Your Money
            </h3>
            <p className="text-justify mb-4">
              Once approved, funds will be transferred directly to your bank
              account within minutes!
            </p>
            <p className="text-justify mb-4">
              With our streamlined process, getting a loan has never been
              easier.
            </p>

            <h1 className="font-semibold mb-4 text-[26px]">
              Hassle-Free Loan to Your Card
            </h1>
            <p className="text-justify mb-4">
              With <span className="text-[#EE5A30]"> LoanTube24 </span>, your
              approved loan is deposited directly into your bank card—no extra
              steps required. Our service operates 24/7, allowing you to apply
              for loans anytime, even on weekends and holidays.
            </p>

            <h1 className="font-semibold mb-4 text-[26px]">
              Who Qualifies for an Online Loan?
            </h1>
            <p className="text-justify mb-4">
              To apply for a loan with{" "}
              <span className="text-[#EE5A30]"> LoanTube24 </span>, you need to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                Be between 20 to 60 years old with a stable income
              </li>
              <li className="mb-2">
                Provide accurate personal and banking details
              </li>
              <li className="mb-2">
                Have a registered phone number under your name
              </li>
              <li className="mb-2">
                Submit a valid ID, Passport, or Driver's License for
                verification
              </li>
            </ul>
            <p className="text-justify mb-4">
              That's it! We make sure the process is as simple and stress-free
              as possible.
            </p>

            <h1 className="font-semibold mb-4 text-[26px]">
              Tips for Taking an Online Loan
            </h1>
            <p className="text-justify mb-4">
              To make the most of your loan experience, follow these tips:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                Understand the terms before signing the contract.
              </li>
              <li className="mb-2">
                Provide accurate details to avoid delays in processing.
              </li>
              <li className="mb-2">
                Make timely repayments to avoid additional fees.
              </li>
              <li className="mb-2">
                Plan ahead to ensure smooth repayment without financial stress.
              </li>
            </ul>
            <p className="text-justify mb-4">
              By following these simple guidelines, you can enjoy the benefits
              of an online loan without any complications.
            </p>

            <h1 className="font-semibold mb-4 text-[26px]">Get in Touch!</h1>
            <p className="text-justify mb-4">
              If you have any questions or need assistance, our support team is
              here to help. Feel free to reach out via email at{" "}
              <span>
                {" "}
                <a href="#" className="underline text-black">
                  info@loantube24.com
                </a>
              </span>
              .
            </p>
            <p className="text-justify">
              Apply today and take control of your financial future with
              LoanTube24!
            </p>
          </>
        )}

        <button
          onClick={toggleReadMore}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          {showMore ? "Show less" : "Read more"}
        </button>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleServices}
        >
          <h2 className="text-xl font-semibold text-gray-800">
            Lending services
          </h2>
          <svg
            className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
              showServices ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {showServices && (
          <div className="mt-4 gap-2 flex justify-start items-center">
            <button className="py-2 px-4 bg-gray-100 shadow-md hover:bg-gray-200 rounded-md text-gray-500 font-medium text-left">
              Cash Loan 24
            </button>
            <button className="py-2 px-4 bg-gray-100 hover:bg-gray-200 shadow-md rounded-md text-gray-500 font-medium text-left">
              Fast cash loan
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoLoan;
