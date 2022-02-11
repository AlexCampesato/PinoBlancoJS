import { useEffect } from "react";
import './ItemList.css'



export default function ItemList({products}){
    
    

    return (
        <div className="ItemList-container">

           {
                products.map(function(producto){
                    return(
                        <div className="item-container" key={producto.id}>
                            <img className="item-picture" src={producto.pictureUrl} alt="Imagen del producto"/>
                            <p className="item-title">{producto.title}</p>
                            <p className="item-price">{producto.price}</p>
                            
                        </div>
                    )
                })
            
                
            }
        </div>
    );
}