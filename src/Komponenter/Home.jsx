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

            <section className="section">
        <h2>Popular Meals</h2>
        <div className="meals-grid">
          <div className="meal-card">
            <img src="https://via.placeholder.com/300" alt="Grilled Chicken Salad" />
            <h3>Grilled Chicken Salad</h3>
            <p>129 SEK</p>
            <p>Add to Cart</p>
          </div>
          <div className="meal-card">
            <img src="https://via.placeholder.com/300" alt="Salmon Bowl" />
            <h3>Salmon Bowl</h3>
            <p>149 SEK</p>
            <p>Add to Cart</p>
          </div>
          <div className="meal-card">
            <img src="https://via.placeholder.com/300" alt="Quinoa Wrap" />
            <h3>Quinoa Wrap</h3>
            <p>109 SEK</p>
            <p>Add to Cart</p>
          </div>
        </div>
      </section>

         <section className="section">
        <h2>How the Delivery Works</h2>
        <div className="how-it-works">
          <div><strong>1.</strong> Order through our website</div>
          <div><strong>2.</strong> Food is dispatched by drone</div>
          <div><strong>3.</strong> Delivered to your front door</div>
        </div>
      </section>






    </>
  );
}
