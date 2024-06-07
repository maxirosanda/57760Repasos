import React, { useState } from 'react';
import CardContext from './CartContext';
import { collection, getDocs,getFirestore } from "firebase/firestore";

const CardProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addCartItem = (newItemCart) => {
    setCart(cart => ([...cart, newItemCart]))
  }

  const deleteCardItem = (id) => {
    setCart(cart => cart.filter(item => item.id !== id))
  }

  const updateCuantityCardItem = async (id,operator) => {

    const db = getFirestore();
    const docsRef = collection(db, "products")
    const querySnapshot = await getDocs(docsRef);
    const docSnap = querySnapshot.docs.find(docSnap => docSnap.id === id )

    setCart(cart => cart.map(item => {

      if(item.id === id) {
        if(operator === "+" && item.cuantity < docSnap.stock ) return {...item, cuantity:item.cuantity + 1}
        if(operator === "-" && item.cuantity > 1 ) return {...item, cuantity:item.cuantity - 1}
      }

      return item

    }))
  }

  return (
    <CardContext.Provider value={[cart,addCartItem,deleteCardItem,updateCuantityCardItem]}>
      {children}
    </CardContext.Provider>
  );
};

export default CardProvider