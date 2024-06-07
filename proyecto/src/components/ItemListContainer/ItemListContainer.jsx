import React, { useEffect, useState} from 'react'
import { collection, getDocs,getFirestore } from "firebase/firestore";
import ItemList from '../ItemList/ItemList';
import { Link} from 'react-router-dom';

const ItemListContainer = () => {

    const [products,setProducts] = useState([])


    useEffect(()=>{
        (async()=>{
            const db = getFirestore();
            const docsRef = collection(db, "products")
            const querySnapshot = await getDocs(docsRef);
            setProducts(querySnapshot.docs.map(docSnap => ({id:docSnap.id,...docSnap.data()})))

        })()
    },[])

  return (
    <>
    <nav>
      <Link to="/">Productos</Link>
      <Link to="/cart">Carrito</Link>
    </nav>
    <div className='itemListContainer'>
        {products.map(product => <ItemList key={product.id} product={product}/>)}
    </div>
    </>

  )
}

export default ItemListContainer