import { Icon } from "@iconify/react";
import React from "react";

function Item({ food, onAddToCart }) {
    return (
        <div style={{ display: "inline-block" }} >
            <div style={{ width: '200px', marginRight: '50px', marginTop: '20px', marginLeft: '10px', backgroundColor: '#FAF0C4', borderColor: '#ad851a', marginBottom:'70px', maxWidth:'200px' }}>
                <img src={food.image} style={{ width: "90%", paddingTop: "10px", borderRadius: "10%", paddingRight: '10px', marginLeft:'10px' }} />
                <h4 style={{ color: '#ad851a' }}>{food.name}</h4>
                <div style={{ flexDirection: "row", display: 'flex', justifyContent: 'center' }}>
                    <h3 style={{ color: '#ad851a', fontWeight: 'bold', paddingRight: '20%', fontSize: '20px', marginTop: '5px' }}>R${food.price}</h3>
                    <button onClick={() => onAddToCart(food)} style={{backgroundColor:'#FAF0C4', border:'none', marginBottom:'15px', cursor:"pointer"}}>
                        <Icon icon="bxs:cart" color="#ad851a" width="25" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Item;