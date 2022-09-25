import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"
import {addDoc, collection, doc, updateDoc, getDoc} from 'firebase/firestore'
import {db} from '../../firebase/config'
import './Checkout.css'

const Checkout = () => {

    const { cart, cartTotal, terminarCompra} = useCartContext()

    const [values, setValues] = useState({
        nombre: '', 
        email: '', 
        direccion: ''
    })

    const handleInputChange = (e) => {
     
        setValues( {
            ...values,
            [e.target.name]: e.target.value

        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()


        const orden = {
            comprador : values,
            items: cart,
            total: cartTotal()
         }

         console.log(orden)



         const ordenesRef = collection(db, 'ordenes')

         cart.forEach((item)=> {
            const docRef = doc(db, 'productos', item.id)

            getDoc (docRef)
                .then((doc)=> {

                    if (doc.data().stock >= item.cantidad) {
                        updateDoc( docRef, {
                            stock: doc.data().stock - item.cantidad
                        })
                    } else {
                        alert("No hay stock suficiente")
                    }
                   

                })

         })

         addDoc(ordenesRef, orden)
            .then((doc)=> {
                console.log(doc.id)
                terminarCompra(doc.id)
            })

    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }
    
return (

    <div className="containerCheckout">
        <h2 className="tituloCheckout">  Ingresa tus datos </h2>

    <form onSubmit={handleSubmit}>
        
        <input 
        name="nombre"
        onChange={handleInputChange}
        value={values.nombre}
        type={'text'} 
        className= "my-3 form-control" 
        placeholder="Tu nombre"></input>
       
        <input 
        name="email"
         onChange={handleInputChange}
        value={values.email}
        type={'email'} 
        className= " my-3 form-control" 
        placeholder="Email"></input>
        
        <input 
        name="direccion"
         onChange={handleInputChange}
        value = {values.direccion}
        type={'text'} 
        className= "my-3 form-control" 
        placeholder="Direccion"></input>
   
        <button type="submit" className="btn btn-primary" id="botonEnviarC"> Enviar </button>
    </form>
    </div>
)
}

export default Checkout
