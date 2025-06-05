
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolStepCard from '@/components/ToolStepCard';
import { 
  FileText, 
  PresentationChart, 
  Users, 
  MessageCircle, 
  Mic, 
  Lightbulb, 
  Monitor 
} from 'lucide-react';

const ToolsPage = () => {
  const researchSteps = [
    {
      step: "1",
      title: "Brief",
      icon: <FileText className="h-6 w-6" />,
      description: "Define research objectives and scope",
      tools: [
        {
          name: "Quantum Research Companion",
          url: "https://quantum-companion.netlify.app/"
        },
        {
          name: "Notion AI",
          url: "https://www.notion.so/product/ai"
        }
      ]
    },
    {
      step: "2",
      title: "Proposal",
      icon: <PresentationChart className="h-6 w-6" />,
      description: "Create comprehensive research proposals",
      tools: [
        {
          name: "Genspark AI",
          url: "https://www.genspark.ai/"
        },
        {
          name: "Lovable.dev",
          url: "https://lovable.dev/"
        },
        {
          name: "Consensus",
          url: "https://consensus.app"
        },
        {
          name: "Exa AI Search",
          url: "https://exa.ai/search"
        }
      ]
    },
    {
      step: "3",
      title: "Recruitment",
      icon: <Users className="h-6 w-6" />,
      description: "Find and recruit research participants",
      tools: [
        {
          name: "Quantum RQ Companion",
          url: "https://quantum-companion.netlify.app/"
        }
      ]
    },
    {
      step: "4",
      title: "Discussion Guide",
      icon: <MessageCircle className="h-6 w-6" />,
      description: "Design effective interview guides",
      tools: [
        {
          name: "Quantum DG Companion",
          url: "https://quantum-companion.netlify.app/"
        }
      ]
    },
    {
      step: "5",
      title: "Transcription",
      icon: <Mic className="h-6 w-6" />,
      description: "Convert audio to text with AI assistance",
      tools: [
        {
          name: "ElevenLabs",
          url: "https://www.elevenlabs.io/"
        },
        {
          name: "NotebookLM",
          url: "https://notebooklm.google.com/"
        }
      ]
    },
    {
      step: "6",
      title: "Sensemaking / Brainstorming",
      icon: <Lightbulb className="h-6 w-6" />,
      description: "Analyze data and generate insights",
      tools: [
        {
          name: "Perplexity Labs",
          url: "https://www.perplexity.ai/labs"
        },
        {
          name: "Markmap Tool",
          url: "https://markmap.js.org/repl"
        },
        {
          name: "Napkin AI",
          url: "https://app.napkin.ai/"
        }
      ]
    },
    {
      step: "7",
      title: "Presentation",
      icon: <Monitor className="h-6 w-6" />,
      description: "Create compelling research presentations",
      tools: [
        {
          name: "Canva",
          url: "https://www.canva.com"
        },
        {
          name: "MidJourney Prompt Guide",
          url: "https://docs.midjourney.com"
        },
        {
          name: "Freepik",
          url: "https://www.freepik.com"
        },
        {
          name: "Genspark AI",
          url: "https://www.genspark.ai/"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <div className="quantum-gradient-bg text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Tools for Qualitative Research
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
              A curated collection of AI-powered tools mapped to each step of the qualitative research lifecycle
            </p>
          </div>
        </div>

        {/* Tools Section */}
        <div className="container mx-auto px-4 py-20 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Research Lifecycle Tools</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the best AI tools for each stage of your qualitative research process
            </p>
          </div>

          <div className="space-y-8">
            {researchSteps.map((step, index) => (
              <ToolStepCard 
                key={step.step}
                step={step.step}
                title={step.title}
                icon={step.icon}
                description={step.description}
                tools={step.tools}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ToolsPage;
