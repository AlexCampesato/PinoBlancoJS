import ItemDetailContainer from "./ItemDetailContainer"

export default function  ItemDetail({item}){

    return(
        <div className="item-container" key={item.id}>
            <img className="item-picture" src={item.pictureUrl} alt="Imagen del producto"/>
            <p className="item-title">{item.title}</p>
            <p className="item-price">{item.price}</p>
            
        </div>
    )
}