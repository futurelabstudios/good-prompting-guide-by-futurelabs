
import React from 'react';
import { ArrowRight, Terminal, Code, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="pt-20 md:pt-28 pb-16 md:pb-20 px-4 md:px-6 relative overflow-hidden">
      {/* Glitch Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-green-400 animate-ping"></div>
        <div className="absolute bottom-40 left-1/4 w-1 h-4 bg-purple-400 animate-pulse"></div>
        <div className="absolute top-60 right-1/3 w-3 h-1 bg-yellow-400 animate-ping"></div>
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        {/* Attribution */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 font-mono">
            A public good by{' '}
            <a 
              href="https://futurelabstudios.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-600 hover:text-cyan-700 underline decoration-dotted hover:decoration-solid transition-all"
            >
              Futurelab Studios
            </a>
          </p>
        </div>

        {/* Main Title with Glitch Effect */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 relative">
          <span className="bg-gradient-to-r from-gray-900 via-cyan-800 to-gray-900 bg-clip-text text-transparent">
            Master AI Prompting
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-transparent to-purple-400/20 animate-pulse blur-xl"></div>
        </h1>
        
        {/* Subtitle with Tech Styling */}
        <div className="mb-8 relative">
          <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-400 opacity-30"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-mono tracking-tight">
            <span className="text-cyan-600">//</span> Learn professional AI communication with{' '}
            <span className="bg-gray-100 px-2 py-1 rounded font-semibold text-gray-800">30 hands-on lessons</span>
          </p>
        </div>
        
        {/* CTA Button with Tech Styling */}
        <div className="mb-12">
          <Link 
            to="/prompts/1" 
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-4 rounded-lg font-medium hover:from-gray-800 hover:to-gray-700 transition-all duration-200 text-lg border border-gray-700 shadow-lg hover:shadow-xl group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Terminal className="h-5 w-5 text-cyan-400" />
            <span>Initialize Learning</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        {/* Tech Stats Grid */}
        <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative p-4 border border-gray-200 rounded-lg backdrop-blur-sm">
              <div className="flex items-center justify-center mb-2">
                <Code className="h-6 w-6 text-cyan-600 mr-2" />
                <div className="text-3xl font-bold text-gray-900 font-mono">30</div>
              </div>
              <div className="text-gray-600 text-sm font-mono">lessons</div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative p-4 border border-gray-200 rounded-lg backdrop-blur-sm">
              <div className="flex items-center justify-center mb-2">
                <Zap className="h-6 w-6 text-purple-600 mr-2" />
                <div className="text-3xl font-bold text-gray-900 font-mono">3</div>
              </div>
              <div className="text-gray-600 text-sm font-mono">levels</div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative p-4 border border-gray-200 rounded-lg backdrop-blur-sm">
              <div className="flex items-center justify-center mb-2">
                <Terminal className="h-6 w-6 text-green-600 mr-2" />
                <div className="text-3xl font-bold text-gray-900 font-mono">∞</div>
              </div>
              <div className="text-gray-600 text-sm font-mono">free</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
