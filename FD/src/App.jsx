import Index from './pages/Index'
import Login from './pages/Login' 
import Register from './pages/Register';
import Onboarding from './pages/Onboarding'
import './App.css' ;
import Footer from './components/layouts/Footer';
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function App() {  
   
     
  

   return( 
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<Index/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/register" element={<Register/>}/>
         <Route path="/onboarding" element={<Onboarding/>}/> 
      </Routes>
         <Footer/>
       
      </BrowserRouter>
     
   )
   
}

export default App
