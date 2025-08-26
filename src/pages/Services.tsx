import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../data/innovativeMicroSaasServices';
import { ADVANCED_ENTERPRISE_SOLUTIONS } from '../data/advancedEnterpriseSolutions';
import { SPECIALIZED_IT_SERVICES } from '../data/specializedITServices';
import { NEXT_GEN_AI_SERVICES_2025 } from '../data/nextGenAIServices2025';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';
import { ADVANCED_IT_INFRASTRUCTURE_SERVICES_2025 } from '../data/advancedITInfrastructureServices2025';
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
  FileText,
  MessageCircle,
  Truck,
  Play,
  Gamepad2
} from 'lucide-react';

export function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const allServices = [
    ...COMPREHENSIVE_SERVICES,
    ...INNOVATIVE_MICRO_SAAS_SERVICES,
    ...ADVANCED_ENTERPRISE_SOLUTIONS,
    ...SPECIALIZED_IT_SERVICES,
    ...NEXT_GEN_AI_SERVICES_2025,
    ...INNOVATIVE_MICRO_SAAS_SERVICES_2025,
    ...ADVANCED_IT_INFRASTRUCTURE_SERVICES_2025
  ];

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
        },
        {
          name: 'AI Legal Document Automation',
          path: '/services/ai-legal-document-automation',
          description: 'AI-powered legal document generation and compliance',
          icon: FileText,
          features: ['Smart document generation', 'Compliance monitoring', 'Legal research automation'],
          pricing: 'Starting from $299/month'
        },
        {
          name: 'AI Healthcare Analytics',
          path: '/services/ai-healthcare-analytics',
          description: 'AI-powered healthcare diagnostics and patient monitoring',
          icon: Heart,
          features: ['Predictive diagnostics', 'Real-time monitoring', 'Population health analytics'],
          pricing: 'Starting from $799/month'
        },
        {
          name: 'AI Financial Trading',
          path: '/services/ai-financial-trading',
          description: 'AI-powered trading algorithms and portfolio optimization',
          icon: TrendingUp,
          features: ['AI trading algorithms', 'Risk management', 'High-frequency trading'],
          pricing: 'Starting from $99/month'
        },
        {
          name: 'AI Supply Chain Optimization',
          path: '/services/ai-supply-chain-optimization',
          description: 'AI-powered supply chain management and optimization',
          icon: Truck,
          features: ['Demand forecasting', 'Route optimization', 'Inventory management'],
          pricing: 'Starting from $499/month'
        },
        {
          name: 'AI Customer Service Automation',
          path: '/services/ai-customer-service-automation',
          description: 'AI-powered customer support and service automation',
          icon: MessageCircle,
          features: ['AI chatbots', 'Multi-channel support', 'Smart routing'],
          pricing: 'Starting from $199/month',
          marketPrice: '$199 - $1,999/month',
          benefits: ['Reduce support costs by 40-60%', '24/7 customer support', 'Improve customer satisfaction']
        },
        {
          name: 'AI Real Estate Investment Platform',
          path: '/ai-real-estate-investment',
          description: 'AI-powered real estate market analysis and investment optimization',
          icon: Building,
          features: ['Market analysis', 'Property valuation', 'Investment scoring', 'Portfolio optimization'],
          pricing: 'Starting from $1,899/month',
          marketPrice: '$1,899 - $5,999/month',
          benefits: ['Identify undervalued properties', 'Optimize investment returns', 'Reduce investment risks']
        },
        {
          name: 'AI Education Platform',
          path: '/ai-education-platform',
          description: 'AI-powered adaptive learning and educational analytics',
          icon: Users,
          features: ['Adaptive learning', 'Student tracking', 'Personalized curriculum', 'Performance analytics'],
          pricing: 'Starting from $899/month',
          marketPrice: '$899 - $2,999/month',
          benefits: ['Improve student outcomes', 'Personalize learning paths', 'Enhance teacher efficiency']
        },
        {
          name: 'AI Energy Management',
          path: '/ai-energy-management',
          description: 'AI-powered energy optimization and sustainability platform',
          icon: Zap,
          features: ['Energy monitoring', 'Predictive maintenance', 'Cost optimization', 'Sustainability tracking'],
          pricing: 'Starting from $1,499/month',
          marketPrice: '$1,499 - $4,999/month',
          benefits: ['Reduce energy costs by 20-40%', 'Improve sustainability', 'Predictive maintenance']
        },
        {
          name: 'AI Precision Agriculture',
          path: '/ai-precision-agriculture',
          description: 'AI-powered crop management and precision farming',
          icon: Globe,
          features: ['Crop monitoring', 'Soil analysis', 'Weather prediction', 'Resource optimization'],
          pricing: 'Starting from $1,299/month',
          marketPrice: '$1,299 - $3,999/month',
          benefits: ['Increase crop yields by 15-30%', 'Reduce water usage', 'Improve sustainability']
        },
        {
          name: 'AI Construction Management',
          path: '/ai-construction-management',
          description: 'AI-powered construction project management and safety',
          icon: Building,
          features: ['Project optimization', 'Safety monitoring', 'Resource allocation', 'Risk assessment'],
          pricing: 'Starting from $1,699/month',
          marketPrice: '$1,699 - $4,999/month',
          benefits: ['Reduce project delays by 20-30%', 'Improve safety compliance', 'Optimize resource usage']
        },
        {
          name: 'AI Hospitality Platform',
          path: '/ai-hospitality-platform',
          description: 'AI-powered hospitality management and guest experience',
          icon: Heart,
          features: ['Guest personalization', 'Dynamic pricing', 'Operational optimization', 'Revenue management'],
          pricing: 'Starting from $999/month',
          marketPrice: '$999 - $2,999/month',
          benefits: ['Increase guest satisfaction', 'Optimize room pricing', 'Improve operational efficiency']
        },
        {
          name: 'AI Insurance Platform',
          path: '/ai-insurance-platform',
          description: 'AI-powered insurance risk assessment and claims processing',
          icon: Shield,
          features: ['Risk assessment', 'Claims automation', 'Fraud detection', 'Underwriting optimization'],
          pricing: 'Starting from $2,199/month',
          marketPrice: '$2,199 - $6,999/month',
          benefits: ['Reduce claims processing time', 'Improve risk assessment accuracy', 'Detect fraud effectively']
        },
        {
          name: 'AI Legal Research Platform',
          path: '/ai-legal-research',
          description: 'AI-powered legal research and document analysis',
          icon: FileText,
          features: ['Document analysis', 'Case law research', 'Legal precedent analysis', 'Citation checking'],
          pricing: 'Starting from $1,599/month',
          marketPrice: '$1,599 - $4,999/month',
          benefits: ['Reduce research time by 60-80%', 'Improve case preparation', 'Enhance legal writing']
        },
        {
          name: 'AI Media Platform',
          path: '/ai-media-platform',
          description: 'AI-powered media production and content creation',
          icon: Play,
          features: ['Content generation', 'Video editing automation', 'Audio processing', 'Audience analytics'],
          pricing: 'Starting from $1,299/month',
          marketPrice: '$1,299 - $3,999/month',
          benefits: ['Reduce production time by 40-60%', 'Increase content quality', 'Optimize audience engagement']
        },
        {
          name: 'AI Gaming Platform',
          path: '/ai-gaming-platform',
          description: 'AI-powered gaming analytics and player experience',
          icon: Gamepad2,
          features: ['Player behavior analysis', 'Game balance optimization', 'Personalized experiences', 'Performance analytics'],
          pricing: 'Starting from $1,199/month',
          marketPrice: '$1,199 - $3,999/month',
          benefits: ['Increase player engagement', 'Optimize game balance', 'Reduce player churn']
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
          pricing: 'Starting from $15,000/month',
          marketPrice: '$15,000 - $50,000/month',
          benefits: ['Solve complex problems 1000x faster', 'Quantum advantage', 'Future-proof technology']
        },
        {
          name: 'Quantum Computing',
          path: '/services/quantum-technology',
          description: 'Quantum computing platforms and solutions',
          icon: Cpu,
          features: ['Quantum supremacy', 'Complex simulations', 'Cryptography'],
          pricing: 'Starting from $20,000/month',
          marketPrice: '$20,000 - $75,000/month',
          benefits: ['Quantum supremacy', 'Complex simulations', 'Advanced cryptography']
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
          pricing: 'Starting from $3,500/month',
          marketPrice: '$3,500 - $12,000/month',
          benefits: ['Protect against cyber threats', 'Ensure compliance', 'Reduce security risks']
        },
        {
          name: 'SOC2 Compliance Automation',
          path: '/soc2-compliance-automation',
          description: 'Automated compliance management and monitoring',
          icon: Lock,
          features: ['Automated audits', 'Real-time monitoring', 'Compliance reporting'],
          pricing: 'Starting from $4,500/month',
          marketPrice: '$4,500 - $15,000/month',
          benefits: ['Automate compliance processes', 'Real-time monitoring', 'Reduce audit costs']
        },
        {
          name: 'AI Cybersecurity Intelligence',
          path: '/ai-cybersecurity-intelligence',
          description: 'AI-powered threat intelligence and response platform',
          icon: Shield,
          features: ['AI threat detection', 'Behavioral analysis', 'Automated response'],
          pricing: 'Starting from $2,499/month',
          marketPrice: '$2,499 - $7,999/month',
          benefits: ['Detect threats 10x faster', 'Reduce false positives by 80%', 'Automate security responses']
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
          pricing: 'Starting from $3,000/month',
          marketPrice: '$3,000 - $10,000/month',
          benefits: ['Accelerate deployment', 'Reduce infrastructure costs', 'Improve reliability']
        },
        {
          name: 'IT Infrastructure',
          path: '/services/it-infrastructure',
          description: 'Complete IT infrastructure solutions',
          icon: Network,
          features: ['Network design', 'Hardware management', 'Performance optimization'],
          pricing: 'Starting from $2,500/month',
          marketPrice: '$2,500 - $8,000/month',
          benefits: ['Optimize IT performance', 'Reduce infrastructure costs', 'Improve scalability']
        },
        {
          name: '5G Enterprise Solutions',
          path: '/5g-enterprise-solutions',
          description: 'High-speed 5G connectivity solutions',
          icon: Network,
          features: ['Ultra-fast connectivity', 'Low latency', 'High bandwidth'],
          pricing: 'Starting from $5,000/month',
          marketPrice: '$5,000 - $20,000/month',
          benefits: ['Ultra-fast connectivity', 'Low latency', 'High bandwidth for enterprise']
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
          pricing: 'Starting from $6,000/month',
          marketPrice: '$6,000 - $25,000/month',
          benefits: ['Automate business processes', 'Optimize workflows', 'Improve performance']
        },
        {
          name: 'AI Asset Management',
          path: '/ai-powered-it-asset-management',
          description: 'Intelligent IT asset management and tracking',
          icon: Database,
          features: ['Asset tracking', 'Lifecycle management', 'Cost optimization'],
          pricing: 'Starting from $2,000/month',
          marketPrice: '$2,000 - $6,000/month',
          benefits: ['Track IT assets efficiently', 'Optimize lifecycle management', 'Reduce costs']
        },
        {
          name: 'AI Supply Chain Platform',
          path: '/ai-supply-chain-platform',
          description: 'AI-powered supply chain optimization and logistics',
          icon: Truck,
          features: ['Demand forecasting', 'Inventory optimization', 'Route optimization'],
          pricing: 'Starting from $1,799/month',
          marketPrice: '$1,799 - $5,999/month',
          benefits: ['Reduce logistics costs by 20-35%', 'Improve delivery times', 'Optimize inventory']
        },
        {
          name: 'AI Customer Experience Platform',
          path: '/ai-customer-experience',
          description: 'AI-powered customer experience and support automation',
          icon: Users,
          features: ['AI chatbots', 'Personalized recommendations', 'Sentiment analysis'],
          pricing: 'Starting from $1,399/month',
          marketPrice: '$1,399 - $4,999/month',
          benefits: ['Improve customer satisfaction', 'Reduce support costs by 30-50%', '24/7 support']
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
          pricing: 'Starting from $8,000/month',
          marketPrice: '$8,000 - $25,000/month',
          benefits: ['Improve patient care', 'Ensure compliance', 'Optimize operations']
        },
        {
          name: 'Financial Services',
          path: '/services/financial-services',
          description: 'Fintech solutions and financial technology',
          icon: DollarSign,
          features: ['Risk management', 'Fraud detection', 'Compliance'],
          pricing: 'Starting from $7,000/month',
          marketPrice: '$7,000 - $20,000/month',
          benefits: ['Manage risks effectively', 'Detect fraud', 'Ensure compliance']
        },
        {
          name: 'Manufacturing Intelligence',
          path: '/services/manufacturing-intelligence',
          description: 'Smart manufacturing and Industry 4.0 solutions',
          icon: Cpu,
          features: ['Predictive maintenance', 'Quality control', 'Supply chain optimization'],
          pricing: 'Starting from $6,500/month',
          marketPrice: '$6,500 - $18,000/month',
          benefits: ['Predictive maintenance', 'Improve quality', 'Optimize supply chain']
        },
        {
          name: 'AI HR & Talent Platform',
          path: '/ai-hr-talent-platform',
          description: 'AI-powered HR and talent management platform',
          icon: Users,
          features: ['AI resume screening', 'Candidate matching', 'Performance analytics'],
          pricing: 'Starting from $1,199/month',
          marketPrice: '$1,199 - $3,999/month',
          benefits: ['Reduce hiring time by 50-70%', 'Improve candidate quality', 'Increase retention']
        },
        {
          name: 'AI Data Governance Platform',
          path: '/ai-data-governance',
          description: 'AI-powered data governance and privacy compliance',
          icon: Database,
          features: ['Data classification', 'Privacy compliance', 'Data quality assessment'],
          pricing: 'Starting from $1,899/month',
          marketPrice: '$1,899 - $6,999/month',
          benefits: ['Ensure regulatory compliance', 'Protect sensitive data', 'Improve data quality']
        }
      ]
    }
  ];
  
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
  
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (service.tags && service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-quantum-gradient opacity-20 animate-pulse"></div>
      <div className="absolute inset-0 bg-quantum-mesh"></div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-zion-cyan text-xs animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent animate-holographic-shift">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Discover our comprehensive range of cutting-edge technology solutions designed to transform your business
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 backdrop-blur-sm"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zion-cyan">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-zion-cyan text-zion-blue-dark shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-blue-light/20 text-zion-slate-light hover:bg-zion-blue-light/30 hover:text-white border border-zion-cyan/30'
                }`}
              >
                {category === 'all' ? 'All Services' : category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group bg-zion-blue-light/10 backdrop-blur-md border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 hover:bg-zion-blue-light/20 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group-hover:-translate-y-2"
            >
              {/* Service Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">
                  {service.category === 'ai-ml' ? '🤖' : 
                   service.category === 'cybersecurity' ? '🔒' :
                   service.category === 'cloud-devops' ? '☁️' :
                   service.category === 'web-development' ? '🌐' :
                   service.category === 'data-analytics' ? '📊' : '🚀'}
                </span>
              </div>
              
              {/* Service Content */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-zion-slate-light leading-relaxed mb-4">
                  {service.description}
                </p>
                
                {/* Tags */}
                {service.tags && service.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full border border-zion-cyan/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Price and Market Price */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-white">
                      ${service.price.toLocaleString()}
                    </span>
                    {service.marketPrice && (
                      <span className="text-sm text-zion-slate-light">
                        Market: {service.marketPrice}
                      </span>
                    )}
                  </div>
                  
                  {/* Benefits */}
                  {service.benefits && service.benefits.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center gap-2 text-xs text-zion-slate-light">
                            <span className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              
              {/* CTA Button */}
              <Link
                to={`/services/${service.id}`}
                className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-105"
              >
                Learn More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Services Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-zion-purple/20 via-zion-cyan/20 to-zion-purple/20 border border-zion-purple/30 rounded-2xl p-8 backdrop-blur-md">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                🚀 Premium AI-Powered Solutions
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Experience the future of business with our cutting-edge AI services. 
                Transform your operations, reduce costs, and gain competitive advantages.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-cyan/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">AI Legal Contract Analyzer</h3>
                <p className="text-zion-slate-light text-sm mb-4">Advanced AI platform for legal contract analysis and risk assessment.</p>
                <div className="text-2xl font-bold text-zion-cyan mb-4">$1,299/month</div>
                <div className="text-sm text-zion-slate-light mb-4">Market: $1,299 - $4,999/month</div>
                <Link
                  to="/enhanced-innovative-services"
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-medium rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-200"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-cyan/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-green rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Autonomous Financial Advisor</h3>
                <p className="text-zion-slate-light text-sm mb-4">AI-driven financial advisory and portfolio optimization platform.</p>
                <div className="text-2xl font-bold text-zion-cyan mb-4">$2,499/month</div>
                <div className="text-sm text-zion-slate-light mb-4">Market: $2,499 - $7,999/month</div>
                <Link
                  to="/enhanced-innovative-services"
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-green text-white font-medium rounded-lg hover:from-zion-cyan/80 hover:to-zion-green/80 transition-all duration-200"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-cyan/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-zion-red to-zion-pink rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">AI Healthcare Diagnostics</h3>
                <p className="text-zion-slate-light text-sm mb-4">AI-powered medical image analysis and diagnostic assistance.</p>
                <div className="text-2xl font-bold text-zion-cyan mb-4">$3,999/month</div>
                <div className="text-sm text-zion-slate-light mb-4">Market: $3,999 - $12,999/month</div>
                <Link
                  to="/enhanced-innovative-services"
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-zion-red to-zion-pink text-white font-medium rounded-lg hover:from-zion-red/80 hover:to-zion-pink/80 transition-all duration-200"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <div className="text-center">
              <Link
                to="/enhanced-innovative-services"
                className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-medium rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-200 transform hover:scale-105"
              >
                <span>View All Premium Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let's discuss how our technology solutions can accelerate your growth and 
              give you a competitive edge in the market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center group hover:scale-105"
              >
                Get Free Consultation
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-xl text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center group hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Sales Team
              </a>
            </div>
          </div>
        </motion.div>

        {/* Pricing & Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-zion-blue-dark/50 to-zion-slate-dark/50 border border-zion-cyan/30 rounded-2xl p-8 backdrop-blur-md">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                💰 Competitive Pricing & Market Analysis
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Our AI-powered solutions offer exceptional value with competitive pricing. 
                Get enterprise-grade technology at accessible rates with proven ROI.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-cyan/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">🚀 Entry Level</h3>
                <div className="text-3xl font-bold text-zion-cyan mb-2">$199 - $999</div>
                <div className="text-zion-slate-light mb-4">per month</div>
                <ul className="space-y-2 text-sm text-zion-slate-light">
                  <li>• AI-powered automation</li>
                  <li>• Basic analytics</li>
                  <li>• Standard support</li>
                  <li>• Cloud deployment</li>
                </ul>
              </div>
              
              <div className="bg-zion-blue-light/20 backdrop-blur-sm border border-zion-cyan/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">⚡ Professional</h3>
                <div className="text-3xl font-bold text-zion-cyan mb-2">$1,000 - $4,999</div>
                <div className="text-zion-slate-light mb-4">per month</div>
                <ul className="space-y-2 text-sm text-zion-slate-light">
                  <li>• Advanced AI features</li>
                  <li>• Custom integrations</li>
                  <li>• Priority support</li>
                  <li>• Hybrid deployment</li>
                </ul>
              </div>
              
              <div className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-cyan/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">🏢 Enterprise</h3>
                <div className="text-3xl font-bold text-zion-cyan mb-2">$5,000+</div>
                <div className="text-zion-slate-light mb-4">per month</div>
                <ul className="space-y-2 text-sm text-zion-slate-light">
                  <li>• Full AI suite</li>
                  <li>• Custom development</li>
                  <li>• 24/7 dedicated support</li>
                  <li>• On-premise options</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-zion-cyan/10 border border-zion-cyan/30 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-white mb-4">📞 Get Your Custom Quote</h3>
                <p className="text-zion-slate-light mb-4">
                  Every business is unique. Contact our team for a personalized solution and pricing that fits your needs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-sm text-zion-slate-light mb-2">📱 Call Us</p>
                    <a href="tel:+13024640950" className="text-zion-cyan font-semibold hover:text-white transition-colors">
                      +1 302 464 0950
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-zion-slate-light mb-2">✉️ Email Us</p>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan font-semibold hover:text-white transition-colors">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-zion-slate-light mb-2">📍 Visit Us</p>
                  <p className="text-zion-cyan font-semibold">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </p>
                </div>
              </div>
              
              <Link
                to="/request-quote"
                className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-medium rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-200 transform hover:scale-105"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Footer Section */}
        <div className="bg-zion-slate-dark py-12 border-t border-zion-blue-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
                <p className="text-zion-slate-light mb-4">
                  Pioneering the future of technology with revolutionary AI consciousness, 
                  quantum computing, and autonomous solutions that transform businesses worldwide.
                </p>
                <div className="flex items-center gap-4 text-zion-slate-light">
                  <a href="https://ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                    ziontechgroup.com
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                <div className="space-y-2 text-zion-slate-light">
                  <p>📱 +1 302 464 0950</p>
                  <p>✉️ kleber@ziontechgroup.com</p>
                  <p>📍 364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                <div className="space-y-2">
                  <a href="/comprehensive-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Comprehensive Services
                  </a>
                  <a href="/enhanced-innovative-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Premium AI Solutions
                  </a>
                  <a href="/ai-solutions" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    AI & Machine Learning
                  </a>
                  <a href="/quantum-technology" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Quantum Technology
                  </a>
                  <a href="/cybersecurity" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Cybersecurity
                  </a>
                  <a href="/ai-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    AI Services
                  </a>
                  <a href="/enterprise-solutions" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Enterprise Solutions
                  </a>
                  <a href="/micro-saas-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Micro SAAS Services
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-zion-blue-light mt-8 pt-8 text-center">
              <p className="text-zion-slate-light text-sm">
                © 2024 Zion Tech Group. All rights reserved. | 
                <a href="/privacy" className="ml-2 hover:text-zion-cyan transition-colors">Privacy Policy</a> | 
                <a href="/terms" className="ml-2 hover:text-zion-cyan transition-colors">Terms of Service</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
