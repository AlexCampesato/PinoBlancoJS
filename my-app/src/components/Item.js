import './ItemList.css';

export default function Item({Item}) {
    return(
        <div className="item-container">
                <img src={producto.pictureUrl} alt="Imagen del producto"/>
            <div className="detail-container">
                <p className="item-price">{producto.price}</p>
                <p className="item-title">{producto.title}</p>
            </div>
        </div>
    )
}