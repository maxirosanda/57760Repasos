import './App.css';
import { doc, getDoc,getDocs, getFirestore,collection,where,query,limit,addDoc,updateDoc,deleteDoc } from "firebase/firestore"; 
import { useEffect, useState } from 'react';

function App() {

  const [product,setProduct] = useState({})
  const [products,setProducts] = useState([])
  const [productsFiltered,setProductsFiltered] = useState([])
  const [errorProductsFiltered,setErrorProductsFiltered] = useState("")

  useEffect(()=>{
    (async ()=>{
        const db = getFirestore();
        const docRef = doc(db, "products", "JHlj6uFwZxd2wDVT7zCU");
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()) setProduct({id:docSnap.id,...docSnap.data()})
        else console.log("no se encontro el documento")
    })()

  },[])

  useEffect(()=>{
    (async ()=>{
        const db = getFirestore();
        const docRef = collection(db, "products");
        const q = query(docRef, where("price", ">=", 1200),where("category", "==", "drinks"),limit(20));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.size === 0) return setErrorProductsFiltered("No hay productos con este filtro")
        setProductsFiltered(querySnapshot.docs.map(docSnap => ({id:docSnap.id,...docSnap.data()})))
        
    })()

  },[])

  const addProduct = async () => {
        const db = getFirestore();
        const docRef = collection(db, "products");
        await addDoc(docRef, {
          name: "Pan lactal",
          price: 2500,
          stock: 45,
          category:"breads"
        });

  }

  const updateProduct = async () => {
    const db = getFirestore();
    const docRef = doc(db, "products","kFThy2suy13kh9vnFz7B");
    await updateDoc(docRef, {
      name: "Pan lactal 2",
      price: 2500,
      stock: 25,
      category:"breads"
    });

}

const deleteProduct = async () => {
  const db = getFirestore();
  const docRef = doc(db, "products","kFThy2suy13kh9vnFz7B");
  await deleteDoc(docRef);
}


  return (
    <div className="App">
      <p>{errorProductsFiltered ? errorProductsFiltered : JSON.stringify(productsFiltered)}</p>
      <button onClick={deleteProduct}>agregar Product</button>
    </div>
  );
}

export default App;
