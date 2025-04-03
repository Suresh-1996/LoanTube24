import React, { useState } from "react";

const TermsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    // <div
    //   className={`fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50 transition-opacity duration-300 ${
    //     isOpen ? "opacity-100 visible" : "opacity-0 invisible"
    //   }`}
    // >
    //   <div
    //     className={`bg-white rounded-lg shadow-xl  max-w-4xl w-full max-h-[90vh] flex flex-col transform transition-transform duration-500 ${
    //       isOpen ? "scale-100" : "scale-90"
    //     }`}
    //   >

    <div
      className={`fixed inset-0 flex  justify-center bg-transparent bg-opacity-0 backdrop-blur-0 transition-all duration-500 ease-in-out ${
        isOpen ? "bg-opacity-50 backdrop-blur-sm" : "pointer-events-none" // Prevents interaction when closed
      }`}
      onClick={() => setIsOpen(false)} // Close when clicking backdrop
    >
      <div
        className={`bg-white rounded-md shadow-xl w-full max-w-4xl max-h-[70vh] flex flex-col transform transition-all duration-500 ease-in-out ${
          isOpen ? "translate-y-30" : "translate-y-full" // Moves completely off screen when closed
        }`}
      >
        <div className="p-4 flex justify-between items-center pb-10">
          <div className="flex w-full justify-center items-center ">
            <h2 className="text-3xl font-bold text-gray-800">
              Terms & Conditions
            </h2>
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
            <h3 className="text-sm font-semibold text-gray-500 mb-2">
              Effective date: {new Date().toLocaleDateString()}
            </h3>

            <h4 className="font-bold text-xl  mt-4 mb-2">Overview</h4>
            <p className="mb-4 font-bold text-sm text-gray-800">
              <span className="text-[#EE5A30]">LONE TUBE 24</span> (the
              "Company") operates an online platform (presently under the
              website https://lonetube24.com) that connects borrowers and
              lenders and provides certain lending facilitation, management, and
              other services. "LONE TUBE 24" is the brand name of the service
              developed and provided by the Company and will be using the brand
              name in the course of business activities.
            </p>
            <p className="mb-4 font-bold text-sm text-gray-800">
              By using the Website, you hereby totally and unconditionally
              acknowledge that you have read, understood, and agreed to be bound
              by all of the terms and conditions (the "Terms & Conditions")
              below, whether or not you are a registered member of the Website.
            </p>
            {/* Section 1 */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3 text-gray-700">
                1. Composition of the Terms & Conditions
              </h2>
              <p className="mb-4 text-gray-600">
                These Terms & Conditions also include the following additional
                terms which shall apply to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li className="pl-2">
                  <span className="font-medium">
                    Privacy policy and data protection requirements.
                  </span>{" "}
                  Any personal or other sensitive information relating to any
                  user of the Platform will be collected, stored, and
                  transferred with duly confidential measures in strict
                  accordance with applicable laws. By continuing using the
                  Website and by providing information requested by the
                  Platform, you provide your consent for such disclosure;
                </li>
                <li className="pl-2">
                  <span className="font-medium">
                    Lender's terms and conditions.
                  </span>{" "}
                  Users of the Platform intending to act as lenders will be
                  subject to accepting services agreement relating to money
                  lending services on the Platform and lender's terms and
                  conditions. All such texts and documents will be easily
                  accessible on the Website for such users;
                </li>
                <li className="pl-2">
                  <span className="font-medium">Borrower's documentation.</span>{" "}
                  Users of the Platform intending to act as borrowers will be
                  subject to accepting loan agreement establishing rights and
                  obligations between the lender and borrower.
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3 text-gray-700">
                2. Changes in the Terms & Conditions
              </h2>
              <p className="text-gray-600">
                The Terms & Conditions are subject to change from time to time
                unilaterally and without further notification. Any and all
                changes made are timely published on the Website following
                mandatory notification of all registered users of the Platform
                and will be effective as of the date specified in the updated
                version of the Terms & Conditions. Any further use of the
                Platform following the publishing of an updated version of the
                Terms & Conditions shall be deemed as acceptance of the updated
                Terms & Conditions.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3 text-gray-700">
                3. Coverage area
              </h2>
              <p className="text-gray-600">
                The Website is designed to provide financial services globally.
                However, the Website is accessible and open for general use
                worldwide.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3 text-gray-700">
                4. Registration
              </h2>
              <p className="mb-4 text-gray-600">
                By completing registration within the Platform, you hereby
                represent and warrant that:
              </p>
              <ul className="list-[lower-alpha] pl-8 space-y-2 text-gray-600">
                <li className="pl-2">
                  information, declarations, documents, representations, and
                  warranties made, given, or as evidenced by any documents
                  submitted within the Platform are and will continue to be
                  true, accurate, and correct in all respects and will comply
                  with applicable laws and regulations at all times;
                </li>
                <li className="pl-2">
                  you have legal capacity and authority to be bound by a
                  contract (private individuals must be of legal age in their
                  respective jurisdictions);
                </li>
                <li className="pl-2">
                  in case acting as a lender, only own money will be used to
                  provide loans within the Platform pursuant to the Terms &
                  Conditions and lender's terms and conditions; and
                </li>
                <li className="pl-2">
                  prompt notification will be given to the Platform in case of
                  change of residing address, phone number, or email.
                </li>
              </ul>
              <p className="mt-4 text-gray-600">
                The Platform reserves its right to reject registration
                applications as a lender or as a borrower without any reason.
              </p>
              <p className="mt-2 text-gray-600">
                Privacy policy disclosed on the Website must be accepted to
                complete registration within the Platform. Privacy policy
                stipulates Platform's policies on privacy rights regarding the
                collection, use, storage, processing, disclosure, and security
                of users' information when you use the Website.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3 text-gray-700">
                5. Use of the Website
              </h2>
              <p className="mb-4 text-gray-600">
                Use of the Website requires stable and constant internet access
                and may also require periodic hardware or software updates. Any
                and all fees and charges (including telecommunication fees,
                data, etc.) payable in relation to the usage of the Website
                shall be borne by its user.
              </p>
              <p className="mb-4 text-gray-600">
                By using the Website you confirm that you are acting on your own
                behalf and in your interests. If you are using or have plans to
                use the Website on behalf or in the interests of any third
                parties (beneficiaries), you shall immediately stop using the
                Website.
              </p>
              <p className="mb-4 text-gray-600">
                The Website may only be used for a limited purpose indicated
                hereof. The Website may not be used for the following purposes:
              </p>
              <ul className="list-[lower-alpha] pl-8 space-y-2 text-gray-600">
                <li className="pl-2">illegal or unlawful purposes;</li>
                <li className="pl-2">
                  collecting and/or stealing data from the Website, including,
                  inter alia, personal data of other users of the Website;
                </li>
                <li className="pl-2">
                  affecting the performance of the Website in any manner;
                </li>
                <li className="pl-2">
                  disruption of the Website's operations, including, but not
                  limited to, using special codes or software to manipulate or
                  change functions available on the Website; and
                </li>
                <li className="pl-2">
                  any other acts that may do harm to the Website's
                  infrastructure and its facilities.
                </li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3 text-gray-700">
                6. Intellectual property rights
              </h2>
              <p className="mb-4 text-gray-600">
                The Company owns or is duly licensed to use, as applicable, all
                intellectual property rights on the Website, content, and all
                publications thereon.
              </p>
              <p className="text-gray-600">
                Any use of the Website or registration thereto may not be deemed
                as any legal grounds for transferring any kind of intellectual
                property rights or its licensing. Notwithstanding the purposes,
                all trademarks, names, and visual and textual content may be
                used only following prior written authorization by the Company.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3 text-gray-700">
                7. Content
              </h2>
              <p className="mb-4 text-gray-600">
                If you use our features that allow you to upload any content
                into the Website, you are fully responsible for its content.
              </p>
              <p className="text-gray-600">
                The Company reserves its right to remove any content violating
                these Terms & Conditions or applicable laws.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3 text-gray-700">
                8. Limitation of responsibility
              </h2>
              <p className="text-gray-600">
                The Company provides, manages, and operates the Platform between
                registered users. Lending relationships between lenders and
                borrowers are stipulated in the respective loan agreements. The
                Company shall bear no responsibility for any decisions taken by
                any registered users when using the Platform.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3 text-gray-700">
                9. Compensation
              </h2>
              <p className="text-gray-600">
                By using the Website or the Platform, you consent to indemnify
                and waive the Company and its affiliates from any claims arising
                out of your violation of these Terms & Conditions.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3 text-gray-700">
                10. Termination
              </h2>
              <p className="text-gray-600">
                The Company reserves the right to delete accounts, restrict
                access, and terminate relations upon reasonable belief of
                violation of these Terms & Conditions.
              </p>
            </div>

            {/* Section 11 */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3 text-gray-700">
                11. Communication and electronic document
              </h2>
              <p className="text-gray-600">
                By registering, you agree that communication will be made via
                your provided contact details. The Company may communicate via
                various electronic channels.
              </p>
            </div>

            {/* Section 12 */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3 text-gray-700">
                12. Marketing
              </h2>
              <p className="mb-4 text-gray-600">
                By continuing to use the Website, you consent to receive
                marketing content via various communication channels. You may
                withdraw your consent at any time.
              </p>
              <h3 className="text-lg font-medium mb-2 text-gray-700">
                12.1 Loyalty Program
              </h3>
              <p className="text-gray-600">
                Users may receive Loyalty Rewards upon fulfilling specific
                criteria. The Company reserves the right to change or remove the
                program without prior notice.
              </p>
            </div>

            {/* Section 13 */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3 text-gray-700">
                13. Use of cookies and similar technology
              </h2>
              <p className="text-gray-600">
                The Website uses cookies for improving functionality and user
                experience. You can block cookies through your browser settings.
              </p>
            </div>

            {/* Section 14 */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3 text-gray-700">
                14. Third-party Website links
              </h2>
              <p className="text-gray-600">
                The Website may contain third-party links. The Company is not
                responsible for third-party content or data protection policies.
              </p>
            </div>

            {/* Section 15 */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3 text-gray-700">
                15. Taxes/Levies imposed by authorities
              </h2>
              <p className="text-gray-600">
                Users are responsible for any applicable taxes or fees related
                to the services used on the Platform.
              </p>
            </div>

            {/* Section 16 */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3 text-gray-700">
                16. Miscellaneous
              </h2>
              <p className="text-gray-600">
                Users cannot transfer their rights and obligations under these
                Terms & Conditions without prior written consent. The Company
                may transfer its rights without user consent.
              </p>
            </div>

            {/* Section 17 */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3 text-gray-700">
                17. Applicable law and dispute resolution
              </h2>
              <p className="text-gray-600">
                These Terms & Conditions shall be subject to applicable laws.
                Disputes shall be resolved exclusively through arbitration.
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

export default TermsModal;
