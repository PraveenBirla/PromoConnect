import { Link, useLocation } from "react-router-dom";
import { Megaphone, User, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
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
      <div className="container flex h-16 items-center justify-between px-4 mx-auto">
        
        <Link to="/" className="flex items-center gap-3 group">
          <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:scale-110">
            <Megaphone className="h-5 w-5 text-white" />
          </div>
          <span
            className={`font-bold text-xl transition-all duration-300 ${
              isScrolled
                ? "bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
                : "text-white drop-shadow-lg"
            }`}
          >
            PromoConnect
          </span>
        </Link>

         
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/how-it-works"
              className={`transition-all duration-300 font-medium relative group ${
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

          <Link to="/profile">
            <button
              className={`relative overflow-hidden group transition-all duration-300 hover:scale-105  
                  bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl
                   rounded-xl px-6 py-2`}
            >
              <div className="flex items-center gap-2 relative z-10">
                <div className="p-1 rounded-lg bg-white/20 group-hover:bg-white/30 transition-all duration-300">
                  <User className="h-4 w-4" />
                </div>
                <span className="font-medium">Profile</span>
                <Sparkles className="h-3 w-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              {isActivePage("/profile") && (
                <div className="absolute -bottom-1 left-2 right-2 h-0.5 bg-gradient-to-r from-purple-300 to-blue-300"></div>
              )}
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
