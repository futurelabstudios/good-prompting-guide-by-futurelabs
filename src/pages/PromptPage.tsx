
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
  Award,
  Brain,
  RefreshCw,
  FileText,
  Lightbulb
} from 'lucide-react';

const PromptPage = () => {
  const { id } = useParams();
  const promptId = parseInt(id || "1");
  
  const totalPrompts = 12;
  
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
            description="The foundation of prompt engineering: Replace unclear words with precise instructions. AI performs best when you tell it exactly what you want, how you want it, and why."
            difficulty="Beginner"
            xp={50}
            examples={{
              bad: "Summarize this document quickly.",
              good: `Summarize this document in exactly 3 bullet points:
• Each point should be 1-2 sentences maximum
• Focus only on actionable insights
• Use simple language (8th grade reading level)
• Include specific numbers/data where relevant`
            }}
            tip="Think of AI like a precise assistant who follows instructions literally. Instead of 'make it better,' specify exactly what 'better' means: shorter, more detailed, different tone, specific format, etc. Specificity eliminates guesswork and delivers consistent results."
          />
        );
      case 2:
        return (
          <PromptCard
            number="2"
            icon={<BookOpen className="h-6 w-6" />}
            title="Structure with Tags"
            description="Use XML-style tags to organize your prompt clearly. Tags help AI understand what each part of your message does - like labeled folders for your content."
            difficulty="Beginner"
            xp={75}
            examples={{
              bad: "Here's my meeting notes from yesterday's project review. Can you extract the key action items and organize them in some way that makes sense?",
              good: `<task>Extract action items from meeting notes</task>

<data>
[Meeting notes content goes here]
[Discussion points, decisions made, etc.]
</data>

<output_format>
## Action Items
- **Task**: [what needs to be done]
- **Owner**: [who's responsible] 
- **Deadline**: [when it's due]
- **Priority**: [High/Medium/Low]
</output_format>`
            }}
            tip="Tags work like a filing system for your prompt. Use <task>, <data>, <context>, <format>, <constraints> to separate different types of information. This prevents AI from confusing your instructions with your data, leading to much more accurate responses."
          />
        );
      case 3:
        return (
          <PromptCard
            number="3"
            icon={<Users className="h-6 w-6" />}
            title="Role-Data-Task Framework"
            description="The three-part structure professionals use: Assign AI a specific role, provide relevant data, then give clear task instructions. This framework mirrors how humans approach complex problems."
            difficulty="Intermediate"
            xp={100}
            examples={{
              bad: "Look at these customer reviews and tell me what people think about our product and what we should do about it.",
              good: `<role>
You are a senior customer experience analyst with 10 years of experience in SaaS product feedback analysis.
</role>

<data>
[Customer reviews, feedback surveys, support tickets]
[Include ratings, dates, customer segments]
</data>

<task>
Analyze the feedback and provide:
1. **Sentiment Overview**: Overall satisfaction score (1-10) with reasoning
2. **Top 3 Positive Themes**: What customers love most
3. **Top 3 Pain Points**: Most frequently mentioned issues
4. **Impact Assessment**: Which issues affect the most customers
5. **Action Recommendations**: 2-3 specific, prioritized improvements
6. **Quick Wins**: Changes we could implement this month
</task>`
            }}
            tip="This framework works because it gives AI the right mindset (role), all necessary information (data), and clear objectives (task). It's like briefing an expert consultant - they need to know their expertise area, have the facts, and understand what you want them to deliver."
          />
        );
      case 4:
        return (
          <PromptCard
            number="4"
            icon={<FileOutput className="h-6 w-6" />}
            title="Show Output Format"
            description="Don't just describe what you want - show AI exactly how you want it formatted. Provide templates, examples, or detailed structure specifications."
            difficulty="Intermediate"
            xp={100}
            examples={{
              bad: "Create a professional report about our quarterly sales with some charts and insights and recommendations.",
              good: `Create a sales report using this EXACT format:

# Q3 2024 Sales Performance Report

## Executive Summary
[2-3 sentences highlighting key performance]

## Key Metrics Dashboard
| Metric | Current Quarter | Previous Quarter | Change |
|--------|----------------|------------------|---------|
| Total Revenue | $X,XXX | $X,XXX | +X% |
| Units Sold | X,XXX | X,XXX | +X% |
| Avg Order Value | $XXX | $XXX | +X% |
| Customer Acquisition | XXX | XXX | +X% |

## Performance Insights
### 🟢 What's Working Well
- [Insight with supporting data]
- [Insight with supporting data]

### 🔴 Areas of Concern  
- [Issue with impact analysis]
- [Issue with impact analysis]

## Action Items
- [ ] **Priority 1**: [Specific action] - Owner: [Name] - Due: [Date]
- [ ] **Priority 2**: [Specific action] - Owner: [Name] - Due: [Date]

## Next Quarter Forecast
[Brief prediction with rationale]`
            }}
            tip="AI excels at pattern matching. When you show the exact format, structure, and style you want, you get consistent, professional results every time. This eliminates the need for manual reformatting and ensures your outputs are always ready to use."
          />
        );
      case 5:
        return (
          <PromptCard
            number="5"
            icon={<Zap className="h-6 w-6" />}
            title="Chain Tasks Step-by-Step"
            description="Break complex requests into sequential, manageable steps. Complete one step, verify the result, then move to the next. This prevents errors and improves quality dramatically."
            difficulty="Intermediate"
            xp={125}
            examples={{
              bad: "Analyze this customer data, create detailed personas, develop marketing strategies for each persona, write email campaigns, and suggest A/B testing plans.",
              good: `Let's work through this systematically:

**STEP 1: Data Analysis**
First, analyze the customer data and identify 3-5 distinct behavioral segments based on:
- Purchase patterns
- Engagement levels  
- Demographics
- Product usage

[Wait for Step 1 completion, then continue...]

**STEP 2: Persona Development**
For each segment from Step 1, create detailed personas including:
- Demographics & psychographics
- Pain points & motivations
- Preferred communication channels
- Buying behaviors

**STEP 3: Strategy Development**
[Continue only after Step 2 is complete...]

**STEP 4: Campaign Creation**
[Continue only after Step 3 is complete...]`
            }}
            tip="Complex tasks fail when you try to do everything at once. Breaking them into steps gives you control over quality at each stage. You can catch errors early, adjust direction if needed, and ensure each step builds properly on the previous one. Think of it like cooking - you don't throw all ingredients in simultaneously."
          />
        );
      case 6:
        return (
          <PromptCard
            number="6"
            icon={<MessageSquare className="h-6 w-6" />}
            title="Match Your Audience's Tone"
            description="AI mirrors the tone and style you use in your prompt. Your writing style becomes the AI's writing style - use this to your advantage."
            difficulty="Advanced"
            xp={150}
            examples={{
              bad: "Write in a friendly, approachable tone for young adults who are interested in technology.",
              good: `Hey there! 👋 I need you to write like you're chatting with your tech-savvy best friend who's totally new to this topic. 

Keep it:
- Super conversational (like we're texting)
- Use emojis where they feel natural 
- Throw in some slang but keep it understandable
- Be encouraging and excited about the topic
- Don't worry about being "professional" - just be real and helpful!

Think less "corporate presentation" and more "excited friend explaining something cool they just learned."`
            }}
            tip="This is emotional contagion in text form. If you write with energy and enthusiasm, AI responds with energy. If you're formal and structured, AI mirrors that formality. If you're casual and conversational, AI becomes casual too. Your tone is the template for the response tone."
          />
        );
      case 7:
        return (
          <PromptCard
            number="7"
            icon={<CheckCircle className="h-6 w-6" />}
            title="Use Positive Language"
            description="Tell AI what TO do, not what NOT to do. Positive instructions are clearer, more effective, and less likely to trigger the behavior you're trying to avoid."
            difficulty="Advanced"
            xp={150}
            examples={{
              bad: "Don't mention competitors. Don't talk about pricing. Don't use technical jargon. Don't make it too long. Don't be boring.",
              good: `Focus exclusively on these elements:
✓ Highlight our product's unique benefits
✓ Use simple, everyday language (avoid technical terms)
✓ Keep responses to 2-3 sentences maximum
✓ Include customer success stories and real examples
✓ Maintain an enthusiastic but professional tone
✓ Emphasize practical applications and outcomes`
            }}
            tip="Negative instructions often backfire because they put the unwanted behavior front-and-center in AI's 'thinking.' It's like saying 'don't think of a pink elephant' - now you're thinking of one! Positive framing gives clear direction toward what you want, not away from what you don't want."
          />
        );
      case 8:
        return (
          <PromptCard
            number="8"
            icon={<Brain className="h-6 w-6" />}
            title="Context Window Management"
            description="Understand AI memory limitations and structure long conversations to maintain context. Learn to refresh, summarize, and prioritize information effectively."
            difficulty="Advanced"
            xp={175}
            examples={{
              bad: "Continuing from our previous 47 messages about the marketing campaign, now I also want to discuss the budget, timeline, team structure, and competitive analysis...",
              good: `**Context Refresh**: We're developing a Q4 marketing campaign for our SaaS product.

**Key Decisions Made**:
- Target audience: Small business owners
- Primary channel: LinkedIn + email
- Budget: $50K
- Timeline: 8 weeks

**Current Focus**: Now optimizing the campaign messaging strategy.

**Today's Question**: Based on this context, help me craft 3 different value propositions for A/B testing...`
            }}
            tip="AI has limited memory in long conversations. Every 15-20 exchanges, provide a 'context refresh' summarizing key points and current focus. Think of it like briefing a new team member who missed earlier meetings - give them just enough background to contribute effectively to the current discussion."
          />
        );
      case 9:
        return (
          <PromptCard
            number="9"
            icon={<RefreshCw className="h-6 w-6" />}
            title="Error Recovery Techniques"
            description="What to do when AI misunderstands your request. Learn to diagnose problems, provide clarification, and guide AI back on track efficiently."
            difficulty="Advanced"
            xp={175}
            examples={{
              bad: "That's completely wrong. Try again and do it right this time.",
              good: `I can see the response went off-track. Let me clarify:

**What I got**: [Briefly describe what AI provided]
**What I actually need**: [Specific correction]

**Clarification**: 
- Focus only on [specific area]
- Ignore [what to exclude]
- Use this format: [example]

**Reframe**: Instead of thinking about [what AI focused on], think about [correct perspective].

Let's try this again with this clearer direction.`
            }}
            tip="When AI goes wrong, don't just say it's wrong - diagnose WHY it went wrong and provide specific corrections. Usually AI misunderstands the task scope, format, or context. Address the root cause, not just the symptoms, and you'll get better results faster."
          />
        );
      case 10:
        return (
          <PromptCard
            number="10"
            icon={<FileText className="h-6 w-6" />}
            title="Template and Pattern Libraries"
            description="Build reusable prompt templates for common tasks. Create a personal library of proven patterns that you can adapt and reuse."
            difficulty="Expert"
            xp={200}
            examples={{
              bad: "Analyze this data and give me insights like you did last time.",
              good: `**ANALYSIS TEMPLATE v2.1**

<role>Senior Data Analyst</role>
<data>[INSERT DATA HERE]</data>

<analysis_framework>
1. **Data Quality Check**: Completeness, accuracy, outliers
2. **Key Metrics**: [Specify 3-5 core metrics]
3. **Trend Analysis**: Patterns over time
4. **Segmentation**: Break down by relevant categories
5. **Anomaly Detection**: Unusual patterns or outliers
6. **Correlation Analysis**: Relationships between variables
</analysis_framework>

<output_format>
## Executive Summary
[2-3 key takeaways]

## Detailed Findings
[Structured analysis following framework]

## Recommendations
[Specific, actionable next steps]
</output_format>

**Quality Check**: Ensure all numbers include context and confidence levels.`
            }}
            tip="Create templates for your most common tasks: data analysis, content creation, research summaries, etc. Version your templates (v1.0, v1.1) and improve them based on results. A good template library can save hours of work and ensure consistent quality across all your AI interactions."
          />
        );
      case 11:
        return (
          <PromptCard
            number="11"
            icon={<Lightbulb className="h-6 w-6" />}
            title="Advanced Reasoning Techniques"
            description="Chain-of-thought, tree-of-thought, and other reasoning frameworks that help AI think through complex problems systematically."
            difficulty="Expert"
            xp={225}
            examples={{
              bad: "Solve this complex business problem and give me the best solution.",
              good: `Use chain-of-thought reasoning to solve this:

**Problem**: [Complex business scenario]

**Reasoning Process**:
1. **Problem Decomposition**: Break this into 3-4 sub-problems
2. **Constraint Analysis**: What are the limitations and requirements?
3. **Option Generation**: For each sub-problem, generate 2-3 possible approaches
4. **Impact Assessment**: Evaluate pros/cons of each option
5. **Integration**: How do the sub-solutions work together?
6. **Risk Analysis**: What could go wrong and how to mitigate?
7. **Implementation Path**: Step-by-step plan with timeline

**Show your work**: Walk me through each step of your reasoning before giving the final recommendation.`
            }}
            tip="When facing complex problems, explicitly ask AI to show its reasoning process. This 'thinking out loud' approach catches errors early and helps you understand the logic behind recommendations. You can then challenge specific steps or ask for alternative reasoning paths."
          />
        );
      case 12:
        return (
          <PromptCard
            number="12"
            icon={<Trophy className="h-6 w-6" />}
            title="The Complete Mastery Guide"
            description="Putting it all together: How to combine multiple techniques, develop your own style, and become an expert prompt engineer."
            difficulty="Master"
            xp={250}
            examples={{
              bad: "Use all the best prompt engineering techniques to help me with this project.",
              good: `**MASTER-LEVEL PROMPT ARCHITECTURE**

<meta_context>
Complex project requiring multiple techniques integration
</meta_context>

<role>
Expert consultant with 15+ years in [specific domain]
</role>

<reasoning_framework>
1. Chain-of-thought analysis
2. Multi-perspective evaluation  
3. Risk-weighted decision making
</reasoning_framework>

<data>
[Structured, tagged data sections]
</data>

<task_decomposition>
Phase 1: [Initial analysis with checkpoints]
Phase 2: [Solution development with validation]
Phase 3: [Implementation planning with review]
</task_decomposition>

<quality_controls>
- Verify assumptions at each step
- Challenge your own recommendations
- Provide confidence levels (1-10) for each conclusion
- Include alternative approaches
</quality_controls>

<output_specifications>
[Detailed format requirements]
</output_specifications>

**Process**: Work through this systematically, showing reasoning at each step.`
            }}
            tip="Mastery means knowing when and how to combine techniques. Not every prompt needs every technique - use the minimum viable complexity for your task. Start simple, add complexity only when needed. The best prompt engineers make difficult tasks look effortless through elegant simplicity."
          />
        );
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
