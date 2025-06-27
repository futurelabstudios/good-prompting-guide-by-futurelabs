
import React from 'react';
import { ArrowRight, BookOpen, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 text-sm font-medium text-gray-700 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Free Resource by Futurelab Studios
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 text-balance">
            Master Prompt Engineering
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 text-balance max-w-3xl mx-auto">
            Learn to communicate with AI effectively through clear, structured prompts. 
            No jargon, just practical techniques that work.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              to="/prompts/1" 
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Start Learning
              <ArrowRight className="h-4 w-4" />
            </Link>
            
            <div className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-medium">
              100% Free Forever
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900">12</div>
              <div className="text-sm text-gray-600">Techniques</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-600">Examples</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">1,000+</div>
              <div className="text-sm text-gray-600">Learners</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Structured Learning</h3>
              <p className="text-gray-600">Progressive lessons that build on each other, from basics to advanced techniques.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Practical Examples</h3>
              <p className="text-gray-600">Real-world examples showing what works and what doesn't in prompt engineering.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">For Everyone</h3>
              <p className="text-gray-600">No technical background required. Simple language, clear explanations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
