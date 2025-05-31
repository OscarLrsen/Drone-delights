import React from "react";

export default function CartItem() {
  return (
    <div className="cart-item">
      <img
        src="https://via.placeholder.com/60"
        alt="Meal"
        className="cart-item-image"
      />
      <div className="cart-item-info">
        <p className="cart-item-name">Grilled Chicken Salad</p>
        <p className="cart-item-price">129 SEK</p>
      </div>
      <div className="cart-item-quantity">
        <button>-</button>
        <span>1</span>
        <button>+</button>
      </div>
    </div>
  );
}

