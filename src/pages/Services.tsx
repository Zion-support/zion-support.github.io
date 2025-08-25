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
          name: 'AI Financial Advisor Platform',
          path: '/comprehensive-services-showcase',
          description: 'Intelligent financial advisory with AI-powered investment recommendations',
          icon: Brain,
          features: ['AI investment advice', 'Portfolio optimization', 'Real-time market analysis'],
          pricing: 'Starting from $299/month'
        },
        {
          name: 'AI Healthcare Diagnostics',
          path: '/comprehensive-services-showcase',
          description: 'Advanced medical diagnostic platform using AI',
          icon: Brain,
          features: ['Medical image analysis', 'Symptom assessment', 'Treatment recommendations'],
          pricing: 'Starting from $899/month'
        },
        {
          name: 'AI Legal Research Assistant',
          path: '/comprehensive-services-showcase',
          description: 'AI-powered legal research and case analysis',
          icon: Brain,
          features: ['Case law analysis', 'Legal document review', 'Precedent identification'],
          pricing: 'Starting from $199/month'
        },
        {
          name: 'AI Manufacturing Optimization',
          path: '/comprehensive-services-showcase',
          description: 'Intelligent manufacturing process optimization',
          icon: Brain,
          features: ['Production optimization', 'Predictive maintenance', 'Quality control'],
          pricing: 'Starting from $599/month'
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
          name: 'Quantum Machine Learning Platform',
          path: '/comprehensive-services-showcase',
          description: 'Revolutionary platform combining quantum computing with ML',
          icon: Brain,
          features: ['Quantum ML algorithms', 'Hybrid workflows', 'Performance benchmarking'],
          pricing: 'Starting from $2,500/month'
        },
        {
          name: 'Quantum Internet Platform',
          path: '/comprehensive-services-showcase',
          description: 'Ultra-secure quantum communications network',
          icon: Cpu,
          features: ['Quantum key distribution', 'Unbreakable encryption', 'Quantum networks'],
          pricing: 'Starting from $4,000/month'
        }
      ]
    },
    {
      id: 'emerging-tech',
      title: 'Emerging Technologies',
      icon: Rocket,
      color: 'from-purple-500 to-pink-500',
      description: 'Cutting-edge technologies of the future',
      services: [
        {
          name: 'Edge AI Computing Platform',
          path: '/comprehensive-services-showcase',
          description: 'AI processing at the edge for real-time decisions',
          icon: Rocket,
          features: ['Edge AI deployment', 'Low latency processing', 'Privacy-preserving AI'],
          pricing: 'Starting from $899/month'
        },
        {
          name: 'Neuromorphic Computing',
          path: '/comprehensive-services-showcase',
          description: 'Brain-inspired computing for ultra-efficient AI',
          icon: Rocket,
          features: ['Spiking neural networks', 'Ultra-low power', 'Cognitive computing'],
          pricing: 'Starting from $3,500/month'
        },
        {
          name: '6G Network Infrastructure',
          path: '/comprehensive-services-showcase',
          description: 'Next-generation 6G network solutions',
          icon: Rocket,
          features: ['Terahertz speeds', 'Ultra-low latency', 'AI optimization'],
          pricing: 'Starting from $5,000/month'
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
          name: 'Cloud-Native Development Platform',
          path: '/comprehensive-services-showcase',
          description: 'Enterprise-grade cloud-native development platform',
          icon: Cloud,
          features: ['Kubernetes orchestration', 'Microservices architecture', 'CI/CD pipelines'],
          pricing: 'Starting from $800/month'
        },
        {
          name: 'AI-Powered IT Operations',
          path: '/comprehensive-services-showcase',
          description: 'Intelligent IT operations with AI automation',
          icon: Network,
          features: ['AI monitoring', 'Predictive analytics', 'Automated incident response'],
          pricing: 'Starting from $1,500/month'
        },
        {
          name: 'Enterprise Data Management',
          path: '/comprehensive-services-showcase',
          description: 'Comprehensive data governance and management',
          icon: Network,
          features: ['Data governance', 'Quality management', 'Compliance monitoring'],
          pricing: 'Starting from $1,000/month'
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
          name: 'AI Retail Intelligence Platform',
          path: '/comprehensive-services-showcase',
          description: 'Comprehensive retail analytics and customer intelligence',
          icon: Building,
          features: ['Customer behavior analysis', 'Inventory optimization', 'Personalized recommendations'],
          pricing: 'Starting from $399/month'
        },
        {
          name: 'AI Real Estate Analytics',
          path: '/comprehensive-services-showcase',
          description: 'Intelligent real estate market analysis and insights',
          icon: Database,
          features: ['Market trend analysis', 'Property value prediction', 'Investment scoring'],
          pricing: 'Starting from $299/month'
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
          name: 'AI Adaptive Learning Platform',
          path: '/comprehensive-services-showcase',
          description: 'Intelligent learning platform with personalized education',
          icon: Heart,
          features: ['Personalized learning paths', 'Progress tracking', 'Performance analytics'],
          pricing: 'Starting from $199/month'
        },
        {
          name: 'AI Logistics Optimization',
          path: '/comprehensive-services-showcase',
          description: 'Intelligent logistics and supply chain optimization',
          icon: DollarSign,
          features: ['Route optimization', 'Delivery prediction', 'Supply chain analytics'],
          pricing: 'Starting from $499/month'
        },
        {
          name: 'AI Energy Optimization',
          path: '/comprehensive-services-showcase',
          description: 'Intelligent energy management and optimization',
          icon: Cpu,
          features: ['Energy consumption analysis', 'Cost optimization', 'Sustainability reporting'],
          pricing: 'Starting from $399/month'
        }
      ]
    },
    {
      id: 'specialized-it',
      title: 'Specialized IT Services',
      icon: Shield,
      color: 'from-indigo-500 to-purple-500',
      description: 'Advanced IT solutions and specialized services',
      services: [
        {
          name: 'Zero Trust Security Platform',
          path: '/comprehensive-services-showcase',
          description: 'Comprehensive zero trust security implementation',
          icon: Shield,
          features: ['Continuous verification', 'Least privilege access', 'Micro-segmentation'],
          pricing: 'Starting from $1,200/month'
        },
        {
          name: 'DevOps Automation Platform',
          path: '/comprehensive-services-showcase',
          description: 'Comprehensive DevOps automation and CI/CD',
          icon: Shield,
          features: ['CI/CD pipelines', 'Infrastructure as code', 'Automated testing'],
          pricing: 'Starting from $600/month'
        },
        {
          name: 'Application Performance Management',
          path: '/comprehensive-services-showcase',
          description: 'Advanced application performance monitoring',
          icon: Shield,
          features: ['Real-time monitoring', 'Performance analytics', 'User experience tracking'],
          pricing: 'Starting from $900/month'
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
                to="/comprehensive-services-showcase"
                className="px-8 py-3 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>

        {/* Comprehensive Services Showcase CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Discover Our Complete Portfolio
            </h2>
            <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
              Explore our comprehensive showcase featuring 30+ cutting-edge AI solutions, emerging technologies, and specialized IT services. 
              From micro SAAS applications to quantum computing platforms, we have the tools you need to stay ahead.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6 text-sm text-gray-400">
              <div>• AI-Powered Business Solutions</div>
              <div>• Emerging Technology Platforms</div>
              <div>• Specialized IT Services</div>
            </div>
            <Link
              to="/comprehensive-services-showcase"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
            >
              Explore Comprehensive Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
