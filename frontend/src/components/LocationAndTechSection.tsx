import React from 'react';
// Import the map image
import tangierMap from '../assets/images/tangier.png'

const LocationAndTechSection: React.FC = () => {
  return (
    <div className="space-y-6 relative">
      {/* Map/Location Card */}
      <div className="backdrop-blur-md bg-white/20 dark:bg-black/20 rounded-3xl p-6 shadow-xl border border-white/30 dark:border-white/10 hover:shadow-2xl transition-all duration-300 h-48">
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          {/* Map image */}
          <img 
            src={tangierMap} 
            alt="Map of Tangier" 
            className="w-full h-full object-cover"
          />
          
          {/* Location label with overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <span className="text-white font-medium text-lg px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm">
              TANGIER, MA
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationAndTechSection;