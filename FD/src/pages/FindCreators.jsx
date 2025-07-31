import React, { useState, useEffect } from 'react';
 

const FILTER_OPTIONS = ['All', 'Fashion', 'Tech', 'Food', 'Fitness', 'Travel', 'Music'];

const getInitials = (name) => {
  if (!name) return 'NA';
  const parts = name.trim().split(" ");
  return parts.length >= 2 ? (parts[0][0] + parts[1][0]).toUpperCase() : parts[0][0].toUpperCase();
}; 

const getNicheColor = (niche) => {
  switch (niche) {
    case 'Fashion': return 'bg-pink-100 text-pink-800';
    case 'Tech': return 'bg-blue-100 text-blue-800';
    case 'Food': return 'bg-yellow-100 text-yellow-800';
    case 'Fitness': return 'bg-green-100 text-green-800';
    case 'Travel': return 'bg-teal-100 text-teal-800';
    case 'Music': return 'bg-purple-100 text-purple-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

 


const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
    <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
  </svg>
);

 

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256">
    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
  </svg>
);

 
const CreatorCard = ({ creator, onClick }) => {
  return (
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

        <button 
          className="w-full py-2 px-4 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:from-purple-700 hover:to-purple-800"
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

// SearchBar Component
const SearchBar = ({ value, onChange, placeholder = "Search creators..." }) => {
  return (
    <div className="relative">
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        <SearchIcon />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
      />
    </div>
  );
};

 
const FilterChip = ({ label, isActive = false, onClick }) => {
  return (
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
};

 
 

const Index = () => {
  const [creators, setCreators] = useState([]);
  const [filteredCreators, setFilteredCreators] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedCreator, setSelectedCreator] = useState(null);
  const [notification, setNotification] = useState(null);

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

 useEffect(() => {
  const fetchCreators = async () => {
    try {
      setIsLoading(true);

      // Replace this with your real token retrieval logic
      const token = localStorage.getItem('token'); // or from props/context

      const response = await fetch('http://localhost:8086/user/getAllCreators', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch creators');
      }

      const data = await response.json();  

     
      const creatorsWithImages = data.map((creator) => ({
        ...creator,
         name: creator.displayName,
        imageUrl: creator.imageUrl || `https://placehold.co/160x160/8b5cf6/ffffff?text=${getInitials(creator.name)}`
      }));

      setCreators(creatorsWithImages);
      showNotification(`Found ${creatorsWithImages.length} amazing creators`);
    } catch (error) {
      console.error("Error fetching creators:", error);
      showNotification("Failed to load creators. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  fetchCreators();
}, []);


  useEffect(() => {
    let filtered = creators;

    // Apply search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(creator =>
        creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        creator.niche.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedFilter !== 'All') {
      filtered = filtered.filter(creator => creator.niche === selectedFilter);
    }

    setFilteredCreators(filtered);
  }, [creators, searchQuery, selectedFilter]);

  const handleCreatorClick = (creator) => {
    setSelectedCreator(creator);
    showNotification(`Opening ${creator.name}'s profile`);
  };

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  if (selectedCreator) {
    return (
      <CreatorProfile 
        creator={selectedCreator} 
        onBack={() => setSelectedCreator(null)} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Notification */}
      {notification && (
        <div className="fixed top-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in">
          {notification}
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-10">
        <div className="flex items-center justify-between p-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ArrowLeftIcon />
          </button>
          <h1 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
            Find Creators
          </h1>
          <div className="w-10" />
        </div>
      </header>

      <div className="p-4 space-y-6">
        {/* Search Bar */}
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search creators by name or niche..."
        />

        {/* Filter Chips */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {FILTER_OPTIONS.map((filter) => (
            <FilterChip
              key={filter}
              label={filter}
              isActive={selectedFilter === filter}
              onClick={() => handleFilterClick(filter)}
            />
          ))}
        </div>

        {/* Results Count */}
        {!isLoading && (
          <div className="text-sm text-gray-500">
            {filteredCreators.length} creator{filteredCreators.length !== 1 ? 's' : ''} found
            {searchQuery && ` for "${searchQuery}"`}
          </div>
        )}

        {/* Featured Creators Section */}
        <section>
          <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
            {selectedFilter === 'All' ? 'Featured Creators' : `${selectedFilter} Creators`}
          </h2>
          
          {isLoading ? (
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
          ) : filteredCreators.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {filteredCreators.map((creator) => (
                <CreatorCard
                  key={creator.id}
                  creator={creator}
                  onClick={handleCreatorClick}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">No creators found</h3>
              <p className="text-gray-500 mb-4">
                Try adjusting your search or filters
              </p>
              <button 
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedFilter('All');
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Index; 