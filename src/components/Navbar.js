import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

const NavBar = ( ) => {
    return (
        <section>
          
<ul>

  <li><Link to="/">Shop</Link></li>
  <li><Link to="/productos/Mantas">Mantas</Link></li>
  <li><Link to="/productos/Juguetes">Juguetes</Link></li>
  <li><Link to="/productos/Indumentaria">Indumentaria</Link></li>
   

</ul>

        </section>
    )
}

export default NavBar