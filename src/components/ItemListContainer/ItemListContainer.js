import { useState, useEffect } from 'react'
import './ItemListContainer.css'
import {pedirDatos} from "../../helpers/pedirDatos"
import ItemList from '../ItemList/ItemList'


const ItemListContainer = (props ) => {

    const [productos, setProductos] = useState([])

    console.log(productos)
    
    useEffect(()=> { 

        pedirDatos()
        .then((res)=> {
            setProductos(res)
        })
        .catch( (error)=> {
            console.log(error)
        })
        .finally( ()=>{
          
        })
    },  [] )

    return (
        <div>
            <ItemList productos={productos}/>
        </div>
    )
   


}

export default ItemListContainer