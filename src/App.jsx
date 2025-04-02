import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import LoanPlusAdvantages from "./components/LoanPlusAdvantages";
import WhoUseServices from "./components/WhoUseServices";
import StepToGetLoan from "./components/StepToGetLoan";
import ClearLoanTerms from "./components/ClearLoanTerms";
import CustomerReview from "./components/CustomerReview";

import InfoLoan from "./components/InfoLoan";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <LoanPlusAdvantages />
      <WhoUseServices />
      <StepToGetLoan />
      <ClearLoanTerms />
      <CustomerReview />
      <InfoLoan />
      <Footer />
    </div>
  );
}

export default App;
