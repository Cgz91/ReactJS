import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

const NavBar = ( ) => {
    return (
        <section>
          
<ul>

  <li><Link to="/">Shop</Link></li>
  <li><Link to="/productos/mantas">Mantas</Link></li>
  <li><Link to="/productos/juguetes">Juguetes</Link></li>
  <li><Link to="/productos/indumentaria">Indumentaria</Link></li>
   

</ul>

        </section>
    )
}

export default NavBar