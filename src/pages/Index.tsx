
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { ArrowRight, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const promptTechniques = [
    { 
      id: 1, 
      title: "Be Specific, Not Vague", 
      difficulty: "Beginner",
      time: "5 min",
      description: "Learn why specificity is the foundation of effective prompts"
    },
    { 
      id: 2, 
      title: "Structure with Tags", 
      difficulty: "Beginner",
      time: "7 min",
      description: "Organize your prompts using XML-style tags for clarity"
    },
    { 
      id: 3, 
      title: "Role-Data-Task Framework", 
      difficulty: "Intermediate",
      time: "10 min",
      description: "The three-part structure that professionals use"
    },
    { 
      id: 4, 
      title: "Show Output Format", 
      difficulty: "Intermediate",
      time: "8 min",
      description: "Get consistent results by showing exactly what you want"
    },
    { 
      id: 5, 
      title: "Chain Tasks Step-by-Step", 
      difficulty: "Intermediate",
      time: "12 min",
      description: "Break complex requests into manageable sequences"
    },
    { 
      id: 6, 
      title: "Match Your Audience's Tone", 
      difficulty: "Advanced",
      time: "10 min",
      description: "How your tone shapes AI responses"
    },
    { 
      id: 7, 
      title: "Use Positive Language", 
      difficulty: "Advanced",
      time: "8 min",
      description: "Why positive instructions work better than restrictions"
    },
    { 
      id: 8, 
      title: "Context Window Management", 
      difficulty: "Advanced",
      time: "15 min",
      description: "Maximize AI memory and maintain conversation flow"
    },
    { 
      id: 9, 
      title: "Error Recovery Techniques", 
      difficulty: "Advanced",
      time: "12 min",
      description: "What to do when AI misunderstands your request"
    },
    { 
      id: 10, 
      title: "Template and Pattern Libraries", 
      difficulty: "Expert",
      time: "20 min",
      description: "Build reusable prompt templates for common tasks"
    },
    { 
      id: 11, 
      title: "Advanced Reasoning Techniques", 
      difficulty: "Expert",
      time: "25 min",
      description: "Chain-of-thought, tree-of-thought, and reasoning frameworks"
    },
    { 
      id: 12, 
      title: "The Complete Mastery Guide", 
      difficulty: "Master",
      time: "30 min",
      description: "Putting it all together with expert-level strategies"
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700';
      case 'Intermediate': return 'bg-blue-100 text-blue-700';
      case 'Advanced': return 'bg-purple-100 text-purple-700';
      case 'Expert': return 'bg-orange-100 text-orange-700';
      case 'Master': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Hero />
        
        {/* Learning Path */}
        <div className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Your Learning Path
              </h2>
              <p className="text-lg text-gray-600">
                Master prompt engineering through our structured curriculum
              </p>
            </div>

            <div className="space-y-4">
              {promptTechniques.map((technique, index) => (
                <Link 
                  to={`/prompts/${technique.id}`} 
                  key={technique.id}
                  className="block group"
                >
                  <div className="minimal-card p-6 group-hover:shadow-lg transition-all duration-200">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-sm font-medium text-gray-700">
                            {technique.id}
                          </div>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(technique.difficulty)}`}>
                            {technique.difficulty}
                          </span>
                          <div className="flex items-center gap-1 text-gray-500 text-sm">
                            <Clock className="h-3 w-3" />
                            {technique.time}
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
                          {technique.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {technique.description}
                        </p>
                      </div>
                      
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Master AI Communication?
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Join thousands of learners who've improved their AI interactions through structured learning.
                </p>
                <Link 
                  to="/prompts/1"
                  className="minimal-button-primary px-8 py-3"
                >
                  Start Your Journey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
