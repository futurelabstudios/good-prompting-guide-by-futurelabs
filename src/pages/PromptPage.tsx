
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PromptCard from '@/components/PromptCard';
import BonusPromptCard from '@/components/BonusPromptCard';
import GoldenRulesPromptCard from '@/components/GoldenRulesPromptCard';
import PromptNavigation from '@/components/PromptNavigation';
import { 
  Target, 
  Tags, 
  UserCircle, 
  FileOutput, 
  Link, 
  MessageSquare,
  Ban
} from 'lucide-react';

const PromptPage = () => {
  const { id } = useParams();
  const promptId = parseInt(id || "1");
  
  const totalPrompts = 9; // Total number of prompt pages
  
  if (isNaN(promptId) || promptId < 1 || promptId > totalPrompts) {
    return <Navigate to="/prompts/1" replace />;
  }
  
  const renderPromptContent = () => {
    switch (promptId) {
      case 1:
        return (
          <PromptCard
            number="1"
            icon={<Target className="h-6 w-6" />}
            title="Specificity Over Vague Brevity"
            description="Replace vague adjectives with concrete instructions."
            examples={{
              bad: "Summarise quickly.",
              good: "Limit each theme to 2 sentences and under 40 words."
            }}
            tip="Think of AI like a new intern—clarity and explicitness beat minimalism."
          />
        );
      case 2:
        return (
          <PromptCard
            number="2"
            icon={<Tags className="h-6 w-6" />}
            title="Use XML-style Tags to Separate Content"
            description="Fence off data using XML-style tags like <material>, <quote>, or <data>."
            examples={{
              bad: "Here's the chat log. Pull 3 verbatims.",
              good: "Extract 3 emotionally rich quotes. <material>Transcript here</material>"
            }}
            tip="LLMs respect structure. Tagged content reduces confusion between task and data."
          />
        );
      case 3:
        return (
          <PromptCard
            number="3"
            icon={<UserCircle className="h-6 w-6" />}
            title="Use the ROLE → DATA → TASK Framework"
            description="Introduce the AI's role, provide structured data, then define the task."
            examples={{
              bad: "Summarise these notes and suggest next steps.",
              good: "You are a senior cultural-insight analyst.\n<data>Notes from Gen-Z focus group</data>\n<task>Summarise 3 insights and suggest 2 next steps for the brand team.</task>"
            }}
            tip="This aligns with how LLMs assign attention—lead with context, end with instructions."
          />
        );
      case 4:
        return (
          <PromptCard
            number="4"
            icon={<FileOutput className="h-6 w-6" />}
            title="Show the Output Format"
            description="Provide a clear skeleton/template of the desired output."
            examples={{
              bad: "Write a consumer journey map.",
              good: "<output_format>\n1. Stage\n2. Emotion\n3. Touchpoint\n4. Quote\n</output_format>"
            }}
            tip="What the model sees, it replicates. Templates reduce formatting errors."
          />
        );
      case 5:
        return (
          <PromptCard
            number="5"
            icon={<Link className="h-6 w-6" />}
            title="Chain Tasks Sequentially"
            description="Break large asks into steps and prompt one at a time."
            examples={{
              bad: "Summarise 12 interviews, build personas, make strategy.",
              good: "Step 1: Cluster these 12 interviews into 3 user segments.\nStep 2: Build a persona for each.\nStep 3: Propose brand strategies based on personas."
            }}
            tip="Small wins stack better than big misses. Chunk your tasks."
          />
        );
      case 6:
        return (
          <PromptCard
            number="6"
            icon={<MessageSquare className="h-6 w-6" />}
            title="Match Tone to Your Audience"
            description="Write in the tone you want reflected in the response."
            examples={{
              bad: "Write in a friendly tone.",
              good: "Bruh, explain this in fun, chill Hinglish for a client who gets bored easily."
            }}
            tip="LLMs are mirrors—they copy the style you set."
          />
        );
      case 7:
        return (
          <PromptCard
            number="7"
            icon={<Ban className="h-6 w-6" />}
            title="Avoid Negative Phrasing"
            description="Tell the model what to include, not what to avoid."
            examples={{
              bad: "Don't mention price comparisons.",
              good: "Focus only on emotional motivations and rituals—ignore price or competitors."
            }}
            tip="Negations are risky. Be affirmative in instruction."
          />
        );
      case 8:
        return <BonusPromptCard />;
      case 9:
        return <GoldenRulesPromptCard />;
      default:
        return <Navigate to="/prompts/1" replace />;
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {renderPromptContent()}
        <PromptNavigation currentPrompt={promptId} totalPrompts={totalPrompts} />
      </main>
      
      <Footer />
    </div>
  );
};

export default PromptPage;
