
import { useState } from "react"
import Contador from "../Contador/Contador"
import './Item.css'
import {Link} from 'react-router-dom'

const Item = ({producto}) => {

    return (
    <div className="producto"> 
                <img className="img" src={producto.img}/>
                <h4 className="tituloItem">{producto.nombre}</h4>   
                <p className="subtituloItem">Precio: ${producto.precio}</p>
                <Link to={`/item/${producto.id}`} className="btn btn-primary my-2" id="botonVerMas" >Ver mas</Link>
                {/* <Contador  stock={producto.stock} />
                <p className="subtituloItem"> Total : $ </p> */}
                </div> 
               ) }


export default Item