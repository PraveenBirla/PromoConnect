import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollanimation";

const CTAsection = () => {
  const [ctaRef, ctaVisible] = useScrollAnimation(0.2);
  const [buttonsRef, buttonsVisible] = useScrollAnimation(0.3);
  const [trustRef, trustVisible] = useScrollAnimation(0.4);

  return (
    <section className="relative h-[80vh] grid place-items-center overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      ></div>

      
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
        style={{ animationDelay: "3s" }}
      ></div>
 
       
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto space-y-8">
          <div
            ref={ctaRef}
            className={`space-y-6 transition-all duration-1000 ${
              ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div
              className={`inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-2 py-1 text-xs sm:text-sm text-white transition-all duration-700 delay-200 ${
                ctaVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <Sparkles className="h-4 w-4" />
              <span className="font-medium">Join the Revolution</span>
            </div>

            <h2
              className={`text-2xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white leading-tight transition-all duration-1000 delay-300 ${
                ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Ready to Start{" "}
              <span className="block bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                Creating Magic?
              </span> 
            </h2>

            <p
              className={`max-w-2xl text-xs text-gray-300 md:text-2xl font-light leading-relaxed transition-all duration-1000 delay-500 ${
                ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Join thousands of creators and brands already building amazing partnerships on our platform.
            </p>
          </div>

          <div
            ref={buttonsRef}
            className={`flex flex-row   items-center justify-center gap-3 w-full max-w-xs sm:max-w-md transition-all duration-1000 delay-700 ${
              buttonsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link to="/register" className="w-auto">
              <button  className="w-full sm:min-w-[220px] px-2 py-1 text-xs md:text-lg bg-white text-gray-900 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl font-semibold group inline-flex items-center justify-center gap-0 sm:gap-2">
                <span  className="whitespace-nowrap">Sign Up Now</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
            <Link to="/login" className="w-auto">
              <button className="w-full sm:w-auto px-2 py-1 text-xs md:text-lg border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105 rounded-xl bg-transparent backdrop-blur-sm">
                Log In 
              </button>
            </Link>
          </div>

           
          <div
            ref={trustRef}
            className={`flex flex-wrap justify-center items-center gap-8 transition-all duration-1000 delay-900 ${
              trustVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div
              className={`flex items-center gap-2 text-white/80 transition-all duration-700 delay-1000 ${
                trustVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Trusted by 10K+ users</span>
            </div>
            <div
              className={`flex items-center gap-2 text-white/80 transition-all duration-700 delay-1100 ${
                trustVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div
                className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <span className="text-sm">99% satisfaction rate</span>
            </div>
            <div
              className={`flex items-center gap-2 text-white/80 transition-all duration-700 delay-1200 ${
                trustVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div
                className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
              <span className="text-sm">24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAsection;
