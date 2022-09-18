
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
            
            <button onClick={restar} 
            className={`btn ${counter === 1 ? "btn-outline-danger" : "btn-outline-primary"}`}
            disabled={counter===1} > - </button>
           
            <span>{counter}</span>
            
            <button onClick={sumar} 
            className={`btn ${counter === stock ? "btn-outline-danger" : "btn-primary"}`}
            disabled={counter === stock}
            > + </button>
           
            <button onClick={handleAgregar} className="btn btn-success" disabled={counter<=0} >Agregar al carrito</button>
     
        </div>
    )
}

export default Contador