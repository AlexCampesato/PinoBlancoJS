import React, {useContext} from "react";
import { CartContext } from "../context/CartContext";

const Cart=() =>{

    const {cart, vaciarCarrito}=useContext(CartContext);

    return (
    <>
        {cart.map((producto) => (
            <div key={producto.id}>
                <h3>{producto.name}</h3>
                <h1>hola</h1>
            </div>
        ))}
        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
    </>
    )
};

export default Cart;