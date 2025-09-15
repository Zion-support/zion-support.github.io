import React from 'react';
import { Workflow, BarChart3, ArrowRight, Check, ExternalLink, Phone, Mail, Zap, Target, Clock, Cpu, Globe } from 'lucide-react';

export default function AIWorkflowOrchestrator() {
  const features = [
    'AI-powered workflow automation and orchestration',
    'Intelligent process optimization and decision making',
    'Real-time workflow monitoring and analytics',
    'Automated task assignment and resource allocation',
    'Predictive workflow failure prevention',
    'Multi-system integration and synchronization',
    'Advanced workflow templates and customization',
    'Intelligent exception handling and recovery',
    'Comprehensive audit trail and compliance',
    'Scalable workflow engine for enterprise use'
  ];

  const benefits = [
    'Increase workflow efficiency by 70%',
    'Reduce manual errors by 85%',
    'Improve process completion time by 60%',
    'Reduce operational costs by 45%',
    'Enable 24/7 automated operations',
    'Provide real-time process visibility'
  ];

  const useCases = [
    'Enterprise process automation',
    'Manufacturing workflow optimization',
    'Healthcare process management',
    'Financial services automation',
    'Supply chain orchestration',
    'Customer service workflow automation'
  ];

  const tiers = [
    { 
      name: 'Workflow Starter', 
      price: '$499/mo', 
      details: ['Up to 100 workflows', 'Basic AI orchestration', 'Standard reporting', 'Email support'] 
    },
    { 
      name: 'Workflow Professional', 
      price: '$1,299/mo', 
      details: ['Up to 500 workflows', 'Advanced AI features', 'Custom dashboards', 'Priority support'] 
    },
    { 
      name: 'Workflow Enterprise', 
      price: '$3,999/mo', 
      details: ['Unlimited workflows', 'Full AI suite', 'White-label options', '24/7 support'] 
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Workflow className="w-4 h-4 mr-2" /> AI-powered workflow orchestration
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">AI Workflow Orchestrator</h1>
          <p className="text-zion-slate-light text-xl">Transform your business processes with AI-powered workflow orchestration that automates, optimizes, and orchestrates complex business operations.</p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">Intelligent Workflow Features</h2>
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
                <p className="text-zion-slate-dark/70">Streamline your operations with AI-powered workflow automation and intelligent process orchestration.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">Ready to Orchestrate Your Workflows?</h2>
          <p className="text-zion-slate-dark/70 text-lg">Get started with AI-powered workflow orchestration today</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Start Free Trial</h3>
            <p className="mb-6">Experience the power of AI-driven workflow automation with our 14-day free trial</p>
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
            Ready to revolutionize your workflow automation? Contact us today to learn how AI-powered orchestration can transform your business operations.
          </p>
        </div>
      </section>
    </div>
  );
}
