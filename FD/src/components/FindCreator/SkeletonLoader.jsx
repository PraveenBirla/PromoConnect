import React from 'react';

const SkeletonLoader = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {[...Array(8)].map((_, i) => (
      <div key={i} className="bg-white rounded-lg p-4 space-y-3 animate-pulse">
        <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto" />
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto" />
          <div className="h-3 bg-gray-300 rounded w-1/2 mx-auto" />
        </div>
      </div>
    ))}
  </div>
);

export default SkeletonLoader;
