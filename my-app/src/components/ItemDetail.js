import ItemCount from "./ItemCount"
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function  ItemDetail({item}){
    const [itemCount, setItemCount] = useState();
    
    function onAddItem(newItemCount) {
        console.log(newItemCount);
        setItemCount(newItemCount);
    }                                                            
    
    return(
        <div className="item-detail">
            <img src={item.pictureUrl} alt="Imagen del Producto"/>
            <div className="right-column">
                <div className="details">
                    <h1>{item.title}</h1>
                    <p className="pice">USD {item.price}</p>
                    <p className="description">{item.description}</p>
                </div>
               
                {
                 ! itemCount ?
                    <ItemCount stock={5} initial={1} onAdd={onAddItem}/> :
                    <Link to="/cart">Ir al Carrito</Link>
                }
               
                
                
            </div>
        </div>
    )
}