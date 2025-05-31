import React from "react";
import "./Cart.css";
import Cart from "./Cart";

export default function CartTotal() {
  return (
    <div className="cart-total">
      <div className="cart-total-line">
        <span>Subtotal</span>
        <span>300 SEK</span>
      </div>
      <div className="cart-total-line">
        <span>Delivery</span>
        <span>50 SEK</span>
      </div>
      <div className="cart-total-line cart-total-final">
        <strong>Total</strong>
        <strong>350 SEK</strong>
      </div>
    </div>
  );
}

