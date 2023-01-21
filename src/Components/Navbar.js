import React from "react";
import { Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import "./nav.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
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
        <div className="navbar-center">
          <div className="navbar-search">
            <div className="navbar-search-icon">
              <SearchIcon sx={{ color: "#439A97" }}></SearchIcon>
            </div>
            <input></input>
          </div>
        </div>
        <div className="navbar-right">
          <div className="navbar-guide">
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
          <div className="navbar-login">
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
              >
                Login
              </Typography>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
