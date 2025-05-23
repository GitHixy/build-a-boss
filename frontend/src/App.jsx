import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { MusicProvider } from "./contexts/MusicContext";
import MusicToggle from "./components/MusicToggle";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <MusicProvider src="/bg-music.mp3" defaultVolume={0.30}>
      <MusicToggle className="music-toggle-fixed" />
      <Router>
        <Navbar />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </MusicProvider>
  );
}

export default App
