import React, {useContext, useEffect, useState} from "react";
import { CartContext } from "../context/CartContext";
import './Cart.css';
import {Link} from 'react-router-dom';

const Cart=() =>{

    const {cart, vaciarCarrito, deleteItem}=useContext(CartContext);
    const [isCartEmpty, setIsCartEmpty] = useState(true)


    useEffect(() => {
        if (cart.length > 0) {
        setIsCartEmpty(false)
        }
    }, [cart]);

    if (isCartEmpty) {
        return (<div>
                    <h3>Aun no compraste nada. Para visitar nuestros productos</h3>
                    <Link to={'/'}><h3>Click Aqui</h3></Link>
              </div>)
    } else {
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
}};

export default Cart;