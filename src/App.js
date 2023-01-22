import React from "react";
// import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Hero from "./Components/Hero";
import Crousel from "./Components/Crousel";
import Portal from "./Components/Portal";

export default function App() {
  return (
    <>
      <Router>        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portal" element={<Portal />} />
        </Routes>
      </Router>
    </>
  );
}
