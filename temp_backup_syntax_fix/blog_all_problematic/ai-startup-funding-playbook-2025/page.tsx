import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Tag, Star, Zap, Globe, Leaf, TrendingUp, Users, Target, CheckCircle, DollarSign, BarChart3, Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Startup Funding Playbook 2025: From Seed to Series A',
  description: 'Master AI startup funding with our comprehensive playbook. Learn proven strategies to secure $47B+ in AI funding, with real examples and pitch templates.',
  keywords: 'AI startup funding, venture capital, AI investment, startup funding, Series A, seed funding, AI pitch deck',
  openGraph: {
    title: 'AI Startup Funding Playbook 2025: From Seed to Series A',
    description: 'Master AI startup funding with our comprehensive playbook. Learn proven strategies to secure $47B+ in AI funding, with real examples and pitch templates.',
    type: 'article',
    publishedTime: '2025-01-17T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['AI', 'Startup', 'Funding', 'Venture Capital', 'Investment'],
  },
};

const fundingStats = [
  { label: 'Total AI Funding 2024', value: '$47.2B', icon: DollarSign },
  { label: 'Average Series A', value: '$15.2M', icon: BarChart3 },
  { label: 'Success Rate', value: '23%', icon: Target },
  { label: 'Time to Close', value: '4.2 months', icon: Clock },
];

const fundingRounds = [
  {
    stage: 'Pre-Seed',
    amount: '$100K - $1M',
    valuation: '$2M - $10M',
    investors: 'Angel investors, accelerators',
    timeline: '1-3 months',
    keyMetrics: ['MVP validation', 'Initial traction', 'Team building'],
    description: 'Prove your concept and build initial traction'
  },
  {
    stage: 'Seed',
    amount: '$1M - $5M',
    valuation: '$5M - $25M',
    investors: 'VCs, angel groups, accelerators',
    timeline: '2-4 months',
    keyMetrics: ['Product-market fit', 'Revenue growth', 'User acquisition'],
    description: 'Scale your product and establish market presence'
  },
  {
    stage: 'Series A',
    amount: '$5M - $25M',
    valuation: '$25M - $100M',
    investors: 'Top-tier VCs, strategic investors',
    timeline: '3-6 months',
    keyMetrics: ['Strong revenue growth', 'Market expansion', 'Team scaling'],
    description: 'Accelerate growth and expand market reach'
  }
];

const pitchDeckSections = [
  {
    slide: 1,
    title: 'Problem & Solution',
    description: 'Clearly articulate the problem you solve and your unique solution',
    keyPoints: ['Market size and opportunity', 'Pain points validation', 'Solution differentiation'],
    timeAllocation: '2-3 minutes'
  },
  {
    slide: 2,
    title: 'Market Opportunity',
    description: 'Demonstrate the size and growth potential of your target market',
    keyPoints: ['TAM, SAM, SOM analysis', 'Market trends and growth', 'Competitive landscape'],
    timeAllocation: '2-3 minutes'
  },
  {
    slide: 3,
    title: 'Product & Technology',
    description: 'Showcase your AI technology and product capabilities',
    keyPoints: ['Technical architecture', 'AI/ML capabilities', 'Product roadmap'],
    timeAllocation: '3-4 minutes'
  },
  {
    slide: 4,
    title: 'Business Model',
    description: 'Explain how you generate revenue and achieve profitability',
    keyPoints: ['Revenue streams', 'Pricing strategy', 'Unit economics'],
    timeAllocation: '2-3 minutes'
  },
  {
    slide: 5,
    title: 'Traction & Metrics',
    description: 'Present your growth metrics and key performance indicators',
    keyPoints: ['Revenue growth', 'User metrics', 'Customer acquisition'],
    timeAllocation: '3-4 minutes'
  },
  {
    slide: 6,
    title: 'Team & Execution',
    description: 'Highlight your team\'s expertise and execution capabilities',
    keyPoints: ['Founder backgrounds', 'Key hires', 'Advisory board'],
    timeAllocation: '2-3 minutes'
  },
  {
    slide: 7,
    title: 'Financial Projections',
    description: 'Present your financial forecasts and funding requirements',
    keyPoints: ['Revenue projections', 'Burn rate', 'Use of funds'],
    timeAllocation: '2-3 minutes'
  },
  {
    slide: 8,
    title: 'Ask & Next Steps',
    description: 'Clearly state your funding ask and next steps',
    keyPoints: ['Funding amount', 'Valuation', 'Timeline'],
    timeAllocation: '1-2 minutes'
  }
];

const successStories = [
  {
    company: 'Anthropic',
    funding: '$7.3B',
    stage: 'Series C',
    investors: 'Google, Salesforce, Amazon',
    keyFactors: ['Advanced AI safety research', 'Strong technical team', 'Clear market need'],
    valuation: '$18.4B'
  },
  {
    company: 'OpenAI',
    funding: '$13B+',
    stage: 'Multiple rounds',
    investors: 'Microsoft, Khosla Ventures',
    keyFactors: ['Breakthrough AI technology', 'Massive market opportunity', 'Strategic partnerships'],
    valuation: '$80B+'
  },
  {
    company: 'Hugging Face',
    funding: '$235M',
    stage: 'Series D',
    investors: 'Google, Nvidia, Salesforce',
    keyFactors: ['Open-source AI platform', 'Strong developer community', 'Clear monetization'],
    valuation: '$4.5B'
  }
];

const redFlags = [
  'Unrealistic financial projections',
  'Weak technical team',
  'No clear competitive advantage',
  'Poor market timing',
  'Lack of customer validation',
  'Unclear business model',
  'Overly complex technology',
  'No clear path to profitability'
];

const greenFlags = [
  'Strong technical founding team',
  'Clear product-market fit',
  'Growing revenue and user base',
  'Large addressable market',
  'Defensible technology or business model',
  'Experienced advisors',
  'Clear competitive differentiation',
  'Realistic financial projections'
];

export default function AIStartupFundingPlaybook2025() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Featured Guide
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              AI Startup Funding Playbook 2025
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-4xl mx-auto">
              Master the Art of Securing $47B+ in AI Funding: From Seed to Series A
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-green-200">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                22 min read
              </div>
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                Startup Strategy
              </div>
              <div className="flex items-center">
                <DollarSign className="w-4 h-4 mr-2" />
                Funding
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {fundingStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The AI Funding Landscape in 2025</h2>
            <p className="text-lg text-gray-600 mb-8">
              The AI startup ecosystem is experiencing unprecedented growth, with over $47 billion invested in AI companies in 2024 alone. 
              This represents a 40% increase from the previous year, driven by breakthrough technologies in generative AI, machine learning, 
              and autonomous systems.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              However, with increased funding comes increased competition. The average time to close a funding round has decreased to 4.2 months, 
              but the bar for what investors expect has risen significantly. This playbook will guide you through the entire funding process, 
              from initial preparation to closing your round.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why AI Startups Are Attracting Record Funding</h3>
            <p className="text-lg text-gray-600 mb-6">
              AI startups are uniquely positioned to capture massive market opportunities due to several key factors:
            </p>

            <ul className="list-disc list-inside text-lg text-gray-600 mb-8 space-y-2">
              <li><strong>Massive Market Potential:</strong> AI is transforming every industry, creating trillion-dollar opportunities</li>
              <li><strong>Scalable Technology:</strong> AI solutions can serve millions of users with minimal marginal costs</li>
              <li><strong>Defensible Moats:</strong> Data, algorithms, and network effects create strong competitive advantages</li>
              <li><strong>High ROI Potential:</strong> AI can deliver 10x improvements in efficiency and productivity</li>
              <li><strong>Strategic Value:</strong> Large corporations are eager to acquire AI capabilities</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Funding Rounds Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Funding Rounds</h2>
            <p className="text-lg text-gray-600">Navigate each stage of the funding journey with confidence</p>
          </div>
          <div className="space-y-8">
            {fundingRounds.map((round, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{round.stage}</h3>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                      {round.amount}
                    </div>
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                      {round.valuation}
                    </div>
                    <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                      {round.timeline}
                    </div>
                  </div>
                </div>
                <p className="text-lg text-gray-600 mb-4">{round.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Investors</h4>
                    <p className="text-gray-600">{round.investors}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Metrics</h4>
                    <ul className="text-gray-600 space-y-1">
                      {round.keyMetrics.map((metric, metricIndex) => (
                        <li key={metricIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pitch Deck Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Perfect AI Pitch Deck</h2>
            <p className="text-lg text-gray-600">Structure your presentation for maximum impact</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pitchDeckSections.map((section, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-green-600 mb-2">{section.slide}</div>
                <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{section.description}</p>
                <div className="text-xs text-gray-500 mb-3">
                  Time: {section.timeAllocation}
                </div>
                <ul className="text-xs text-gray-600 space-y-1">
                  {section.keyPoints.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <div className="w-1 h-1 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600">Learn from the most successful AI startups</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{story.company}</h3>
                <div className="text-2xl font-bold text-green-600 mb-2">{story.funding}</div>
                <div className="text-sm text-gray-500 mb-4">{story.stage} • Valuation: {story.valuation}</div>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Key Investors:</h4>
                  <p className="text-sm text-gray-600">{story.investors}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Success Factors:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {story.keyFactors.map((factor, factorIndex) => (
                      <li key={factorIndex} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                        {factor}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Red Flags vs Green Flags */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-red-900 mb-6">🚩 Red Flags to Avoid</h3>
              <ul className="space-y-3">
                {redFlags.map((flag, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-red-800">{flag}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-green-900 mb-6">✅ Green Flags to Highlight</h3>
              <ul className="space-y-3">
                {greenFlags.map((flag, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-green-800">{flag}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your AI Funding?</h2>
          <p className="text-xl text-green-100 mb-8">
            Get access to our complete funding toolkit including pitch deck templates, 
            investor database, and personalized coaching.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-green-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Funding Support
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/resources/ai-startup-funding-toolkit-2025"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-900 transition-colors"
            >
              Download Toolkit
            </Link>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/blog/ai-2025-startup-ecosystem" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-4">🚀</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-green-600">AI Startup Ecosystem 2025</h3>
                <p className="text-gray-600 text-sm">Complete overview of the AI startup landscape</p>
              </div>
            </Link>
            <Link href="/resources/ai-pitch-deck-templates" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-4">📊</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-green-600">Pitch Deck Templates</h3>
                <p className="text-gray-600 text-sm">Professional templates for AI startups</p>
              </div>
            </Link>
            <Link href="/case-studies/ai-startup-success-stories" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-4">🏆</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-green-600">Success Stories</h3>
                <p className="text-gray-600 text-sm">Real examples of AI startup success</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}