import React from "react";
import "./Home.css";
import chickenImg from "./Bilder/grilled-chicken.png";
import salmonImg from "./Bilder/salmon.png";
import quinoaImg from "./Bilder/quinoa.png";




const meals = [
  { id: 1, name: "Grilled Chicken Salad", price: 129, image: chickenImg },
  { id: 2, name: "Salmon with Roasted Vegetables", price: 149, image: salmonImg },
  { id: 3, name: "Quinoa Bowl", price: 109, image: quinoaImg },
  { id: 4, name: "Turkey & Spinach Wrap", price: 115, image: wrapImg },
  { id: 5, name: "Lentil Soup", price: 99, image: soupImg }
];





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

    </>
  );
}
