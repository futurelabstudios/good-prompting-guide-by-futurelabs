
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center quantum-gradient-bg text-white">
      <div className="container mx-auto px-4 max-w-5xl py-20">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Prompt Engineering Guide
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl">
            AI Essentials for Market Research Professionals at Quantum Consumer Solutions
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 mb-12 max-w-3xl">
            <p className="text-lg">
              This guide is tailored for researchers who want to work <strong className="text-accent">smartly with AI tools</strong> like ChatGPT. 
              It covers key prompt-writing techniques to extract better insights, speed up workflows, and reduce ambiguity when briefing AI.
            </p>
          </div>
          
          <Link to="/prompts/1" className="group bg-white text-primary hover:bg-accent hover:text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300">
            Explore Techniques
            <ArrowDown className="h-5 w-5 group-hover:animate-bounce" />
          </Link>
        </div>
      </div>
      
      <div className="wave-bottom">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
