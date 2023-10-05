import React, { useState } from "react";
import {
  getCartItemsFromLocalStorage,
  saveCartItemsToLocalStorage,
} from "../localStorageUtils";

function Carrinho() {
  const [cartItems, setCartItems] = useState(getCartItemsFromLocalStorage());

  const removeFromCart = (foodId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== foodId);
    setCartItems(updatedCartItems);
    saveCartItemsToLocalStorage(updatedCartItems); // Atualize o localStorage após a remoção
  };
  
  return (
    <div className="cart">
      <h2>Carrinho de Compras</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <img src={item.image}/> - {item.name} - R${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Carrinho;