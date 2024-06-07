import React,{useState,useEffect} from 'react'
import { useParams} from 'react-router-dom';
import { doc, getDoc,getFirestore } from "firebase/firestore";
import { Link } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  
  const {id} = useParams()
  const [product,setProduct] = useState({})


  useEffect(()=>{
      (async()=>{
        
          const db = getFirestore();
          const docRef = doc(db, "products",id)
          const docSnap  = await getDoc(docRef);
          if(docSnap.exists()) setProduct({id:docSnap.id,...docSnap.data()})
            else console.log("no se encontro el documento")

      })()
  },[id])
  
  return (
    <>
      <nav>
        <Link to="/">Productos</Link>
        <Link to="/cart">Carrito</Link>
      </nav>
      <ItemDetail product={product}/>
    </>
  )
}

export default ItemDetailContainer