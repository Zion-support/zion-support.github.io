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
      description: 'Smart manufacturing and Industry 4.0 solutions',
      color: 'from-orange-500 to-red-600',
      features: [
        'IoT Integration',
        'Predictive Maintenance',
        'Supply Chain Optimization',
        'Quality Control AI',
        'Production Analytics',
        'Smart Factory Solutions'
      ],
      useCases: [
        'Predictive Maintenance Systems',
        'Supply Chain Optimization',
        'Quality Control Automation',
        'Production Efficiency Analytics'
      ],
      href: '/solutions/manufacturing'
    },
    {
      title: 'Retail Solutions',
      icon: ShoppingCart,
      description: 'Next-generation retail technology for customer engagement',
      color: 'from-purple-500 to-pink-600',
      features: [
        'Customer Analytics',
        'Inventory Management',
        'Personalization Engine',
        'Omnichannel Integration',
        'AI-Powered Marketing',
        'Customer Experience Optimization'
      ],
      useCases: [
        'Customer Behavior Analysis',
        'Inventory Optimization',
        'Personalized Marketing Campaigns',
        'Omnichannel Customer Experience'
      ],
      href: '/solutions/retail'
    },
    {
      title: 'Government Solutions',
      icon: Shield,
      description: 'Secure government technology solutions for public sector',
      color: 'from-indigo-500 to-purple-600',
      features: [
        'Cybersecurity & Compliance',
        'Digital Government Services',
        'Data Analytics & Reporting',
        'Process Automation',
        'Citizen Experience Platforms',
        'Infrastructure Modernization'
      ],
      useCases: [
        'Digital Government Portals',
        'Cybersecurity Implementation',
        'Process Automation Systems',
        'Citizen Data Analytics'
      ],
      href: '/solutions/government'
    }
  ];

  const technologySolutions = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      description: 'Cutting-edge AI solutions for business transformation',
      color: 'from-purple-500 to-pink-600',
      features: [
        'Custom AI Models',
        'Machine Learning Pipelines',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Ethics & Governance'
      ],
      href: '/ai-services'
    },
    {
      title: 'Quantum Computing',
      icon: Atom,
      description: 'Next-generation quantum solutions for complex problems',
      color: 'from-orange-500 to-red-600',
      features: [
        'Quantum Algorithms',
        'Quantum Machine Learning',
        'Optimization Problems',
        'Cryptography Solutions',
        'Research & Development',
        'Quantum Consulting'
      ],
      href: '/services/quantum-computing'
    },
    {
      title: 'IoT & Edge Computing',
      icon: Cpu,
      description: 'Intelligent edge computing for real-time processing',
      color: 'from-cyan-500 to-blue-600',
      features: [
        'IoT Device Management',
        'Edge AI Processing',
        'Real-time Analytics',
        'Device Security',
        'Data Streaming',
        'Predictive Maintenance'
      ],
      href: '/services/ai-iot-edge-computing-platform'
    },
    {
      title: 'Blockchain & Web3',
      icon: Database,
      description: 'Secure blockchain solutions for modern applications',
      color: 'from-green-500 to-emerald-600',
      features: [
        'Smart Contracts',
        'DeFi Solutions',
        'Supply Chain Tracking',
        'Digital Identity',
        'Asset Management',
        'Web3 Integration'
      ],
      href: '/services/blockchain-enterprise-solutions'
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Scalable cloud infrastructure and automation',
      color: 'from-blue-500 to-indigo-600',
      features: [
        'Cloud Migration',
        'DevOps Automation',
        'Infrastructure as Code',
        'Container Orchestration',
        'Monitoring & Logging',
        'Cost Optimization'
      ],
      href: '/services/cloud-devops'
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Enterprise-grade security and compliance solutions',
      color: 'from-red-500 to-orange-600',
      features: [
        'Zero Trust Architecture',
        'Threat Detection',
        'Incident Response',
        'Compliance Management',
        'Security Automation',
        'Vulnerability Assessment'
      ],
      href: '/services/ai-cybersecurity-suite'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Efficiency',
      description: 'Automate processes and optimize operations for better productivity'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Enterprise-grade security and compliance for peace of mind'
    },
    {
      icon: Users,
      title: 'Better User Experience',
      description: 'Intuitive interfaces and seamless integrations for users'
    },
    {
      icon: Star,
      title: 'Proven Results',
      description: 'Track record of successful implementations and ROI'
    }
  ];

  return (
    <>
      <SEO 
        title="Solutions - Zion Tech Group"
        description="Discover Zion Tech Group's industry-specific solutions and technology expertise. From healthcare to finance, manufacturing to retail, we deliver tailored solutions that drive business transformation."
        keywords="industry solutions, healthcare AI, financial technology, manufacturing IoT, retail analytics, government technology, Zion Tech Group solutions"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Industry{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Tailored technology solutions designed specifically for your industry. 
              We understand your unique challenges and deliver innovative solutions that drive real business value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We specialize in delivering technology solutions that address the unique challenges 
              and opportunities within your specific industry.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link to={solution.href} className="block">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 group-hover:border-cyan-400/50 transition-all duration-300 group-hover:scale-105 h-full">
                    {/* Header */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-6`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {solution.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Use Cases */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3">Use Cases</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.useCases.slice(0, 2).map((useCase, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-slate-700/50 text-gray-300 px-2 py-1 rounded-full"
                          >
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Solutions */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Technology Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our deep expertise in cutting-edge technologies enables us to deliver 
              innovative solutions across all industries.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologySolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link to={solution.href} className="block">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 group-hover:border-cyan-400/50 transition-all duration-300 group-hover:scale-105 h-full">
                    {/* Header */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-6`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3">Capabilities</h4>
                      <ul className="space-y-2">
                        {solution.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="text-sm font-medium">Explore Services</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional value through innovation, expertise, and unwavering commitment to your success.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl p-6 border border-cyan-400/20">
                  <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our industry-specific solutions can address your unique challenges 
              and drive innovation in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Started
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
