import { Link } from "react-router-dom";
import { Users, Building2, Sparkles } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollanimation";

const LoggedInHeroSection = () => {
  const [heroRef, heroVisible] = useScrollAnimation(0.2);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
       
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
         
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div
          ref={heroRef}
          className={`flex flex-col items-center space-y-8 text-center max-w-4xl mx-auto transition-all duration-1000 ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
         

          <h1
            className={`text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-tight transition-all duration-1000 delay-300 text-white ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Choose Your
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Path
            </span>
          </h1>

          <p
            className={`max-w-2xl text-xl text-white md:text-2xl font-light leading-relaxed transition-all duration-1000 delay-500 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Select whether you're looking for creators to promote your brand or if you're a creator seeking brand partnerships.
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-lg transition-all duration-1000 delay-700 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link to="/promoters" className="w-full sm:w-auto">
              <button
                type="button"
                className="w-full sm:w-auto px-8 py-4 text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl inline-flex items-center justify-center"
              >
                <Users className="mr-2 h-5 w-5" />
                Find Creators
              </button>
            </Link>

            <Link to="/advertisers" className="w-full sm:w-auto">
              <button
                type="button"
                className="w-full sm:w-auto px-8 py-4 text-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl inline-flex items-center justify-center"
              >
                <Building2 className="mr-2 h-5 w-5" />
                For Brands
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoggedInHeroSection;
