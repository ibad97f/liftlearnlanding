import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Membership from "./pages/Membership";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/membership" element={<Membership />} />
      </Routes>
    </Router>
  );
}

export default App;
