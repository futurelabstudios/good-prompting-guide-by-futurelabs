
import React from 'react';
import { Link } from 'react-router-dom';

interface PromptNavigationProps {
  currentPrompt: number;
  totalPrompts: number;
}

const PromptNavigation: React.FC<PromptNavigationProps> = ({ currentPrompt, totalPrompts }) => {
  return (
    <div className="fixed bottom-6 left-0 right-0 flex justify-center items-center gap-4 z-20">
      <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border flex items-center gap-6">
        {currentPrompt > 1 && (
          <Link 
            to={`/prompts/${currentPrompt - 1}`}
            className="px-4 py-2 rounded-full bg-secondary text-white hover:bg-secondary/80 transition-colors"
          >
            Previous
          </Link>
        )}
        
        <div className="flex items-center gap-3">
          {Array.from({ length: totalPrompts }).map((_, index) => (
            <Link 
              key={index} 
              to={`/prompts/${index + 1}`}
              className={`h-3 w-3 rounded-full transition-all ${currentPrompt === index + 1 ? 'bg-secondary scale-125' : 'bg-secondary/30 hover:bg-secondary/50'}`}
              aria-label={`Go to prompt ${index + 1}`}
            />
          ))}
        </div>
        
        {currentPrompt < totalPrompts && (
          <Link 
            to={`/prompts/${currentPrompt + 1}`}
            className="px-4 py-2 rounded-full bg-primary text-white hover:bg-primary/80 transition-colors"
          >
            Next
          </Link>
        )}
      </div>
    </div>
  );
};

export default PromptNavigation;
