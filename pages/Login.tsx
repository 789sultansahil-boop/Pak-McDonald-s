
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useStore } from '../store/useStore';
import { ArrowRight, Mail, Lock, Star } from 'lucide-react';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mock user name extraction
      const name = email.split('@')[0];
      const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
      
      login(formattedName, email);
      setIsLoading(false);
      navigate('/'); // Redirect to Home
    }, 1000);
  };

  const handleGuest = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Visuals & Mission */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-brand-dark flex-col">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-transparent mix-blend-multiply" />
        <img 
          src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop" 
          alt="Delicious Burger" 
          className="absolute inset-0 w-full h-full object-cover animate-in fade-in duration-1000"
        />
        
        <div className="relative z-20 flex flex-col h-full p-12 xl:p-20 text-white justify-between">
          <div>
            <div className="w-20 h-20 bg-brand-red rounded-3xl flex items-center justify-center transform rotate-12 mb-12 shadow-2xl">
               <span className="text-brand-gold font-black text-5xl">M</span>
            </div>
            
            <div className="max-w-2xl">
              <h1 className="text-6xl font-black mb-8 leading-tight drop-shadow-xl">
                Flavor <br/> Meets <br/> <span className="text-brand-gold">Future.</span>
              </h1>
              <p className="text-2xl text-gray-100 mb-10 font-light leading-relaxed drop-shadow-lg">
                Welcome to the Golden Arch Digital Experience (GADE). 
                Our mission is to serve happiness through seamless technology, 
                bringing your favorite flavors closer than ever before.
              </p>
              <div className="flex items-center space-x-4 text-base text-brand-gold font-bold uppercase tracking-widest mb-12 bg-black/30 backdrop-blur-md w-fit px-6 py-3 rounded-full border border-white/10">
                <Star className="w-5 h-5 fill-current" />
                <span>Premium Quality</span>
                <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mx-2" />
                <span>Digital First</span>
              </div>
            </div>
          </div>

          {/* Owner Section - Enhanced to be Large */}
          <div className="bg-brand-dark/80 backdrop-blur-2xl rounded-[2.5rem] p-10 border border-white/20 flex items-center gap-8 hover:bg-brand-dark/90 transition-all duration-300 animate-in slide-in-from-bottom-8 duration-700 shadow-2xl w-full max-w-2xl transform hover:scale-[1.02]">
             <div className="relative shrink-0 group">
               <div className="absolute inset-0 bg-brand-gold blur-2xl opacity-30 rounded-full group-hover:opacity-50 transition-opacity"></div>
               <img 
                 src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&h=600" 
                 alt="Asad Ali" 
                 className="relative w-40 h-40 rounded-full object-cover border-4 border-brand-gold shadow-2xl"
               />
               <div className="absolute bottom-2 right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-brand-dark z-10 shadow-lg"></div>
             </div>
             <div className="flex-1">
               <div className="flex items-center gap-3 mb-4">
                  <span className="bg-brand-gold text-brand-dark text-xs font-black px-3 py-1 rounded-md uppercase tracking-widest shadow-lg">Founder & CEO</span>
                  <span className="text-gray-300 text-sm font-semibold tracking-wide flex items-center"><Star className="w-3 h-3 mr-1 text-brand-gold fill-current"/> Visionary Leader</span>
               </div>
               <h3 className="text-white font-bold text-5xl leading-none mb-4 tracking-tight drop-shadow-md">Asad Ali</h3>
               <div className="relative">
                 <p className="text-gray-100 text-lg italic font-medium leading-relaxed pl-6 border-l-4 border-brand-red">
                   "We're not just serving burgers; we're engineering joy for the digital age."
                 </p>
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md bg-white p-12 rounded-[2rem] shadow-2xl border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-brand-dark mb-3">Welcome Back</h2>
            <p className="text-gray-500 text-lg">Please enter your details to sign in.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1 uppercase tracking-wide">Email Address</label>
              <div className="relative">
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/10 outline-none transition-all text-lg"
                  placeholder="you@example.com"
                />
                <Mail className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-gray-700 ml-1 uppercase tracking-wide">Password</label>
                <Link to="/forgot-password" className="text-sm font-bold text-brand-red hover:text-red-700 transition-colors">
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/10 outline-none transition-all text-lg"
                  placeholder="••••••••"
                />
                <Lock className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <Button 
              type="submit" 
              fullWidth 
              size="lg" 
              className="shadow-xl shadow-yellow-500/20 py-4 text-lg"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center">
                  <span className="w-5 h-5 border-2 border-brand-dark border-t-transparent rounded-full animate-spin mr-3" />
                  Signing in...
                </span>
              ) : (
                <span className="flex items-center">
                  Sign In <ArrowRight className="w-5 h-5 ml-2" />
                </span>
              )}
            </Button>
          </form>

          <div className="my-10 flex items-center">
            <div className="flex-1 border-t border-gray-200"></div>
            <span className="px-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Or continue with</span>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-10">
            <button className="flex items-center justify-center px-4 py-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-bold text-gray-700 text-lg">
               <span className="mr-3 text-2xl">G</span> Google
            </button>
            <button className="flex items-center justify-center px-4 py-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-bold text-gray-700 text-lg">
               <span className="mr-3 text-2xl"></span> Apple
            </button>
          </div>

          <div className="space-y-6 text-center">
            <button 
              onClick={handleGuest}
              className="text-gray-500 font-bold hover:text-brand-dark transition-colors block w-full text-sm uppercase tracking-wide"
            >
              Continue as Guest
            </button>
            
            <p className="text-gray-500 text-base pt-2">
              Don't have an account?{' '}
              <Link to="/signup" className="font-bold text-brand-dark hover:text-brand-red transition-colors underline decoration-2 underline-offset-4">
                Sign Up Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
