
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="pt-20 md:pt-28 pb-16 md:pb-20 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Master AI Prompting
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Learn professional AI communication techniques with practical examples and hands-on exercises.
        </p>
        
        {/* CTA Button */}
        <div className="mb-12">
          <Link 
            to="/prompts/1" 
            className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors text-lg"
          >
            Start Learning
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
        
        {/* Simple Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div>
            <div className="text-3xl font-bold text-gray-900">18</div>
            <div className="text-gray-600">Lessons</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900">3</div>
            <div className="text-gray-600">Levels</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900">Free</div>
            <div className="text-gray-600">Access</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
