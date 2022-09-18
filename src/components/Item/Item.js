
import { useState } from "react"
import Contador from "../Contador/Contador"
import './Item.css'
import {Link} from 'react-router-dom'

const Item = ({producto}) => {

    return (
    <div className="producto"> 
        {
        producto.stock > 0
        ?  <img className="img" src={producto.img}/>   
        : <img className="imgSinStock" src={producto.img}/> 
        }
                <h4 className="tituloItem">{producto.nombre}</h4>   
                <p className="subtituloItem">Precio: ${producto.precio}</p>
        {
            producto.stock > 0
            ?   <Link to={`/item/${producto.id}`} className="btn btn-primary my-2" id="botonVerMas" >Ver mas</Link>
            : <p className="btn btn-outline-danger" id="botonSinStock"> Producto sin stock </p>
        }
               
                </div> 
               ) }
 

export default Item


