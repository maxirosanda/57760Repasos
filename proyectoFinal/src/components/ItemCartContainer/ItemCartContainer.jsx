import React,{useContext, useEffect,useState} from 'react'
import CartContext from '../../context/cart/CartContext'
import ItemCard from '../ItemCart/ItemCart'
import { collection, addDoc,getFirestore, doc,updateDoc } from "firebase/firestore";
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import Empty from '../Empty/Empty';
import Error from '../Error/Error';
import Swal from 'sweetalert2'

const ItemCartContainer = () => {

  const {cart,totalPrice,clearCart} = useContext(CartContext)
  const navigate = useNavigate()
  const [empty,setEmpty] = useState(false)
  const [error, setError] = useState(null); 

  useEffect(()=>{
    if(cart.length === 0) setEmpty(true)
    else setEmpty(false)
  },[cart])

  const addOrder = async () => {

    const result = await Swal.fire({
      title: "Quiere realizar la orden?",
      showDenyButton: true,
      confirmButtonText: "Si",
      showCancelButton:false,
      denyButtonText: `No`
    })

    if(result.isDenied) return

    try {
      const db = getFirestore();
      const docsRef = collection(db, "orders");
      await addDoc(docsRef, {
        buyer: {
          name: "Jose Fernandez",
          phone: "155646456",
          email: "jose_fernandez@hotmail.com"
        },
        items: cart,
        totalPrice
      });

      for (const item of cart) {
        const docRef = doc(db, "products", item.id);
        await updateDoc(docRef, {
          stock: item.stock - item.cuantity
        });
      }
      
      clearCart();
      navigate("/orders");
    } catch (error) {
      console.error("Error adding order: ", error);
      setError("Hubo un problema al procesar tu orden. Por favor, inténtalo de nuevo."); // Establecer mensaje de error
    }
  };

  if(error) return <Error error={error}/>

  return (
    <>
        <Navbar/>
        {empty ?
                  <Empty text="No hay productos en el carrito"/>
                :
                  <div>
                      {cart.map(item => <ItemCard key={item.id} item={item}/>)}
                      <p>{totalPrice}</p>
                      <button onClick={addOrder}>Finalizar order</button>
                  </div>  
        }
       
    </>
 
  )
}

export default ItemCartContainer