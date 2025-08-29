import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Check, 
  X, 
  Star, 
  ArrowRight, 
  Info,
  Brain,
  Shield,
  Cloud,
  Building,
  Zap,
  Heart,
  Lock,
  Leaf,
  Rocket,
  Cpu,
  TrendingUp,
  Users,
  Clock,
  BarChart3,
  Target,
  Lightbulb,
  Award,
  BookOpen,
  Play,
  FileText,
  Settings,
  Key,
  Globe,
  Database,
  Network,
  MessageCircle,
  Mail,
  Phone
} from 'lucide-react';

const ServicesComparisonPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'ai-ml', name: 'AI & ML', icon: Brain },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud },
    { id: 'transformation', name: 'Digital Transformation', icon: Building },
    { id: 'micro-saas', name: 'Micro SaaS', icon: Zap }
  ];

  const serviceTiers = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: 'From $99/month',
      color: 'from-green-500 to-emerald-600',
      features: [
        'Basic functionality',
        'Standard support',
        'Community documentation',
        'Email support',
        'Basic integrations',
        'Standard security'
      ],
      limitations: [
        'Limited customization',
        'Basic reporting',
        'Standard SLA',
        'No dedicated support'
      ]
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      price: 'From $299/month',
      color: 'from-blue-500 to-cyan-600',
      features: [
        'Advanced functionality',
        'Priority support',
        'Comprehensive documentation',
        'Phone & email support',
        'Advanced integrations',
        'Enhanced security',
        'Custom workflows',
        'Advanced analytics'
      ],
      limitations: [
        'Limited customization',
        'Standard SLA',
        'No dedicated account manager'
      ]
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      price: 'Custom pricing',
      color: 'from-purple-500 to-pink-600',
      features: [
        'Full functionality',
        '24/7 dedicated support',
        'Custom documentation',
        'Dedicated account manager',
        'Custom integrations',
        'Enterprise security',
        'Unlimited customization',
        'Advanced analytics',
        'Custom SLA',
        'On-site training',
        'White-label options',
        'API access'
      ],
      limitations: [
        'Higher cost',
        'Longer implementation',
        'Requires internal resources'
      ]
    }
  ];

  const serviceComparison = [
    {
      category: 'AI & Machine Learning',
      services: [
        {
          name: 'AI Enterprise Orchestrator',
          starter: { available: false, notes: 'Not available' },
          professional: { available: true, notes: 'Limited agents' },
          enterprise: { available: true, notes: 'Unlimited agents' }
        },
        {
          name: 'AI Business Intelligence',
          starter: { available: true, notes: 'Basic reports' },
          professional: { available: true, notes: 'Advanced analytics' },
          enterprise: { available: true, notes: 'Custom ML models' }
        },
        {
          name: 'AI Healthcare Analytics',
          starter: { available: false, notes: 'Not available' },
          professional: { available: true, notes: 'Standard models' },
          enterprise: { available: true, notes: 'Custom healthcare models' }
        }
      ]
    },
    {
      category: 'Cybersecurity',
      services: [
        {
          name: 'AI Cybersecurity Suite',
          starter: { available: true, notes: 'Basic protection' },
          professional: { available: true, notes: 'Advanced threat detection' },
          enterprise: { available: true, notes: 'Custom security policies' }
        },
        {
          name: 'Zero Trust Architecture',
          starter: { available: false, notes: 'Not available' },
          professional: { available: true, notes: 'Standard implementation' },
          enterprise: { available: true, notes: 'Custom zero-trust setup' }
        },
        {
          name: 'Incident Response',
          starter: { available: false, notes: 'Not available' },
          professional: { available: true, notes: '8/5 support' },
          enterprise: { available: true, notes: '24/7 dedicated team' }
        }
      ]
    },
    {
      category: 'Cloud & Infrastructure',
      services: [
        {
          name: 'Cloud DevOps',
          starter: { available: true, notes: 'Basic automation' },
          professional: { available: true, notes: 'Advanced CI/CD' },
          enterprise: { available: true, notes: 'Custom DevOps platform' }
        },
        {
          name: 'Digital Twin Solutions',
          starter: { available: false, notes: 'Not available' },
          professional: { available: true, notes: 'Standard monitoring' },
          enterprise: { available: true, notes: 'Custom twin models' }
        },
        {
          name: 'IoT Edge Computing',
          starter: { available: true, notes: 'Basic edge processing' },
          professional: { available: true, notes: 'Advanced edge analytics' },
          enterprise: { available: true, notes: 'Custom edge solutions' }
        }
      ]
    },
    {
      category: 'Digital Transformation',
      services: [
        {
          name: 'Digital Transformation Consulting',
          starter: { available: false, notes: 'Not available' },
          professional: { available: true, notes: 'Standard consulting' },
          enterprise: { available: true, notes: 'Dedicated transformation team' }
        },
        {
          name: 'IT Infrastructure Modernization',
          starter: { available: false, notes: 'Not available' },
          professional: { available: true, notes: 'Standard modernization' },
          enterprise: { available: true, notes: 'Custom infrastructure design' }
        }
      ]
    },
    {
      category: 'Micro SaaS Solutions',
      services: [
        {
          name: 'AI Lead Scoring',
          starter: { available: true, notes: 'Basic scoring' },
          professional: { available: true, notes: 'Advanced algorithms' },
          enterprise: { available: true, notes: 'Custom ML models' }
        },
        {
          name: 'Website AI Chatbot',
          starter: { available: true, notes: 'Basic chatbot' },
          professional: { available: true, notes: 'Advanced AI features' },
          enterprise: { available: true, notes: 'Custom chatbot training' }
        },
        {
          name: 'AI Content Optimizer',
          starter: { available: true, notes: 'Basic optimization' },
          professional: { available: true, notes: 'Advanced SEO features' },
          enterprise: { available: true, notes: 'Custom optimization rules' }
        }
      ]
    }
  ];

  const filteredComparison = selectedCategory === 'all' 
    ? serviceComparison 
    : serviceComparison.filter(cat => cat.category.toLowerCase().includes(selectedCategory));

  const renderAvailability = (tier: any) => {
    if (tier.available) {
      return (
        <div className="text-center">
          <Check className="w-5 h-5 text-green-500 mx-auto mb-1" />
          <span className="text-xs text-slate-400">{tier.notes}</span>
        </div>
      );
    }
    return (
      <div className="text-center">
        <X className="w-5 h-5 text-red-500 mx-auto mb-1" />
        <span className="text-xs text-slate-400">{tier.notes}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Services Comparison - Zion Tech Group</title>
        <meta name="description" content="Compare different service tiers and options from Zion Tech Group. Find the perfect solution for your business needs and budget." />
        <meta name="keywords" content="services comparison, pricing tiers, service options, business solutions, technology services" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6">
              <BarChart3 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Services Comparison
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Compare our different service tiers and find the perfect solution for your business needs. 
              From starter packages to enterprise solutions, we have options for every organization.
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'bg-white/10 text-slate-300 hover:bg-white/20 border border-slate-600'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
          
          {/* View Mode Toggle */}
          <div className="flex items-center justify-center space-x-2">
            <span className="text-slate-300 text-sm">View:</span>
            <div className="flex bg-white/10 rounded-lg p-1">
              <button
                onClick={() => setViewMode('table')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                  viewMode === 'table'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Table View
              </button>
              <button
                onClick={() => setViewMode('cards')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                  viewMode === 'cards'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Cards View
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Tiers Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Service Tiers Overview
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceTiers.map((tier, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-lg flex items-center justify-center mx-auto mb-6`}>
                  <Star className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white text-center mb-2">{tier.name}</h3>
                <p className="text-slate-300 text-center mb-4">{tier.description}</p>
                <div className="text-3xl font-bold text-white text-center mb-6">{tier.price}</div>
                
                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-white">Features:</h4>
                  <ul className="space-y-2">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-white">Limitations:</h4>
                  <ul className="space-y-2">
                    {tier.limitations.map((limitation, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Detailed Service Comparison
          </h2>
          
          {viewMode === 'table' ? (
            <div className="bg-white/5 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-800/50">
                      <th className="px-6 py-4 text-left text-white font-semibold">Service</th>
                      <th className="px-6 py-4 text-center text-white font-semibold">Starter</th>
                      <th className="px-6 py-4 text-center text-white font-semibold">Professional</th>
                      <th className="px-6 py-4 text-center text-white font-semibold">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700">
                    {filteredComparison.map((category) => (
                      <React.Fragment key={category.category}>
                        <tr className="bg-slate-800/30">
                          <td colSpan={4} className="px-6 py-3">
                            <h3 className="text-lg font-semibold text-white">{category.category}</h3>
                          </td>
                        </tr>
                        {category.services.map((service, index) => (
                          <tr key={index} className="hover:bg-white/5">
                            <td className="px-6 py-4">
                              <span className="text-white font-medium">{service.name}</span>
                            </td>
                            <td className="px-6 py-4">
                              {renderAvailability(service.starter)}
                            </td>
                            <td className="px-6 py-4">
                              {renderAvailability(service.professional)}
                            </td>
                            <td className="px-6 py-4">
                              {renderAvailability(service.enterprise)}
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredComparison.map((category) => (
                <div key={category.category} className="bg-white/5 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-6">{category.category}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {category.services.map((service, index) => (
                      <div key={index} className="bg-slate-800/50 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-white mb-4">{service.name}</h4>
                        
                        <div className="space-y-3">
                          <div className="text-center">
                            <span className="text-sm font-medium text-slate-400">Starter</span>
                            {renderAvailability(service.starter)}
                          </div>
                          
                          <div className="text-center">
                            <span className="text-sm font-medium text-slate-400">Professional</span>
                            {renderAvailability(service.professional)}
                          </div>
                          
                          <div className="text-center">
                            <span className="text-sm font-medium text-slate-400">Enterprise</span>
                            {renderAvailability(service.enterprise)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Pricing Guidance */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-slate-300 mb-6">
              Our expert team can help you understand the differences between service tiers 
              and recommend the best option for your specific business needs and budget.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="font-semibold text-white">Live Chat</h3>
                <p className="text-slate-300 text-sm">Get instant guidance</p>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-semibold text-white">Phone Consultation</h3>
                <p className="text-slate-300 text-sm">Speak with experts</p>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="font-semibold text-white">Email Support</h3>
                <p className="text-slate-300 text-sm">Detailed analysis</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Get Personalized Recommendation
              </Link>
              <Link
                to="/schedule-demo"
                className="inline-flex items-center px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesComparisonPage;