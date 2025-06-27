
import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="pt-20 md:pt-24 pb-12 md:pb-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-gray-700 mb-6 md:mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Free Resource by Futurelab Studios
          </div>
          
          {/* Main Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 text-balance px-2">
            Master Professional AI Communication
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 md:mb-8 text-balance max-w-3xl mx-auto px-2">
            From basic prompts to expert-level AI collaboration. Learn the techniques used by professionals to achieve consistent, high-quality results from AI systems.
          </p>

          {/* Futurelab Studios mention */}
          <p className="text-sm md:text-base text-gray-500 mb-8 md:mb-12 px-2">
            Created by{' '}
            <a 
              href="https://futurelabstudios.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-700 font-medium transition-colors underline"
            >
              Futurelab Studios
            </a>
          </p>
          
          {/* CTA Button */}
          <div className="mb-12 md:mb-16">
            <Link 
              to="/prompts/1" 
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 md:px-10 py-4 md:py-5 rounded-lg font-medium hover:bg-gray-800 transition-colors text-base md:text-lg"
            >
              Start Learning
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-2xl mx-auto text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900">18</div>
              <div className="text-sm md:text-base text-gray-600">Lessons</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900">6+</div>
              <div className="text-sm md:text-base text-gray-600">Hours</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900">100+</div>
              <div className="text-sm md:text-base text-gray-600">Examples</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900">5</div>
              <div className="text-sm md:text-base text-gray-600">Levels</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
