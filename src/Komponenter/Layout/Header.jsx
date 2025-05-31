import React from "react";
import "./HeaderFooter.css";
import { useCart } from "../../Kontext/CartContext";

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
        
        <div style={{ position: "relative" }}>
          <button
            className="btn btn-light"
            style={{
              backgroundColor: totalQuantity > 0 ? "#DE9E1F" : ""
            }}
          >
            🛒
          </button>
          {totalQuantity > 0 && (
            <span
              style={{
                position: "absolute",
                top: -8,
                right: -8,
                background: "#DE9E1F",
                color: "white",
                borderRadius: "50%",
                padding: "2px 6px",
                fontSize: "12px"
              }}
            >
              {totalQuantity}
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
