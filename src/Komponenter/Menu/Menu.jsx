import React, { useEffect, useState } from "react";
import "./Menu.css";
import Filter from "./Filter";
import { useCart } from "../../Kontext/CartContext";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";





// Importera alla bilder
import chickenImg from "../Bilder/grilled-chicken.png";
import salmonImg from "../Bilder/salmon.png";
import quinoaImg from "../Bilder/quinoa.png";
import ShrimpImg from "../Bilder/Shrimp-Stir-Fry.png";
import TurkeyWrapImg from "../Bilder/Turkey-Wrap.png";
import fruitSaladImg from "../Bilder/Fruit-Salad.png";
import electrolyteImg from "../Bilder/electrolyte.png";
import ChiaPudImg from "../Bilder/ChiaPud.png";
import energySmoothie from "../Bilder/energy-smoothie.png";
import greenSmoothie from "../Bilder/green-smoothie.png";
import noccoA from "../Bilder/Arancia.png";
import noccoB from "../Bilder/Berruba.png";
import noccoC from "../Bilder/Careibbean.png";

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
  const [filter, setFilter] = useState("all");
  const { addToCart } = useCart();



  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => setMeals(data))
      .catch((err) => console.error("Error fetching meals:", err));
  }, []);

  const filteredMeals = meals.filter((meal) => {
    if (filter === "all") return true;
    if (Array.isArray(meal.type)) return meal.type.includes(filter);
    return meal.type === filter;
  });
  return (
    <>
        <Header /> 

      <section className="hero">
        <div className="hero-text">
          <h1>Our Menu</h1>
          <Filter currentFilter={filter} setFilter={setFilter} />
        </div>
      </section>

      <section className="PopularMealssection">
        <h2>Popular Meals</h2>
        <div className="meals-grid">
          {filteredMeals.map((meal) => (
            <div className="meal-card" key={meal.id}>
              <img
                src={imageMap[meal.image]}
                alt={meal.name}
                onError={(e) => (e.target.style.display = "none")}
              />
              <h3>{meal.name}</h3>
              <p>{meal.price} SEK</p>
              <button
                className="btn btn-yellow"
                onClick={() => addToCart({ ...meal, quantity: 1 })}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

    <Footer />
    </>
  );
}
