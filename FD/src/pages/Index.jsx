import HeroSection from "../components/Home/HeroSection";
import FeaturesSection from "../components/Home/FeaturesSection";
import CTAsection from "../components/Home/CTAsection";
import LoggedInHeroSection from "../components/Home/LoggedInHeroSection";
import Footer from "../components/layouts/Footer";
import { useEffect , useState} from "react";
import Navbar from "../components/layouts/Navbar";
import LoginNavbar from "../components/layouts/LogedInNavbar";
const Index = () => { 
   const [isLoggedIn, setIsLoggedIn] = useState(false) ;
   const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLoggedIn(false) ;
      setAuthChecked(true) ;
      return ; 
  } 

    fetch("http://localhost:8085/user/validate-token", {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((res )=> {
      if (res.ok) { 
        
        setIsLoggedIn(true);
      } else {   
        console.log("Token validation failed, removing token. Status:", res.status);
        localStorage.removeItem("token");
        setIsLoggedIn(false);
      }
    })
    .catch((err) => { 
          
          localStorage.removeItem("token");
          setIsLoggedIn(false);
          
        })
         .finally(() => { 
          setAuthChecked(true) ;
        });
   
  
  }, []);
    
   
   if (!authChecked) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Loading...
      </div>
    );   
  }
    
  return(
   <>
   { isLoggedIn ?<Navbar/>:<LoginNavbar/>} 
  
    { isLoggedIn ?<LoggedInHeroSection/>:<HeroSection/>}
   <FeaturesSection/>
   <CTAsection/> 
   </>

  )
} 

export default Index ;