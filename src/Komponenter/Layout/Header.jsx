import React from "react";
import "./HeaderFooter.css";

export default function Header() {
  return (
    <header>
      <div className="topLogo">NUTRI</div>

      <div className="nav-buttons">
        <nav>
          <span className="nav-link">Home</span>
          <span className="nav-link">About Us</span>
          <span className="nav-link">Contact Us</span>
        </nav>
        <button className="btn btn-yellow">Find Us</button>
        <button className="btn btn-light">🛒</button>
      </div>
    </header>
  );
}
