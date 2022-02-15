
import './ItemList.css'
import {Link} from 'react-router-dom';


export default function ItemList({products}){
    
    

    return (
        <div className="ItemList-container">

           {
                products.map(function(producto){
                    return(
                        <div className="item-container" key={producto.id}>
                            
                            <img className="item-picture" src={producto.pictureUrl} alt="Imagen del producto"/>
                            <p className="item-title">{producto.title}</p>
                            <Link to={'/producto/${producto.id}'}/>
                            <p className="item-price">USD {producto.price}</p>
                            
                        </div>
                    )
                })
            
                
            }
        </div>
    );
}