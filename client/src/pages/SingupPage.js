import "./PageStyle.css";
import React from "react";
//Components
import Login from '../components/Login';
import Singup from '../components/Singup';

const SingupPage = () => {
    return (
        <div className="main-container">
            <Singup />
        </div>
    );
  }

export { SingupPage };