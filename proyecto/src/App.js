import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardProvider from './context/cart/CartProvider';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemOrdersContainer from './components/ItemOrdersContainer/ItemOrdersContainer';
import ItemCartContainer from './components/ItemCartContainer/ItemCartContainer';

function App() {
  return (
    <BrowserRouter>
            <CardProvider>
      <Routes>

          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<ItemCartContainer/>}/>
          <Route path='/Orders' element={<ItemOrdersContainer/>}/>
      </Routes>
      </CardProvider>
    </BrowserRouter>
  );
}

export default App;
