import React from "react";
import "./Cart.css";

export default function PaymentOptions() {
  return (
    <div className="payment-options">
      <label>
        <input type="radio" name="payment" defaultChecked />
        Swish
      </label>
      <label>
        <input type="radio" name="payment" />
        Credit Card
      </label>
    </div>
  );
}

