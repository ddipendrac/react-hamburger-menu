import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Hamburger from './components/Hamburger';
import Header from './components/Header';

import About from './pages/About';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Electrics from './pages/Electrics';
import Glasses from './pages/Glasses';
import Shop from './pages/Shop';
import HomeAppliances from './pages/HomeAppliances';
import Men from './pages/Men';
import Services from './pages/Services';
import Shoes from './pages/Shoes';
import Women from './pages/Women';



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Hamburger /> 
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/electrics' element={<Electrics />} />
          <Route path='/glasses' element={<Glasses />} />
          <Route path='/homeappliances' element={<HomeAppliances />} />
          <Route path='/men' element={<Men />} />
          <Route path='/services' element={<Services />} />
          <Route path='/shoes' element={<Shoes />} />
          <Route path='/women' element={<Women />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
