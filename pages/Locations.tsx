
import React, { useState, useEffect } from 'react';
import { MOCK_STORES } from '../constants';
import { 
  MapPin, 
  Navigation, 
  Clock, 
  CheckCircle, 
  Car, 
  Armchair, 
  Smile, 
  Wifi, 
  Monitor, 
  Coffee 
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useStore } from '../store/useStore';

export const Locations: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { setStore, selectedStoreId } = useStore();

  const handleUseLocation = () => {
    setLoading(true);
    // Simulate API delay
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  const openDirections = (address: string) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
    window.open(url, '_blank');
  };

  const getFeatureConfig = (feature: string) => {
    const normalized = feature.toLowerCase();
    
    if (normalized.includes('drive-thru')) {
      return { icon: <Car className="w-3.5 h-3.5 mr-1.5" />, color: 'bg-blue-100 text-blue-700 border-blue-200' };
    }
    if (normalized.includes('indoor seating') || normalized.includes('dine-in')) {
      return { icon: <Armchair className="w-3.5 h-3.5 mr-1.5" />, color: 'bg-orange-100 text-orange-700 border-orange-200' };
    }
    if (normalized.includes('playplace')) {
      return { icon: <Smile className="w-3.5 h-3.5 mr-1.5" />, color: 'bg-yellow-100 text-yellow-700 border-yellow-200' };
    }
    if (normalized.includes('24/7')) {
      return { icon: <Clock className="w-3.5 h-3.5 mr-1.5" />, color: 'bg-purple-100 text-purple-700 border-purple-200' };
    }
    if (normalized.includes('wifi') || normalized.includes('wi-fi')) {
      return { icon: <Wifi className="w-3.5 h-3.5 mr-1.5" />, color: 'bg-indigo-100 text-indigo-700 border-indigo-200' };
    }
    if (normalized.includes('kiosk')) {
      return { icon: <Monitor className="w-3.5 h-3.5 mr-1.5" />, color: 'bg-gray-100 text-gray-700 border-gray-200' };
    }
    if (normalized.includes('breakfast')) {
      return { icon: <Coffee className="w-3.5 h-3.5 mr-1.5" />, color: 'bg-amber-100 text-amber-700 border-amber-200' };
    }

    // Default
    return { icon: <CheckCircle className="w-3.5 h-3.5 mr-1.5" />, color: 'bg-gray-100 text-gray-600 border-gray-200' };
  };

  return (
    <div className="bg-white min-h-screen pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8 h-[calc(100vh-140px)]">
          
          {/* List View */}
          <div className="w-full lg:w-1/3 flex flex-col">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-brand-dark mb-4">Find a GADE</h1>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Zip code or City" 
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-gold outline-none"
                />
                <Button onClick={handleUseLocation} disabled={loading}>
                   {loading ? <span className="animate-spin">...</span> : <Navigation className="w-5 h-5" />}
                </Button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 pr-2">
              {MOCK_STORES.map((store) => (
                <div 
                  key={store.id}
                  onClick={() => setStore(store.id)}
                  className={`p-5 rounded-xl border cursor-pointer transition-all ${
                    selectedStoreId === store.id 
                      ? 'border-brand-red bg-red-50 ring-1 ring-brand-red' 
                      : 'border-gray-200 hover:border-brand-gold'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-brand-dark">{store.name}</h3>
                    <span className="text-sm font-bold text-gray-500">{store.distance} mi</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{store.address}</p>
                  
                  <div className="flex items-center text-sm mb-3">
                    {store.isOpen ? (
                      <span className="text-green-600 font-bold flex items-center">
                        <Clock className="w-4 h-4 mr-1" /> Open Now
                      </span>
                    ) : (
                      <span className="text-red-600 font-bold flex items-center">
                        <Clock className="w-4 h-4 mr-1" /> Closed
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {store.features.map(f => {
                      const config = getFeatureConfig(f);
                      return (
                        <span 
                          key={f} 
                          className={`flex items-center text-xs font-semibold px-2.5 py-1.5 rounded-full border ${config.color}`}
                        >
                          {config.icon}
                          {f}
                        </span>
                      );
                    })}
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      variant={selectedStoreId === store.id ? "secondary" : "primary"} 
                      className="flex-1"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        setStore(store.id);
                      }}
                    >
                      Order Here
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        openDirections(store.address);
                      }}
                    >
                      <Navigation className="w-4 h-4 mr-1" /> Directions
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map View (Mock) */}
          <div className="hidden lg:block w-2/3 bg-gray-100 rounded-2xl overflow-hidden relative">
            <img 
              src="https://picsum.photos/1200/800?random=map" 
              alt="Map View" 
              className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
            />
            {MOCK_STORES.map((store, idx) => (
               <div 
                 key={store.id}
                 className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                 style={{ top: `${30 + (idx * 20)}%`, left: `${40 + (idx * 15)}%` }}
                 onClick={() => setStore(store.id)}
               >
                 <MapPin className={`w-10 h-10 ${selectedStoreId === store.id ? 'text-brand-red' : 'text-brand-dark'} drop-shadow-lg`} />
                 <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white px-3 py-1 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    <span className="font-bold text-sm">{store.name}</span>
                 </div>
               </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};
