
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { ArrowRight, Clock, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const beginnerPrompts = [
    { id: 1, title: "Be Clear and Specific", time: "5 min", description: "Why vague requests lead to poor results" },
    { id: 2, title: "Ask for Examples", time: "5 min", description: "Get concrete examples instead of abstract advice" },
    { id: 3, title: "Set the Right Context", time: "7 min", description: "Provide background information for better responses" },
    { id: 4, title: "Use Simple Language", time: "5 min", description: "Clear communication gets better results" },
    { id: 5, title: "Break Down Complex Tasks", time: "8 min", description: "Divide big requests into manageable parts" },
    { id: 6, title: "Specify Your Audience", time: "6 min", description: "Tailor responses for intended readers" },
    { id: 7, title: "Request Step-by-Step Instructions", time: "7 min", description: "Get actionable, sequential guidance" },
    { id: 8, title: "Ask for Different Perspectives", time: "6 min", description: "Explore multiple angles on topics" },
    { id: 9, title: "Define Output Format", time: "5 min", description: "Control how AI structures responses" },
    { id: 10, title: "Use Follow-up Questions", time: "6 min", description: "Refine and improve initial responses" }
  ];

  const intermediatePrompts = [
    { id: 11, title: "Structure with Frameworks", time: "10 min", description: "Use proven templates for consistent results" },
    { id: 12, title: "Chain Multiple Tasks", time: "12 min", description: "Connect related requests for comprehensive solutions" },
    { id: 13, title: "Use Conditional Logic", time: "10 min", description: "Create if-then scenarios for dynamic responses" },
    { id: 14, title: "Role-Based Prompting", time: "9 min", description: "Make AI adopt specific professional personas" },
    { id: 15, title: "Template Creation", time: "11 min", description: "Build reusable prompt structures" },
    { id: 16, title: "Context Window Management", time: "13 min", description: "Optimize information flow in conversations" },
    { id: 17, title: "Multi-Step Reasoning", time: "14 min", description: "Guide AI through complex problem-solving" },
    { id: 18, title: "Output Validation", time: "8 min", description: "Ensure quality and accuracy in responses" },
    { id: 19, title: "Prompt Iteration", time: "10 min", description: "Systematically improve prompt effectiveness" },
    { id: 20, title: "Style and Tone Control", time: "9 min", description: "Fine-tune communication style" }
  ];

  const expertPrompts = [
    { id: 21, title: "Advanced Reasoning Patterns", time: "18 min", description: "Chain-of-thought and systematic problem solving" },
    { id: 22, title: "Meta-Prompting Techniques", time: "20 min", description: "Prompts that help you write better prompts" },
    { id: 23, title: "Few-Shot Learning Mastery", time: "16 min", description: "Teach through strategic examples" },
    { id: 24, title: "Multi-Modal Integration", time: "15 min", description: "Combine text, code, and structured data" },
    { id: 25, title: "Prompt Injection Defense", time: "17 min", description: "Secure prompting against manipulation" },
    { id: 26, title: "Dynamic Prompt Generation", time: "19 min", description: "Create adaptive prompting systems" },
    { id: 27, title: "Advanced Context Techniques", time: "21 min", description: "Master memory and state management" },
    { id: 28, title: "Professional Workflow Design", time: "22 min", description: "Build human-AI collaboration systems" },
    { id: 29, title: "Performance Optimization", time: "18 min", description: "Maximize efficiency and response quality" },
    { id: 30, title: "AI Collaboration Mastery", time: "25 min", description: "Advanced techniques for complex projects" }
  ];

  const PromptCard = ({ prompt, isFirst = false }: { prompt: any, isFirst?: boolean }) => (
    <Link 
      to={`/prompts/${prompt.id}`} 
      key={prompt.id}
      className={`block group relative overflow-hidden ${isFirst ? 'border-2 border-cyan-500 shadow-lg' : 'border border-gray-200'} rounded-lg hover:shadow-xl transition-all duration-300`}
    >
      {isFirst && (
        <div className="absolute top-0 right-0 bg-gradient-to-l from-cyan-500 to-cyan-400 text-white text-xs px-3 py-1 font-mono">
          START
        </div>
      )}
      <div className={`p-6 transition-all duration-200 hover:bg-gradient-to-br from-gray-50 to-gray-100/50 ${isFirst ? 'bg-gradient-to-br from-cyan-50 to-cyan-100/30' : 'bg-white'} relative`}>
        {/* Glitch effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 transition-opacity"></div>
        
        <div className="flex items-center justify-between mb-3 relative z-10">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold font-mono border-2 ${
              isFirst 
                ? 'bg-cyan-500 text-white border-cyan-400' 
                : 'bg-gray-100 text-gray-700 border-gray-200 group-hover:border-cyan-300 group-hover:bg-cyan-50'
            }`}>
              {String(prompt.id).padStart(2, '0')}
            </div>
            <div className="flex items-center gap-1 text-gray-500 text-sm font-mono">
              <Clock className="h-4 w-4" />
              {prompt.time}
            </div>
          </div>
          <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all" />
        </div>
        
        <h4 className="text-lg font-semibold text-gray-900 mb-2 relative z-10">
          {prompt.title}
        </h4>
        <p className="text-gray-600 text-sm relative z-10">
          {prompt.description}
        </p>
      </div>
    </Link>
  );

  const LevelSection = ({ level, color, prompts, title, description }: any) => (
    <div className="mb-20">
      <div className="text-center mb-12 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <Terminal className="h-32 w-32 text-gray-400" />
        </div>
        
        <div className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-bold font-mono mb-6 border-2 ${color} relative z-10`}>
          <span className="mr-2">//</span>
          {level} Level
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4 relative z-10">
          {title}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto font-mono text-lg relative z-10">
          <span className="text-cyan-600">/*</span> {description} <span className="text-cyan-600">*/</span>
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {prompts.map((prompt: any, index: number) => (
          <PromptCard key={prompt.id} prompt={prompt} isFirst={index === 0 && level === 'Beginner'} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background tech pattern */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 79px, #cyan 81px, #cyan 82px, transparent 84px),
            linear-gradient(transparent 79px, #cyan 81px, #cyan 82px, transparent 84px)
          `,
          backgroundSize: '84px 84px'
        }}></div>
      </div>

      <Header />
      
      <main className="relative z-10">
        <Hero />
        
        <div className="py-20 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto max-w-6xl">
            <LevelSection
              level="Beginner"
              color="bg-green-100 text-green-700 border-green-300"
              prompts={beginnerPrompts}
              title="Initialize Skills"
              description="Master the fundamentals of AI communication"
            />

            <LevelSection
              level="Intermediate"
              color="bg-blue-100 text-blue-700 border-blue-300"
              prompts={intermediatePrompts}
              title="Upgrade Techniques"
              description="Advanced strategies for professional results"
            />

            <LevelSection
              level="Expert"
              color="bg-purple-100 text-purple-700 border-purple-300"
              prompts={expertPrompts}
              title="Master Protocol"
              description="Elite-level AI collaboration methods"
            />

            {/* Enhanced Final CTA */}
            <div className="text-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent"></div>
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-10 rounded-xl text-white relative overflow-hidden border border-gray-700">
                {/* Glitch effects */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 opacity-50"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-4">
                    <Terminal className="h-8 w-8 text-cyan-400 mr-3" />
                    <h3 className="text-3xl font-bold font-mono">
                      <span className="text-cyan-400">$</span> ready_to_level_up
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-8 max-w-2xl mx-auto font-mono text-lg">
                    <span className="text-cyan-400">//</span> Transform your AI interactions from basic to expert level
                  </p>
                  <Link 
                    to="/prompts/1"
                    className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-gray-900 px-10 py-4 rounded-lg font-bold font-mono hover:from-cyan-400 hover:to-cyan-300 transition-all duration-200 text-lg shadow-lg hover:shadow-xl border border-cyan-300 group"
                  >
                    <Terminal className="h-6 w-6" />
                    <span>./begin_journey.sh</span>
                    <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
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
