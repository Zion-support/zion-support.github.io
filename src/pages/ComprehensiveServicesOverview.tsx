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
  Atom,
  Car,
  Leaf,
  Factory,
  Building2,
  GraduationCap,
  Store,
  Scale,
  Truck,
  Home,
  Utensils,
  BookOpen,
  Layers,
  Sparkles,
  Target as TargetIcon,
  Award,
  Lightbulb,
  Gauge,
  ShieldCheck,
  Zap as ZapIcon,
  Globe as GlobeIcon,
  Heart as HeartIcon,
  DollarSign as DollarSignIcon,
  Factory as FactoryIcon,
  Zap as ZapIcon2,
  Truck as TruckIcon,
  GraduationCap as GraduationCapIcon,
  Store as StoreIcon,
  Scale as ScaleIcon,
  Leaf as LeafIcon,
  Building2 as Building2Icon,
  Utensils as UtensilsIcon
} from 'lucide-react';

export default function ComprehensiveServicesOverview() {
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
          name: 'AI Business Intelligence Platform',
          path: '/services/ai-business-intelligence',
          description: 'Advanced AI-powered business intelligence platform with real-time insights and predictive analytics',
          icon: BarChart3,
          features: ['Real-time data visualization', 'Predictive analytics engine', 'Natural language querying', 'Automated reporting'],
          pricing: 'Starting from $899/month',
          marketPrice: '$899 - $2,499/month',
          benefits: ['Reduce decision-making time by 60%', 'Increase data accuracy by 85%', 'Automated insights discovery']
        },
        {
          name: 'AI Content Creation Suite',
          path: '/services/ai-content-creation',
          description: 'Comprehensive AI-powered content creation platform for blogs, social media, and marketing',
          icon: Brain,
          features: ['AI blog post generator', 'Social media content creator', 'SEO optimization', 'Plagiarism detection'],
          pricing: 'Starting from $199/month',
          marketPrice: '$199 - $599/month',
          benefits: ['Reduce content creation time by 80%', 'Improve SEO rankings by 45%', 'Increase engagement rates by 60%']
        },
        {
          name: 'AI Customer Support Automation',
          path: '/services/ai-customer-support',
          description: 'Intelligent customer support automation with AI chatbots and sentiment analysis',
          icon: Users,
          features: ['AI-powered chatbots', 'Intelligent ticket routing', 'Sentiment analysis', '24/7 support'],
          pricing: 'Starting from $299/month',
          marketPrice: '$299 - $899/month',
          benefits: ['Reduce response time by 90%', 'Handle 70% of inquiries automatically', 'Improve customer satisfaction by 40%']
        },
        {
          name: 'AI Project Management Platform',
          path: '/services/ai-project-management',
          description: 'Intelligent project management with AI-powered resource optimization and timeline prediction',
          icon: Target,
          features: ['AI task prioritization', 'Resource optimization', 'Timeline prediction', 'Risk assessment'],
          pricing: 'Starting from $399/month',
          marketPrice: '$399 - $1,299/month',
          benefits: ['Improve project delivery by 30%', 'Reduce resource waste by 25%', 'Increase team productivity by 40%']
        }
      ]
    },
    {
      id: 'quantum',
      title: 'Quantum Technology',
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      description: 'Next-generation quantum computing solutions',
      services: [
        {
          name: 'Quantum AI Orchestrator Platform',
          path: '/services/quantum-ai-orchestrator',
          description: 'Revolutionary platform combining quantum computing with AI for complex optimization problems',
          icon: Atom,
          features: ['Quantum resource orchestration', 'AI problem decomposition', 'Hybrid workflows', 'Real-time simulation'],
          pricing: 'Starting from $4,999/month',
          marketPrice: '$4,999 - $15,000/month',
          benefits: ['Solve problems 1000x faster than classical computers', 'Access to cutting-edge quantum technology', 'Competitive advantage in research']
        },
        {
          name: 'Quantum Neural Networks',
          path: '/quantum-neural-network-platform',
          description: 'Quantum-powered neural networks for complex problems',
          icon: Brain,
          features: ['Quantum algorithms', 'Superior performance', 'Future-proof technology'],
          pricing: 'Starting from $15,000/month',
          marketPrice: '$15,000 - $50,000/month',
          benefits: ['Quantum supremacy', 'Complex problem solving', 'Future-proof technology investment']
        }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity & Threat Intelligence',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      description: 'Comprehensive security and compliance solutions',
      services: [
        {
          name: 'AI Threat Intelligence Platform',
          path: '/services/ai-threat-intelligence',
          description: 'Advanced AI-powered threat intelligence with predictive analysis and automated response',
          icon: Shield,
          features: ['AI threat detection', 'Predictive analysis', 'Automated response', '24/7 monitoring'],
          pricing: 'Starting from $2,499/month',
          marketPrice: '$2,499 - $7,999/month',
          benefits: ['Detect threats 95% faster', 'Reduce false positives by 80%', 'Automate incident response']
        },
        {
          name: 'AI Cybersecurity Platform',
          path: '/services/ai-cybersecurity',
          description: 'Next-generation cybersecurity with AI-powered threat detection and prevention',
          icon: Lock,
          features: ['AI threat detection', 'Behavioral analytics', 'Automated response', 'Real-time protection'],
          pricing: 'Starting from $1,499/month',
          marketPrice: '$1,499 - $4,999/month',
          benefits: ['Detect threats 90% faster', 'Reduce false positives by 70%', 'Automate incident response']
        }
      ]
    },
    {
      id: 'blockchain',
      title: 'Blockchain & Web3',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      description: 'Enterprise blockchain and decentralized solutions',
      services: [
        {
          name: 'Blockchain Enterprise Orchestrator',
          path: '/services/blockchain-enterprise',
          description: 'Enterprise-grade blockchain platform for smart contracts and DeFi protocols',
          icon: Globe,
          features: ['Multi-blockchain management', 'Smart contract orchestration', 'DeFi integration', 'Cross-chain support'],
          pricing: 'Starting from $1,999/month',
          marketPrice: '$1,999 - $5,999/month',
          benefits: ['Reduce blockchain complexity by 70%', 'Improve transaction efficiency by 50%', 'Ensure regulatory compliance']
        }
      ]
    },
    {
      id: 'healthcare',
      title: 'Healthcare & Medical Research',
      icon: Heart,
      color: 'from-pink-500 to-red-500',
      description: 'AI-powered healthcare solutions and medical research',
      services: [
        {
          name: 'AI Medical Research Platform',
          path: '/services/ai-medical-research',
          description: 'Revolutionary AI platform accelerating drug discovery and clinical trials',
          icon: Heart,
          features: ['AI drug discovery', 'Clinical trial optimization', 'Medical image analysis', 'Genomic processing'],
          pricing: 'Starting from $3,999/month',
          marketPrice: '$3,999 - $12,999/month',
          benefits: ['Accelerate drug discovery by 5x', 'Reduce clinical trial costs by 40%', 'Improve diagnostic accuracy by 60%']
        }
      ]
    },
    {
      id: 'finance',
      title: 'Financial Services & Trading',
      icon: DollarSign,
      color: 'from-yellow-500 to-orange-500',
      description: 'AI-powered financial solutions and trading platforms',
      services: [
        {
          name: 'AI Financial Trading Platform',
          path: '/services/ai-financial-trading',
          description: 'Advanced AI-powered trading platform with algorithmic trading and risk management',
          icon: TrendingUp,
          features: ['AI trading algorithms', 'Real-time market analysis', 'Risk management', 'Portfolio optimization'],
          pricing: 'Starting from $4,999/month',
          marketPrice: '$4,999 - $15,000/month',
          benefits: ['Improve trading performance by 30%', 'Reduce risk exposure by 50%', 'Automated trading strategies']
        }
      ]
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing & Industry 4.0',
      icon: Factory,
      color: 'from-gray-500 to-blue-500',
      description: 'Smart manufacturing and industrial automation',
      services: [
        {
          name: 'AI Industry 4.0 Platform',
          path: '/services/ai-industry-4-0',
          description: 'Comprehensive AI platform for Industry 4.0 optimization and automation',
          icon: Factory,
          features: ['Predictive maintenance', 'Quality control automation', 'Production optimization', 'IoT integration'],
          pricing: 'Starting from $3,499/month',
          marketPrice: '$3,499 - $9,999/month',
          benefits: ['Reduce downtime by 40%', 'Improve product quality by 35%', 'Optimize production by 50%']
        }
      ]
    },
    {
      id: 'energy',
      title: 'Energy & Sustainability',
      icon: Zap,
      color: 'from-yellow-400 to-green-500',
      description: 'Sustainable energy management and optimization',
      services: [
        {
          name: 'AI Energy & Sustainability Platform',
          path: '/services/ai-energy-sustainability',
          description: 'Intelligent platform for energy optimization and sustainability tracking',
          icon: Zap,
          features: ['Energy consumption optimization', 'Renewable energy management', 'Carbon tracking', 'Sustainability reporting'],
          pricing: 'Starting from $1,999/month',
          marketPrice: '$1,999 - $5,999/month',
          benefits: ['Reduce energy costs by 30%', 'Improve sustainability by 50%', 'Automated optimization']
        }
      ]
    },
    {
      id: 'transportation',
      title: 'Transportation & Smart Cities',
      icon: Truck,
      color: 'from-blue-600 to-purple-600',
      description: 'Intelligent transportation and urban management',
      services: [
        {
          name: 'AI Smart City Platform',
          path: '/services/ai-smart-city',
          description: 'Comprehensive AI platform for smart city management and optimization',
          icon: Building2,
          features: ['Traffic optimization', 'Public safety monitoring', 'Utility management', 'Urban planning'],
          pricing: 'Starting from $4,999/month',
          marketPrice: '$4,999 - $15,000/month',
          benefits: ['Reduce traffic congestion by 30%', 'Improve public safety by 40%', 'Optimize utility usage by 25%']
        }
      ]
    },
    {
      id: 'education',
      title: 'Education & Learning',
      icon: GraduationCap,
      color: 'from-indigo-500 to-purple-500',
      description: 'AI-powered education and learning analytics',
      services: [
        {
          name: 'AI Education Analytics Platform',
          path: '/services/ai-education-analytics',
          description: 'Advanced AI platform for learning analytics and student performance tracking',
          icon: GraduationCap,
          features: ['Learning analytics', 'Performance tracking', 'Personalized recommendations', 'Predictive modeling'],
          pricing: 'Starting from $1,499/month',
          marketPrice: '$1,499 - $4,999/month',
          benefits: ['Improve student outcomes by 50%', 'Reduce administrative workload by 60%', 'Personalize learning experiences']
        }
      ]
    },
    {
      id: 'retail',
      title: 'Retail & E-commerce',
      icon: Store,
      color: 'from-orange-500 to-red-500',
      description: 'AI-powered retail optimization and innovation',
      services: [
        {
          name: 'AI Retail Innovation Platform',
          path: '/services/ai-retail-innovation',
          description: 'Cutting-edge AI platform revolutionizing retail through personalization and optimization',
          icon: Store,
          features: ['Personalized experiences', 'Inventory optimization', 'Predictive analytics', 'Customer insights'],
          pricing: 'Starting from $2,499/month',
          marketPrice: '$2,499 - $7,999/month',
          benefits: ['Increase sales by 40%', 'Reduce inventory costs by 30%', 'Improve customer satisfaction by 50%']
        }
      ]
    },
    {
      id: 'legal',
      title: 'Legal & Compliance',
      icon: Scale,
      color: 'from-gray-700 to-blue-700',
      description: 'AI-powered legal automation and compliance',
      services: [
        {
          name: 'AI Legal & Compliance Platform',
          path: '/services/ai-legal-compliance',
          description: 'Advanced AI platform for legal document automation and compliance monitoring',
          icon: Scale,
          features: ['Document automation', 'Compliance monitoring', 'Regulatory reporting', 'Risk assessment'],
          pricing: 'Starting from $3,999/month',
          marketPrice: '$3,999 - $12,999/month',
          benefits: ['Reduce legal costs by 60%', 'Improve compliance by 80%', 'Automate regulatory reporting']
        }
      ]
    },
    {
      id: 'agriculture',
      title: 'Agriculture & Precision Farming',
      icon: Leaf,
      color: 'from-green-600 to-emerald-600',
      description: 'AI-powered agricultural optimization and sustainability',
      services: [
        {
          name: 'AI Precision Farming Platform',
          path: '/services/ai-precision-farming',
          description: 'Revolutionary AI platform for precision farming and sustainable agriculture',
          icon: Leaf,
          features: ['Precision farming optimization', 'Crop monitoring', 'Soil analysis', 'Weather prediction'],
          pricing: 'Starting from $1,999/month',
          marketPrice: '$1,999 - $5,999/month',
          benefits: ['Increase crop yields by 40%', 'Reduce resource waste by 35%', 'Improve sustainability by 50%']
        }
      ]
    },
    {
      id: 'construction',
      title: 'Construction & Infrastructure',
      icon: Building2,
      color: 'from-orange-600 to-red-600',
      description: 'AI-powered construction optimization and project management',
      services: [
        {
          name: 'AI Construction Optimization Platform',
          path: '/services/ai-construction-optimization',
          description: 'Advanced AI platform for construction project optimization and management',
          icon: Building2,
          features: ['Project planning optimization', 'Resource management', 'Performance analytics', 'Safety monitoring'],
          pricing: 'Starting from $2,999/month',
          marketPrice: '$2,999 - $8,999/month',
          benefits: ['Reduce project delays by 35%', 'Improve safety by 50%', 'Optimize resource allocation by 40%']
        }
      ]
    },
    {
      id: 'hospitality',
      title: 'Hospitality & Guest Experience',
      icon: Utensils,
      color: 'from-pink-600 to-purple-600',
      description: 'AI-powered hospitality optimization and guest experience',
      services: [
        {
          name: 'AI Hospitality Optimization Platform',
          path: '/services/ai-hospitality-optimization',
          description: 'Intelligent platform for hospitality operations and guest experience optimization',
          icon: Utensils,
          features: ['Guest experience optimization', 'Operational efficiency', 'Revenue optimization', 'Customer analytics'],
          pricing: 'Starting from $1,999/month',
          marketPrice: '$1,999 - $5,999/month',
          benefits: ['Improve guest satisfaction by 45%', 'Increase revenue by 35%', 'Optimize operations by 40%']
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
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Innovative Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover our complete portfolio of cutting-edge AI-powered solutions designed to transform every industry. 
            From quantum computing to autonomous systems, we deliver the future of technology today.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search comprehensive services..."
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

              {/* Benefits */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-300 mb-2">Key Benefits:</h4>
                <ul className="space-y-1">
                  {service.benefits.map((benefit, benefitIdx) => (
                    <li key={benefitIdx} className="flex items-center space-x-2 text-sm text-gray-400">
                      <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing */}
              <div className="mb-4 p-3 bg-gray-700/50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <DollarSign className="w-4 h-4 text-green-400" />
                    <span>{service.pricing}</span>
                  </div>
                  <div className="text-xs text-gray-400">
                    Market: {service.marketPrice}
                  </div>
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
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our AI experts help you implement the right technology solutions to drive growth, innovation, and competitive advantage. 
              From quantum computing to autonomous systems, we deliver cutting-edge solutions that give you the future today.
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