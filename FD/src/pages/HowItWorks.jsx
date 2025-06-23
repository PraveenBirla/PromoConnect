import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollanimation";
import {
  Users,
  Building2,
  Search,
  MessageCircle,
  DollarSign,
  Handshake,
  UserCheck,
  BarChart,
  ChevronDown,
} from "lucide-react";

const creatorSteps = [
  {
    number: "01",
    title: "Create Profile",
    description: "Build your creator profile and showcase what makes you unique.",
    icon: UserCheck,
    color: "from-purple-500 to-blue-500",
  },
  {
    number: "02",
    title: "Set Your Terms",
    description: "Define your rates and partnership requirements.",
    icon: DollarSign,
    color: "from-blue-500 to-indigo-500",
  },
  {
    number: "03",
    title: "Get Discovered",
    description: "Brands will find you and reach out with opportunities.",
    icon: Search,
    color: "from-indigo-500 to-purple-500",
  },
  {
    number: "04",
    title: "Collaborate & Earn",
    description: "Work together on campaigns and grow your revenue.",
    icon: Handshake,
    color: "from-purple-500 to-pink-500",
  },
];

const brandSteps = [
  {
    number: "01",
    title: "Create Brand Profile",
    description: "Set up your brand profile with campaign goals and details.",
    icon: Building2,
    color: "from-green-500 to-blue-500",
  },
  {
    number: "02",
    title: "Find Creators",
    description: "Browse creators and filter by niche, audience, and pricing.",
    icon: Users,
    color: "from-blue-500 to-purple-500",
  },
  {
    number: "03",
    title: "Send Requests",
    description: "Contact creators and outline your campaign needs.",
    icon: MessageCircle,
    color: "from-purple-500 to-indigo-500",
  },
  {
    number: "04",
    title: "Track & Optimize",
    description: "Monitor campaign performance and optimize results.",
    icon: BarChart,
    color: "from-indigo-500 to-green-500",
  },
];

const faqs = [
  {
    question: "How do I sign up as a creator or brand?",
    answer: "Click the sign-up button, then choose whether you're a creator or a brand and follow the prompts.",
  },
  {
    question: "Is there any cost to join the platform?",
    answer: "No, signing up is completely free for both creators and brands.",
  },
  {
    question: "How do payments work?",
    answer: "Creators set their own rates. Payments are securely processed after successful collaborations.",
  },
  {
    question: "Can brands contact creators directly?",
    answer: "Yes, brands can browse profiles and send direct requests through the platform.",
  },
];

const HowItWorksSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.1);
  const [stepsRef, stepsVisible] = useScrollAnimation(0.1);
  const [activeTab, setActiveTab] = useState("creators");
  const [openIndex, setOpenIndex] = useState(null);

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
              onClick={() => setActiveTab("creators")}
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
              onClick={() => setActiveTab("brands")}
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
                  className={`group border-2 rounded-2xl bg-white/80 backdrop-blur-sm p-6 hover:border-accent transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                    stepsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: stepsVisible ? `${index * 150}ms` : "0ms" }}
                >
                  <div className="flex flex-col items-center space-y-4">
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-br ${step.color} shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
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
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-3xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm border border-purple-200 rounded-xl p-5 transition-all duration-300 hover:shadow-xl"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between text-left font-medium text-purple-700 focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "mt-3 max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="text-sm text-gray-700">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
