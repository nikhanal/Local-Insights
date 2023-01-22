import React from "react";
import { NavLink } from "react-router-dom";
import Hero from "./Hero";
import Crousel from "./Crousel";

function Home() {
  return (
    <>
      <Hero />

      <Crousel title="Trending Local Sites" />
      <Crousel title="Exquisite Local Foods" />
    </>
  );
}

export default Home;
