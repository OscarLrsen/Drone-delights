import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import chickenImg from "./Bilder/grilled-chicken.png";
import salmonImg from "./Bilder/salmon.png";
import quinoaImg from "./Bilder/quinoa.png";
import ShrimpImg from "./Bilder/Shrimp-Stir-Fry.png";
import TurkeyWrapImg from "./Bilder/Turkey-Wrap.png";
import ChiaPudImg from "./Bilder/ChiaPud.png";
import electrolyteImg from "./Bilder/electrolyte.png";
import fruitSaladImg from "./Bilder/Fruit-Salad.png";


const meals = [
  { id: 1, name: "Grilled Chicken Salad", price: 129, image: chickenImg, type: "post-workout" },
  { id: 2, name: "Salmon with Roasted Vegetables", price: 149, image: salmonImg, type: "post-workout" },
  { id: 3, name: "Quinoa Bowl", price: 109, image: quinoaImg,  type: "post-workout"},
  { id: 4, name: "Shrimp Stir Fry", price: 140, image: ShrimpImg, type: "post-workout" },
  { id: 5, name: "Turkey Wrap", price: 99, image: TurkeyWrapImg, type: "post-workout" },
  { id: 6, name: "Fruit salad", price: 80, image: fruitSaladImg, type: "pre-workout" },
  { id: 7, name: "Electrolyte", price: 40, image: electrolyteImg, type: "pre-workout" },
  { id: 8, name: "Chia Pudding", price: 109, image: ChiaPudImg, type: "pre-workout" }

];



const popularMeals = meals.slice(0, 6);


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
      

<section className="PopularMealssection">
  <h2>Popular Meals</h2>
  <div className="meals-grid">
    {popularMeals.map((meal) => (
      <div className="meal-card" key={meal.id}>
        <img src={meal.image} alt={meal.name} />
        <h3>{meal.name}</h3>
        <p>{meal.price} SEK</p>
        <p>Add to Cart</p>
      </div>
    ))}
  </div>
</section>


    </>
  );
}
