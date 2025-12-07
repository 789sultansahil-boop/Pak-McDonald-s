import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './components/Layout/Navbar';
import { CartDrawer } from './components/Layout/CartDrawer';
import { GeminiAssistant } from './components/GeminiAssistant';
import { OrderTypeModal } from './components/Menu/OrderTypeModal';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Locations } from './pages/Locations';
import { Login } from './pages/Login';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<div className="p-20 text-center font-bold text-2xl">Sign Up Page Placeholder</div>} />
            <Route path="/forgot-password" element={<div className="p-20 text-center font-bold text-2xl">Forgot Password Page Placeholder</div>} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/about" element={<div className="p-20 text-center font-bold text-2xl">About Us Page Placeholder</div>} />
            <Route path="/careers" element={<div className="p-20 text-center font-bold text-2xl">Careers Page Placeholder</div>} />
          </Routes>
        </main>
        
        {/* Only show footer if not on login page - this logic is handled by router usually, 
            but for simplicity we check within components or just let it be. 
            For now, let's leave the footer as it is generally useful. 
        */}
        <Footer />

        <CartDrawer />
        <OrderTypeModal />
        <GeminiAssistant />
      </div>
    </Router>
  );
}

const Footer = () => {
  // Simple footer component extracted for clarity
  // We can also use useLocation() here if we want to hide it on login
  return (
    <footer className="bg-brand-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Pak McDonald's</h3>
            <p className="text-gray-400 text-sm">The best digital burger experience on the web.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">About Us</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><a href="#" className="hover:text-white">Leadership</a></li>
              <li><a href="#" className="hover:text-white">Sustainability</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Gift Cards</a></li>
              <li><a href="#" className="hover:text-white">Mobile App</a></li>
              <li><a href="#" className="hover:text-white">Delivery</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        © 2024 Pak McDonald's. All rights reserved.
      </div>
    </footer>
  );
}

export default App;