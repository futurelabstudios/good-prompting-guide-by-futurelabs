
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import GoldenRuleCard from './GoldenRuleCard';

const GoldenRulesPromptCard: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-8 px-3 sm:py-12 sm:px-4 pb-32 sm:pb-24">
      <Card className="w-full max-w-4xl prompt-card">
        <CardContent className="p-4 sm:p-6 lg:p-8">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent leading-tight">
            🧭 The 6 Golden Rules of AI Mastery
          </h3>
          
          <div className="border rounded-lg divide-y">
            <GoldenRuleCard 
              number={1}
              title="ELI5 - Explain Like I'm 5/10/PhD"
              description="Ask it to 'Explain Like I'm 5/10/PhD' based on audience level. This adjusts complexity perfectly for your target audience."
            />
            <GoldenRuleCard 
              number={2}
              title="Ask What It Doesn't Know"
              description="Encourages self-checking and reduces hallucinations. Always ask AI to identify its limitations and uncertainties."
            />
            <GoldenRuleCard 
              number={3}
              title="Take Your Time"
              description="Slows response, often improves reasoning. Adding 'take your time' leads to more thoughtful, detailed responses."
            />
            <GoldenRuleCard 
              number={4}
              title="First Principles Thinking"
              description="Request bottom-up explanation, not surface summaries. Start from fundamentals and build up to complex concepts."
            />
            <GoldenRuleCard 
              number={5}
              title="Treat It Like a Person"
              description="Use dialogue, not search queries. Natural conversation patterns work better than keyword-based commands."
            />
            <GoldenRuleCard 
              number={6}
              title="Ask for a Second Opinion"
              description="Get multiple answers or versions. Request different perspectives to ensure comprehensive, balanced solutions."
            />
          </div>
          
          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-base sm:text-lg text-muted-foreground italic px-2">
              "These six techniques will transform your AI interactions from basic queries to expert-level collaborations."
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GoldenRulesPromptCard;
