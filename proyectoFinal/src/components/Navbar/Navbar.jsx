import React, { useContext } from 'react'
import { Link} from 'react-router-dom';
import CardContext from '../../context/cart/CartContext';

const Navbar = () => {
    const {totalCuantity} = useContext(CardContext)
  return (
            <nav>
                <Link to="/">Productos</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/cart">Carrito</Link>
                <p>{totalCuantity}</p>
            </nav>
  )
}

export default Navbar