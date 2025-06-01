import React, { useEffect, useState } from "react";
import "./Home.css";
import { useCart } from "../Kontext/CartContext";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";


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

// Infobilder
import orderingImg from "./Bilder/Ordering.png";
import deliveryImg from "./Bilder/Food-Drone.png";
import DeliveredImg from "./Bilder/Delivered.png";
import droneChatImg from "./Bilder/droneChat.png";

// Bild-mappning
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

export default function Home() {
  const [meals, setMeals] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => setMeals(data))
      .catch((err) => console.error("Error fetching meals:", err));
  }, []);

  const popularMeals = [...meals].sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <>
        <Header /> 


      <section className="hero">
        <div className="hero-text">
          <h1>FOOD DELIVERED<br />WITH PURPOSE.</h1>
          <div className="hero-buttons">
            <button className="btn-outline">See our Menu</button>
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
              <button
                className="btn btn-add"
                onClick={() => addToCart({ ...meal, quantity: 1 })}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="InfoSection">
        <h2>How the Delivery Works</h2>
        <div className="info-content">
          <div className="steps-column">
            <div className="step-item">
              <div className="step-icon">
                <img src={orderingImg} alt="Step 1" />
              </div>
              <div className="step-text">
                <p><strong>1.</strong> Order through our website</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-icon">
                <img src={deliveryImg} alt="Step 2" />
              </div>
              <div className="step-text">
                <p><strong>2.</strong> Food is dispatched by drone</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-icon">
                <img src={DeliveredImg} alt="Step 3" />
              </div>
              <div className="step-text">
                <p><strong>3.</strong> Delivered to your front door</p>
              </div>
            </div>
          </div>

          <div className="info-image">
            <img src={droneChatImg} alt="Drone delivery process" />
          </div>
        </div>
      </section>

    <Footer />

    </>
  );
}
