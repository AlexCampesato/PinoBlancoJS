import { React, useEffect, useState } from "react";


export default function ItemCount({stock,initial,onAdd}) {
    const[itemCounter, setItemCounter]=useState();

    function sumar() {
        if(itemCounter<stock){
        setItemCounter(itemCounter + 1);
        }}

        function restar() {
           if(itemCounter>initial){
            setItemCounter(itemCounter - 1);
        }}

        function addToCart(){
            onAdd(itemCounter);
        }
    
    return(
        <div className="item-count-container">
            <div>
                <button onClick={restar}>-</button>
                <p>{itemCounter}</p>
                <button onClick={sumar}>+</button>
            </div>
            
            <button className="add-to-cart-button" onClick={addToCart}>Agregar a carrito</button>
            
        </div>

    );

}