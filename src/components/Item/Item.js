
import { useState } from "react"
import Contador from "../Contador/Contador"
import './Item.css'
import {Link} from 'react-router-dom'

const Item = ({producto}) => {
const [total, setTotal] = useState(0);
const addToCart = (counter) => {
 
         setTotal(producto.precio * counter)
console.log("se agrego al carrito", counter, "unidades de", producto.nombre, "el total es $:", (producto.precio * counter));
;
} 
 


    return (
    <div className="producto"> 
                <img className="img" src={producto.img}/>
                <h4 className="tituloItem">{producto.nombre}</h4>   
                <p className="subtituloItem">Precio: ${producto.precio}</p>
                <Link to={`/item/${producto.id}`} className="btn btn-primary my-2" id="botonVerMas" >Ver mas</Link>
                <Contador  stock={producto.stock} addToCart={addToCart} />
                <p className="subtituloItem"> Total : $ {  total } </p>
                </div> 
               ) }


export default Item