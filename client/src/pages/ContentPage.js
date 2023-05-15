import "./ContentPage.css";
import React from "react";
//Components
import DownloadItem from '../components/DownloadItem';

const ContentPage = () => {
    return (
        <div className="main-container">
            <h3>Protected Content</h3>
            <h3>You have to singup and be logged in to see this page</h3>
            <div className="main-content-area">
            <h1>PDF File Example</h1>
            <h3>Now you can press the button:</h3>
            <div><DownloadItem /></div>
            </div>
        </div>
    );
  }

export { ContentPage };