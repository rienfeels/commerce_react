import React from "react";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.productId}>
            {/* Display product details in the cart */}
            <div>{item.productTitle}</div>
            <div>Price: {item.productPrice}</div>
            {/* Add a button to remove the item from the cart */}
            <button onClick={() => removeFromCart(item.productId)}>
              Remove from Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
