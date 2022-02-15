
import {useEffect, useState} from 'react';
import {getItems} from '../api/api';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom'

export default function ItemDetailContainer(){
    const [data, setData] = useState({});
    const {productoId}=useParams();

    useEffect(()=>{
    async function buscarProductos(){
        const items = await getItems();

        setData(items.find((i)=> i.id===productoId));
        console.log(items)
    }
    buscarProductos();
},[productoId]);

return !data ? <div>cargando…</div> : <ItemDetail item={data}  />


}
