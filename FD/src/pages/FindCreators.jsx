import React, { useState, useEffect } from 'react';

// SVG Icons
const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
    <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
  </svg>
);

const CaretDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
  </svg>
);

// Utility to get initials from display name
const getInitials = (name) => {
  if (!name) return 'NA';
  const parts = name.trim().split(" ");
  return parts.length >= 2 ? (parts[0][0] + parts[1][0]).toUpperCase() : parts[0][0].toUpperCase();
};

const App = () => {
  const [creators, setCreators] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
  const fetchCreators = async () => {
    try {
      const token = localStorage.getItem("token"); // or sessionStorage, or a prop

      const res = await fetch("http://localhost:8086/user/getAllCreators", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      const data = await res.json();

      const creatorsWithImages = data.map((creator) => ({
        ...creator,
        id: creator.userId,
        name: creator.displayName,
        imageUrl: `https://placehold.co/158x158/e9edf1/101518?text=${getInitials(creator.displayName)}`
      }));

      setCreators(creatorsWithImages);
    } catch (error) {
      console.error("Error fetching creators:", error);
    } finally {
      setIsLoading(false);
    }
  };

  fetchCreators();
}, []);

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden">
      <div>
        {/* Header */}
        <header className="flex items-center bg-gray-50 p-4 pb-2 justify-between">
          <div className="text-[#101518] flex size-12 shrink-0 items-center justify-center">
            <ArrowLeftIcon />
          </div>
          <h2 className="text-[#101518] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
            Find Creators
          </h2>
        </header>

        {/* Search Bar */}
        <div className="px-4 py-3">
          <label className="flex flex-col min-w-40 h-12 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
              <div className="text-[#5c748a] flex border-none bg-[#eaedf1] items-center justify-center pl-4 rounded-l-xl border-r-0">
                <SearchIcon />
              </div>
              <input
                placeholder="Search creators"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101518] focus:outline-0 focus:ring-0 border-none bg-[#eaedf1] focus:border-none h-full placeholder:text-[#5c748a] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
              />
            </div>
          </label>
        </div>

        {/* Filter Button */}
        <div className="flex gap-3 p-3 overflow-x-auto">
          <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#eaedf1] pl-4 pr-2">
            <p className="text-[#101518] text-sm font-medium leading-normal">Creator Type</p>
            <div className="text-[#101518]">
              <CaretDownIcon />
            </div>
          </button>
        </div>

        {/* Featured Creators Section */}
        <section>
          <h3 className="text-[#101518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Featured Creators</h3>
          {isLoading ? (
            <div className="text-center p-10">
              <p className="text-[#5c748a]">Loading creators...</p>
            </div>
          ) : (
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-4 p-4">
              {creators.map((creator) => (
                <div
                  key={creator.id}
                  className="flex flex-col gap-2 text-center p-4 bg-white rounded-xl shadow-sm transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                >
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                    style={{ backgroundImage: `url("${creator.imageUrl}")` }}
                  ></div>
                  <div>
                    <p className="text-[#101518] text-base font-medium leading-normal">{creator.name}</p>
                    <p className="text-[#5c748a] text-sm font-normal leading-normal">{creator.niche}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default App;
