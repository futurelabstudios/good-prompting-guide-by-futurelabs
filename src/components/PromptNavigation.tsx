import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Zap, Trophy, Crown, ChevronUp, ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface PromptNavigationProps {
  currentPrompt: number;
  totalPrompts: number;
}

const PromptNavigation: React.FC<PromptNavigationProps> = ({ currentPrompt, totalPrompts }) => {
  const isMobile = useIsMobile();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // Auto-hide navigation on scroll down for mobile
  useEffect(() => {
    if (!isMobile) return;
    
    const controlNavigation = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
          setIsExpanded(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavigation);
      return () => {
        window.removeEventListener('scroll', controlNavigation);
      };
    }
  }, [lastScrollY, isMobile]);
  
  const getSectionInfo = (promptNum: number) => {
    // Golden rules at the end
    if (promptNum === 31) {
      return {
        section: 'Golden Rules',
        icon: <Zap className="h-3 w-3" />,
        color: 'from-amber-400 to-orange-500',
        bgColor: 'bg-gradient-to-r from-amber-50 to-orange-50',
        textColor: 'text-amber-700',
        sectionRange: 'Final',
        currentInSection: 1,
        totalInSection: 1
      };
    }
    
    if (promptNum <= 10) {
      return { 
        section: 'Beginner', 
        icon: <Zap className="h-3 w-3" />,
        color: 'from-emerald-400 to-teal-500',
        bgColor: 'bg-gradient-to-r from-emerald-50 to-teal-50',
        textColor: 'text-emerald-700',
        sectionRange: '1-10',
        currentInSection: promptNum,
        totalInSection: 10
      };
    }
    if (promptNum <= 20) {
      return { 
        section: 'Intermediate', 
        icon: <Trophy className="h-3 w-3" />,
        color: 'from-blue-400 to-purple-500',
        bgColor: 'bg-gradient-to-r from-blue-50 to-purple-50',
        textColor: 'text-blue-700',
        sectionRange: '11-20',
        currentInSection: promptNum - 10,
        totalInSection: 10
      };
    }
    return { 
      section: 'Expert', 
      icon: <Crown className="h-3 w-3" />,
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-gradient-to-r from-purple-50 to-pink-50',
      textColor: 'text-purple-700',
      sectionRange: '21-30',
      currentInSection: promptNum - 20,
      totalInSection: 10
    };
  };

  const sectionInfo = getSectionInfo(currentPrompt);

  if (isMobile) {
    return (
      <div className={`fixed bottom-0 left-0 right-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-t-2 border-cyan-400/30 z-20 backdrop-blur-lg transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}>
        {/* Collapsed State */}
        {!isExpanded && (
          <div className="p-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {currentPrompt > 1 ? (
                  <Link 
                    to={`/prompts/${currentPrompt - 1}`}
                    className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-500 transition-all duration-300 active:scale-95"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </Link>
                ) : (
                  <div className="w-10 h-10"></div>
                )}
              </div>
              
              <button
                onClick={() => setIsExpanded(true)}
                className="flex flex-col items-center gap-1 py-2 px-4 hover:bg-white/10 rounded-lg transition-colors"
              >
                <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${sectionInfo.color} text-white`}>
                  {sectionInfo.icon}
                  <span>{sectionInfo.section}</span>
                </div>
                <div className="text-xs font-mono text-cyan-300">
                  {sectionInfo.currentInSection}/{sectionInfo.totalInSection}
                </div>
                <ChevronUp className="h-3 w-3 text-gray-400" />
              </button>
              
              <div className="flex items-center gap-2">
                {currentPrompt < totalPrompts ? (
                  <Link 
                    to={`/prompts/${currentPrompt + 1}`}
                    className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 active:scale-95 glow-cyan"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <div className="w-10 h-10"></div>
                )}
              </div>
            </div>
          </div>
        )}
        
        {/* Expanded State */}
        {isExpanded && (
          <div className="p-3">
            <div className="flex items-center justify-between mb-3">
              <div className="text-center flex-1">
                <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold mb-2 bg-gradient-to-r ${sectionInfo.color} text-white shadow-lg`}>
                  {sectionInfo.icon}
                  <span>{sectionInfo.section}</span>
                </div>
                <div className="text-sm font-mono text-cyan-300 tracking-wider">
                  <span className="text-cyan-400 font-bold">{sectionInfo.currentInSection}</span> 
                  <span className="text-gray-400 mx-1">of</span> 
                  <span className="text-cyan-400 font-bold">{sectionInfo.totalInSection}</span>
                  <div className="text-xs text-gray-500 mt-1">
                    Section {sectionInfo.sectionRange}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </button>
            </div>
            
            <div className="flex items-center gap-2">
              {currentPrompt > 1 ? (
                <Link 
                  to={`/prompts/${currentPrompt - 1}`}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-lg font-medium hover:from-gray-600 hover:to-gray-500 transition-all duration-300 active:scale-95 text-sm"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Previous</span>
                </Link>
              ) : (
                <div className="flex-1"></div>
              )}
              
              {currentPrompt < totalPrompts ? (
                <Link 
                  to={`/prompts/${currentPrompt + 1}`}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 active:scale-95 glow-cyan text-sm"
                >
                  <span>Next</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : (
                <div className="flex-1"></div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Desktop version remains the same
  return (
    <div className="fixed bottom-6 left-0 right-0 flex justify-center items-center z-20 px-4">
      <div className="bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl px-8 py-6 rounded-2xl shadow-2xl border border-cyan-400/20 max-w-2xl w-full relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
        
        <div className="relative z-10 flex items-center justify-between">
          {/* Previous Button */}
          {currentPrompt > 1 ? (
            <Link 
              to={`/prompts/${currentPrompt - 1}`}
              className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white rounded-xl transition-all duration-300 font-semibold transform hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-mono">Previous</span>
            </Link>
          ) : (
            <div className="w-32"></div>
          )}
          
          {/* Progress Info */}
          <div className="text-center px-6">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-3 bg-gradient-to-r ${sectionInfo.color} text-white shadow-lg transform hover:scale-105 transition-transform`}>
              {sectionInfo.icon}
              {sectionInfo.section}
            </div>
            
            <div className="space-y-2">
              <div className="font-mono text-lg text-white tracking-wider">
                <span className="text-cyan-400 font-bold text-xl">{sectionInfo.currentInSection}</span> 
                <span className="text-gray-400 mx-2">of</span> 
                <span className="text-cyan-400 font-bold text-xl">{sectionInfo.totalInSection}</span>
              </div>
              
              <div className="text-xs text-gray-400 font-mono">
                Section {sectionInfo.sectionRange} • Lesson {currentPrompt}
              </div>
              
              {/* Progress bar */}
              <div className="w-32 h-1 bg-gray-700 rounded-full overflow-hidden mx-auto">
                <div 
                  className={`h-full bg-gradient-to-r ${sectionInfo.color} transition-all duration-500 ease-out`}
                  style={{ width: `${(sectionInfo.currentInSection / sectionInfo.totalInSection) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          {/* Next Button */}
          {currentPrompt < totalPrompts ? (
            <Link 
              to={`/prompts/${currentPrompt + 1}`}
              className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-xl transition-all duration-300 font-semibold transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 group glow-cyan"
            >
              <span className="font-mono">Next</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <div className="w-32"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PromptNavigation;
