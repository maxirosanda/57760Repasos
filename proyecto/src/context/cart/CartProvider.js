import React, { useEffect, useState } from 'react';
import CardContext from './CartContext';
import { collection, getDocs,getFirestore } from "firebase/firestore";

const CardProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [totalPrice,setTotalPrice] = useState(0)

  useEffect(()=>{
    setTotalPrice(cart.reduce((acc, item) => acc + item.price * item.cuantity, 0))
  },[cart])


  const getItemCart = (id) => {
    return cart.find(item => item.id === id);
  };


  const addCartItem = (newItemCart) => {
    setCart(cart => {
      const itemExists = cart.find(item => item.id === newItemCart.id);
  
      if (itemExists) {
        
        return cart.map(item => 
          item.id === newItemCart.id 
            ? { ...item, cuantity: item.cuantity + newItemCart.cuantity }
            : item
        );
      } else {
        return [...cart, newItemCart];
      }
    });

  };

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
        if(operator === "+" && item.cuantity < docSnap.data().stock ) return {...item, cuantity:item.cuantity + 1}
        if(operator === "-" && item.cuantity > 1 ) return {...item, cuantity:item.cuantity - 1}
      }

      return item

    }))
  }

  return (
    <CardContext.Provider value={{cart,totalPrice,getItemCart,addCartItem,deleteCardItem,updateCuantityCardItem}}>
      {children}
    </CardContext.Provider>
  );
};

export default CardProvider