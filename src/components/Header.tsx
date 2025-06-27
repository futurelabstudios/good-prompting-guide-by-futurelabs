
import React from 'react';
import { Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="py-4 fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="rounded-xl p-2.5 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse shadow-sm"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-700 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Prompt Engineering Guide
              </h1>
              <p className="text-xs text-gray-500 font-medium">Master AI Communication</p>
            </div>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link 
              to="/prompts/1" 
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-sm flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Start Learning
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
