import "./HomePage.css";
import React from "react";
//Hooks
import { useState, useEffect } from "react";
//Services
import { getAll, create } from "../services/review";
//Components
import Login from '../components/Login';
import Reviews from "../components/Reviews";

const HomePage = () => {
  
    const isToken = localStorage.getItem("token")
    const loginMessage = isToken !== null
    ? {display: "none"}
    : {display: "block"}
  
    return (
      <div className="main-container">
          <h1>Front page</h1>
          {/* <span class="gradient-text">business</span> */}
          <img src={"../images/professional-presentation-1.png"} alt="banner" className="banner"/>
          <h3 style={loginMessage}> Log in to leave a message</h3>
          <Reviews />
      </div>
      );
  }

export { HomePage };
