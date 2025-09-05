import { Contact } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ArrowLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
    <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
  </svg>
) ; 

const Header = () => {
  const navigate = useNavigate() ;

  return(
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-10">
        <div className="flex items-center justify-between p-4"  >
      <button onClick={() => navigate('/')} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
        <ArrowLeftIcon/>
      </button> 
      <h1  className="text-lg font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
        Find Brands
      </h1> 
      <div className="w-10"/>
        </div >
      </header >
  );
} 

export default Header ;