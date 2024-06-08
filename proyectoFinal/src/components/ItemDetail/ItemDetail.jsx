import React from 'react'
import withItemHandling from '../../hocs/withItemHandling'


const ItemDetail = ({ product, cuantity, setCuantity, availableStock, addItemCard }) => {

  return (
        <div className='ItemList'>
          <h3>{product.name}</h3>
          <span>{product.price}</span>
          {availableStock <= 0 ? <p>Sin Stock</p>:
          <>
            <input 
              type="number" 
              value={cuantity} 
              min={1} 
              max={availableStock} 
              onChange={(e)=>setCuantity(parseInt(e.target.value))}/>
            <button onClick={addItemCard}>Carrito</button>
          </>
          }
        
      </div>
  )
}

export default withItemHandling(ItemDetail)