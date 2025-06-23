import Index from './pages/Index'
import Login from './pages/Login' 
import Register from './pages/Register';
import Onboarding from './pages/Onboarding'
import CreatorProfile from './pages/CreatorProfile'
import HowItWorks from './pages/HowItWorks'
import './App.css' ;
import Footer from './components/layouts/Footer';
import { BrowserRouter, Routes ,Route } from 'react-router-dom'

function App() {  
   
     
  

   return( 
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<Index/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/register" element={<Register/>}/>
         <Route path="/onboarding" element={<Onboarding/>}/>  
         <Route path="/profile" element={<CreatorProfile/>}/>
         <Route path="/how-it-works" element={<HowItWorks/>}/>
      </Routes>
         <Footer/>
       
      </BrowserRouter>
     
   )
   
}

export default App
