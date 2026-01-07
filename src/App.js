import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Service from './pages/Service';
import Portfolio from './pages/Portfolio';
import Clients from './pages/Clients';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link>
        <Link to='/service'>Service</Link>
        <Link to='/portfolio'>Portfolio</Link>
        <Link to='/clients'>Clients</Link>

      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/clients' element={<Clients/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
