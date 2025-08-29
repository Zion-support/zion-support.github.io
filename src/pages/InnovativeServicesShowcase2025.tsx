import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Shield, Zap, Cloud, Database, Globe, Users, BarChart3, CheckCircle, ArrowRight, ExternalLink, Atom, Link as LinkIcon, Workflow, MessageSquare, Heart, Star, TrendingUp, Target, Network, Server, Lock, Activity, Key, Wallet } from 'lucide-react';

const InnovativeServicesShowcase2025 = () => {
  const serviceCategories = [
    {
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence services that transform business operations',
      services: [
        {
          name: 'AI Workflow Automation',
          description: 'Intelligent process orchestration with AI agents and automated decision making',
          price: 'From $299/month',
          features: ['Process automation', 'AI agents', 'Smart triggers', 'Compliance controls'],
          icon: Workflow,
          href: '/services/ai-workflow-automation',
          color: 'from-cyan-500 to-blue-600'
        },
        {
          name: 'AI Customer Experience Platform',
          description: 'Omnichannel customer support with AI-powered intelligence and analytics',
          price: 'From $199/month',
          features: ['Multi-channel support', 'Customer journey mapping', 'Sentiment analysis', 'Predictive analytics'],
          icon: MessageSquare,
          href: '/services/ai-customer-experience-platform',
          color: 'from-purple-500 to-pink-600'
        },
        {
          name: 'AI Cybersecurity Suite',
          description: 'Advanced threat detection and automated incident response with AI',
          price: 'From $399/month',
          features: ['Threat detection', 'Continuous monitoring', 'Automated response', 'Zero trust security'],
          icon: Shield,
          href: '/services/ai-cybersecurity-suite',
          color: 'from-red-500 to-orange-600'
        },
        {
          name: 'AI Business Intelligence',
          description: 'Machine learning-powered analytics and predictive insights',
          price: 'From $499/month',
          features: ['Predictive analytics', 'Real-time dashboards', 'Custom ML models', 'Data visualization'],
          icon: Brain,
          href: '/services/ai-business-intelligence',
          color: 'from-indigo-500 to-purple-600'
        }
      ]
    },
    {
      title: 'Quantum & Advanced Computing',
      description: 'Next-generation computing solutions for complex problem solving',
      services: [
        {
          name: 'Quantum Computing as a Service',
          description: 'Access to quantum processors and hybrid quantum-classical computing',
          price: 'From $299/month',
          features: ['Quantum processors', 'Hybrid computing', 'Algorithm library', 'Security protocols'],
          icon: Atom,
          href: '/services/quantum-computing-as-a-service',
          color: 'from-blue-500 to-indigo-600'
        },
        {
          name: 'Quantum AI Platform',
          description: 'Quantum machine learning and AI optimization algorithms',
          price: 'From $799/month',
          features: ['Quantum ML', 'Optimization algorithms', 'Quantum neural networks', 'Performance analytics'],
          icon: Brain,
          href: '/services/quantum-ai-platform',
          color: 'from-cyan-500 to-blue-600'
        }
      ]
    },
    {
      title: 'Blockchain & Web3 Solutions',
      description: 'Decentralized technology solutions for modern applications',
      services: [
        {
          name: 'Blockchain as a Service',
          description: 'Multi-chain infrastructure and smart contract development platform',
          price: 'From $299/month',
          features: ['Multi-chain support', 'Smart contracts', 'DeFi solutions', 'Enterprise blockchain'],
          icon: LinkIcon,
          href: '/services/blockchain-as-a-service',
          color: 'from-green-500 to-emerald-600'
        }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      description: 'Scalable cloud solutions and modern infrastructure services',
      services: [
        {
          name: 'Cloud DevOps & FinOps',
          description: 'CI/CD automation, cost optimization, and cloud governance',
          price: 'From $6,000/project',
          features: ['CI/CD pipelines', 'Cost optimization', 'Infrastructure as code', 'Monitoring'],
          icon: Cloud,
          href: '/services/cloud-devops',
          color: 'from-blue-500 to-cyan-600'
        },
        {
          name: 'IT Infrastructure Modernization',
          description: 'Legacy system modernization and cloud migration services',
          price: 'From $10,000/project',
          features: ['System modernization', 'Cloud migration', 'Performance optimization', 'Security hardening'],
          icon: Server,
          href: '/services/it-infrastructure',
          color: 'from-gray-500 to-slate-600'
        },
        {
          name: 'Edge Computing & IoT',
          description: 'Edge infrastructure and IoT device management solutions',
          price: 'From $5,000/project',
          features: ['Edge infrastructure', 'IoT management', 'Real-time processing', 'Data analytics'],
          icon: Network,
          href: '/it-services',
          color: 'from-green-500 to-teal-600'
        }
      ]
    },
    {
      title: 'Data & Analytics',
      description: 'Comprehensive data solutions and business intelligence',
      services: [
        {
          name: 'Data Analytics & Engineering',
          description: 'Data pipelines, analytics, and business intelligence solutions',
          price: 'From $3,500/month',
          features: ['Data pipelines', 'Business intelligence', 'Predictive analytics', 'Data governance'],
          icon: BarChart3,
          href: '/services/data-analytics',
          color: 'from-purple-500 to-pink-600'
        },
        {
          name: 'Data Mesh & Lakehouse',
          description: 'Modern data architecture with distributed data ownership',
          price: 'From $10,000/project',
          features: ['Data mesh architecture', 'Lakehouse design', 'Distributed ownership', 'Unified analytics'],
          icon: Database,
          href: '/it-services',
          color: 'from-indigo-500 to-purple-600'
        }
      ]
    },
    {
      title: 'Micro SAAS Solutions',
      description: 'Specialized software solutions for specific business needs',
      services: [
        {
          name: 'AI Email Responder',
          description: 'Automated email responses with intelligent intent classification',
          price: 'From $49/month per inbox',
          features: ['Auto-responses', 'Intent classification', 'Priority flagging', 'Human review'],
          icon: MessageSquare,
          href: '/micro-saas',
          color: 'from-blue-500 to-indigo-600'
        },
        {
          name: 'Smart Helpdesk & Chat',
          description: 'AI-powered customer support with knowledge base integration',
          price: 'From $99/month',
          features: ['Ticket management', 'AI chat', 'Knowledge base', 'Slack/Teams integration'],
          icon: Users,
          href: '/micro-saas',
          color: 'from-green-500 to-emerald-600'
        },
        {
          name: 'AI Content Moderation',
          description: 'Automated content filtering and toxicity detection',
          price: 'From $149/month + $0.01/content',
          features: ['Content filtering', 'Toxicity detection', 'Moderation workflows', 'API access'],
          icon: Shield,
          href: '/micro-saas',
          color: 'from-red-500 to-orange-600'
        },
        {
          name: 'Predictive Analytics Engine',
          description: 'ML-powered forecasting and trend analysis',
          price: 'From $199/month + usage',
          features: ['Forecasting models', 'Trend analysis', 'Business intelligence', 'Custom algorithms'],
          icon: BarChart3,
          href: '/micro-saas',
          color: 'from-purple-500 to-pink-600'
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Rapid Implementation',
      description: 'Deploy solutions in days, not months with our pre-built platforms and templates'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC2 Type II compliant with enterprise-grade security and compliance frameworks'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 technical support with dedicated account managers for enterprise clients'
    },
    {
      icon: BarChart3,
      title: 'Proven ROI',
      description: 'Average 300% ROI within 6 months across all our service categories'
    }
  ];

  const pricingInfo = {
    microSaas: 'Starting from $49/month',
    aiServices: 'Starting from $199/month',
    itServices: 'Starting from $1,500/month',
    quantumServices: 'Starting from $299/month',
    blockchainServices: 'Starting from $299/month'
  };

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
            <span className="text-xs font-semibold tracking-wider">INNOVATIVE SERVICES 2025</span>
          </div>
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl mb-6">
            Revolutionary Technology
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"> Services for 2025</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover our comprehensive portfolio of AI-powered, quantum computing, blockchain, and micro SAAS solutions designed to transform your business.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all">
              Get Started
            </Link>
            <Link to="/request-quote" className="rounded-lg border border-cyan-400/40 px-6 py-3 font-semibold text-cyan-300 hover:bg-white/5 transition-all">
              Request Quote
            </Link>
          </div>
        </div>

        {/* Service Categories */}
        <div className="space-y-20">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto">{category.description}</p>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:border-cyan-400/30 hover:bg-white/10">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 text-cyan-300">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                    <p className="text-slate-300 mb-4">{service.description}</p>
                    <div className="mb-4">
                      <div className="text-lg font-bold text-cyan-300">{service.price}</div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-slate-200">
                          <CheckCircle className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to={service.href}
                      className={`inline-flex items-center gap-2 rounded-lg bg-gradient-to-r ${service.color} px-4 py-2 text-sm font-semibold hover:opacity-90 transition-all`}
                    >
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Zion Tech Group?</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 text-cyan-300">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Overview */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Transparent Pricing Overview</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md text-center">
              <h3 className="text-lg font-semibold mb-2">Micro SAAS Solutions</h3>
              <div className="text-2xl font-bold text-cyan-300 mb-2">{pricingInfo.microSaas}</div>
              <p className="text-sm text-slate-300">Specialized tools for specific business needs</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md text-center">
              <h3 className="text-lg font-semibold mb-2">AI Services</h3>
              <div className="text-2xl font-bold text-cyan-300 mb-2">{pricingInfo.aiServices}</div>
              <p className="text-sm text-slate-300">Intelligent automation and analytics</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md text-center">
              <h3 className="text-lg font-semibold mb-2">IT Services</h3>
              <div className="text-2xl font-bold text-cyan-300 mb-2">{pricingInfo.itServices}</div>
              <p className="text-sm text-slate-300">Infrastructure and modernization</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md text-center">
              <h3 className="text-lg font-semibold mb-2">Quantum Computing</h3>
              <div className="text-2xl font-bold text-cyan-300 mb-2">{pricingInfo.quantumServices}</div>
              <p className="text-sm text-slate-300">Next-generation computing power</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md text-center">
              <h3 className="text-lg font-semibold mb-2">Blockchain Services</h3>
              <div className="text-2xl font-bold text-cyan-300 mb-2">{pricingInfo.blockchainServices}</div>
              <p className="text-sm text-slate-300">Decentralized technology solutions</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 p-12 backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already leveraging our innovative technology services to gain competitive advantages.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all">
                Start Your Journey
              </Link>
              <a href="mailto:kleber@ziontechgroup.com" className="rounded-lg border border-cyan-400 px-8 py-4 font-semibold text-cyan-300 hover:bg-cyan-400 hover:text-white transition-all">
                Schedule a Consultation
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

export default InnovativeServicesShowcase2025;