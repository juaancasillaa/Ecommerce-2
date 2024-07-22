import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Notfound from './pages/Notfound';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Terms from './pages/Terms';

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
            <Route path='/Terms' element={<Terms />} />
            <Route path="*" element={<Notfound />} />
          </Routes> 
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;