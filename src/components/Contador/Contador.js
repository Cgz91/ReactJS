
import "./Contador.css"

const Contador = ({stock, counter, setCounter, handleAgregar}) => {
    

 

    const sumar = () => {
        if (counter < stock) {
        setCounter(counter + 1) 
    }

    }

    const restar = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }
    


    return (
        <div className="containerContador">
            
            <button onClick={restar} className="btn btn-outline-primary">  - </button>
            <span  >{counter}</span>
            <button onClick={sumar} className="btn btn-primary">  + </button>
           
            <button onClick={handleAgregar} className="btn btn-success" disabled={counter<=0} >Agregar al carrito</button>
     
        </div>
    )
}

export default Contador