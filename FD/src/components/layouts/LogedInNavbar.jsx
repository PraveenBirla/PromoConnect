import { Link } from "react-router-dom";
import { Megaphone } from "lucide-react";
import React from "react";

const LoginNavbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-lg">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:scale-110">
            <Megaphone className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            PromoConnect
          </span>
        </Link> 

        <nav className="flex items-center gap-6">
          <Link
            to="/register"
            className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium"
          >
            Sign Up
          </Link>
          <Link
            to="/how-it-works"
            className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium"
          >
            How It Works
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default LoginNavbar;
