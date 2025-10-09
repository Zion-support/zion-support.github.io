'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Atom } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const PricingPage: React.FC = () => {
  const microSaasPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'AI Project Manager Basic',
        'AI Content Generator',
        'AI Email Marketing',
        'Basic Analytics Dashboard',
        'Email Support',
        '5 Users Included'
      ],
      benefits: ['Get started quickly', 'Essential AI tools', 'Cost-effective', 'Easy setup'],
      popular: false,
      cta: 'Start Free Trial',
      color: 'text-blue-400'
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Advanced AI tools for growing businesses',
      features: [
        'All Starter features',
        'AI Social Media Manager',
        'AI Analytics Dashboard Pro',
        'AI Customer Support Bot',
        'AI Workflow Automation',
        'Priority Support',
        '25 Users Included',
        'Advanced Integrations'
      ],
      benefits: ['Complete AI suite', 'Advanced features', 'Priority support', 'Scalable'],
      popular: true,
      cta: 'Start Free Trial',
      color: 'text-cyan-400'
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'Full AI suite for large organizations',
      features: [
        'All Professional features',
        'AI Video Generator',
        'AI 3D Model Generator',
        'AI Financial Analyzer',
        'Custom AI Models',
        '24/7 Phone Support',
        'Unlimited Users',
        'White-label Options',
        'Custom Integrations',
        'Dedicated Account Manager'
      ],
      benefits: ['Complete solution', 'Custom features', 'Dedicated support', 'Enterprise-grade'],
      popular: false,
      cta: 'Contact Sales',
      color: 'text-purple-400'
    }
  ];

  const aiServicePlans = [
    {
      name: 'AI Consulting',
      price: '$2,500',
      period: '/month',
      description: 'Strategic AI consulting and implementation',
      features: [
        'AI Strategy Development',
        'Technology Assessment',
        'Implementation Planning',
        'ROI Analysis',
        'Monthly Consultations',
        'Custom AI Roadmap'
      ],
      benefits: ['Strategic guidance', 'Expert consultation', 'Custom solutions', 'Proven methodology'],
      popular: false,
      cta: 'Get Started',
      color: 'text-purple-400'
    },
    {
      name: 'Machine Learning',
      price: '$2,500',
      period: '/month',
      description: 'Custom ML models and predictive analytics',
      features: [
        'Custom Model Development',
        'Data Pipeline Setup',
        'Model Training & Testing',
        'Performance Monitoring',
        'A/B Testing',
        'Model Optimization'
      ],
      benefits: ['Custom models', 'High accuracy', 'Scalable solutions', 'Expert support'],
      popular: true,
      cta: 'Get Started',
      color: 'text-green-400'
    },
    {
      name: 'Computer Vision',
      price: '$2,200',
      period: '/month',
      description: 'Image and video analysis solutions',
      features: [
        'Object Detection',
        'Image Classification',
        'Video Analysis',
        'Facial Recognition',
        'Quality Control',
        'Real-time Processing'
      ],
      benefits: ['High accuracy', 'Real-time processing', 'Custom models', 'Edge deployment'],
      popular: false,
      cta: 'Get Started',
      color: 'text-blue-400'
    },
    {
      name: 'AI Automation',
      price: '$1,900',
      period: '/month',
      description: 'Intelligent process automation',
      features: [
        'Process Automation',
        'Workflow Optimization',
        'Decision Trees',
        'Exception Handling',
        'RPA Integration',
        'Smart Routing'
      ],
      benefits: ['Process reduction', 'Error elimination', '24/7 operation', 'Cost savings'],
      popular: false,
      cta: 'Get Started',
      color: 'text-cyan-400'
    }
  ];

  const itServicePlans = [
    {
      name: 'Cloud Services',
      price: '$1,999',
      period: '/month',
      description: 'Complete cloud migration and management',
      features: [
        'AWS/Azure/GCP Setup',
        'Migration Services',
        'Cost Optimization',
        'Security Configuration',
        'Auto-scaling',
        'Disaster Recovery',
        '24/7 Monitoring'
      ],
      benefits: ['Cost reduction', 'High uptime', 'Global deployment', 'Expert management'],
      popular: true,
      cta: 'Get Started',
      color: 'text-blue-400'
    },
    {
      name: 'Cybersecurity',
      price: '$2,499',
      period: '/month',
      description: 'Advanced security solutions',
      features: [
        'Threat Detection',
        'Vulnerability Assessment',
        'Security Monitoring',
        'Incident Response',
        'Penetration Testing',
        'Compliance Auditing',
        'Security Training'
      ],
      benefits: ['Threat protection', 'Real-time monitoring', 'Compliance ready', 'Expert security'],
      popular: false,
      cta: 'Get Started',
      color: 'text-red-400'
    },
    {
      name: 'DevOps & CI/CD',
      price: '$1,799',
      period: '/month',
      description: 'Streamlined development workflows',
      features: [
        'CI/CD Pipelines',
        'Automated Testing',
        'Container Orchestration',
        'Monitoring Setup',
        'Infrastructure as Code',
        'Blue-Green Deployments',
        'Performance Optimization'
      ],
      benefits: ['Faster deployments', 'Fewer errors', 'Automated rollbacks', 'Zero downtime'],
      popular: false,
      cta: 'Get Started',
      color: 'text-green-400'
    },
    {
      name: 'IT Support',
      price: '$899',
      period: '/month',
      description: '24/7 technical support',
      features: [
        '24/7 Support',
        'Remote Assistance',
        'Ticket Management',
        'Knowledge Base',
        'User Training',
        'System Maintenance',
        'Proactive Monitoring'
      ],
      benefits: ['Instant response', 'High satisfaction', 'Proactive support', 'User empowerment'],
      popular: false,
      cta: 'Get Started',
      color: 'text-orange-400'
    }
  ];

  const specializedPlans = [
    {
      name: 'Quantum Computing',
      price: 'Custom',
      period: '',
      description: 'Next-generation quantum solutions',
      features: [
        'Quantum Algorithm Development',
        'Quantum Security',
        'Optimization Problems',
        'Research & Development',
        'Custom Solutions',
        'Expert Consultation'
      ],
      benefits: ['Exponential speedup', 'Future-proof technology', 'Competitive advantage', 'Cutting-edge'],
      popular: false,
      cta: 'Contact Sales',
      color: 'text-yellow-400'
    },
    {
      name: 'Autonomous Systems',
      price: 'Custom',
      period: '',
      description: 'Self-managing systems',
      features: [
        'Self-Healing Systems',
        'Predictive Maintenance',
        'Resource Optimization',
        'Performance Monitoring',
        'Adaptive Learning',
        'Intelligent Automation'
      ],
      benefits: ['Zero downtime', 'Predictive maintenance', 'Cost optimization', 'Scalable intelligence'],
      popular: false,
      cta: 'Contact Sales',
      color: 'text-green-400'
    },
    {
      name: 'Blockchain & Web3',
      price: '$2,999',
      period: '/month',
      description: 'Decentralized solutions',
      features: [
        'Smart Contract Development',
        'DApp Creation',
        'Token Economics',
        'DeFi Solutions',
        'NFT Platforms',
        'DAO Implementation'
      ],
      benefits: ['Decentralized security', 'Transparent operations', 'Tokenization', 'Community governance'],
      popular: false,
      cta: 'Get Started',
      color: 'text-purple-400'
    }
  ];

  const faqs = [
    {
      question: 'What is included in the free trial?',
      answer: 'Our free trial includes access to all Micro SAAS tools for 14 days with full functionality. No credit card required.'
    },
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated.'
    },
    {
      question: 'Do you offer custom pricing?',
      answer: 'Yes, we offer custom pricing for enterprise clients and specialized solutions. Contact our sales team for a personalized quote.'
    },
    {
      question: 'What support is included?',
      answer: 'All plans include email support. Professional and Enterprise plans include priority support and phone support. Enterprise includes 24/7 phone support.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for Micro SAAS plans. AI and IT services may include implementation costs which are discussed during consultation.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for all Micro SAAS plans. AI and IT services are billed based on project milestones.'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for AI and IT services. Choose from Micro SAAS plans, AI services, IT solutions, and specialized technologies. Free trials available."
        keywords={['pricing', 'AI services pricing', 'IT services cost', 'micro SAAS pricing', 'enterprise solutions']}
        canonicalUrl="https://ziontechgroup.com/pricing"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Transparent Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include free trials and flexible billing options.
            </p>
          </section>

          {/* Micro SAAS Plans */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
                Micro SAAS Solutions
              </h2>
              <p className="text-lg text-gray-300 text-center mb-12">
                Affordable AI-powered tools for businesses of all sizes
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {microSaasPlans.map((plan, index) => (
                  <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <div className="flex items-baseline justify-center mb-4">
                        <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                        <span className="text-gray-300 ml-1">{plan.period}</span>
                      </div>
                      <p className="text-gray-300 text-sm">{plan.description}</p>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {plan.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                            <TrendingUp className="w-3 h-3 text-pink-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <a
                      href={plan.cta === 'Contact Sales' ? 'mailto:kleber@ziontechgroup.com' : '/contact'}
                      className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      {plan.cta}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* AI Services Plans */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
                AI Services
              </h2>
              <p className="text-lg text-gray-300 text-center mb-12">
                Advanced AI solutions for enterprise applications
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {aiServicePlans.map((plan, index) => (
                  <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 ${plan.popular ? 'ring-2 ring-purple-400' : ''}`}>
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                      <div className="flex items-baseline justify-center mb-2">
                        <span className="text-3xl font-bold text-purple-400">{plan.price}</span>
                        <span className="text-gray-300 ml-1">{plan.period}</span>
                      </div>
                      <p className="text-gray-300 text-sm">{plan.description}</p>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <a
                      href="/contact"
                      className="w-full block text-center py-2 px-4 rounded-lg font-medium transition-all duration-300 bg-purple-600 text-white hover:bg-purple-700"
                    >
                      {plan.cta}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* IT Services Plans */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
                IT Services
              </h2>
              <p className="text-lg text-gray-300 text-center mb-12">
                Comprehensive IT solutions for modern infrastructure
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {itServicePlans.map((plan, index) => (
                  <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 ${plan.popular ? 'ring-2 ring-blue-400' : ''}`}>
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                      <div className="flex items-baseline justify-center mb-2">
                        <span className="text-3xl font-bold text-blue-400">{plan.price}</span>
                        <span className="text-gray-300 ml-1">{plan.period}</span>
                      </div>
                      <p className="text-gray-300 text-sm">{plan.description}</p>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <a
                      href="/contact"
                      className="w-full block text-center py-2 px-4 rounded-lg font-medium transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700"
                    >
                      {plan.cta}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Specialized Plans */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
                Specialized Solutions
              </h2>
              <p className="text-lg text-gray-300 text-center mb-12">
                Cutting-edge technologies for next-generation solutions
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {specializedPlans.map((plan, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <div className="flex items-baseline justify-center mb-2">
                        <span className="text-4xl font-bold text-orange-400">{plan.price}</span>
                        <span className="text-gray-300 ml-1">{plan.period}</span>
                      </div>
                      <p className="text-gray-300 text-sm">{plan.description}</p>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <a
                      href={plan.cta === 'Contact Sales' ? 'mailto:kleber@ziontechgroup.com' : '/contact'}
                      className="w-full block text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 bg-orange-600 text-white hover:bg-orange-700"
                    >
                      {plan.cta}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Contact our team to discuss your specific needs and get a personalized quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PricingPage;