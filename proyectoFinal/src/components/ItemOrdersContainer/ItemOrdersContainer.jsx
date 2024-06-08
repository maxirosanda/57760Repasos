import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { collection, getDocs,getFirestore } from "firebase/firestore";
import Error from '../Error/Error';
import ItemOrder from '../ItemOrder/ItemOrder';
import Loader from '../Loader/Loader';

const ItemOrdersContainer = () => {

  const [orders,setOrders] = useState([])
  const [error,setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false); 

  useEffect(()=>{
     
    (async()=>{
        try {
          setIsLoading(true)
          setError(null)
          const db = getFirestore();
          const docsRef = collection(db, "orders")
          const querySnapshot = await getDocs(docsRef);
          setOrders(querySnapshot.docs.map(docSnap => ({id:docSnap.id,...docSnap.data()})))
        } catch (error) {
            console.error("Error adding order: ", error);
            setError("Hubo un problema al cargar las ordenes. Por favor, inténtalo de nuevo."); // Establecer mensaje de error
        }
        setIsLoading(false)
      
    })()
},[])
  if(error) return <Error error={error}/>
  if(isLoading) return <Loader/>
  return (
    <>
        <Navbar/>
        <div>
          {orders.map(order => <ItemOrder order={order}/>)}
        </div>
    </>

  )
}

export default ItemOrdersContainer