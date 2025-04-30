
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

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
}

const PromptCard: React.FC<PromptCardProps> = ({
  number,
  icon,
  title,
  description,
  examples,
  tip,
}) => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20 px-4">
      <Card className="w-full max-w-3xl prompt-card">
        <CardContent className="p-8">
          <div className="flex items-start gap-6">
            <div className="prompt-number">{number}</div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-secondary">{icon}</span>
                <h3 className="text-3xl font-bold">{title}</h3>
              </div>
              <p className="text-lg mb-6">{description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-red-50 border border-red-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-700 mb-2">❌ Ineffective</h4>
                  <p className="text-red-700 font-mono text-sm p-3 bg-red-100/50 rounded">{examples.bad}</p>
                </div>
                <div className="bg-green-50 border border-green-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-2">✅ Effective</h4>
                  <p className="text-green-700 font-mono text-sm p-3 bg-green-100/50 rounded whitespace-pre-wrap">{examples.good}</p>
                </div>
              </div>
              
              <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg flex gap-3 items-start">
                <div className="text-primary mt-1">🧠</div>
                <p className="text-primary/90">{tip}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PromptCard;
