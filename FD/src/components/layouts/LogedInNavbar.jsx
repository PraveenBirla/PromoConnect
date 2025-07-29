import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Megaphone, Sparkles } from "lucide-react";

const LoginNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActivePage = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-lg"
          : "bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-indigo-900/10 backdrop-blur-sm"
      }`}
    >
      <div className="container flex h-13 sm:h-16 items-center justify-between px-2 sm:px-4 mx-auto">
        
         
        <Link to="/" className="flex items-center gap-1 sm:gap-3 group">
          <div className="p-1.5 sm:p-2 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:scale-110">
            <Megaphone className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
          </div>
          <span
            className={`font-bold text-base sm:text-xl transition-all duration-300 ${
              isScrolled
                ? "bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
                : "text-white drop-shadow-lg"
            }`}
          >
            PromoConnect
          </span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-4 sm:gap-8">
          
          {/* Desktop Nav Link */}
          <nav className="hidden md:flex items-center gap-6 sm:gap-8">
            <Link
              to="/how-it-works"
              className={`transition-all duration-300  sm:text-base font-large relative group ${
                isScrolled
                  ? "text-gray-700 hover:text-purple-600"
                   : "text-white/90 hover:text-white"
               }`}
            >
              How It Works
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 ${
                  isActivePage("/how-it-works")
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          </nav>

          {/* Show "How It Works" on small screens only */}
          <Link
            to="/how-it-works"
            className={`block md:hidden text-base sm:text-xs font-medium transition-all duration-300 ${
              isScrolled
                ? "text-gray-700 hover:text-purple-600"
                : "text-white/90 hover:text-white"
            }`}
          >
            How It Works
          </Link>

          {/* Get Started Button (only show on sm and up) */}
          <Link to="/register" className="hidden sm:block">
            <button
              className={`relative overflow-hidden group transition-all duration-300 hover:scale-105 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl rounded-lg sm:rounded-xl px-4 py-1.5 sm:px-6 sm:py-2 text-sm sm:text-base`}
            >
              <div className="flex items-center gap-1.5 sm:gap-2 relative z-10">
                <span className="font-medium">Get Started</span>
                <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg sm:rounded-xl"></div>
              {isActivePage("/register") && (
                <div className="absolute -bottom-1 left-2 right-2 h-0.5 bg-gradient-to-r from-purple-300 to-blue-300"></div>
              )}
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default LoginNavbar;
