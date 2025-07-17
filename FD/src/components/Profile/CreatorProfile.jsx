import React, { useState, useEffect } from "react";
import { Edit, ExternalLink, User, Globe, Award, Calendar, Verified, TrendingUp } from "lucide-react";

const CreatorProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('about');

  const platforms = [
    { id: "instagram", label: "Instagram", icon: "📷", color: "bg-gradient-to-r from-pink-500 to-rose-500" },
    { id: "youtube", label: "YouTube", icon: "📺", color: "bg-gradient-to-r from-red-500 to-red-600" },
    { id: "tiktok", label: "TikTok", icon: "🎵", color: "bg-gradient-to-r from-black to-gray-800" },
  ];

  useEffect(() => {
    const loadProfile = () => {
      const mockData = {
        displayName: "Alex Creator",
        bio: "Tech enthusiast creating content about gaming and technology. Sharing my passion across multiple platforms.",
        niche: "Tech & Gaming",
        platforms: ["instagram", "youtube", "tiktok"],
        instagram: "https://instagram.com/alexcreator",
        youtube: "https://youtube.com/alexcreator",
        tiktok: "https://tiktok.com/@alexcreator",
        engagement: "4.2%",
        joinedDate: "Jan 2023",
        location: "San Francisco",
        totalViews: "2.1M",
        isVerified: true,
      };

      setTimeout(() => {
        setProfileData(mockData);
        setIsLoading(false);
      }, 800);
    };

    loadProfile();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 flex justify-center items-center">
        <div className="animate-pulse bg-white p-8 rounded-xl shadow-md w-full max-w-md text-center">
          <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-6"></div>
          <div className="h-32 bg-gray-200 rounded-xl"></div>
        </div>
      </div>
    );
  }

  if (!profileData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-xl font-bold text-gray-800 mb-2">Profile Not Found</h1>
          <p className="text-gray-600">Unable to load creator profile.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-300 to-blue-200 h-48 w-full"></div>

      <div className="container max-w-4xl mx-auto px-4 -mt-20">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
                <User className="h-10 w-10 text-white" />
              </div>
              {profileData.isVerified && (
                <Verified className="absolute -bottom-2 -right-2 h-5 w-5 text-blue-500 bg-white rounded-full p-0.5" />
              )}
            </div> 

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl font-bold text-gray-800">
                {profileData.displayName}
              </h1>
              <div className="text-sm text-gray-600 mt-1">
                <span className="flex items-center justify-center md:justify-start gap-1">
                  <Calendar className="h-4 w-4" /> Joined {profileData.joinedDate}
                </span>
              </div>
              <div className="mt-3 inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                {profileData.niche}
              </div>
            </div>

            <button className="px-5 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-md transition flex items-center gap-2">
              <Edit className="h-4 w-4" />
              Edit
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b mb-6">
          <button
            onClick={() => setActiveTab('about')}
            className={`px-4 py-2 font-medium ${activeTab === 'about' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600'}`}
          >
            About
          </button>
          <button
            onClick={() => setActiveTab('social')}
            className={`px-4 py-2 font-medium ${activeTab === 'social' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600'}`}
          >
            Social
          </button>
          <button
            onClick={() => setActiveTab('stats')}
            className={`px-4 py-2 font-medium ${activeTab === 'stats' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600'}`}
          >
            Stats
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          {activeTab === 'about' && (
            <div>
              <h2 className="text-xl font-bold mb-4 text-gray-800">About Me</h2>
              <p className="text-gray-700">{profileData.bio}</p>
            </div>
          )}

          {activeTab === 'social' && (
            <div>
              <h2 className="text-xl font-bold mb-4 text-gray-800">Social Platforms</h2>
              <div className="space-y-4">
                {platforms.filter(p => profileData.platforms.includes(p.id)).map((platform) => (
                  <div key={platform.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg ${platform.color} flex items-center justify-center text-white`}>
                        {platform.icon}
                      </div>
                      <span className="font-medium">{platform.label}</span>
                    </div>
                    <a
                      href={profileData[platform.id]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm px-3 py-1.5 border rounded-lg flex items-center gap-1 hover:bg-purple-50"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Visit
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'stats' && (
            <div>
              <h2 className="text-xl font-bold mb-4 text-gray-800">Creator Stats</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold">{profileData.engagement}</div>
                  <div className="text-sm text-gray-600">Engagement</div>
                </div>
                <div className="p-4 border rounded-lg text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold">{profileData.platforms.length}</div>
                  <div className="text-sm text-gray-600">Platforms</div>
                </div>
                <div className="p-4 border rounded-lg text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold">{profileData.totalViews}</div>
                  <div className="text-sm text-gray-600">Total Views</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatorProfile;