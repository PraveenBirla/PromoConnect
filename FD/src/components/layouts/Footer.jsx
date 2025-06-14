import { Link } from "react-router-dom";
import { Megaphone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary  text-sm text-muted-foreground border-t">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 md:grid-cols-4">
         
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Megaphone className="h-6 w-6 text-accent" />
              <span className="font-bold text-lg sm:text-xl text-primary">
                PromoConnect
              </span>
            </div>
            <p className="leading-relaxed text-sm sm:text-base">
              Connecting creators with brands to amplify each other's reach.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-primary">Platform</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link to="/promoters" className="hover:text-accent transition-colors">
                  Find Creators
                </Link>
              </li>
              <li>
                <Link to="/advertisers" className="hover:text-accent transition-colors">
                  For Brands
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-accent transition-colors">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-primary">Company</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-accent transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
 
          <div>
            <h3 className="font-semibold text-base mb-4 text-primary">Legal</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link to="/terms" className="hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-accent transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

       
        <div className="mt-10 pt-6 border-t border-border text-center text-xs sm:text-sm">
          <p>&copy; {new Date().getFullYear()} PromoConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
