
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Trophy, Target, Zap, BookOpen, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const promptTechniques = [
    { 
      id: 1, 
      title: "Be Specific, Not Vague", 
      difficulty: "Beginner",
      xp: 50,
      icon: <Target className="h-5 w-5" />
    },
    { 
      id: 2, 
      title: "Structure with Tags", 
      difficulty: "Beginner",
      xp: 75,
      icon: <BookOpen className="h-5 w-5" />
    },
    { 
      id: 3, 
      title: "Role-Data-Task Framework", 
      difficulty: "Intermediate",
      xp: 100,
      icon: <Users className="h-5 w-5" />
    },
    { 
      id: 4, 
      title: "Show Output Format", 
      difficulty: "Intermediate",
      xp: 100,
      icon: <Award className="h-5 w-5" />
    },
    { 
      id: 5, 
      title: "Chain Tasks Step-by-Step", 
      difficulty: "Intermediate",
      xp: 125,
      icon: <Zap className="h-5 w-5" />
    },
    { 
      id: 6, 
      title: "Match Your Audience's Tone", 
      difficulty: "Advanced",
      xp: 150,
      icon: <Users className="h-5 w-5" />
    },
    { 
      id: 7, 
      title: "Use Positive Language", 
      difficulty: "Advanced",
      xp: 150,
      icon: <Trophy className="h-5 w-5" />
    },
    { 
      id: 8, 
      title: "Pro Tips & Power Moves", 
      difficulty: "Expert",
      xp: 200,
      icon: <Zap className="h-5 w-5" />
    },
    { 
      id: 9, 
      title: "The 4 Golden Rules", 
      difficulty: "Master",
      xp: 250,
      icon: <Trophy className="h-5 w-5" />
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Advanced': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Expert': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Master': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const totalXP = promptTechniques.reduce((sum, technique) => sum + technique.xp, 0);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Header />
      
      <main className="flex-1 pt-20">
        <Hero />
        
        {/* Stats Section */}
        <div className="bg-white/80 backdrop-blur-sm py-12 border-y border-blue-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">{promptTechniques.length}</div>
                <div className="text-sm text-blue-700">Techniques</div>
              </div>
              <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                <div className="text-2xl font-bold text-purple-600">{totalXP}</div>
                <div className="text-sm text-purple-700">Total XP</div>
              </div>
              <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                <div className="text-2xl font-bold text-green-600">5</div>
                <div className="text-sm text-green-700">Difficulty Levels</div>
              </div>
              <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                <div className="text-2xl font-bold text-orange-600">100+</div>
                <div className="text-sm text-orange-700">Examples</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Learning Path Section */}
        <div className="container mx-auto px-4 max-w-6xl py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Your Learning Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Master prompt engineering through our gamified learning path. Earn XP, unlock achievements, and become an AI communication expert!
            </p>
          </div>

          <div className="grid gap-6 md:gap-8">
            {promptTechniques.map((technique, index) => (
              <Link 
                to={`/prompts/${technique.id}`} 
                key={technique.id}
                className="group relative"
              >
                <div className="p-6 md:p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border border-gray-200/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 hover:border-blue-300/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      {/* Progress Indicator */}
                      <div className="flex flex-col items-center">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {technique.id}
                        </div>
                        {index < promptTechniques.length - 1 && (
                          <div className="w-0.5 h-8 bg-gradient-to-b from-blue-300 to-purple-300 mt-4"></div>
                        )}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-blue-600">{technique.icon}</span>
                          <h3 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                            {technique.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(technique.difficulty)}`}>
                            {technique.difficulty}
                          </span>
                          <div className="flex items-center gap-2 text-amber-600">
                            <Award className="h-4 w-4" />
                            <span className="font-semibold">{technique.xp} XP</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className="text-blue-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Begin Your Journey?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Start with the basics and work your way up to master-level techniques. Each lesson builds on the previous one!
              </p>
              <Link 
                to="/prompts/1"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
              >
                <Trophy className="h-5 w-5" />
                Start Learning Now
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
