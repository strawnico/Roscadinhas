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
  { id: 1, name: "Frango", price: "5,99", image: frango },
  { id: 2, name: "Carne", price: "6,49", image: carne },
  { id: 4, name: "Camarão", price: "8,50", image: camarao },
];

export default function Empadas() {
  const [cartItems, setCartItems] = useState(getCartItemsFromLocalStorage());

  const addToCart = (food) => {
    const updatedCartItems = [...cartItems, food];
    setCartItems(updatedCartItems);
    saveCartItemsToLocalStorage(updatedCartItems);
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

      {/* 

                <button style={{ width: '200px', marginRight: '50px', marginTop: '20px', marginLeft: '40px', backgroundColor: '#FAF0C4', borderColor: '#ad851a' }}>
                    <img src={camarao} style={{ width: "100%", paddingTop: "20px", borderRadius: "10%", paddingRight: '50px' }} />
                    <h4 style={{ color: '#ad851a' }}>Camarão</h4>
                    <div style={{ flexDirection: "row", display: 'flex', justifyContent: 'center' }}>
                        <h3 style={{ color: '#ad851a', fontWeight: 'bold', paddingRight: '20%', fontSize: '20px', marginTop: '5px' }}>R$8,50</h3>
                        <div>
                            <Icon icon="bxs:cart" color="#ad851a" width="25" />
                        </div>
                    </div>
                </button>

                <button style={{ width: '200px', marginRight: '50px', marginTop: '20px', marginLeft: '40px', backgroundColor: '#FAF0C4', borderColor: '#ad851a' }}>
                    <img src={calabresa} style={{ width: "100%", paddingTop: "20px", borderRadius: "10%", paddingRight: '50px' }} />
                    <h4 style={{ color: '#ad851a' }}>Calabresa</h4>
                    <div style={{ flexDirection: "row", display: 'flex', justifyContent: 'center' }}>
                        <h3 style={{ color: '#ad851a', fontWeight: 'bold', paddingRight: '20%', fontSize: '20px', marginTop: '5px' }}>R$5,99</h3>
                        <div>
                            <Icon icon="bxs:cart" color="#ad851a" width="25" />
                        </div>
                    </div>
                </button>

                <button style={{ width: '200px', marginRight: '50px', marginTop: '20px', marginLeft: '40px', backgroundColor: '#FAF0C4', borderColor: '#ad851a' }}>
                    <img src={queijo} style={{ width: "100%", paddingTop: "20px", borderRadius: "10%", paddingRight: '50px' }} />
                    <h4 style={{ color: '#ad851a' }}>Queijo</h4>
                    <div style={{ flexDirection: "row", display: 'flex', justifyContent: 'center' }}>
                        <h3 style={{ color: '#ad851a', fontWeight: 'bold', paddingRight: '20%', fontSize: '20px', marginTop: '5px' }}>R$6,20</h3>
                        <div>
                            <Icon icon="bxs:cart" color="#ad851a" width="25" />
                        </div>
                    </div>
                </button>

                <button style={{ width: '200px', marginRight: '50px', marginTop: '20px', marginLeft: '40px', backgroundColor: '#FAF0C4', borderColor: '#ad851a' }}>
                    <img src={tomate} style={{ width: "100%", paddingTop: "20px", borderRadius: "10%", paddingRight: '50px' }} />
                    <h4 style={{ color: '#ad851a' }}>Tomate seco com mussarela</h4>
                    <div style={{ flexDirection: "row", display: 'flex', justifyContent: 'center' }}>
                        <h3 style={{ color: '#ad851a', fontWeight: 'bold', paddingRight: '20%', fontSize: '20px', marginTop: '5px' }}>R$5,99</h3>
                        <div>
                            <Icon icon="bxs:cart" color="#ad851a" width="25" />
                        </div>
                    </div>
                </button>
            </div>

        

            <div style={{ flexDirection: "row", display: 'flex', justifyContent: 'center' }}>
                <button style={{ width: '200px', marginRight: '50px', marginTop: '20px', marginLeft: '40px', backgroundColor: '#FAF0C4', borderColor: '#ad851a' }}>
                    <img src={palmito} style={{ width: "100%", paddingTop: "20px", borderRadius: "10%", paddingRight: '50px' }} />
                    <h4 style={{ color: '#ad851a' }}>Palmito</h4>
                    <div style={{ flexDirection: "row", display: 'flex', justifyContent: 'center' }}>
                        <h3 style={{ color: '#ad851a', fontWeight: 'bold', paddingRight: '20%', fontSize: '20px', marginTop: '5px' }}>R$6,99</h3>
                        <div>
                            <Icon icon="bxs:cart" color="#ad851a" width="25" />
                        </div>
                    </div>
                </button>

                <button style={{ width: '200px', marginRight: '50px', marginTop: '20px', marginLeft: '40px', backgroundColor: '#FAF0C4', borderColor: '#ad851a' }}>
                    <img src={cenoura} style={{ width: "100%", paddingTop: "20px", borderRadius: "10%", paddingRight: '50px' }} />
                    <h4 style={{ color: '#ad851a' }}>Frango com cenoura</h4>
                    <div style={{ flexDirection: "row", display: 'flex', justifyContent: 'center' }}>
                        <h3 style={{ color: '#ad851a', fontWeight: 'bold', paddingRight: '20%', fontSize: '20px', marginTop: '5px' }}>R$5,80</h3>
                        <div>
                            <Icon icon="bxs:cart" color="#ad851a" width="25" />
                        </div>
                    </div>
                </button>

                <button style={{ width: '200px', marginRight: '50px', marginTop: '20px', marginLeft: '40px', backgroundColor: '#FAF0C4', borderColor: '#ad851a' }}>
                    <img src={shitake} style={{ width: "100%", paddingTop: "20px", borderRadius: "10%", paddingRight: '50px' }} />
                    <h4 style={{ color: '#ad851a' }}>Vegana de shitake com palmito</h4>
                    <div style={{ flexDirection: "row", display: 'flex', justifyContent: 'center' }}>
                        <h3 style={{ color: '#ad851a', fontWeight: 'bold', paddingRight: '20%', fontSize: '20px', marginTop: '5px' }}>R$8,50</h3>
                        <div>
                            <Icon icon="bxs:cart" color="#ad851a" width="25" />
                        </div>
                    </div>
                </button>

                <button style={{ width: '200px', marginRight: '50px', marginTop: '20px', marginLeft: '40px', backgroundColor: '#FAF0C4', borderColor: '#ad851a' }}>
                    <img src={alho} style={{ width: "100%", paddingTop: "20px", borderRadius: "10%", paddingRight: '50px' }} />
                    <h4 style={{ color: '#ad851a' }}>Vegana de alho-poró e palmito</h4>
                    <div style={{ flexDirection: "row", display: 'flex', justifyContent: 'center' }}>
                        <h3 style={{ color: '#ad851a', fontWeight: 'bold', paddingRight: '20%', fontSize: '20px', marginTop: '5px' }}>R$5,99</h3>
                        <div>
                            <Icon icon="bxs:cart" color="#ad851a" width="25" />
                        </div>
                    </div>
                </button>

                <button style={{ width: '200px', marginRight: '50px', marginTop: '20px', marginLeft: '40px', backgroundColor: '#FAF0C4', borderColor: '#ad851a' }}>
                    <img src={espinafre} style={{ width: "100%", paddingTop: "20px", borderRadius: "10%", paddingRight: '50px' }} />
                    <h4 style={{ color: '#ad851a' }}>Vegetariana de espinafre com cenoura</h4>
                    <div style={{ flexDirection: "row", display: 'flex', justifyContent: 'center' }}>
                        <h3 style={{ color: '#ad851a', fontWeight: 'bold', paddingRight: '20%', fontSize: '20px', marginTop: '5px' }}>R$6,20</h3>
                        <div>
                            <Icon icon="bxs:cart" color="#ad851a" width="25" />
                        </div>
                    </div>
                </button>

                <button style={{ width: '200px', marginRight: '50px', marginTop: '20px', marginLeft: '40px', backgroundColor: '#FAF0C4', borderColor: '#ad851a' }}>
                    <img src={grao} style={{ width: "100%", paddingTop: "20px", borderRadius: "10%", paddingRight: '50px' }} />
                    <h4 style={{ color: '#ad851a' }}>Grão de bico e queijo</h4>
                    <div style={{ flexDirection: "row", display: 'flex', justifyContent: 'center' }}>
                        <h3 style={{ color: '#ad851a', fontWeight: 'bold', paddingRight: '20%', fontSize: '20px', marginTop: '5px' }}>R$5,99</h3>
                        <div>
                            <Icon icon="bxs:cart" color="#ad851a" width="25" />
                        </div>
                    </div>
                </button>
</div> */}
    </div>
  );
}
