import React,{useState,useEffect} from 'react'
import { useParams} from 'react-router-dom';
import { doc, getDoc,getFirestore } from "firebase/firestore";
import ItemDetail from '../ItemDetail/ItemDetail';
import Navbar from '../Navbar/Navbar';
import Empty from '../Empty/Empty';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';

const ItemDetailContainer = () => {
  
  const {id} = useParams()
  const [product,setProduct] = useState({})
  const [empty,setEmpty] = useState(false)
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);  

  useEffect(()=>{
    if(typeof product === 'object' && Object.keys(product).length === 0) setEmpty(true)
    else setEmpty(false)
  },[product])

  useEffect(()=>{

      (async()=>{
          setError(null)
          setIsLoading(true)

          try {
            const db = getFirestore();
            const docRef = doc(db, "products",id)
            const docSnap  = await getDoc(docRef);
            if(docSnap.exists()) setProduct({id:docSnap.id,...docSnap.data()})
            else setEmpty(true)
          } catch (error) {
            console.error("Error adding order: ", error);
            setError("Hubo un problema al cargar los productos. Por favor, inténtalo de nuevo."); 
          }

        setIsLoading(false)

      })()
  },[id])

  if(error) return <Error error={error}/>
  if(isLoading) return <Loader/>

  return (
    <>
      <Navbar/>
      {
        empty ?
                  <Empty text="No existe el producto"/>
              :
                  <ItemDetail product={product}/>
      }
     
    </>
  )
}

export default ItemDetailContainer