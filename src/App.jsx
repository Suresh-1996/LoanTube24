import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FloatingContact from "./components/FloatingContact";

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
import LoanPurposePage from "./pages/LoanPurposePage";
import RequestAmountPage from "./pages/RequestAmountPage";
import CreditRatingPage from "./pages/CreditRatingPage";
import Layout from "./layout/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HeroSection />
              <LoanPlusAdvantages />
              <WhoUseServices />
              <StepToGetLoan />
              <ClearLoanTerms />
              <CustomerReview />
              <InfoLoan />
              <Footer />
              <FloatingContact />
            </>
          }
        />
        <Route path="/loanPurpose" element={<LoanPurposePage />} />
        <Route path="/" element={<Layout />}>
          <Route path="requestAmountPage" element={<RequestAmountPage />} />
          <Route path="creditRatingPage" element={<CreditRatingPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
