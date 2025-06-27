
import React from 'react';
import { ArrowRight, BookOpen, Users, Zap, Brain, Target, Award } from 'lucide-react';
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
            Master Professional AI Communication
          </h1>
          
          {/* Subtitle */}
          <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 text-balance max-w-3xl mx-auto px-2">
            From basic prompts to expert-level AI collaboration. Learn the techniques used by professionals to achieve consistent, high-quality results from AI systems.
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
            
            <Link 
              to="/prompts/13" 
              className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm md:text-base"
            >
              Jump to Advanced
              <Brain className="h-4 w-4" />
            </Link>
          </div>
          
          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto text-center">
            <div>
              <div className="text-xl md:text-2xl font-bold text-gray-900">18</div>
              <div className="text-xs md:text-sm text-gray-600">Techniques</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold text-gray-900">100+</div>
              <div className="text-xs md:text-sm text-gray-600">Examples</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold text-gray-900">6+</div>
              <div className="text-xs md:text-sm text-gray-600">Hours</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold text-gray-900">5</div>
              <div className="text-xs md:text-sm text-gray-600">Skill Levels</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Features Section */}
      <div className="bg-gray-50 py-12 md:py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Complete AI Mastery Path</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">From fundamentals to expert-level techniques used by AI professionals worldwide</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
            <div className="text-center px-2">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Progressive Learning</h3>
              <p className="text-gray-600 text-sm md:text-base">18 structured lessons from basic prompts to advanced AI collaboration workflows.</p>
            </div>
            
            <div className="text-center px-2">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Techniques</h3>
              <p className="text-gray-600 text-sm md:text-base">Advanced strategies like prompt injection defense, multi-modal prompting, and optimization metrics.</p>
            </div>
            
            <div className="text-center px-2">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Results</h3>
              <p className="text-gray-600 text-sm md:text-base">Industry-specific patterns and frameworks used by consultants and AI specialists.</p>
            </div>
          </div>

          {/* Skill Level Breakdown */}
          <div className="bg-white rounded-xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-center mb-6">What You'll Master</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="w-10 h-10 bg-green-100 text-green-700 rounded-lg flex items-center justify-center mx-auto mb-2 text-sm font-bold">2</div>
                <div className="text-sm font-medium text-gray-900">Beginner</div>
                <div className="text-xs text-gray-600">Fundamentals</div>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center mx-auto mb-2 text-sm font-bold">3</div>
                <div className="text-sm font-medium text-gray-900">Intermediate</div>
                <div className="text-xs text-gray-600">Frameworks</div>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-purple-100 text-purple-700 rounded-lg flex items-center justify-center mx-auto mb-2 text-sm font-bold">5</div>
                <div className="text-sm font-medium text-gray-900">Advanced</div>
                <div className="text-xs text-gray-600">Psychology & Tech</div>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-orange-100 text-orange-700 rounded-lg flex items-center justify-center mx-auto mb-2 text-sm font-bold">6</div>
                <div className="text-sm font-medium text-gray-900">Expert</div>
                <div className="text-xs text-gray-600">Specialization</div>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-red-100 text-red-700 rounded-lg flex items-center justify-center mx-auto mb-2 text-sm font-bold">2</div>
                <div className="text-sm font-medium text-gray-900">Master</div>
                <div className="text-xs text-gray-600">Professional</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
