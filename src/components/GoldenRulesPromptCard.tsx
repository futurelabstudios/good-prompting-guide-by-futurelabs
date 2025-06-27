
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronUp, Maximize2, Minimize2 } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import GoldenRuleCard from './GoldenRuleCard';

const GoldenRulesPromptCard: React.FC = () => {
  const [isHeaderCollapsed, setIsHeaderCollapsed] = useState(false);
  const [isRulesCollapsed, setIsRulesCollapsed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className={`${isFullscreen ? 'fixed inset-0 z-50 bg-white' : 'min-h-screen'} flex items-center justify-center py-4 px-2 sm:py-8 sm:px-3 pb-32 sm:pb-24`}>
      <Card className="w-full max-w-6xl prompt-card h-full flex flex-col">
        <CardContent className="flex-1 p-3 sm:p-4 lg:p-6 overflow-auto">
          {/* Collapsible Header */}
          <Collapsible open={!isHeaderCollapsed} onOpenChange={setIsHeaderCollapsed}>
            <div className="flex items-center justify-between mb-4">
              <CollapsibleTrigger className="flex items-center gap-2 hover:bg-gray-50 rounded p-2 transition-colors">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent leading-tight">
                  🧭 The 6 Golden Rules of AI Mastery
                </h3>
                {isHeaderCollapsed ? <ChevronDown className="h-5 w-5" /> : <ChevronUp className="h-5 w-5" />}
              </CollapsibleTrigger>
              
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-2 hover:bg-gray-100 rounded transition-colors"
                title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
              >
                {isFullscreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
              </button>
            </div>
            
            <CollapsibleContent>
              <div className="mb-6 text-center">
                <p className="text-sm sm:text-base text-muted-foreground italic px-2">
                  "Master these six techniques to transform your AI interactions from basic queries to expert-level collaborations."
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          {/* Collapsible Rules */}
          <Collapsible open={!isRulesCollapsed} onOpenChange={setIsRulesCollapsed}>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-2 hover:bg-gray-50 rounded transition-colors mb-4">
              <h4 className="text-lg font-semibold text-gray-800">📋 The Rules</h4>
              {isRulesCollapsed ? <ChevronDown className="h-5 w-5" /> : <ChevronUp className="h-5 w-5" />}
            </CollapsibleTrigger>
            
            <CollapsibleContent>
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
            </CollapsibleContent>
          </Collapsible>
          
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
