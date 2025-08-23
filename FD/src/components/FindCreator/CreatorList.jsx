import React from 'react';
import { Link } from 'react-router-dom';
import CreatorCard from './CreatorCard';

const CreatorList = ({ creators, isLoading }) => {
  if (isLoading) {
    
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="bg-white/60 p-4 rounded-lg shadow animate-pulse">
            <div className="w-full h-40 bg-slate-200 rounded-md mb-2"></div>
            <div className="h-4 bg-slate-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-slate-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    ); 
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {creators.map((creator) => (
        <Link to={`/creator/${creator.userId}`} key={creator.userId} className="group">
           <CreatorCard key={creator.id} creator={creator} />
        </Link>
      ))}
    </div>
  );
};

export default CreatorList;