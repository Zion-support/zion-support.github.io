import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { UltimateServicesShowcase2027 as UltimateServicesShowcase } from '@/components/UltimateServicesShowcase2027';
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
  Activity,
  BarChart,
  PieChart,
  LineChart,
  TrendingDown,
  DollarSign,
  CreditCard,
  Wallet,
  PiggyBank,
  Coins,
  Bitcoin,
  Ethereum,
  Blockchain,
  Smartphone as SmartphoneIcon,
  Tablet,
  Laptop,
  Desktop,
  Watch,
  Camera,
  Headphones,
  Speaker,
  Printer,
  Scanner,
  Router,
  Switch,
  Hub,
  Modem,
  Antenna,
  Satellite as SatelliteIcon,
  Telescope,
  Microscope as MicroscopeIcon,
  Beaker,
  TestTube as TestTubeIcon,
  Flask as FlaskIcon,
  Burner,
  Scale,
  Calculator,
  Abacus,
  Ruler,
  Compass,
  Protractor,
  Triangle,
  Square,
  Circle,
  Hexagon,
  Octagon,
  Star as StarIcon,
  Heart as HeartIcon,
  Diamond,
  Spade,
  Club,
  Crown,
  Trophy,
  Medal,
  Ribbon,
  Badge,
  Pin,
  Tag,
  Label,
  Sticker,
  Emoji,
  Smile,
  Frown,
  Wink,
  Surprise,
  Angry,
  Sad,
  Happy,
  Laugh,
  Cry,
  Sleep,
  Sick,
  Dead,
  Ghost,
  Alien,
  Robot,
  Zombie,
  Vampire,
  Werewolf,
  Dragon,
  Unicorn,
  Phoenix,
  Griffin,
  Mermaid,
  Fairy,
  Elf,
  Dwarf,
  Giant,
  Troll,
  Goblin,
  Orc,
  Demon,
  Angel,
  God,
  Goddess,
  Spirit,
  Soul,
  Mind,
  Body,
  Heart as HeartIcon2,
  Brain as BrainIcon,
  Eye as EyeIcon,
  Ear as EarIcon,
  Nose,
  Mouth,
  Tongue,
  Tooth as ToothIcon,
  Hair,
  Beard,
  Mustache,
  Eyebrow,
  Eyelash,
  Nail,
  Finger,
  Toe,
  Hand as HandIcon,
  Foot as FootIcon,
  Arm,
  Leg,
  Knee,
  Elbow,
  Shoulder,
  Hip,
  Neck,
  Throat,
  Chest,
  Back,
  Stomach,
  Waist,
  Butt,
  Thigh,
  Calf,
  Ankle,
  Wrist,
  Palm,
  Fingertip,
  Toenail,
  Heel,
  Sole,
  Arch,
  Ball,
  Joint
} from 'lucide-react';

export default function Home() {
  return (
    <>
      <SEO 
        title="Zion Tech Group - Leading AI & Technology Solutions"
        description="Discover cutting-edge AI solutions, expert talent, and innovative technology services. Transform your business with Zion Tech Group's comprehensive tech ecosystem."
        canonical="/"
        url="https://ziontechgroup.com"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"
          animate={{
            y: [0, 20, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services. 
              Transform your business with cutting-edge technology solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-gray-600 text-lg">Certified excellence in technology solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <ShieldCheck className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ISO 27001 Certified</h3>
              <p className="text-gray-600">Information security management system</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Award className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">SOC 2 Type II</h3>
              <p className="text-gray-600">Security, availability, and confidentiality</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <TrendingUp className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">99.9% Uptime SLA</h3>
              <p className="text-gray-600">Guaranteed service availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Users className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-cyan-200">Global Clients</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <Globe className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-green-200">Countries</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <Code className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-purple-200">Projects Delivered</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <Brain className="w-16 h-16 text-pink-400 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-pink-200">AI Solutions</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Comprehensive Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From AI-powered solutions to quantum computing, we deliver cutting-edge technology services 
              that drive innovation and growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl border border-blue-200"
            >
              <Brain className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI & Machine Learning</h3>
              <p className="text-gray-600 mb-4">
                Custom AI solutions, predictive analytics, and intelligent automation systems.
              </p>
              <Link to="/ai-services" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl border border-green-200"
            >
              <Cloud className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cloud & DevOps</h3>
              <p className="text-gray-600 mb-4">
                Scalable cloud infrastructure, CI/CD pipelines, and automated deployment solutions.
              </p>
              <Link to="/cloud-services" className="text-green-600 hover:text-green-800 font-medium flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl border border-purple-200"
            >
              <Shield className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cybersecurity</h3>
              <p className="text-gray-600 mb-4">
                Advanced threat protection, compliance solutions, and security infrastructure.
              </p>
              <Link to="/cybersecurity" className="text-purple-600 hover:text-purple-800 font-medium flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-xl border border-orange-200"
            >
              <Rocket className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation Lab</h3>
              <p className="text-gray-600 mb-4">
                Research & development in quantum computing, blockchain, and emerging technologies.
              </p>
              <Link to="/innovation" className="text-orange-600 hover:text-orange-800 font-medium flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 bg-gradient-to-br from-red-50 to-pink-100 rounded-xl border border-red-200"
            >
              <Users className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Talent Solutions</h3>
              <p className="text-gray-600 mb-4">
                Expert developers, designers, and technology professionals for your projects.
              </p>
              <Link to="/talent" className="text-red-600 hover:text-red-800 font-medium flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 bg-gradient-to-br from-teal-50 to-cyan-100 rounded-xl border border-teal-200"
            >
              <Zap className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital Transformation</h3>
              <p className="text-gray-600 mb-4">
                End-to-end digital transformation strategies and implementation services.
              </p>
              <Link to="/digital-transformation" className="text-teal-600 hover:text-teal-800 font-medium flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how our innovative technology solutions can drive your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Schedule a Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              View Our Portfolio
            </motion.button>
          </div>
        </div>
      </section>

      {/* Ultimate Services Showcase */}
      <UltimateServicesShowcase />
    </>
  );
}
