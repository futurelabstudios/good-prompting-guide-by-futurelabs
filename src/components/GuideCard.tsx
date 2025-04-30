
import React from 'react';
import { cn } from '@/lib/utils';

interface GuideCardProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  examples?: {
    bad?: string;
    good?: string;
  };
  tip?: string;
  className?: string;
}

const GuideCard: React.FC<GuideCardProps> = ({
  number,
  icon,
  title,
  description,
  examples,
  tip,
  className
}) => {
  return (
    <div className={cn("bg-card rounded-lg border p-6 card-highlight", className)}>
      <div className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
          {number}
        </div>
        <div className="flex-1">
          <div className="flex items-center mb-2 gap-2">
            <span className="text-primary">{icon}</span>
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
          <p className="text-muted-foreground mb-4">{description}</p>
          
          {examples && (
            <div className="space-y-2 mb-4">
              {examples.bad && (
                <div className="flex items-start gap-2">
                  <div className="min-w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-500 text-sm">❌</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{examples.bad}</p>
                </div>
              )}
              
              {examples.good && (
                <div className="flex items-start gap-2">
                  <div className="min-w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center">
                    <span className="text-green-500 text-sm">✅</span>
                  </div>
                  <p className="text-sm">{examples.good}</p>
                </div>
              )}
            </div>
          )}
          
          {tip && (
            <div className="bg-secondary rounded-md p-3 text-sm">
              <span className="font-semibold">💡 Tip:</span> {tip}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GuideCard;
