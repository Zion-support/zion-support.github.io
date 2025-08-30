// Removed unused: import React from 'react';
import { Users, BarChart3, ArrowRight, Check, ExternalLink, Phone, Mail, Heart, TrendingUp, MessageSquare, Eye, Zap, Target, Globe } from 'lucide-react';

export default function AICustomerExperienceAnalytics() {
  const features = [
    'AI-powered customer journey mapping and analysis',
    'Real-time sentiment analysis and emotion detection',
    'Predictive customer behavior modeling',
    'Automated customer feedback collection and analysis',
    'Multi-channel experience tracking and optimization',
    'Intelligent customer segmentation and personalization',
    'Advanced customer lifetime value prediction',
    'Automated customer satisfaction scoring',
    'Real-time customer experience monitoring',
    'AI-driven customer experience optimization recommendations'
  ];

  const benefits = [
    'Increase customer satisfaction scores by 45%',
    'Reduce customer churn by 60%',
    'Improve customer lifetime value by 35%',
    'Boost customer engagement by 50%',
    'Reduce customer support costs by 40%',
    'Enable data-driven customer experience decisions'
  ];

  const useCases = [
    'E-commerce customer experience optimization',
    'SaaS product user experience improvement',
    'Banking and financial services CX',
    'Healthcare patient experience enhancement',
    'Retail customer journey optimization',
    'Hospitality guest experience management'
  ];

  const tiers = [
    { 
      name: 'CX Starter', 
      price: '$399/mo', 
      details: ['Up to 10K customers', 'Basic AI analytics', 'Standard reporting', 'Email support'] 
    },
    { 
      name: 'CX Professional', 
      price: '$999/mo', 
      details: ['Up to 100K customers', 'Advanced AI features', 'Custom dashboards', 'Priority support'] 
    },
    { 
      name: 'CX Enterprise', 
      price: '$2,999/mo', 
      details: ['Unlimited customers', 'Full AI suite', 'White-label options', '24/7 support'] 
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Users className="w-4 h-4 mr-2" /> AI-powered customer experience analytics
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">AI Customer Experience Analytics</h1>
          <p className="text-zion-slate-light text-xl">Transform customer insights into actionable intelligence with AI-powered analytics that predict, optimize, and enhance every customer interaction.</p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">Intelligent CX Features</h2>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start">
                  <Check className="w-5 h-5 text-zion-cyan mr-3 mt-0.5" />
                  <span className="text-zion-slate-dark">{f}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-zion-slate-dark mb-3">Key Benefits</h3>
              <ul className="space-y-2">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start">
                    <Zap className="w-4 h-4 text-zion-cyan mr-2 mt-0.5" />
                    <span className="text-zion-slate-dark text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-white border border-zion-slate-light/20 rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-semibold text-zion-slate-dark mb-4">Pricing Plans</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {tiers.map((t) => (
                <div key={t.name} className="rounded-lg p-4 border border-zion-slate-light/30">
                  <div className="text-lg font-semibold mb-1">{t.name}</div>
                  <div className="text-2xl font-bold text-zion-cyan mb-2">{t.price}</div>
                  <ul className="text-sm text-zion-slate-dark space-y-1">
                    {t.details.map((d) => (<li key={d}>{d}</li>))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-zion-slate-light/10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-zion-slate-dark text-center mb-12">Use Cases & Industries</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase) => (
              <div key={useCase} className="bg-white rounded-xl p-6 shadow-md border border-zion-slate-light/20">
                <Target className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-semibold text-zion-slate-dark mb-3">{useCase}</h3>
                <p className="text-zion-slate-dark/70">Optimize customer experiences with AI-powered insights and predictive analytics.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">Ready to Transform Your Customer Experience?</h2>
          <p className="text-zion-slate-dark/70 text-lg">Get started with AI-powered customer experience analytics today</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Start Free Trial</h3>
            <p className="mb-6">Experience the power of AI-driven customer insights with our 14-day free trial</p>
            <button className="bg-white text-zion-cyan px-6 py-3 rounded-lg font-semibold hover:bg-zion-slate-light transition-colors">
              Start Free Trial
            </button>
          </div>
          
          <div className="bg-zion-slate-dark rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Schedule Demo</h3>
            <p className="mb-6">See our platform in action with a personalized demo from our experts</p>
            <button className="bg-zion-cyan text-white px-6 py-3 rounded-lg font-semibold hover:bg-zion-cyan/80 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-zion-slate-dark text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="h-6 w-6 text-zion-cyan" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="h-6 w-6 text-zion-cyan" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Globe className="h-6 w-6 text-zion-cyan" />
              <span>https://ziontechgroup.com</span>
            </div>
          </div>
          <p className="text-zion-slate-light">
            Ready to revolutionize your customer experience? Contact us today to learn how AI-powered analytics can transform your business.
          </p>
        </div>
      </section>
    </div>
  );
}