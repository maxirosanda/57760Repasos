import React, { useContext } from 'react'
import CardContext from '../../context/cart/CartContext'
import Swal from 'sweetalert2'

const ItemCard = ({item:{id, name, cuantity, price}}) => {

  const {deleteCardItem,updateCuantityCardItem} = useContext(CardContext)
  
  const deleteItem = async () => {
    
    const result = await Swal.fire({
      title: "Quiere eliminar el item del carrito?",
      showDenyButton: true,
      confirmButtonText: "Guardar",
      showCancelButton:false,
      denyButtonText: `No guardar`
    })

    if (result.isConfirmed) deleteCardItem(id)

  }

  const incrementCuantity = () => {
    updateCuantityCardItem(id,"+")
  }

  const decrementCuantity = () => {
    updateCuantityCardItem(id,"-")
  }
 
  return (
    <div>
        <h3>{name}</h3>
        <span>{price * cuantity}</span>
        <button onClick={incrementCuantity}>+</button>
        <span>{cuantity}</span>
        <button onClick={decrementCuantity}>-</button>
        <button onClick={deleteItem}>eliminar</button>
    </div>
  )
}

export default ItemCard