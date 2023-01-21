import React from "react";
// import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Hero from "./Components/Hero";
import Crousel from "./Components/Crousel";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Hero />
        <Crousel />
        <Crousel />
      </Router>
    </>
  );
}
