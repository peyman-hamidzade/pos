import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Faq from './pages/Faq';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='services/' element={ <Services /> } />
          <Route path='faq/' element={ <Faq /> } />
          <Route path='about/' element={ <About /> } />
          <Route path='contact/' element={ <Contact /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
