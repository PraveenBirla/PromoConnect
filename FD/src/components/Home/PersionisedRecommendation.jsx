import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { Users, Building2, Star, MapPin, Eye, Heart, MessageCircle, TrendingUp, Camera, Video, Palette ,Music } from "lucide-react";
import { useState } from "react";

const mockCreators = [ {
    id: 1,
    name: "Sarah Johnson",
    type: "Fashion & Lifestyle",
    followers: "125K",
    engagement: "4.2%",
    location: "New York, NY",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    specialties: ["Fashion", "Beauty", "Lifestyle"],
    matchScore: 95,
    recentWork: "Calvin Klein Campaign",
    icon: Camera,
  },
  {
    id: 2, 
    name: "Mike Rodriguez",
    type: "Tech & Gaming",
    followers: "89K",
    engagement: "5.1%",
    location: "San Francisco, CA",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    specialties: ["Gaming", "Tech Reviews", "Tutorials"],
    matchScore: 88,
    recentWork: "Apple Product Launch",
    icon: Video,
  },
  {
    id: 3,
    name: "Emma Chen",
    type: "Art & Design",
    followers: "67K",
    engagement: "6.3%",
    location: "Los Angeles, CA",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    specialties: ["Digital Art", "UI/UX", "Branding"],
    matchScore: 92,
    recentWork: "Adobe Creative Suite",
    icon: Palette,
  },
  {
    id: 4,
    name: "Ayaan Mehta",
    type: "Music & Performance",
    followers: "101K",
    engagement: "4.9%",
    location: "Mumbai, India",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=face",
    specialties: ["Singing", "Live Shows", "Music Reviews"],
    matchScore: 90,
    recentWork: "Spotify Indie Campaign",
    icon: Music,
  },];
const mockBrands = [{
    id: 1,
    name: "Sarah Johnson",
    type: "Fashion & Lifestyle",
    followers: "125K",
    engagement: "4.2%",
    location: "New York, NY",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    specialties: ["Fashion", "Beauty", "Lifestyle"],
    matchScore: 95,
    recentWork: "Calvin Klein Campaign",
    icon: Camera,
  },
  {
    id: 2, 
    name: "Mike Rodriguez",
    type: "Tech & Gaming",
    followers: "89K",
    engagement: "5.1%",
    location: "San Francisco, CA",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    specialties: ["Gaming", "Tech Reviews", "Tutorials"],
    matchScore: 88,
    recentWork: "Apple Product Launch",
    icon: Video,
  },
  {
    id: 3,
    name: "Emma Chen",
    type: "Art & Design",
    followers: "67K",
    engagement: "6.3%",
    location: "Los Angeles, CA",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    specialties: ["Digital Art", "UI/UX", "Branding"],
    matchScore: 92,
    recentWork: "Adobe Creative Suite",
    icon: Palette,
  },
  {
    id: 4,
    name: "Ayaan Mehta",
    type: "Music & Performance",
    followers: "101K",
    engagement: "4.9%",
    location: "Mumbai, India",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=face",
    specialties: ["Singing", "Live Shows", "Music Reviews"],
    matchScore: 90,
    recentWork: "Spotify Indie Campaign",
    icon: Music,
  },];

const PersonalizedRecommendations = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.1);
  const [cardsRef, cardsVisible] = useScrollAnimation(0.1);
  const [userType] = useState("creator");

  const recommendations = userType === "creator" ? mockBrands : mockCreators;
  const title = userType === "creator" ? "Perfect Brand Matches" : "Recommended Creators";
  const subtitle = userType === "creator"
    ? "Brands that align with your content style and audience"
    : "Top creators that match your brand and campaign goals";

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container px-4 md:px-6">
        <div ref={titleRef} className={`flex flex-col items-center justify-center space-y-4 text-center transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200/50 px-4 py-2 text-sm shadow-lg">
              <TrendingUp className="h-4 w-4 text-blue-600" />
              <span className="font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Personalized for You
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {title}
            </h2>
            <p className="max-w-[800px] text-gray-600 md:text-xl lg:text-base xl:text-xl">
              {subtitle}
            </p>
          </div>
        </div>

        <div ref={cardsRef} className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendations.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className={`group border-2 hover:border-blue-300 transition-all duration-700 hover:scale-105 hover:shadow-2xl bg-white/90 backdrop-blur-sm p-6 rounded-2xl ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: cardsVisible ? `${index * 150}ms` : '0ms' }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <img src={userType === "creator" ? item.logo : item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-200" />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <Icon className="h-3 w-3 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">{item.name}</h3>
                        <p className="text-sm text-gray-500">{userType === "creator" ? item.industry : item.type}</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold bg-green-100 text-green-700 px-3 py-1 rounded-full">
                      {item.matchScore}% Match
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      {item.location}
                    </div>
                    {userType === "brand" ? (
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="h-4 w-4" />
                        {item.followers}
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-gray-600">
                        <Building2 className="h-4 w-4" />
                        {item.budget}
                      </div>
                    )}
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.specialties.map((tag, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full border border-gray-200">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 mt-4">
                    <p className="text-sm text-gray-500 mb-1">{userType === "creator" ? "Latest Campaign:" : "Recent Work:"}</p>
                    <p className="font-medium text-sm">{userType === "creator" ? item.campaignType : item.recentWork}</p>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:from-blue-600 hover:to-purple-600">
                      <MessageCircle className="h-4 w-4" /> Connect
                    </button>
                    <button className="px-3 py-2 border border-gray-200 rounded-lg hover:bg-blue-50">
                      <Eye className="h-4 w-4 text-gray-600" />
                    </button>
                    <button className="px-3 py-2 border border-gray-200 rounded-lg hover:bg-red-50">
                      <Heart className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-blue-200/50 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Want to See More Matches?
            </h3>
            <p className="text-gray-600 mb-6">
              Discover more {userType === "creator" ? "brand opportunities" : "talented creators"} tailored to your preferences and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                View All Recommendations
              </button>
              <button className="px-8 py-3 border-2 border-blue-300 text-blue-600 rounded-xl font-medium hover:bg-blue-50 transition-all duration-300 hover:scale-105">
                Refine Preferences
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PersonalizedRecommendations;
