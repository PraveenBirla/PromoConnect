import { useState, useEffect } from "react";
import CreatorProfile from "../components/Profile/CreatorProfile";
import BrandProfile from "../components/Profile/BrandProfile";
import Onboarding from "./Onboarding";

const ProfilePage = () => {
  const [userType, setUserType] = useState(null);   
  const [loading, setLoading] = useState(true);     
  const [error, setError] = useState(null);         

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch(`${import.meta.env.VITE_BACKEND_URL}/user/extract-user`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({})
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch userType");
        }
        return response.json();
      })
      .then(data => {
        setUserType(data.userType);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching userType:", error);
        setError("Failed to load profile");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  
  return (
    <>
      {userType === "brand" && <BrandProfile />}
      {userType === "creator" && <CreatorProfile />}
        {!userType && <Onboarding />}
    </>
  );
};

export default ProfilePage;
