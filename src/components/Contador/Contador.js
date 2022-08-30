import { useState } from "react"
import "./Contador.css"

const Contador = ({stock}) => {
    const [counter, setCounter] = useState(0)

 

    const sumar = () => {
        if (counter < stock) {
        setCounter(counter + 1) }

    }

    const restar = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    return (
        <div className="containerContador">
            
            <button onClick={restar} className="btn btn-outline-primary">  - </button>
            <span >{counter}</span>
            <button onClick={sumar} className="btn btn-primary">  + </button>
            <button className="btn btn-primary" disabled={counter<=0} >Agregar al carrito</button>
     
        </div>
    )
}

export default Contador