
import React from 'react';

const LocationAndTechSection: React.FC = () => {
  return (
    <div className="space-y-6 relative">
      {/* Map/Location Card */}
      <div className="backdrop-blur-md bg-white/20 dark:bg-black/20 rounded-3xl p-6 shadow-xl border border-white/30 dark:border-white/10 hover:shadow-2xl transition-all duration-300 h-48">
        <div className="w-full h-full bg-gradient-to-br from-green-200 to-blue-200 dark:from-green-800 dark:to-blue-900 rounded-2xl flex items-center justify-center">
          <span className="text-gray-600 dark:text-gray-200 font-medium">Austin, TX</span>
        </div>
      </div>

      
    </div>
  );
};

export default LocationAndTechSection;
