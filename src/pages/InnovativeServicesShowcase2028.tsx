import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Network, 
  PenTool, 
  TrendingUp, 
  Target, 
  Users, 
  BarChart3, 
  Zap, 
  Globe, 
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Database,
  FileText,
  Lightbulb,
  Award,
  Rocket,
  Sparkles,
  Search,
  Share2,
  Monitor,
  Palette,
  Camera,
  Video,
  Mic,
  Edit3,
  Eye,
  Heart,
  MessageCircle,
  Package,
  Truck,
  Warehouse,
  Route,
  BarChart,
  AlertTriangle,
  RefreshCw,
  BookOpen,
  Cpu,
  Lock,
  Cloud,
  Server,
  Code,
  Smartphone,
  Wifi,
  Chip,
  Database as DatabaseIcon,
  ShieldCheck,
  Bot,
  Workflow,
  Eye as EyeIcon,
  Sparkles as SparklesIcon,
  Zap as ZapIcon
} from 'lucide-react';

const InnovativeServicesShowcase2028 = () => {
  const featuredServices = [
    {
      id: 'ai-autonomous-research-assistant',
      title: 'AI Autonomous Research Assistant',
      description: 'Transform your research process with AI that autonomously discovers, analyzes, and synthesizes information from thousands of sources in real-time.',
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      category: 'AI & Research',
      pricing: 'From $99/month',
      features: [
        'AI-Powered Research',
        'Multi-Source Analysis',
        'Academic Integration',
        'Trend Analysis',
        'Real-time Updates',
        'Data Security'
      ],
      benefits: [
        'Accelerate research by 10x',
        '90%+ accuracy in findings',
        'Real-time market intelligence',
        'Compliance with research ethics'
      ],
      useCases: ['Academic Research', 'Market Intelligence', 'Product Development', 'Policy Research'],
      color: 'blue'
    },
    {
      id: 'ai-supply-chain-optimization',
      title: 'AI Supply Chain Optimization',
      description: 'Transform your supply chain with AI that predicts, optimizes, and automates every aspect of your operations for maximum efficiency and cost savings.',
      icon: <Network className="w-12 h-12 text-green-500" />,
      category: 'AI & Operations',
      pricing: 'From $199/month',
      features: [
        'End-to-End Visibility',
        'Predictive Analytics',
        'Inventory Optimization',
        'Route Optimization',
        'Warehouse Management',
        'Global Supply Chain'
      ],
      benefits: [
        '15-25% cost reduction',
        '30-40% lead time improvement',
        '20-35% efficiency gain',
        '50-70% risk mitigation'
      ],
      useCases: ['Retail & E-commerce', 'Manufacturing', 'Logistics & Transportation', 'Healthcare & Pharmaceuticals'],
      color: 'green'
    },
    {
      id: 'ai-content-marketing-suite',
      title: 'AI Content Marketing Suite',
      description: 'Transform your content marketing with AI that creates, optimizes, and distributes engaging content across all channels. Boost engagement, drive conversions, and scale your content strategy effortlessly.',
      icon: <PenTool className="w-12 h-12 text-purple-500" />,
      category: 'AI & Marketing',
      pricing: 'From $79/month',
      features: [
        'AI Content Creation',
        'Audience Intelligence',
        'Performance Optimization',
        'Multi-Channel Distribution',
        'Advanced Analytics',
        'Automated Workflows'
      ],
      benefits: [
        '300%+ content ROI',
        '70% time savings',
        '150% engagement boost',
        '45% conversion rate improvement'
      ],
      useCases: ['Blog Posts & Articles', 'Social Media Content', 'Email Marketing', 'Video & Multimedia'],
      color: 'purple'
    },
    {
      id: 'ai-quantum-hybrid-platform',
      title: 'AI Quantum Hybrid Platform',
      description: 'Experience the future of computing with our revolutionary AI Quantum Hybrid Platform. Combining quantum computing power with advanced AI algorithms for unprecedented computational capabilities.',
      icon: <Cpu className="w-12 h-12 text-indigo-500" />,
      category: 'Quantum Technology',
      pricing: 'From $1,999/month',
      features: [
        'Quantum AI Processing',
        'Hybrid Architecture',
        'Real-time Optimization',
        'Precision Computing',
        'Quantum Memory',
        'Quantum Networking'
      ],
      benefits: [
        '1000x faster computation',
        '99.99% accuracy',
        '24/7 continuous operation',
        'Global quantum access'
      ],
      useCases: ['Financial Modeling', 'Drug Discovery', 'Climate Modeling', 'Logistics Optimization'],
      color: 'indigo'
    },
    {
      id: 'ai-cybersecurity-platform',
      title: 'AI Cybersecurity Platform',
      description: 'Protect your digital assets with the most advanced AI-powered cybersecurity platform. Our intelligent security system detects, prevents, and responds to threats in real-time.',
      icon: <Shield className="w-12 h-12 text-red-500" />,
      category: 'Cybersecurity',
      pricing: 'From $299/month',
      features: [
        'AI Threat Detection',
        'Zero Trust Security',
        'Continuous Monitoring',
        'Advanced Encryption',
        'Network Security',
        'Threat Intelligence'
      ],
      benefits: [
        '99.99% threat detection',
        '24/7 protection',
        '<1s response time',
        'Global threat coverage'
      ],
      useCases: ['Enterprise Security', 'Remote Work Security', 'Cloud Security', 'Compliance Requirements'],
      color: 'red'
    },
    {
      id: 'ai-autonomous-code-reviewer',
      title: 'AI Autonomous Code Reviewer',
      description: 'Revolutionize your development process with AI that automatically reviews code, identifies issues, and suggests improvements for better quality and faster delivery.',
      icon: <Code className="w-12 h-12 text-cyan-500" />,
      category: 'AI & Development',
      pricing: 'From $149/month',
      features: [
        'Automated Code Review',
        'Security Vulnerability Detection',
        'Performance Optimization',
        'Code Quality Analysis',
        'Best Practices Enforcement',
        'Integration with CI/CD'
      ],
      benefits: [
        '90% faster code reviews',
        '60% fewer bugs in production',
        'Improved code quality',
        'Reduced development time'
      ],
      useCases: ['Software Development', 'DevOps Teams', 'Code Quality Assurance', 'Security Auditing'],
      color: 'cyan'
    }
  ];

  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      description: 'Cutting-edge AI solutions that transform business operations',
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      count: 8
    },
    {
      name: 'Cybersecurity',
      description: 'Advanced security solutions for modern threats',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      count: 6
    },
    {
      name: 'Cloud & Infrastructure',
      description: 'Scalable cloud solutions and infrastructure management',
      icon: <Cloud className="w-8 h-8 text-green-500" />,
      count: 5
    },
    {
      name: 'Data & Analytics',
      description: 'Powerful data insights and business intelligence',
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      count: 7
    },
    {
      name: 'Digital Transformation',
      description: 'End-to-end digital transformation solutions',
      icon: <Rocket className="w-8 h-8 text-orange-500" />,
      count: 4
    },
    {
      name: 'Emerging Technologies',
      description: 'Next-generation technology solutions',
      icon: <Sparkles className="w-8 h-8 text-cyan-500" />,
      count: 6
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600',
      green: 'from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600',
      purple: 'from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
      cyan: 'from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600',
      red: 'from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600',
      indigo: 'from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600'
    };
    return colorMap[color] || 'from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700';
  };

  const getBorderColor = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'border-blue-500/30 hover:border-blue-500/50',
      green: 'border-green-500/30 hover:border-green-500/50',
      purple: 'border-purple-500/30 hover:border-purple-500/50',
      cyan: 'border-cyan-500/30 hover:border-cyan-500/50',
      red: 'border-red-500/30 hover:border-red-500/50',
      indigo: 'border-indigo-500/30 hover:border-indigo-500/50'
    };
    return colorMap[color] || 'border-gray-500/30 hover:border-gray-500/50';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Innovative Services 2028
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Revolutionary AI-Powered
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500">
                {" "}Micro SAAS Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover our comprehensive suite of cutting-edge AI services designed to transform your business operations, 
              enhance productivity, and drive innovation across all industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our diverse range of AI-powered solutions across multiple domains and industries.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-4">
                  {category.icon}
                  <span className="text-sm text-gray-400 bg-slate-700/50 px-2 py-1 rounded-full">
                    {category.count} services
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-300">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover our most innovative and powerful AI-powered micro SAAS solutions.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${getBorderColor(service.color)} transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-6">
                  {service.icon}
                  <span className="text-sm text-gray-400 bg-slate-700/50 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Use Cases</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map((useCase, useCaseIndex) => (
                      <span
                        key={useCaseIndex}
                        className="text-xs text-gray-300 bg-slate-700/50 px-2 py-1 rounded-full"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-white">{service.pricing}</div>
                  <Link
                    to={`/services/${service.id}`}
                    className={`px-6 py-3 bg-gradient-to-r ${getColorClasses(service.color)} text-white font-semibold rounded-lg transition-all duration-300 flex items-center`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our AI-powered services to drive innovation, 
              improve efficiency, and gain competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2028;