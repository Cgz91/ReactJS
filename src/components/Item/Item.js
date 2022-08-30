import Contador from "../Contador/Contador"
import './Item.css'
const Item = ({producto}) => {




    return (
    <div className="producto"> 
                <img className="img" src={producto.img}/>
                <h4 className="tituloItem">{producto.nombre}</h4>   
                <p className="subtituloItem">Stock disponible: {producto.stock}</p>
                <p className="subtituloItem">{producto.desc}</p>
                <p className="subtituloItem">Precio: ${producto.precio}</p>
                <Contador  stock={producto.stock} />
             
                </div> 
               ) }


export default Item