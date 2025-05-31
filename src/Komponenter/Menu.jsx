import React, { useEffect, useState } from "react";
import "./Menu.css";

// Importera alla bilder
import chickenImg from "./Bilder/grilled-chicken.png";
import salmonImg from "./Bilder/salmon.png";
import quinoaImg from "./Bilder/quinoa.png";
import ShrimpImg from "./Bilder/Shrimp-Stir-Fry.png";
import TurkeyWrapImg from "./Bilder/Turkey-Wrap.png";
import fruitSaladImg from "./Bilder/Fruit-Salad.png";
import electrolyteImg from "./Bilder/electrolyte.png";
import ChiaPudImg from "./Bilder/ChiaPud.png";
import energySmoothie from "./Bilder/energy-smoothie.png";
import greenSmoothie from "./Bilder/green-smoothie.png";
import noccoA from "./Bilder/Arancia.png";
import noccoB from "./Bilder/Berruba.png";
import noccoC from "./Bilder/Careibbean.png";

// Koppla bildnamn från databas till importerade bilder
const imageMap = {
  "grilled-chicken.png": chickenImg,
  "salmon.png": salmonImg,
  "quinoa.png": quinoaImg,
  "Shrimp-Stir-Fry.png": ShrimpImg,
  "Turkey-Wrap.png": TurkeyWrapImg,
  "Fruit-Salad.png": fruitSaladImg,
  "electrolyte.png": electrolyteImg,
  "ChiaPud.png": ChiaPudImg,
  "energy-smoothie.png": energySmoothie,
  "green-smoothie.png": greenSmoothie,
  "Arancia.png": noccoA,
  "Berruba.png": noccoB,
  "Careibbean.png": noccoC,
};

export default function Menu() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => setMeals(data))
      .catch((err) => console.error("Error fetching meals:", err));
  }, []);

  const popularMeals = [...meals].sort(() => 0.5 - Math.random()).slice(0, 12);

  return (
    <>
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

      <section className="hero">
        <div className="hero-text">
          <h1>Our Menu</h1>
          <div className="hero-buttons">
            <button className="btn-outline">Post Workout</button>
            <button className="btn-outline">Pre Workout</button>
            <button className="btn-outline">Drinks</button>
            <button className="btn-outline">All Choices</button>
          </div>
        </div>
      </section>

      <section className="PopularMealssection">
        <h2>Popular Meals</h2>
        <div className="meals-grid">
          {popularMeals.map((meal) => (
            <div className="meal-card" key={meal.id}>
              <img
                src={imageMap[meal.image]}
                alt={meal.name}
                onError={(e) => (e.target.style.display = "none")}
              />
              <h3>{meal.name}</h3>
              <p>{meal.price} SEK</p>
              <button className="btn btn-yellow">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

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
    </>
  );
}
