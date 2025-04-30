
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const promptTechniques = [
    { id: 1, title: "Specificity Over Vague Brevity" },
    { id: 2, title: "Use XML-style Tags to Separate Content" },
    { id: 3, title: "Use the ROLE → DATA → TASK Framework" },
    { id: 4, title: "Show the Output Format" },
    { id: 5, title: "Chain Tasks Sequentially" },
    { id: 6, title: "Match Tone to Your Audience" },
    { id: 7, title: "Avoid Negative Phrasing" },
    { id: 8, title: "Bonus Prompting Hacks" },
    { id: 9, title: "The 4 Golden Rules of AI Use" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        <Hero />
        
        <div className="container mx-auto px-4 max-w-5xl py-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Prompt Engineering Techniques</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {promptTechniques.map((prompt) => (
              <Link 
                to={`/prompts/${prompt.id}`} 
                key={prompt.id}
                className="group p-6 rounded-xl bg-gradient-to-br from-white to-secondary/5 shadow-md border border-secondary/20 flex flex-col items-center text-center hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="mb-4 h-12 w-12 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                  <span className="font-bold text-primary">{prompt.id}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{prompt.title}</h3>
                <Compass className="h-5 w-5 text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
