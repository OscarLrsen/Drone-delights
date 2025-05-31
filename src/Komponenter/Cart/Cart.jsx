import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import "./Cart.css";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import PaymentOptions from "./Payment";

export default function Cart() {
  return (
    <>
      <Header />

      <main className="cart-container">
        <h1 className="cart-title">Your Order</h1>

        <section>
          <h2 className="cart-section-title">Items</h2>
          <CartItem />
          <CartItem />
        </section>

        <section>
          <h2 className="cart-section-title">Total</h2>
          <CartTotal />
        </section>

        <section>
          <h2 className="cart-section-title">Payment</h2>
          <PaymentOptions />
        </section>

        <div className="cart-button-container">
          <button className="cart-pay-button">Proceed to Payment</button>
        </div>
      </main>

      <Footer />
    </>
  );
}
