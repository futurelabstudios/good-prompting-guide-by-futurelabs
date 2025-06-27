
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronUp, Maximize2, Minimize2, Eye, EyeOff } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useIsMobile } from '@/hooks/use-mobile';
import GoldenRuleCard from './GoldenRuleCard';

const GoldenRulesPromptCard: React.FC = () => {
  const isMobile = useIsMobile();
  const [isHeaderCollapsed, setIsHeaderCollapsed] = useState(false);
  const [isRulesCollapsed, setIsRulesCollapsed] = useState(isMobile);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  if (isMinimized) {
    return (
      <div className="fixed top-4 right-4 z-50 bg-white shadow-lg rounded-lg p-3 border">
        <div className="flex items-center gap-2">
          <span className="text-xl">🧭</span>
          <span className="text-sm font-medium">Golden Rules</span>
          <button
            onClick={() => setIsMinimized(false)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <Eye className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`${isFullscreen ? 'fixed inset-0 z-50 bg-white' : 'min-h-screen'} flex items-center justify-center ${isMobile ? 'px-0 pb-24' : 'py-4 px-2 pb-32'}`}>
      <Card className="w-full max-w-6xl prompt-card h-full flex flex-col">
        <CardContent className="flex-1 p-2 sm:p-4 lg:p-6 overflow-auto">
          {/* Header */}
          <Collapsible open={!isHeaderCollapsed} onOpenChange={setIsHeaderCollapsed}>
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <CollapsibleTrigger className="flex items-center gap-2 hover:bg-gray-50 rounded p-2 transition-colors flex-1 min-w-0">
                <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent leading-tight">
                  🧭 The 6 Golden Rules of AI Mastery
                </h3>
                {isHeaderCollapsed ? <ChevronDown className="h-4 w-4 flex-shrink-0" /> : <ChevronUp className="h-4 w-4 flex-shrink-0" />}
              </CollapsibleTrigger>
              
              <div className="flex items-center gap-1 flex-shrink-0 ml-2">
                {isMobile && (
                  <button
                    onClick={() => setIsMinimized(true)}
                    className="p-2 hover:bg-gray-100 rounded transition-colors"
                    title="Minimize"
                  >
                    <EyeOff className="h-4 w-4" />
                  </button>
                )}
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="p-2 hover:bg-gray-100 rounded transition-colors"
                  title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                >
                  {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                </button>
              </div>
            </div>
            
            <CollapsibleContent>
              <div className="mb-4 sm:mb-6 text-center">
                <p className="text-xs sm:text-base text-muted-foreground italic px-2">
                  "Master these six techniques to transform your AI interactions from basic queries to expert-level collaborations."
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>
          
          {/* Rules */}
          <Collapsible open={!isRulesCollapsed} onOpenChange={setIsRulesCollapsed}>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-2 hover:bg-gray-50 rounded transition-colors mb-3 sm:mb-4">
              <h4 className="text-base sm:text-lg font-semibold text-gray-800">📋 The Rules</h4>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500 hidden sm:inline">Tap to expand</span>
                {isRulesCollapsed ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
              </div>
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
          
          <div className="mt-4 sm:mt-8 text-center">
            <p className="text-sm sm:text-lg text-muted-foreground italic px-2">
              "These six techniques will transform your AI interactions from basic queries to expert-level collaborations."
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GoldenRulesPromptCard;
