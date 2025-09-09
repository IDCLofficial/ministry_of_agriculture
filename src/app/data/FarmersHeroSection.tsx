import React from 'react';

interface FarmersHeroSectionProps {
  totalFarmers: number;
  filteredFarmers: number;
}

export const FarmersHeroSection: React.FC<FarmersHeroSectionProps> = ({ 
  totalFarmers, 
  filteredFarmers 
}) => {
  return (
    <div className="bg-green-700 h-[85vh] text-white">
      <div className="max-w-7xl mx-auto py-12 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Imo State Farmers Portal
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-green-100">
            Connecting farmers, cooperatives, and agricultural stakeholders across Imo State
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="px-6 py-4 bg-green-800 rounded-lg">
              <p className="text-sm font-medium text-green-200">Total Farmers</p>
              <p className="text-2xl font-bold">{totalFarmers.toLocaleString()}</p>
            </div>
            <div className="px-6 py-4 bg-green-800 rounded-lg">
              <p className="text-sm font-medium text-green-200">Currently Showing</p>
              <p className="text-2xl font-bold">{filteredFarmers.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
