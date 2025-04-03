import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Header />
      <div>
        <Outlet /> {/* This will render Page1, Page2, or Page3 */}
      </div>
    </div>
  );
}
