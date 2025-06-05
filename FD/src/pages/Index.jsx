import HeroSection from "../components/Home/HeroSection";
import FeaturesSection from "../components/Home/FeaturesSection";
import CTAsection from "../components/Home/CTAsection";
import LoggedInHeroSection from "../components/Home/LoggedInHeroSection";
import Footer from "../components/layouts/Footer";
import { useEffect , useState} from "react";

const Index = () => { 
   const [isLoggedIn, setIsLoggedIn] = useState(false) ;
   

  useEffect(() => {
    const token = localStorage.getItem("token");
  if (token) {
    
    fetch("/api/validate-token", {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => {
      if (res.ok) {
        
        setIsLoggedIn(true);
      } else {
         
        localStorage.removeItem("token");
        setIsLoggedIn(false);
      }
    });
  } else {
    setIsLoggedIn(false);
  }
  }, []);
   
   
  
    
  return(
   <>
    { isLoggedIn ?<LoggedInHeroSection/>:<HeroSection/>}
   <FeaturesSection/>
   <CTAsection/> 
   </>

  )
} 

export default Index ;