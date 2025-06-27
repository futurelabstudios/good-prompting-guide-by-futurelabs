
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const beginnerPrompts = [
    { 
      id: 1, 
      title: "Be Clear and Specific", 
      time: "5 min",
      description: "Why vague requests lead to poor results"
    },
    { 
      id: 2, 
      title: "Ask for Examples", 
      time: "5 min",
      description: "How to get concrete examples instead of abstract advice"
    },
    { 
      id: 3, 
      title: "Set the Right Context", 
      time: "7 min",
      description: "Provide background information for better responses"
    },
    { 
      id: 4, 
      title: "Use Simple Language", 
      time: "5 min",
      description: "Clear communication gets better results"
    },
    { 
      id: 5, 
      title: "Break Down Complex Tasks", 
      time: "8 min",
      description: "Divide big requests into smaller, manageable parts"
    },
    { 
      id: 6, 
      title: "Specify Your Audience", 
      time: "6 min",
      description: "Tailor responses for your intended readers"
    },
    { 
      id: 7, 
      title: "Request Step-by-Step Instructions", 
      time: "7 min",
      description: "Get actionable, sequential guidance"
    },
    { 
      id: 8, 
      title: "Ask for Different Perspectives", 
      time: "6 min",
      description: "Explore multiple angles and viewpoints"
    }
  ];

  const intermediatePrompts = [
    { 
      id: 9, 
      title: "Structure with Frameworks", 
      time: "10 min",
      description: "Use proven templates for consistent results"
    },
    { 
      id: 10, 
      title: "Control Output Format", 
      time: "8 min",
      description: "Specify exactly how you want responses formatted"
    },
    { 
      id: 11, 
      title: "Chain Multiple Tasks", 
      time: "12 min",
      description: "Connect related requests for comprehensive solutions"
    },
    { 
      id: 12, 
      title: "Use Conditional Logic", 
      time: "10 min",
      description: "Create if-then scenarios for dynamic responses"
    },
    { 
      id: 13, 
      title: "Iterate and Refine", 
      time: "9 min",
      description: "Improve responses through follow-up questions"
    }
  ];

  const expertPrompts = [
    { 
      id: 14, 
      title: "Advanced Reasoning Patterns", 
      time: "15 min",
      description: "Chain-of-thought and systematic problem solving"
    },
    { 
      id: 15, 
      title: "Meta-Prompting Techniques", 
      time: "18 min",
      description: "Prompts that help you write better prompts"
    },
    { 
      id: 16, 
      title: "Context Window Optimization", 
      time: "16 min",
      description: "Maximize AI memory and conversation flow"
    },
    { 
      id: 17, 
      title: "Few-Shot Learning Mastery", 
      time: "14 min",
      description: "Teach through strategic examples"
    },
    { 
      id: 18, 
      title: "Professional Workflows", 
      time: "20 min",
      description: "Design human-AI collaboration systems"
    }
  ];

  const PromptCard = ({ prompt, isFirst = false }: { prompt: any, isFirst?: boolean }) => (
    <Link 
      to={`/prompts/${prompt.id}`} 
      key={prompt.id}
      className={`block group ${isFirst ? 'border-2 border-gray-900' : 'border border-gray-200'}`}
    >
      <div className={`p-6 transition-all duration-200 hover:bg-gray-50 ${isFirst ? 'bg-gray-50' : 'bg-white'}`}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold ${isFirst ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700'}`}>
              {prompt.id}
            </div>
            <div className="flex items-center gap-1 text-gray-500 text-sm">
              <Clock className="h-4 w-4" />
              {prompt.time}
            </div>
          </div>
          <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
        </div>
        
        <h4 className="text-lg font-semibold text-gray-900 mb-2">
          {prompt.title}
        </h4>
        <p className="text-gray-600 text-sm">
          {prompt.description}
        </p>
      </div>
    </Link>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Hero />
        
        {/* Learning Sections */}
        <div className="py-16 px-4 md:px-6 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            
            {/* Beginner Section */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-700 mb-4">
                  Beginner Level
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Start Here
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Master the fundamentals of AI communication with these essential techniques
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {beginnerPrompts.map((prompt, index) => (
                  <PromptCard key={prompt.id} prompt={prompt} isFirst={index === 0} />
                ))}
              </div>
            </div>

            {/* Intermediate Section */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-700 mb-4">
                  Intermediate Level
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Build Advanced Skills
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Learn structured approaches and professional formatting techniques
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {intermediatePrompts.map((prompt) => (
                  <PromptCard key={prompt.id} prompt={prompt} />
                ))}
              </div>
            </div>

            {/* Expert Section */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-700 mb-4">
                  Expert Level
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Master Professional Techniques
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Advanced strategies for complex AI interactions and workflows
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {expertPrompts.map((prompt) => (
                  <PromptCard key={prompt.id} prompt={prompt} />
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center">
              <div className="bg-gray-900 p-8 rounded-lg text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Transform Your AI Skills?
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Start your journey from beginner to expert with our comprehensive guide
                </p>
                <Link 
                  to="/prompts/1"
                  className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Begin Your Journey
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
