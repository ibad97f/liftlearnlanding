import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Membership from "./pages/Membership";
import Home from "./pages/Home";
import "./App.css";
import DeleteDataRequest from "./pages/Delete";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/delete" element={<DeleteDataRequest />} />
      </Routes>
    </Router>
  );
}

export default App;
