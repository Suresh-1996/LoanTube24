import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FloatingContact from "./components/FloatingContact";
import React, { useEffect, useState } from "react";
import Navbar from "./pages/navbar";
import HeroSection from "./pages/HeroSection";
import LoanTubeAdvantages from "./pages/LoanTubeAdvantages";
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
import EmploymentStatusPage from "./pages/EmploymentStatusPage";
import PayFrequencyPage from "./pages/PayFrequencyPage";
import AnnualIncomePage from "./pages/AnnualIncomePage";
import HousingTypePage from "./pages/HousingTypePage";
import DateofBirthPage from "./pages/DateofBirthPage";
import ZipCodePage from "./pages/ZipCodePage";
import StreetAddressPage from "./pages/StreetAddressPage";
import GreetingPage from "./pages/GreetingPage";
import Alert from "./components/Alert";
import HowToBarrow from "./pages/HowToBarrow";
import HowToRepay from "./pages/HowToRepay";
import ContactNumber from "./pages/ContactNumber";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogCarousel from "./pages/BlogCarousel";
import BlogPage from "./pages/BlogPage";

function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {open && <Alert setOpen={setOpen} />}
              <Navbar open={open} />
              <HeroSection open={open} />
              <BlogCarousel />
              <LoanTubeAdvantages />
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
        \
        <Route path="/loanPurpose" element={<LoanPurposePage />} />
        <Route path="/" element={<Layout />}>
          <Route path="requestAmountPage" element={<RequestAmountPage />} />
          <Route path="creditRatingPage" element={<CreditRatingPage />} />
          <Route
            path="employmentStatusPage"
            element={<EmploymentStatusPage />}
          />
          <Route path="payFrequencyPage" element={<PayFrequencyPage />} />
          <Route path="annualIncomePage" element={<AnnualIncomePage />} />
          <Route path="housingTypePage" element={<HousingTypePage />} />
          <Route path="dateofBirthPage" element={<DateofBirthPage />} />
          <Route path="zipCodePage" element={<ZipCodePage />} />
          <Route path="streetAddressPage" element={<StreetAddressPage />} />
          <Route path="greetingPage" element={<GreetingPage />} />
          <Route path="howToBarrow" element={<HowToBarrow />} />
          <Route path="howToRepay" element={<HowToRepay />} />
          <Route path="contactNumber" element={<ContactNumber />} />

          <Route path="/blog/:slug" element={<BlogPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
