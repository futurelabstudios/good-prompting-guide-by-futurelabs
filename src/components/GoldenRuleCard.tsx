
import React from 'react';

interface GoldenRuleCardProps {
  number: number;
  title: string;
  description: string;
}

const GoldenRuleCard: React.FC<GoldenRuleCardProps> = ({ number, title, description }) => {
  return (
    <div className="flex items-start gap-4 p-4 border-b last:border-b-0">
      <div className="h-8 w-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-600 font-semibold text-sm">
        {number}
      </div>
      <div>
        <h4 className="font-medium mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default GoldenRuleCard;
