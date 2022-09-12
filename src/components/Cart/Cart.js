import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import {BsFillTrashFill, BsSuitHeart} from 'react-icons/bs'
 
import './Cart.css'

const Cart = () => {

    const {cart, cartTotal, emptyCart, removeItem} = useContext(CartContext)

    return (
        <div >
            
            <h2 className="tituloCarrito" > Tu carrito </h2>
            <div className="containerCarrito">
            { cart.map ((item) => (
                <div className="productoCarrito" key={item.id} > 
                    
                  <div > 
                  <h3 className="tituloProducto" > <BsSuitHeart/> {item.nombre}</h3>
                
                    <p className="subtituloCarrito">Precio: $ {item.precio}</p>
                    <p className="subtituloCarrito">Cantidad: {item.cantidad}</p>
                   
                    {/* <img className="img" src={item.img} />  */}
                    
                    </div>
                    
                    <div id="botonEliminar">
                    <button onClick={()=> removeItem(item.id)}  className="btn btn-danger mx-2" > <BsFillTrashFill/> </button>
                    </div>
                    
                    </div>
                
           ) )}
</div>
           <h4 className="TotalCarrito">Total: $ {cartTotal()}</h4>
           <button onClick={emptyCart} className="btn btn-danger" id="botonVaciar" > Vaciar Carrito </button>
        </div>
    )
}

export default Cart 