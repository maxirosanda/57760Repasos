import React, { useEffect, useState} from 'react'
import { collection, getDocs,getFirestore } from "firebase/firestore";
import ItemList from '../ItemList/ItemList';
import Navbar from '../Navbar/Navbar';
import Empty from '../Empty/Empty';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';


const ItemListContainer = () => {

    const [products,setProducts] = useState([])
    const [empty,setEmpty] = useState(false)
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false); 

    useEffect(()=>{
      if(products.length === 0) setEmpty(true)
      else setEmpty(false)
    },[products])


    useEffect(()=>{
     
        (async()=>{
            setError(null)
            setIsLoading(true);
            try {
              const db = getFirestore();
              const docsRef = collection(db, "products")
              const querySnapshot = await getDocs(docsRef);
              setProducts(querySnapshot.docs.map(docSnap => ({id:docSnap.id,...docSnap.data()})))
            } catch (error) {
                console.error("Error adding order: ", error);
                setError("Hubo un problema al cargar los productos. Por favor, inténtalo de nuevo."); // Establecer mensaje de error
            }
            setIsLoading(false);
          
        })()
    },[])

    if(error) return <Error error={error}/>
    if(isLoading) return <Loader/>

  return (
    <>
      <Navbar/>
      {empty  ?
                <Empty text="No hay productos"/>
              :
                <div className='itemListContainer'>
                  {products.map(product => <ItemList key={product.id} product={product}/>)}
                </div>
      }

    </>

  )
}

export default ItemListContainer