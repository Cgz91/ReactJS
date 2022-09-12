import { useContext } from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import './CartWidget.css'

const CartWidget = ( ) => {

const {cartQuantity} = useContext(CartContext)


    return (
        <section className='CartWidget'>
    <Link to="/Cart" className='Widget' >
        <BsFillCartFill />
        <span > {cartQuantity()} </span>
    </Link>
     
        </section>
    )
}

export default CartWidget