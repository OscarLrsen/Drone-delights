import React, { useEffect, useState } from "react";
import "./Home.css";
import { useCart } from "../../Kontext/CartContext";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import imageMap from "../../imageMap";





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
              <img src={imageMap["Ordering.png"]} alt="Step 1" />
              </div>
              <div className="step-text">
                <p><strong>1.</strong> Order through our website</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-icon">
              <img src={imageMap["Food-Drone.png"]} alt="Step 2" />
              </div>
              <div className="step-text">
                <p><strong>2.</strong> Food is dispatched by drone</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-icon">
              <img src={imageMap["Delivered.png"]} alt="Step 3" />
              </div>
              <div className="step-text">
                <p><strong>3.</strong> Delivered to your front door</p>
              </div>
            </div>
          </div>

          <div className="info-image">
          <img src={imageMap["droneChat.png"]} alt="Drone delivery process" />
          </div>
        </div>
      </section>

    <Footer />

    </>
  );
}
