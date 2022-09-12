import CartWidget from "./CartWidget/CartWidget"
import {Link} from 'react-router-dom'

const Titulo = ( ) => {
    return (
        <section >
     <CartWidget/>
  
    <h1 className='titulo'> <Link to="/" className='titulo'> Chloe Tejidos </Link> </h1>   

  
    <h2 className='subtitulo'> Tejidos 100% a mano hechos con amor </h2>

        </section>
    )
}

export default Titulo