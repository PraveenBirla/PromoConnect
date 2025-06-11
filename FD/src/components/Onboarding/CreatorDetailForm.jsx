import React, { useState } from "react";

const CreatorDetailsForm = ({ onComplete, onSkip }) => {
  const [formData, setFormData] = useState({
    displayName: "",
    bio: "",
    niche: "",
    otherNiche: "",  
    platforms: [],
    instagram: "",
    youtube: "",
    tiktok: "",  
    twitter: "",
    linkedin: "",  
    facebook: ""
      
  });  

  const [isLoading, setIsLoading] = useState(false);

  const platforms = [
    { id: "instagram", label: "Instagram" },
    { id: "youtube", label: "YouTube" },
    { id: "tiktok", label: "TikTok" },
    { id: "twitter", label: "Twitter/X" },
    { id: "linkedin", label: "LinkedIn" },
    { id: "facebook", label: "Facebook" }
  ];

  const niches = [
    "Fashion & Beauty",
    "Tech & Gaming",
    "Food & Lifestyle",
    "Fitness & Health",
    "Travel",
    "Education",
    "Entertainment",
    "Business",
    "Other"  
  ];

  const handlePlatformChange = (platformId, checked) => {
    setFormData(prev => ({
      ...prev,
      platforms: checked
        ? [...prev.platforms, platformId]
        : prev.platforms.filter(p => p !== platformId)
    }));
  };

  const handleNicheChange = (e) => {
    const selectedNiche = e.target.value;
    setFormData(prev => ({
      ...prev,
      niche: selectedNiche,
      otherNiche: selectedNiche === "Other" ? prev.otherNiche : ""  
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsLoading(true);

     try{
    const dataToSend = { ...formData };
    if (formData.niche === "Other") {
      dataToSend.niche = formData.otherNiche;  
    }
    delete dataToSend.otherNiche;  
      console.log("sending data : " , formData )
      const token = localStorage.getItem("token") ;
    const response = await fetch("http://localhost:8086/user/creatorDetails" , {
       method:"POST",
       headers:{
        "content-type":"application/json",
         Authorization: `Bearer ${token}`
       } 
      ,  body: JSON.stringify(formData)
    })
     
    if(response.ok){
       onComplete() ;
    } 
    else{
      console.error("Submission failed:", await response.text())
    }
}
catch(error){
    console.error("Error submitting creator details:", error)
}
finally{
  setIsLoading(false);
}
     
  };

  return (
    <div className="bg-white rounded-xl shadow-md border max-w-4xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold text-center">Creator Profile Setup</h2>
      <p className="text-center text-gray-500 mb-6">
        Tell us about yourself and your content creation experience
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-medium mb-1">Display Name *</label>
          <input
            type="text"
            required
            value={formData.displayName}
            onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
            placeholder="Your creator name"
            className="w-full border rounded-md p-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Bio *</label>
          <textarea
            required
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            placeholder="Tell us about yourself and your content..."
            className="w-full border rounded-md p-2 min-h-[100px]"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Content Niche *</label>
          <select
            required
            value={formData.niche}
            onChange={handleNicheChange} 
            className="w-full border rounded-md p-2"
          >
            <option value="">Select your primary niche</option>
            {niches.map(niche => (
              <option key={niche} value={niche}>
                {niche}
              </option>
            ))}
          </select>
          {formData.niche === "Other" && (  
            <input
              type="text"
              required
              value={formData.otherNiche}
              onChange={(e) => setFormData({ ...formData, otherNiche: e.target.value })}
              placeholder="Please specify your niche"
              className="w-full border rounded-md p-2 mt-2"
            />
          )}
        </div>

        <div>
          <label className="block font-medium mb-2">Platforms *</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {platforms.map(platform => (
              <label key={platform.id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.platforms.includes(platform.id)}
                  onChange={(e) =>
                    handlePlatformChange(platform.id, e.target.checked)
                  }
                />
                <span>{platform.label}</span>
              </label>
            ))}
          </div>
        </div>

         
        <div className="grid md:grid-cols-2 gap-4">
          {formData.platforms.includes("instagram") && (
            <div>
              <label className="block font-medium mb-1">Instagram Profile Link</label>
              <input
                type="url"  
                value={formData.instagram}
                onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                placeholder="e.g., https://instagram.com/yourprofile"
                className="w-full border rounded-md p-2"
              />
            </div>
          )}
          {formData.platforms.includes("youtube") && (
            <div>
              <label className="block font-medium mb-1">YouTube Channel Link</label>
              <input
                type="url"
                value={formData.youtube}
                onChange={(e) => setFormData({ ...formData, youtube: e.target.value })}
                placeholder="e.g., https://youtube.com/yourchannel"
                className="w-full border rounded-md p-2"
              />
            </div>
          )}
          {formData.platforms.includes("tiktok") && (
            <div>
              <label className="block font-medium mb-1">TikTok Profile Link</label>
              <input
                type="url"
                value={formData.tiktok}
                onChange={(e) => setFormData({ ...formData, tiktok: e.target.value })}
                placeholder="e.g., https://tiktok.com/@yourprofile"
                className="w-full border rounded-md p-2"
              />
            </div>
          )}
          {formData.platforms.includes("twitter") && (
            <div>
              <label className="block font-medium mb-1">Twitter/X Profile Link</label>
              <input
                type="url"
                value={formData.twitter}
                onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
                placeholder="e.g., https://twitter.com/yourprofile"
                className="w-full border rounded-md p-2"
              />
            </div>
          )}
          {formData.platforms.includes("linkedin") && (
            <div>
              <label className="block font-medium mb-1">LinkedIn Profile Link</label>
              <input
                type="url"
                value={formData.linkedin}
                onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                placeholder="e.g., https://linkedin.com/in/yourprofile"
                className="w-full border rounded-md p-2"
              />
            </div>
          )}
          {formData.platforms.includes("facebook") && (
            <div>
              <label className="block font-medium mb-1">Facebook Profile Link</label>
              <input
                type="url"
                value={formData.facebook}
                onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}
                placeholder="e.g., https://facebook.com/yourprofile"
                className="w-full border rounded-md p-2"
              />
            </div>
          )}
        </div>
 

        <div className="flex flex-col gap-3 mt-4">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 disabled:opacity-60"
          >
            {isLoading ? "Setting up your profile..." : "Complete Profile Setup"}
          </button>
          <button
            type="button"
            onClick={onSkip}
            className="w-full border border-gray-300 p-2 rounded-md hover:bg-gray-100"
          >
            Skip for Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatorDetailsForm;