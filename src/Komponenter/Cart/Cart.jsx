import React from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import PaymentOptions from "./PaymentOptions";


export default function Cart() {
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
