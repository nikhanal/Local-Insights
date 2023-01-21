import React from "react";
import { IconButton, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import SignIn from "./SignIn";
import "./hero.css";

function Hero() {
  const [displaySignIn, setDisplaySignIn] = React.useState(false);
  const handlelogin = () => {
    setDisplaySignIn(true);
  };
  const handleloginclose = () => {
    setDisplaySignIn(false);
  };
  return (
    <>
      <section className="hero">
        <section className="hero-top">
          <div className="hero-top-left">
            <NavLink
              to="/"
              className="navbar-logo"
              style={{ textDecoration: "none" }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#439A97",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  fontFamily: "helvetica",
                  letterSpacing: ".2rem",
                  textDecoration: "none",
                  lineHeight: "1",
                }}
              >
                LOCAL <br /> INSIGHTS
              </Typography>
            </NavLink>
          </div>
          <div className="hero-top-right">
            <NavLink
              to="/login"
              className="navbar-link"
              style={{ textDecoration: "none" }}
            >
              <Typography
                sx={{
                  color: "#439A97",
                  fontSize: "1rem",
                  fontFamily: "helvetica",
                  textDecoration: "none",
                }}
                onClick={handlelogin}
              >
                Login
              </Typography>
            </NavLink>
            <SignIn open={displaySignIn} onClose={handleloginclose} />
          </div>
        </section>
        <section className="hero-mid">
          <div className="hero-mid-title">
            <Typography
              sx={{
                color: "#439A97",
                fontSize: "3rem",
                fontFamily: "helvetica",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Places you want to explore
            </Typography>
          </div>
          <div className="hero-mid-search">
            <div className="hero-mid-search-icon">
              <SearchIcon sx={{ color: "#439A97" }}></SearchIcon>
            </div>
            <input
              className="hero-mid-search-input"
              type="text"
              placeholder="Search for places you want to visit"
            ></input>
          </div>
          <div className="hero-mid-guide">
            <NavLink
              to="/become-a-guide"
              className="navbar-link"
              style={{ textDecoration: "none" }}
            >
              <Typography
                sx={{
                  color: "#439A97",
                  fontSize: "1rem",
                  fontFamily: "helvetica",
                  textDecoration: "none",
                }}
              >
                Become A Guide
              </Typography>
            </NavLink>
          </div>
        </section>
      </section>
    </>
  );
}

export default Hero;
