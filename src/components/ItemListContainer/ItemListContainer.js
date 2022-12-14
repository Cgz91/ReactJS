import { useState, useEffect } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import Loader from "../Loader/Loader.js" 

import {db} from '../../firebase/config'
import {collection, getDocs, query, where} from "firebase/firestore"

const ItemListContainer = ( ) => {

    const [productos, setProductos] = useState([])

    const [loading, setLoading] = useState(true)
    
    const {categoryId} = useParams()

 
    
    useEffect(()=> { 
        setLoading(true)

        const productosRef = collection(db, 'productos')

        const q =  categoryId 
                 ?  query(productosRef, where('category','==', categoryId))
                : productosRef

            getDocs(q)
            .then((resp)=> {
                const productosDB =  resp.docs.map( (doc)=> ({id: doc.id, ...doc.data()}) )
                console.log(productosDB)

                setProductos(productosDB)
            })

    .finally(() => {
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