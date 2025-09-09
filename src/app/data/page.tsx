'use client';

import { useState, useEffect } from 'react';
import { FarmersHeroSection } from './FarmersHeroSection';
import { FarmersStatsSection } from './FarmersStatsSection';
import { FarmersTableSection } from './FarmersTableSection';
import { FarmersSearchSection } from './FarmersSearchSection';
import Chatbot from '../components/Chatbot';

import { Farmer } from './types';

export default function FarmersPage() {
  const [data, setData] = useState<Farmer[]>([]);
  const [filteredData, setFilteredData] = useState<Farmer[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCrop, setSelectedCrop] = useState('');
  const [selectedLGA, setSelectedLGA] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/imo_farmers_website.json');
        const jsonData = await response.json();
        console.log(jsonData)
        
        // Filter out entries with null names and clean the data
        const cleanData = jsonData
          .filter((item: Farmer) => 
            item.NAME && 
            item.NAME !== 'TOTAL' && 
            item.NAME !== null && 
            item.NAME.trim() !== ''
          )
          .map((item: Farmer) => ({
            ...item,
            'SIZE OF FARM': typeof item['SIZE OF FARM'] === 'string' 
              ? parseFloat(item['SIZE OF FARM'].replace(/,/g, '')) || 0 
              : Number(item['SIZE OF FARM']) || 0,
            'PHONE NO': item['PHONE NO'] ? String(item['PHONE NO']).replace(/\D/g, '') : null,
            'S/N': Number(item['S/N']) || 0,
            NAME: item.NAME.trim(),
            GENDER: (item.GENDER || '').toString().toLowerCase(),
            'FARM LOCATION': (item['FARM LOCATION'] || '').toString().trim(),
            'KIND OF FARMING': (item['KIND OF FARMING'] || 'Unknown').toString().trim(),
            LGA: (item.LGA || '').toString().trim(),
            'CO-OPERATIVE NAME': item['CO-OPERATIVE NAME'] ? item['CO-OPERATIVE NAME'].toString().trim() : null
          }));
        
        setData(cleanData);
        setFilteredData(cleanData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let filtered = [...data];
    console.log(filtered)

    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.NAME.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item['FARM LOCATION'] && item['FARM LOCATION'].toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCrop) {
      filtered = filtered.filter(item =>
        item['KIND OF FARMING'] && 
        item['KIND OF FARMING'].toLowerCase().includes(selectedCrop.toLowerCase())
      );
    }

    if (selectedLGA) {
      filtered = filtered.filter(item =>
        item.LGA && 
        item.LGA.toLowerCase().includes(selectedLGA.toLowerCase())
      );
    }

    setFilteredData(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchTerm, selectedCrop, selectedLGA, data]);

  // Get unique crops for filter
  const uniqueCrops = [...new Set(data.map(item => item['KIND OF FARMING']))].filter(Boolean).sort();
  
  // Get unique LGAs for filter
  const uniqueLGAs = [...new Set(data.map(item => item.LGA))].filter(Boolean).sort();

  // Get current items for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl font-semibold">Loading farmers data...</div>
      </div>
    );
  }

  return (
    <>
      <Chatbot />
      <div className="min-h-screen bg-gray-50">
        <FarmersHeroSection 
          totalFarmers={data.length} 
          filteredFarmers={filteredData.length} 
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <FarmersSearchSection 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCrop={selectedCrop}
            setSelectedCrop={setSelectedCrop}
            selectedLGA={selectedLGA}
            setSelectedLGA={setSelectedLGA}
            uniqueCrops={uniqueCrops}
            uniqueLGAs={uniqueLGAs}
          />
          
          <FarmersStatsSection 
            data={filteredData}
            totalFarmers={filteredData.length}
          />
          
          <FarmersTableSection 
            currentItems={currentItems}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalPages={totalPages}
            paginate={paginate}
            totalFarmers={filteredData.length}
            />
        </div>
      </div>
    </>
  );
}
