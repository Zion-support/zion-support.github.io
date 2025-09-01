import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Shield, 
  Brain, 
  Cloud, 
  Database, 
  Smartphone, 
  Globe, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Award,
  Clock,
  DollarSign,
  Target,
  Lightbulb,
  Rocket,
  Cpu,
  Network,
  Lock,
  BarChart3,
  Palette,
  Search,
  Filter,
  ChevronDown,
  ExternalLink,
  Atom,
  Eye,
  Heart,
  Factory,
  ShoppingCart,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Truck,
  FileText,
  BookOpen,
  MessageCircle,
  HelpCircle,
  Gauge,
  Workflow
} from 'lucide-react';

const ComprehensiveServicesShowcase2026: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Zap, count: 25 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 8 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 4 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 6 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 4 },
    { id: 'emerging', name: 'Emerging Tech', icon: Rocket, count: 3 }
  ];

  const services = [
    {
      id: 1,
      name: 'AI-Powered Business Intelligence Platform',
      category: 'ai-ml',
      description: 'Next-generation business intelligence with AI-driven insights and predictive analytics.',
      features: ['Real-time data processing', 'Predictive modeling', 'Natural language queries', 'Automated reporting'],
      price: 'From $35,000',
      duration: '16-24 weeks',
      complexity: 'Very High',
      icon: Brain,
      benefits: ['Data-driven decisions', 'Automated insights', 'Scalable infrastructure', 'Real-time analytics'],
      technologies: ['TensorFlow', 'Python', 'React', 'PostgreSQL', 'Kubernetes'],
      caseStudy: 'Increased business efficiency by 45% for Fortune 500 company',
      innovationLevel: 'Cutting Edge',
      marketTrend: 'High Growth'
    },
    {
      id: 2,
      name: 'Quantum Machine Learning Framework',
      category: 'quantum',
      description: 'Revolutionary quantum computing framework for machine learning applications.',
      features: ['Quantum algorithms', 'Hybrid classical-quantum', 'Optimization engines', 'Quantum neural networks'],
      price: 'From $75,000',
      duration: '24-36 weeks',
      complexity: 'Revolutionary',
      icon: Atom,
      benefits: ['Exponential speedup', 'Quantum advantage', 'Future-proof technology', 'Competitive edge'],
      technologies: ['Qiskit', 'Cirq', 'PennyLane', 'Python', 'Quantum hardware'],
      caseStudy: 'Achieved 1000x speedup in optimization problems',
      innovationLevel: 'Revolutionary',
      marketTrend: 'Emerging'
    },
    {
      id: 3,
      name: 'Advanced Threat Intelligence System',
      category: 'cybersecurity',
      description: 'AI-powered cybersecurity platform with autonomous threat detection and response.',
      features: ['Zero-day threat detection', 'Behavioral analysis', 'Automated response', 'Threat hunting'],
      price: 'From $45,000',
      duration: '20-28 weeks',
      complexity: 'Very High',
      icon: Shield,
      benefits: ['Proactive defense', 'Reduced false positives', '24/7 monitoring', 'Compliance ready'],
      technologies: ['SIEM', 'Machine Learning', 'Behavioral Analytics', 'Automation'],
      caseStudy: 'Prevented 99.9% of cyber attacks in real-time',
      innovationLevel: 'Advanced',
      marketTrend: 'High Demand'
    },
    {
      id: 4,
      name: 'Edge Computing IoT Platform',
      category: 'emerging',
      description: 'Distributed edge computing platform for IoT devices and real-time processing.',
      features: ['Edge processing', 'Real-time analytics', 'Device management', 'Scalable architecture'],
      price: 'From $28,000',
      duration: '18-26 weeks',
      complexity: 'High',
      icon: Cpu,
      benefits: ['Low latency', 'Reduced bandwidth', 'Offline capability', 'Scalable deployment'],
      technologies: ['Kubernetes', 'Docker', 'MQTT', 'Node.js', 'Edge devices'],
      caseStudy: 'Reduced latency by 80% for industrial IoT applications',
      innovationLevel: 'Advanced',
      marketTrend: 'Growing'
    },
    {
      id: 5,
      name: 'Blockchain Supply Chain Platform',
      category: 'emerging',
      description: 'Transparent and secure supply chain management using blockchain technology.',
      features: ['Smart contracts', 'Traceability', 'Automated compliance', 'Real-time tracking'],
      price: 'From $32,000',
      duration: '20-30 weeks',
      complexity: 'High',
      icon: Coins,
      benefits: ['Transparency', 'Reduced fraud', 'Automated compliance', 'Cost savings'],
      technologies: ['Ethereum', 'Hyperledger', 'Smart contracts', 'Web3', 'IoT integration'],
      caseStudy: 'Improved supply chain efficiency by 35%',
      innovationLevel: 'Advanced',
      marketTrend: 'High Growth'
    },
    {
      id: 6,
      name: 'Autonomous Research Assistant',
      category: 'ai-ml',
      description: 'AI-powered research platform that autonomously discovers and synthesizes information.',
      features: ['Automated research', 'Knowledge synthesis', 'Citation management', 'Trend analysis'],
      price: 'From $40,000',
      duration: '22-30 weeks',
      complexity: 'Very High',
      icon: BookOpen,
      benefits: ['Faster research', 'Comprehensive coverage', 'Automated insights', 'Time savings'],
      technologies: ['NLP', 'Machine Learning', 'Knowledge Graphs', 'APIs', 'Automation'],
      caseStudy: 'Reduced research time by 70% for academic institutions',
      innovationLevel: 'Cutting Edge',
      marketTrend: 'Emerging'
    },
    {
      id: 7,
      name: 'Quantum Financial Trading Platform',
      category: 'quantum',
      description: 'Quantum computing-powered financial trading with advanced algorithms.',
      features: ['Quantum algorithms', 'Risk assessment', 'Portfolio optimization', 'Real-time trading'],
      price: 'From $85,000',
      duration: '28-40 weeks',
      complexity: 'Revolutionary',
      icon: TrendingUp,
      benefits: ['Quantum advantage', 'Faster execution', 'Better risk management', 'Competitive edge'],
      technologies: ['Quantum computing', 'Financial algorithms', 'Real-time data', 'Trading APIs'],
      caseStudy: 'Achieved 500x faster portfolio optimization',
      innovationLevel: 'Revolutionary',
      marketTrend: 'Emerging'
    },
    {
      id: 8,
      name: 'AI Healthcare Diagnostics Platform',
      category: 'ai-ml',
      description: 'Advanced healthcare diagnostics using AI and machine learning.',
      features: ['Medical imaging analysis', 'Diagnostic assistance', 'Patient monitoring', 'Predictive health'],
      price: 'From $55,000',
      duration: '24-32 weeks',
      complexity: 'Very High',
      icon: Heart,
      benefits: ['Improved accuracy', 'Faster diagnosis', 'Early detection', 'Cost reduction'],
      technologies: ['Computer Vision', 'Deep Learning', 'Medical APIs', 'HIPAA compliance'],
      caseStudy: 'Improved diagnostic accuracy by 25%',
      innovationLevel: 'Advanced',
      marketTrend: 'High Growth'
    },
    {
      id: 9,
      name: 'Sustainable Technology Platform',
      category: 'emerging',
      description: 'Green technology solutions for environmental sustainability.',
      features: ['Carbon tracking', 'Energy optimization', 'Sustainability metrics', 'Green reporting'],
      price: 'From $25,000',
      duration: '16-24 weeks',
      complexity: 'Medium',
      icon: Leaf,
      benefits: ['Environmental impact', 'Cost savings', 'Compliance', 'Brand enhancement'],
      technologies: ['IoT sensors', 'Data analytics', 'Sustainability APIs', 'Reporting tools'],
      caseStudy: 'Reduced carbon footprint by 40%',
      innovationLevel: 'Advanced',
      marketTrend: 'Growing'
    },
    {
      id: 10,
      name: 'Advanced DevOps Automation',
      category: 'cloud',
      description: 'Comprehensive DevOps automation with AI-powered optimization.',
      features: ['CI/CD automation', 'Infrastructure as code', 'Performance monitoring', 'Auto-scaling'],
      price: 'From $30,000',
      duration: '18-26 weeks',
      complexity: 'High',
      icon: Rocket,
      benefits: ['Faster deployments', 'Reduced errors', 'Cost optimization', 'Scalability'],
      technologies: ['Jenkins', 'Terraform', 'Kubernetes', 'Prometheus', 'AI optimization'],
      caseStudy: 'Reduced deployment time by 90%',
      innovationLevel: 'Advanced',
      marketTrend: 'High Demand'
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Low': return 'text-green-400';
      case 'Medium': return 'text-yellow-400';
      case 'High': return 'text-orange-400';
      case 'Very High': return 'text-red-400';
      case 'Revolutionary': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  const getInnovationLevelColor = (level: string) => {
    switch (level) {
      case 'Basic': return 'text-gray-400';
      case 'Advanced': return 'text-blue-400';
      case 'Cutting Edge': return 'text-cyan-400';
      case 'Revolutionary': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            2026
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              {' '}Services Showcase
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the future of technology with our cutting-edge services. From quantum computing 
            to AI-powered solutions, we're building tomorrow's innovations today.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search 2026 services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 border-cyan-500 text-white'
                      : 'bg-slate-800 border-slate-600 text-gray-300 hover:border-cyan-500/50 hover:bg-slate-700'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-slate-800 rounded-2xl p-6 border border-slate-600 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 group"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getComplexityColor(service.complexity)} bg-slate-700`}>
                      {service.complexity}
                    </span>
                  </div>
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Innovation Level */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-400">Innovation:</span>
                    <span className={`font-medium ${getInnovationLevelColor(service.innovationLevel)}`}>
                      {service.innovationLevel}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-400">Market Trend:</span>
                    <span className="text-green-400 font-medium">
                      {service.marketTrend}
                    </span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Details */}
                <div className="grid grid-cols-3 gap-3 mb-4 text-sm">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-gray-400 mb-1">
                      <DollarSign className="w-4 h-4" />
                    </div>
                    <span className="text-white font-medium">{service.price}</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-gray-400 mb-1">
                      <Clock className="w-4 h-4" />
                    </div>
                    <span className="text-white font-medium">{service.duration}</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-gray-400 mb-1">
                      <Users className="w-4 h-4" />
                    </div>
                    <span className="text-white font-medium">{service.complexity}</span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-slate-700 text-gray-400 text-xs rounded-md">
                        +{service.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Case Study */}
                <div className="mb-4 p-3 bg-slate-700/50 rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-gray-300 mb-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="font-medium">Case Study</span>
                  </div>
                  <p className="text-xs text-gray-400">{service.caseStudy}</p>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/25">
                  Explore 2026 Innovation
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-12 border border-slate-600">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Shaping the Future of Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our 2026 services represent the cutting edge of innovation, combining emerging technologies 
                with practical business solutions to create tomorrow's competitive advantages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Atom,
                  title: 'Quantum Revolution',
                  description: 'Leading the quantum computing revolution with practical applications'
                },
                {
                  icon: Brain,
                  title: 'AI Evolution',
                  description: 'Advanced AI systems that learn, adapt, and evolve autonomously'
                },
                {
                  icon: Shield,
                  title: 'Cyber Defense',
                  description: 'Next-generation cybersecurity with AI-powered threat prevention'
                },
                {
                  icon: Rocket,
                  title: 'Emerging Tech',
                  description: 'Exploring and implementing cutting-edge technologies of tomorrow'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready for 2026?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Don't wait for the future to arrive. Start building it today with our cutting-edge services 
              and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Start Your Future Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-cyan-600 transition-all duration-300 hover:shadow-lg">
                Schedule Innovation Consultation
                <ExternalLink className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensiveServicesShowcase2026;