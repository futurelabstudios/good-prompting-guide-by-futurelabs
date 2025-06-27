
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Star, CheckCircle, X, Copy, ChevronDown, ChevronUp, Maximize2, Minimize2, Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [isHeaderCollapsed, setIsHeaderCollapsed] = useState(false);
  const [isExamplesCollapsed, setIsExamplesCollapsed] = useState(isMobile);
  const [isTipCollapsed, setIsTipCollapsed] = useState(isMobile);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  // Auto-collapse sections on mobile for space optimization
  useEffect(() => {
    if (isMobile) {
      setIsExamplesCollapsed(true);
      setIsTipCollapsed(true);
    }
  }, [isMobile]);

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

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(examples.good);
      toast({
        title: "✨ Copied!",
        description: "Prompt copied to clipboard",
        duration: 1500,
      });
    } catch (err) {
      toast({
        title: "❌ Copy failed",
        description: "Could not copy to clipboard",
        variant: "destructive",
        duration: 1500,
      });
    }
  };

  if (isMinimized) {
    return (
      <div className="fixed top-4 right-4 z-50 bg-white shadow-lg rounded-lg p-3 border">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center text-xs font-bold">
            {number}
          </div>
          <span className="text-sm font-medium truncate max-w-32">{title}</span>
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
    <div className={`${isFullscreen ? 'fixed inset-0 z-50 bg-white' : 'min-h-screen'} ${isMobile ? 'px-0' : 'px-2'} ${isMobile ? 'pb-24' : 'pb-32'}`}>
      <div className="container mx-auto max-w-6xl h-full">
        <Card className="bg-white shadow-sm border-0 overflow-hidden h-full flex flex-col">
          {/* Header */}
          <Collapsible open={!isHeaderCollapsed} onOpenChange={setIsHeaderCollapsed}>
            <div className="bg-gray-900 text-white">
              <div className="flex items-center justify-between p-2 sm:p-3">
                <CollapsibleTrigger className="flex items-center gap-2 hover:bg-white/10 rounded p-1 transition-colors flex-1 min-w-0">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                    <div className="w-7 h-7 sm:w-10 sm:h-10 bg-white/20 rounded-lg flex items-center justify-center text-sm sm:text-base font-bold flex-shrink-0">
                      {number}
                    </div>
                    <div className="text-white/80 text-base sm:text-xl flex-shrink-0">
                      {icon}
                    </div>
                    <h1 className="text-sm sm:text-xl lg:text-2xl font-bold truncate">{title}</h1>
                  </div>
                  {isHeaderCollapsed ? <ChevronDown className="h-4 w-4 flex-shrink-0" /> : <ChevronUp className="h-4 w-4 flex-shrink-0" />}
                </CollapsibleTrigger>
                
                <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0 ml-2">
                  {isMobile && (
                    <button
                      onClick={() => setIsMinimized(true)}
                      className="p-1 hover:bg-white/10 rounded transition-colors"
                      title="Minimize"
                    >
                      <EyeOff className="h-4 w-4" />
                    </button>
                  )}
                  <button
                    onClick={() => setIsFullscreen(!isFullscreen)}
                    className="p-1 hover:bg-white/10 rounded transition-colors"
                    title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                  >
                    {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                  </button>
                  <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(difficulty)} bg-white`}>
                    {isMobile ? difficulty.slice(0, 3) : difficulty}
                  </div>
                </div>
              </div>
              
              <CollapsibleContent>
                <div className="px-3 sm:px-4 pb-3 sm:pb-4">
                  <p className="text-sm sm:text-lg text-white/90 leading-relaxed">{description}</p>
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>

          <CardContent className="flex-1 p-2 sm:p-4 lg:p-6 space-y-3 sm:space-y-6 overflow-auto">
            {/* Examples Section */}
            <Collapsible open={!isExamplesCollapsed} onOpenChange={setIsExamplesCollapsed}>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-2 hover:bg-gray-50 rounded transition-colors">
                <h2 className="text-base sm:text-xl font-bold text-gray-900">
                  📊 Examples
                </h2>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 hidden sm:inline">Tap to expand</span>
                  {isExamplesCollapsed ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
                </div>
              </CollapsibleTrigger>
              
              <CollapsibleContent>
                <div className="mt-3 space-y-3 sm:space-y-4">
                  {/* Bad Example */}
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                        <X className="h-2 w-2 text-white" />
                      </div>
                      <h3 className="font-semibold text-red-800 text-xs sm:text-sm">❌ Ineffective</h3>
                    </div>
                    <div className="bg-red-100 border border-red-200 p-2 sm:p-3 rounded-lg">
                      <code className="text-red-800 text-xs font-mono leading-relaxed whitespace-pre-wrap break-words block">
                        {examples.bad}
                      </code>
                    </div>
                  </div>

                  {/* Good Example */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-2 w-2 text-white" />
                        </div>
                        <h3 className="font-semibold text-green-800 text-xs sm:text-sm">✅ Effective</h3>
                      </div>
                      <button
                        onClick={copyToClipboard}
                        className="flex items-center gap-1 px-2 py-1 bg-green-600 text-white text-xs font-medium rounded hover:bg-green-700 transition-colors active:scale-95"
                      >
                        <Copy className="h-3 w-3" />
                        <span className="hidden sm:inline">Copy</span>
                      </button>
                    </div>
                    <div className="bg-green-100 border border-green-200 p-2 sm:p-3 rounded-lg">
                      <code className="text-green-800 text-xs font-mono leading-relaxed whitespace-pre-wrap break-words block">
                        {examples.good}
                      </code>
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Pro Tip Section */}
            <Collapsible open={!isTipCollapsed} onOpenChange={setIsTipCollapsed}>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-2 hover:bg-gray-50 rounded transition-colors">
                <h3 className="font-bold text-sm sm:text-lg text-blue-900">
                  💡 Pro Tip
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 hidden sm:inline">Tap to expand</span>
                  {isTipCollapsed ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
                </div>
              </CollapsibleTrigger>
              
              <CollapsibleContent>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-2">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                    <div className="w-6 h-6 sm:w-10 sm:h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Star className="h-3 w-3 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <p className="text-blue-800 leading-relaxed text-xs sm:text-base">{tip}</p>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PromptCard;
