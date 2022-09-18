import { useState, useEffect } from 'react'
import './ItemListContainer.css'
import {pedirDatos} from "../../helpers/pedirDatos"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import Loader from "../Loader/Loader.js"


const ItemListContainer = ( ) => {

    const [productos, setProductos] = useState([])

    const [loading, setLoading] = useState(true)
    
    const {categoryId} = useParams()

    console.log(categoryId)
    
    useEffect(()=> { 
        setLoading(true)

        pedirDatos()
        .then((res)=> {
            if (!categoryId){
            setProductos(res)
        } else {
            setProductos ( res.filter ((prod)=>prod.category.toLowerCase() === categoryId.toLowerCase()) )
        }
        })
        .catch( (error)=> {
            console.log(error)
        })
        .finally( ()=>{
          setLoading(false)
        })
    },  [categoryId] )

    return (
        <div>
            {
                loading ? <Loader/>
                :  <ItemList productos={productos}/>
            }
           
        </div>
    )
   


}

export default ItemListContainer