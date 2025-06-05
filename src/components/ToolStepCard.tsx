
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
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#1e40af] to-[#7c3aed] text-white p-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center justify-center h-14 w-14 rounded-full bg-white/20 backdrop-blur-sm">
            <span className="text-2xl font-bold">{step}</span>
          </div>
          <div className="text-white/90">
            {icon}
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-white/90 text-lg">{description}</p>
      </div>

      {/* Tools Section */}
      <div className="p-8">
        <h4 className="text-lg font-semibold text-gray-900 mb-6">Recommended Tools</h4>
        <div className="grid gap-4">
          {tools.map((tool, index) => (
            <a
              key={index}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 bg-gray-50 hover:bg-gradient-to-r hover:from-[#1e40af]/5 hover:to-[#7c3aed]/5 rounded-xl border border-gray-200 hover:border-[#1e40af]/30 transition-all duration-200"
            >
              <span className="font-medium text-gray-900 group-hover:text-[#1e40af] transition-colors">
                {tool.name}
              </span>
              <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-[#1e40af] transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolStepCard;
