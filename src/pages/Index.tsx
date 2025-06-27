
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { ArrowRight, Clock, Terminal, Zap, Code, Binary, Cpu, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [timeOfDay, setTimeOfDay] = useState('');
  const [matrixRain, setMatrixRain] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  // Matrix rain easter egg
  useEffect(() => {
    const handleTripleClick = () => {
      setClickCount(prev => prev + 1);
      if (clickCount === 2) {
        setMatrixRain(true);
        setTimeout(() => setMatrixRain(false), 5000);
        setClickCount(0);
      }
    };

    const resetClickCount = () => {
      setTimeout(() => setClickCount(0), 1000);
    };

    if (clickCount > 0) {
      resetClickCount();
    }

    document.addEventListener('click', handleTripleClick);
    return () => document.removeEventListener('click', handleTripleClick);
  }, [clickCount]);

  // Time-based greeting
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 6) setTimeOfDay('// Night owl detected 🦉');
    else if (hour < 12) setTimeOfDay('// Good morning, code warrior! ☀️');
    else if (hour < 18) setTimeOfDay('// Afternoon productivity mode 🚀');
    else setTimeOfDay('// Evening hacker session 🌙');
  }, []);

  const beginnerPrompts = [
    { id: 1, title: "Be Clear and Specific", time: "5 min", description: "Why vague requests lead to poor results", emoji: "🎯" },
    { id: 2, title: "Ask for Examples", time: "5 min", description: "Get concrete examples instead of abstract advice", emoji: "💡" },
    { id: 3, title: "Set the Right Context", time: "7 min", description: "Provide background information for better responses", emoji: "🔍" },
    { id: 4, title: "Use Simple Language", time: "5 min", description: "Clear communication gets better results", emoji: "🗣️" },
    { id: 5, title: "Break Down Complex Tasks", time: "8 min", description: "Divide big requests into manageable parts", emoji: "🧩" },
    { id: 6, title: "Specify Your Audience", time: "6 min", description: "Tailor responses for intended readers", emoji: "🎭" },
    { id: 7, title: "Request Step-by-Step Instructions", time: "7 min", description: "Get actionable, sequential guidance", emoji: "📋" },
    { id: 8, title: "Ask for Different Perspectives", time: "6 min", description: "Explore multiple angles on topics", emoji: "🔄" },
    { id: 9, title: "Define Output Format", time: "5 min", description: "Control how AI structures responses", emoji: "📐" },
    { id: 10, title: "Use Follow-up Questions", time: "6 min", description: "Refine and improve initial responses", emoji: "🔗" }
  ];

  const intermediatePrompts = [
    { id: 11, title: "Structure with Frameworks", time: "10 min", description: "Use proven templates for consistent results", emoji: "🏗️" },
    { id: 12, title: "Chain Multiple Tasks", time: "12 min", description: "Connect related requests for comprehensive solutions", emoji: "⛓️" },
    { id: 13, title: "Use Conditional Logic", time: "10 min", description: "Create if-then scenarios for dynamic responses", emoji: "🔀" },
    { id: 14, title: "Role-Based Prompting", time: "9 min", description: "Make AI adopt specific professional personas", emoji: "🎪" },
    { id: 15, title: "Template Creation", time: "11 min", description: "Build reusable prompt structures", emoji: "📝" },
    { id: 16, title: "Context Window Management", time: "13 min", description: "Optimize information flow in conversations", emoji: "🪟" },
    { id: 17, title: "Multi-Step Reasoning", time: "14 min", description: "Guide AI through complex problem-solving", emoji: "🧠" },
    { id: 18, title: "Output Validation", time: "8 min", description: "Ensure quality and accuracy in responses", emoji: "✅" },
    { id: 19, title: "Prompt Iteration", time: "10 min", description: "Systematically improve prompt effectiveness", emoji: "🔄" },
    { id: 20, title: "Style and Tone Control", time: "9 min", description: "Fine-tune communication style", emoji: "🎨" }
  ];

  const expertPrompts = [
    { id: 21, title: "Advanced Reasoning Patterns", time: "18 min", description: "Chain-of-thought and systematic problem solving", emoji: "🧮" },
    { id: 22, title: "Meta-Prompting Techniques", time: "20 min", description: "Prompts that help you write better prompts", emoji: "🪞" },
    { id: 23, title: "Few-Shot Learning Mastery", time: "16 min", description: "Teach through strategic examples", emoji: "🎯" },
    { id: 24, title: "Multi-Modal Integration", time: "15 min", description: "Combine text, code, and structured data", emoji: "🔗" },
    { id: 25, title: "Prompt Injection Defense", time: "17 min", description: "Secure prompting against manipulation", emoji: "🛡️" },
    { id: 26, title: "Dynamic Prompt Generation", time: "19 min", description: "Create adaptive prompting systems", emoji: "⚡" },
    { id: 27, title: "Advanced Context Techniques", time: "21 min", description: "Master memory and state management", emoji: "🧠" },
    { id: 28, title: "Professional Workflow Design", time: "22 min", description: "Build human-AI collaboration systems", emoji: "🤝" },
    { id: 29, title: "Performance Optimization", time: "18 min", description: "Maximize efficiency and response quality", emoji: "🚀" },
    { id: 30, title: "AI Collaboration Mastery", time: "25 min", description: "Advanced techniques for complex projects", emoji: "👑" }
  ];

  const PromptCard = ({ prompt, isFirst = false }: { prompt: any, isFirst?: boolean }) => (
    <Link 
      to={`/prompts/${prompt.id}`} 
      key={prompt.id}
      className={`block group relative overflow-hidden ${isFirst ? 'border-2 border-cyan-500 shadow-lg' : 'border border-gray-200'} rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}
    >
      {isFirst && (
        <div className="absolute top-0 right-0 bg-gradient-to-l from-cyan-500 to-cyan-400 text-white text-xs px-3 py-1 font-mono animate-pulse">
          <Terminal className="inline h-3 w-3 mr-1" />
          ./start
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
              {prompt.emoji || String(prompt.id).padStart(2, '0')}
            </div>
            <div className="flex items-center gap-1 text-gray-500 text-sm font-mono">
              <Clock className="h-4 w-4" />
              {prompt.time}
            </div>
          </div>
          <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all" />
        </div>
        
        <h4 className="text-lg font-semibold text-gray-900 mb-2 relative z-10 font-mono">
          <span className="text-cyan-600">//</span> {prompt.title}
        </h4>
        <p className="text-gray-600 text-sm relative z-10 font-mono opacity-80">
          <span className="text-green-600">/*</span> {prompt.description} <span className="text-green-600">*/</span>
        </p>
      </div>
    </Link>
  );

  const LevelSection = ({ level, color, prompts, title, description, icon }: any) => (
    <div className="mb-20">
      <div className="text-center mb-12 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          {icon}
        </div>
        
        <div className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-bold font-mono mb-6 border-2 ${color} relative z-10 hover:animate-pulse transition-all`}>
          <span className="mr-2 text-cyan-600">$</span>
          {level.toLowerCase()}_level
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4 relative z-10 font-mono">
          <span className="text-cyan-600">//</span> {title}
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
      {/* Matrix rain effect */}
      {matrixRain && (
        <div className="fixed inset-0 z-[9998] pointer-events-none">
          <div className="matrix-rain text-green-400 font-mono text-xs opacity-30">
            {Array.from({ length: 50 }, (_, i) => (
              <div key={i} className="matrix-column" style={{ left: `${i * 2}%` }}>
                {Array.from({ length: 20 }, (_, j) => (
                  <div key={j} className="animate-pulse">
                    {Math.random() > 0.5 ? '1' : '0'}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

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
            {/* Time-based greeting */}
            <div className="text-center mb-12">
              <div className="text-sm font-mono text-gray-500 mb-4 animate-pulse">
                {timeOfDay}
              </div>
              <div className="text-xs font-mono text-gray-400">
                <span className="text-cyan-600">$</span> uptime: {Math.floor(Date.now() / 1000)} seconds since epoch
              </div>
            </div>

            <LevelSection
              level="Beginner"
              color="bg-green-100 text-green-700 border-green-300"
              prompts={beginnerPrompts}
              title="init(skills)"
              description="Master the fundamentals of AI communication"
              icon={<Code className="h-32 w-32 text-gray-400" />}
            />

            <LevelSection
              level="Intermediate"
              color="bg-blue-100 text-blue-700 border-blue-300"
              prompts={intermediatePrompts}
              title="upgrade(techniques)"
              description="Advanced strategies for professional results"
              icon={<Cpu className="h-32 w-32 text-gray-400" />}
            />

            <LevelSection
              level="Expert"
              color="bg-purple-100 text-purple-700 border-purple-300"
              prompts={expertPrompts}
              title="sudo mastery"
              description="Elite-level AI collaboration methods"
              icon={<Database className="h-32 w-32 text-gray-400" />}
            />

            {/* Enhanced Final CTA with more nerdy references */}
            <div className="text-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent"></div>
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-10 rounded-xl text-white relative overflow-hidden border border-gray-700">
                {/* Animated borders */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 opacity-50 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 opacity-50 animate-pulse"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-4">
                    <Terminal className="h-8 w-8 text-cyan-400 mr-3 animate-pulse" />
                    <h3 className="text-3xl font-bold font-mono">
                      <span className="text-cyan-400">root@promptmastery</span>:~$ ./level_up.sh
                    </h3>
                  </div>
                  <div className="text-gray-300 mb-8 max-w-2xl mx-auto font-mono text-lg space-y-2">
                    <div><span className="text-cyan-400">//</span> Transform your AI interactions from noob to 1337</div>
                    <div><span className="text-green-400">/*</span> Warning: May cause exponential productivity growth <span className="text-green-400">*/</span></div>
                    <div className="text-xs opacity-70">
                      <span className="text-red-400">// TODO:</span> Become an AI whisperer
                    </div>
                  </div>
                  <Link 
                    to="/prompts/1"
                    className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-gray-900 px-10 py-4 rounded-lg font-bold font-mono hover:from-cyan-400 hover:to-cyan-300 transition-all duration-200 text-lg shadow-lg hover:shadow-xl border border-cyan-300 group hover:scale-105"
                  >
                    <Terminal className="h-6 w-6 group-hover:animate-spin" />
                    <span>chmod +x journey.sh && ./journey.sh</span>
                    <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  {/* Hidden easter egg hint */}
                  <div className="mt-6 text-xs opacity-30 font-mono">
                    <div>// Pro tip: Try triple-clicking anywhere for a surprise 🎭</div>
                    <div>// Also try the famous cheat code... you know the one 🎮</div>
                  </div>
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
