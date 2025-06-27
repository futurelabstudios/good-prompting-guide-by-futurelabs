
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Star, CheckCircle, X } from 'lucide-react';

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
      case 'Beginner': return 'bg-green-100 text-green-700';
      case 'Intermediate': return 'bg-blue-100 text-blue-700';
      case 'Advanced': return 'bg-purple-100 text-purple-700';
      case 'Expert': return 'bg-orange-100 text-orange-700';
      case 'Master': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-white shadow-sm border-0">
          {/* Header */}
          <div className="bg-gray-900 text-white p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-lg font-bold">
                  {number}
                </div>
                <div className="text-white/80">
                  {icon}
                </div>
              </div>
              
              <div className="text-right">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(difficulty)} bg-white`}>
                  {difficulty}
                </div>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
            <p className="text-xl text-white/90 leading-relaxed">{description}</p>
          </div>

          <CardContent className="p-8 space-y-8">
            {/* Examples Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                See the Difference
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Bad Example */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <X className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="font-semibold text-red-800">Ineffective Approach</h3>
                  </div>
                  <div className="bg-red-100 border border-red-200 p-4 rounded-lg">
                    <code className="text-red-800 text-sm font-mono leading-relaxed whitespace-pre-wrap">
                      {examples.bad}
                    </code>
                  </div>
                </div>

                {/* Good Example */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="font-semibold text-green-800">Effective Approach</h3>
                  </div>
                  <div className="bg-green-100 border border-green-200 p-4 rounded-lg">
                    <code className="text-green-800 text-sm font-mono leading-relaxed whitespace-pre-wrap">
                      {examples.good}
                    </code>
                  </div>
                </div>
              </div>
            </div>

            {/* Pro Tip Section */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-blue-900">
                    💡 Pro Tip
                  </h3>
                  <p className="text-blue-800 leading-relaxed text-base">{tip}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PromptCard;
