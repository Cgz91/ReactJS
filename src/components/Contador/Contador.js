import { useState} from "react"
import "./Contador.css"

const Contador = ( ) => {
   const [counter, setCounter] = useState(0)


    const sumar = () => {
        setCounter(counter + 1)
    
    }

    const restar = () => {
        if (counter > 0) { 
        setCounter(counter - 1)   
    }}

    return (
       <div className="containerContador">
        <h2 className="contador">Agregar al carrito</h2>
       <div> <button onClick={restar} className="btn btn-outline-primary">  - </button>
        <span className="mx-2">{counter}</span>
        <button onClick={sumar} className="btn btn-primary">  + </button>
        </div>
               </div>
    )
}

export default Contador