import { Link } from "react-router-dom";
import { Megaphone, ArrowRight, Mail, Twitter, Instagram, Linkedin, HelpCircle } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const socialLinks = [
    { icon: Twitter, url: "https://twitter.com/promoconnect", name: "Twitter" },
    { icon: Instagram, url: "https://instagram.com/promoconnect", name: "Instagram" },
    { icon: Linkedin, url: "https://linkedin.com/company/promoconnect", name: "LinkedIn" }
  ];

  const footerLinks = {
    platform: [
      { name: "Find Creators", path: "/promoters" },
      { name: "For Brands", path: "/advertisers" },
      { name: "How It Works", path: "/how-it-works" },
      { name: "Pricing", path: "/pricing" }
    ],
    company: [
      { name: "About Us", path: "/about" },
      { name: "Contact", path: "/contact" },
      { name: "Careers", path: "/careers" },
      { name: "Blog", path: "/blog" }
    ],
    legal: [
      { name: "Terms of Service", path: "/terms" },
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Cookie Policy", path: "/cookies" },
      { name: "GDPR", path: "/gdpr" }
    ],
    support: [
      { name: "Help Center", path: "/help", icon: HelpCircle },
      { name: "Community", path: "/community" },
      { name: "API Docs", path: "/api" },
      { name: "Status", path: "/status" }
    ]
  };

  return (
    <footer className="bg-secondary text-muted-foreground border-t transition-colors duration-300 hover:bg-secondary/95">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="space-y-4 col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 group">
              <Megaphone className="h-6 w-6 text-accent transition-transform duration-300 group-hover:rotate-12" />
              <span className="font-bold text-lg sm:text-xl text-primary group-hover:text-accent transition-colors">
                PromoConnect
              </span>
            </div>
            <p className="leading-relaxed text-sm sm:text-base">
              Connecting creators with brands to amplify each other's reach.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-background hover:bg-accent hover:text-white transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-base mb-4 text-primary capitalize">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className={`flex items-center gap-2 text-sm sm:text-base hover:text-accent transition-colors ${
                        hoveredLink === `${category}-${index}` ? "text-accent translate-x-1" : ""
                      }`}
                      onMouseEnter={() => setHoveredLink(`${category}-${index}`)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      {link.icon && <link.icon className="h-4 w-4" />}
                      {link.name}
                      {hoveredLink === `${category}-${index}` && (
                        <ArrowRight className="h-4 w-4 ml-1 transition-all duration-300" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} PromoConnect. All rights reserved.
            </p>

            <div className="flex gap-4">
              <Link 
                to="/terms" 
                className="text-xs sm:text-sm hover:text-accent transition-colors hover:underline"
              >
                Terms
              </Link>
              <Link 
                to="/privacy" 
                className="text-xs sm:text-sm hover:text-accent transition-colors hover:underline"
              >
                Privacy
              </Link>
              <Link 
                to="/cookies" 
                className="text-xs sm:text-sm hover:text-accent transition-colors hover:underline"
              >
                Cookies
              </Link>
            </div>

            <button 
              className="text-xs sm:text-sm flex items-center gap-1 hover:text-accent transition-colors group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Back to top
              <ArrowRight className="h-3 w-3 rotate-90 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
