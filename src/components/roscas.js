import { Link } from "react-router-dom";
import leite from "../assets/leite.jpg";
import branco from "../assets/branco.jpg";
import doce from "../assets/doce.jpg";
import brigadeiro from "../assets/brigadeiro.jpg";
import rosa from "../assets/rosa.jpg";
import mm from "../assets/mm2.jpg";
import vermelhas from "../assets/vermelhas.jpg";
import recheado from "../assets/recheado.jpg";
import avela from "../assets/avela.png";
import oreo from "../assets/oreo.png";
import manga from "../assets/manga.jpg";
import ninho from "../assets/ninho.jpg";
import { Icon } from "@iconify/react";
import Item from "./item";
import React, { useState } from "react";
import {
  getCartItemsFromLocalStorage,
  saveCartItemsToLocalStorage,
} from "../localStorageUtils";

const foodMenu = [
  { id: 1, name: "Chocolate ao leite", price: "9,30", image: leite },
  { id: 2, name: "Chocolate Branco", price: '9,30', image: branco },
  { id: 3, name: "Morango", price: '10,99', image: rosa },
  { id: 4, name: "Doce de leite", price: '9,00', image: doce },
  { id: 5, name: "Brigadeiro", price: '9,00', image: brigadeiro },
  { id: 6, name: "M&M", price: '11,49', image: mm },
  { id: 7, name: "Frutas vermelhas", price: '11,99', image: vermelhas },
  { id: 8, name: "Recheado com chocolate", price: '10,50', image: recheado },
  { id: 9, name: "Avelã", price: '12,99', image: avela },
  { id: 10, name: "Oreo", price: '12,99', image: oreo },
  { id: 11, name: "Manga", price: '10,99', image: manga },
  { id: 12, name: "Ninho com chocolate", price: '11,50', image: ninho },
];

export default function Roscas() {
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
            Rosquinhas
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

      {/* <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'flex-start' }}>
                <button style={{ width: '200px', marginRight: '50px', marginTop: '20px', marginLeft: '40px', backgroundColor: '#FAF0C4', borderColor: '#ad851a' }}>
                    <img src={leite} style={{ width: "100%", paddingTop: "20px", borderRadius: "10%", paddingRight: '50px' }} />
                    <h4 style={{ color: '#ad851a' }}>Chocolate ao leite</h4>
                    <div style={{ flexDirection: "row", display: 'flex', justifyContent: 'center' }}>
                        <h3 style={{ color: '#ad851a', fontWeight: 'bold', paddingRight: '20%', fontSize: '20px', marginTop: '5px' }}>R$7,50</h3>
                        <div>
                            <Icon icon="bxs:cart" color="#ad851a" width="25" />
                        </div>
                    </div>
                </button>

                <button style={{ width: '200px', marginRight: '50px', marginTop: '20px', marginLeft: '40px', backgroundColor: '#FAF0C4', borderColor: '#ad851a' }}>
                    <img src={branco} style={{ width: "100%", paddingTop: "20px", borderRadius: "10%", paddingRight: '50px' }} />
                    <h4 style={{ color: '#ad851a' }}>Chocolate branco</h4>
                    <div style={{ flexDirection: "row", display: 'flex', justifyContent: 'center' }}>
                        <h3 style={{ color: '#ad851a', fontWeight: 'bold', paddingRight: '20%', fontSize: '20px', marginTop: '5px' }}>R$7,50</h3>
                        <div>
                            <Icon icon="bxs:cart" color="#ad851a" width="25" />
                        </div>
                    </div>
                </button>

                <button style={{ width: '200px', marginRight: '50px', marginTop: '20px', marginLeft: '40px', backgroundColor: '#FAF0C4', borderColor: '#ad851a' }}>
                    <img src={doce} style={{ width: "100%", paddingTop: "20px", borderRadius: "10%", paddingRight: '50px' }} />
                    <h4 style={{ color: '#ad851a' }}>Doce de leite</h4>
                    <div style={{ flexDirection: "row", display: 'flex', justifyContent: 'center' }}>
                        <h3 style={{ color: '#ad851a', fontWeight: 'bold', paddingRight: '20%', fontSize: '20px', marginTop: '5px' }}>R$7,00</h3>
                        <div>
                            <Icon icon="bxs:cart" color="#ad851a" width="25" />
                        </div>
                    </div>
                </button>

                <button style={{ width: '200px', marginRight: '50px', marginTop: '20px', marginLeft: '40px', backgroundColor: '#FAF0C4', borderColor: '#ad851a' }}>
                    <img src={brigadeiro} style={{ width: "100%", paddingTop: "20px", borderRadius: "10%", paddingRight: '50px' }} />
                    <h4 style={{ color: '#ad851a' }}>Brigadeiro</h4>
                    <div style={{ flexDirection: "row", display: 'flex', justifyContent: 'center' }}>
                        <h3 style={{ color: '#ad851a', fontWeight: 'bold', paddingRight: '20%', fontSize: '20px', marginTop: '5px' }}>R$7,00</h3>
                        <div>
                            <Icon icon="bxs:cart" color="#ad851a" width="25" />
                        </div>
                    </div>
                </button>

                <button style={{ width: '200px', marginRight: '50px', marginTop: '20px', marginLeft: '40px', backgroundColor: '#FAF0C4', borderColor: '#ad851a' }}>
                    <img src={rosa} style={{ width: "100%", paddingTop: "20px", borderRadius: "10%", paddingRight: '50px' }} />
                    <h4 style={{ color: '#ad851a' }}>Morango</h4>
                    <div style={{ flexDirection: "row", display: 'flex', justifyContent: 'center' }}>
                        <h3 style={{ color: '#ad851a', fontWeight: 'bold', paddingRight: '20%', fontSize: '20px', marginTop: '5px' }}>R$7,99</h3>
                        <div>
                            <Icon icon="bxs:cart" color="#ad851a" width="25" />
                        </div>
                    </div>
                </button>

                <button style={{ width: '200px', marginRight: '50px', marginTop: '20px', marginLeft: '40px', backgroundColor: '#FAF0C4', borderColor: '#ad851a' }}>
                    <img src={mm} style={{ width: "100%", paddingTop: "20px", borderRadius: "10%", paddingRight: '50px' }} />
                    <h4 style={{ color: '#ad851a' }}>Recheado com doce de leite com cobertura de chocolate branco com M&M</h4>
                    <div style={{ flexDirection: "row", display: 'flex', justifyContent: 'center' }}>
                        <h3 style={{ color: '#ad851a', fontWeight: 'bold', paddingRight: '20%', fontSize: '20px', marginTop: '5px' }}>R$9,99</h3>
                        <div>
                            <Icon icon="bxs:cart" color="#ad851a" width="25" />
                        </div>
                    </div>
                </button>
            </div>

            <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'flex-start' }}>
                <button style={{ width: '200px', marginRight: '50px', marginTop: '20px', marginLeft: '40px', backgroundColor: '#FAF0C4', borderColor: '#ad851a' }}>
                    <img src={vermelhas} style={{ width: "100%", paddingTop: "20px", borderRadius: "10%", paddingRight: '50px' }} />
                    <h4 style={{ color: '#ad851a' }}>Recheada de frutas vermelhas</h4>
                    <div style={{ flexDirection: "row", display: 'flex', justifyContent: 'center' }}>
                        <h3 style={{ color: '#ad851a', fontWeight: 'bold', paddingRight: '20%', fontSize: '20px', marginTop: '5px' }}>R$8,99</h3>
                        <div>
                            <Icon icon="bxs:cart" color="#ad851a" width="25" />
                        </div>
                    </div>
                </button>

                <button style={{ width: '200px', marginRight: '50px', marginTop: '20px', marginLeft: '40px', backgroundColor: '#FAF0C4', borderColor: '#ad851a' }}>
                    <img src={recheado} style={{ width: "100%", paddingTop: "20px", borderRadius: "10%", paddingRight: '50px' }} />
                    <h4 style={{ color: '#ad851a' }}>Recheada de chocolate ao leite</h4>
                    <div style={{ flexDirection: "row", display: 'flex', justifyContent: 'center' }}>
                        <h3 style={{ color: '#ad851a', fontWeight: 'bold', paddingRight: '20%', fontSize: '20px', marginTop: '5px' }}>R$7,49</h3>
                        <div>
                            <Icon icon="bxs:cart" color="#ad851a" width="25" />
                        </div>
                    </div>
                </button>

                <button style={{ width: '200px', marginRight: '50px', marginTop: '20px', marginLeft: '40px', backgroundColor: '#FAF0C4', borderColor: '#ad851a' }}>
                    <img src={avela} style={{ width: "100%", paddingTop: "20px", borderRadius: "10%", paddingRight: '50px' }} />
                    <h4 style={{ color: '#ad851a' }}>Recheado de avelã</h4>
                    <div style={{ flexDirection: "row", display: 'flex', justifyContent: 'center' }}>
                        <h3 style={{ color: '#ad851a', fontWeight: 'bold', paddingRight: '20%', fontSize: '20px', marginTop: '5px' }}>R$10,49</h3>
                        <div>
                            <Icon icon="bxs:cart" color="#ad851a" width="25" />
                        </div>
                    </div>
                </button>

                <button style={{ width: '200px', marginRight: '50px', marginTop: '20px', marginLeft: '40px', backgroundColor: '#FAF0C4', borderColor: '#ad851a' }}>
                    <img src={oreo} style={{ width: "100%", paddingTop: "20px", borderRadius: "10%", paddingRight: '50px' }} />
                    <h4 style={{ color: '#ad851a' }}>Oreo</h4>
                    <div style={{ flexDirection: "row", display: 'flex', justifyContent: 'center' }}>
                        <h3 style={{ color: '#ad851a', fontWeight: 'bold', paddingRight: '20%', fontSize: '20px', marginTop: '5px' }}>R$10,49</h3>
                        <div>
                            <Icon icon="bxs:cart" color="#ad851a" width="25" />
                        </div>
                    </div>
                </button>

                <button style={{ width: '200px', marginRight: '50px', marginTop: '20px', marginLeft: '40px', backgroundColor: '#FAF0C4', borderColor: '#ad851a' }}>
                    <img src={manga} style={{ width: "100%", paddingTop: "20px", borderRadius: "10%", paddingRight: '50px' }} />
                    <h4 style={{ color: '#ad851a' }}>Manga</h4>
                    <div style={{ flexDirection: "row", display: 'flex', justifyContent: 'center' }}>
                        <h3 style={{ color: '#ad851a', fontWeight: 'bold', paddingRight: '20%', fontSize: '20px', marginTop: '5px' }}>R$7,99</h3>
                        <div>
                            <Icon icon="bxs:cart" color="#ad851a" width="25" />
                        </div>
                    </div>
                </button>

                <button style={{ width: '200px', marginRight: '50px', marginTop: '20px', marginLeft: '40px', backgroundColor: '#FAF0C4', borderColor: '#ad851a' }}>
                    <img src={ninho} style={{ width: "100%", paddingTop: "20px", borderRadius: "10%", paddingRight: '50px' }} />
                    <h4 style={{ color: '#ad851a' }}>Recheada de ninho com cobertura de chocolate ao leite</h4>
                    <div style={{ flexDirection: "row", display: 'flex', justifyContent: 'center' }}>
                        <h3 style={{ color: '#ad851a', fontWeight: 'bold', paddingRight: '20%', fontSize: '20px', marginTop: '5px' }}>R$9,99</h3>
                        <div>
                            <Icon icon="bxs:cart" color="#ad851a" width="25" />
                        </div>
                    </div>
                </button>

            </div> */}
    </div>
  );
}
