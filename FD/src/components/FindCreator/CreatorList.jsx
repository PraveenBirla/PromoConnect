import React from 'react';
import CreatorCard from './CreatorCard';
import SkeletonLoader from './SkeletonLoader';

const CreatorList = ({ creators, isLoading, onCreatorClick }) => {
  if (isLoading) return <SkeletonLoader />;

  if (creators.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-2xl">🔍</span>
        </div>
        <h3 className="text-lg font-semibold mb-2">No creators found</h3>
        <p className="text-gray-500 mb-4">Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {creators.map((creator) => (
        <CreatorCard key={creator.id} creator={creator} onClick={onCreatorClick} />
      ))}
    </div>
  );
};

export default CreatorList;
