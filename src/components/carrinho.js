import React, { useState } from "react";
import { getCartItemsFromLocalStorage } from '../localStorageUtils';

function Carrinho() {
    const cartItems = getCartItemsFromLocalStorage();
  return (
    <div className="cart">
      <h2>Carrinho de Compras</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <img src={item.image}/> - {item.name} - R${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Carrinho;