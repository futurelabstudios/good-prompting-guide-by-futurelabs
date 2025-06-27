import React, { useState } from 'react';
import { Lightbulb, ChevronDown } from 'lucide-react';

interface PromptCardProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  difficulty: string;
  xp: number;
  examples: {
    bad: string;
    good: string;
  };
  tip: string;
}

const PromptCard: React.FC<PromptCardProps> = ({ 
  number, 
  icon, 
  title, 
  description, 
  difficulty, 
  xp, 
  examples, 
  tip 
}) => {
  const [expandedExample, setExpandedExample] = useState<'bad' | 'good' | null>(null);
  const [showTip, setShowTip] = useState(false);
  const [minimized, setMinimized] = useState(false);
  
  const difficultyColors = {
    Beginner: 'from-emerald-400 to-teal-500',
    Intermediate: 'from-blue-400 to-purple-500',
    Advanced: 'from-purple-400 to-pink-500',
    Expert: 'from-pink-400 to-red-500',
    Master: 'from-red-400 to-orange-500'
  };

  if (minimized) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-16 pb-24">
        <div className="container mx-auto px-3 py-4">
          <div className="bg-white rounded-xl shadow-sm border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${difficultyColors[difficulty]} text-white`}>
                  {icon}
                </div>
                <div>
                  <h1 className="text-lg font-bold">{title}</h1>
                  <div className="text-sm text-gray-600">Lesson #{number}</div>
                </div>
              </div>
              <button
                onClick={() => setMinimized(false)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
              >
                Expand
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-16 pb-24">
      <div className="container mx-auto px-3 py-4 max-w-4xl">
        <div className="space-y-4">
          {/* Header Card */}
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <div className="p-4 sm:p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${difficultyColors[difficulty]} text-white shadow-md`}>
                    {icon}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1">Lesson #{number}</div>
                    <h1 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">{title}</h1>
                  </div>
                </div>
                <button
                  onClick={() => setMinimized(true)}
                  className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Minimize
                </button>
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${difficultyColors[difficulty]} text-white`}>
                  {difficulty}
                </span>
                <span className="text-sm text-gray-600 font-mono">+{xp} XP</span>
              </div>
              
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{description}</p>
            </div>
          </div>

          {/* Examples Section */}
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Examples</h2>
              
              <div className="space-y-4">
                {/* Bad Example */}
                <div className="border border-red-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedExample(expandedExample === 'bad' ? null : 'bad')}
                    className="w-full px-4 py-3 bg-red-50 hover:bg-red-100 transition-colors text-left flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="font-medium text-red-800">❌ Ineffective Approach</span>
                    </div>
                    <ChevronDown className={`h-4 w-4 text-red-600 transition-transform ${expandedExample === 'bad' ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedExample === 'bad' && (
                    <div className="p-4 bg-white border-t border-red-200">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono bg-gray-50 p-3 rounded border overflow-x-auto">
                        {examples.bad}
                      </pre>
                    </div>
                  )}
                </div>

                {/* Good Example */}
                <div className="border border-emerald-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedExample(expandedExample === 'good' ? null : 'good')}
                    className="w-full px-4 py-3 bg-emerald-50 hover:bg-emerald-100 transition-colors text-left flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="font-medium text-emerald-800">✅ Effective Approach</span>
                    </div>
                    <ChevronDown className={`h-4 w-4 text-emerald-600 transition-transform ${expandedExample === 'good' ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedExample === 'good' && (
                    <div className="p-4 bg-white border-t border-emerald-200">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono bg-gray-50 p-3 rounded border overflow-x-auto">
                        {examples.good}
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Pro Tip Section */}
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <button
              onClick={() => setShowTip(!showTip)}
              className="w-full px-4 sm:px-6 py-4 hover:bg-gray-50 transition-colors text-left flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-amber-500" />
                <span className="font-bold text-gray-900">💡 Pro Tip</span>
              </div>
              <ChevronDown className={`h-4 w-4 text-gray-600 transition-transform ${showTip ? 'rotate-180' : ''}`} />
            </button>
            {showTip && (
              <div className="px-4 sm:px-6 pb-4 border-t bg-amber-50">
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed pt-4">
                  {tip}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptCard;
