import React from 'react';
import './ItemListContainer.css';
import ItemCount from './ItemCount';

export default function ItemListContainer() {
return (<div>
    <p class="TextPino">PinoBlanco fabrica de muebles industriales</p>
    <ItemCount stock={5} initial={1} />
    </div>
);
}
    

