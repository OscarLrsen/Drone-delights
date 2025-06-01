import React from "react";
import "./HeaderFooter.css";
import { useCart } from "../../Kontext/CartContext";
import CartButton from "../Cart/CartButton";


export default function Header() {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header>
      <div className="topLogo">NUTRI</div>

      <div className="nav-buttons">
        <nav>
          <span className="nav-link">Home</span>
          <span className="nav-link">About Us</span>
          <span className="nav-link">Contact Us</span>
        </nav>
        <button className="btn btn-yellow">Find Us</button>
        
        <CartButton />
      </div>
    </header>
  );
}
