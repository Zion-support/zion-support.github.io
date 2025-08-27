import React from 'react';
import SEO from '@/components/SEO';
import { Calendar, Users, BarChart3, Zap, Check, ExternalLink, Phone, Mail, ArrowRight, Clock, Target, TrendingUp } from 'lucide-react';

export default function AIProjectManagement() {
  const features = [
    'AI-powered task prioritization and scheduling',
    'Predictive resource allocation and capacity planning',
    'Automated risk assessment and mitigation suggestions',
    'Smart time tracking with productivity insights',
    'Real-time collaboration with AI-facilitated communication',
    'Advanced reporting with predictive analytics',
    'Integration with 50+ popular tools (Slack, Jira, Asana)',
    'Mobile-first design with offline capabilities'
  ];

  const benefits = [
    'Reduce project delivery time by 30-40%',
    'Improve team productivity by 25%',
    'Cut project costs by 20-35%',
    'Increase project success rate to 95%',
    'Real-time visibility into project health'
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$49',
      period: '/mo',
      users: 'Up to 10 users',
      features: ['Basic AI insights', '5 active projects', 'Standard integrations', 'Email support']
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/mo',
      users: 'Up to 50 users',
      features: ['Advanced AI analytics', 'Unlimited projects', 'Priority support', 'Custom workflows', 'Advanced reporting']
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/mo',
      users: 'Unlimited users',
      features: ['Full AI suite', 'White-label options', 'Dedicated support', 'SAML/SSO', 'Custom integrations', 'API access']
    }
  ];

  const useCases = [
    'Software development teams',
    'Marketing agencies',
    'Construction companies',
    'Consulting firms',
    'Event planning organizations',
    'Research institutions'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="AI-Powered Project Management Platform - Zion Tech Group"
        description="Revolutionary AI-driven project management platform that predicts risks, optimizes resources, and ensures project success with intelligent automation."
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 mb-6">
            <Zap className="w-4 h-4 mr-2" /> AI-Powered Project Management
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI Project Management
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
            Transform your project delivery with AI that predicts risks, optimizes resources, and ensures success. 
            The future of project management is here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://ziontechgroup.com/contact" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
            >
              Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="tel:+13024640950" 
              className="px-8 py-4 border border-blue-400/30 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300 inline-flex items-center"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose AI Project Management?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI platform goes beyond traditional project management tools by providing intelligent insights, 
              predictive analytics, and automated optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-400" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Measurable Results</h2>
            <p className="text-xl text-slate-300">See the impact of AI-powered project management on your business</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <p className="text-lg text-slate-300">{benefit}</p>
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
            <p className="text-xl text-slate-300">Choose the plan that fits your team size and needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index} 
                className={`bg-slate-800/50 border rounded-xl p-8 ${
                  tier.name === 'Professional' 
                    ? 'border-blue-500/50 bg-blue-500/5' 
                    : 'border-slate-700/50'
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-blue-400 mb-2">
                    {tier.price}<span className="text-lg text-slate-400">{tier.period}</span>
                  </div>
                  <p className="text-slate-400">{tier.users}</p>
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
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
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
            <p className="text-xl text-slate-300">Organizations that need intelligent project management</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold">{useCase}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Project Management?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Join thousands of teams already using AI to deliver projects faster, cheaper, and more successfully.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="https://ziontechgroup.com/contact" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
            >
              Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="px-8 py-4 border border-blue-400/30 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300 inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" /> Schedule Demo
            </a>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Phone</h4>
                <a href="tel:+13024640950" className="text-slate-300 hover:text-blue-400">
                  +1 302 464 0950
                </a>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Email</h4>
                <a href="mailto:kleber@ziontechgroup.com" className="text-slate-300 hover:text-blue-400">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Address</h4>
                <p className="text-slate-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Website</h4>
                <a 
                  href="https://ziontechgroup.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-blue-400 inline-flex items-center"
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