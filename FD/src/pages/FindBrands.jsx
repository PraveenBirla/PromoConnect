import React , {useEffect , useState} from "react";
import Header from "../components/FindBrand/Header";
import SearchBar from "../components/FindCreator/SearchBar"; 
import Notification from "../components/FindCreator/Notification";
import FilterChip from "../components/FindCreator/FilterChip";
import BrandList from "../components/FindBrand/BrandList";
 
import { getInitials } from '../utils/utils';
const FILTER_OPTIONS =['All' , 'Technology' , 'Fashion' , 'Food & Beverage' , 'Finance' , 'Education' ,
   'Travel' , 'Retail' , 'Entertainment'
]
const FindBrands = () => { 
      const [brands,setBrands]  = useState([]);
      const [filteredBrands, setFilteredBrands] = useState([]);
      const [notification , setNotification] = useState(null); 
      const [searchQuery , setSearchQuery] = useState('');
      const [isLoading , setIsLoading] =  useState(true);
      const [selectedFilter , setSelectedFilter] = useState('All');
      const showNotification = (message) =>{
          setNotification(message) ;
          setTimeout(() => setNotification(null) , 3000);
      };
      
      useEffect( () => {
         const fetchBrands = async () => {
            try{
               setIsLoading(true);
               const token = localStorage.getItem('token');

                const response = await fetch('http://localhost:8086/user/getAllBrands', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        }); 

           if(!response.ok){
            throw new Error('Failed to fetch brands')
               }
            const data = await response.json();
            
             const  BrandsWithImage = data.map((brand) => ({
                      ...brand,
                      companyName: brand.companyName,
                      imageUrl: `https://placehold.co/160x160/8b5cf6/ffffff?text=${getInitials(brand.companyName)}`
                    }));
 
              setBrands(BrandsWithImage);
              setFilteredBrands(BrandsWithImage);
              showNotification(`Found ${BrandsWithImage.length} amazing brands`);     
         
            }
            catch(error){
                console.error(error);
                showNotification("Failed to load  brands. Please try again.")
            }
            finally{
               setIsLoading(false);
            }
         } 
         fetchBrands();
      }
        , []) ;

         
      useEffect( () => {
         let filtered = brands ;
          
         if(searchQuery.trim()){
               filtered = filtered.filter(brand => 
            brand.companyName.toLowerCase().includes(searchQuery.toLowerCase())
                );
         } 

         if(selectedFilter !== 'All'){
            filtered = filtered.filter( brand => brand.industry === selectedFilter);

         } 

         setFilteredBrands(filtered);

      } , [searchQuery,brands,selectedFilter]) ; 

        const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  return(    
     <div  className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50"> 
      <Notification message={notification}/>
      <Header/> 

      <div className="p-4 space-y-6">
       <SearchBar
          value={searchQuery} 
          onChange={setSearchQuery}
          placeholder="Search Brands by name or industry..."
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

        <section>
          <h2 className=" text:1px sm:text-xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
            {selectedFilter === 'All' ? 'Featured  Brands' : `${selectedFilter} Brands`}
          </h2> 
        <BrandList
        brands={filteredBrands}
        isLoading={isLoading}
        />
         
        </section>

        </div>
      </div>
     
     
  ); 
} 

export default FindBrands ;
 