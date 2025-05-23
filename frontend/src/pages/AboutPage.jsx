import React from "react";
import "../App.css";
import { FaDragon } from "react-icons/fa";

function AboutPage() {
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
      <div className="about-content about-centered about-narrow">
        <h1 className="about-title"><FaDragon style={{color:'#f7c873', marginRight:10}}/> About Build-a-Boss</h1>
        <p className="about-text">
          <b>Build-a-Boss</b> is a fantasy browser PvE game where you create, train, and evolve your own boss. Program its patterns, skills, and taunts, then challenge the community to defeat it! The more your boss wins, the higher it climbs in the rankings. After each defeat, evolve and improve your creation to become the ultimate challenge.
        </p>
        <p className="about-text">
          Inspired by classic RPGs and modern asynchronous games, Build-a-Boss combines strategy, creativity, and a touch of magic. Will your boss become legendary?
        </p>
        <p className="about-text" style={{marginTop: '2.2rem'}}>
          <b>Developed by <a href="https://github.com/GitHixy" target="_blank" rel="noopener noreferrer" className="about-link">GitHixy</a></b><br/>
          A passionate solo developer, lover of videogames, JRPGs and MMOs.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
