import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Notfound from './pages/Notfound';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Products' element={<Products />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;