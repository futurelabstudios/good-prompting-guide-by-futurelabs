
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { ArrowRight, Clock } from 'lucide-react';
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
    { 
      id: 13, 
      title: "Prompt Injection Defense", 
      difficulty: "Expert",
      time: "18 min",
      description: "Protect your prompts from manipulation and maintain control"
    },
    { 
      id: 14, 
      title: "Multi-Modal Prompting", 
      difficulty: "Expert",
      time: "22 min",
      description: "Combine text, images, and data for richer AI interactions"
    },
    { 
      id: 15, 
      title: "Few-Shot Learning Mastery", 
      difficulty: "Expert",
      time: "16 min",
      description: "Teach AI through strategic examples and demonstrations"
    },
    { 
      id: 16, 
      title: "Prompt Optimization Metrics", 
      difficulty: "Expert",
      time: "20 min",
      description: "Measure and improve prompt performance systematically"
    },
    { 
      id: 17, 
      title: "Industry-Specific Patterns", 
      difficulty: "Master",
      time: "35 min",
      description: "Specialized prompting for business, creative, and technical domains"
    },
    { 
      id: 18, 
      title: "AI Collaboration Workflows", 
      difficulty: "Master",
      time: "28 min",
      description: "Design human-AI partnerships for complex projects"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-50 text-green-700 border-green-200';
      case 'Intermediate': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Advanced': return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Expert': return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'Master': return 'bg-red-50 text-red-700 border-red-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  // Group techniques by difficulty level
  const groupedTechniques = {
    'Beginner': promptTechniques.filter(t => t.difficulty === 'Beginner'),
    'Intermediate': promptTechniques.filter(t => t.difficulty === 'Intermediate'),
    'Advanced': promptTechniques.filter(t => t.difficulty === 'Advanced'),
    'Expert': promptTechniques.filter(t => t.difficulty === 'Expert'),
    'Master': promptTechniques.filter(t => t.difficulty === 'Master')
  };

  const sectionDescriptions = {
    'Beginner': 'Start here to learn the fundamentals of effective prompt engineering',
    'Intermediate': 'Build structured frameworks and advanced formatting techniques',
    'Advanced': 'Master psychological principles and technical optimization methods',
    'Expert': 'Develop specialized skills for complex AI interactions and security',
    'Master': 'Achieve professional-level expertise in AI collaboration'
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Hero />
        
        {/* Learning Path */}
        <div className="py-16 md:py-20 px-4 md:px-6 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete Learning Path
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Master prompt engineering through our structured curriculum - from basics to expert-level techniques
              </p>
            </div>

            {/* Skill Level Sections */}
            {Object.entries(groupedTechniques).map(([level, techniques]) => (
              <div key={level} className="mb-16 last:mb-0">
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-200">
                  {/* Section Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border mb-4 ${getDifficultyColor(level)}`}>
                      {level} Level
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      {level} Techniques
                    </h3>
                    <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                      {sectionDescriptions[level as keyof typeof sectionDescriptions]}
                    </p>
                  </div>
                  
                  {/* Lessons Grid */}
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    {techniques.map((technique) => (
                      <Link 
                        to={`/prompts/${technique.id}`} 
                        key={technique.id}
                        className="block group"
                      >
                        <div className="bg-gray-50 hover:bg-gray-100 p-6 rounded-xl transition-all duration-200 border border-gray-200 hover:border-gray-300 hover:shadow-sm">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-sm font-semibold text-gray-700 border border-gray-200">
                                {technique.id}
                              </div>
                              <div className="flex items-center gap-1 text-gray-500 text-sm">
                                <Clock className="h-4 w-4" />
                                {technique.time}
                              </div>
                            </div>
                            <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
                          </div>
                          
                          <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                            {technique.title}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {technique.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Quick Start Button for Each Section */}
                  <div className="mt-8 text-center">
                    <Link 
                      to={`/prompts/${techniques[0]?.id}`}
                      className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                    >
                      Start {level} Level
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-12 rounded-2xl text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Master AI Communication?
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-base md:text-lg">
                  Join thousands of professionals who've transformed their AI skills. Start your journey today.
                </p>
                <Link 
                  to="/prompts/1"
                  className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors text-base md:text-lg"
                >
                  Begin Learning
                  <ArrowRight className="h-5 w-5" />
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
