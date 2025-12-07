
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ArrowRight, Star, Clock, MapPin } from 'lucide-react';

const TRENDING_ITEMS = [
  {
    id: 1,
    name: 'Spicy Chicken Deluxe',
    desc: 'Crispy, spicy, and perfectly seasoned.',
    price: '$5.89',
    image: 'https://images.unsplash.com/photo-1615557960916-5f4791effe9d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'Double Quarter Pounder',
    desc: 'Two 100% fresh beef patties, double the taste.',
    price: '$7.29',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'World Famous Fries',
    desc: 'Golden, crispy, and legendary.',
    price: '$3.99',
    image: 'https://images.unsplash.com/photo-1573080496987-a199f8cd4054?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    name: 'Caramel Frappé',
    desc: 'Sweet, cold, and refreshing.',
    price: '$3.79',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e569?auto=format&fit=crop&w=800&q=80'
  }
];

export const Home: React.FC = () => {
  return (
    <div className="bg-brand-light min-h-screen pb-20">
      
      {/* Hero Section - High Canvas */}
      <div className="relative bg-brand-dark text-white overflow-hidden h-[85vh]">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1586816001966-79b736744398?q=80&w=2070&auto=format&fit=crop" 
          alt="Hero Banner" 
          className="w-full h-full object-cover opacity-80 scale-105 animate-in fade-in duration-[2s]"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-[1800px] mx-auto px-8 w-full">
            <div className="max-w-2xl animate-in slide-in-from-left duration-1000">
              <span className="bg-brand-gold text-brand-dark font-black px-4 py-2 rounded-full text-sm uppercase tracking-widest mb-6 inline-block shadow-lg">
                Limited Time Offer
              </span>
              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight drop-shadow-2xl">
                The Big Arch <br/> <span className="text-brand-red">is Here.</span>
              </h1>
              <p className="text-2xl text-gray-100 mb-10 font-light leading-relaxed max-w-xl drop-shadow-lg">
                Experience our biggest, boldest flavor yet. Two 1/4 lb patties, specialized sauce, and premium toppings.
              </p>
              <div className="flex gap-6">
                <Link to="/menu">
                  <Button size="lg" className="shadow-2xl shadow-yellow-500/20 text-xl px-10 py-5">Order Now</Button>
                </Link>
                <Link to="/menu">
                   <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-xl px-10 py-5 backdrop-blur-sm">View Menu</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="max-w-[1800px] mx-auto px-8 -mt-24 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Re-Order Favorites', icon: Star, desc: 'Login to order your usual in one tap.' },
            { title: 'Find a Store', icon: MapPin, desc: 'Locate the nearest GADE restaurant.' },
            { title: 'Deals & Rewards', icon: Clock, desc: 'Earn points on every purchase.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl shadow-2xl hover:-translate-y-2 transition-transform duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-red-50 text-brand-red rounded-2xl flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-3">{item.title}</h3>
              <p className="text-gray-500 mb-6 text-lg">{item.desc}</p>
              <Link to="/menu" className="text-brand-red font-bold flex items-center text-lg hover:underline decoration-2 underline-offset-4">
                Get Started <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Section */}
      <div className="max-w-[1800px] mx-auto px-8 py-24">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-black text-brand-dark tracking-tight">Trending Now</h2>
            <p className="text-gray-500 mt-3 text-xl">Our most popular items this week.</p>
          </div>
          <Link to="/menu" className="hidden md:block text-brand-red font-bold text-lg hover:underline decoration-2 underline-offset-4">View Full Menu</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {TRENDING_ITEMS.map((item) => (
             <div key={item.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 flex flex-col">
               <div className="h-64 overflow-hidden relative">
                 <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10" />
                 <img src={item.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.name}/>
               </div>
               <div className="p-6 flex flex-col flex-1">
                  <h4 className="font-bold text-xl mb-2 text-brand-dark">{item.name}</h4>
                  <p className="text-gray-500 mb-4 font-medium">{item.desc}</p>
                  <div className="mt-auto flex justify-between items-center">
                    <span className="font-bold text-2xl text-brand-dark">{item.price}</span>
                    <div className="w-10 h-10 bg-brand-light rounded-full flex items-center justify-center text-brand-dark group-hover:bg-brand-red group-hover:text-white transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
               </div>
             </div>
           ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
            <Link to="/menu" className="text-brand-red font-bold text-lg hover:underline">View Full Menu</Link>
        </div>
      </div>

      {/* App Promo */}
      <div className="bg-brand-dark text-white py-24 overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-8 flex flex-col md:flex-row items-center gap-20">
            <div className="flex-1 space-y-8">
                <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">Download Now</span>
                <h2 className="text-4xl md:text-6xl font-black leading-tight">Get more with the <br/> GADE App</h2>
                <ul className="space-y-6 text-xl">
                    <li className="flex items-center"><Star className="text-brand-gold w-6 h-6 mr-4 flex-shrink-0"/> Mobile Order & Pay</li>
                    <li className="flex items-center"><Star className="text-brand-gold w-6 h-6 mr-4 flex-shrink-0"/> Exclusive Weekly Deals</li>
                    <li className="flex items-center"><Star className="text-brand-gold w-6 h-6 mr-4 flex-shrink-0"/> Earn Free Food</li>
                </ul>
                <div className="flex gap-4 pt-6">
                    <button className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors transform hover:scale-105">App Store</button>
                    <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors transform hover:scale-105">Google Play</button>
                </div>
            </div>
            <div className="flex-1 flex justify-center relative">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/20 rounded-full blur-3xl"></div>
                 {/* Abstract Phone Mockup */}
                 <div className="w-80 h-[600px] bg-black border-[12px] border-gray-800 rounded-[3.5rem] shadow-2xl overflow-hidden relative z-10 transform rotate-[-10deg] hover:rotate-0 transition-transform duration-500">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-800 rounded-b-2xl z-20"/>
                    <img src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=400&h=800&q=80" className="w-full h-full object-cover opacity-90" alt="App Screen"/>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};
