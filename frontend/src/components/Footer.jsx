import React from "react";
import "../App.css";

function Footer() {
  return (
    <footer className="homepage-footer">
      <span>© {new Date().getFullYear()} Build a Boss</span>
      <span className="footer-sep">·</span>
      <a
        href="https://github.com/GitHixy"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        GitHub Repository
      </a>
    </footer>
  );
}

export default Footer;
