import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({productos = []}) => {
    return (
        <div className='container my-5' id="container">
    
           { productos.map ((prod) => {
            return <Item producto={prod} key={prod.id}/>
           })}


        </div>  
    )}

    export default ItemList