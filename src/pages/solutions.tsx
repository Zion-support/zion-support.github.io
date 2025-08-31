import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Building, 
  Heart, 
  DollarSign, 
  Truck, 
  BookOpen, 
  Shield, 
  Users, 
  Globe,
  Brain,
  Server,
  Rocket,
  Cloud,
  Atom,
  Sparkles,
  TrendingUp,
  Zap,
  Target,
  Award,
  CheckCircle,
  ArrowRight,
  Cpu,
  Database,
  Network,
  Smartphone,
  Leaf,
  Satellite,
  FileText,
  MessageCircle,
  Star,
  ShoppingCart
} from 'lucide-react';

export default function Solutions() {
  const industrySolutions = [
    {
      title: 'Enterprise Solutions',
      icon: Building,
      description: 'Scalable enterprise-grade solutions for large organizations',
      color: 'from-blue-500 to-indigo-600',
      features: [
        'Digital Transformation Consulting',
        'Enterprise AI Integration',
        'Scalable Cloud Infrastructure',
        'Enterprise Security & Compliance',
        'Business Process Automation',
        'Data Governance & Analytics'
      ],
      useCases: [
        'Fortune 500 Digital Transformation',
        'Multi-national AI Implementation',
        'Enterprise Security Modernization',
        'Legacy System Migration'
      ],
      href: '/solutions/enterprise'
    },
    {
      title: 'Healthcare Solutions',
      icon: Heart,
      description: 'AI-powered healthcare solutions for improved patient outcomes',
      color: 'from-red-500 to-pink-600',
      features: [
        'AI Diagnostic Tools',
        'Patient Data Analytics',
        'Healthcare Process Automation',
        'Medical Imaging AI',
        'Drug Discovery Support',
        'Healthcare Compliance'
      ],
      useCases: [
        'AI-Powered Diagnosis Systems',
        'Patient Outcome Prediction',
        'Medical Image Analysis',
        'Healthcare Workflow Optimization'
      ],
      href: '/solutions/healthcare'
    },
    {
      title: 'Financial Services',
      icon: DollarSign,
      description: 'Advanced financial technology solutions for modern banking',
      color: 'from-green-500 to-emerald-600',
      features: [
        'AI Trading Algorithms',
        'Risk Management Systems',
        'Fraud Detection AI',
        'Financial Analytics',
        'Regulatory Compliance',
        'Customer Experience AI'
      ],
      useCases: [
        'Algorithmic Trading Platforms',
        'Real-time Risk Assessment',
        'AI Fraud Prevention',
        'Personalized Banking'
      ],
      href: '/solutions/financial'
    },
    {
      title: 'Manufacturing Solutions',
      icon: Truck,
      description: 'Smart manufacturing and Industry 4.0 technology solutions',
      color: 'from-orange-500 to-red-600',
      features: [
        'Predictive Maintenance AI',
        'Supply Chain Optimization',
        'Quality Control Automation',
        'IoT Device Integration',
        'Production Analytics',
        'Smart Factory Solutions'
      ],
      useCases: [
        'Predictive Maintenance Systems',
        'Supply Chain Optimization',
        'Quality Control Automation',
        'Smart Factory Implementation'
      ],
      href: '/solutions/manufacturing'
    },
    {
      title: 'Retail Solutions',
      icon: ShoppingCart,
      description: 'Next-generation retail technology for enhanced customer experience',
      color: 'from-purple-500 to-pink-600',
      features: [
        'AI-Powered Personalization',
        'Inventory Management AI',
        'Customer Analytics',
        'Omnichannel Integration',
        'Predictive Analytics',
        'Retail Automation'
      ],
      useCases: [
        'Personalized Shopping Experience',
        'Smart Inventory Management',
        'Customer Behavior Analysis',
        'Retail Process Automation'
      ],
      href: '/solutions/retail'
    },
    {
      title: 'Education Solutions',
      icon: BookOpen,
      description: 'Innovative educational technology platforms and solutions',
      color: 'from-indigo-500 to-purple-600',
      features: [
        'AI Learning Platforms',
        'Student Analytics',
        'Educational Content Creation',
        'Virtual Learning Environments',
        'Assessment Automation',
        'Learning Management Systems'
      ],
      useCases: [
        'AI-Powered Learning Platforms',
        'Student Performance Analytics',
        'Automated Assessment Systems',
        'Virtual Learning Implementation'
      ],
      href: '/solutions/education'
    }
  ];

  const technologyExpertise = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      description: 'Cutting-edge artificial intelligence and machine learning solutions',
      color: 'from-purple-500 to-pink-500',
      capabilities: [
        'Custom AI Model Development',
        'Machine Learning Pipelines',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Predictive Analytics',
        'AI Integration Services'
      ]
    },
    {
      title: 'Quantum Computing',
      icon: Atom,
      description: 'Next-generation quantum computing solutions for complex problems',
      color: 'from-orange-500 to-red-500',
      capabilities: [
        'Quantum Algorithm Development',
        'Quantum Machine Learning',
        'Quantum Cryptography',
        'Quantum Simulation',
        'Hybrid Quantum-Classical Systems',
        'Quantum Readiness Assessment'
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Enterprise-grade security and compliance solutions',
      color: 'from-indigo-500 to-purple-500',
      capabilities: [
        'Zero Trust Architecture',
        'Threat Detection & Response',
        'Compliance Management',
        'Security Automation',
        'Incident Response',
        'Security Training'
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Scalable cloud infrastructure and automation solutions',
      color: 'from-blue-500 to-cyan-500',
      capabilities: [
        'Cloud Migration',
        'Infrastructure as Code',
        'CI/CD Pipelines',
        'Container Orchestration',
        'Monitoring & Alerting',
        'Cost Optimization'
      ]
    },
    {
      title: 'IoT & Edge Computing',
      icon: Cpu,
      description: 'Intelligent edge computing and IoT platform solutions',
      color: 'from-green-500 to-emerald-500',
      capabilities: [
        'Edge AI Implementation',
        'IoT Device Management',
        'Real-time Processing',
        'Data Analytics',
        'Security & Privacy',
        'Scalable Architecture'
      ]
    },
    {
      title: 'Blockchain & Web3',
      icon: Database,
      description: 'Secure blockchain and decentralized application solutions',
      color: 'from-teal-500 to-blue-500',
      capabilities: [
        'Smart Contract Development',
        'DeFi Solutions',
        'Supply Chain Tracking',
        'Digital Identity',
        'NFT Platforms',
        'Blockchain Integration'
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Efficiency',
      description: 'Streamline operations and reduce manual processes with intelligent automation'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Protect your business with enterprise-grade security and compliance solutions'
    },
    {
      icon: Users,
      title: 'Better User Experience',
      description: 'Deliver exceptional customer experiences with intuitive technology solutions'
    },
    {
      icon: Star,
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition with cutting-edge technology implementation'
    },
    {
      icon: Zap,
      title: 'Faster Time to Market',
      description: 'Accelerate development and deployment with modern development practices'
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Scale your solutions globally with cloud-native architecture and infrastructure'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Solutions - Zion Tech Group"
        description="Discover industry-specific technology solutions and expertise areas designed to transform your business operations and drive innovation."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Industry-Specific{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Technology Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              From healthcare to finance, manufacturing to retail, we deliver tailored technology 
              solutions that address your industry's unique challenges and drive transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored technology solutions designed specifically for your industry's unique challenges 
              and regulatory requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 group hover:scale-105"
              >
                {/* Header */}
                <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                  {solution.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {solution.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Use Cases:</h4>
                  <div className="space-y-2">
                    {solution.useCases.slice(0, 2).map((useCase, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Target className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-gray-300">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  to={solution.href}
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 flex items-center justify-center space-x-2 group-hover:scale-105"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Expertise */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Technology{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our deep expertise in cutting-edge technologies enables us to deliver innovative 
              solutions that drive business transformation and competitive advantage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologyExpertise.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                {/* Header */}
                <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                  {tech.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {tech.description}
                </p>

                {/* Capabilities */}
                <div className="space-y-2">
                  {tech.capabilities.slice(0, 4).map((capability, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm text-gray-300">{capability}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our technology solutions deliver measurable business value through innovation, 
              efficiency, and competitive advantage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our industry-specific technology solutions can address your 
              unique challenges and drive innovation in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                Start Your Transformation
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
