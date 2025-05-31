import React from "react";
import "./HeaderFooter.css";

export default function Footer() {
  return (
    <footer>
      <div>
        <span className="btm-nav-link">Our Menu</span>
        <span className="btm-nav-link">About Us</span>
        <span className="btm-nav-link">Contact Us</span>
      </div>

      <p style={{ marginTop: "20px", color: "#947D4F", fontSize: "18px" }}>
        © 2025 NUTRI. All rights reserved.
      </p>
    </footer>
  );
}
