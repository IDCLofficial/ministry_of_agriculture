import React from 'react';
import { Farmer } from './types';

interface FarmersStatsSectionProps {
  data: Farmer[];
  totalFarmers: number;
}

export const FarmersStatsSection: React.FC<FarmersStatsSectionProps> = ({ data, totalFarmers }) => {
  // Calculate total farm size - ensure we're working with numbers
  const totalFarmSize = data.reduce((sum, farmer) => {
    const farmSize = farmer['SIZE OF FARM'];
    console.log(farmSize)
    const numericSize = typeof farmSize === 'number' ? farmSize : parseFloat(farmSize) || 0;
    return sum + numericSize;
  }, 0);
  
  // Count farmers by gender
  const genderCount = data.reduce<Record<string, number>>((acc, farmer) => {
    const gender = (farmer.GENDER || 'unknown').toLowerCase().trim();
    acc[gender] = (acc[gender] || 0) + 1;
    return acc;
  }, {});
  
  // Count farmers by crop type
  const cropCount = data.reduce<Record<string, number>>((acc, farmer) => {
    const crop = (farmer['KIND OF FARMING'] || 'Unknown').trim();
    acc[crop] = (acc[crop] || 0) + 1;
    return acc;
  }, {});
  
  // Get top 3 crops with proper typing
  const topCrops = (Object.entries(cropCount) as [string, number][])
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  // Helper function to safely calculate percentage
  const getPercentage = (count: number, total: number): string => {
    if (total === 0) return '0.0';
    return ((count / total) * 100).toFixed(1);
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Farmers Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-gray-500 text-sm font-medium">Total Farmers</div>
          <div className="mt-1 text-3xl font-semibold text-gray-900">
            {totalFarmers.toLocaleString()}
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-gray-500 text-sm font-medium">Total Farm Size (Hectares)</div>
          <div className="mt-1 text-3xl font-semibold text-green-600">
            {totalFarmSize.toLocaleString(undefined, { 
              minimumFractionDigits: 2,
              maximumFractionDigits: 2 
            })}
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-gray-500 text-sm font-medium">Gender Distribution</div>
          <div className="mt-1 space-y-1">
            {(Object.entries(genderCount) as [string, number][]).map(([gender, count]) => (
              <div key={gender} className="flex justify-between">
                <span className="capitalize">{gender}:</span>
                <span className="font-medium">
                  {count} ({getPercentage(count, totalFarmers)}%)
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-gray-500 text-sm font-medium">Top Crops</div>
          <div className="mt-1 space-y-1">
            {topCrops.map(([crop, count]: [string, number]) => (
              <div key={crop} className="flex justify-between">
                <span className="truncate max-w-[150px]">{crop}:</span>
                <span className="font-medium whitespace-nowrap ml-2">
                  {count} ({getPercentage(count, totalFarmers)}%)
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
