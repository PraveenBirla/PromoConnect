import { Users, Share, Link, Tag } from "lucide-react";

const features = [
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: "Find the Right Creator",
    description: "Browse our diverse network of creators across various niches and audience sizes.",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: <Share className="h-8 w-8 text-white" />,
    title: "Showcase Your Thing",
    description: "Create an attractive profile that highlights your strengths for potential brand deals.",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: <Link className="h-8 w-8 text-white" />,
    title: "Connect Directly",
    description: "Chat seamlessly with brands and creators without middlemen slowing you down.",
    gradient: "from-indigo-500 to-indigo-600"
  },
  {
    icon: <Tag className="h-8 w-8 text-white" />,
    title: "Track Performance",
    description: "Measure what matters with in-depth analytics and real-time insights.",
    gradient: "from-emerald-500 to-emerald-600"
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative min-h-[80vh] bg-white overflow-hidden py-20">
      {/* Background Blur and Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white z-0" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] bg-gradient-to-r from-purple-100 to-blue-100 rounded-full blur-3xl opacity-30 z-0" />

      {/* Content */}
      <div className="container relative z-10 px-6 mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Why Choose PromoConnect?
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 leading-relaxed">
            Our platform offers a seamless experience for both creators and brands with powerful features tailored for growth.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-r ${feature.gradient} mb-6 shadow-lg transform group-hover:scale-105 transition-transform`}>
                  {feature.icon}
                </div>
                
                {/* Title & Description */}
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600 group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
