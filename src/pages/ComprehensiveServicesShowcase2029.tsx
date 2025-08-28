import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  ArrowRight,
  Play,
  Settings,
  Target,
  Cpu,
  Activity,
  Sparkles,
  Search,
  Globe,
  Building,
  DollarSign,
  Network,
  Key,
  Fingerprint,
  Monitor,
  AlertTriangle,
  Clock,
  Users,
  TrendingUp,
  Shield,
  Lock,
  Eye,
  Database,
  Server,
  Smartphone,
  Workflow,
  Rocket,
  RefreshCw,
  Code,
  Truck,
  Bug,
  Virus,
  AlertCircle,
  Security,
  Fire,
  Radar,
  Satellite,
  Wifi,
  Cloud,
  HardDrive,
  Laptop,
  Tablet,
  Globe2,
  MapPin,
  Calendar,
  Calculator,
  Zap,
  Package,
  Route,
  Warehouse,
  Factory,
  Ship,
  Plane,
  Train,
  Car
} from 'lucide-react';

const ComprehensiveServicesShowcase2029 = () => {
  const featuredServices = [
    {
      id: 'ai-autonomous-code-reviewer',
      title: 'AI Autonomous Code Reviewer',
      description: 'Revolutionize your code review process with AI-powered analysis that catches bugs, improves security, and maintains code quality automatically.',
      icon: Code,
      category: 'AI & Development',
      price: 'From $299/month',
      benefits: [
        'Reduce code review time by 70%',
        'Catch 90% of bugs before production',
        'Improve code quality by 40%',
        'Ensure consistent coding standards'
      ],
      features: [
        'AI-powered code analysis',
        'Security vulnerability detection',
        'Performance optimization',
        'Git integration',
        'Real-time monitoring',
        'Team collaboration tools'
      ],
      link: '/services/ai-autonomous-code-reviewer',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'ai-supply-chain-optimization',
      title: 'AI Supply Chain Optimization',
      description: 'Revolutionize your supply chain with AI-powered optimization that reduces costs, improves efficiency, and provides real-time visibility.',
      icon: Truck,
      category: 'AI & Logistics',
      price: 'From $499/month',
      benefits: [
        'Reduce logistics costs by 25-35%',
        'Improve delivery times by 40%',
        'Reduce inventory costs by 20-30%',
        'Increase supply chain visibility by 80%'
      ],
      features: [
        'AI-powered route optimization',
        'Predictive analytics',
        'Global supply chain visibility',
        'Inventory optimization',
        'Multi-modal transportation',
        'Risk management'
      ],
      link: '/services/ai-supply-chain-optimization',
      color: 'from-green-500 to-blue-500'
    },
    {
      id: 'ai-cybersecurity-threat-intelligence',
      title: 'AI Cybersecurity Threat Intelligence',
      description: 'Stay ahead of cyber threats with AI-powered threat intelligence that detects, analyzes, and responds to security risks in real-time.',
      icon: Shield,
      category: 'AI & Security',
      price: 'From $399/month',
      benefits: [
        'Reduce threat detection time by 80%',
        'Improve threat response by 70%',
        'Reduce false positives by 60%',
        'Increase security visibility by 90%'
      ],
      features: [
        'AI-powered threat detection',
        'Real-time threat intelligence',
        'Vulnerability assessment',
        'Proactive threat hunting',
        'Global threat feed',
        'Incident response automation'
      ],
      link: '/services/ai-cybersecurity-threat-intelligence',
      color: 'from-red-500 to-orange-500'
    }
  ];

  const additionalServices = [
    {
      id: 'ai-business-intelligence',
      title: 'AI Business Intelligence Platform',
      description: 'Next-generation business intelligence platform that uses AI to automatically analyze data and generate actionable insights.',
      icon: BarChart3,
      category: 'AI & Analytics',
      price: 'From $2,999/month',
      link: '/services/ai-business-intelligence'
    },
    {
      id: 'ai-content-marketing-suite',
      title: 'AI Content Marketing Suite',
      description: 'Comprehensive AI-powered content creation, optimization, and distribution platform for modern marketing teams.',
      icon: Sparkles,
      category: 'AI & Marketing',
      price: 'From $1,499/month',
      link: '/services/ai-content-marketing-suite'
    },
    {
      id: 'ai-healthcare-platform',
      title: 'AI Healthcare Platform',
      description: 'Advanced AI solutions for healthcare providers, including diagnostic assistance, patient monitoring, and administrative automation.',
      icon: Activity,
      category: 'AI & Healthcare',
      price: 'From $3,999/month',
      link: '/services/ai-healthcare-platform'
    },
    {
      id: 'quantum-computing-solutions',
      title: 'Quantum Computing Solutions',
      description: 'Cutting-edge quantum computing services for research institutions, financial services, and advanced computational needs.',
      icon: Cpu,
      category: 'Quantum Technology',
      price: 'From $5,999/month',
      link: '/services/quantum-computing'
    },
    {
      id: 'iot-edge-computing',
      title: 'IoT Edge Computing Platform',
      description: 'Intelligent IoT edge computing solutions for industrial automation, smart cities, and connected device management.',
      icon: Network,
      category: 'IoT & Edge',
      price: 'From $1,999/month',
      link: '/services/iot-edge-computing'
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation Services',
      description: 'End-to-end digital transformation consulting and implementation services for enterprises and organizations.',
      icon: Rocket,
      category: 'Consulting',
      price: 'Custom Pricing',
      link: '/services/digital-transformation'
    }
  ];

  const marketInsights = [
    {
      metric: '$182.3B',
      label: 'Global AI Market Size 2024',
      description: 'Rapidly growing AI market with increasing adoption across industries'
    },
    {
      metric: '24.3%',
      label: 'Annual Growth Rate',
      description: 'Consistent growth in AI and technology services demand'
    },
    {
      metric: '300%',
      label: 'Average ROI',
      description: 'Significant return on investment for AI-powered solutions'
    },
    {
      metric: '70%',
      label: 'Efficiency Improvement',
      description: 'Measurable improvements in operational efficiency'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-green-500/10 to-red-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              2029 Cutting-Edge Services
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Comprehensive
              <span className="bg-gradient-to-r from-blue-400 via-green-400 to-red-500 bg-clip-text text-transparent"> Services Showcase</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our comprehensive portfolio of AI-powered micro SAAS services, IT solutions, 
              and cutting-edge technology services designed to transform your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-green-600 transition-all duration-200 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Explore Services
              </button>
              <button className="px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-200 flex items-center justify-center">
                <Settings className="w-5 h-5 mr-2" />
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured AI-Powered Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our flagship services that are revolutionizing industries with cutting-edge AI technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/30 transition-all duration-200"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-3">
                    {service.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-blue-400 mb-4">{service.price}</div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Core Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={service.link}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our full range of innovative services across AI, quantum computing, IoT, and digital transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                
                <span className="inline-block px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-medium mb-3">
                  {service.category}
                </span>
                
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-blue-400">{service.price}</span>
                  <a
                    href={service.link}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Market Insights & Growth
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Understand the market landscape and growth potential for our innovative technology services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketInsights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{insight.metric}</h3>
                <p className="text-lg font-semibold text-white mb-2">{insight.label}</p>
                <p className="text-gray-300 text-sm">{insight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Innovation First</h3>
              <p className="text-gray-300">Leading-edge AI and quantum technologies that keep you ahead of the competition</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300">Experienced professionals with deep expertise in AI, cybersecurity, and emerging technologies</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security and compliance standards for all our services and solutions</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 via-green-500/10 to-red-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of organizations worldwide that trust Zion Tech Group 
              for their technology transformation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-green-600 transition-all duration-200 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-200">
                Schedule Consultation
              </button>
            </div>
            
            <div className="text-center">
              <p className="text-gray-400 mb-4">Ready to get started? Contact our team:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-300">
                <div className="flex items-center justify-center space-x-2">
                  <span>📱</span>
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span>✉️</span>
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span>🌐</span>
                  <span>https://ziontechgroup.com</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-400 text-sm">
                  📍 364 E Main St STE 1008, Middletown DE 19709
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase2029;