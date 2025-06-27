
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, Wrench, ArrowLeft } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  const isPromptPage = location.pathname.startsWith('/prompts/');
  const currentPromptId = isPromptPage ? parseInt(location.pathname.split('/')[2]) : null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b shadow-sm">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Left: Back button for prompt pages on mobile, Logo otherwise */}
          <div className="flex items-center gap-3">
            {isMobile && isPromptPage ? (
              <Link 
                to="/" 
                className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
              </Link>
            ) : (
              <Link to="/" className="flex items-center gap-2 text-lg sm:text-xl font-bold">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm sm:text-base">P</span>
                </div>
                <span className="hidden sm:inline">Prompt Mastery</span>
                <span className="sm:hidden">PM</span>
              </Link>
            )}
          </div>

          {/* Center: Current lesson info on mobile prompt pages */}
          {isMobile && isPromptPage && currentPromptId && (
            <div className="flex-1 text-center">
              <div className="text-sm font-semibold text-gray-900">
                Lesson {currentPromptId}
              </div>
              <div className="text-xs text-gray-500">
                {currentPromptId === 31 ? 'Golden Rules' : 
                 currentPromptId <= 10 ? 'Beginner' :
                 currentPromptId <= 20 ? 'Intermediate' : 'Expert'}
              </div>
            </div>
          )}

          {/* Right: Navigation */}
          <div className="flex items-center gap-2">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Home
              </Link>
              <Link to="/prompts/1" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-medium">
                <BookOpen className="h-4 w-4" />
                Prompts
              </Link>
              <Link to="/tools" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-medium">
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
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t bg-white/95 backdrop-blur-md">
            <nav className="flex flex-col gap-1">
              <Link 
                to="/" 
                className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/prompts/1" 
                className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <BookOpen className="h-5 w-5" />
                Prompts
              </Link>
              <Link 
                to="/tools" 
                className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <Wrench className="h-5 w-5" />
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
