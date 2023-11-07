import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './Context/AuthContext';
import './App.css';
import Home from './Pages/Home';
import Footer from './Components/website/Footer';
import Navbar from './Components/website/Navbar';
import NotFound from './Components/website/NotFound';
import Account from './Pages/Account';
import DisProducts from './Pages/Dis';
import Register from './Pages/Signup';
import ProductSection from './Pages/Detail';
import ContactUs from './Pages/ContactUs';
import OrderPage from './Pages/Order';
import About from './Pages/About';
import SignIn from './Pages/SignIn';
import Products from './Pages/Products';
import CategoryContent from './Pages/CategoryContent';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <AuthProvider> */}
          <Navbar />
          <div className='h-full'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<Register />} />
            <Route path='/login' element={<SignIn />} />
            <Route path="/account" element={<Account />} />
            <Route path="/discount/:dis" element={<DisProducts />} />
            <Route path="/product/:id" element={<ProductSection />} />
            <Route path="/orders" element={<OrderPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/category/:category" element={<CategoryContent />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </div>
          <Footer />
        {/* </AuthProvider> */}
      </Router>
    </div>
  );
}

export default App;
