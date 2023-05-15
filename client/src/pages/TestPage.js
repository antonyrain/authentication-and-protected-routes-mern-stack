import React from "react";
//Hooks
import { useState, useEffect } from "react";
//Services
import { getAll, create } from "../services/notes";
import { singup } from "../services/singup";
import { login } from "../services/login";


const TestPage = () => {
  
    return (
        <div className="test-screen-container">
          <h1>Test Screen</h1>
          <h3>You are Logged in</h3>
        </div>
      );
  }

export { TestPage };
