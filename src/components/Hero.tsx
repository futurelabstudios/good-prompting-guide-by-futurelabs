
import React from 'react';
import { ArrowRight, BookOpen, Users, Zap } from 'lucide-react';
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
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 text-balance px-2">
            Master Prompt Engineering
          </h1>
          
          {/* Subtitle */}
          <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 text-balance max-w-3xl mx-auto px-2">
            Learn to communicate with AI effectively through clear, structured prompts. 
            No jargon, just practical techniques that work.
          </p>

          {/* Futurelab Studios mention */}
          <p className="text-xs md:text-sm text-gray-500 mb-6 md:mb-8 px-2">
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
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-12 md:mb-16 px-4">
            <Link 
              to="/prompts/1" 
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm md:text-base"
            >
              Start Learning
              <ArrowRight className="h-4 w-4" />
            </Link>
            
            <div className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium text-sm md:text-base">
              100% Free Forever
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-xs md:max-w-md mx-auto text-center">
            <div>
              <div className="text-xl md:text-2xl font-bold text-gray-900">12</div>
              <div className="text-xs md:text-sm text-gray-600">Techniques</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold text-gray-900">50+</div>
              <div className="text-xs md:text-sm text-gray-600">Examples</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold text-gray-900">1,000+</div>
              <div className="text-xs md:text-sm text-gray-600">Learners</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="bg-gray-50 py-12 md:py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center px-2">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Structured Learning</h3>
              <p className="text-gray-600 text-sm md:text-base">Progressive lessons that build on each other, from basics to advanced techniques.</p>
            </div>
            
            <div className="text-center px-2">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Practical Examples</h3>
              <p className="text-gray-600 text-sm md:text-base">Real-world examples showing what works and what doesn't in prompt engineering.</p>
            </div>
            
            <div className="text-center px-2">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">For Everyone</h3>
              <p className="text-gray-600 text-sm md:text-base">No technical background required. Simple language, clear explanations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
