import { Link } from "react-router-dom";
import frango from "../assets/frango.png";
import carne from "../assets/carne.jpg";
import camarao from "../assets/camarao.jpg";
import calabresa from "../assets/calabresa.jpg";
import queijo from "../assets/queijo.jpg";
import tomate from "../assets/tomate.jpg";
import palmito from "../assets/palmito.jpg";
import cenoura from "../assets/cenoura.jpg";
import alho from "../assets/alho.jpg";
import shitake from "../assets/shitake.jpg";
import espinafre from "../assets/espinafre.JPG";
import grao from "../assets/grao.jpg";
import Item from "./item";
import React, { useState } from "react";
import {
  getCartItemsFromLocalStorage,
  saveCartItemsToLocalStorage,
} from "../localStorageUtils";

const foodMenu = [
  { id: 1, name: "Frango com requeijão", price: "5,99", image: frango },
  { id: 2, name: "Carne seca", price: "6,49", image: carne },
  { id: 3, name: "Camarão", price: "8,50", image: camarao },
  { id: 4, name: "Calabresa", price: "5,99", image: calabresa },
  { id: 5, name: "4 queijo", price: "6,20", image: queijo },
  { id: 6, name: "Tomate seco", price: "5,99", image: tomate },
  { id: 7, name: "Palmito com catupiry", price: "6,99", image: palmito },
  { id: 8, name: "Frango com cenoura", price: "5,80", image: cenoura },
  { id: 9, name: "Alho-poró e palmito", price: "8,99", image: alho },
  { id: 10, name: "Shitake com palmito", price: "9,99", image: shitake },
  { id: 11, name: "Espinafre com cenoura", price: "7,99", image: espinafre },
  { id: 12, name: "Grão de bico e queijo", price: "6,50", image: grao },
];

export default function Empadas() {
  const [cartItems, setCartItems] = useState(getCartItemsFromLocalStorage());

  const addToCart = (food) => {
    const updatedCartItems = [...cartItems, food];
    setCartItems(updatedCartItems);
    saveCartItemsToLocalStorage(updatedCartItems);
    alert("item adicionado")
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "#DEB852",
          flexDirection: "row",
          display: "flex",
          justifyContent: "flex-start",
          padding: 0,
        }}
      >
        <div
          style={{
            width: "42%",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <button
            style={{
              backgroundColor: "#DEB852",
              border: "#DEB852",
              position: "fixed",
            }}
          >
            <Link to="/" style={{ color: "#FAF0C4" }}>
              Voltar
            </Link>
          </button>
        </div>
        <div
          style={{
            width: "58%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <h1
            style={{ color: "#FAF0C4", fontFamily: "Oswald", fontSize: "50px" }}
          >
            Empadas
          </h1>
        </div>
      </div>

      <div className="food-list">
        {foodMenu.map((food) => (
          <Item key={food.id} food={food} onAddToCart={addToCart} />
        ))}
      </div>
        <div className="littleCarrinho" style={{ position: "fixed", backgroundColor:"#DEB852", width:"100%", height:"50px", bottom:"0", alignItems:"center", justifyContent:"center", display:"flex" }}>
          <a style={{ textDecoration:'none', color:"black", fontSize:"20px"}} href="./carrinho">Ir para o carrinho</a>
        </div>
    </div>
  );
}
