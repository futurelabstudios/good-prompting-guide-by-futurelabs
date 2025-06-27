
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface PromptNavigationProps {
  currentPrompt: number;
  totalPrompts: number;
}

const PromptNavigation: React.FC<PromptNavigationProps> = ({ currentPrompt, totalPrompts }) => {
  const getDifficultyInfo = (promptNum: number) => {
    if (promptNum <= 2) return { level: 'Beginner', color: 'bg-green-100 text-green-700' };
    if (promptNum <= 5) return { level: 'Intermediate', color: 'bg-blue-100 text-blue-700' };
    if (promptNum <= 9) return { level: 'Advanced', color: 'bg-purple-100 text-purple-700' };
    if (promptNum <= 16) return { level: 'Expert', color: 'bg-orange-100 text-orange-700' };
    return { level: 'Master', color: 'bg-red-100 text-red-700' };
  };

  const difficultyInfo = getDifficultyInfo(currentPrompt);

  return (
    <div className="fixed bottom-6 left-0 right-0 flex justify-center items-center z-20 px-4">
      <div className="bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border border-gray-200 max-w-lg w-full">
        <div className="flex items-center justify-between">
          {/* Previous Button */}
          {currentPrompt > 1 ? (
            <Link 
              to={`/prompts/${currentPrompt - 1}`}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Previous
            </Link>
          ) : (
            <div className="w-20"></div>
          )}
          
          {/* Progress Info */}
          <div className="text-center">
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-1 ${difficultyInfo.color}`}>
              {difficultyInfo.level}
            </div>
            <div className="text-sm font-medium text-gray-900">
              {currentPrompt} of {totalPrompts}
            </div>
          </div>
          
          {/* Next Button */}
          {currentPrompt < totalPrompts ? (
            <Link 
              to={`/prompts/${currentPrompt + 1}`}
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors font-medium"
            >
              Next
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <div className="w-20"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PromptNavigation;
