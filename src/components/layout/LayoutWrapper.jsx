import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function LayoutWrapper({ children }) {
  const location = useLocation();

  const hideLayout = location.pathname === "/login";

  return (
    <>
      {!hideLayout && <Header />}

      {children}

      {!hideLayout && <Footer />}
    </>
  );
}
