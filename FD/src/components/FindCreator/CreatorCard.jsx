import React from 'react';
import { useNavigate } from 'react-router-dom';

import { getInitials, getNicheColor } from '../../utils/utils';



const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256">
    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
  </svg>
);

const CreatorCard = ({ creator, onClick }) => { 
  const navigate = useNavigate();
  return( 
   
  <div 
    className="group cursor-pointer bg-white hover:bg-indigo-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 p-2 md:p-3 text-center space-y-2 md:space-y-3"
    onClick={() => onClick(creator)}
  >
    <div className="p-4 text-center space-y-3">
      <div className="relative">
        <div
          className="w-15 h-15 md:h-16 md:w-16 mx-auto bg-center bg-no-repeat bg-cover rounded-full ring-2 ring-purple-200 group-hover:ring-purple-400 transition-all duration-300"
          style={{ backgroundImage: `url("${creator.imageUrl || `https://placehold.co/80x80/8b5cf6/ffffff?text=${getInitials(creator.name)}`}")` }}
        />
        {creator.verified && (
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
            <CheckIcon />
          </div>
        )}
      </div>

      <div className="space-y-1">
        <h3 className="font-semibold text-sm md:text-base text-gray-900 line-clamp-1">{creator.name}</h3>
        <span className={`inline-block px-2 py-1 text-xs md:text-base font-medium rounded-full ${getNicheColor(creator.niche)}`}>
          {creator.niche}
        </span>
      </div>
      
      <button 
     onClick={(e) => {
    e.stopPropagation();  
    navigate('/creatordetail'); 
  }}
   className="w-full py-1.5 px-3 text-xs md:text-sm font-medium text-black rounded-lg border border-gray-700 rounded-lg opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 hover:from-purple-700 hover:to-purple-800"
    >
   Profile
   </button>
</div>
  </div>
);
};

export default CreatorCard;
