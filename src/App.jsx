import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/LoginPage";
import Home from "./pages/Home/HomePage";
import LayoutWrapper from "./components/layout/LayoutWrapper";

export default function App() {
  return (
    <BrowserRouter>
      <LayoutWrapper>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </LayoutWrapper>
    </BrowserRouter>
  );
}
