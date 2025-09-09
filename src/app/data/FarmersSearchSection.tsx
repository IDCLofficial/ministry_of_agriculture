import React from 'react';

interface FarmersSearchSectionProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCrop: string;
  setSelectedCrop: (crop: string) => void;
  selectedLGA: string;
  setSelectedLGA: (lga: string) => void;
  uniqueCrops: (string | undefined)[];
  uniqueLGAs: (string | undefined)[];
}

export const FarmersSearchSection: React.FC<FarmersSearchSectionProps> = ({
  searchTerm,
  setSearchTerm,
  selectedCrop,
  setSelectedCrop,
  selectedLGA,
  setSelectedLGA,
  uniqueCrops,
  uniqueLGAs,
}) => {
  return (
    <div className="mb-8 bg-white shadow rounded-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
            Search by Name or Location
          </label>
          <input
            type="text"
            id="search"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            placeholder="Search farmers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div>
          <label htmlFor="crop" className="block text-sm font-medium text-gray-700 mb-1">
            Filter by Crop
          </label>
          <select
            id="crop"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            value={selectedCrop}
            onChange={(e) => setSelectedCrop(e.target.value)}
          >
            <option value="">All Crops</option>
            {uniqueCrops.map((crop, index) => (
              <option key={index} value={crop}>
                {crop}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="lga" className="block text-sm font-medium text-gray-700 mb-1">
            Filter by LGA
          </label>
          <select
            id="lga"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            value={selectedLGA}
            onChange={(e) => setSelectedLGA(e.target.value)}
          >
            <option value="">All LGAs</option>
            {uniqueLGAs.map((lga, index) => (
              <option key={index} value={lga}>
                {lga}
              </option>
            ))}
          </select>
        </div>
        
        <div className="flex items-end">
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCrop('');
              setSelectedLGA('');
            }}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors duration-200"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
};
