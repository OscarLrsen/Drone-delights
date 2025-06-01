import React from "react";

export default function CartItem({ item }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-info">
        <p className="cart-item-name"> {item.name}</p>
        <p className="cart-item-price"> {item.price} SEK</p>
      </div>
      <div className="cart-item-quantity">
        <button>-</button>
        <span>{item.quantity}</span>
        <button>+</button>
      </div>
    </div>
  );
}
