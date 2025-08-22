 
import React, { useState, useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';  
const CreatorProfilePage = () => {
  const { userId } = useParams();  
  const [creator, setCreator] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCreatorDetails = async () => {
      try {
        setIsLoading(true);
        const token = localStorage.getItem('token');
       
        const response = await fetch(`http://localhost:8086/user/creator/${userId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error('Creator not found');
        }
        const data = await response.json();
        setCreator(data);
      } catch (error) {
        console.error("Failed to fetch creator details", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCreatorDetails();
  }, [userId]);  
  if (isLoading) {
    return <div>Loading Profile...</div>;
  }

  if (!creator) {
    return <div>Creator not found.</div>;
  }

  return (
    <div className="p-8">
      <RouterLink to="/" className="text-purple-600 mb-4 inline-block">&larr; Back to all creators</RouterLink>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold">{creator.displayName}</h1>
        <p className="text-lg text-gray-600">{creator.niche}</p>
        <p className="mt-4">{creator.bio}</p>
      </div>
    </div>
  );
};

export default CreatorProfilePage;