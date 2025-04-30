
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import BonusCard from './BonusCard';
import { Baby, Search, Clock, Building2, MessagesSquare, Sparkles } from 'lucide-react';

const BonusPromptCard: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20 px-4">
      <Card className="w-full max-w-4xl prompt-card">
        <CardContent className="p-8">
          <h3 className="text-3xl font-bold text-center mb-8">✨ Bonus Prompting Hacks</h3>
          
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
            <BonusCard 
              icon={<Baby className="h-5 w-5" />}
              title="ELI5"
              description="Ask it to &quot;Explain Like I&apos;m 5/10/PhD&quot; based on audience level."
            />
            <BonusCard 
              icon={<Search className="h-5 w-5" />}
              title="Ask What It Doesn't Know"
              description="Encourages self-checking and reduces hallucinations."
            />
            <BonusCard 
              icon={<Clock className="h-5 w-5" />}
              title='"Take your time"'
              description="Slows response, often improves reasoning."
            />
            <BonusCard 
              icon={<Building2 className="h-5 w-5" />}
              title="First Principles"
              description="Request bottom-up explanation, not surface summaries."
            />
            <BonusCard 
              icon={<MessagesSquare className="h-5 w-5" />}
              title="Treat It Like a Person"
              description="Use dialogue, not search queries."
            />
            <BonusCard 
              icon={<Sparkles className="h-5 w-5" />}
              title="Ask for a Second Opinion"
              description="Get multiple answers or versions."
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BonusPromptCard;
