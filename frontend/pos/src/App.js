import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Faq from './pages/Faq';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> } exact />
          <Route path='services/' element={ <Services /> } />
          <Route path='faq/' element={ <Faq /> } />
          <Route path='about/' element={ <About /> } />
          <Route path='contact/' element={ <Contact /> } />
          <Route path='shop/' element={ <Shop /> } />
          <Route path='/product/:slug' element={ <Product /> } />
          <Route path='cart/' element={ <Cart /> } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
