import React, { useState } from "react";
import {
  getCartItemsFromLocalStorage,
  saveCartItemsToLocalStorage,
} from "../localStorageUtils";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

function Carrinho() {
  const [cartItems, setCartItems] = useState(getCartItemsFromLocalStorage());

  const removeFromCart = (foodId) => {
    const indexToRemove = cartItems.findIndex((item) => item.id === foodId);
    if (indexToRemove !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems.splice(indexToRemove, 1);
      setCartItems(updatedCartItems);
      saveCartItemsToLocalStorage(updatedCartItems);
    }
  };

  function pedidoConfirmado() {
    alert("Pedido Confirmado!")
  }

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }

  return (
    <div className="cart" style={{ width: "100%" }}>
      <div style={{ display: "flex", justifyContent:"center" }}>
        <button style={{ backgroundColor: "transparent", marginLeft: "10px", border: 'none', cursor: "pointer"}} onClick={routeChange}>
          <Icon icon="icon-park-solid:back" width="25" />
        </button>
        <h2 style={{  }}>Carrinho de Compras</h2>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ width: "fit-content", minWidth:"400px", borderRadius: "10px", boxShadow:"0px 0px 20px -6px rgba(0, 0, 0, 0.10)", padding: "10px 50px", display: "flex", flexDirection: 'column', marginBottom: "30px" }}>
          <ul style={{ padding: '0' }}>
            {cartItems.map((item, index) => (
              <li key={index} style={{ marginBottom: "15px", listStyle: "none", textAlign: 'left', display: "flex", alignItems: "center" }}>
                <img src={item.image} style={{ width: '30px', height: '30px', borderRadius: "3px" }} /> 
                <div style={{marginLeft:"6px"}}>{item.name} R${item.price}</div>
                <div style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
                  <button style={{ marginLeft: "10px", backgroundColor: '#FAF0C4', border: 'none', cursor: "pointer" }} onClick={() => removeFromCart(item.id)}>
                    <Icon icon="mdi:trash" color="#ad851a" width="25" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="address" style={{ display: "flex", flexDirection: "column", textAlign: 'left' }}>
            <h3>Cadastre seu endereço</h3>

            <label style={{ fontWeight:"560", fontSize:"15px"}}>CEP</label>
            <input style={{ marginBottom: "10px", border:'0px', outline:"none", borderBottomWidth:"2px", borderBottom:"solid", borderBottomColor:"#FAF0C4" }} placeholder="000000-000" />

            <label style={{ fontWeight:"560", fontSize:"15px"}}>N°</label>
            <input style={{ marginBottom: "10px", border:'0px', outline:"none", borderBottomWidth:"2px", borderBottom:"solid", borderBottomColor:"#FAF0C4" }} placeholder="000" />

            <label style={{ fontWeight:"560", fontSize:"15px"}}>Complemento</label>
            <input style={{ marginBottom: "10px", border:'0px', outline:"none", borderBottomWidth:"2px", borderBottom:"solid", borderBottomColor:"#FAF0C4" }} placeholder="casa branca final da rua, encima do mercado etc" />
            <button onClick={pedidoConfirmado} style={{ backgroundColor:"#FAF0C4", cursor: "pointer", borderRadius: "3px", border: "none", padding: "10px 20px", fontWeight: "500", marginTop:"12px" }}>Confirmar pedido</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carrinho;