import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Rocket, 
  Users, 
  Award, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  BarChart3,
  FileImage,
  MessageCircle,
  Video,
  FileText,
  Heart,
  ShoppingCart,
  Settings,
  HelpCircle,
  BookOpen,
  Briefcase,
  Target,
  Lightbulb,
  ShieldCheck,
  Server,
  Smartphone,
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
  TrendingDown,
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
  Shuffle2
} from 'lucide-react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      id: 'ai-autonomous-systems',
      title: 'AI Autonomous Systems',
      description: 'Intelligent systems that operate independently, making decisions and taking actions without human intervention',
      icon: Brain,
      color: 'from-zion-cyan to-zion-blue',
      features: [
        'Machine Learning & Deep Learning',
        'Natural Language Processing',
        'Computer Vision & Image Recognition',
        'Predictive Analytics',
        'Autonomous Decision Making',
        'Real-time Learning & Adaptation'
      ],
      benefits: [
        'Increased operational efficiency by 300%',
        'Reduced human error by 95%',
        '24/7 autonomous operation',
        'Scalable intelligence across systems'
      ],
      useCases: ['Manufacturing', 'Healthcare', 'Financial Services', 'Retail', 'Transportation']
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Solutions',
      description: 'Next-generation computing technology leveraging quantum mechanics for unprecedented computational power',
      icon: Atom,
      color: 'from-zion-purple to-zion-cyan',
      features: [
        'Quantum Neural Networks',
        'Quantum Cryptography',
        'Quantum Machine Learning',
        'Quantum Optimization',
        'Quantum Simulation',
        'Hybrid Quantum-Classical Systems'
      ],
      benefits: [
        '1000x faster computation for complex problems',
        'Unbreakable encryption security',
        'Advanced optimization capabilities',
        'Breakthrough research acceleration'
      ],
      useCases: ['Research & Development', 'Financial Modeling', 'Drug Discovery', 'Climate Modeling', 'Cybersecurity']
    },
    {
      id: 'cybersecurity-framework',
      title: 'Advanced Cybersecurity Framework',
      description: 'Comprehensive security solutions protecting against modern cyber threats with AI-powered detection',
      icon: Shield,
      color: 'from-zion-cyan to-zion-purple',
      features: [
        'Zero-Trust Architecture',
        'AI-Powered Threat Detection',
        'Quantum-Safe Encryption',
        'SOC2 Compliance Automation',
        'Real-time Security Monitoring',
        'Automated Incident Response'
      ],
      benefits: [
        '99.9% threat detection accuracy',
        'Zero successful breaches',
        'Automated compliance management',
        'Reduced security team workload by 70%'
      ],
      useCases: ['Healthcare', 'Financial Services', 'Government', 'Manufacturing', 'Technology']
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure & DevOps',
      description: 'Scalable cloud solutions with automated deployment and management capabilities',
      icon: Cloud,
      color: 'from-zion-blue to-zion-cyan',
      features: [
        'Multi-Cloud Management',
        'Kubernetes Orchestration',
        'CI/CD Pipeline Automation',
        'Infrastructure as Code',
        'Auto-scaling & Load Balancing',
        'Cost Optimization & Monitoring'
      ],
      benefits: [
        '45% reduction in infrastructure costs',
        '99.99% uptime SLA achievement',
        'Automated deployment processes',
        'Global scalability in minutes'
      ],
      useCases: ['E-commerce', 'SaaS Platforms', 'Enterprise Applications', 'Data Centers', 'IoT Platforms']
    },
    {
      id: 'iot-platform',
      title: 'IoT & Edge Computing Platform',
      description: 'Connected device management with intelligent edge processing and real-time analytics',
      icon: Wifi,
      color: 'from-zion-purple to-zion-blue',
      features: [
        'Device Management & Monitoring',
        'Edge AI Processing',
        'Real-time Data Analytics',
        'Predictive Maintenance',
        'Secure Device Communication',
        'Scalable IoT Architecture'
      ],
      benefits: [
        'Real-time insights from connected devices',
        'Reduced latency with edge processing',
        'Predictive maintenance preventing 85% of failures',
        'Scalable to millions of devices'
      ],
      useCases: ['Smart Cities', 'Industrial IoT', 'Healthcare Monitoring', 'Smart Homes', 'Agriculture']
    },
    {
      id: 'data-analytics',
      title: 'Advanced Data Analytics & BI',
      description: 'Comprehensive data analysis platform providing actionable insights and business intelligence',
      icon: BarChart3,
      color: 'from-zion-cyan to-zion-purple',
      features: [
        'Big Data Processing',
        'Real-time Analytics',
        'Predictive Modeling',
        'Data Visualization',
        'Business Intelligence Dashboards',
        'Machine Learning Integration'
      ],
      benefits: [
        '85% faster decision-making processes',
        'Data-driven strategic insights',
        'Real-time business monitoring',
        'Improved operational efficiency by 60%'
      ],
      useCases: ['Business Intelligence', 'Customer Analytics', 'Operational Analytics', 'Risk Management', 'Market Research']
    }
  ];

  const industries = [
    { name: 'Manufacturing', icon: Cpu, count: 25, color: 'from-zion-cyan to-zion-blue' },
    { name: 'Healthcare', icon: Heart, count: 18, color: 'from-zion-purple to-zion-cyan' },
    { name: 'Financial Services', icon: DollarSign, count: 22, color: 'from-zion-cyan to-zion-purple' },
    { name: 'Retail', icon: ShoppingCart, count: 15, color: 'from-zion-blue to-zion-cyan' },
    { name: 'Technology', icon: Code, count: 30, color: 'from-zion-purple to-zion-blue' },
    { name: 'Government', icon: Shield, count: 12, color: 'from-zion-cyan to-zion-purple' }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'CTO, Global Manufacturing Corp',
      content: 'Zion Tech Group\'s AI autonomous systems transformed our manufacturing operations completely. The results exceeded our expectations.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'CEO, Quantum Capital Partners',
      content: 'Their quantum computing expertise opened new possibilities we never thought possible. Game-changing technology.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'CIO, National Healthcare Network',
      content: 'The cybersecurity implementation was flawless. Our patients\' data is now completely secure.',
      rating: 5,
      avatar: '👩‍💻'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEOHead 
        title="Technology Solutions"
        description="Comprehensive technology solutions including AI autonomous systems, quantum computing, cybersecurity, cloud infrastructure, IoT platforms, and advanced data analytics."
        keywords="technology solutions, AI systems, quantum computing, cybersecurity, cloud infrastructure, IoT platforms, data analytics"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-zion-blue/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                Technology Solutions
              </span>
              <br />
              <span className="text-white">That Transform Business</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-12 leading-relaxed">
              Discover our comprehensive suite of cutting-edge technology solutions designed to 
              revolutionize your business operations, enhance security, and drive innovation 
              across all industries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl shadow-lg shadow-zion-cyan/25 hover:shadow-xl hover:shadow-zion-cyan/40 transition-all duration-300"
              >
                Explore Solutions
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industries We <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Serve</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our solutions have been successfully implemented across diverse industries, 
              delivering measurable results and transformative impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{industry.name}</h3>
                <p className="text-3xl font-bold text-zion-cyan">{industry.count}</p>
                <p className="text-zion-slate-light text-sm">Successful Implementations</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Technology Solutions</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive technology solutions designed to address complex business challenges 
              and drive digital transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mr-4`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                      <p className="text-zion-slate-light">{solution.description}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                          <span className="text-zion-slate-light text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Business Benefits</h4>
                    <div className="space-y-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                          <span className="text-zion-slate-light text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Use Cases</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    to={`/services/${solution.id}`}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-blue transition-colors duration-300"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Clients</span> Say
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Direct feedback from the leaders who trusted us with their technology transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-zion-slate-light">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-zion-slate-light mb-4">{testimonial.content}</p>
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let's discuss how our technology solutions can revolutionize your operations 
              and drive measurable business results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl shadow-lg shadow-zion-cyan/25 hover:shadow-xl hover:shadow-zion-cyan/40 transition-all duration-300"
              >
                Schedule a Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                View Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;