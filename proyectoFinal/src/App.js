import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardProvider from './context/cart/CartProvider';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemOrdersContainer from './components/ItemOrdersContainer/ItemOrdersContainer';
import ItemCartContainer from './components/ItemCartContainer/ItemCartContainer';

function App() {
  return (
    <>
       <div className='app'>
        <BrowserRouter>
          <CardProvider>
            <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
                <Route path='/cart' element={<ItemCartContainer/>}/>
                <Route path='/orders' element={<ItemOrdersContainer/>}/>
            </Routes>
          </CardProvider>
          </BrowserRouter>
        </div>
        <div className='desktop'>
          <p>La aplicacion solo funciona en Celulares</p>
        </div>
    </>
 
    
  );
}

export default App;
