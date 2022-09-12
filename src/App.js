
import './App.css'
import Titulo from './components/Titulo.js'
import NavBar from './components/Navbar.js'
import ItemListContainer  from './components/ItemListContainer/ItemListContainer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import  { CartProvider} from './Context/CartContext'
 
import Cart from './components/Cart/Cart';

const App = () => {
  
  
  return (
  
    <CartProvider>
  
    <div className='div'>
    <BrowserRouter>

    <Titulo/>
    <NavBar/>
    
    <Routes>
      <Route path="/" element={ <ItemListContainer/>} />
      <Route path="/productos/:categoryId" element={<ItemListContainer/>} />
      <Route path="/item/:itemId" element={<ItemDetailContainer/>} />  
      <Route path= "/cart" element= { <Cart/> } />
      <Route path="*" element={<Navigate to="/"  />}/>
    </Routes>

    
    </BrowserRouter> 
 
      </div>
      </CartProvider>
       
  );
}

export default App;
