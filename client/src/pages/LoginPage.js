import "./PageStyle.css";
import React from "react";
//Components
import Login from '../components/Login'

const LoginPage = () => {
    return (
        <div className="main-container">
            <div className="content">
                <Login />
            </div>
        </div>
    );
  }

export { LoginPage };