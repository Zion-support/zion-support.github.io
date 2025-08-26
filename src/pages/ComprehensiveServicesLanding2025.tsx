import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  Smartphone, 
  Rocket,
  Cpu,
  Network,
  Lock,
  BarChart3,
  Users,
  Target,
  Award,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  TrendingUp,
  DollarSign,
  Clock,
  Shield as ShieldIcon,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function ComprehensiveServicesLanding2025() {
  const serviceCategories = [
    {
      id: 'ai-automation',
      title: 'AI & Automation',
      description: 'Revolutionary AI-powered solutions that automate complex business processes',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        'AI Autonomous Business Manager',
        'AI-Powered Content Creation Factory',
        'AI Healthcare Analytics Platform',
        'AI Legal Research Assistant'
      ],
      link: '/ultimate-services-2025',
      features: [
        'Autonomous decision-making',
        'Process automation',
        'Intelligent optimization',
        '24/7 operation'
      ]
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      description: 'Cutting-edge quantum solutions for solving previously impossible problems',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500',
      services: [
        'Quantum AI Platform',
        'Quantum Financial Trading Platform',
        'Quantum Neural Networks',
        'Quantum Cryptography'
      ],
      link: '/ultimate-services-2025',
      features: [
        'Exponential speedup',
        'Quantum advantage',
        'Future-proof technology',
        'Research breakthrough'
      ]
    },
    {
      id: 'blockchain-ai',
      title: 'Blockchain & AI',
      description: 'Decentralized solutions combining blockchain security with AI intelligence',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      services: [
        'Blockchain AI Governance Platform',
        'Smart Contract Automation',
        'Decentralized AI Networks',
        'Token Economics'
      ],
      link: '/ultimate-services-2025',
      features: [
        'Transparent governance',
        'Smart contracts',
        'Decentralized decision-making',
        'Trustless systems'
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Advanced AI-powered security solutions for comprehensive protection',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      services: [
        'AI-Powered Cybersecurity Suite',
        'Zero-Trust Architecture',
        'Threat Intelligence Platform',
        'Compliance Automation'
      ],
      link: '/ultimate-services-2025',
      features: [
        'AI threat detection',
        'Automated response',
        '24/7 monitoring',
        'Compliance management'
      ]
    },
    {
      id: 'devops-automation',
      title: 'DevOps & Automation',
      description: 'Self-managing infrastructure and automated deployment solutions',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      services: [
        'Autonomous DevOps Platform',
        'Self-Healing Infrastructure',
        'Continuous Deployment',
        'Performance Optimization'
      ],
      link: '/ultimate-services-2025',
      features: [
        'Autonomous operation',
        'Self-healing systems',
        'Cost optimization',
        'Performance monitoring'
      ]
    },
    {
      id: 'ai-content',
      title: 'AI & Content',
      description: 'Intelligent content creation and optimization platforms',
      icon: Database,
      color: 'from-indigo-500 to-purple-500',
      services: [
        'AI Content Creation Factory',
        'SEO Optimization Engine',
        'Multi-language Content',
        'Brand Voice Consistency'
      ],
      link: '/ultimate-services-2025',
      features: [
        'Automated content generation',
        'SEO optimization',
        'Multi-language support',
        'Brand consistency'
      ]
    },
    {
      id: 'ai-healthcare',
      title: 'AI & Healthcare',
      description: 'Healthcare analytics and patient outcome optimization',
      icon: Users,
      color: 'from-teal-500 to-green-500',
      services: [
        'AI Healthcare Analytics Platform',
        'Patient Outcome Prediction',
        'Treatment Optimization',
        'Population Health Management'
      ],
      link: '/ultimate-services-2025',
      features: [
        'Patient outcome prediction',
        'Treatment optimization',
        'Cost reduction',
        'Compliance automation'
      ]
    },
    {
      id: 'ai-manufacturing',
      title: 'AI & Manufacturing',
      description: 'Autonomous manufacturing and industrial optimization',
      icon: Network,
      color: 'from-gray-500 to-slate-500',
      services: [
        'Autonomous Manufacturing Platform',
        'Quality Control Automation',
        'Predictive Maintenance',
        'Supply Chain Optimization'
      ],
      link: '/ultimate-services-2025',
      features: [
        'Production optimization',
        'Quality automation',
        'Predictive maintenance',
        'Cost reduction'
      ]
    },
    {
      id: 'ai-legal',
      title: 'AI & Legal',
      description: 'Intelligent legal research and compliance automation',
      icon: Lock,
      color: 'from-amber-500 to-yellow-500',
      services: [
        'AI Legal Research Assistant',
        'Case Law Analysis',
        'Compliance Automation',
        'Risk Assessment'
      ],
      link: '/ultimate-services-2025',
      features: [
        'Legal research automation',
        'Case analysis',
        'Compliance checking',
        'Risk assessment'
      ]
    }
  ];

  const stats = [
    { label: 'Services Available', value: '50+', icon: Rocket },
    { label: 'Innovation Level', value: 'Revolutionary', icon: Sparkles },
    { label: 'ROI Range', value: '200-800%', icon: TrendingUp },
    { label: 'Market Size', value: '$500B+', icon: DollarSign }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30 mb-6">
              <Sparkles className="w-5 h-5 text-cyan-400 mr-2" />
              <span className="text-cyan-400 font-medium">2025 Innovation Leader</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Comprehensive Services 2025
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover our complete portfolio of revolutionary micro SAAS services, AI solutions, and cutting-edge technology platforms. 
              Transform your business with next-generation solutions designed for the future of innovation.
            </p>
            
            {/* Contact Information */}
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 max-w-2xl mx-auto border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">Get Started Today</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center text-cyan-400">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center text-blue-400">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center text-green-400">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Middletown, DE</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2">
                    <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg">
                      <stat.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Explore Our Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI automation to quantum computing, discover solutions that will revolutionize your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 group"
              >
                {/* Category Header */}
                <div className="flex items-center mb-4">
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                    <p className="text-sm text-gray-400">{category.description}</p>
                  </div>
                </div>

                {/* Services List */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-3">Featured Services</h4>
                  <div className="space-y-2">
                    {category.services.map((service, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-400">
                        <Star className="w-3 h-3 text-yellow-400 mr-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  to={category.link}
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                >
                  Explore Services
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just another technology company - we're your innovation partner for the future
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full">
                    <Sparkles className="w-8 h-8 text-cyan-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Cutting-Edge Innovation</h3>
                <p className="text-gray-300">
                  Access to the latest AI, quantum computing, and blockchain technologies before they hit the mainstream
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full">
                    <TrendingUp className="w-8 h-8 text-green-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Proven ROI</h3>
                <p className="text-gray-300">
                  Our services deliver measurable returns ranging from 200% to 800% within the first year
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full">
                    <Award className="w-8 h-8 text-purple-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Expert Support</h3>
                <p className="text-gray-300">
                  Dedicated support teams and comprehensive documentation to ensure your success
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of business innovation with our comprehensive suite of cutting-edge services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center justify-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
              <Link
                to="/ultimate-services-2025"
                className="inline-flex items-center justify-center px-8 py-3 border border-slate-600 text-gray-300 font-semibold rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}