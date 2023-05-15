import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//Screens
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SingupPage } from './pages/SingupPage';
import { LoginPage } from './pages/LoginPage';
import { ContentPage } from './pages/ContentPage';
import { ContactsPage } from './pages/ContactsPage';
//Components
import Navbar from './components/Navbar';
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <Router>
      <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/singup" element={<SingupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/content" element={
              <ProtectedRoute>
              <ContentPage/>
              </ProtectedRoute>
            } />
            <Route path="/contact" element={
              <ProtectedRoute>
              <ContactsPage/>
              </ProtectedRoute>
            } />
            <Route path="/uploads" element={
              <ProtectedRoute>
              <ContentPage/>
              </ProtectedRoute>
            } />
          </Routes>
        </main>
    </Router>
  );
}

export default App;
