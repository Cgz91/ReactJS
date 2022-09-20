import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import {BsFillTrashFill, BsSuitHeart} from 'react-icons/bs'
import {Link} from "react-router-dom"
import './Cart.css'

const Cart = () => {

    const {cart, cartTotal, emptyCart, removeItem} = useContext(CartContext)

    if (cart.length === 0) {
        return (
                <>
                <h2 className="tituloCarrito" >Tu carrito esta vacio</h2>
                <Link to="/" className= "btn btn-primary" id="botonIrAComprar"> Ir a comprar </Link>
                </>
        )
    }
    
    return (
        < >
                <h2 className="tituloCarrito" > Tu carrito </h2>
                <div className="containerCarrito">
            { cart.map ((item) => (
                <div className="productoCarrito" key={item.id} > 
                    
                 
                  <h3 className="tituloProducto" > <BsSuitHeart/> {item.nombre}</h3>
                
                    <p className="subtituloCarrito">Precio: $ {item.precio}</p>
                    <p className="subtituloCarrito">Cantidad: {item.cantidad}</p>
                    <img className="imgCarrito" src={item.img} /> 
                    
                    <button onClick={()=> removeItem(item.id)}  className="btn btn-danger" id="botonEliminar" > <BsFillTrashFill/> </button>
                    
                    </div>
                
           ) )}
           
           <h4 className="TotalCarrito">Total: $ {cartTotal()}</h4>
           <div className="botones">
           <button onClick={emptyCart} className="btn btn-danger" id="botonVaciar" > Vaciar Carrito </button>
           <button   className="btn btn-success" id="botonTerminar" >Terminar mi compra </button>
          </div>
        
           </div>
            
    </>
    )
}

export default Cart 