import React, { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CreatorDetailsForm from "../components/Onboarding/CreatorDetailForm";
import BrandDetailsForm from "../components/Onboarding/BrandDetailform";
const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState("");
   const [notification, setNotification] = useState({ message: '', type: '' });
  const navigate = useNavigate();
  

  useEffect(() => {
    let timer;
    if (notification.message) {
 
      timer = setTimeout(() => {
        setNotification({ message: '', type: '' });
      }, 3000);
    }
     
    return () => clearTimeout(timer);
  }, [notification]); 




  const handleUserTypeSelection = async () => {  

    const token = localStorage.getItem("token"); 
    
    const requestbody = {
       userType : userType   
    } ;
    if (userType && token) {
      try {
      const response =  await fetch(`http://localhost:8085/user/userType`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" ,
               "Authorization":`Bearer ${token}`
          },
          body: JSON.stringify(requestbody),
        });  

           const data = await response.json().catch(() => ({})); 


        if(!response.ok){
            console.error("Failed to update user type", data);
        setNotification({ message: "Failed to update user type.", type: "error" });
        return;
        } 

         setNotification({ message: "User type updated successfully!", type: "success" }) ;
        setStep(2);  
      } catch (error) {
        console.error("Network or server error:", error);
         setNotification({ message: "Something went wrong. Please try again.", type: "error" });
      }   
     
    } 
    else {
    setNotification({ message: "User type or user ID is missing.", type: "error" });
  }
  }; 

  const handleDetailsComplete = () => {
    if (userType === "creator") {
      navigate("/promoters");
    } else {
      navigate("/advertisers");
    } 
     
  }; 

  const handleSkip = () => {
    localStorage.setItem("onboardingSkipped", "true");
    localStorage.setItem("userType", userType);

    navigate("/") ;
  };

  return (
    <div className="min-h-screen   bg-gradient-to-r from-purple-200 to-blue-400 flex items-center justify-center py-20">
      <div> 
        {notification.message && (
  <div className={`text-center p-2 rounded mb-4 ${notification.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
    {notification.message}
  </div>
   )}

        {step === 1 && ( 
          
          <div className="bg-white rounded-xl shadow-md border max-w-4xl mx-auto p-6 space-y-6">
            <h2 className="text-2xl font-bold text-center mb-2">Welcome to PromoConnect!</h2>
            <p className="text-center text-gray-600 mb-6">
              Let's set up your profile. First, tell us what type of user you are.
            </p>

            <div className="space-y-4">
              <label className="block font-semibold">I am a:</label>
              <div className="space-y-3">
                <label className="flex items-start space-x-3 border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    name="userType"
                    value="creator"
                    checked={userType === "creator"}
                    onChange={(e) => setUserType(e.target.value)}
                  />
                  <div>
                    <span className="font-medium">Content Creator</span>
                    <p className="text-sm text-gray-600">
                      I create content and want to partner with brands for promotions.
                    </p>
                  </div>
                </label>
                <label className="flex items-start space-x-3 border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    name="userType"
                    value="brand"
                    checked={userType === "brand"}
                    onChange={(e) => setUserType(e.target.value)}
                  />
                  <div>
                    <span className="font-medium">Brand/Advertiser</span>
                    <p className="text-sm text-gray-600">
                      I represent a brand and want to find creators for marketing campaigns.
                    </p>
                  </div>
                </label>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <button
                onClick={handleUserTypeSelection}
                disabled={!userType}
                className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
              >
                Continue with Setup
              </button>
              <button
                onClick={handleSkip}
                className="w-full py-2 px-4 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50"
              >
                Skip for Now
              </button>
            </div>

            <p className="text-xs text-center text-gray-500 mt-4">
              Note: You'll need to complete your profile before you can start promoting or requesting promotions.
            </p>
          </div>
        )}

        {step === 2 && userType === "creator" && (
             <CreatorDetailsForm onComplete={handleDetailsComplete} onSkip={handleSkip}/>
        )}

        {step === 2 && userType === "brand" && (
           <BrandDetailsForm onComplete={handleDetailsComplete}  onSkip={handleSkip}/>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
