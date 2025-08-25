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
  TrendingUp
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
          name: 'AI Autonomous Systems',
          path: '/services/ai-autonomous-systems',
          description: 'Advanced autonomous AI systems that operate independently',
          icon: Brain,
          features: ['Self-learning algorithms', 'Predictive analytics', 'Automated decision making'],
          pricing: 'Starting from $5,000/month'
        },
        {
          name: 'AI Research Assistant',
          path: '/ai-autonomous-research-assistant',
          description: 'AI-powered research automation and insights',
          icon: Brain,
          features: ['Data analysis', 'Literature review', 'Trend identification'],
          pricing: 'Starting from $3,000/month'
        },
        {
          name: 'AI Business Intelligence',
          path: '/services/ai-business-intelligence',
          description: 'Advanced analytics and business insights',
          icon: BarChart3,
          features: ['Real-time dashboards', 'Predictive modeling', 'Performance tracking'],
          pricing: 'Starting from $4,000/month'
        },
        {
          name: 'AI Marketing Automation',
          path: '/services/ai-marketing-automation',
          description: 'Smart marketing optimization and automation',
          icon: Target,
          features: ['Customer segmentation', 'Campaign optimization', 'ROI tracking'],
          pricing: 'Starting from $2,500/month'
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
          name: 'Quantum Neural Networks',
          path: '/quantum-neural-network-platform',
          description: 'Quantum-powered neural networks for complex problems',
          icon: Brain,
          features: ['Quantum algorithms', 'Superior performance', 'Future-proof technology'],
          pricing: 'Starting from $15,000/month'
        },
        {
          name: 'Quantum Computing',
          path: '/services/quantum-technology',
          description: 'Quantum computing platforms and solutions',
          icon: Cpu,
          features: ['Quantum supremacy', 'Complex simulations', 'Cryptography'],
          pricing: 'Starting from $20,000/month'
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
          name: 'Cybersecurity Services',
          path: '/services/cybersecurity',
          description: 'Complete security solutions for your business',
          icon: Shield,
          features: ['Threat detection', 'Vulnerability assessment', 'Incident response'],
          pricing: 'Starting from $3,500/month'
        },
        {
          name: 'SOC2 Compliance Automation',
          path: '/soc2-compliance-automation',
          description: 'Automated compliance management and monitoring',
          icon: Lock,
          features: ['Automated audits', 'Real-time monitoring', 'Compliance reporting'],
          pricing: 'Starting from $4,500/month'
        }
      ]
    },
    {
      id: 'infrastructure',
      title: 'Cloud & Infrastructure',
      icon: Cpu,
      color: 'from-blue-500 to-indigo-500',
      description: 'Scalable cloud solutions and infrastructure management',
      services: [
        {
          name: 'Cloud DevOps',
          path: '/cloud-devops',
          description: 'Cloud development and operations automation',
          icon: Cloud,
          features: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring & alerting'],
          pricing: 'Starting from $3,000/month'
        },
        {
          name: 'IT Infrastructure',
          path: '/services/it-infrastructure',
          description: 'Complete IT infrastructure solutions',
          icon: Network,
          features: ['Network design', 'Hardware management', 'Performance optimization'],
          pricing: 'Starting from $2,500/month'
        },
        {
          name: '5G Enterprise Solutions',
          path: '/5g-enterprise-solutions',
          description: 'High-speed 5G connectivity solutions',
          icon: Network,
          features: ['Ultra-fast connectivity', 'Low latency', 'High bandwidth'],
          pricing: 'Starting from $5,000/month'
        }
      ]
    },
    {
      id: 'business',
      title: 'Business Operations',
      icon: Building,
      color: 'from-green-500 to-emerald-500',
      description: 'Streamlined business process automation',
      services: [
        {
          name: 'Autonomous Business Platform',
          path: '/autonomous-business-operations-platform',
          description: 'Self-operating business systems and automation',
          icon: Building,
          features: ['Process automation', 'Workflow optimization', 'Performance analytics'],
          pricing: 'Starting from $6,000/month'
        },
        {
          name: 'AI Asset Management',
          path: '/ai-powered-it-asset-management',
          description: 'Intelligent IT asset management and tracking',
          icon: Database,
          features: ['Asset tracking', 'Lifecycle management', 'Cost optimization'],
          pricing: 'Starting from $2,000/month'
        }
      ]
    },
    {
      id: 'industry',
      title: 'Industry Solutions',
      icon: Target,
      color: 'from-orange-500 to-yellow-500',
      description: 'Tailored solutions for specific industries',
      services: [
        {
          name: 'Healthcare Technology',
          path: '/solutions/healthcare',
          description: 'Technology solutions for healthcare industry',
          icon: Heart,
          features: ['Patient management', 'Medical analytics', 'Compliance'],
          pricing: 'Starting from $8,000/month'
        },
        {
          name: 'Financial Services',
          path: '/services/financial-services',
          description: 'Fintech solutions and financial technology',
          icon: DollarSign,
          features: ['Risk management', 'Fraud detection', 'Compliance'],
          pricing: 'Starting from $7,000/month'
        },
        {
          name: 'Manufacturing Intelligence',
          path: '/services/manufacturing-intelligence',
          description: 'Smart manufacturing and Industry 4.0 solutions',
          icon: Cpu,
          features: ['Predictive maintenance', 'Quality control', 'Supply chain optimization'],
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

        {/* Enhanced Services Links */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Explore Our Complete Service Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              to="/enhanced-services-2025"
              className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">2025 Enhanced Services</h3>
              <p className="text-gray-300 text-sm">
                Discover our cutting-edge micro SAAS solutions powered by advanced AI and emerging technologies.
              </p>
            </Link>
            
            <Link
              to="/comprehensive-services-marketing-2025"
              className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Complete Portfolio</h3>
              <p className="text-gray-300 text-sm">
                View our comprehensive service portfolio with detailed information and company overview.
              </p>
            </Link>
            
            <Link
              to="/comprehensive-pricing-comparison-2025"
              className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Pricing & Comparison</h3>
              <p className="text-gray-300 text-sm">
                Compare our competitive pricing with market averages and discover exceptional value.
              </p>
            </Link>
          </div>
        </div>

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
                  to="/innovative-services-showcase"
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
                >
                  View All Innovative Services
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
