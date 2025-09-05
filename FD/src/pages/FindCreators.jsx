import React, { useState, useEffect } from 'react';
import Header from '../components/FindCreator/Header';
import SearchBar from '../components/FindCreator/SearchBar';
import FilterChip from '../components/FindCreator/FilterChip';
import CreatorList from '../components/FindCreator/CreatorList';
import Notification from '../components/FindCreator/Notification';
import { getInitials } from '../utils/utils';

const FILTER_OPTIONS = ['All', 'Fashion', 'Tech', 'Food', 'Fitness', 'Travel', 'Music'];

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
        const token = localStorage.getItem('token');

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
          imageUrl: creator.imageUrl || `https://placehold.co/160x160/8b5cf6/ffffff?text=${getInitials(creator.displayName)}`
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

    if (searchQuery.trim()) {
      filtered = filtered.filter(creator =>
        creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        creator.niche.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedFilter !== 'All') {
      filtered = filtered.filter(creator => creator.niche === selectedFilter);
    }

    setFilteredCreators(filtered);
  }, [creators, searchQuery, selectedFilter]);

   
  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <Notification message={notification} />

      <Header />

      <div className="p-4 space-y-6">
        
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search creators by name or niche..."
        />

        
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

        
        {!isLoading && (
          <div className="text-sm text-gray-500">
            {filteredCreators.length} creator{filteredCreators.length !== 1 ? 's' : ''} found
            {searchQuery && ` for "${searchQuery}"`}
          </div>
        )}

        
        <section>
          <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
            {selectedFilter === 'All' ? 'Featured Creators' : `${selectedFilter} Creators`}
          </h2>

          <CreatorList
            creators={filteredCreators} 
            isLoading={isLoading}
          />
        </section> 
      </div>
    </div>
  );
};

export default Index;
