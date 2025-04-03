import React from "react";
import Navbar from "./pages/navbar";
import HeroSection from "./pages/HeroSection";
import LoanPlusAdvantages from "./pages/LoanPlusAdvantages";
import WhoUseServices from "./pages/WhoUseServices";
import StepToGetLoan from "./pages/StepToGetLoan";
import ClearLoanTerms from "./pages/ClearLoanTerms";
import CustomerReview from "./pages/CustomerReview";

import InfoLoan from "./pages/InfoLoan";
import Footer from "./pages/Footer";

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
