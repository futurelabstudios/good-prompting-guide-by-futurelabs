
import React from 'react';
import { Sparkles, ArrowDown, Trophy, Brain, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Ultra Modern Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-cyan-400/15 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Subtle Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl py-20 relative z-10">
        <div className="flex flex-col items-center text-center text-white">
          {/* Premium Badge */}
          <div className="group relative mb-8">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative inline-flex items-center gap-3 bg-slate-900/90 backdrop-blur-xl rounded-full px-8 py-4 border border-white/10">
              <div className="relative">
                <Sparkles className="h-5 w-5 text-yellow-400" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                Free Public Resource by Futurelab Studios
              </span>
            </div>
          </div>
          
          {/* Ultra Modern Title */}
          <div className="mb-12 space-y-4">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none">
              <span className="block bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                PROMPT
              </span>
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                ENGINEERING
              </span>
            </h1>
            <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-300">
              Made <span className="text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text">Simple</span>
            </div>
          </div>
          
          {/* Modern Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-16 max-w-5xl text-slate-300 leading-relaxed font-light">
            Master AI communication through our 
            <span className="font-semibold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text"> gamified learning system</span>.
            <br className="hidden md:block" />
            <span className="text-yellow-400 font-semibold">Zero jargon. Maximum results.</span>
          </p>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { icon: <Trophy className="h-5 w-5" />, text: "Gamified XP System", color: "from-yellow-400 to-orange-500" },
              { icon: <Brain className="h-5 w-5" />, text: "Expert Techniques", color: "from-purple-400 to-pink-500" },
              { icon: <Zap className="h-5 w-5" />, text: "Instant Results", color: "from-green-400 to-blue-500" },
              { icon: <Target className="h-5 w-5" />, text: "No BS Approach", color: "from-blue-400 to-cyan-500" }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300`}></div>
                <div className="relative flex items-center gap-3 bg-slate-900/80 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/10">
                  <span className="text-white">{feature.icon}</span>
                  <span className="font-semibold text-white text-sm">{feature.text}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row gap-6 mb-20">
            <Link 
              to="/prompts/1" 
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-5 rounded-2xl font-bold text-xl flex items-center gap-4 hover:scale-105 transition-all duration-300 shadow-2xl">
                <Trophy className="h-7 w-7 group-hover:rotate-12 transition-transform" />
                Start Your Journey
                <ArrowDown className="h-6 w-6 group-hover:animate-bounce" />
              </div>
            </Link>
            
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl text-white border border-white/20 px-10 py-5 rounded-2xl font-semibold text-xl hover:bg-slate-800/80 transition-all duration-300">
                Free Forever
              </div>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="text-center">
            <p className="text-slate-400 text-lg mb-6 font-light">Join thousands mastering AI communication</p>
            <div className="flex justify-center items-center gap-12 opacity-80">
              <div className="flex items-center gap-2">
                <div className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>
                <span className="text-slate-300 text-sm font-medium">5.0 Rating</span>
              </div>
              <div className="w-px h-6 bg-slate-600"></div>
              <div className="text-slate-300 text-sm font-medium">10,000+ Learners</div>
              <div className="w-px h-6 bg-slate-600"></div>
              <div className="text-slate-300 text-sm font-medium">Open Source</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modern Wave Transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 md:h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.05)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
            </linearGradient>
          </defs>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                fill="url(#waveGradient)" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
