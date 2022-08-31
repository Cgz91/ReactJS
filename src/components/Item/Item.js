
import { useState } from "react"
import Contador from "../Contador/Contador"
import './Item.css'

const Item = ({producto}) => {
const [total, setTotal] = useState(0);
const addToCart = (counter) => {

console.log("se agrego al carrito", counter, "unidades de", producto.nombre, "el total es $:", (producto.precio * counter));
setTotal(producto.precio * counter);
} 
 


    return (
    <div className="producto"> 
                <img className="img" src={producto.img}/>
                <h4 className="tituloItem">{producto.nombre}</h4>   
                <p className="subtituloItem">Stock disponible: {producto.stock }</p>
                <p className="subtituloItem">{producto.desc}</p>
                <p className="subtituloItem">Precio: ${producto.precio}</p>
                <Contador  stock={producto.stock} addToCart={addToCart} />
                <p> Total : $ {  total } </p>
                </div> 
               ) }


export default Item