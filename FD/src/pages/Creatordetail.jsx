import React, { useState } from 'react';

 
const MailIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
);

const ChevronRightIcon = () => (
    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
);


 

const ProfileHeader = ({ creator }) => (
    <header className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
                <img 
                    src={creator.profilePictureUrl} 
                    alt={`${creator.name} Profile Picture`} 
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-purple-200 shadow-md"
                />
            </div>
            
            <div className="text-center md:text-left flex-grow">
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">{creator.name}</h1>
                <div className="mt-2 flex items-center justify-center md:justify-start gap-2">
                    <span className="inline-block bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full">
                        {creator.niche}
                    </span>
                </div>
            </div>

            <div className="flex-shrink-0 mt-4 md:mt-0">
                <button className="w-full bg-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-purple-700 transition-all duration-300 flex items-center gap-2">
                    <MailIcon />
                    Message
                </button>
            </div>
        </div>
    </header>
);

const BioSection = ({ bio }) => (
    <div className="animate-fade-in">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">About Me</h2>
        <p className="text-slate-600 leading-relaxed">
            {bio}
        </p> 
    </div>
);

const SocialLink = ({ platform }) => (
    <a href={platform.url} className="flex items-center p-3 rounded-lg hover:bg-slate-100 transition-colors duration-200">
        <img src={platform.iconUrl} className="w-8 h-8 rounded-md" alt={`${platform.name} Logo`} />
        <div className="ml-4 flex-grow">
            <p className="font-semibold">{platform.name}</p>
            <p className="text-sm text-slate-500">{platform.followers}</p>
        </div>
        <ChevronRightIcon />
    </a>
);

const SocialPlatformsSection = ({ platforms }) => (
    <div className="animate-fade-in">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">My Platforms</h3>
        <div className="space-y-4">
            {platforms.map(p => <SocialLink key={p.name} platform={p} />)}
        </div>
    </div>
);

const KeyMetricsSection = ({ metrics }) => (
    <div className="animate-fade-in">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Key Metrics</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {metrics.map(metric => (
                <div key={metric.label} className="bg-purple-100/50 p-4 rounded-lg text-center">
                    <p className="font-medium text-slate-600 text-sm">{metric.label}</p>
                    <p className="font-bold text-2xl text-purple-600 mt-1">{metric.value}</p>
                </div>
            ))}
        </div>
    </div>
);

const TabButton = ({ label, activeTab, setActiveTab }) => {
    const isActive = activeTab === label;
    return (
        <button 
            onClick={() => setActiveTab(label)}
            className={`px-4 py-2 font-semibold rounded-md text-sm transition-colors duration-200 ${
                isActive 
                ? 'bg-purple-600 text-white' 
                : 'bg-white text-slate-600 hover:bg-purple-100'
            }`}
        >
            {label.charAt(0).toUpperCase() + label.slice(1)}
        </button>
    );
};


 

export default function App() {
    const [activeTab, setActiveTab] = useState('about');

    
    const creatorData = {
        name: "Alexina Jordan",
        niche: "Lifestyle & Wellness",
        profilePictureUrl: "https://placehold.co/128x128/9333ea/ffffff?text=AJ",
        bio: "Hi, I'm Alexina! A certified yoga instructor and wellness advocate passionate about helping people find balance in their busy lives. My content focuses on mindful living, healthy recipes, and sustainable lifestyle choices. I believe in authentic storytelling and creating content that not only looks beautiful but also inspires and empowers my community.",
        socials: [
            { name: "Instagram", followers: "1.2M Followers", url: "#", iconUrl: "https://placehold.co/32x32/E1306C/ffffff?text=I" },
            { name: "YouTube", followers: "250K Subscribers", url: "#", iconUrl: "https://placehold.co/32x32/FF0000/ffffff?text=Y" },
            { name: "TikTok", followers: "780K Followers", url: "#", iconUrl: "https://placehold.co/32x32/000000/ffffff?text=T" }
        ],
        metrics: [
            { label: "Avg. Engagement", value: "4.5%" },
            { label: "Audience (Female)", value: "72%" },
            { label: "Audience (18-34)", value: "65%" } 
        ]
    };

    return (
        <div className="bg-purple-50 text-slate-800 font-sans min-h-screen">
            <div className="container mx-auto max-w-5xl p-4 sm:p-6 md:p-8">
                <ProfileHeader creator={creatorData} />
                
                <main className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                     
                    <div className="flex space-x-2 border-b border-slate-200 pb-4 mb-6">
                        <TabButton label="about" activeTab={activeTab} setActiveTab={setActiveTab} />
                        <TabButton label="platforms" activeTab={activeTab} setActiveTab={setActiveTab} />
                        <TabButton label="analytics" activeTab={activeTab} setActiveTab={setActiveTab} />
                    </div>

                    {/* Tab Content */}
                    <div>
                        {activeTab === 'about' && <BioSection bio={creatorData.bio} />}
                        {activeTab === 'platforms' && <SocialPlatformsSection platforms={creatorData.socials} />}
                        {activeTab === 'analytics' && <KeyMetricsSection metrics={creatorData.metrics} />}
                    </div>
                </main>
            </div>
        </div>
    );
} 

 
 
