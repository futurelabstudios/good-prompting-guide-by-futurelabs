
import React from 'react';

interface GoldenRuleCardProps {
  number: number;
  title: string;
  description: string;
}

const GoldenRuleCard: React.FC<GoldenRuleCardProps> = ({ number, title, description }) => {
  return (
    <div className="p-4 sm:p-6 hover:bg-gray-50 transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
        <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg flex-shrink-0">
          {number}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-base sm:text-lg text-gray-900 mb-2 leading-tight">
            {title}
          </h4>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoldenRuleCard;
