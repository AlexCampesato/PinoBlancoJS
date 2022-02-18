import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemCount from './ItemCount';

import { getItems } from '../api/api';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';



export default function ItemListContainer({greetings}) {

    const[ItemsList, setItemsList] = useState([]);

    useEffect(() =>{
        getItems().then((items)=>{
            
            setItemsList(items);
        }).catch((error)=>{
            console.log(error);
        });

    }, []);



return (<div>
    <p class="TextPino">PinoBlanco fabrica de muebles industriales</p>
    { ItemsList.length === 0 ? <p>cargando...</p> : <ItemList items={ItemsList} /> }
    
    </div>
);
}
    

