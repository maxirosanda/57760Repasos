import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CardContext from '../context/cart/CartContext';
import Swal from 'sweetalert2'

const withItemHandling = (WrappedComponent) => {
  return ({ product }) => {
    const [cuantity, setCuantity] = useState(1);
    const [availableStock, setAvailableStock] = useState(0);
    const { cart, addCartItem } = useContext(CardContext);
    const navigate = useNavigate();

    useEffect(() => {
      const item = cart.find((item) => item.id === product.id);
      if (item) return setAvailableStock(product.stock - item.cuantity);
      setAvailableStock(product.stock);
    }, [cart, product.id, product.stock]);

    const addItemCard = () => {
      addCartItem({
        id: product.id,
        name: product.name,
        price: product.price,
        stock: product.stock,
        cuantity,
      });
      setCuantity(1);
      Swal.fire({
        title:"Producto agregado al carrito",
        toast:true,
        timer:2000,
        showConfirmButton:false,
        position:"top-end"
      })
      navigate("/cart")
    };

    return (
      <WrappedComponent
        product={product}
        cuantity={cuantity}
        setCuantity={setCuantity}
        availableStock={availableStock}
        addItemCard={addItemCard}
        navigate={navigate}
      />
    );
  };
};

export default withItemHandling;