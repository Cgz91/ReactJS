import './ItemListContainer.css'

const ItemListContainer = (props ) => {
    return (
         <section className='text-container'>
          
        <h2> Bienvenido {props.usuario}</h2>
        <p> Al shop de Chloe Tejidos</p>
        </section>
    )
}

export default ItemListContainer