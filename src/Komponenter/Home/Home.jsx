import React, { useEffect, useState } from "react";
import "./Home.css";
import { useCart } from "../../Kontext/CartContext";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import imageMap from "../../imageMap";
import PopularMeals from "./PopularMeals";
import { useNavigate } from "react-router-dom";
import InfoSection from "./InfoSection";
import HeroSektion from "./HeroSektion";



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
  const navigate = useNavigate();


  return (
    <>
    <Header /> 


    <HeroSektion />


    <PopularMeals popularMeals={popularMeals} />

    <InfoSection />

    <Footer />

    </>
  );
}
