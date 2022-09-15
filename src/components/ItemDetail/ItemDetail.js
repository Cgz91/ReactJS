import './ItemDetail.css'
import {Link} from 'react-router-dom'
import Contador from '../Contador/Contador'
import { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext'

const ItemDetail = ({item }) => {

    const {cart, addToCart, isInCart} = useContext(CartContext)
    console.log(cart)
    const [cantidad, setCantidad] = useState(1)

    
    const handleAgregar =() => {
        const itemToCart = {
            id: item.id,
            nombre:item.nombre,
            precio: item.precio,
            img: item.img,
            cantidad
        }
       
       console.log( isInCart(item.id))
        addToCart( itemToCart)
    }

    return (
        <div>

            <h3 className="tituloDetail">{item.nombre}</h3>
            <img  className="imgDetail" src={item.img} />
            <p className="subtituloDetail">{item.desc}</p>
            <h4 className="subtituloDetail"> Precio ${item.precio}</h4>
            <p className="subtituloDetail">Stock disponible: {item.stock } unidades </p>

            {
                isInCart(item.id)
                ?
                <Link to="/cart" className='btn btn-success' id='botonTerminar'> Terminar mi compra</Link>
                : 
                <Contador 
                stock={item.stock} 
                counter ={cantidad} 
                setCounter={setCantidad}
                handleAgregar ={handleAgregar} />
                
            }
           
            
            
            <Link to='/itemListContainer' className="btn btn-primary my-2" id='botonVolver'>Volver</Link>
        </div>
    )
}

export default ItemDetail