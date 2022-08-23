
import './App.css'
import Titulo from './components/Titulo.js'
import NavBar from './components/Navbar.js'
import ItemListContainer  from './components/ItemListContainer/ItemListContainer.js';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div className='div'>
    <Titulo/>
    <NavBar/>
    <ItemListContainer usuario="Lucia"/>
      
      </div>
  );
}

export default App;
