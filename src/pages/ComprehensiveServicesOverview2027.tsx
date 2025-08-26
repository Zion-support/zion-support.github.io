import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  Brain, 
  Globe, 
  Cpu, 
  Network, 
  Database, 
  Lock, 
  Leaf, 
  Scale, 
  Stethoscope, 
  Rocket, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink,
  Star,
  Users,
  Target,
  Clock,
  BarChart3,
  Award,
  Lightbulb,
  Code,
  Cloud,
  Server,
  Smartphone,
  Monitor,
  Wifi,
  Satellite,
  Atom,
  CircuitBoard,
  Fingerprint,
  Eye,
  Heart,
  Gavel,
  LeafyGreen,
  Wind,
  Sun,
  Droplets
} from 'lucide-react';

const ComprehensiveServicesOverview2027: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai-services');

  const serviceCategories = [
    {
      id: 'ai-services',
      title: 'AI & Machine Learning Services',
      icon: <Brain className="w-8 h-8" />,
      description: 'Cutting-edge artificial intelligence solutions that transform business operations',
      color: 'from-purple-600 to-pink-600',
      services: [
        {
          name: 'AI Autonomous DevOps Platform',
          description: 'AI-powered infrastructure management and deployment automation',
          price: '$3,999/month',
          features: ['Autonomous operations', 'Self-healing systems', 'Predictive analytics'],
          benefits: ['70% workload reduction', '99.9% uptime', 'Cost optimization']
        },
        {
          name: 'AI Cybersecurity Threat Intelligence',
          description: 'Real-time threat detection and automated response',
          price: '$2,499/month',
          features: ['AI threat detection', 'Behavioral analytics', 'Automated response'],
          benefits: ['90% faster detection', '60% security improvement', 'Cost-effective operations']
        },
        {
          name: 'AI Healthcare Diagnostics Platform',
          description: 'Medical image analysis and diagnostic recommendations',
          price: '$4,999/month',
          features: ['AI image analysis', 'Clinical decision support', 'Compliance management'],
          benefits: ['40% accuracy improvement', '60% faster diagnosis', 'Better patient outcomes']
        }
      ]
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing & Blockchain',
      icon: <Atom className="w-8 h-8" />,
      description: 'Next-generation quantum computing and secure blockchain solutions',
      color: 'from-blue-600 to-cyan-600',
      services: [
        {
          name: 'Quantum-Secure Blockchain Platform',
          description: 'Future-proof blockchain with quantum-resistant cryptography',
          price: '$5,999/month',
          features: ['Quantum resistance', 'High performance', 'DeFi integration'],
          benefits: ['Future-proof security', 'High throughput', 'Regulatory compliance']
        },
        {
          name: 'Quantum Machine Learning Platform',
          description: 'Quantum computing enhanced machine learning',
          price: '$7,999/month',
          features: ['Quantum algorithms', 'Hybrid computing', 'Optimization'],
          benefits: ['Exponential speedup', 'Quantum advantage', 'Competitive edge']
        }
      ]
    },
    {
      id: 'edge-computing',
      title: 'Edge Computing & IoT',
      icon: <Network className="w-8 h-8" />,
      description: 'Distributed edge computing and IoT solutions for real-time applications',
      color: 'from-green-600 to-emerald-600',
      services: [
        {
          name: 'Edge AI Computing Platform',
          description: 'Distributed AI processing at the edge',
          price: '$3,499/month',
          features: ['Edge AI processing', 'Real-time inference', 'Low latency'],
          benefits: ['95% latency reduction', '70% bandwidth savings', 'Real-time processing']
        },
        {
          name: '5G Enterprise Network Orchestration',
          description: 'Private 5G networks with AI optimization',
          price: '$4,499/month',
          features: ['Network slicing', 'AI optimization', 'Edge integration'],
          benefits: ['Ultra-fast connectivity', 'Low latency', 'Massive IoT support']
        }
      ]
    },
    {
      id: 'automation',
      title: 'Business Process Automation',
      icon: <Rocket className="w-8 h-8" />,
      description: 'Intelligent automation solutions that streamline operations',
      color: 'from-orange-600 to-red-600',
      services: [
        {
          name: 'Autonomous Business Process Automation',
          description: 'AI-powered process discovery and optimization',
          price: '$2,999/month',
          features: ['Process discovery', 'RPA integration', 'Workflow automation'],
          benefits: ['50% cost reduction', '60% efficiency improvement', 'Enhanced compliance']
        }
      ]
    },
    {
      id: 'legal-tech',
      title: 'Legal Technology Solutions',
      icon: <Scale className="w-8 h-8" />,
      description: 'AI-powered legal technology for modern law practices',
      color: 'from-indigo-600 to-purple-600',
      services: [
        {
          name: 'AI Legal Technology Platform',
          description: 'Legal research and contract analysis automation',
          price: '$1,999/month',
          features: ['Legal research', 'Contract analysis', 'Document automation'],
          benefits: ['80% time reduction', '60% accuracy improvement', 'Cost-effective services']
        }
      ]
    },
    {
      id: 'sustainability',
      title: 'Sustainable Technology',
      icon: <Leaf className="w-8 h-8" />,
      description: 'Green technology solutions for environmental impact reduction',
      color: 'from-green-600 to-teal-600',
      services: [
        {
          name: 'Sustainable Green Technology Platform',
          description: 'ESG compliance and environmental impact tracking',
          price: '$1,799/month',
          features: ['Impact tracking', 'ESG reporting', 'Efficiency optimization'],
          benefits: ['40% impact reduction', 'ESG compliance', 'Cost savings']
        }
      ]
    }
  ];

  const marketInsights = [
    {
      title: 'AI Services Market',
      value: '$200B+',
      growth: '35% CAGR',
      description: 'Rapidly growing AI market with increasing enterprise adoption'
    },
    {
      title: 'Quantum Computing',
      value: '$65B+',
      growth: '50% CAGR',
      description: 'Emerging technology with breakthrough potential'
    },
    {
      title: 'Edge Computing',
      value: '$45B+',
      growth: '40% CAGR',
      description: 'Growing demand for real-time processing capabilities'
    },
    {
      title: 'Cybersecurity',
      value: '$300B+',
      growth: '25% CAGR',
      description: 'Critical need for advanced threat protection'
    }
  ];

  const competitiveAdvantages = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Innovation Leadership',
      description: 'First-to-market with breakthrough technologies and solutions'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert Team',
      description: 'World-class engineers and domain experts with proven track records'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Custom Solutions',
      description: 'Tailored solutions designed for specific business needs and challenges'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Proven ROI',
      description: 'Demonstrated return on investment with measurable business outcomes'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enterprise Security',
      description: 'Bank-grade security with compliance certifications and audit trails'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Reach',
      description: 'Worldwide deployment capabilities with local support and compliance'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8">
              Comprehensive Technology Solutions
            </h1>
            <p className="text-2xl md:text-3xl text-zion-cyan/90 mb-12 max-w-5xl mx-auto leading-relaxed">
              Discover our complete portfolio of innovative micro SAAS, IT infrastructure, and AI services designed to transform your business and drive competitive advantage
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-zion-cyan/80 text-lg">
              <div className="flex items-center gap-2">
                <Zap className="w-6 h-6" />
                <span>AI-Powered Innovation</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="w-6 h-6" />
                <span>Quantum Computing</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-6 h-6" />
                <span>Global Deployment</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Market Insights */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Market Insights & Growth</h2>
          <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
            Our services address rapidly growing markets with significant investment potential and ROI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketInsights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-zion-cyan mb-2">{insight.value}</div>
              <div className="text-lg font-semibold text-white mb-2">{insight.title}</div>
              <div className="text-zion-cyan/80 mb-3">{insight.growth}</div>
              <p className="text-sm text-zion-cyan/70">{insight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Categories Tabs */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Service Portfolio</h2>
          <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
            Explore our comprehensive range of innovative services across multiple technology domains
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                  : 'bg-white/10 text-zion-cyan/80 hover:bg-white/20'
              }`}
            >
              <div className="flex items-center gap-2">
                {category.icon}
                <span>{category.title.split(' ')[0]}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {serviceCategories.map((category) => (
          activeTab === category.id && (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8"
            >
              <div className="text-center mb-8">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${category.color} mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{category.title}</h3>
                <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {category.services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                  >
                    <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                    <p className="text-zion-cyan/80 mb-4">{service.description}</p>
                    
                    <div className="text-2xl font-bold text-zion-cyan mb-4">{service.price}</div>
                    
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-zion-cyan mb-2">Key Features</h5>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-zion-cyan/70">
                            <CheckCircle className="w-4 h-4 text-zion-cyan" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-zion-cyan mb-2">Benefits</h5>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center gap-2 text-sm text-zion-cyan/70">
                            <TrendingUp className="w-4 h-4 text-zion-cyan" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                      className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-6 rounded-xl font-semibold hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300 text-center block"
                    >
                      Get Started
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )
        ))}
      </div>

      {/* Competitive Advantages */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
          <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
            Our unique combination of innovation, expertise, and proven results sets us apart from the competition
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {competitiveAdvantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="inline-flex p-3 bg-zion-cyan/20 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{advantage.title}</h3>
              <p className="text-zion-cyan/80">{advantage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 backdrop-blur-lg rounded-3xl p-16 text-center"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-2xl text-zion-cyan/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Our comprehensive technology solutions are designed to drive innovation, enhance efficiency, and provide sustainable competitive advantages. 
            Let's discuss how we can help you achieve your strategic objectives.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex p-4 bg-zion-cyan/20 rounded-2xl mb-4">
                <Phone className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-zion-cyan/80 mb-4">Speak directly with our experts</p>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center gap-2 bg-zion-cyan text-white px-6 py-3 rounded-xl font-semibold hover:bg-zion-cyan/80 transition-colors"
              >
                +1 302 464 0950
              </a>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 bg-zion-purple/20 rounded-2xl mb-4">
                <Mail className="w-8 h-8 text-zion-purple" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-zion-cyan/80 mb-4">Send us a detailed inquiry</p>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center gap-2 bg-zion-purple text-white px-6 py-3 rounded-xl font-semibold hover:bg-zion-purple/80 transition-colors"
              >
                kleber@ziontechgroup.com
              </a>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 bg-zion-cyan/20 rounded-2xl mb-4">
                <MapPin className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-zion-cyan/80 mb-4">Schedule an in-person meeting</p>
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-zion-cyan text-white px-6 py-3 rounded-xl font-semibold hover:bg-zion-cyan/80 transition-colors"
              >
                Visit Website
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="text-zion-cyan/70 text-lg">
            <p className="mb-2">364 E Main St STE 1008, Middletown DE 19709</p>
            <p className="text-sm">
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-zion-cyan transition-colors underline"
              >
                Explore our full portfolio of services →
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensiveServicesOverview2027;