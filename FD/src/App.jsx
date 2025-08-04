import Index from './pages/Index'
import Login from './pages/Login' 
import Register from './pages/Register';
import Onboarding from './pages/Onboarding'
import HowItWorks from './pages/HowItWorks'
import Profile from './pages/Profile'
import FindCreators from './pages/FindCreators';
import './App.css' ;
// import CreatorDetailPage from './pages/Creatordetail';
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
function App() {  
   
     
  

   return( 
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<Index/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/register" element={<Register/>}/>
         <Route path="/onboarding" element={<Onboarding/>}/>  
         <Route path="/how-it-works" element={<HowItWorks/>}/>
         <Route path='/profile' element={<Profile/>} />
         <Route path='/findcreators' element={<FindCreators/>}/>
         {/* <Route path='/creatordetail' element={<CreatorDetailPage/>}/> */}
      </Routes>       
      </BrowserRouter>
     
   )
   
}

export default App
