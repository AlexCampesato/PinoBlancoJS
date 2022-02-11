
import {useEffect} from 'react';
import {getItems} from '../api/api';

export default function ItemDetailContainer(){
    useEffect(()=>{
    async function buscarProductos(){
        const items = await getItems();

        items.find((i)=> i.id===1);
        console.log(items)
    }
    buscarProductos();
},[]);


}
