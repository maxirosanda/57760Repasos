import React, { useState,useContext, useEffect } from 'react'
import { useNavigate} from 'react-router-dom';
import CardContext from '../../context/cart/CartContext'

const ItemDetail = ({product:{id,name,price,stock}}) => {

  const [cuantity,setCuantity] = useState(1)
  const [availableStock,setAvailableStock] = useState(stock)
  const {cart,addCartItem} = useContext(CardContext)
  const navigate = useNavigate();

  useEffect(()=>{

    const item = cart.find(item => item.id === id)
    if(item) return setAvailableStock(stock - item.cuantity)
    setAvailableStock(stock)

  },[cart,id,stock])

  const addItemCard = () => {
      addCartItem({
        id,
        name,
        cuantity
      })
      setCuantity(1)
      navigate("/cart")
  }

  return (
        <div className='ItemList'>
          <h3>{name}</h3>
          <span>{price}</span>
          {availableStock <= 0 ? <p>Sin Stock</p>:
          <>
            <input type="number" value={cuantity} min={1} max={availableStock} onChange={(e)=>setCuantity(parseInt(e.target.value))}/>
            <button onClick={addItemCard}>Carrito</button>
          </>
          }
        
      </div>
  )
}

export default ItemDetail