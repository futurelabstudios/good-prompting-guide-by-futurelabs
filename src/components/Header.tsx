
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, Wrench } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  // Auto-hide header on scroll down, show on scroll up
  useEffect(() => {
    const controlHeader = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader);
      return () => {
        window.removeEventListener('scroll', controlHeader);
      };
    }
  }, [lastScrollY]);

  // Hide header completely on prompt pages for mobile
  const isPromptPage = location.pathname.startsWith('/prompts/');
  
  if (isMobile && isPromptPage) {
    return null;
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-12 sm:h-14">
          <Link to="/" className="flex items-center gap-2 text-lg sm:text-xl font-bold">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs sm:text-sm">P</span>
            </div>
            <span className="hidden sm:inline">Prompt Mastery</span>
            <span className="sm:hidden">PM</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link to="/prompts/1" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <BookOpen className="h-4 w-4" />
              Prompts
            </Link>
            <Link to="/tools" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Wrench className="h-4 w-4" />
              Tools
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t bg-white/95 backdrop-blur-sm">
            <nav className="flex flex-col gap-4">
              <Link 
                to="/" 
                className="text-gray-600 hover:text-gray-900 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/prompts/1" 
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <BookOpen className="h-4 w-4" />
                Prompts
              </Link>
              <Link 
                to="/tools" 
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Wrench className="h-4 w-4" />
                Tools
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
