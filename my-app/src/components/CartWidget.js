
import React, {useContext, useEffect, useState} from "react";
import { CartContext } from "../context/CartContext";
import './CartWidget.css';
import CarritoImagen from './carrito.svg'

const Cartwidget=() =>{

    const {cart}=useContext(CartContext);
    const [isCartEmpty, setIsCartEmpty] = useState(true)


    useEffect(() => {
        if (cart.length > 0) {
        setIsCartEmpty(false)
        }
    }, [cart]);

    if (isCartEmpty) {
        return (<img src=""/>
              )
    } else {
        return (<img src={CarritoImagen} alt="Carrito" class='Carrito' />)
}};

export default Cartwidget;
