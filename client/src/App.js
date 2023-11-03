import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './Context/AuthContext';
import './App.css';
import Home from './Pages/Home';
import Footer from './Components/website/Footer';
import Navbar from './Components/website/Navbar';
import NotFound from './Components/website/NotFound';
// import Register from './Pages/Signup';
// import SignIn from './Pages/SignIn';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <AuthProvider> */}
          <Navbar />
          <div className='h-screen'>
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/signup' element={<Register />} />
            <Route path='/login' element={<SignIn />} /> */}
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
