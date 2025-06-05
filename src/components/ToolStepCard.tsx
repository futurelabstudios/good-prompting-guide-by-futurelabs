
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Tool {
  name: string;
  url: string;
}

interface ToolStepCardProps {
  step: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  tools: Tool[];
  isEven: boolean;
}

const ToolStepCard: React.FC<ToolStepCardProps> = ({ 
  step, 
  title, 
  icon, 
  description, 
  tools, 
  isEven 
}) => {
  return (
    <div className={`flex flex-col lg:flex-row items-center gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
      {/* Step Info */}
      <div className="lg:w-1/3 text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
          <div className="prompt-number flex-shrink-0">
            {step}
          </div>
          <div className="text-primary">
            {icon}
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>

      {/* Tools Grid */}
      <div className="lg:w-2/3">
        <div className="grid sm:grid-cols-2 gap-4">
          {tools.map((tool, index) => (
            <a
              key={index}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-lg border border-secondary/20 p-6 hover:shadow-lg hover:border-primary/30 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                  {tool.name}
                </h4>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolStepCard;
