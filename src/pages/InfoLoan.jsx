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
      <h2 className="text-xl font-bold text-gray-700 mb-4 w-full   ">
        Information about the owner of the website providing payday loans online
      </h2>

      <div className="mb-6 ">
        <p className="text-gray-700 mb-4  text-justify  ">
          Welcome to LoanPlus, your one-stop solution for hassle-free online
          cash loans in Sri Lanka! We understand that unexpected expenses can be
          a major headache, but with our quick and easy loan services, you can
          get the cash you need in no time. Gone are the days of lengthy queues
          - our online loan application process is both simple and
          user-friendly. All you need is an internet connection, a few minutes
          of your time, and the necessary documents to get approved. With
          LoanPlus, you can rest assured that you will get the best possible
          loan terms to suit your needs. Our services offer quick and easy
          access to money when you need it most, without the added stress of
          reams of work and long wait times.
        </p>

        {showMore && (
          <>
            <h1 className="font-semibold mb-4 text-[26px]">
              How to get a profitable loan online?
            </h1>
            <p className="text-gray-700 mb-4 text-justify ">
              Online loans are an excellent option if you’re facing unexpected
              expenses or struggling to make ends meet. With just a few clicks,
              you can apply for a loan and receive the money you need to get
              your budget back on track. Traditional loans can take weeks or
              even months to process, but with online cash loans, you’ll have
              the funds in your account in no time.
            </p>
            <p className="text-justify ">
              Whether you need to pay off bills, cover medical expenses, or
              anything else, an online cash loan is a great way to get the
              monetary support you need without any hassle.Whether you need to
              pay off bills, cover medical expenses, or anything else, an online
              cash loan is a great way to get the monetary support you need
              without any hassle.
            </p>
            <h1 className="font-semibold mb-4 text-[26px]">
              How can online loans help you out?
            </h1>
            <p className="text-justify ">
              Looking for a way to handle those unexpected expenses without
              scrambling for cash? Look no further than online loans! In Sri
              Lanka, fast and easy access to credit can provide you with the
              relief you need when unexpected situations arise. Whether you’re
              facing a medical emergency, sudden home repair needs, or simply
              need to cover expenses until your next paycheck, online loans can
              be a helpful option. Explore how this flexible and accessible
              monetary tool can help you when you need it most.
            </p>
            <h2 className="text-xl font-bold text-gray-700 mb-4">
              Delayed wages and unexpected expenses:
            </h2>
            <p className="text-justify ">
              Do you have bills to pay, but you’re waiting for your paycheck? An
              online loan can be a great bridge between now and then, allowing
              you to cover the costs until you receive your salary.
            </p>
            <h2 className="text-xl font-bold text-gray-700 mb-4">
              Covering medical expenses:
            </h2>
            <p className="text-justify ">
              Unexpected medical bills can quickly add up, leaving you feeling
              overwhelmed. With an online loan, you can get instant access to
              cash to cover straightforward medical treatments or long-term
              procedures.
            </p>
            <h2 className="text-xl font-bold text-gray-700 mb-4">
              Home improvements:
            </h2>
            <p className="text-justify ">
              A loan can help you cover the costs of home repairs and
              renovations, giving your house the facelift it needs while staying
              within budget.
            </p>
            <h2 className="text-xl font-bold text-gray-700 mb-4">
              Vacation and travel expenses:
            </h2>
            <p className="text-justify ">
              A loan can help you cover the costs of that special vacation or a
              weekend getaway, allowing you to enjoy your well-earned break
              without breaking the bank.
            </p>
            <p className="text-justify ">
              No matter what unexpected situation arises, an online cash loan is
              a great way to get the funds you need quickly and easily. Start
              your journey with LoanPlus today!
            </p>
            Where is the easiest and fastest way to get a loan online in Sri
            Lanka?
            <h1 className="font-semibold mb-4 text-[26px]">
              Where is the easiest and fastest way to get a loan online in Sri
              Lanka?
            </h1>
            <p className="text-justify ">
              If you’re looking for the easiest and fastest way to get a loan
              online in Sri Lanka, it’s important to know that most online
              lending services are only provided by MFOs. Banks may have online
              application options, but they often require a visit to a branch
              for in-person communication with a credit manager. This can lead
              to a registration process that lasts several working days.
            </p>
            <p className="text-justify">
              However, if you’re in need of quick online credit in Sri Lanka,
              LoanPlus offers a user-friendly approach where you can easily and
              efficiently fill out your application details and provide the
              necessary documents for credit processing. We offer a range of
              loan options, from short-term loans to long-term loans with
              favorable repayment terms. At LoanPlus, we provide an
              uncomplicated online loan application process that is safe,
              secure, and convenient.
            </p>
            <h1 className="font-semibold  mb-4 text-[26px]">
              How to apply for a loan
            </h1>
            <p className="text-justify">
              Applying for an online loan has never been easier! With LoanPlus,
              you can complete the entire process from the comfort of your own
              home in just a few simple steps
            </p>
            <h2 className="text-xl font-bold text-gray-700 mb-4">
              Step 1: Create your account
            </h2>
            <p className="text-justify">
              To get started, simply complete a short form with your personal
              data using your ID and phone number. This shouldn’t take you more
              than a few minutes.
            </p>
            <h2 className="text-xl font-bold text-gray-700 mb-4">
              Step 2: Sign the contract
            </h2>
            <p className="text-justify">
              Next, confirm your consent to obtain the loan online. You’ll
              receive a confirmation code via SMS.
            </p>
            <h2 className="text-xl font-bold text-gray-700 mb-4">
              Step 3: Get the money
            </h2>
            <p className="text-justify">
              We’ll transfer up to Rs 200,000 in cash or a loan to your account
              instantly in just over a minute!
            </p>
            <p className="text-justify">
              Don’t let the loan application process stress you out. With
              LoanPlus, you’ll have the money you need when you need it, all
              with just a few clicks.
            </p>
            <h1 className="font-semibold mb-4 text-[26px]">
              Get our Hassle-Free Loan to Card! System
            </h1>
            <p className="text-justify">
              With our online loan system, you can have your loan deposited
              directly onto any bank card without any extra steps. Plus, our
              extensive network of partner banks ensures that your loan will be
              conveniently applied to the card of your choosing.
            </p>
            <p className="text-justify">
              But wait, there’s more! Our services are available 24/7, meaning
              you can apply for your loan at any time, even on weekends and
              holidays. Our user-friendly online application makes the process a
              breeze, so you can get on the path to economic success faster.
            </p>
            <h1 className="font-semibold mb-4 text-[26px]">
              Who Qualifies for our Online Loan
            </h1>
            <p className="text-justify">
              In order to get an online loan on your card, you simply need to
              meet the following requirements:
            </p>
            <ul className="list-disc pl-4 py-2">
              <li>
                Be between the ages of 20 and 60, and have a source of steady
                income
              </li>
              <li>Provide accurate personal and bank account information</li>

              <li>Use a phone number that’s registered under your name</li>
              <li>Provide a landline number for your workplace</li>
              <li>
                Submit a photo of your National Identity Card, Passport, or
                Driving License for identification purposes
              </li>
            </ul>
            <p className="text-justify">
              That’s it! With LoanPlus, getting an online loan has never been
              easier. Apply today and get the funds you need when you need them.
            </p>
            <h1 className="font-semibold mb-4 text-[26px]">
              Tips for Taking Online Loan
            </h1>
            <p className="text-justify">
              Getting an online loan can be a great way to cover monetary
              emergencies or make necessary investments. However, it’s important
              to make sure you use the funds responsibly. Here are some tips to
              keep in mind:
            </p>
            <ul className="list-disc pl-4 py-2 ">
              <li>
                Make sure you understand all the terms and conditions before
                signing your contract.
              </li>
              <li>Provide accurate personal and bank account information</li>

              <li>
                Make sure to pay your loans on time and in full, as late
                payments may incur additional fees or higher interest rates.
              </li>
              <li>
                Ensure that you have a plan in place to pay back the entire
                loan.e
              </li>
              <li>
                Keep track of your payments by making regular payments and
                budgeting accordingly.
              </li>
            </ul>
            <p className="text-justify">
              By following these simple tips, you can make sure that taking an
              online loan is a hassle-free and beneficial experience. With
              LoanPlus, you can get the money you need quickly, securely, and
              conveniently. Get started today!
            </p>
            <h1 className="font-semibold mb-4 text-[26px]">Get in Touch!</h1>
            <p className="text-justify">
              If you have any questions about our online loan services, please
              feel free to contact us. Our customer service representatives are
              always happy to assist and answer any of your queries. Apply today
              and start building a brighter economic future!
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
          <div className="mt-4 gap-2 flex justify-start items-center ">
            <button className=" py-2 px-4 bg-gray-100 shadow-md hover:bg-gray-200 rounded-md text-gray-500 font-medium text-left">
              Cash Loan 24
            </button>
            <button className=" py-2 px-4 bg-gray-100 hover:bg-gray-200 shadow-md rounded-md text-gray-500 font-medium text-left">
              Fast cash loan
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoLoan;
