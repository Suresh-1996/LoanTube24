import React from "react";

const PrivacyPolicy = ({ isPrivacyOpen, onClose }) => {
  if (!isPrivacyOpen) return null; // Don't render if not open

  return (
    <div
      className={`fixed inset-0 flex justify-center bg-transparent bg-opacity-0 backdrop-blur-0 transition-all duration-500 ease-in-out ${
        isPrivacyOpen ? "bg-opacity-50 backdrop-blur-sm" : "pointer-events-none" // Prevents interaction when closed
      }`}
      onClick={() => setIsPrivacyModalOpen(false)} // Close when clicking backdrop
    >
      <div
        className={`bg-white rounded-t-lg shadow-xl w-full max-w-4xl max-h-[70vh] flex flex-col transform transition-all duration-500 ease-in-out ${
          isPrivacyOpen ? "translate-y-30" : "translate-y-full" // Moves completely off screen when closed
        }`}
      >
        <div className="p-4 flex justify-between items-center pb-10">
          <div className="flex w-full justify-center items-center ">
            <h2 className="text-3xl font-bold text-gray-800">Privacy Policy</h2>
          </div>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto   scroll-smooth p-8 flex-1  ">
          <div className="prose max-w-none text-black">
            <h4 className="font-bold text-xl  mt-4 mb-2">Overview</h4>
            <p className="mb-4 font-bold text-sm text-gray-800">
              <span className="text-[#EE5A30]">LONE TUBE 24</span>
              ("we," "us," or "our") operates *https://lonetube24.com* (the
              "Website") and related services. This Privacy Policy explains how
              we collect, use, and protect your personal information when you
              use our platform. By accessing our Website or services, you agree
              to this policy.
            </p>
            <p className="mb-4 font-bold text-sm text-gray-800">
              By using the Website, you hereby totally and unconditionally
              acknowledge that you have read, understood, and agreed to be bound
              by all of the terms and conditions (the "Terms & Conditions")
              below, whether or not you are a registered member of the Website.
            </p>
            <div className="mb-8 border-b pb-6">
              <h2 className="text-xl font-semibold mb-3 text-gray-700">
                1. Information We Collect
              </h2>
              <p className="mb-4 text-gray-600">We may collect:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li className="pl-2">
                  <span className="font-medium">Account Data:</span> Name,
                  email, phone number, and credentials when you register.
                </li>
                <li className="pl-2">
                  <span className="font-medium">Transaction Data:</span> Details
                  of loans applied for, repayments, or other services used.
                </li>
                <li className="pl-2">
                  <span className="font-medium">Device/Usage Data:</span> IP
                  address, browser type, pages visited, and cookies (see Section
                  8).
                </li>
                <li className="pl-2">
                  <span className="font-medium">Third-Party Data:</span>{" "}
                  Information from credit bureaus or partners (where legally
                  permitted).
                </li>
              </ul>
            </div>

            <div className="mb-8 border-b pb-6">
              <h2 className="text-xl font-semibold mb-3 text-gray-700">
                2. How We Use Your Data
              </h2>
              <p className="mb-4 text-gray-600">We process your data to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li className="pl-2">
                  Provide and improve our services (e.g., loan processing,
                  account management).
                </li>
                <li className="pl-2">
                  Verify identity, prevent fraud, and comply with laws.
                </li>
                <li className="pl-2">
                  Communicate with you (e.g., updates, customer support).
                </li>
                <li className="pl-2">
                  Personalize ads (with your consent; opt-out anytime).
                </li>
              </ul>
            </div>

            <div className="mb-8 border-b pb-6">
              <h2 className="text-xl font-semibold mb-3 text-gray-700">
                3. Data Sharing
              </h2>
              <p className="mb-4 text-gray-600">We may share your data with:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li className="pl-2">
                  <span className="font-medium">Service Providers:</span> For
                  payment processing, analytics, or customer support.
                </li>
                <li className="pl-2">
                  <span className="font-medium">Legal/Regulatory Bodies:</span>{" "}
                  If required by law (e.g., fraud investigations).
                </li>
                <li className="pl-2">
                  <span className="font-medium">Business Transfers:</span> In
                  case of mergers or acquisitions.
                </li>
                <li className="pl-2">
                  <span className="font-medium">With Your Consent:</span> For
                  third-party marketing (you may withdraw consent).
                </li>
              </ul>
              <p className="mt-4 text-gray-600 font-medium">
                We never sell your personal information.
              </p>
            </div>

            <div className="mb-8 border-b pb-6">
              <h2 className="text-xl font-semibold mb-3 text-gray-700">
                4. Cookies & Tracking
              </h2>
              <p className="mb-4 text-gray-600">We use cookies to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li className="pl-2">Enhance site functionality.</li>
                <li className="pl-2">
                  Analyze traffic (e.g., Google Analytics).
                </li>
                <li className="pl-2">
                  Deliver targeted ads (opt-out via browser settings).
                </li>
              </ul>
            </div>

            <div className="mb-8 border-b pb-6">
              <h2 className="text-xl font-semibold mb-3 text-gray-700">
                5. Your Choices
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li className="pl-2">
                  <span className="font-medium">Access/Update Data:</span>{" "}
                  Contact us at info@lonetube24.com.
                </li>
                <li className="pl-2">
                  <span className="font-medium">Opt-Out:</span> Unsubscribe from
                  marketing emails or disable cookies.
                </li>
                <li className="pl-2">
                  <span className="font-medium">Delete Account:</span> Request
                  deletion (subject to legal retention needs).
                </li>
              </ul>
            </div>

            <div className="mb-8 border-b pb-6">
              <h2 className="text-xl font-semibold mb-3 text-gray-700">
                6. Security
              </h2>
              <p className="text-gray-600">
                We implement SSL encryption, firewalls, and access controls.
                However, no online system is 100% secure—please safeguard your
                login details.
              </p>
            </div>

            <div className="mb-8 border-b pb-6">
              <h2 className="text-xl font-semibold mb-3 text-gray-700">
                7. Children's Privacy
              </h2>
              <p className="text-gray-600">
                Our services are not for users under 18. We delete inadvertently
                collected minor data promptly.
              </p>
            </div>

            <div className="mb-8 border-b pb-6">
              <h2 className="text-xl font-semibold mb-3 text-gray-700">
                8. Global Operations
              </h2>
              <p className="text-gray-600">
                Data may be processed globally, adhering to applicable privacy
                laws.
              </p>
            </div>

            <div className="mb-8 border-b pb-6">
              <h2 className="text-xl font-semibold mb-3 text-gray-700">
                9. Changes to This Policy
              </h2>
              <p className="text-gray-600">
                Updates will be posted here with a new "Last Updated" date.
                Material changes will be notified via email or site alerts.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3 text-gray-700">
                10. Contact Us
              </h2>
              <p className="mb-2 text-gray-600">
                For questions, complaints, or data requests:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li className="pl-2">Email: info@lonetube24.com</li>
                <li className="pl-2">
                  <span className="font-medium">Note:</span> We will never ask
                  for sensitive data (e.g., bank PINs, OTPs) via email.
                </li>
              </ul>
              <p className="mt-4 text-gray-600">
                Complaints will be resolved within 30 days.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div>
              <h3 className="font-bold">For any inquiries</h3>
              <p>contact: Email: info@lonetube24.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
