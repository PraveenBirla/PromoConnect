import { useState } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import {
  Users,
  Building2,
  Search,
  MessageCircle,
  DollarSign,
  Handshake,
  UserCheck,
  BarChart,
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";

const creatorSteps = [
  {
    number: "01",
    title: "Create Profile",
    description: "Build your creator profile and showcase what makes you unique.",
    icon: UserCheck,
    color: "from-purple-500 to-blue-500",
    benefits: ["Customizable portfolio", "Showcase your best work", "Highlight your niche"]
  },
  {
    number: "02",
    title: "Set Your Terms",
    description: "Define your rates and partnership requirements.",
    icon: DollarSign,
    color: "from-blue-500 to-indigo-500",
    benefits: ["Set your pricing", "Define collaboration terms", "Choose your brand preferences"]
  },
  {
    number: "03",
    title: "Get Discovered",
    description: "Brands will find you and reach out with opportunities.",
    icon: Search,
    color: "from-indigo-500 to-purple-500",
    benefits: ["Advanced discovery", "Algorithmic matching", "Brand search filters"]
  },
  {
    number: "04",
    title: "Collaborate & Earn",
    description: "Work together on campaigns and grow your revenue.",
    icon: Handshake,
    color: "from-purple-500 to-pink-500",
    benefits: ["Secure payments", "Project management", "Performance analytics"]
  },
];

const brandSteps = [
  {
    number: "01",
    title: "Create Brand Profile",
    description: "Set up your brand profile with campaign goals and details.",
    icon: Building2,
    color: "from-green-500 to-blue-500",
    benefits: ["Company showcase", "Campaign objectives", "Target audience"]
  },
  {
    number: "02",
    title: "Find Creators",
    description: "Browse creators and filter by niche, audience, and pricing.",
    icon: Users,
    color: "from-blue-500 to-purple-500",
    benefits: ["Advanced filters", "Audience insights", "Performance metrics"]
  },
  {
    number: "03",
    title: "Send Requests",
    description: "Contact creators and outline your campaign needs.",
    icon: MessageCircle,
    color: "from-purple-500 to-indigo-500",
    benefits: ["Template messages", "Collaboration terms", "Campaign briefs"]
  },
  {
    number: "04",
    title: "Track & Optimize",
    description: "Monitor campaign performance and optimize results.",
    icon: BarChart,
    color: "from-indigo-500 to-green-500",
    benefits: ["Real-time analytics", "ROI tracking", "Performance reports"]
  },
];

const HowItWorksSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.1);
  const [stepsRef, stepsVisible] = useScrollAnimation(0.1);
  const [activeTab, setActiveTab] = useState("creators");
  const [expandedStep, setExpandedStep] = useState(null);

  const currentSteps = activeTab === "creators" ? creatorSteps : brandSteps;

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div
          ref={titleRef}
          className={`flex flex-col items-center justify-center space-y-4 text-center transition-all duration-1000 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our platform makes connecting creators and brands simple, effective, and rewarding for everyone involved.
          </p>
        </div>

        {/* Tab Switcher */}
        <div
          className={`flex justify-center mt-12 transition-all duration-1000 delay-200 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex bg-white/70 backdrop-blur-sm rounded-2xl p-2 border-2 border-purple-200/50 shadow-lg">
            <button
              onClick={() => {
                setActiveTab("creators");
                setExpandedStep(null);
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "creators"
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg scale-105"
                  : "text-gray-600 hover:text-purple-600 hover:bg-white/50"
              }`}
            >
              <Users className="h-5 w-5" />
              For Creators
            </button>
            <button
              onClick={() => {
                setActiveTab("brands");
                setExpandedStep(null);
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "brands"
                  ? "bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg scale-105"
                  : "text-gray-600 hover:text-green-600 hover:bg-white/50"
              }`}
            >
              <Building2 className="h-5 w-5" />
              For Brands
            </button>
          </div>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={`${activeTab}-${index}`}
                  onClick={() => setExpandedStep(expandedStep === index ? null : index)}
                  className={`group border-2 rounded-2xl bg-white/80 backdrop-blur-sm p-6 cursor-pointer transition-all duration-500 ${
                    expandedStep === index 
                      ? "scale-105 shadow-2xl border-accent" 
                      : "hover:scale-105 hover:shadow-xl hover:border-accent"
                  } ${
                    stepsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: stepsVisible ? `${index * 150}ms` : "0ms" }}
                >
                  <div className="flex flex-col items-center space-y-4">
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-br ${step.color} shadow-lg transition-all duration-300 ${
                        expandedStep === index ? "scale-110 rotate-3" : "group-hover:scale-110"
                      }`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-2xl font-bold text-gray-300 group-hover:text-accent transition-colors duration-300">
                      {step.number}
                    </span>
                    <h4 className="text-lg font-semibold text-center group-hover:text-accent transition-colors duration-300">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground text-sm text-center leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Expanded content */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      expandedStep === index ? "max-h-96 mt-4" : "max-h-0"
                    }`}>
                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-2 text-sm font-medium text-purple-600 mb-3">
                          <Sparkles className="h-4 w-4" />
                          Key Benefits
                        </div>
                        <ul className="space-y-2">
                          {step.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                              <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                        <button className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:shadow-md transition-all">
                          Learn more
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default HowItWorksSection;