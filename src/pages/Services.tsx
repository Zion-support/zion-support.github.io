import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Code,
  Database,
  Network,
  Smartphone,
  Globe,
  Zap,
  Cpu,
  Lock,
  BarChart3,
  Rocket,
  Users,
  MessageCircle,
  FileText,
  Heart,
  Settings,
  HelpCircle,
  BookOpen,
  Briefcase,
  Target,
  Lightbulb,
  ShieldCheck,
  Server,
  Monitor,
  Wifi,
  Bluetooth,
  Satellite,
  Atom,
  Dna,
  Microscope,
  Flask,
  TestTube,
  Syringe,
  Stethoscope,
  HeartPulse,
  BrainCircuit,
  Eye,
  Ear,
  Hand,
  Foot,
  Bone,
  Tooth,
  Pill,
  Bandage,
  Thermometer,
  Scale,
  Calculator,
  ChartBar,
  PieChart,
  LineChart,
  Activity,
  TrendingUp,
  Minus,
  Plus,
  Equal,
  Divide,
  Percent,
  DollarSign,
  Euro,
  Pound,
  Yen,
  Bitcoin,
  Ethereum,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  PiggyBank,
  Safe,
  Vault,
  LockKeyhole,
  Key,
  Fingerprint,
  QrCode,
  Barcode,
  Scan,
  Camera,
  VideoOff,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Shuffle,
  Repeat,
  Repeat1,
  Shuffle2,
  SkipBack2,
  SkipForward2,
  PlayTriangle,
  PauseTriangle,
  StopTriangle,
  SkipBackTriangle,
  SkipForwardTriangle,
  RewindTriangle,
  FastForwardTriangle,
  ShuffleTriangle,
  RepeatTriangle,
  Repeat1Triangle,
  Shuffle2Triangle,
  SkipBack2Triangle,
  SkipForward2Triangle,
  PlayOctagon,
  PauseOctagon,
  StopOctagon,
  SkipBackOctagon,
  SkipForwardOctagon,
  RewindOctagon,
  FastForwardOctagon,
  ShuffleOctagon,
  RepeatOctagon,
  Repeat1Octagon,
  Shuffle2Octagon,
  SkipBack2Octagon,
  SkipForward2Octagon,
  PlayDodecagon,
  PauseDodecagon,
  StopDodecagon,
  SkipBackDodecagon,
  SkipForwardDodecagon
} from 'lucide-react';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI & Analytics',
      icon: Brain,
      color: 'from-zion-cyan to-zion-purple',
      description: 'Cutting-edge artificial intelligence and data analytics solutions',
      services: [
        {
          name: 'AI Consciousness Simulator',
          description: 'Advanced AI consciousness simulation and research platform',
          features: ['Neural network modeling', 'Consciousness research', 'AI ethics framework', 'Real-time simulation']
        },
        {
          name: 'Quantum Emotion Processor',
          description: 'Quantum computing-powered emotion analysis and processing',
          features: ['Quantum algorithms', 'Emotion recognition', 'Sentiment analysis', 'Real-time processing']
        },
        {
          name: 'AI Autonomous Systems',
          description: 'Self-learning autonomous systems for complex environments',
          features: ['Machine learning', 'Decision making', 'Adaptive behavior', 'Safety protocols']
        },
        {
          name: 'Neural Network Architect',
          description: 'Custom neural network design and optimization',
          features: ['Architecture design', 'Performance optimization', 'Training algorithms', 'Model deployment']
        }
      ]
    },
    {
      title: 'Micro SAAS Solutions',
      icon: Code,
      color: 'from-zion-purple to-zion-cyan',
      description: 'Scalable software-as-a-service solutions for modern businesses',
      services: [
        {
          name: 'AI Business Intelligence',
          description: 'AI-powered business intelligence and analytics platform',
          features: ['Data visualization', 'Predictive analytics', 'Real-time insights', 'Custom dashboards']
        },
        {
          name: 'Customer Experience Hub',
          description: 'Comprehensive customer experience management platform',
          features: ['Customer journey mapping', 'Feedback analysis', 'Personalization', 'Integration APIs']
        },
        {
          name: 'Quantum Computing Suite',
          description: 'Quantum computing solutions for complex problem solving',
          features: ['Quantum algorithms', 'Problem optimization', 'Scalable computing', 'Research tools']
        },
        {
          name: 'Supply Chain Optimizer',
          description: 'AI-driven supply chain optimization and management',
          features: ['Demand forecasting', 'Inventory optimization', 'Route planning', 'Risk assessment']
        }
      ]
    },
    {
      title: 'IT Services',
      icon: Network,
      color: 'from-zion-blue to-zion-purple',
      description: 'Comprehensive IT infrastructure and support services',
      services: [
        {
          name: 'Infrastructure Management',
          description: 'End-to-end IT infrastructure management and optimization',
          features: ['Cloud management', 'On-premise solutions', 'Hybrid environments', '24/7 monitoring']
        },
        {
          name: 'Digital Transformation',
          description: 'Complete digital transformation consulting and implementation',
          features: ['Strategy development', 'Process optimization', 'Technology integration', 'Change management']
        },
        {
          name: 'IT Consulting',
          description: 'Strategic IT consulting for business growth',
          features: ['Technology assessment', 'Roadmap planning', 'Vendor selection', 'Implementation support']
        },
        {
          name: 'Onsite Support',
          description: 'Local IT support and maintenance services',
          features: ['Hardware support', 'Software installation', 'Network troubleshooting', 'Preventive maintenance']
        }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Rocket,
      color: 'from-zion-cyan to-zion-purple',
      description: 'Next-generation technology solutions and research',
      services: [
        {
          name: 'Quantum Computing',
          description: 'Quantum computing research and development',
          features: ['Algorithm development', 'Hardware research', 'Software frameworks', 'Industry applications']
        },
        {
          name: 'Blockchain & DeFi',
          description: 'Blockchain technology and decentralized finance solutions',
          features: ['Smart contracts', 'DeFi protocols', 'Token development', 'Security auditing']
        },
        {
          name: 'Space Technology',
          description: 'Space technology and satellite solutions',
          features: ['Satellite systems', 'Space data analysis', 'Orbital mechanics', 'Ground station support']
        },
        {
          name: 'Biotechnology',
          description: 'Biotechnology and life sciences solutions',
          features: ['Genetic research', 'Drug discovery', 'Bioinformatics', 'Laboratory automation']
        }
      ]
    }
  ];

  const stats = [
    { number: '500+', label: 'AI Solutions Deployed', icon: Brain },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: MessageCircle },
    { number: '50+', label: 'Countries Served', icon: Globe }
  ];

  return (
    <>
      <SEO 
        title="Services - AI, Micro SaaS, IT and Emerging Tech Solutions | Zion Tech Group" 
        description="Explore our comprehensive services including AI solutions, micro SaaS platforms, IT services, and emerging technologies. Transform your business with cutting-edge solutions."
        canonical="/services"
        url="https://ziontechgroup.com/services"
      />
      
      <main className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                Comprehensive
              </span>
              <br />
              <span className="text-white">Technology Services</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              From AI-powered solutions to emerging technologies, we provide the tools and expertise 
              to transform your business and drive innovation in the digital age.
            </motion.p>
          </section>

          {/* Service Categories */}
          <div className="space-y-20">
            {serviceCategories.map((category, index) => (
              <motion.section 
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl mb-6">
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{category.title}</h2>
                  <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 hover:bg-zion-slate-dark/70 transition-all duration-300 group"
                    >
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-zion-slate-light mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-zion-slate-light">
                            <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <Link
                          to="/contact"
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
                        >
                          Learn More
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>

          {/* Stats Section */}
          <motion.section 
            className="mt-32 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">Why Choose Zion Tech Group</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">{stat.number}</div>
                  <div className="text-zion-slate-light">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section 
            className="mt-32 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-blue/10 border border-zion-cyan/20 rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
                Let's discuss how our technology solutions can drive innovation and growth for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
    </>
  );
};

export default Services;
