 import React, { useState, useEffect } from "react";
import { Edit, ExternalLink, User, Globe, Award, Calendar, Verified, TrendingUp } from "lucide-react";

const CreatorProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const platforms = [
    { id: "instagram", label: "Instagram", icon: "📷", color: "from-pink-500 to-rose-500" },
    { id: "youtube", label: "YouTube", icon: "📺", color: "from-red-500 to-red-600" },
    { id: "tiktok", label: "TikTok", icon: "🎵", color: "from-black to-gray-800" },
    { id: "twitter", label: "Twitter/X", icon: "🐦", color: "from-blue-400 to-blue-600" },
    { id: "linkedin", label: "LinkedIn", icon: "💼", color: "from-blue-600 to-blue-700" },
    { id: "facebook", label: "Facebook", icon: "👥", color: "from-blue-500 to-indigo-600" },
  ];

  useEffect(() => {
    const loadProfile = () => {
      const mockData = {
        displayName: "Alex Creator",
        bio: "Tech enthusiast and content creator passionate about sharing the latest in gaming and technology. I create engaging content across multiple platforms to help people discover amazing tech products.",
        niche: "Tech & Gaming",
        platforms: ["instagram", "youtube", "tiktok"],
        instagram: "https://instagram.com/alexcreator",
        youtube: "https://youtube.com/alexcreator",
        tiktok: "https://tiktok.com/@alexcreator",
        twitter: null,
        linkedin: null,
        facebook: null,
        engagement: "4.2%",
        joinedDate: "January 2023",
        location: "San Francisco, CA",
        totalViews: "2.1M",
        isVerified: true,
      };

      setTimeout(() => {
        setProfileData(mockData);
        setIsLoading(false);
      }, 1000);
    };

    loadProfile();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 p-8">
        <div className="animate-pulse space-y-6 max-w-6xl mx-auto">
          <div className="h-48 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-32 bg-gray-200 rounded-2xl"></div>
            <div className="h-32 bg-gray-200 rounded-2xl"></div>
            <div className="h-32 bg-gray-200 rounded-2xl"></div>
          </div>
          <div className="h-64 bg-gray-200 rounded-2xl"></div>
        </div>
      </div>
    );
  }

  if (!profileData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Profile Not Found</h1>
          <p className="text-gray-600">Unable to load creator profile.</p>
        </div>
      </div>
    );
  }

  const activePlatforms = platforms.filter(
    (platform) => profileData.platforms.includes(platform.id) && profileData[platform.id]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <div className="relative h-64 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-20 right-16 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-16 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container -mt-32 px-4 mx-auto relative z-10 max-w-6xl space-y-8">
        {/* Profile Card */}
        <div className="bg-white/90 p-8 rounded-3xl shadow-2xl backdrop-blur-xl flex flex-col md:flex-row items-center gap-8">
          <div className="relative group">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-indigo-500 flex items-center justify-center shadow-2xl">
              <User className="h-16 w-16 text-white" />
            </div>
            {profileData.isVerified && (
              <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white rounded-full p-2 shadow-lg">
                <Verified className="h-4 w-4 fill-current" />
              </div>
            )}
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {profileData.displayName}
            </h1>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 text-gray-600">
              <span className="flex items-center gap-2">
                <Globe className="h-4 w-4" /> Content Creator
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" /> Joined {profileData.joinedDate}
              </span>
            </div>
            <div className="mt-4 inline-block text-sm px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full">
              {profileData.niche}
            </div>
          </div>

          <button className="px-8 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 flex items-center gap-2">
            <Edit className="h-4 w-4" />
            Edit Profile
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Award className="h-6 w-6 text-white" />,
              label: "Engagement Rate",
              value: profileData.engagement,
              bg: "from-green-50 to-emerald-50",
              color: "from-green-500 to-emerald-500",
              textColor: "text-green-600",
            },
            {
              icon: <Globe className="h-6 w-6 text-white" />,
              label: "Active Platforms",
              value: activePlatforms.length,
              bg: "from-blue-50 to-indigo-50",
              color: "from-blue-500 to-indigo-500",
              textColor: "text-blue-600",
            },
            {
              icon: <TrendingUp className="h-6 w-6 text-white" />,
              label: "Total Views",
              value: profileData.totalViews,
              bg: "from-purple-50 to-pink-50",
              color: "from-purple-500 to-pink-500",
              textColor: "text-purple-600",
            },
          ].map((item, i) => (
            <div key={i} className={`rounded-2xl p-6 text-center bg-gradient-to-br ${item.bg} transition-all duration-300 shadow hover:shadow-xl`}>
              <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                {item.icon}
              </div>
              <div className="text-3xl font-bold text-gray-800">{item.value}</div>
              <div className={`text-sm font-medium ${item.textColor}`}>{item.label}</div>
            </div>
          ))}
        </div>

        {/* Bio Section */}
        <div className="p-6 bg-white/80 rounded-2xl shadow-xl backdrop-blur-xl">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">About Me</h2>
          <p className="text-gray-700 text-lg">{profileData.bio}</p>
        </div>

        {/* Social Media Section */}
        {activePlatforms.length > 0 && (
          <div className="p-6 bg-white/80 rounded-2xl shadow-xl backdrop-blur-xl">
            <h2 className="text-2xl font-bold mb-1 text-gray-800">Social Media</h2>
            <p className="text-gray-600 mb-6">Connect with me on these platforms</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activePlatforms.map((platform) => (
                <div key={platform.id} className="p-6 border rounded-2xl bg-white/50 hover:shadow-xl flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${platform.color} flex items-center justify-center`}>
                      <span className="text-white text-lg">{platform.icon}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">{platform.label}</div>
                      <div className="text-sm text-green-600">✓ Connected</div>
                    </div>
                  </div>
                  <a
                    href={profileData[platform.id]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 border rounded-xl flex items-center gap-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visit
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreatorProfile;
