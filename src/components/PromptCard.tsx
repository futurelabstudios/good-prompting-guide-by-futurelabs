
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Target, Lightbulb, Zap } from 'lucide-react';

interface PromptCardProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  examples: {
    bad: string;
    good: string;
  };
  tip: string;
  difficulty?: string;
  xp?: number;
}

const PromptCard: React.FC<PromptCardProps> = ({
  number,
  icon,
  title,
  description,
  examples,
  tip,
  difficulty = "Beginner",
  xp = 50,
}) => {
  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'Beginner': return 'from-green-500 to-green-600';
      case 'Intermediate': return 'from-blue-500 to-blue-600';
      case 'Advanced': return 'from-purple-500 to-purple-600';
      case 'Expert': return 'from-orange-500 to-orange-600';
      case 'Master': return 'from-red-500 to-red-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getDifficultyBadgeColor = (diff: string) => {
    switch (diff) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Advanced': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Expert': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Master': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Card className="w-full max-w-4xl shadow-2xl border-0 overflow-hidden">
        {/* Header with Gradient */}
        <div className={`bg-gradient-to-r ${getDifficultyColor(difficulty)} p-8 text-white relative overflow-hidden`}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl font-bold border border-white/30">
                  {number}
                </div>
                <div className="text-white/90 scale-125">
                  {icon}
                </div>
              </div>
              
              <div className="text-right">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border ${getDifficultyBadgeColor(difficulty)} bg-white`}>
                  <Target className="h-4 w-4" />
                  {difficulty}
                </div>
                <div className="flex items-center gap-2 mt-2 text-yellow-200">
                  <Trophy className="h-4 w-4" />
                  <span className="font-bold">{xp} XP</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{title}</h1>
            <p className="text-xl text-white/90 leading-relaxed">{description}</p>
          </div>
        </div>

        <CardContent className="p-8 md:p-12 space-y-8">
          {/* Examples Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Zap className="h-6 w-6 text-blue-600" />
              See the Difference
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Bad Example */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-red-50/80 backdrop-blur-sm border-2 border-red-200 p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center">
                      <span className="text-white font-bold">✗</span>
                    </div>
                    <h3 className="font-bold text-red-700 text-lg">Ineffective Approach</h3>
                  </div>
                  <div className="bg-red-100/60 border border-red-200 p-4 rounded-xl">
                    <code className="text-red-800 font-mono text-sm leading-relaxed whitespace-pre-wrap">
                      {examples.bad}
                    </code>
                  </div>
                </div>
              </div>

              {/* Good Example */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-green-50/80 backdrop-blur-sm border-2 border-green-200 p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <h3 className="font-bold text-green-700 text-lg">Effective Approach</h3>
                  </div>
                  <div className="bg-green-100/60 border border-green-200 p-4 rounded-xl">
                    <code className="text-green-800 font-mono text-sm leading-relaxed whitespace-pre-wrap">
                      {examples.good}
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pro Tip Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative bg-gradient-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-sm border-2 border-blue-200/50 p-8 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                    💡 Pro Tip
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">{tip}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Badge */}
          <div className="text-center pt-4">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-200 px-6 py-3 rounded-full">
              <Trophy className="h-5 w-5 text-yellow-600" />
              <span className="font-semibold text-yellow-800">
                You've earned {xp} XP by mastering this technique!
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PromptCard;
