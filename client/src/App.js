import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import Footer from './Components/Footer';
// import Register from './Pages/Signup';
// import SignIn from './Pages/SignIn';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='h-screen'>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/signup' element={<Register />} /> */}
          {/* <Route path='/login' element={<SignIn />} /> */}
        </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
