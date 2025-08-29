import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Atom, 
  Code, 
  Cpu, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  Users,
  Award,
  Rocket,
  Target,
  BarChart3,
  Database,
  Network,
  Lock,
  Cloud,
  Smartphone,
  Wrench,
  Wallet,
  Sensor
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function InnovativeServicesShowcase2027() {
  const featuredServices = [
    {
      id: 'ai-predictive-maintenance',
      title: 'AI-Powered Predictive Maintenance Platform',
      description: 'Transform maintenance operations with intelligent failure prediction, real-time monitoring, and automated scheduling. Reduce unplanned downtime by 75% while cutting maintenance costs by 40%.',
      category: 'AI Solutions',
      price: 'From $399/month',
      features: [
        'AI-powered failure prediction with 94% accuracy',
        'Real-time equipment monitoring',
        'Automated maintenance scheduling',
        'Industry-specific solutions',
        'Edge computing capabilities'
      ],
      benefits: [
        'Reduce unplanned downtime by 75%',
        'Lower maintenance costs by 40%',
        'Extend equipment lifespan by 30%',
        'Improve operational efficiency by 60%'
      ],
      href: '/services/ai-predictive-maintenance-platform',
      icon: <Wrench className="w-8 h-8" />,
      color: 'from-blue-600 to-purple-600'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing as a Service',
      description: 'Access cutting-edge quantum computing power through our cloud platform. Solve complex problems 1000x faster with quantum algorithms and simulation tools.',
      category: 'Quantum Technology',
      price: 'From $999/month',
      features: [
        '100+ qubit quantum processors',
        'Quantum machine learning algorithms',
        'Quantum simulation engine',
        'Multi-industry applications',
        'Expert quantum engineering support'
      ],
      benefits: [
        'Solve complex problems 1000x faster',
        'Breakthrough discoveries in drug discovery',
        'Unbreakable quantum encryption',
        'Revolutionary optimization capabilities'
      ],
      href: '/services/quantum-computing-as-a-service',
      icon: <Atom className="w-8 h-8" />,
      color: 'from-purple-600 to-blue-600'
    },
    {
      id: 'blockchain-development',
      title: 'Blockchain Development Platform',
      description: 'Build, deploy, and manage blockchain applications with our comprehensive development platform. Launch DeFi protocols, NFT marketplaces, and enterprise solutions with audited smart contracts.',
      category: 'Blockchain & Web3',
      price: 'From $299/month',
      features: [
        'Multi-chain support (Ethereum, Polygon, Solana)',
        'Audited smart contracts',
        'DeFi & NFT development',
        'Enterprise blockchain solutions',
        'Security & compliance tools'
      ],
      benefits: [
        'Launch blockchain applications 3x faster',
        'Reduce development costs by 60%',
        'Ensure 99.9% security',
        'Multi-chain compatibility'
      ],
      href: '/services/blockchain-development-platform',
      icon: <Code className="w-8 h-8" />,
      color: 'from-green-600 to-blue-600'
    },
    {
      id: 'iot-edge-computing',
      title: 'IoT Edge Computing Platform',
      description: 'Transform your IoT deployments with our edge computing platform. Process data locally, reduce latency by 90%, and enable real-time decision making without cloud dependency.',
      category: 'IoT & Edge Computing',
      price: 'From $199/month',
      features: [
        'Distributed edge computing nodes',
        'AI at the edge processing',
        'Multi-protocol IoT support',
        'Real-time data processing',
        'Enhanced security & privacy'
      ],
      benefits: [
        'Reduce latency by 90%',
        'Lower bandwidth costs by 70%',
        'Improve reliability with offline capabilities',
        'Real-time decision making'
      ],
      href: '/services/iot-edge-computing-platform',
      icon: <Cpu className="w-8 h-8" />,
      color: 'from-orange-600 to-red-600'
    }
  ];

  const additionalServices = [
    {
      title: 'AI Legal Document Analysis',
      description: 'Advanced AI platform for legal document analysis, contract review, and compliance monitoring.',
      price: 'From $299/month',
      href: '/services/ai-legal-document-analysis'
    },
    {
      title: 'AI Supply Chain Optimization',
      description: 'Revolutionary supply chain optimization using AI algorithms for complex logistics and inventory management.',
      price: 'From $799/month',
      href: '/services/ai-supply-chain-optimization'
    },
    {
      title: 'AI Healthcare Analytics',
      description: 'AI-powered healthcare analytics platform for medical imaging analysis, disease prediction, and treatment recommendations.',
      price: 'From $7,999/month',
      href: '/services/ai-healthcare-analytics'
    },
    {
      title: 'AI Financial Trading',
      description: 'Advanced AI-powered financial trading platform with real-time market analysis and automated trading strategies.',
      price: 'From $4,999/month',
      href: '/services/ai-financial-trading'
    }
  ];

  const marketInsights = [
    {
      metric: 'AI Market Size',
      value: '$500B+',
      description: 'Global AI market by 2027'
    },
    {
      metric: 'Quantum Computing',
      value: '$65B+',
      description: 'Market value by 2030'
    },
    {
      metric: 'Blockchain Market',
      value: '$163B+',
      description: 'Global market by 2029'
    },
    {
      metric: 'IoT Market',
      value: '$1.8T+',
      description: 'Market size by 2028'
    }
  ];

  const whyChooseZion = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Industry Expertise',
      description: '15+ years of experience in cutting-edge technology solutions'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance and 99.99% uptime'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Team',
      description: 'PhD-level engineers and industry specialists'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Support',
      description: '24/7 support with dedicated account managers'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Innovative Services Showcase 2027 - Zion Tech Group"
        description="Discover our cutting-edge micro SAAS, IT services, and AI solutions. From AI predictive maintenance to quantum computing, transform your business with Zion Tech Group."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Innovative Services Showcase 2027
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover the future of technology with our comprehensive suite of micro SAAS, IT services, and AI solutions. 
              Transform your business with cutting-edge innovations that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Market Insights & Opportunities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The technology landscape is evolving rapidly. Stay ahead with our innovative solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketInsights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 text-center"
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">{insight.value}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{insight.metric}</h3>
                <p className="text-gray-300">{insight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Innovative Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our flagship services that are transforming industries and driving digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} mr-4`}>
                    {service.icon}
                  </div>
                  <div>
                    <span className="text-sm text-blue-400 font-semibold">{service.category}</span>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-white mb-2">{service.price}</div>
                  <div className="text-sm text-gray-400">Starting price with flexible plans</div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Business Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={service.href}
                    className="flex-1 inline-flex justify-center items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    Learn More
                  </a>
                  <a
                    href="https://ziontechgroup.com/contact"
                    className="flex-1 inline-flex justify-center items-center px-6 py-3 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
                  >
                    Get Quote
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Additional AI & Technology Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our complete portfolio of AI-powered solutions and technology services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-blue-400">{service.price}</div>
                  <a
                    href={service.href}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zion */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just a technology company - we're your strategic partner in digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseZion.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 text-center"
              >
                <div className="text-blue-400 mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
                <p className="text-gray-300">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI & Success Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Proven Results & ROI
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our clients achieve measurable results and significant returns on investment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-green-500 transition-all duration-300 text-center"
            >
              <div className="text-5xl font-bold text-green-400 mb-2">500%+</div>
              <h3 className="text-xl font-semibold text-white mb-3">Average ROI</h3>
              <p className="text-gray-300">Our clients see an average return on investment of over 500% within 6-12 months</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 text-center"
            >
              <div className="text-5xl font-bold text-blue-400 mb-2">85%</div>
              <h3 className="text-xl font-semibold text-white mb-3">Cost Reduction</h3>
              <p className="text-gray-300">Average cost reduction across operations, maintenance, and manual processes</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 text-center"
            >
              <div className="text-5xl font-bold text-purple-400 mb-2">10x</div>
              <h3 className="text-xl font-semibold text-white mb-3">Faster Deployment</h3>
              <p className="text-gray-300">Deploy innovative solutions 10x faster than traditional development approaches</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact & CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of organizations that have already transformed their operations with our innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Transformation
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Us
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
