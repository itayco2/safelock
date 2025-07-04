import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigateToHome = () => {
    navigate('/');
    // Small timeout to ensure navigation completes before scrolling
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={navigateToHome}
          >
            <img 
              src="/lovable-uploads/5371994a-ea13-4b33-a94e-dd79a9caec70.png" 
              alt="Safe Lock Logo"
              className="w-14.5 h-14 ml-2"
            />
            <span className="text-xl font-bold text-slate-900 mr-2">Take Safe</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-slate-700 hover:text-blue-900 transition-colors px-4"
            >
              ראשי
            </button>
            
            <span className="text-slate-400 mx-4">|</span>
            
            <button 
              onClick={() => scrollToSection('safes')}
              className="text-slate-700 hover:text-blue-900 transition-colors px-4"
            >
              סוגי כספות
            </button>
            
            <span className="text-slate-400 mx-4">|</span>
            
            <button 
              onClick={() => scrollToSection('services')}
              className="text-slate-700 hover:text-blue-900 transition-colors px-4"
            >
              שירותים
            </button>
            
            {/* <span className="text-slate-400 mx-4">|</span> */}
            
            {/* <button 
              onClick={() => scrollToSection('articles')}
              className="text-slate-700 hover:text-blue-900 transition-colors px-4"
            >
              מאמרים
            </button> */}
            
            <span className="text-slate-400 mx-4">|</span>
            
            <button 
              onClick={() => scrollToSection('clients')}
              className="text-slate-700 hover:text-blue-900 transition-colors px-4"
            >
              לקוחות
            </button>
            
            <span className="text-slate-400 mx-4">|</span>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-700 hover:text-blue-900 transition-colors px-4"
            >
              צור קשר
            </button>
          </nav>

          {/* Contact Info */}
          <div className="flex items-center space-x-4">
            <a 
              href="tel:050-1234567" 
              className="flex items-center text-blue-900 font-semibold hover:text-blue-800 transition-colors"
            >
              <Phone className="w-4 h-4 ml-2" />
              053-3570350
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;