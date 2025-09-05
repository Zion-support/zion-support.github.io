import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { 
  Brain, 
  MessageSquare, 
  Image, 
  Video, 
  Code, 
  FileText, 
  Zap, 
  Star,
  ExternalLink,
  CheckCircle,
  TrendingUp,
  Shield
} from 'lucide-react';

export default function AiToolsPage() {
  const aiTools = [
    {
      icon: <Brain className=&quot;w-8 h-8 text-white&quot; />,
      title: 'ChatGPT Plus',
      description: 'Advanced AI chatbot with enhanced reasoning, web browsing, and plugin capabilities for professional use.',
      features: [
        'Advanced reasoning & analysis',
        'Web browsing & real-time info',
        'Plugin ecosystem access',
        'Code generation & debugging',
        'Professional writing assistance'
      ],
      pricing: '$20/month',
      marketPrice: '$20/month',
      website: 'https://chat.openai.com',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      gradient: 'from-green-400 to-emerald-500',
      popular: true,
      category: 'Conversational AI'
    },
    {
      icon: <Image className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Midjourney',
      description: 'State-of-the-art AI image generation with exceptional quality and artistic control for creative professionals.',
      features: [
        'High-quality image generation',
        'Artistic style control',
        'Commercial usage rights',
        'Community features',
        'Advanced prompting system'
      ],
      pricing: '$10-30/month',
      marketPrice: '$10-30/month',
      website: 'https://midjourney.com',
      color: 'bg-gradient-to-br from-purple-500 to-pink-600',
      textColor: 'text-purple-400',
      gradient: 'from-purple-400 to-pink-500',
      popular: true,
      category: 'Image Generation'
    },
    {
      icon: <Code className=&quot;w-8 h-8 text-white&quot; />,
      title: 'GitHub Copilot',
      description: 'AI-powered code completion and generation that understands your codebase and suggests intelligent solutions.',
      features: [
        'Intelligent code completion',
        'Multi-language support',
        'IDE integration',
        'Code explanation',
        'Security vulnerability detection'
      ],
      pricing: '$10/month',
      marketPrice: '$10-20/month',
      website: 'https://github.com/features/copilot',
      color: 'bg-gradient-to-br from-gray-500 to-black',
      textColor: 'text-gray-400',
      gradient: 'from-gray-400 to-black',
      popular: true,
      category: 'Code Generation'
    },
    {
      icon: <Video className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Runway ML',
      description: 'Professional AI video generation and editing tools for filmmakers, marketers, and content creators.',
      features: [
        'AI video generation',
        'Video editing tools',
        'Motion tracking',
        'Green screen removal',
        'Professional workflows'
      ],
      pricing: '$12-76/month',
      marketPrice: '$15-100/month',
      website: 'https://runwayml.com',
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      textColor: 'text-blue-400',
      gradient: 'from-blue-400 to-indigo-500',
      popular: false,
      category: 'Video Generation'
    },
    {
      icon: <MessageSquare className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Claude Pro',
      description: 'Anthropic\'s advanced AI assistant with superior reasoning, analysis, and document processing capabilities.',
      features: [
        'Advanced reasoning abilities',
        'Document analysis',
        'Code generation',
        'Creative writing',
        'Research assistance'
      ],
      pricing: '$20/month',
      marketPrice: '$20/month',
      website: 'https://claude.ai',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      gradient: 'from-orange-400 to-red-500',
      popular: false,
      category: 'Conversational AI'
    },
    {
      icon: <FileText className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Jasper AI',
      description: 'AI-powered content creation platform for marketers, writers, and businesses with enterprise features.',
      features: [
        'Content generation',
        'Brand voice training',
        'SEO optimization',
        'Team collaboration',
        'Enterprise integrations'
      ],
      pricing: '$39-125/month',
      marketPrice: '$40-150/month',
      website: 'https://jasper.ai',
      color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      gradient: 'from-teal-400 to-cyan-500',
      popular: false,
      category: 'Content Creation'
    }
  ];

  const aiMarketStats = [
    {
      title: 'AI Market Size',
      value: '$136.6B',
      growth: '+37% YoY',
      description: 'Global AI market value in 2024'
    },
    {
      title: 'AI Adoption Rate',
      value: '35%',
      growth: '+12% YoY',
      description: 'Businesses actively using AI tools'
    },
    {
      title: 'AI Investment',
      value: '$93.5B',
      growth: '+28% YoY',
      description: 'Global AI investment in 2024'
    },
    {
      title: 'AI Productivity Gain',
      value: '40%',
      growth: '+15% YoY',
      description: 'Average productivity improvement'
    }
  ];

  const aiCategories = [
    {
      name: 'Conversational AI',
      description: 'Chatbots, virtual assistants, and language models',
      tools: 3,
      avgPrice: '$20/month'
    },
    {
      name: 'Image Generation',
      description: 'AI-powered art, design, and visual content creation',
      tools: 1,
      avgPrice: '$20/month'
    },
    {
      name: 'Code Generation',
      description: 'AI-assisted programming and development tools',
      tools: 1,
      avgPrice: '$10/month'
    },
    {
      name: 'Video Generation',
      description: 'AI video creation and editing tools',
      tools: 1,
      avgPrice: '$44/month'
    },
    {
      name: 'Content Creation',
      description: 'AI-powered writing and content generation',
      tools: 1,
      avgPrice: '$82/month'
    }
  ];

  return (
    <>
      <Head>
        <title>AI Tools & Services | Zion Tech Group - Real AI Solutions with Pricing</title>
        <meta name=&quot;description&quot; content=&quot;Discover real AI tools and services including ChatGPT, Midjourney, GitHub Copilot, and more. All tools include real pricing, features, and direct links.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;AI Tools & Services | Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Real AI tools with pricing and direct links to help boost your productivity and creativity.&quot; />
        <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
      </Head>

      {/* Hero Section */}
      <section className=&quot;relative section-padding bg-gradient-cursor overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,122,204,0.08),transparent_50%)]&quot; />
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,122,204,0.06),transparent_50%)]&quot; />
        <div className=&quot;absolute inset-0 bg-grid opacity-10&quot; />
        
        <div className=&quot;relative z-10 container-cursor text-center&quot;>
          <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-cursor-blue/10 border border-cursor-blue/20 text-cursor-blue text-sm font-medium mb-6&quot;>
            <span className=&quot;w-2 h-2 bg-cursor-blue rounded-full mr-2 animate-pulse&quot; />
            AI Tools & Services
          </div>
          <h1 className=&quot;text-responsive-xl font-black mb-8 gradient-text text-shadow-lg&quot;>
            Real AI Tools for Real Results
          </h1>
          <p className=&quot;text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed&quot;>
            Curated AI tools and services that actually work. Each tool has been tested and verified to provide 
            real value for professionals and businesses. No hype - just results.
          </p>
        </div>
      </section>

      {/* AI Market Statistics */}
      <section className=&quot;section-padding bg-gradient-cursor-accent&quot;>
        <div className=&quot;container-cursor&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-responsive-lg font-bold mb-8 gradient-text text-shadow&quot;>
              AI Market Insights
            </h2>
            <p className=&quot;text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Understanding the AI landscape helps you make informed decisions about which tools to invest in.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16&quot;>
            {aiMarketStats.map((stat, index) => (
              <Card
                key={index}
                className=&quot;card-hover border-gradient-blue text-center&quot;
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className=&quot;p-6&quot;>
                  <h3 className=&quot;text-lg font-semibold text-white mb-3&quot;>{stat.title}</h3>
                  <div className=&quot;text-2xl font-bold text-cursor-blue mb-2&quot;>{stat.value}</div>
                  <div className=&quot;text-sm text-green-400 mb-3&quot;>{stat.growth}</div>
                  <p className=&quot;text-sm text-gray-400&quot;>{stat.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Tools Grid */}
      <section className=&quot;section-padding bg-gradient-cursor&quot;>
        <div className=&quot;container-cursor&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-responsive-lg font-bold mb-8 gradient-text text-shadow&quot;>
              Curated AI Tools & Services
            </h2>
            <p className=&quot;text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Each tool has been carefully selected based on performance, reliability, and real-world value.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
            {aiTools.map((tool, index) => (
              <Card
                key={index}
                className={`card-hover group border-gradient-blue relative ${
                  tool.popular ? 'ring-2 ring-cursor-blue ring-opacity-50' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tool.popular && (
                  <div className=&quot;absolute -top-3 left-1/2 transform -translate-x-1/2&quot;>
                    <div className=&quot;inline-flex items-center px-3 py-1 rounded-full bg-cursor-blue text-white text-xs font-medium&quot;>
                      <Star className=&quot;w-3 h-3 mr-1&quot; />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className=&quot;flex items-start space-x-6&quot;>
                  <div className=&quot;relative&quot;>
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${tool.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {tool.icon}
                    </div>
                    <div className={`absolute -inset-2 bg-gradient-to-r from-transparent via-${tool.gradient} to-transparent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`} />
                  </div>
                  
                  <div className=&quot;flex-1&quot;>
                    <div className=&quot;flex items-center justify-between mb-2&quot;>
                      <h3 className={`text-2xl font-bold ${tool.textColor}`}>
                        {tool.title}
                      </h3>
                      <span className=&quot;text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full&quot;>
                        {tool.category}
                      </span>
                    </div>
                    
                    <p className=&quot;text-gray-400 leading-relaxed mb-6&quot;>
                      {tool.description}
                    </p>
                    
                    <div className=&quot;mb-6&quot;>
                      <div className=&quot;flex items-center justify-between mb-3&quot;>
                        <span className=&quot;text-sm text-gray-500&quot;>Service Price:</span>
                        <span className=&quot;text-lg font-semibold text-cursor-blue&quot;>{tool.pricing}</span>
                      </div>
                      <div className=&quot;flex items-center justify-between mb-3&quot;>
                        <span className=&quot;text-sm text-gray-500&quot;>Market Average:</span>
                        <span className=&quot;text-sm text-gray-400&quot;>{tool.marketPrice}</span>
                      </div>
                    </div>

                    <ul className=&quot;space-y-2 mb-6&quot;>
                      {tool.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className=&quot;flex items-center text-gray-300&quot;>
                          <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-3 flex-shrink-0&quot; />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className=&quot;flex items-center justify-between&quot;>
                      <Button
                        href={tool.website}
                        variant=&quot;primary&quot;
                        size=&quot;sm&quot;
                        className=&quot;bg-cursor-blue hover:bg-cursor-blue-dark&quot;
                      >
                        Try Tool
                        <ExternalLink className=&quot;w-4 h-4 ml-2&quot; />
                      </Button>
                      <div className=&quot;text-right&quot;>
                        <div className=&quot;text-xs text-gray-500&quot;>Direct Link</div>
                        <div className=&quot;text-xs text-cursor-blue font-mono&quot;>{tool.website}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Categories Overview */}
      <section className=&quot;section-padding bg-gradient-cursor-accent&quot;>
        <div className=&quot;container-cursor&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-responsive-lg font-bold mb-8 gradient-text text-shadow&quot;>
              AI Tool Categories
            </h2>
            <p className=&quot;text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Understanding the different types of AI tools helps you build a comprehensive toolkit for your needs.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
            {aiCategories.map((category, index) => (
              <Card
                key={index}
                className=&quot;card-hover border-gradient-blue&quot;
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className=&quot;p-6&quot;>
                  <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{category.name}</h3>
                  <p className=&quot;text-gray-400 mb-4&quot;>{category.description}</p>
                  <div className=&quot;flex items-center justify-between text-sm&quot;>
                    <span className=&quot;text-gray-500&quot;>Tools Available: <span className=&quot;text-white&quot;>{category.tools}</span></span>
                    <span className=&quot;text-cursor-blue font-semibold&quot;>{category.avgPrice}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Implementation Guide */}
      <section className=&quot;section-padding bg-gradient-cursor&quot;>
        <div className=&quot;container-cursor&quot;>
          <div className=&quot;text-center mb-20&quot;>
            <h2 className=&quot;text-responsive-lg font-bold mb-8 gradient-text text-shadow&quot;>
              Getting Started with AI Tools
            </h2>
            <p className=&quot;text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed&quot;>
              Practical advice for implementing AI tools in your workflow and maximizing their value.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
            <Card className=&quot;card-hover border-gradient-blue&quot;>
              <div className=&quot;p-6&quot;>
                <div className=&quot;w-16 h-16 bg-cursor-blue/10 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                  <TrendingUp className=&quot;w-8 h-8 text-cursor-blue&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>Start Small</h3>
                <p className=&quot;text-gray-400 mb-4&quot;>
                  Begin with one AI tool that addresses your most immediate need. Master it before adding more.
                </p>
                <ul className=&quot;space-y-2 text-sm text-gray-300&quot;>
                  <li>• Choose based on your primary use case</li>
                  <li>• Start with free tiers when available</li>
                  <li>• Focus on one tool at a time</li>
                </ul>
              </div>
            </Card>

            <Card className=&quot;card-hover border-gradient-blue&quot;>
              <div className=&quot;p-6&quot;>
                <div className=&quot;w-16 h-16 bg-cursor-blue/10 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                  <Shield className=&quot;w-8 h-8 text-cursor-blue&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>Best Practices</h3>
                <p className=&quot;text-gray-400 mb-4&quot;>
                  Follow proven strategies to get the most out of your AI tools and ensure quality output.
                </p>
                <ul className=&quot;space-y-2 text-sm text-gray-300&quot;>
                  <li>• Always review and edit AI-generated content</li>
                  <li>• Use specific, detailed prompts</li>
                  <li>• Maintain human oversight and creativity</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;section-padding bg-gradient-cursor-accent&quot;>
        <div className=&quot;container-cursor text-center&quot;>
          <h2 className=&quot;text-responsive-lg font-bold mb-8 gradient-text text-shadow&quot;>
            Ready to Supercharge Your Workflow?
          </h2>
          <p className=&quot;text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12&quot;>
            Start with one AI tool or build a complete AI-powered toolkit. Each tool is designed to work independently 
            and integrate seamlessly with your existing processes.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-6 justify-center&quot;>
            <Button
              href=&quot;/micro-saas&quot;
              variant=&quot;primary&quot;
              size=&quot;lg&quot;
              className=&quot;bg-cursor-blue hover:bg-cursor-blue-dark&quot;
            >
              Explore More Tools
            </Button>
            <Button
              href=&quot;/contact&quot;
              variant=&quot;outline&quot;
              size=&quot;lg&quot;
              className=&quot;border-cursor-blue text-cursor-blue hover:bg-cursor-blue hover:text-white&quot;
            >
              Get AI Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}