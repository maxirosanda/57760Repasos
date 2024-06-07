import React, { useContext } from 'react'
import CardContext from '../../context/cart/CartContext'

const ItemCard = ({item:{id, name, cuantity, price}}) => {

  const {deleteCardItem,updateCuantityCardItem} = useContext(CardContext)
  
  const deleteItem = () => {
    deleteCardItem(id)
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