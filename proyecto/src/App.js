import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemCard from './components/ItemCard/ItemCard';
import ItemOrdersContainer from './components/ItemOrdersContainer/ItemOrdersContainer';
import CardProvider from './context/cart/CartProvider';

function App() {
  return (
    <BrowserRouter>
            <CardProvider>
      <Routes>

          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/detail' element={<ItemDetailContainer/>}/>
          <Route path='/card' element={<ItemCard/>}/>
          <Route path='/Orders' element={<ItemOrdersContainer/>}/>
      </Routes>
      </CardProvider>
    </BrowserRouter>
  );
}

export default App;
