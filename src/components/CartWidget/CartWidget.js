import { useContext } from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import './CartWidget.css'

const CartWidget = ( ) => {

const {cartQuantity, cart} = useContext(CartContext)


    return (
        <section className='CartWidget'>
    <Link to="/Cart" className={`Widget ${cart.length > 0 ? 'Widget' : 'Widget-Empty'}`} >
        <BsFillCartFill />
        <span > {cartQuantity()} </span>
    </Link>
     
        </section>
    )
}

export default CartWidget