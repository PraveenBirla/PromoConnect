import React, { useState } from "react";

const CreatorDetailsForm = ({ onComplete, onSkip }) => {
  const [formData, setFormData] = useState({
    displayName: "",
    bio: "",
    niche: "",
    platforms: [],
    instagram: "",
    youtube: "",
    tiktok: "",
    twitter: "", 
    followers: "",
    rate: "",
    location: "",
    phone: ""
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Saving creator details:", formData);
    setTimeout(() => {
      setIsLoading(false);
      onComplete();
    }, 1500);
  };
 
  return (
    <div className="bg-white rounded-xl shadow-md border max-w-4xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold text-center">Creator Profile Setup</h2>
      <p className="text-center text-gray-500 mb-6">
        Tell us about yourself and your content creation experience
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
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
            <label className="block font-medium mb-1">Location</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="City, Country"
              className="w-full border rounded-md p-2"
            />
          </div>
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
            onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
            className="w-full border rounded-md p-2"
          >
            <option value="">Select your primary niche</option>
            {niches.map(niche => (
              <option key={niche} value={niche}>
                {niche}
              </option>
            ))}
          </select>
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
          <div>
            <label className="block font-medium mb-1">Instagram Handle</label>
            <input
              type="text"
              value={formData.instagram}
              onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
              placeholder="@username"
              className="w-full border rounded-md p-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">YouTube Channel</label>
            <input
              type="text"
              value={formData.youtube}
              onChange={(e) => setFormData({ ...formData, youtube: e.target.value })}
              placeholder="Channel name"
              className="w-full border rounded-md p-2"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Total Followers</label>
            <input
              type="text"
              value={formData.followers}
              onChange={(e) => setFormData({ ...formData, followers: e.target.value })}
              placeholder="e.g., 10k, 100k"
              className="w-full border rounded-md p-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Rate per Post</label>
            <input
              type="text"
              value={formData.rate}
              onChange={(e) => setFormData({ ...formData, rate: e.target.value })}
              placeholder="e.g., $100"
              className="w-full border rounded-md p-2"
            />
          </div>
        </div>

        <div>
          <label className="block font-medium mb-1">Phone Number</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+1 (555) 123-4567"
            className="w-full border rounded-md p-2"
          />
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
