import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { 
  User, 
  Verified, 
  Send,
  Star,
  Heart,
  MessageCircle,
  Users
} from "lucide-react";

const CreatorProfile = () => {
  const { userId } = useParams();
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [isFollowing, setIsFollowing] = useState(false);
  const [liked, setLiked] = useState(false);

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
        // Fallback data for demo
        setProfileData({
          displayName: "Alex Creator",
          bio: "Digital content creator passionate about tech, lifestyle, and creative storytelling. Building communities through authentic engagement and meaningful connections.",
          niche: "Tech & Lifestyle",
          joinedDate: "March 2023",
          isVerified: true,
          engagement: "94.5%",
          totalViews: "2.4M",
          location: "San Francisco, CA",
          followers: 125000,
          following: 892,
          posts: 347,
          rating: 4.8
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadProfile();
  }, [userId]);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    console.log(`Message sent to ${profileData?.displayName}: "${message}"`);
    setMessage("");
  };

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-lg">
          <div className="p-8 text-center">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
              <div className="h-32 bg-gray-200 rounded-xl"></div>
            </div>
          </div>
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
    <div className="min-h-screen bg-gray-50">
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
              {profileData.rating && (
                <div className="text-sm text-gray-600 mt-1">
                  <span className="flex items-center justify-center md:justify-start gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {profileData.rating} Rating
                  </span>
                </div>
              )}
              <div className="mt-3 inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                {profileData.niche}
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleFollow}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  isFollowing 
                    ? "bg-gray-200 text-gray-700 hover:bg-gray-300" 
                    : "bg-purple-600 text-white hover:bg-purple-700"
                }`}
              >
                <Users className="h-4 w-4 inline mr-1" />
                {isFollowing ? "Following" : "Follow"}
              </button>
              <button
                onClick={handleLike}
                className="px-4 py-2 rounded-lg font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
              >
                <Heart className={`h-4 w-4 inline mr-1 ${liked ? "fill-red-500 text-red-500" : ""}`} />
                {liked ? "Liked" : "Like"}
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">About Me</h2>
              <p className="text-gray-700 leading-relaxed">{profileData.bio}</p>
            </div>

            {/* Social Links (Static Section) */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Social Links</h2>
              <p className="text-gray-600">Links to creator’s social platforms will appear here.</p>
            </div>
          </div>

          {/* Message Section - Right Side */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-purple-600" />
                Send a Message
              </h2>
              <div className="space-y-4">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={`Message ${profileData.displayName}...`}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none h-32"
                />
                <button
                  onClick={handleSendMessage}
                  className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorProfile;
