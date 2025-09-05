import React , {useEffect , useState} from "react";
import Header from "../components/FindBrand/Header";
import SearchBar from "../components/FindCreator/SearchBar"; 
import Notification from "../components/FindCreator/Notification";

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
               const token = localStorage.getItem(token);

                const response = await fetch('http://localhost:8086/user/getAllBrands', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        }); 

           if(!response.Ok){
            throw new Error('Failed to fetch brands')
               }
            const data = await response.json();
            
             const  BrandsWithImage = data.map((brand) => ({
                      ...brand,
                      name: brand.companyName,
                      imageUrl: brand.imageUrl || `https://placehold.co/160x160/8b5cf6/ffffff?text=${getInitials(brand.companyName)}`
                    }));

              setBrands(BrandsWithImage);
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
            brand.name.toLowerCase().includes(searchQuery.toLowerCase())
                );
         } 

         if(selectedFilter !== 'All'){
            filtered = filtered.filter( brand => brand.industry === selectedFilter);

         } 

         setFilteredBrands(filtered);

      } , [searchQuery,brands,selectedFilter]) ; 

  return(    
     <div> 
      <Notification message={notification}/>
      <Header/> 
      
     </div>
     
  );
} 

export default FindBrands ;
 