import React from 'react.ts';
import { motion              } from 'framer-motion.ts';
import { Rocket,
  Brain,
  Zap,
  Globe,
  Shield,
  Cpu,
  Database,
  Network,
  Lock,
  TrendingUp,
  Users,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Target,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Lightbulb,
  Code,
  Cloud,
  Server,
  Smartphone,
  Monitor,
  Wifi,
  Key,
  BarChart3,
  Globe2,
  ShieldCheck
              } from 'lucide-react.ts';
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894

export default function InnovativeServicesHub() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popularity');

  const services = [
    // Advanced AI & Machine Learning Services
    {
      id: 'ai-neural-architecture-optimizer',
      name: 'AI Neural Architecture Optimizer',
      description: 'Advanced neural network architecture optimization with automated hyperparameter tuning and model selection.',
      category: 'AI & ML',
      price: '$5,200/month',
      features: ['Architecture Optimization', 'Hyperparameter Tuning', 'Model Selection', 'Performance Analysis', 'AutoML Integration'],
      icon: Brain,
      badge: 'Advanced AI',
      color: 'from-purple-600 to-indigo-700',
      link: '/services/ai-neural-architecture-optimizer',
      marketPrice: '$6,800/month',
      savings: '24%',
      rating: 4.9,
      reviews: 89
    },
    {
      id: 'ai-federated-learning-platform',
      name: 'AI Federated Learning Platform',
      description: 'Privacy-preserving federated learning platform for distributed AI model training across organizations.',
      category: 'AI & ML',
      price: '$4,800/month',
      features: ['Federated Learning', 'Privacy Preservation', 'Distributed Training', 'Model Aggregation', 'Security Protocols'],
      icon: Network,
      badge: 'Privacy-First',
      color: 'from-green-600 to-emerald-700',
      link: '/services/ai-federated-learning-platform',
      marketPrice: '$6,200/month',
      savings: '23%',
      rating: 4.9,
      reviews: 67
    },
    {
      id: 'ai-explainable-ai-platform',
      name: 'AI Explainable AI Platform',
      description: 'Explainable AI platform for model interpretability, transparency, and regulatory compliance.',
      category: 'AI & ML',
      price: '$3,600/month',
      features: ['Model Interpretability', 'Transparency Tools', 'Regulatory Compliance', 'Bias Detection', 'Audit Trails'],
      icon: Eye,
      badge: 'Transparency',
      color: 'from-blue-600 to-cyan-700',
      link: '/services/ai-explainable-ai-platform',
      marketPrice: '$4,600/month',
      savings: '22%',
      rating: 4.8,
      reviews: 134
    },

    // Next-Generation Micro SaaS Solutions
    {
      id: 'ai-powered-churn-predictor',
      name: 'AI-Powered Churn Predictor',
      description: 'Intelligent customer churn prediction with behavioral analysis and retention strategies.',
      category: 'Micro SaaS',
      price: '$1,200/month',
      features: ['Churn Prediction', 'Behavioral Analysis', 'Retention Strategies', 'Customer Segmentation', 'Predictive Analytics'],
      icon: TrendingDown,
      badge: 'Retention',
      color: 'from-red-600 to-pink-700',
      link: '/services/ai-powered-churn-predictor',
      marketPrice: '$1,600/month',
      savings: '25%',
      rating: 4.7,
      reviews: 156
    },
    {
      id: 'ai-interview-assessment-platform',
      name: 'AI Interview Assessment Platform',
      description: 'Intelligent interview assessment with AI-powered candidate evaluation and skill analysis.',
      category: 'Micro SaaS',
      price: '$1,800/month',
      features: ['Candidate Evaluation', 'Skill Analysis', 'Interview Automation', 'Bias Detection', 'Performance Metrics'],
      icon: Users,
      badge: 'HR Tech',
      color: 'from-indigo-600 to-purple-700',
      link: '/services/ai-interview-assessment-platform',
      marketPrice: '$2,400/month',
      savings: '25%',
      rating: 4.8,
      reviews: 98
    },
    {
      id: 'ai-returns-management-saas',
      name: 'AI Returns Management SaaS',
      description: 'Intelligent returns management with fraud detection, process automation, and customer satisfaction optimization.',
      category: 'Micro SaaS',
      price: '$1,400/month',
      features: ['Fraud Detection', 'Process Automation', 'Customer Satisfaction', 'Analytics Dashboard', 'Integration APIs'],
      icon: ShoppingCart, // Changed from Package to ShoppingCart
      badge: 'E-commerce',
      color: 'from-orange-600 to-red-700',
      link: '/services/ai-returns-management-saas',
      marketPrice: '$1,900/month',
      savings: '26%',
      rating: 4.7,
      reviews: 123
    },

    // Advanced IT Infrastructure Services
    {
      id: 'ai-powered-seo-platform',
      name: 'AI-Powered SEO Platform',
      description: 'Advanced SEO platform with AI-powered keyword research, content optimization, and competitive analysis.',
      category: 'IT Infrastructure',
      price: '$2,600/month',
      features: ['Keyword Research', 'Content Optimization', 'Competitive Analysis', 'Ranking Tracking', 'AI Insights'],
      icon: Target,
      badge: 'SEO',
      color: 'from-green-600 to-blue-700',
      link: '/services/ai-powered-seo-platform',
      marketPrice: '$3,400/month',
      savings: '24%',
      rating: 4.8,
      reviews: 189
    },
    {
      id: 'ai-workflow-automation-platform',
      name: 'AI Workflow Automation Platform',
      description: 'Intelligent workflow automation with AI-powered process optimization and decision routing.',
      category: 'IT Infrastructure',
      price: '$3,200/month',
      features: ['Process Automation', 'Decision Routing', 'Performance Analytics', 'Integration APIs', 'Custom Workflows'],
      icon: Workflow,
      badge: 'Automation',
      color: 'from-blue-600 to-cyan-700',
      link: '/services/ai-workflow-automation-platform',
      marketPrice: '$4,100/month',
      savings: '22%',
      rating: 4.9,
      reviews: 167
    },

    // Emerging Technology Services
    {
      id: 'ai-quantum-hybrid-platform',
      name: 'AI-Quantum Hybrid Platform',
      description: 'Revolutionary platform combining artificial intelligence with quantum computing for unprecedented computational power.',
      category: 'Emerging Tech',
      price: '$7,500/month',
      features: ['Quantum Neural Networks', 'Quantum Algorithm Optimization', 'Real-time Quantum Processing', 'Quantum-Safe Security', 'Hybrid Computing'],
      icon: Atom,
      badge: 'Quantum AI',
      color: 'from-purple-600 to-pink-700',
      link: '/services/ai-quantum-hybrid-platform',
      marketPrice: '$9,800/month',
      savings: '23%',
      rating: 4.9,
      reviews: 45
    },
    {
      id: 'ai-space-technology-platform',
      name: 'AI Space Technology Platform',
      description: 'Advanced space technology platform with satellite data analytics, mission planning, and AI-powered insights.',
      category: 'Emerging Tech',
      price: '$6,200/month',
      features: ['Satellite Analytics', 'Mission Planning', 'AI Insights', 'Space Weather', 'Research Support'],
      icon: Satellite,
      badge: 'Space Tech',
      color: 'from-blue-600 to-purple-700',
      link: '/services/ai-space-technology-platform',
      marketPrice: '$8,100/month',
      savings: '23%',
      rating: 4.9,
      reviews: 67
    },

    // Healthcare Technology Services
    {
      id: 'ai-healthcare-analytics-platform',
      name: 'AI Healthcare Analytics Platform',
      description: 'Advanced healthcare analytics with patient insights, predictive diagnostics, and treatment optimization.',
      category: 'AI & ML',
      price: '$4,200/month',
      features: ['Patient Analytics', 'Predictive Diagnostics', 'Treatment Optimization', 'Clinical Insights', 'HIPAA Compliance'],
      icon: HeartPulse,
      badge: 'Healthcare',
      color: 'from-red-600 to-pink-700',
      link: '/services/ai-healthcare-analytics-platform',
      marketPrice: '$5,400/month',
      savings: '22%',
      rating: 4.9,
      reviews: 234
    },

    // Financial Technology Services
    {
      id: 'ai-financial-trading-platform',
      name: 'AI Financial Trading Platform',
      description: 'Intelligent trading platform with market analysis, risk management, and automated trading strategies.',
      category: 'AI & ML',
      price: '$5,800/month',
      features: ['Market Analysis', 'Risk Management', 'Automated Trading', 'Portfolio Optimization', 'Real-time Alerts'],
      icon: TrendingUp,
      badge: 'Trading',
      color: 'from-emerald-600 to-green-700',
      link: '/services/ai-financial-trading-platform',
      marketPrice: '$7,500/month',
      savings: '23%',
      rating: 4.9,
      reviews: 234
    },

    // Marketing & Sales Services
    {
      id: 'ai-marketing-automation-suite',
      name: 'AI Marketing Automation Suite',
      description: 'Intelligent marketing automation with personalized campaigns, lead scoring, and ROI optimization.',
      category: 'AI & ML',
      price: '$2,800/month',
      features: ['Campaign Automation', 'Lead Scoring', 'Personalization', 'ROI Optimization', 'Multi-channel Integration'],
      icon: Target,
      badge: 'Marketing',
      color: 'from-pink-600 to-rose-700',
      link: '/services/ai-marketing-automation-suite',
      marketPrice: '$3,600/month',
      savings: '22%',
      rating: 4.8,
      reviews: 198
    },

    // Supply Chain Services
    {
      id: 'ai-supply-chain-optimization',
      name: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain optimization with demand forecasting, inventory management, and logistics optimization.',
      category: 'AI & ML',
      price: '$4,200/month',
      features: ['Demand Forecasting', 'Inventory Management', 'Logistics Optimization', 'Risk Assessment', 'Real-time Tracking'],
      icon: Truck,
      badge: 'Supply Chain',
      color: 'from-blue-600 to-indigo-700',
      link: '/services/ai-supply-chain-optimization',
      marketPrice: '$5,400/month',
      savings: '22%',
      rating: 4.9,
      reviews: 167
    },

    // Customer Experience Services
    {
      id: 'ai-customer-experience-analytics',
      name: 'AI Customer Experience Analytics',
      description: 'Advanced customer experience analytics with sentiment analysis, journey mapping, and optimization insights.',
      category: 'AI & ML',
      price: '$3,200/month',
      features: ['Sentiment Analysis', 'Journey Mapping', 'Experience Optimization', 'Customer Insights', 'Predictive Analytics'],
      icon: Eye,
      badge: 'CX Analytics',
      color: 'from-purple-600 to-pink-700',
      link: '/services/ai-customer-experience-analytics',
      marketPrice: '$4,100/month',
      savings: '22%',
      rating: 4.8,
      reviews: 145
    },

    // Project Management Services
    {
      id: 'ai-project-management-platform',
      name: 'AI Project Management Platform',
      description: 'Intelligent project planning, resource allocation, and risk management with AI insights.',
      category: 'AI & ML',
      price: '$3,400/month',
      features: ['Smart Planning', 'Resource Optimization', 'Risk Management', 'Team Collaboration', 'Progress Tracking'],
      icon: Workflow,
      badge: 'Project Mgmt',
      color: 'from-orange-600 to-red-700',
      link: '/services/ai-project-management-platform',
      marketPrice: '$4,400/month',
      savings: '23%',
      rating: 4.9,
      reviews: 178
    },

    // DevOps Services
    {
      id: 'ai-devops-automation-platform',
      name: 'AI DevOps Automation Platform',
      description: 'Intelligent DevOps automation with AI-powered deployment, testing, and monitoring.',
      category: 'IT Infrastructure',
      price: '$4,200/month',
      features: ['AI Deployment', 'Automated Testing', 'Intelligent Monitoring', 'Performance Optimization', 'Security Integration'],
      icon: Workflow,
      badge: 'DevOps',
      color: 'from-orange-600 to-red-700',
      link: '/services/ai-devops-automation-platform',
      marketPrice: '$5,400/month',
      savings: '22%',
      rating: 4.9,
      reviews: 178
    },

    // IoT Services
    {
      id: 'ai-iot-edge-computing-platform',
      name: 'AI IoT Edge Computing Platform',
      description: 'Edge computing platform for IoT devices with AI processing and real-time analytics.',
      category: 'IT Infrastructure',
      price: '$3,400/month',
      features: ['Edge Processing', 'IoT Integration', 'Real-time Analytics', 'AI Models', 'Scalable Architecture'],
      icon: Cpu,
      badge: 'IoT Edge',
      color: 'from-cyan-600 to-blue-700',
      link: '/services/ai-iot-edge-computing-platform',
      marketPrice: '$4,400/month',
      savings: '23%',
      rating: 4.8,
      reviews: 145
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Star, count: services.length },
    { id: 'AI & ML', name: 'AI & Machine Learning', icon: Brain, count: services.filter(s => s.category === 'AI & ML').length },
    { id: 'IT Infrastructure', name: 'IT Infrastructure', icon: Server, count: services.filter(s => s.category === 'IT Infrastructure').length },
    { id: 'Micro SaaS', name: 'Micro SaaS', icon: Rocket, count: services.filter(s => s.category === 'Micro SaaS').length },
    { id: 'Emerging Tech', name: 'Emerging Technology', icon: Atom, count: services.filter(s => s.category === 'Emerging Tech').length }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
      case 'price-high':
        return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
      case 'rating':
        return b.rating - a.rating;
      case 'popularity':
      default:
        return b.reviews - a.reviews;
    }
  });

  const featuredServices = [
    {
      title: 'Quantum AI Neural Networks',
      description: 'Revolutionary AI powered by quantum computing principles',
      category: 'AI & Quantum',
      price: '$50,000',
      roi: '800%',
      delivery: '6 months'
    },
    {
      title: 'Brain-Computer Interface Platform',
      description: 'Direct neural interface for human-computer interaction',
      category: 'Neurotech',
      price: '$100,000',
      roi: '1200%',
      delivery: '12 months'
    },
    {
      title: 'Autonomous Space Mining System',
      description: 'AI-powered space exploration and resource extraction',
      category: 'Space Tech',
      price: '$500,000',
      roi: '2000%',
      delivery: '18 months'
    }
  ];
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
    hidden: { 
      y: 20,
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <motion.div
        className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Innovative Services Hub
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-indigo-100 max-w-4xl mx-auto mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover our cutting-edge portfolio of AI-powered solutions, micro SAAS platforms, and revolutionary IT services
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4 text-sm"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/contact"
              className="bg-white text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition-colors duration-300"
            >
              Get Started Today
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-900 transition-colors duration-300"
            >
              View Pricing
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Contact Information Banner */}
      <section className="bg-slate-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-purple-200">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <motion.div
        className="container mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Explore Our Service Categories
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            From revolutionary AI to sustainable green technology, discover the perfect solution for your business
          </p>;
        </div>;
;
        <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">;
          {serviceCategories.map((category)              => {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
            const IconComponent = category.icon;
            return (
              <motion.div
                key = {category.id}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
                variants={itemVariants}
                whileHover = {
  { y: -5,
  scale: 1.02 






}}
              >
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${category.color}`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                      {category.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="text-sm text-slate-400 mb-3">Key Features:</div>
                  <div className="flex flex-wrap gap-2">
                    {category.features.map((feature, index) => (
                      <span key={index} className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                    <div className="text-lg font-bold text-blue-400">{category.stats.services}</div>
                    <div className="text-xs text-slate-400">Services</div>
                  </div>
                  <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                    <div className="text-lg font-bold text-green-400">{category.stats.avgROI}</div>
                    <div className="text-xs text-slate-400">Avg ROI</div>
                  </div>
                  <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                    <div className="text-lg font-bold text-purple-400">{category.stats.innovation}</div>
                    <div className="text-xs text-slate-400">Level</div>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={category.route}
                  className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 group-hover:gap-3"
      {/* Featured Services */}
      <motion.div
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured Revolutionary Services
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our most innovative and high-impact solutions that are transforming industries worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-6">
          {featuredServices.map((service, index)               => (
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
            <motion.div
              key={`${selectedCategory}-${searchQuery}-${sortBy}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  {/* Badge */}
                  {service.badge && (
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        service.badge === 'Advanced AI' ? 'bg-purple-600 text-white' :
                        service.badge === 'Privacy-First' ? 'bg-green-600 text-white' :
                        service.badge === 'Transparency' ? 'bg-blue-600 text-white' :
                        service.badge === 'Retention' ? 'bg-red-600 text-white' :
                        service.badge === 'HR Tech' ? 'bg-indigo-600 text-white' :
                        service.badge === 'E-commerce' ? 'bg-orange-600 text-white' :
                        service.badge === 'SEO' ? 'bg-green-600 text-white' :
                        service.badge === 'Automation' ? 'bg-blue-600 text-white' :
                        service.badge === 'Quantum AI' ? 'bg-purple-600 text-white' :
                        service.badge === 'Space Tech' ? 'bg-blue-600 text-white' :
                        service.badge === 'Healthcare' ? 'bg-red-600 text-white' :
                        service.badge === 'Trading' ? 'bg-emerald-600 text-white' :
                        service.badge === 'Marketing' ? 'bg-pink-600 text-white' :
                        service.badge === 'Supply Chain' ? 'bg-blue-600 text-white' :
                        service.badge === 'CX Analytics' ? 'bg-purple-600 text-white' :
                        service.badge === 'Project Mgmt' ? 'bg-orange-600 text-white' :
                        service.badge === 'DevOps' ? 'bg-orange-600 text-white' :
                        service.badge === 'IoT Edge' ? 'bg-cyan-600 text-white' :
                        'bg-purple-500 text-white'
                      }`}>
                        {service.badge}
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-full h-full text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-purple-200 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-purple-200 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-xs text-purple-200 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing and Rating */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{service.price}</div>
                      <div className="text-sm text-purple-200 line-through">{service.marketPrice}</div>
                      <div className="text-xs text-green-400">Save {service.savings}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center gap-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(service.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-slate-600'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-xs text-purple-200">
                        {service.rating} ({service.reviews} reviews)
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 text-center block group-hover:shadow-lg group-hover:shadow-purple-500/25"
                  >
                    Learn More
                    <ArrowRight className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          {sortedServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-purple-200">Try adjusting your search criteria or browse all services.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Innovate?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-purple-200 max-w-3xl mx-auto mb-8"
          >
            Join the future of business technology with our cutting-edge AI solutions and innovative services.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/contact"
              className="bg-white text-purple-900 px-8 py-4 rounded-full font-semibold hover:bg-purple-100 transition-colors duration-300 text-lg"
            >
              Schedule a Demo
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-900 transition-colors duration-300 text-lg"
            >
              View Full Pricing
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
