
import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <span className="text-sm">Built with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            <span className="text-sm">by</span>
            <a 
              href="https://futurelabstudios.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-gray-900 hover:text-gray-700 font-medium transition-colors"
            >
              Futurelab Studios
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">
              © {new Date().getFullYear()} Futurelab Studios. Released as a public good for the AI community.
            </p>
            <p className="text-sm text-gray-400">
              Free forever • Open source • Community driven
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
