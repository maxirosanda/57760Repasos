import React, { useEffect, useState} from 'react'
import { collection, getDocs,getFirestore } from "firebase/firestore";
import ItemList from '../ItemList/ItemList';

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
    <div className='itemListContainer'>
        {products.map(product => <ItemList key={product.id} product={product}/>)}
    </div>
  )
}

export default ItemListContainer