import React, { useState,useContext } from 'react'
import CardContext from '../../context/cart/CartContext'

const ItemList = ({product:{id,name,price,stock}}) => {

    const [cuantity,setCuantity] = useState(1)
    const [,,,addCartItem] = useContext(CardContext)

    const addItemCard = () => {
        addCartItem({
          id,
          name,
          cuantity
        })
    }

  return (
    <div className='ItemList'>
        <h3>{name}</h3>
        <span>{price}</span>
        <input type="number" value={cuantity} min={1} max={stock} onChange={(e)=>setCuantity(e.target.value)}/>
        <button onClick={addItemCard}>Carrito</button>
    </div>
  )
}

export default ItemList