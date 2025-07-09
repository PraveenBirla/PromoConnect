import { Link, useLocation } from "react-router-dom";
import { Megaphone, User, Sparkles, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); 
 
  const navigate = useNavigate() ;
   const handleSignOut = () => {
    
    localStorage.removeItem('token');
    navigate("/")
    window.location.reload();
  };

  const isActivePage = (path) => location.pathname === path;

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

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
          <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:scale-110">
            <Megaphone className="h-4 sm:h-5 w-4 sm:w-5 text-white" />
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

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2 ">
          <Link to="/profile" className="md:hidden">
            <User
              className={`h-6 w-6 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            />
          </Link> 
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-1 rounded-lg ${
              isScrolled
                ? "text-gray-700 hover:bg-gray-100 "
                : "text-white hover:bg-white/10"
            }`}
          >  
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

         
        <div className="hidden md:flex items-center gap-8">
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

     
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        } ${
          isScrolled ? "bg-white" : "bg-gradient-to-b from-purple-900/90 to-blue-900/90"
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex flex-col gap-4 hover:bg-green-600">
  <Link
    to="/how-it-works"
    className={`py-2 px-3 rounded-lg transition-all duration-300 font-medium relative group 
      ${
        isScrolled
          ? "text-gray-700 hover:bg-green-600 hover:text-white"
          : "text-white hover:bg-green-500 hover:text-black"
      }
      ${
        isActivePage("/how-it-works")
          ? isScrolled
            ? "bg-gray-100 text-black"
            : "bg-white/10 text-white"
          : ""
      }
    `}
  >
    How It Works
  </Link>

  <button
    onClick={handleSignOut}
    className={`py-2 px-3 rounded-lg transition-all duration-300 text-left font-medium
      ${
        isScrolled
          ? "text-gray-700 hover:bg-gray-100 hover:text-red-500"
          : "text-white hover:bg-white/10 hover:text-red-400"
      }
    `}
  >
    Sign Out
  </button>
</div>

      </div>
    </header>
  );
};

export default Navbar;