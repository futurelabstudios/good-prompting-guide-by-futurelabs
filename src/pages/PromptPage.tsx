
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
  BookOpen, 
  Users, 
  FileOutput, 
  Zap, 
  MessageSquare,
  CheckCircle,
  Trophy,
  Award
} from 'lucide-react';

const PromptPage = () => {
  const { id } = useParams();
  const promptId = parseInt(id || "1");
  
  const totalPrompts = 9;
  
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
            title="Be Specific, Not Vague"
            description="The #1 rule of prompt engineering: Replace fuzzy words with crystal-clear instructions. AI works best when you tell it exactly what you want, how you want it."
            difficulty="Beginner"
            xp={50}
            examples={{
              bad: "Summarize this quickly.",
              good: "Create a 3-bullet summary. Each bullet should be exactly 1 sentence and under 20 words. Focus only on the main conclusions."
            }}
            tip="Think of AI like a helpful but literal assistant. Instead of saying 'make it good,' say exactly what 'good' means to you. Specific instructions = better results every single time."
          />
        );
      case 2:
        return (
          <PromptCard
            number="2"
            icon={<BookOpen className="h-6 w-6" />}
            title="Structure with Tags"
            description="Use XML-style tags like <data>, <task>, or <format> to organize your prompt. This helps AI understand exactly what each part of your message is for."
            difficulty="Beginner"
            xp={75}
            examples={{
              bad: "Here's my meeting notes from yesterday. Can you pull out the key action items and organize them somehow?",
              good: `<task>Extract action items from meeting notes</task>
<data>
[Meeting notes go here]
</data>
<format>
- Action: [what needs to be done]
- Owner: [who's responsible] 
- Deadline: [when it's due]
</format>`
            }}
            tip="Tags act like folders for your content. AI can easily separate your instructions from your data when everything is clearly labeled. This prevents confusion and gets you better results."
          />
        );
      case 3:
        return (
          <PromptCard
            number="3"
            icon={<Users className="h-6 w-6" />}
            title="Role-Data-Task Framework"
            description="Structure every prompt with three parts: First, assign AI a role (expert, assistant, etc.). Then provide your data. Finally, give clear task instructions."
            difficulty="Intermediate"
            xp={100}
            examples={{
              bad: "Look at these customer reviews and tell me what people think about our product.",
              good: `<role>You are a customer experience analyst with 10 years of experience in e-commerce.</role>

<data>
[Customer reviews and feedback data]
</data>

<task>
Analyze the sentiment and identify:
1. Top 3 most mentioned positive aspects
2. Top 3 most common complaints
3. Overall satisfaction score (1-10)
4. One actionable recommendation for improvement
</task>`
            }}
            tip="This framework works because it mirrors how humans think about problems. Give AI context (role), information (data), and clear objectives (task). This structure leads to more focused, professional responses."
          />
        );
      case 4:
        return (
          <PromptCard
            number="4"
            icon={<FileOutput className="h-6 w-6" />}
            title="Show Output Format"
            description="Don't just tell AI what you want - show them exactly how you want it formatted. Provide a template or example of your desired output structure."
            difficulty="Intermediate"
            xp={100}
            examples={{
              bad: "Create a report about our sales performance with charts and insights.",
              good: `Create a sales performance report using this exact format:

# Sales Performance Report - [Month Year]

## Executive Summary
[2-3 sentence overview]

## Key Metrics
- Total Revenue: $[amount] ([% change] vs last month)
- Units Sold: [number] ([% change] vs last month)
- Average Order Value: $[amount] ([% change] vs last month)

## Top Insights
1. [Insight with supporting data]
2. [Insight with supporting data]
3. [Insight with supporting data]

## Recommendations
- [Specific action item]
- [Specific action item]`
            }}
            tip="AI is excellent at following patterns. When you show the exact format you want, you'll get consistent, professional-looking outputs every time. This saves you from reformatting work later."
          />
        );
      case 5:
        return (
          <PromptCard
            number="5"
            icon={<Zap className="h-6 w-6" />}
            title="Chain Tasks Step-by-Step"
            description="Break complex requests into smaller, sequential steps. Do one thing at a time, check the result, then move to the next step. This prevents errors and improves quality."
            difficulty="Intermediate"
            xp={125}
            examples={{
              bad: "Analyze this data, create customer personas, build a marketing strategy, and write email campaigns for each persona.",
              good: `Let's work through this step by step:

STEP 1: First, analyze this customer data and identify 3 distinct customer segments based on behavior patterns.

[After reviewing Step 1 results, continue with:]
STEP 2: Create a detailed persona for each segment...
STEP 3: Develop marketing strategies for each persona...
STEP 4: Write email campaigns for each strategy...`
            }}
            tip="Complex tasks fail when you try to do everything at once. Break them into bite-sized pieces. Each step builds on the previous one, giving you better control and higher quality results."
          />
        );
      case 6:
        return (
          <PromptCard
            number="6"
            icon={<MessageSquare className="h-6 w-6" />}
            title="Match Your Audience's Tone"
            description="AI mirrors the tone you use in your prompt. Write in the style you want reflected in the response. If you want casual, be casual. If you want formal, be formal."
            difficulty="Advanced"
            xp={150}
            examples={{
              bad: "Write in a friendly, approachable tone for young adults.",
              good: `Hey there! 👋 Write this guide like you're explaining it to your best friend who's totally new to this stuff. Keep it super chill, use emojis, and don't worry about being too 'professional' - just be real and helpful, you know?`
            }}
            tip="AI learns from your example. If you want energetic writing, be energetic in your prompt. Want professional? Be professional. Your tone becomes the AI's tone - it's like emotional contagion in text form."
          />
        );
      case 7:
        return (
          <PromptCard
            number="7"
            icon={<CheckCircle className="h-6 w-6" />}
            title="Use Positive Language"
            description="Tell AI what TO do, not what NOT to do. Positive instructions are clearer and more effective than negative restrictions. Focus on the desired outcome."
            difficulty="Advanced"
            xp={150}
            examples={{
              bad: "Don't mention competitors. Don't talk about pricing. Don't use technical jargon. Don't make it too long.",
              good: "Focus exclusively on our product's unique benefits. Use simple, everyday language that anyone can understand. Keep responses to 2-3 sentences maximum. Highlight customer success stories and practical applications."
            }}
            tip="Negative instructions often confuse AI and can accidentally trigger the very behavior you're trying to avoid. Positive framing gives clear direction and leads to more focused, useful responses."
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
      
      <main className="flex-1">
        {renderPromptContent()}
        <PromptNavigation currentPrompt={promptId} totalPrompts={totalPrompts} />
      </main>
      
      <Footer />
    </div>
  );
};

export default PromptPage;
