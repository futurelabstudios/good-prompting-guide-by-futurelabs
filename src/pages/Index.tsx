
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { ArrowRight, Clock, Star, Brain, Zap, Target, Users, Award, Lightbulb, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const promptTechniques = [
    { 
      id: 1, 
      title: "Be Specific, Not Vague", 
      difficulty: "Beginner",
      time: "5 min",
      description: "Learn why specificity is the foundation of effective prompts",
      category: "fundamentals"
    },
    { 
      id: 2, 
      title: "Structure with Tags", 
      difficulty: "Beginner",
      time: "7 min",
      description: "Organize your prompts using XML-style tags for clarity",
      category: "fundamentals"
    },
    { 
      id: 3, 
      title: "Role-Data-Task Framework", 
      difficulty: "Intermediate",
      time: "10 min",
      description: "The three-part structure that professionals use",
      category: "frameworks"
    },
    { 
      id: 4, 
      title: "Show Output Format", 
      difficulty: "Intermediate",
      time: "8 min",
      description: "Get consistent results by showing exactly what you want",
      category: "formatting"
    },
    { 
      id: 5, 
      title: "Chain Tasks Step-by-Step", 
      difficulty: "Intermediate",
      time: "12 min",
      description: "Break complex requests into manageable sequences",
      category: "workflow"
    },
    { 
      id: 6, 
      title: "Match Your Audience's Tone", 
      difficulty: "Advanced",
      time: "10 min",
      description: "How your tone shapes AI responses",
      category: "psychology"
    },
    { 
      id: 7, 
      title: "Use Positive Language", 
      difficulty: "Advanced",
      time: "8 min",
      description: "Why positive instructions work better than restrictions",
      category: "psychology"
    },
    { 
      id: 8, 
      title: "Context Window Management", 
      difficulty: "Advanced",
      time: "15 min",
      description: "Maximize AI memory and maintain conversation flow",
      category: "technical"
    },
    { 
      id: 9, 
      title: "Error Recovery Techniques", 
      difficulty: "Advanced",
      time: "12 min",
      description: "What to do when AI misunderstands your request",
      category: "troubleshooting"
    },
    { 
      id: 10, 
      title: "Template and Pattern Libraries", 
      difficulty: "Expert",
      time: "20 min",
      description: "Build reusable prompt templates for common tasks",
      category: "automation"
    },
    { 
      id: 11, 
      title: "Advanced Reasoning Techniques", 
      difficulty: "Expert",
      time: "25 min",
      description: "Chain-of-thought, tree-of-thought, and reasoning frameworks",
      category: "reasoning"
    },
    { 
      id: 12, 
      title: "The Complete Mastery Guide", 
      difficulty: "Master",
      time: "30 min",
      description: "Putting it all together with expert-level strategies",
      category: "mastery"
    },
    { 
      id: 13, 
      title: "Prompt Injection Defense", 
      difficulty: "Expert",
      time: "18 min",
      description: "Protect your prompts from manipulation and maintain control",
      category: "security"
    },
    { 
      id: 14, 
      title: "Multi-Modal Prompting", 
      difficulty: "Expert",
      time: "22 min",
      description: "Combine text, images, and data for richer AI interactions",
      category: "advanced"
    },
    { 
      id: 15, 
      title: "Few-Shot Learning Mastery", 
      difficulty: "Expert",
      time: "16 min",
      description: "Teach AI through strategic examples and demonstrations",
      category: "learning"
    },
    { 
      id: 16, 
      title: "Prompt Optimization Metrics", 
      difficulty: "Expert",
      time: "20 min",
      description: "Measure and improve prompt performance systematically",
      category: "optimization"
    },
    { 
      id: 17, 
      title: "Industry-Specific Patterns", 
      difficulty: "Master",
      time: "35 min",
      description: "Specialized prompting for business, creative, and technical domains",
      category: "specialization"
    },
    { 
      id: 18, 
      title: "AI Collaboration Workflows", 
      difficulty: "Master",
      time: "28 min",
      description: "Design human-AI partnerships for complex projects",
      category: "collaboration"
    }
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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'fundamentals': return <Target className="h-3 w-3" />;
      case 'frameworks': return <Users className="h-3 w-3" />;
      case 'formatting': return <Award className="h-3 w-3" />;
      case 'workflow': return <Zap className="h-3 w-3" />;
      case 'psychology': return <Brain className="h-3 w-3" />;
      case 'technical': return <Star className="h-3 w-3" />;
      case 'troubleshooting': return <TrendingUp className="h-3 w-3" />;
      case 'automation': return <Target className="h-3 w-3" />;
      case 'reasoning': return <Lightbulb className="h-3 w-3" />;
      case 'mastery': return <Award className="h-3 w-3" />;
      case 'security': return <Star className="h-3 w-3" />;
      case 'advanced': return <Brain className="h-3 w-3" />;
      case 'learning': return <Lightbulb className="h-3 w-3" />;
      case 'optimization': return <TrendingUp className="h-3 w-3" />;
      case 'specialization': return <Users className="h-3 w-3" />;
      case 'collaboration': return <Zap className="h-3 w-3" />;
      default: return <Star className="h-3 w-3" />;
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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Hero />
        
        {/* Learning Path */}
        <div className="py-12 md:py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-2">
                Your Complete Learning Journey
              </h2>
              <p className="text-base md:text-lg text-gray-600 px-2 mb-6">
                Master prompt engineering through our structured curriculum - from basics to expert-level techniques
              </p>
              
              {/* Progress Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-lg font-bold text-gray-900">{promptTechniques.length}</div>
                  <div className="text-xs text-gray-600">Total Lessons</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-lg font-bold text-gray-900">6+</div>
                  <div className="text-xs text-gray-600">Hours Content</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-lg font-bold text-gray-900">100+</div>
                  <div className="text-xs text-gray-600">Real Examples</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-lg font-bold text-gray-900">5</div>
                  <div className="text-xs text-gray-600">Skill Levels</div>
                </div>
              </div>
            </div>

            {/* Grouped Lessons */}
            {Object.entries(groupedTechniques).map(([level, techniques]) => (
              <div key={level} className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{level} Level</h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(level)}`}>
                    {techniques.length} lessons
                  </span>
                </div>
                
                <div className="space-y-3">
                  {techniques.map((technique) => (
                    <Link 
                      to={`/prompts/${technique.id}`} 
                      key={technique.id}
                      className="block group"
                    >
                      <div className="minimal-card p-4 md:p-6 group-hover:shadow-lg transition-all duration-200">
                        <div className="flex items-start justify-between">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 md:gap-3 mb-2 flex-wrap">
                              <div className="w-7 h-7 md:w-8 md:h-8 bg-gray-100 rounded-lg flex items-center justify-center text-xs md:text-sm font-medium text-gray-700 shrink-0">
                                {technique.id}
                              </div>
                              <div className="flex items-center gap-1 text-gray-500 text-xs">
                                {getCategoryIcon(technique.category)}
                                <span className="capitalize">{technique.category}</span>
                              </div>
                              <div className="flex items-center gap-1 text-gray-500 text-xs md:text-sm">
                                <Clock className="h-3 w-3" />
                                {technique.time}
                              </div>
                            </div>
                            
                            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
                              {technique.title}
                            </h3>
                            <p className="text-gray-600 text-xs md:text-sm pr-2">
                              {technique.description}
                            </p>
                          </div>
                          
                          <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Advanced Features Section */}
            <div className="mt-16 bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl text-white">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-3">Advanced AI Communication</h3>
                <p className="text-gray-300">Master professional-grade techniques used by AI experts worldwide</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Brain className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Cognitive Frameworks</h4>
                  <p className="text-sm text-gray-300">Learn how AI processes information and leverage cognitive science principles</p>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Target className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Precision Engineering</h4>
                  <p className="text-sm text-gray-300">Craft prompts with surgical precision for consistent, high-quality outputs</p>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Workflow Integration</h4>
                  <p className="text-sm text-gray-300">Build AI into your daily processes for 10x productivity gains</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12 md:mt-16 text-center">
              <div className="bg-gray-50 p-6 md:p-8 rounded-xl">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 px-2">
                  Ready to Transform Your AI Skills?
                </h3>
                <p className="text-gray-600 mb-4 md:mb-6 max-w-2xl mx-auto text-sm md:text-base px-2">
                  Join thousands of professionals who've mastered AI communication. Start with the fundamentals and progress to expert-level techniques.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link 
                    to="/prompts/1"
                    className="minimal-button-primary px-6 md:px-8 py-2 md:py-3 text-sm md:text-base"
                  >
                    Begin Your Journey
                  </Link>
                  <Link 
                    to="/prompts/13"
                    className="inline-flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-900 px-6 md:px-8 py-2 md:py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm md:text-base"
                  >
                    Jump to Advanced
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
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
