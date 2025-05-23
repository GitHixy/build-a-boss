import React from "react";
import "../App.css";
import logo from '/boss-logo2.svg';
import { FaCrown, FaDragon, FaTrophy } from 'react-icons/fa';
import MusicToggle from "../components/MusicToggle"; // Import MusicToggle component

function HomePage() {
  return (
    <div className="homepage-container">
      {/* Animated Sparkles - random movement */}
      <div className="sparkle s1" style={{left:'10%', top:'20%', zIndex:1}}></div>
      <div className="sparkle s2" style={{left:'80%', top:'30%', zIndex:1}}></div>
      <div className="sparkle s3" style={{left:'50%', top:'70%', zIndex:1}}></div>
      <div className="sparkle s4" style={{left:'30%', top:'60%', zIndex:1}}></div>
      <div className="sparkle s5" style={{left:'70%', top:'15%', zIndex:1}}></div>
      <div className="sparkle s6" style={{left:'20%', top:'80%', zIndex:1}}></div>
      <div className="sparkle s7" style={{left:'60%', top:'50%', zIndex:1}}></div>
      <div className="sparkle s8" style={{left:'40%', top:'10%', zIndex:1}}></div>
      <div className="sparkle s9" style={{left:'85%', top:'60%', zIndex:1}}></div>
      <div className="sparkle s10" style={{left:'5%', top:'40%', zIndex:1}}></div>
      <div className="sparkle s11" style={{left:'35%', top:'35%', zIndex:1}}></div>
      <div className="sparkle s12" style={{left:'55%', top:'75%', zIndex:1}}></div>
      <div className="sparkle s13" style={{left:'15%', top:'85%', zIndex:1}}></div>
      <div className="sparkle s14" style={{left:'92%', top:'12%', zIndex:1}}></div>
      <div className="sparkle s15" style={{left:'60%', top:'5%', zIndex:1}}></div>
      <div className="sparkle s16" style={{left:'25%', top:'55%', zIndex:1}}></div>
      <header className="homepage-header">
        <img src={logo} alt="Build-a-Boss Logo" className="homepage-logo" />
        <h1>Build a Boss</h1>
        <p className="homepage-subtitle">
          Create, train, and evolve your fantasy boss. <br></br>Challenge the community and climb the leaderboard!
        </p>
      </header>
      <main className="homepage-main">
        <div className="homepage-card">
          <h2><FaDragon style={{color:'#f7c873', marginRight:8}}/> What is BaB?</h2>
          <p>
            An asynchronous PvE simulator where you can design your own boss, program its moves, and see if other players can defeat it. The more your boss wins, the higher it climbs in the rankings!
          </p>
        </div>
        <div className="homepage-actions">
          <button className="homepage-btn"><FaCrown style={{marginRight:8}}/>Create Your Boss</button>
          <button className="homepage-btn homepage-btn-secondary"><FaTrophy style={{marginRight:8}}/>Browse Bosses</button>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
