import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './Home/Home';
import Foodlist from './Foodlist/Foodlist';
import About from './About/About';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Contact from './Contact/Contact';
import Cart from './Cart/Cart';
import PlaceOrder from './PlaceOrder/PlaceOrder';
import SearchFood from './SearchFood/SearchFood';
import VerifyPage from './Verify/Verify';
import MyOrders from './MyOrders/MyOrders';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Foodlist />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/PlaceOrder" element={<PlaceOrder />} />
          <Route path="/SearchFood" element={<SearchFood />} />
          <Route path="/verify" element={<VerifyPage/>} />
          <Route path="/MyOrders" element={<MyOrders/>} />
        </Routes>

        <Footer />

       
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </BrowserRouter>
    </div>
  );
};

export default App;
