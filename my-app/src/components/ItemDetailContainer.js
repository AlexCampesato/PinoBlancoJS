
import {useEffect, useState} from 'react';
import {getItems} from '../api/api';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer(){
    const [data, setData] = useState({})
    useEffect(()=>{
    async function buscarProductos(){
        const items = await getItems();

        setData(items.find((i)=> i.id===1));
        console.log(items)
    }
    buscarProductos();
},[]);

return !data ? <div>cargando…</div> : <ItemDetail item={data}  />


}
