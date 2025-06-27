
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const Footer = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  
  // Hide footer on prompt pages for mobile to maximize space
  const isPromptPage = location.pathname.startsWith('/prompts/');
  
  if (isMobile && isPromptPage) {
    return null;
  }

  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12 mt-auto">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h3 className="text-lg sm:text-xl font-bold mb-4">Master AI Prompting</h3>
          <p className="text-gray-400 mb-6 text-sm sm:text-base max-w-2xl mx-auto">
            Transform your AI interactions with proven techniques and expert strategies. 
            Learn to craft prompts that deliver consistent, professional results.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
            <Link 
              to="/prompts/1" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Start Learning
            </Link>
            <Link 
              to="/tools" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Explore Tools
            </Link>
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-xs sm:text-sm">
              © 2024 Prompt Mastery Guide. Built with ❤️ for better AI interactions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
