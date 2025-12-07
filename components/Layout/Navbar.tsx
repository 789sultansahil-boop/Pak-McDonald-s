
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, MapPin, User, Menu as MenuIcon, LogIn } from 'lucide-react';
import { useStore } from '../../store/useStore';

export const Navbar: React.FC = () => {
  const { cart, toggleCart, user } = useStore();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? 'text-brand-gold' : 'text-white hover:text-brand-gold';

  // Don't show navbar on login page
  if (location.pathname === '/login') return null;

  return (
    <nav className="sticky top-0 z-40 bg-brand-dark/95 backdrop-blur-md text-white shadow-lg border-b border-white/5">
      <div className="max-w-[1800px] mx-auto px-6 md:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-brand-red rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-lg shadow-red-900/20">
               <span className="text-brand-gold font-black text-3xl">M</span>
            </div>
            <span className="font-bold text-2xl tracking-tight hidden sm:block">GADE</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className={`font-semibold text-lg transition-colors ${isActive('/')}`}>Home</Link>
            <Link to="/menu" className={`font-semibold text-lg transition-colors ${isActive('/menu')}`}>Order</Link>
            <Link to="/locations" className={`font-semibold text-lg transition-colors ${isActive('/locations')}`}>Locations</Link>
            <Link to="/careers" className={`font-semibold text-lg transition-colors ${isActive('/careers')}`}>Careers</Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-6">
            
            {/* Owner Profile Widget */}
            <div className="hidden lg:flex items-center space-x-3 bg-white/5 px-4 py-2 rounded-full border border-white/10 mr-2 hover:bg-white/10 transition-colors cursor-default backdrop-blur-sm">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150" 
                alt="Asad Ali" 
                className="w-10 h-10 rounded-full border-2 border-brand-gold object-cover"
              />
              <div className="flex flex-col leading-none">
                 <span className="text-[10px] text-brand-gold font-bold uppercase tracking-wider">Owner</span>
                 <span className="text-sm font-bold text-white">Asad Ali</span>
              </div>
            </div>

            <Link to="/locations" className="p-2.5 hover:bg-white/10 rounded-full transition-colors hidden sm:block">
               <MapPin className="w-6 h-6" />
            </Link>
            
            {user.isGuest ? (
              <Link 
                to="/login"
                className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-6 py-2.5 rounded-full transition-colors font-bold text-sm border border-white/5"
              >
                <LogIn className="w-4 h-4" />
                <span>Sign In</span>
              </Link>
            ) : (
              <button className="flex items-center space-x-2 hover:bg-white/10 px-4 py-2 rounded-full transition-colors">
                <User className="w-6 h-6" />
                <div className="flex flex-col items-start leading-none hidden sm:flex">
                  <span className="text-xs text-gray-400">Welcome</span>
                  <span className="text-sm font-bold">{user.name}</span>
                </div>
              </button>
            )}

            <button 
              onClick={toggleCart} 
              className="relative p-3 bg-brand-gold text-brand-dark rounded-full hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/20"
            >
              <ShoppingBag className="w-6 h-6" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-red text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-brand-dark">
                  {cart.length}
                </span>
              )}
            </button>
            
            <button className="md:hidden p-2 text-white">
               <MenuIcon className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
