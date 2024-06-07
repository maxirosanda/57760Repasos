import React,{useContext} from 'react'
import CartContext from '../../context/cart/CartContext'
import ItemCard from '../ItemCart/ItemCart'
import { Link } from 'react-router-dom';
import { collection, addDoc,getFirestore } from "firebase/firestore";

const ItemCartContainer = () => {

  const {cart,totalPrice} = useContext(CartContext)

  const addOrder = async () => {

    const db = getFirestore();
    const docRef = collection(db, "orders");
    await addDoc(docRef, {
      buyer:{
        name:"Jose fernandez",
        phone:"155646456",
        email:"jose_fernandez@hotmail.com"
      },
      items:cart,
      totalPrice
    });
  }

  return (
    <>
         <nav>
          <Link to="/">Productos</Link>
          <Link to="/cart">Carrito</Link>
        </nav>
        <div>
          {cart.map(item => <ItemCard key={item.id} item={item}/>)}
          <p>{totalPrice}</p>
          <button onClick={addOrder}>Finalizar order</button>
        </div>
    </>
 
  )
}

export default ItemCartContainer