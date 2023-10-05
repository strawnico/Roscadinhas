import React from "react";

function Item({ food, onAddToCart }) {
  return (
    <div className="food-item">
      <img src={food.image} />
      <h3>{food.name}</h3>
      <p>Preço: R${food.price}</p>
      <button onClick={() => onAddToCart(food)}>Adicionar</button>
    </div>
  );
}

export default Item;