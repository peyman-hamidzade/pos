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
import Register from './pages/Register';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Checkout from './pages/Checkout';
import TrackOrder from './pages/TrackOrder';
import PrivateRoute from './components/privateRoute/PrivateRoute';
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
          <Route path='register/' element={ <Register /> } />
          <Route path='login/' element={ <Login /> } />
          <Route path='forgot-password/' element={ <ForgotPassword /> } />
          <Route path='orders/' element={ <Checkout /> } />
          <Route path="track-order/" element={<PrivateRoute />}>
              <Route path="" element={<TrackOrder />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
