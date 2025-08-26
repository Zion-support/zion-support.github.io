import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Shield, 
  Users, 
  Globe, 
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Scale,
  Lock,
  Eye,
  Database,
  Server,
  Cpu,
  Network,
  Brain,
  Code,
  Rocket,
  Atom,
  Dna,
  Microscope,
  Flask,
  TestTube,
  Syringe,
  Stethoscope,
  HeartPulse,
  BrainCircuit,
  Eye as EyeIcon,
  Ear,
  Hand,
  Foot,
  Bone,
  Tooth,
  Pill,
  Bandage,
  Thermometer,
  Scale as ScaleIcon,
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
  SkipForwardDodecagon,
  RewindDodecagon,
  FastForwardDodecagon,
  ShuffleDodecagon,
  RepeatDodecagon,
  Repeat1Dodecagon,
  Shuffle2Dodecagon,
  SkipBack2Dodecagon,
  SkipForward2Dodecagon
} from 'lucide-react';

const Terms: React.FC = () => {
  const lastUpdated = 'January 15, 2025';
  const companyInfo = {
    name: 'Zion Tech Group',
    address: '123 Innovation Drive, Tech Valley, CA 94000',
    email: 'legal@ziontechgroup.com',
    phone: '+1 (555) 123-4567',
    website: 'https://ziontechgroup.com'
  };

  const services = [
    {
      category: 'AI Services',
      description: 'Artificial intelligence solutions including consciousness simulation, neural networks, and predictive analytics',
      examples: ['AI Consciousness Simulator', 'Quantum Emotion Processor', 'Neural Network Architect']
    },
    {
      category: 'Micro SAAS',
      description: 'Software-as-a-service solutions for business intelligence, customer experience, and cybersecurity',
      examples: ['AI Business Intelligence', 'Customer Experience Hub', 'Cybersecurity Platform']
    },
    {
      category: 'IT Services',
      description: 'Infrastructure management, digital transformation, and IT consulting services',
      examples: ['Infrastructure Management', 'Digital Transformation', 'IT Consulting']
    },
    {
      category: 'Emerging Tech',
      description: 'Cutting-edge technology solutions including quantum computing, blockchain, and space technology',
      examples: ['Quantum Computing', 'Blockchain & DeFi', 'Space Technology']
    }
  ];

  const userObligations = [
    {
      obligation: 'Compliance',
      description: 'Comply with all applicable laws and regulations when using our services'
    },
    {
      obligation: 'Security',
      description: 'Maintain the security of your account credentials and systems'
    },
    {
      obligation: 'Acceptable Use',
      description: 'Use our services only for lawful and intended purposes'
    },
    {
      obligation: 'Intellectual Property',
      description: 'Respect our intellectual property rights and those of third parties'
    },
    {
      obligation: 'Data Protection',
      description: 'Handle any personal data in accordance with applicable privacy laws'
    },
    {
      obligation: 'Reporting',
      description: 'Report any security vulnerabilities or misuse of our services'
    }
  ];

  const prohibitedActivities = [
    'Attempting to gain unauthorized access to our systems or other users\' accounts',
    'Using our services for illegal activities or to harm others',
    'Reverse engineering, decompiling, or disassembling our software',
    'Distributing malware, viruses, or other harmful code',
    'Interfering with the proper functioning of our services',
    'Attempting to circumvent security measures or access controls',
    'Using our services to violate intellectual property rights',
    'Engaging in activities that could damage our reputation or business'
  ];

  const limitations = [
    {
      category: 'Service Availability',
      description: 'We strive for 99.9% uptime but cannot guarantee uninterrupted service'
    },
    {
      category: 'Data Loss',
      description: 'We implement backup and recovery procedures but cannot guarantee against data loss'
    },
    {
      category: 'Third-Party Services',
      description: 'We are not responsible for third-party services integrated with our platform'
    },
    {
      category: 'Force Majeure',
      description: 'We are not liable for delays or failures due to circumstances beyond our control'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Terms of <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                Service
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              These terms govern your use of Zion Tech Group's services and outline the rights and 
              responsibilities of both parties.
            </motion.p>

            <motion.div 
              className="flex items-center justify-center gap-4 text-zion-slate-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Calendar className="w-5 h-5" />
              <span>Last Updated: {lastUpdated}</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Zion Tech Group</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We provide cutting-edge technology solutions and services to businesses worldwide
            </p>
          </motion.div>

          <motion.div
            className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Company Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-zion-slate-light">
                    <Users className="w-5 h-5 text-zion-cyan mr-3" />
                    <span>{companyInfo.name}</span>
                  </div>
                  <div className="flex items-center text-zion-slate-light">
                    <MapPin className="w-5 h-5 text-zion-cyan mr-3" />
                    <span>{companyInfo.address}</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-zion-slate-light">
                    <Mail className="w-5 h-5 text-zion-cyan mr-3" />
                    <span>{companyInfo.email}</span>
                  </div>
                  <div className="flex items-center text-zion-slate-light">
                    <Phone className="w-5 h-5 text-zion-cyan mr-3" />
                    <span>{companyInfo.phone}</span>
                  </div>
                  <div className="flex items-center text-zion-slate-light">
                    <Globe className="w-5 h-5 text-zion-cyan mr-3" />
                    <span>{companyInfo.website}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We offer a comprehensive range of technology solutions designed to drive innovation and growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.category}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mb-4">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.category}</h3>
                <p className="text-zion-slate-light mb-4">{service.description}</p>
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {service.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center text-zion-slate-light text-sm">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Obligations */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              User <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Obligations</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              By using our services, you agree to comply with these obligations and responsibilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userObligations.map((obligation, index) => (
              <motion.div
                key={obligation.obligation}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{obligation.obligation}</h3>
                <p className="text-zion-slate-light text-sm">{obligation.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prohibited Activities */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Prohibited</span> Activities
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              The following activities are strictly prohibited and may result in immediate service termination
            </p>
          </motion.div>

          <motion.div
            className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-6">Activities That Are Not Allowed</h3>
            <ul className="space-y-3">
              {prohibitedActivities.map((activity, index) => (
                <li key={index} className="flex items-start text-zion-slate-light">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  {activity}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Service Limitations */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Service <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Limitations</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Understanding the limitations and disclaimers of our services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {limitations.map((limitation, index) => (
              <motion.div
                key={limitation.category}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mb-4">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{limitation.category}</h3>
                <p className="text-zion-slate-light">{limitation.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intellectual Property */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mb-6">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Intellectual Property</h3>
                <p className="text-zion-slate-light leading-relaxed mb-6">
                  All content, software, technology, and intellectual property on our platform remain the exclusive 
                  property of Zion Tech Group and our licensors.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-2" />
                    Software and applications
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-2" />
                    Trademarks and brand assets
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-2" />
                    Patents and proprietary technology
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Your Content</h3>
                <p className="text-zion-slate-light leading-relaxed mb-6">
                  You retain ownership of content you submit to our platform, but grant us a license to use it 
                  for service provision and improvement.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-2" />
                    You own your data and content
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-2" />
                    We can use it to provide services
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-2" />
                    You can remove it at any time
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Termination & Contact */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mb-6">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Service Termination</h3>
                <p className="text-zion-slate-light leading-relaxed mb-6">
                  We may terminate or suspend your access to our services for violations of these terms, 
                  with or without notice.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-2" />
                    Immediate termination for violations
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-2" />
                    30-day notice for other reasons
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-2" />
                    Data export available upon request
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-xl flex items-center justify-center mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Contact Legal Team</h3>
                <p className="text-zion-slate-light leading-relaxed mb-6">
                  If you have questions about these terms or need legal assistance, 
                  please contact our legal team.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-zion-slate-light">
                    <Mail className="w-5 h-5 text-zion-cyan mr-3" />
                    <span>{companyInfo.email}</span>
                  </div>
                  <div className="flex items-center text-zion-slate-light">
                    <Phone className="w-5 h-5 text-zion-cyan mr-3" />
                    <span>{companyInfo.phone}</span>
                  </div>
                  <div className="flex items-center text-zion-slate-light">
                    <MapPin className="w-5 h-5 text-zion-cyan mr-3" />
                    <span>{companyInfo.address}</span>
                  </div>
                </div>
                <Link 
                  to="/contact"
                  className="inline-flex items-center mt-6 px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Contact Legal Team
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Updates & Changes */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Terms <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Updates</span>
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              We may update these terms from time to time to reflect changes in our services or applicable laws. 
              We will notify you of any material changes by posting the new terms on our website.
            </p>
            <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6">
              <div className="flex items-center justify-center mb-4">
                <AlertTriangle className="w-8 h-8 text-zion-cyan mr-3" />
                <span className="text-zion-cyan font-semibold">Important Notice</span>
              </div>
              <p className="text-zion-slate-light text-center">
                These terms were last updated on <strong>{lastUpdated}</strong>. 
                Please review them periodically to stay informed about your rights and obligations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
