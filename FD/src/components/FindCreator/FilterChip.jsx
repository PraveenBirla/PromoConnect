import React from 'react';

const FilterChip = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap ${
      isActive 
        ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg' 
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
    }`}
  >
    {label}
  </button>
);

export default FilterChip;
