import React, {useContext} from "react";
import { CartContext } from "../context/CartContext";
import './Cart.css';

const Cart=() =>{

    const {cart, vaciarCarrito, deleteItem}=useContext(CartContext);

    return (
    <>
        {cart.map((producto) => (
            <div key={producto.id}>
                
                <img className="img" src={producto.pictureUrl} alt="Imagen del Producto"/>
                <h2 className="titulo">{producto.title}</h2>
                <h3 className="cantidad">Usted llevara: {producto.cantidad} unidades</h3>
                <h3 className="precio">${producto.price}</h3>
                <button onClick={()=>deleteItem(producto.id)}>Eliminar item</button>
                
            </div>
        ))}
        
        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
    </>
    )
};

export default Cart;