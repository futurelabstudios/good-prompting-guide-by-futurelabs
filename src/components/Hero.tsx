
import React from 'react';
import { Sparkles, ArrowDown, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-700 to-blue-800">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-40 right-32 w-48 h-48 bg-pink-400/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-6xl py-20 relative z-10">
        <div className="flex flex-col items-center text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
            <Sparkles className="h-5 w-5 text-yellow-300" />
            <span className="text-sm font-semibold">Free Public Resource by Futurelab Studios</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Prompt Engineering
            </span>
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl text-yellow-300">
              Made Simple
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-4xl text-blue-100 leading-relaxed">
            Master the art of communicating with AI through our interactive, gamified learning experience. 
            <span className="text-yellow-300 font-semibold"> No jargon, just results.</span>
          </p>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl w-full">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🎮</div>
              <h3 className="font-bold text-lg mb-2">Gamified Learning</h3>
              <p className="text-blue-100 text-sm">Earn XP, unlock achievements, and track your progress</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="font-bold text-lg mb-2">Expert Techniques</h3>
              <p className="text-blue-100 text-sm">Best practices from top AI labs and researchers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-bold text-lg mb-2">Instant Results</h3>
              <p className="text-blue-100 text-sm">Apply techniques immediately and see the difference</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link 
              to="/prompts/1" 
              className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3 hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              <Trophy className="h-6 w-6 group-hover:rotate-12 transition-transform" />
              Start Your Journey
              <ArrowDown className="h-5 w-5 group-hover:animate-bounce" />
            </Link>
            <Link 
              to="/tools" 
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300"
            >
              Explore AI Tools
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="text-center">
            <p className="text-blue-200 text-sm mb-4">Trusted by learners worldwide</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-xs">⭐⭐⭐⭐⭐</div>
              <div className="text-xs">1000+ Students</div>
              <div className="text-xs">Free Forever</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-20 md:h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                fill="#FFFFFF" fillOpacity="0.1" />
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                fill="#FFFFFF" fillOpacity="0.05" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
