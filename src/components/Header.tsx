
import React from 'react';
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/60">
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 bg-gray-900 rounded-lg">
              <BookOpen className="h-3 w-3 md:h-4 md:w-4 text-white" />
            </div>
            <div>
              <h1 className="text-base md:text-lg font-semibold text-gray-900">
                Prompt Engineering Guide
              </h1>
            </div>
          </Link>
          
          <Link 
            to="/prompts/1" 
            className="minimal-button-primary text-xs md:text-sm px-3 md:px-4 py-2"
          >
            Start Learning
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
