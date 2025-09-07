import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Zap, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Cpu,
  Lock,
  Database,
  Network,
  Globe,
  Users,
  BarChart3,
  FileText,
  Clock,
  Star,
  Award,
  Target,
  Rocket,
  Smartphone,
  Wifi,
  Server,
  Cloud,
  Activity,
  Monitor,
  Smartphone as MobileIcon,
  Search,
  Filter,
  Grid,
  List,
  ExternalLink,
  DollarSign,
  Calendar,
  User,
  Building,
  Code,
  Palette,
  Camera,
  Music,
  Gamepad2,
  Car,
  Plane,
  Ship,
  Train,
  Bus,
  Bicycle,
  Motorcycle,
  Truck as TruckIcon,
  Building2,
  Factory,
  Warehouse,
  Store,
  Bank,
  Hospital,
  School,
  University,
  Library,
  Museum,
  Theater,
  Stadium,
  Park,
  Beach,
  Mountain,
  Forest,
  Desert,
  Island,
  Ocean,
  River,
  Lake,
  Stream,
  Waterfall,
  Atom
} from 'lucide-react';

const MicroSAASSolutions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', name: 'All Solutions', icon: <Grid className="w-4 h-4" /> },
    { id: 'ai', name: 'AI & Machine Learning', icon: <Brain className="w-4 h-4" /> },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: <Network className="w-4 h-4" /> },
    { id: 'quantum', name: 'Quantum Computing', icon: <Atom className="w-4 h-4" /> },
    { id: 'edge', name: 'Edge Computing', icon: <Cpu className="w-4 h-4" /> },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { id: 'analytics', name: 'Analytics & BI', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'automation', name: 'Automation', icon: <Zap className="w-4 h-4" /> }
  ];

  const microSaaSSolutions = [
    {
      id: 'ai-blockchain-integration',
      title: 'AI Blockchain Integration Platform',
      description: 'Revolutionize blockchain applications with cutting-edge AI integration. Automate smart contracts, optimize DeFi strategies, and enhance security.',
      category: 'blockchain',
      price: '$299/month',
      priceRange: '$299 - $1,299/month',
      features: [
        'AI-Powered Smart Contract Generation',
        'Intelligent DeFi Analytics',
        'Cross-Chain Interoperability',
        'AI-Enhanced Security'
      ],
      benefits: [
        '70% faster development time',
        '99.9% security compliance',
        'Multi-chain asset management',
        'Real-time threat monitoring'
      ],
      useCases: ['DeFi Platforms', 'Supply Chain', 'Digital Identity', 'Asset Tokenization'],
      icon: <Network className="w-8 h-8 text-blue-500" />,
      color: 'blue',
      link: '/services/ai-blockchain-integration-platform'
    },
    {
      id: 'ai-quantum-computing',
      title: 'AI-Powered Quantum Computing Platform',
      description: 'Harness quantum computing power combined with artificial intelligence. Solve previously impossible problems and unlock new frontiers.',
      category: 'quantum',
      price: '$499/month',
      priceRange: '$499 - $1,299/month',
      features: [
        'Quantum Machine Learning',
        'Quantum Cryptography',
        'Quantum Optimization',
        'Quantum Simulation'
      ],
      benefits: [
        '1000x faster training',
        'Quantum-safe encryption',
        'NP-hard problem solving',
        'Drug discovery acceleration'
      ],
      useCases: ['Drug Discovery', 'Financial Modeling', 'Climate Research', 'AI Training'],
      icon: <Atom className="w-8 h-8 text-purple-500" />,
      color: 'purple',
      link: '/services/ai-quantum-computing-platform'
    },
    {
      id: 'ai-edge-computing',
      title: 'AI-Powered Edge Computing Platform',
      description: 'Bring AI to the edge of your network. Process data locally, reduce latency, and enable real-time decision making.',
      category: 'edge',
      price: '$199/month',
      priceRange: '$199 - $599/month',
      features: [
        'Edge AI Processing',
        'Intelligent Edge Orchestration',
        'Edge Security & Privacy',
        'Real-time Analytics'
      ],
      benefits: [
        'Sub-10ms latency',
        'Dynamic load balancing',
        'Zero-trust architecture',
        'Reduced cloud costs'
      ],
      useCases: ['Smart Cities', 'Industrial IoT', 'Autonomous Vehicles', 'Healthcare'],
      icon: <Cpu className="w-8 h-8 text-green-500" />,
      color: 'green',
      link: '/services/ai-edge-computing-platform'
    },
    {
      id: 'ai-cybersecurity-suite',
      title: 'AI-Powered Cybersecurity Suite',
      description: 'Advanced threat detection and prevention using machine learning algorithms. Protect your digital assets with intelligent security.',
      category: 'cybersecurity',
      price: '$399/month',
      priceRange: '$399 - $999/month',
      features: [
        'AI Threat Detection',
        'Behavioral Analysis',
        'Automated Response',
        'Zero-Day Protection'
      ],
      benefits: [
        'Real-time threat monitoring',
        '99.9% detection rate',
        'Automated incident response',
        'Reduced false positives'
      ],
      useCases: ['Enterprise Security', 'Financial Services', 'Healthcare', 'Government'],
      icon: <Shield className="w-8 h-8 text-red-500" />,
      color: 'red',
      link: '/services/ai-cybersecurity-suite'
    },
    {
      id: 'ai-business-intelligence',
      title: 'AI Business Intelligence Platform',
      description: 'Transform your data into actionable insights with AI-powered analytics and predictive modeling.',
      category: 'analytics',
      price: '$249/month',
      priceRange: '$249 - $799/month',
      features: [
        'Predictive Analytics',
        'Natural Language Queries',
        'Automated Reporting',
        'Real-time Dashboards'
      ],
      benefits: [
        'Predictive insights',
        'Natural language interface',
        'Automated report generation',
        'Real-time data visualization'
      ],
      useCases: ['Sales Analytics', 'Marketing Intelligence', 'Financial Planning', 'Operations'],
      icon: <BarChart3 className="w-8 h-8 text-indigo-500" />,
      color: 'indigo',
      link: '/services/ai-business-intelligence'
    },
    {
      id: 'ai-workflow-automation',
      title: 'AI Workflow Automation Platform',
      description: 'Automate complex business processes with intelligent workflow orchestration and decision-making capabilities.',
      category: 'automation',
      price: '$179/month',
      priceRange: '$179 - $599/month',
      features: [
        'Intelligent Process Mapping',
        'Automated Decision Making',
        'Workflow Optimization',
        'Integration Hub'
      ],
      benefits: [
        '80% process automation',
        'Reduced manual errors',
        'Faster execution times',
        'Seamless integrations'
      ],
      useCases: ['HR Processes', 'Finance Operations', 'Customer Service', 'Marketing'],
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      color: 'yellow',
      link: '/services/ai-workflow-automation'
    },
    {
      id: 'ai-content-creation',
      title: 'AI Content Creation Studio',
      description: 'Create high-quality content at scale with AI-powered writing, design, and multimedia generation tools.',
      category: 'ai',
      price: '$129/month',
      priceRange: '$129 - $399/month',
      features: [
        'AI Writing Assistant',
        'Design Generation',
        'Content Optimization',
        'Multi-format Export'
      ],
      benefits: [
        '10x content production',
        'SEO optimization',
        'Brand consistency',
        'Multi-language support'
      ],
      useCases: ['Marketing Content', 'Blog Writing', 'Social Media', 'Product Descriptions'],
      icon: <FileText className="w-8 h-8 text-pink-500" />,
      color: 'pink',
      link: '/services/ai-content-creation'
    },
    {
      id: 'ai-customer-experience',
      title: 'AI Customer Experience Platform',
      description: 'Deliver personalized customer experiences with AI-powered insights, automation, and predictive analytics.',
      category: 'ai',
      price: '$349/month',
      priceRange: '$349 - $899/month',
      features: [
        'Customer Journey Mapping',
        'Predictive Personalization',
        'Sentiment Analysis',
        'Automated Support'
      ],
      benefits: [
        'Personalized experiences',
        'Increased customer satisfaction',
        'Reduced support costs',
        'Higher conversion rates'
      ],
      useCases: ['E-commerce', 'SaaS Platforms', 'Financial Services', 'Healthcare'],
      icon: <Users className="w-8 h-8 text-teal-500" />,
      color: 'teal',
      link: '/services/ai-customer-experience'
    }
  ];

  const filteredSolutions = microSaaSSolutions.filter(solution => {
    const matchesSearch = solution.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         solution.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || solution.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'border-blue-500 hover:border-blue-400 bg-blue-500/10',
      purple: 'border-purple-500 hover:border-purple-400 bg-purple-500/10',
      green: 'border-green-500 hover:border-green-400 bg-green-500/10',
      red: 'border-red-500 hover:border-red-400 bg-red-500/10',
      indigo: 'border-indigo-500 hover:border-indigo-400 bg-indigo-500/10',
      yellow: 'border-yellow-500 hover:border-yellow-400 bg-yellow-500/10',
      pink: 'border-pink-500 hover:border-pink-400 bg-pink-500/10',
      teal: 'border-teal-500 hover:border-teal-400 bg-teal-500/10'
    };
    return colorMap[color] || 'border-gray-500 hover:border-gray-400 bg-gray-500/10';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover innovative, intelligent, and diversified micro SaaS services designed to transform your business. 
              From AI-powered platforms to cutting-edge technologies, we have the solutions you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg">
                Get Started Today
              </button>
              <button className="px-8 py-4 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-colors font-semibold text-lg">
                Schedule a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search solutions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                    selectedCategory === category.id
                      ? 'border-blue-500 bg-blue-500/20 text-blue-400'
                      : 'border-slate-700 text-gray-300 hover:border-slate-600'
                  }`}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg border transition-colors ${
                  viewMode === 'grid'
                    ? 'border-blue-500 bg-blue-500/20 text-blue-400'
                    : 'border-slate-700 text-gray-300 hover:border-slate-600'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg border transition-colors ${
                  viewMode === 'list'
                    ? 'border-blue-500 bg-blue-500/20 text-blue-400'
                    : 'border-slate-700 text-gray-300 hover:border-slate-600'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredSolutions.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Search className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">No solutions found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </motion.div>
          ) : (
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredSolutions.map((solution, index) => (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                    viewMode === 'list' ? 'flex gap-6' : ''
                  } ${getColorClasses(solution.color)}`}
                >
                  {viewMode === 'list' ? (
                    // List View
                    <>
                      <div className="flex-shrink-0">
                        {solution.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-semibold text-white mb-2">{solution.title}</h3>
                            <p className="text-gray-300 mb-4">{solution.description}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-3xl font-bold text-white mb-1">{solution.price}</div>
                            <div className="text-sm text-gray-400">{solution.priceRange}</div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="font-semibold text-white mb-3">Key Features</h4>
                            <ul className="space-y-2">
                              {solution.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center text-gray-300">
                                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-3">Benefits</h4>
                            <ul className="space-y-2">
                              {solution.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-center text-gray-300">
                                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-white mb-2">Use Cases</h4>
                            <div className="flex flex-wrap gap-2">
                              {solution.useCases.map((useCase, idx) => (
                                <span key={idx} className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm">
                                  {useCase}
                                </span>
                              ))}
                            </div>
                          </div>
                          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    // Grid View
                    <>
                      <div className="flex items-center justify-between mb-4">
                        {solution.icon}
                        <span className="text-2xl font-bold text-white">{solution.price}</span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                      <p className="text-gray-300 mb-4 line-clamp-3">{solution.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-white mb-2">Key Features</h4>
                        <ul className="space-y-1">
                          {solution.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center text-gray-300 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-white mb-2">Use Cases</h4>
                        <div className="flex flex-wrap gap-1">
                          {solution.useCases.slice(0, 2).map((useCase, idx) => (
                            <span key={idx} className="px-2 py-1 bg-slate-700 text-gray-300 rounded text-xs">
                              {useCase}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                        Learn More
                      </button>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose from our comprehensive suite of micro SaaS solutions and start your digital transformation journey today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg">
                Get Started Today
              </button>
              <button className="px-8 py-4 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-colors font-semibold text-lg">
                Schedule a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASSolutions;