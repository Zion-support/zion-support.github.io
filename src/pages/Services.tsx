import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cpu, 
  Cloud, 
  Rocket, 
  Target, 
  Users, 
  Code, 
  Network, 
  Database, 
  Lock, 
  BarChart3, 
  Heart, 
  DollarSign, 
  ShoppingCart, 
  Building,
  Eye,
  Zap,
  Globe,
  ArrowRight,
  Search,
  Filter,
  Star,
  CheckCircle,
  Clock,
  TrendingUp,
  Mail,
  FileText,
  Truck,
  Scale
} from 'lucide-react';

export default function Services() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const serviceCategories = [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      description: 'Intelligent solutions powered by artificial intelligence',
      services: [
        {
          name: 'AI Autonomous Business Manager 2025',
          path: '/ai-autonomous-business-manager-2025',
          description: 'Next-generation autonomous business management system',
          icon: Brain,
          features: ['Fully autonomous decision-making', 'Real-time market analysis', 'Predictive optimization'],
          pricing: 'Starting from $8,500/month'
        },
        {
          name: 'AI Content Generation Suite 2025',
          path: '/ai-content-generation-suite-2025',
          description: 'Comprehensive AI-powered content creation platform',
          icon: Brain,
          features: ['AI blog generation', 'SEO optimization', 'Multi-language support'],
          pricing: 'Starting from $299/month'
        },
        {
          name: 'AI Customer Support Platform',
          path: '/ai-customer-support-platform',
          description: 'Intelligent customer support with AI chatbot',
          icon: Brain,
          features: ['24/7 automated support', 'Intelligent routing', 'Sentiment analysis'],
          pricing: 'Starting from $399/month'
        },
        {
          name: 'AI Lead Generation Platform',
          path: '/ai-lead-generation-platform',
          description: 'AI-powered prospect identification and nurturing',
          icon: Target,
          features: ['Prospect identification', 'Lead scoring', 'Automated nurturing'],
          pricing: 'Starting from $449/month'
        }
      ]
    },
    {
      id: 'quantum',
      title: 'Quantum Technology',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      description: 'Next-generation quantum computing solutions',
      services: [
        {
          name: 'Quantum AI Neural Network Platform',
          path: '/quantum-ai-neural-network-platform',
          description: 'Revolutionary quantum-AI hybrid platform',
          icon: Brain,
          features: ['Quantum-enhanced neural networks', '1000x faster processing', 'Future-proof technology'],
          pricing: 'Starting from $15,000/month'
        },
        {
          name: 'Quantum Financial Trading Platform',
          path: '/quantum-financial-trading-platform',
          description: 'Ultra-fast quantum-powered trading system',
          icon: DollarSign,
          features: ['1000x faster trades', 'Quantum risk assessment', 'Portfolio optimization'],
          pricing: 'Starting from $25,000/month'
        },
        {
          name: 'Quantum Cloud Infrastructure',
          path: '/quantum-cloud-infrastructure',
          description: 'Hybrid quantum-classical cloud computing',
          icon: Cloud,
          features: ['Quantum algorithm optimization', 'Quantum-safe security', 'Scalable resources'],
          pricing: 'Starting from $20,000/month'
        }
      ]
    },
    {
      id: 'blockchain',
      title: 'Blockchain & DeFi',
      icon: Network,
      color: 'from-green-500 to-blue-500',
      description: 'Decentralized finance and blockchain solutions',
      services: [
        {
          name: 'Blockchain DeFi Enterprise Platform',
          path: '/blockchain-defi-enterprise-platform',
          description: 'Enterprise-grade decentralized finance platform',
          icon: DollarSign,
          features: ['Multi-chain protocols', 'Smart contracts', 'Regulatory compliance'],
          pricing: 'Starting from $6,500/month'
        },
        {
          name: 'AI Blockchain Governance',
          path: '/services/ai-blockchain-governance',
          description: 'AI-powered blockchain governance solutions',
          icon: Shield,
          features: ['Automated governance', 'Smart contract auditing', 'Compliance automation'],
          pricing: 'Starting from $5,000/month'
        }
      ]
    },
    {
      id: 'iot',
      title: 'Internet of Things',
      icon: Cpu,
      color: 'from-orange-500 to-red-500',
      description: 'Smart IoT solutions for connected environments',
      services: [
        {
          name: 'IoT Smart City Management Platform',
          path: '/iot-smart-city-management-platform',
          description: 'Comprehensive smart city IoT management',
          icon: Globe,
          features: ['Real-time monitoring', 'AI traffic optimization', 'Environmental tracking'],
          pricing: 'Starting from $12,000/month'
        },
        {
          name: 'Smart Inventory Management System',
          path: '/smart-inventory-management-system',
          description: 'AI-powered inventory prediction and optimization',
          icon: Database,
          features: ['Demand forecasting', 'Automated reordering', 'Real-time monitoring'],
          pricing: 'Starting from $349/month'
        }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      description: 'Comprehensive security and compliance solutions',
      services: [
        {
          name: 'AI Cybersecurity Threat Intelligence',
          path: '/ai-cybersecurity-threat-intelligence',
          description: 'AI-powered threat detection and response',
          icon: Shield,
          features: ['10x faster threat detection', 'AI behavioral analysis', 'Automated response'],
          pricing: 'Starting from $7,500/month'
        },
        {
          name: 'Advanced Cybersecurity Operations Center',
          path: '/advanced-cybersecurity-operations-center',
          description: '24/7 SOC with real-time threat monitoring',
          icon: Shield,
          features: ['24/7 monitoring', 'Advanced threat hunting', 'Incident response'],
          pricing: 'Starting from $25,000/month'
        }
      ]
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud & Infrastructure',
      icon: Cpu,
      color: 'from-blue-500 to-indigo-500',
      description: 'Scalable cloud solutions and infrastructure management',
      services: [
        {
          name: 'Enterprise Cloud Migration & Management',
          path: '/enterprise-cloud-migration-management',
          description: 'End-to-end cloud migration service',
          icon: Cloud,
          features: ['Multi-cloud strategy', 'Legacy modernization', '24/7 management'],
          pricing: 'Starting from $15,000/month'
        },
        {
          name: 'DevOps & CI/CD Pipeline Automation',
          path: '/devops-cicd-pipeline-automation',
          description: 'Complete DevOps transformation service',
          icon: Code,
          features: ['80% faster deployment', 'Infrastructure as code', 'Automated testing'],
          pricing: 'Starting from $12,000/month'
        },
        {
          name: 'Enterprise Network Infrastructure & Security',
          path: '/enterprise-network-infrastructure-security',
          description: 'High-availability network infrastructure',
          icon: Network,
          features: ['99.99% uptime', 'High-performance design', '24/7 support'],
          pricing: 'Starting from $20,000/month'
        }
      ]
    },
    {
      id: 'data-analytics',
      title: 'Data & Analytics',
      icon: BarChart3,
      color: 'from-indigo-500 to-purple-500',
      description: 'Advanced analytics and business intelligence',
      services: [
        {
          name: 'Data Analytics & Business Intelligence Platform',
          path: '/data-analytics-business-intelligence-platform',
          description: 'Comprehensive data analytics platform',
          icon: BarChart3,
          features: ['Real-time processing', 'Predictive analytics', 'Interactive dashboards'],
          pricing: 'Starting from $18,000/month'
        },
        {
          name: 'AI Business Intelligence Suite',
          path: '/services/ai-business-intelligence',
          description: 'AI-powered business insights and analytics',
          icon: BarChart3,
          features: ['Real-time dashboards', 'Predictive modeling', 'Performance tracking'],
          pricing: 'Starting from $4,000/month'
        }
      ]
    },
    {
      id: 'business-operations',
      title: 'Business Operations',
      icon: Building,
      color: 'from-green-500 to-emerald-500',
      description: 'Streamlined business process automation',
      services: [
        {
          name: 'Autonomous Manufacturing Intelligence Platform',
          path: '/autonomous-manufacturing-intelligence',
          description: 'AI-powered manufacturing automation',
          icon: Cpu,
          features: ['60% efficiency increase', '90% defect reduction', 'Predictive maintenance'],
          pricing: 'Starting from $18,000/month'
        },
        {
          name: 'Smart Project Management Tool',
          path: '/smart-project-management-tool',
          description: 'AI-enhanced project management platform',
          icon: Target,
          features: ['25% faster completion', 'AI task prioritization', 'Risk prediction'],
          pricing: 'Starting from $249/month'
        },
        {
          name: 'Smart Time Tracking Solution',
          path: '/smart-time-tracking-solution',
          description: 'AI-powered time tracking and productivity',
          icon: Clock,
          features: ['Automatic categorization', 'Productivity insights', 'Project allocation'],
          pricing: 'Starting from $129/month'
        }
      ]
    },
    {
      id: 'financial-management',
      title: 'Financial Management',
      icon: DollarSign,
      color: 'from-yellow-500 to-orange-500',
      description: 'Intelligent financial solutions and automation',
      services: [
        {
          name: 'Smart Invoice Management System',
          path: '/smart-invoice-management-system',
          description: 'AI-powered invoice processing and management',
          icon: DollarSign,
          features: ['5x faster processing', 'OCR technology', 'Automated reconciliation'],
          pricing: 'Starting from $199/month'
        },
        {
          name: 'AI Email Marketing Platform',
          path: '/ai-email-marketing-platform',
          description: 'Intelligent email marketing optimization',
          icon: Mail,
          features: ['45% higher open rates', 'AI send time optimization', 'Personalized content'],
          pricing: 'Starting from $179/month'
        }
      ]
    },
    {
      id: 'content-marketing',
      title: 'Content & Marketing',
      icon: Target,
      color: 'from-pink-500 to-purple-500',
      description: 'AI-powered content creation and marketing automation',
      services: [
        {
          name: 'AI Social Media Manager',
          path: '/ai-social-media-manager',
          description: 'Intelligent social media management platform',
          icon: Globe,
          features: ['AI content generation', 'Multi-platform management', 'Engagement optimization'],
          pricing: 'Starting from $199/month'
        },
        {
          name: 'Smart Document Management System',
          path: '/smart-document-management-system',
          description: 'AI-powered document organization and search',
          icon: FileText,
          features: ['10x faster search', 'AI categorization', 'Workflow automation'],
          pricing: 'Starting from $279/month'
        }
      ]
    },
    {
      id: 'managed-services',
      title: 'Managed Services',
      icon: Shield,
      color: 'from-gray-500 to-blue-500',
      description: 'Comprehensive IT management and support',
      services: [
        {
          name: 'Managed IT Services & Support',
          path: '/managed-it-services-support',
          description: '24/7 IT infrastructure management',
          icon: Shield,
          features: ['24/7 monitoring', 'Proactive maintenance', 'Help desk support'],
          pricing: 'Starting from $8,000/month'
        },
        {
          name: 'Digital Transformation Consulting',
          path: '/digital-transformation-consulting',
          description: 'Strategic digital transformation guidance',
          icon: Rocket,
          features: ['Maturity assessment', 'Roadmap development', 'Change management'],
          pricing: 'Starting from $30,000/month'
        }
      ]
    },
    {
      id: 'healthcare',
      title: 'Healthcare Technology',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      description: 'Advanced healthcare technology solutions',
      services: [
        {
          name: 'AI Healthcare Diagnostics Platform',
          path: '/ai-healthcare-diagnostics-platform',
          description: 'AI-powered medical diagnostics and treatment',
          icon: Heart,
          features: ['30% accuracy improvement', '70% faster diagnosis', 'Treatment recommendations'],
          pricing: 'Starting from $9,500/month'
        }
      ]
    },
    {
      id: 'logistics',
      title: 'Logistics & Supply Chain',
      icon: Truck,
      color: 'from-blue-500 to-green-500',
      description: 'Intelligent logistics and supply chain optimization',
      services: [
        {
          name: 'Autonomous Logistics & Supply Chain Platform',
          path: '/autonomous-logistics-supply-chain',
          description: 'AI-powered supply chain management',
          icon: Truck,
          features: ['35% cost reduction', '50% efficiency improvement', 'Real-time monitoring'],
          pricing: 'Starting from $8,500/month'
        }
      ]
    },
    {
      id: 'legal-tech',
      title: 'Legal Technology',
      icon: Scale,
      color: 'from-purple-500 to-indigo-500',
      description: 'AI-powered legal research and compliance',
      services: [
        {
          name: 'AI Legal Research & Compliance Platform',
          path: '/ai-legal-research-compliance-platform',
          description: 'Automated legal research and compliance',
          icon: Scale,
          features: ['80% time reduction', '90% accuracy improvement', 'Automated compliance'],
          pricing: 'Starting from $6,500/month'
        }
      ]
    }
  ];

  const filteredCategories = selectedCategory === 'all' 
    ? serviceCategories 
    : serviceCategories.filter(cat => cat.id === selectedCategory);

  const filteredServices = filteredCategories.flatMap(cat => 
    cat.services.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive AI-powered technology solutions designed to transform your business and drive innovation across all industries.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              All Services
            </button>
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              {/* Service Header */}
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                    {service.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-300 mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center space-x-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing */}
              <div className="mb-4 p-3 bg-gray-700/50 rounded-lg">
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <DollarSign className="w-4 h-4 text-green-400" />
                  <span>{service.pricing}</span>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to={service.path}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 group-hover:scale-105"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No services found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our AI experts help you implement the right technology solutions to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-3 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
              >
                Request Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
