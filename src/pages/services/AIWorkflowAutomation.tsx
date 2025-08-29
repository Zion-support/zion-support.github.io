import React from 'react';
import { Link } from 'react-router-dom';
import { Workflow, Bot, Zap, Shield, BarChart3, Users, Clock, CheckCircle, ArrowRight, ExternalLink, Brain, Cpu, Database, Globe, Lock, TrendingUp } from 'lucide-react';

const AIWorkflowAutomation = () => {
  const features = [
    {
      icon: Workflow,
      title: 'Intelligent Process Orchestration',
      description: 'AI-powered workflow automation that learns from your business processes and optimizes them continuously.',
      benefits: [
        'Reduce manual tasks by 80%',
        'Real-time process monitoring',
        'Predictive workflow optimization',
        'Cross-platform integration'
      ],
      price: 'From $299/month'
    },
    {
      icon: Bot,
      title: 'AI Agent Management',
      description: 'Deploy and manage autonomous AI agents for customer service, sales, and operational tasks.',
      benefits: [
        '24/7 automated customer support',
        'Intelligent lead qualification',
        'Automated data entry and validation',
        'Multi-language support'
      ],
      price: 'From $199/month per agent'
    },
    {
      icon: Zap,
      title: 'Smart Automation Triggers',
      description: 'Event-driven automation with AI-powered decision making and conditional logic.',
      benefits: [
        'Real-time event processing',
        'Intelligent trigger conditions',
        'Automated escalation paths',
        'Performance analytics'
      ],
      price: 'From $149/month'
    },
    {
      icon: Shield,
      title: 'Compliance & Governance',
      description: 'Built-in compliance controls, audit trails, and governance frameworks for regulated industries.',
      benefits: [
        'SOC2 Type II compliance',
        'GDPR/CCPA automation',
        'Audit trail maintenance',
        'Role-based access control'
      ],
      price: 'From $399/month'
    }
  ];

  const useCases = [
    {
      title: 'Customer Service Automation',
      description: 'Automate ticket routing, response generation, and escalation based on AI analysis.',
      icon: Users,
      roi: '300% ROI in 6 months'
    },
    {
      title: 'Sales Process Optimization',
      description: 'Automate lead scoring, follow-up sequences, and opportunity management.',
      icon: TrendingUp,
      roi: '250% increase in conversion'
    },
    {
      title: 'HR & Recruitment',
      description: 'Automate candidate screening, interview scheduling, and onboarding processes.',
      icon: CheckCircle,
      roi: '40% faster hiring cycle'
    },
    {
      title: 'Financial Operations',
      description: 'Automate invoice processing, expense approval, and financial reporting.',
      icon: BarChart3,
      roi: '60% reduction in processing time'
    }
  ];

  const technologies = [
    { name: 'OpenAI GPT-4', description: 'Advanced language processing and decision making' },
    { name: 'Anthropic Claude', description: 'Enterprise-grade AI with safety controls' },
    { name: 'Custom LLMs', description: 'Domain-specific models for specialized workflows' },
    { name: 'RPA Integration', description: 'Seamless integration with existing RPA tools' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 h-[28rem] w-[28rem] rounded-full bg-purple-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-900/50 px-4 py-1 text-cyan-300">
            <Brain className="h-4 w-4" />
            <span className="text-xs font-semibold tracking-wider">AI WORKFLOW AUTOMATION</span>
          </div>
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl mb-6">
            Transform Your Business with
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> AI-Powered Automation</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Streamline operations, reduce costs, and boost productivity with intelligent workflow automation that learns and adapts to your business needs.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all">
              Start Free Trial
            </Link>
            <Link to="/request-quote" className="rounded-lg border border-cyan-400/40 px-6 py-3 font-semibold text-cyan-300 hover:bg-white/5 transition-all">
              Request Demo
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:border-cyan-400/30 hover:bg-white/10">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-300">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-slate-300 mb-6">{feature.description}</p>
              <ul className="space-y-3 mb-6">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-200">
                    <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="text-2xl font-bold text-cyan-300">{feature.price}</div>
            </div>
          ))}
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Proven Use Cases & ROI</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-600/20 text-purple-300">
                  <useCase.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                <p className="text-sm text-slate-300 mb-3">{useCase.description}</p>
                <div className="text-sm font-semibold text-green-400">{useCase.roi}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Powered by Cutting-Edge AI</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {technologies.map((tech, index) => (
              <div key={index} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md text-center">
                <h3 className="text-lg font-semibold mb-2">{tech.name}</h3>
                <p className="text-sm text-slate-300">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Flexible Pricing Plans</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-300 mb-6">$299<span className="text-lg text-slate-300">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-cyan-400" />Up to 10 workflows</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-cyan-400" />Basic AI agents</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-cyan-400" />Standard integrations</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-cyan-400" />Email support</li>
              </ul>
              <Link to="/contact" className="w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 py-3 text-center font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all">
                Get Started
              </Link>
            </div>

            <div className="rounded-xl border-2 border-cyan-400 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-8 backdrop-blur-md relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-300 mb-6">$799<span className="text-lg text-slate-300">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-cyan-400" />Unlimited workflows</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-cyan-400" />Advanced AI agents</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-cyan-400" />Premium integrations</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-cyan-400" />Priority support</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-cyan-400" />Custom training</li>
              </ul>
              <Link to="/contact" className="w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 py-3 text-center font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all">
                Start Free Trial
              </Link>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-300 mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-cyan-400" />Custom AI models</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-cyan-400" />Dedicated support</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-cyan-400" />On-premise deployment</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-cyan-400" />Custom integrations</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-cyan-400" />SLA guarantees</li>
              </ul>
              <Link to="/contact" className="w-full rounded-lg border border-cyan-400 px-6 py-3 text-center font-semibold text-cyan-300 hover:bg-cyan-400 hover:text-white transition-all">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 p-12 backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Workflows?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already saving time and money with AI-powered workflow automation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all">
                Start Your Free Trial
              </Link>
              <a href="mailto:kleber@ziontechgroup.com" className="rounded-lg border border-cyan-400 px-8 py-4 font-semibold text-cyan-300 hover:bg-cyan-400 hover:text-white transition-all">
                Schedule a Demo
              </a>
            </div>
            <div className="mt-6 text-sm text-slate-400">
              Contact: +1 302 464 0950 · kleber@ziontechgroup.com · 364 E Main St STE 1008 Middletown DE 19709
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIWorkflowAutomation;