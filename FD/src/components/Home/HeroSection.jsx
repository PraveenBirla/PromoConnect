import { Link } from "react-router-dom";
import  {useScrollAnimation}  from "../../hooks/useScrollAnimation";

import { ArrowRight } from "lucide-react";

const HeroSection = () => {
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
            className={`text-6xl sm:text-4xl md:text-5xl lg:text-8xl font-bold tracking-tight leading-tight transition-all duration-1000 delay-300 text-white ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Connect
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Creators
            </span>
            <span className="text-white">& Brands</span>
          </h1>

          <p
            className={`max-w-2xl text-xl sm:text-lg md:text-xl lg:text-2xl text-white font-light leading-relaxed transition-all duration-1000 delay-500 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            The next-generation platform where creativity meets opportunity. Build
            meaningful partnerships and grow your brand together.
          </p>

         <div
  className={`flex flex-row flex-wrap items-center justify-center gap-4   max-w-md  lg:max-w-2xl transition-all duration-1000 delay-700 ${
    heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
  }`}
>
  <Link to="/login">
    <button className="px-5 py-2 text-sm sm:text-base lg:text-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl group inline-flex items-center justify-center gap-1 text-white">
      <span>Login</span>
      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
    </button>
  </Link>

  <Link to="/register">
    <button className="px-5 py-2 text-sm lg:text-xl sm:text-base border-2 border-white/30 hover:border-white/50 hover:bg-white/10 transition-all duration-300 hover:scale-105 rounded-xl bg-white/10 backdrop-blur-sm text-white hover:text-white">
      Sign up
    </button>
  </Link>
</div>

  </div>
      </div>
    </section>
  );
};

export default HeroSection;
