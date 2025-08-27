import React from 'react';
import SEO from '@/components/SEO';
import { Target, BarChart3, Users, Zap, Check, ExternalLink, Phone, Mail, ArrowRight, TrendingUp, MessageSquare, Mail as MailIcon, Share2, Filter } from 'lucide-react';

export default function AIMarketingAutomation() {
  const features = [
    'AI-powered audience segmentation and targeting',
    'Predictive customer behavior analysis',
    'Automated content personalization and optimization',
    'Multi-channel campaign orchestration',
    'Real-time performance optimization',
    'Advanced A/B testing with AI insights',
    'Lead scoring and qualification automation',
    'ROI tracking and predictive analytics'
  ];

  const benefits = [
    'Increase conversion rates by 40-60%',
    'Reduce customer acquisition costs by 30%',
    'Improve customer lifetime value by 25%',
    'Save 15+ hours per week on marketing tasks',
    'Achieve 3x better campaign performance'
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$99',
      period: '/mo',
      contacts: 'Up to 5,000 contacts',
      features: ['Basic AI segmentation', '5 email campaigns', 'Standard analytics', 'Email support', 'Basic automation']
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/mo',
      contacts: 'Up to 25,000 contacts',
      features: ['Advanced AI insights', 'Unlimited campaigns', 'Custom automation', 'Priority support', 'Advanced analytics', 'Multi-channel campaigns']
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/mo',
      contacts: 'Unlimited contacts',
      features: ['Full AI suite', 'White-label options', 'Dedicated support', 'SAML/SSO', 'Custom integrations', 'Advanced reporting']
    }
  ];

  const useCases = [
    'E-commerce businesses',
    'B2B SaaS companies',
    'Digital agencies',
    'Real estate companies',
    'Healthcare providers',
    'Educational institutions'
  ];

  const channels = [
    'Email Marketing', 'Social Media', 'SMS/Text', 'Push Notifications', 'Web Push',
    'Display Advertising', 'Search Marketing', 'Content Marketing', 'Influencer Marketing'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="AI-Powered Marketing Automation Platform - Zion Tech Group"
        description="Revolutionary AI marketing automation platform that personalizes campaigns, optimizes performance, and maximizes ROI through intelligent automation."
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative container mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 mb-6">
            <Target className="w-4 h-4 mr-2" /> AI Marketing Automation Platform
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            AI Marketing Automation
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
            Transform your marketing with AI that understands your audience, personalizes content, 
            and optimizes campaigns in real-time for maximum engagement and ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://ziontechgroup.com/contact" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 inline-flex items-center"
            >
              Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="tel:+13024640950" 
              className="px-8 py-4 border border-purple-400/30 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300 inline-flex items-center"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose AI Marketing Automation?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI platform revolutionizes marketing by providing intelligent automation, 
              personalization, and optimization that traditional tools simply can't match.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-purple-400" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Measurable Marketing Impact</h2>
            <p className="text-xl text-slate-300">See how AI transforms your marketing performance</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How AI Marketing Automation Works</h2>
            <p className="text-xl text-slate-300">Intelligent, automated, and personalized marketing campaigns</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Audience Analysis</h3>
              <p className="text-slate-300">AI analyzes customer behavior, preferences, and engagement patterns</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-10 h-10 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Content Personalization</h3>
              <p className="text-slate-300">AI automatically personalizes content and messaging for each segment</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-10 h-10 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance Optimization</h3>
              <p className="text-slate-300">Continuous optimization based on real-time performance data</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Channels Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Multi-Channel Marketing</h2>
            <p className="text-xl text-slate-300">Reach your audience across all channels with unified AI automation</p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {channels.map((channel, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center hover:border-purple-500/50 transition-all duration-300">
                <p className="text-sm font-medium text-slate-300">{channel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
            <p className="text-xl text-slate-300">Choose the plan that fits your marketing needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index} 
                className={`bg-slate-800/50 border rounded-xl p-8 ${
                  tier.name === 'Professional' 
                    ? 'border-purple-500/50 bg-purple-500/5' 
                    : 'border-slate-700/50'
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">
                    {tier.price}<span className="text-lg text-slate-400">{tier.period}</span>
                  </div>
                  <p className="text-slate-400">{tier.contacts}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
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
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700'
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

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Perfect For</h2>
            <p className="text-xl text-slate-300">Businesses that want to scale their marketing intelligently</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center">
                <Target className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold">{useCase}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Deep Dive */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Key Features Deep Dive</h2>
            <p className="text-xl text-slate-300">Advanced capabilities that set us apart</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-6">
                <Filter className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI-Powered Segmentation</h3>
              <p className="text-slate-300 mb-4">
                Our AI automatically segments your audience based on behavior, preferences, 
                and engagement patterns, ensuring each customer receives the most relevant content.
              </p>
              <ul className="space-y-2 text-slate-300">
                <li>• Behavioral segmentation</li>
                <li>• Predictive analytics</li>
                <li>• Dynamic audience groups</li>
                <li>• Real-time updates</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
              <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mb-6">
                <MessageSquare className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Smart Content Personalization</h3>
              <p className="text-slate-300 mb-4">
                AI automatically personalizes email content, subject lines, and send times 
                for each individual customer to maximize engagement and conversions.
              </p>
              <ul className="space-y-2 text-slate-300">
                <li>• Dynamic content blocks</li>
                <li>• Personalized subject lines</li>
                <li>• Optimal send time optimization</li>
                <li>• A/B testing automation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Marketing?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using AI to create personalized, 
            high-converting marketing campaigns that drive real results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="https://ziontechgroup.com/contact" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 inline-flex items-center"
            >
              Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="px-8 py-4 border border-purple-400/30 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300 inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" /> Schedule Demo
            </a>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">Phone</h4>
                <a href="tel:+13024640950" className="text-slate-300 hover:text-purple-400">
                  +1 302 464 0950
                </a>
              </div>
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">Email</h4>
                <a href="mailto:kleber@ziontechgroup.com" className="text-slate-300 hover:text-purple-400">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">Address</h4>
                <p className="text-slate-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">Website</h4>
                <a 
                  href="https://ziontechgroup.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-purple-400 inline-flex items-center"
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