
import React from 'react';

interface BonusCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BonusCard: React.FC<BonusCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-accent/5 rounded-lg border border-accent/20 p-4 flex items-start gap-3 card-highlight">
      <div className="text-accent mt-1">{icon}</div>
      <div>
        <h4 className="font-semibold text-lg mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default BonusCard;
