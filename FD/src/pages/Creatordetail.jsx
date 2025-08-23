import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Edit, ExternalLink, User, Globe, Award, Calendar, Verified, TrendingUp, Send } from "lucide-react";

const CreatorProfilePage = () => {
  const { userId } = useParams();  
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("about");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const token = localStorage.getItem("token"); 
        const response = await fetch(`http://localhost:8086/user/creator/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch creator profile");
        }

        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProfile();
  }, [userId]);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    alert(`Message sent to ${profileData.displayName}: "${message}"`);
    setMessage("");
  };

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
          <h1 className="text-xl font-bold text-gray-800 mb-2">Creator Not Found</h1>
          <p className="text-gray-600">Unable to load creator profile.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-purple-300 to-blue-200 h-48 w-full"></div>

      <div className="container max-w-4xl mx-auto px-4 -mt-20">
        {/* Profile Card */}
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
              <h1 className="text-2xl font-bold text-gray-800">{profileData.displayName}</h1>
              <div className="text-sm text-gray-600 mt-1">
                <span className="flex items-center justify-center md:justify-start gap-1">
                  <Calendar className="h-4 w-4" /> Joined {profileData.joinedDate}
                </span>
              </div>
              <div className="mt-3 inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                {profileData.niche}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b mb-6">
          <button
            onClick={() => setActiveTab("about")}
            className={`px-4 py-2 font-medium ${activeTab === "about" ? "text-purple-600 border-b-2 border-purple-600" : "text-gray-600"}`}
          >
            About
          </button>
          <button
            onClick={() => setActiveTab("social")}
            className={`px-4 py-2 font-medium ${activeTab === "social" ? "text-purple-600 border-b-2 border-purple-600" : "text-gray-600"}`}
          >
            Social
          </button>
          <button
            onClick={() => setActiveTab("stats")}
            className={`px-4 py-2 font-medium ${activeTab === "stats" ? "text-purple-600 border-b-2 border-purple-600" : "text-gray-600"}`}
          >
            Stats
          </button>
          <button
            onClick={() => setActiveTab("message")}
            className={`px-4 py-2 font-medium ${activeTab === "message" ? "text-purple-600 border-b-2 border-purple-600" : "text-gray-600"}`}
          >
            Message
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          {activeTab === "about" && (
            <div>
              <h2 className="text-xl font-bold mb-4 text-gray-800">About Me</h2>
              <p className="text-gray-700">{profileData.bio}</p>
            </div>
          )}

          {activeTab === "social" && (
            <div>
              <h2 className="text-xl font-bold mb-4 text-gray-800">Social Platforms</h2>
              <div className="space-y-4">
                {profileData.platformLinks?.map((platform, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center text-white text-lg">
                        {platform.platform[0]} {/* first letter as icon */}
                      </div>
                      <span className="font-medium">{platform.platform}</span>
                    </div>
                    <a
                      href={platform.url}
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

          {activeTab === "stats" && (
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
                  <div className="text-2xl font-bold">{profileData.platformLinks?.length || 0}</div>
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

          {activeTab === "message" && (
            <div>
              <h2 className="text-xl font-bold mb-4 text-gray-800">Send a Message</h2>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={`Message ${profileData.displayName}...`}
                  className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition flex items-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  Send
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatorProfilePage;
