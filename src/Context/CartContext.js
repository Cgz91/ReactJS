import { createContext, useEffect, useContext } from "react"
import { useState } from "react"
import Swal from "sweetalert2"


export const CartContext  = createContext ()

 const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({children})=> {

    const [cart, setCart] = useState(init)
  
  const addToCart = (item) => {
    
    setCart([...cart, item])
    
     
     
  }

  const removeItem = (id)=> { 
    Swal.fire({
    title: 'Estas seguro que deseas eliminar este producto?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminar del carrito',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        setCart(cart.filter((item)=> item.id !== id)),
         
        'Tu item ha sido eliminado',
        'success'
      )
    }
  })

  }
  

  const isInCart = (id) => {
    return cart.find((item)=> item.id ===id)
  }

  const cartQuantity = () => {
    return cart.reduce((acc , item)=> acc + item.cantidad, 0)
  }


  const cartTotal = ()=> {
    return cart.reduce ((acc, item) => acc + item.cantidad * item.precio, 0)
}

const emptyCart = ()=> {
    Swal.fire({
        title: 'Estas seguro que quieres vaciar el carrito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, vaciar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            setCart([]),
            'Se ha vaciado tu carrito',
            'success'
            )
        }
      })
   
}

const terminarCompra = (id) => { 
  Swal.fire({
    title: 'Tu compra se registro con exito',
    text: `Tu numero de orden es: ${id}`,
    icon: 'success',
   
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Genial!',
  
  }) 
  setCart([])

}

useEffect( ()=> {
  localStorage.setItem('carrito', JSON.stringify(cart))
},[cart])


 return (
<CartContext.Provider value={ {
    cart,
    addToCart,
    isInCart,
    cartQuantity,
    cartTotal,
    emptyCart,
    removeItem,
    terminarCompra
  } }>

    {children}
      
</CartContext.Provider>
    )
}

export const useCartContext = () => {
  return useContext(CartContext)
}
 