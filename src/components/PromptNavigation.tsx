
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Zap, Trophy, Crown, ChevronUp, Menu } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface PromptNavigationProps {
  currentPrompt: number;
  totalPrompts: number;
}

const PromptNavigation: React.FC<PromptNavigationProps> = ({ currentPrompt, totalPrompts }) => {
  const isMobile = useIsMobile();
  const [showDetails, setShowDetails] = useState(false);
  
  const getSectionInfo = (promptNum: number) => {
    if (promptNum === 31) {
      return {
        section: 'Golden Rules',
        icon: <Zap className="h-4 w-4" />,
        color: 'from-amber-400 to-orange-500',
        currentInSection: 1,
        totalInSection: 1
      };
    }
    
    if (promptNum <= 10) {
      return { 
        section: 'Beginner', 
        icon: <Zap className="h-4 w-4" />,
        color: 'from-emerald-400 to-teal-500',
        currentInSection: promptNum,
        totalInSection: 10
      };
    }
    if (promptNum <= 20) {
      return { 
        section: 'Intermediate', 
        icon: <Trophy className="h-4 w-4" />,
        color: 'from-blue-400 to-purple-500',
        currentInSection: promptNum - 10,
        totalInSection: 10
      };
    }
    return { 
      section: 'Expert', 
      icon: <Crown className="h-4 w-4" />,
      color: 'from-purple-400 to-pink-500',
      currentInSection: promptNum - 20,
      totalInSection: 10
    };
  };

  const sectionInfo = getSectionInfo(currentPrompt);

  if (isMobile) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-30">
        {/* Main Navigation Bar */}
        <div className="flex items-center justify-between p-4">
          {/* Previous Button */}
          {currentPrompt > 1 ? (
            <Link 
              to={`/prompts/${currentPrompt - 1}`}
              className="flex items-center justify-center w-12 h-12 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors active:scale-95"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
          ) : (
            <div className="w-12 h-12"></div>
          )}
          
          {/* Center Info */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex flex-col items-center gap-1 px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r ${sectionInfo.color} text-white`}>
              {sectionInfo.icon}
              {sectionInfo.section}
            </div>
            <div className="text-lg font-bold text-gray-900">
              {sectionInfo.currentInSection}/{sectionInfo.totalInSection}
            </div>
            <ChevronUp className={`h-3 w-3 text-gray-400 transition-transform ${showDetails ? 'rotate-180' : ''}`} />
          </button>
          
          {/* Next Button */}
          {currentPrompt < totalPrompts ? (
            <Link 
              to={`/prompts/${currentPrompt + 1}`}
              className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-colors active:scale-95 shadow-md"
            >
              <ArrowRight className="h-5 w-5" />
            </Link>
          ) : (
            <div className="w-12 h-12"></div>
          )}
        </div>

        {/* Expanded Details */}
        {showDetails && (
          <div className="border-t bg-gray-50 p-4">
            <div className="text-center mb-4">
              <div className="text-sm text-gray-600 mb-1">Lesson Progress</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">
                {currentPrompt} / {totalPrompts}
              </div>
              
              {/* Progress bar */}
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${sectionInfo.color} transition-all duration-500`}
                  style={{ width: `${(sectionInfo.currentInSection / sectionInfo.totalInSection) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <div className="flex gap-2">
              {currentPrompt > 1 && (
                <Link 
                  to={`/prompts/${currentPrompt - 1}`}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors border"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Previous
                </Link>
              )}
              
              {currentPrompt < totalPrompts && (
                <Link 
                  to={`/prompts/${currentPrompt + 1}`}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-colors"
                >
                  Next
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Desktop version - simplified and cleaner
  return (
    <div className="fixed bottom-6 left-0 right-0 flex justify-center z-20 px-4">
      <div className="bg-white/95 backdrop-blur-xl px-6 py-4 rounded-2xl shadow-xl border border-gray-200 max-w-2xl w-full">
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
            <div className="w-24"></div>
          )}
          
          {/* Progress Info */}
          <div className="text-center">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-2 bg-gradient-to-r ${sectionInfo.color} text-white shadow-md`}>
              {sectionInfo.icon}
              {sectionInfo.section}
            </div>
            
            <div className="text-lg font-bold text-gray-900 mb-1">
              {sectionInfo.currentInSection} / {sectionInfo.totalInSection}
            </div>
            
            <div className="text-xs text-gray-500">
              Lesson {currentPrompt} of {totalPrompts}
            </div>
            
            {/* Progress bar */}
            <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden mx-auto mt-2">
              <div 
                className={`h-full bg-gradient-to-r ${sectionInfo.color} transition-all duration-500`}
                style={{ width: `${(sectionInfo.currentInSection / sectionInfo.totalInSection) * 100}%` }}
              ></div>
            </div>
          </div>
          
          {/* Next Button */}
          {currentPrompt < totalPrompts ? (
            <Link 
              to={`/prompts/${currentPrompt + 1}`}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-colors font-medium shadow-md"
            >
              Next
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <div className="w-24"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PromptNavigation;
