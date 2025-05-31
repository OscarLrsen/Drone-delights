import React from "react";
import "./Menu.css";

// Import för matbilder
import chickenImg from "./Bilder/grilled-chicken.png";
import salmonImg from "./Bilder/salmon.png";
import quinoaImg from "./Bilder/quinoa.png";
import ShrimpImg from "./Bilder/Shrimp-Stir-Fry.png";
import TurkeyWrapImg from "./Bilder/Turkey-Wrap.png";
import ChiaPudImg from "./Bilder/ChiaPud.png";
import fruitSaladImg from "./Bilder/Fruit-Salad.png";

// Import för Dryck
import electrolyteImg from "./Bilder/electrolyte.png";
import noccoA from "./Bilder/Arancia.png";
import noccoB from "./Bilder/Berruba.png";
import noccoC from "./Bilder/Careibbean.png";
import energySmoothie from "./Bilder/energy-smoothie.png";
import greenSmoothie from "./Bilder/GreenSmoothie.png";

// 




const meals = [
    //Post-workout
  { id: 1, name: "Grilled Chicken Salad", price: 129, image: chickenImg, type: "post-workout" },
  { id: 2, name: "Salmon with Roasted Vegetables", price: 149, image: salmonImg, type: "post-workout" },
  { id: 3, name: "Quinoa Bowl", price: 109, image: quinoaImg,  type: "post-workout"},
  { id: 4, name: "Shrimp Stir Fry", price: 140, image: ShrimpImg, type: "post-workout" },
  { id: 5, name: "Turkey Wrap", price: 99, image: TurkeyWrapImg, type: "post-workout" },
  

    //Pre-workout meals
  { id: 6, name: "Fruit salad", price: 80, image: fruitSaladImg, type: "pre-workout" },
  { id: 7, name: "Electrolyte", price: 40, image: electrolyteImg, type: "pre-workout" },
  { id: 8, name: "Chia Pudding", price: 109, image: ChiaPudImg, type: "pre-workout" }, 

  //Dryck
  { id: 9, name: "Energy Smoothie", price: 89, image: energySmoothie, type: ["pre-workout", "drink"] },
  { id: 10, name: "Green Juice", price: 70, image: greenSmoothie, type: ["pre-workout", "drink"] }, 
  { id: 11, name: "Nocco", price: 30, image: noccoA, type: ["pre-workout", "drink"]},
  { id: 12, name: "Caribbean", price: 30, image: noccoC, type: ["pre-workout", "drink"]},
  { id: 12, name: "Berruba", price: 30, image: noccoB, type: ["pre-workout", "drink"]},
  { id: 13, name: "Arancia", price: 30, image: noccoA, type: ["pre-workout", "drink"]},


];



const popularMeals = meals.slice(0, 12);


export default function Menu() {
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
            <img src={meal.image} alt={meal.name} />
            <h3>{meal.name}</h3>
            <p>{meal.price} SEK</p>
            <button className="btn btn-add">Add to Cart</button>
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
