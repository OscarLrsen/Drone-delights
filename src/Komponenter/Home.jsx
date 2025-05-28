import React from "react";
import "./Home.css"; // skapa denna fil

export default function Home() {
  return (
    <>
      <header>
        <div className="logo">
          <svg width="24" height="24" viewBox="0 0 48 48" fill="currentColor">
          </svg>
          NUTRI
        </div>
        <nav>
          <a href="#">Our Menu</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </nav>
        <div>
          <button className="btn btn-yellow">Find Us</button>
          <button className="btn btn-light">🛒</button>
        </div>
      </header>

      <section className="hero">
        <h1>Drone Delivery: Food at Your Doorstep</h1>
        <p>
          Experience the future of food delivery with our fast, efficient, and
          eco-friendly drone service.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-yellow">Custom Meal</button>
          <button className="btn btn-light">Recommended</button>
        </div>
      </section>





    </>
  );
}
