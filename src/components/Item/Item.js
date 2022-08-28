import Contador from "../Contador/Contador"
import './Item.css'
const Item = ({producto}) => {

    return (
    <div className="producto"> 
                <img className="img" src={producto.img}/>
                <h4 className="tituloItem">{producto.nombre}</h4>   
                <p className="subtituloItem">Precio: ${producto.precio}</p>
                <p className="subtituloItem">Stock disponible: {producto.stock}</p>
                <p className="subtituloItem">{producto.desc}</p>
                <Contador/>
                <a className="btn btn-primary my-2" id="botonVerMas"> Ver mas</a>
                </div> 
               ) }


export default Item