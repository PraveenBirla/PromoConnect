import React from 'react';
import { getInitials, getNicheColor } from '../utils/helpers';
import CheckIcon from './Icons/CheckIcon';

const CreatorCard = ({ creator, onClick }) => (
  <div 
    className="group cursor-pointer bg-white hover:bg-indigo-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1"
    onClick={() => onClick(creator)}
  >
    <div className="p-4 text-center space-y-3">
      <div className="relative">
        <div
          className="w-20 h-20 mx-auto bg-center bg-no-repeat bg-cover rounded-full ring-2 ring-purple-200 group-hover:ring-purple-400 transition-all duration-300"
          style={{ 
            backgroundImage: `url("${creator.imageUrl || `https://placehold.co/80x80/8b5cf6/ffffff?text=${getInitials(creator.name)}`}")` 
          }}
        />
        {creator.verified && (
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
            <CheckIcon />
          </div>
        )}
      </div>
      <div className="space-y-1">
        <h3 className="font-semibold text-sm text-gray-900 line-clamp-1">{creator.name}</h3>
        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getNicheColor(creator.niche)}`}>
          {creator.niche}
        </span>
      </div>
      <button className="w-full py-2 px-4 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:from-purple-700 hover:to-purple-800">
        View Profile
      </button>
    </div>
  </div>
);

export default CreatorCard;
