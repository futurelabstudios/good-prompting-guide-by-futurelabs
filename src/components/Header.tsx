
import React from 'react';
import { Sparkles, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="py-4 fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="rounded-xl p-2 bg-gradient-to-br from-blue-500 to-purple-600 group-hover:from-blue-600 group-hover:to-purple-700 transition-all duration-300 shadow-lg">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Prompt Engineering Guide
              </h1>
              <p className="text-xs text-gray-500">Master AI Communication</p>
            </div>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link 
              to="/tools" 
              className="hidden sm:flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
            >
              <Trophy className="h-4 w-4" />
              AI Tools
            </Link>
            <Link 
              to="/prompts/1" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-sm"
            >
              Start Learning
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
