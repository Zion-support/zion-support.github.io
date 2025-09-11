import React from 'react';
import { SEO } from '@/components/SEO';
import { MessageCircle, Bot, Zap, Check, ExternalLink, Phone, Mail, ArrowRight, Clock, Users, TrendingUp, Headphones, Shield } from 'lucide-react';

export default function AICustomerSupportAutomation() {
  const features = [
    '24/7 AI chatbot with human-like conversations',
    'Multi-language support (50+ languages)',
    'Intelligent ticket routing and prioritization',
    'Sentiment analysis and emotion detection',
    'Automated response generation with brand voice',
    'Seamless human-AI handoff system',
    'Integration with CRM, helpdesk, and messaging platforms',
    'Advanced analytics and performance insights'
  ];

  const benefits = [
    'Reduce support costs by 60-80%',
    'Improve customer satisfaction by 40%',
    'Handle 10x more support requests',
    '24/7 availability without human limitations',
    'Consistent quality across all interactions'
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$79',
      period: '/mo',
      conversations: 'Up to 1,000 conversations/month',
      features: ['Basic AI chatbot', '5 integrations', 'Email support', 'Standard analytics']
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/mo',
      conversations: 'Up to 10,000 conversations/month',
      features: ['Advanced AI with sentiment analysis', 'Unlimited integrations', 'Priority support', 'Custom branding', 'Advanced analytics']
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/mo',
      conversations: 'Unlimited conversations',
      features: ['Full AI suite', 'White-label options', 'Dedicated support', 'SAML/SSO', 'Custom AI training', 'API access']
    }
  ];

  const useCases = [
    'E-commerce businesses',
    'SaaS companies',
    'Financial services',
    'Healthcare providers',
    'Travel agencies',
    'Educational institutions'
  ];

  const integrations = [
    'Slack', 'Discord', 'WhatsApp', 'Facebook Messenger', 'Telegram',
    'Zendesk', 'Intercom', 'Freshdesk', 'Help Scout', 'Zoho Desk',
    'Salesforce', 'HubSpot', 'Pipedrive', 'Monday.com', 'Notion'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="AI-Powered Customer Support Automation - Zion Tech Group"
        description="Revolutionary AI customer support platform that provides 24/7 automated assistance, intelligent routing, and seamless human handoffs."
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
        <div className="relative container mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 text-green-300 mb-6">
            <Bot className="w-4 h-4 mr-2" /> AI Customer Support Automation
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI Customer Support
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
            Transform your customer support with AI that works 24/7, understands emotions, and provides instant, 
            accurate responses while seamlessly connecting to human agents when needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://ziontechgroup.com/contact" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
            >
              Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="tel:+13024640950" 
              className="px-8 py-4 border border-green-400/30 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-300 inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose AI Customer Support?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI platform revolutionizes customer support by providing instant, intelligent responses 
              while maintaining the human touch when needed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Measurable Impact</h2>
            <p className="text-xl text-slate-300">See how AI transforms your customer support operations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <p className="text-lg text-slate-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h2>
            <p className="text-xl text-slate-300">Simple, intelligent, and effective customer support automation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Inquiry</h3>
              <p className="text-slate-300">Customer asks a question through any channel (chat, email, social media)</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Processing</h3>
              <p className="text-slate-300">AI analyzes the request, understands context, and generates appropriate response</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Resolution or Handoff</h3>
              <p className="text-slate-300">AI resolves simple issues or seamlessly hands off to human agents for complex cases</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
            <p className="text-xl text-slate-300">Choose the plan that fits your support volume and needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index} 
                className={`bg-slate-800/50 border rounded-xl p-8 ${
                  tier.name === 'Professional' 
                    ? 'border-green-500/50 bg-green-500/5' 
                    : 'border-slate-700/50'
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-green-400 mb-2">
                    {tier.price}<span className="text-lg text-slate-400">{tier.period}</span>
                  </div>
                  <p className="text-slate-400">{tier.conversations}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="https://ziontechgroup.com/contact" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-all duration-300 ${
                    tier.name === 'Professional'
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700'
                      : 'bg-slate-700 hover:bg-slate-600 border border-slate-600'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Seamless Integrations</h2>
            <p className="text-xl text-slate-300">Works with your existing tools and platforms</p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center hover:border-green-500/50 transition-all duration-300">
                <p className="text-sm font-medium text-slate-300">{integration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Perfect For</h2>
            <p className="text-xl text-slate-300">Businesses that want to scale their customer support intelligently</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center">
                <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold">{useCase}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Customer Support?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using AI to provide exceptional customer support 24/7.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="https://ziontechgroup.com/contact" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
            >
              Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="px-8 py-4 border border-green-400/30 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-300 inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" /> Schedule Demo
            </a>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-green-400 mb-2">Phone</h4>
                <a href="tel:+13024640950" className="text-slate-300 hover:text-green-400">
                  +1 302 464 0950
                </a>
              </div>
              <div>
                <h4 className="font-semibold text-green-400 mb-2">Email</h4>
                <a href="mailto:kleber@ziontechgroup.com" className="text-slate-300 hover:text-green-400">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div>
                <h4 className="font-semibold text-green-400 mb-2">Address</h4>
                <p className="text-slate-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-green-400 mb-2">Website</h4>
                <a 
                  href="https://ziontechgroup.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-green-400 inline-flex items-center"
                >
                  ziontechgroup.com <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}