import React, {useContext} from "react";
import { CartContext } from "../context/CartContext";
import './Cart.css';

const Cart=() =>{

    const {cart, vaciarCarrito, deleteItem}=useContext(CartContext);


    return (
    <ul>
        {cart.map((producto) => (
            <div className="cart-container" key={producto.id}>
                
                <li><img className="img" src={producto.pictureUrl} alt="Imagen del Producto"/></li>
                <li><h3 className="titulo">{producto.title}</h3></li>
                <li> <h3 className="cantidad">Cantidad: {producto.cantidad}</h3></li>
                <li> <h3 className="precio">${producto.price}</h3></li>
                <li><button className="eliminar-item" onClick={()=>deleteItem(producto.id)}>Eliminar item</button></li>
                
            </div>
        ))}
        
        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
    </ul>
    )
};

export default Cart;