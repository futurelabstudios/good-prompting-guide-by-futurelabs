
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import GuideCard from '@/components/GuideCard';
import BonusCard from '@/components/BonusCard';
import GoldenRuleCard from '@/components/GoldenRuleCard';
import { 
  Target, 
  Tags, 
  UserCircle, 
  FileOutput, 
  Link, 
  MessageSquare,
  Ban,
  Baby,
  Search,
  Clock,
  Building2,
  MessagesSquare,
  Sparkles,
  Compass
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Hero />
        
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Key Prompt Engineering Techniques</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <GuideCard 
              number="1"
              icon={<Target className="h-5 w-5" />}
              title="Specificity Over Vague Brevity"
              description="Replace vague adjectives with concrete instructions."
              examples={{
                bad: "Summarise quickly.",
                good: "Limit each theme to 2 sentences and under 40 words."
              }}
              tip="Think of AI like a new intern—clarity and explicitness beat minimalism."
            />
            
            <GuideCard 
              number="2"
              icon={<Tags className="h-5 w-5" />}
              title="Use XML-style Tags to Separate Content"
              description="Fence off data using XML-style tags like <material>, <quote>, or <data>."
              examples={{
                bad: "Here's the chat log. Pull 3 verbatims.",
                good: "Extract 3 emotionally rich quotes. <material>Transcript here</material>"
              }}
              tip="LLMs respect structure. Tagged content reduces confusion between task and data."
            />
            
            <GuideCard 
              number="3"
              icon={<UserCircle className="h-5 w-5" />}
              title="Use the ROLE → DATA → TASK Framework"
              description="Introduce the AI's role, provide structured data, then define the task."
              examples={{
                bad: "Summarise these notes and suggest next steps.",
                good: "You are a senior cultural-insight analyst.\n<data>Notes from Gen-Z focus group</data>\n<task>Summarise 3 insights and suggest 2 next steps for the brand team.</task>"
              }}
              tip="This aligns with how LLMs assign attention—lead with context, end with instructions."
            />
            
            <GuideCard 
              number="4"
              icon={<FileOutput className="h-5 w-5" />}
              title="Show the Output Format"
              description="Provide a clear skeleton/template of the desired output."
              examples={{
                bad: "Write a consumer journey map.",
                good: "<output_format>\n1. Stage\n2. Emotion\n3. Touchpoint\n4. Quote\n</output_format>"
              }}
              tip="What the model sees, it replicates. Templates reduce formatting errors."
            />
            
            <GuideCard 
              number="5"
              icon={<Link className="h-5 w-5" />}
              title="Chain Tasks Sequentially"
              description="Break large asks into steps and prompt one at a time."
              examples={{
                bad: "Summarise 12 interviews, build personas, make strategy.",
                good: "Step 1: Cluster these 12 interviews into 3 user segments.\nStep 2: Build a persona for each.\nStep 3: Propose brand strategies based on personas."
              }}
              tip="Small wins stack better than big misses. Chunk your tasks."
            />
            
            <GuideCard 
              number="6"
              icon={<MessageSquare className="h-5 w-5" />}
              title="Match Tone to Your Audience"
              description="Write in the tone you want reflected in the response."
              examples={{
                bad: "Write in a friendly tone.",
                good: "Bruh, explain this in fun, chill Hinglish for a client who gets bored easily."
              }}
              tip="LLMs are mirrors—they copy the style you set."
            />
            
            <GuideCard 
              number="7"
              icon={<Ban className="h-5 w-5" />}
              title="Avoid Negative Phrasing"
              description="Tell the model what to include, not what to avoid."
              examples={{
                bad: "Don't mention price comparisons.",
                good: "Focus only on emotional motivations and rituals—ignore price or competitors."
              }}
              tip="Negations are risky. Be affirmative in instruction."
              className="md:col-span-2"
            />
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">✨ Bonus Prompting Hacks</h2>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
              <BonusCard 
                icon={<Baby className="h-5 w-5" />}
                title="ELI5"
                description="Ask it to &quot;Explain Like I&apos;m 5/10/PhD&quot; based on audience level."
              />
              <BonusCard 
                icon={<Search className="h-5 w-5" />}
                title="Ask What It Doesn't Know"
                description="Encourages self-checking and reduces hallucinations."
              />
              <BonusCard 
                icon={<Clock className="h-5 w-5" />}
                title='"Take your time"'
                description="Slows response, often improves reasoning."
              />
              <BonusCard 
                icon={<Building2 className="h-5 w-5" />}
                title="First Principles"
                description="Request bottom-up explanation, not surface summaries."
              />
              <BonusCard 
                icon={<MessagesSquare className="h-5 w-5" />}
                title="Treat It Like a Person"
                description="Use dialogue, not search queries."
              />
              <BonusCard 
                icon={<Sparkles className="h-5 w-5" />}
                title="Ask for a Second Opinion"
                description="Get multiple answers or versions."
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">🧭 The 4 Golden Rules of AI Use</h2>
            <div className="border rounded-lg divide-y">
              <GoldenRuleCard 
                number={1}
                title="Invite AI into everything"
                description="Brainstorming, writing, analysis, admin – if it can be typed, it can be AI-assisted."
              />
              <GoldenRuleCard 
                number={2}
                title="Maintain human supervision"
                description="Verify, edit, and contextualize all AI-generated content – you're the expert on context."
              />
              <GoldenRuleCard 
                number={3}
                title="Treat AI like a person"
                description="Use clear instructions, appropriate tone, and set realistic expectations."
              />
              <GoldenRuleCard 
                number={4}
                title="Assume this is the worst AI you'll ever use"
                description="The future holds more powerful, specialized tools – what you learn now will transfer."
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
