import './ItemDetail.css'
import {Link} from 'react-router-dom'

const ItemDetail = ({item}) => {

    return (
        <div>

            <h3 className="tituloDetail">{item.nombre}</h3>
            <img  className="imgDetail" src={item.img} />
            <p className="subtituloDetail">{item.desc}</p>
            <h4 className="subtituloDetail"> Precio ${item.precio}</h4>
            <p className="subtituloDetail">Stock disponible: {item.stock } unidades </p>
            <Link to='/itemListContainer' className="btn btn-primary my-2" id='botonVolver'>Volver</Link>
        </div>
    )
}

export default ItemDetail