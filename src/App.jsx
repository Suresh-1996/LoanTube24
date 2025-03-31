// function App() {
//   return (
//     <div>
//       <h1 className="text-red-500">This is Loan tube 24</h1>
//     </div>
//   );
// }

// export default App;


import Header from "./components/Header"
import LoanPurposePage from "./pages/LoanPurposePage"
import RequestAmountPage from "./pages/RequestAmountPage"

const App = () => {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col items-center">
      <Header />
      {/* <LoanPurposePage /> */}
      <RequestAmountPage />
    </div>
  )
}

export default App
