
import React from 'react';

const Hero = () => {
  return (
    <div className="py-12 md:py-20 text-center">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text">Prompt Engineering Guide</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          AI Essentials for Market Research Professionals
        </p>
        <div className="bg-secondary/50 rounded-lg p-6 md:p-8">
          <p className="text-lg">
            This guide is tailored for researchers who want to work <strong>smartly with AI tools</strong> like ChatGPT. 
            It covers key prompt-writing techniques to extract better insights, speed up workflows, and reduce ambiguity when briefing AI.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
