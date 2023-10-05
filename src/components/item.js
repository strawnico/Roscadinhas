import { Icon } from "@iconify/react";
import React from "react";

function Item({ food, onAddToCart }) {
    return (
        <div style={{ display: "inline-block" }} >
            <div style={{ width: '200px', marginRight: '50px', marginTop: '20px', marginLeft: '40px', backgroundColor: '#FAF0C4', borderColor: '#ad851a' }}>
                <img src={food.image} style={{ width: "100%", paddingTop: "20px", borderRadius: "10%", paddingRight: '50px' }} />
                <div >
                <h3 style={{ color: '#ad851a' }}>{food.name}</h3>
                <p style={{ color: '#ad851a', fontWeight: 'bold', paddingRight: '20%', fontSize: '20px', marginTop: '5px' }}>R${food.price}</p>
                <button onClick={() => onAddToCart(food)}>
                    <Icon icon="bxs:cart" color="#ad851a" width="25" />
                </button>
                </div>
            </div>
        </div>
    );
}

export default Item;