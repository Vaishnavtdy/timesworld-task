import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/LoginPage";
import Home from "./pages/Home/HomePage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import LayoutWrapper from "./components/layout/LayoutWrapper";

export default function App() {
  return (
    <BrowserRouter>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </LayoutWrapper>
    </BrowserRouter>
  );
}
