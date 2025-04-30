
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import GoldenRuleCard from './GoldenRuleCard';

const GoldenRulesPromptCard: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20 px-4">
      <Card className="w-full max-w-3xl prompt-card">
        <CardContent className="p-8">
          <h3 className="text-3xl font-bold text-center mb-8">🧭 The 4 Golden Rules of AI Use</h3>
          
          <div className="border rounded-lg divide-y">
            <GoldenRuleCard 
              number={1}
              title="Invite AI into everything"
              description="Brainstorming, writing, analysis, admin – if it can be typed, it can be AI-assisted."
            />
            <GoldenRuleCard 
              number={2}
              title="Maintain human supervision"
              description="Verify, edit, and contextualize all AI-generated content – you're the expert on context."
            />
            <GoldenRuleCard 
              number={3}
              title="Treat AI like a person"
              description="Use clear instructions, appropriate tone, and set realistic expectations."
            />
            <GoldenRuleCard 
              number={4}
              title="Assume this is the worst AI you'll ever use"
              description="The future holds more powerful, specialized tools – what you learn now will transfer."
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GoldenRulesPromptCard;
