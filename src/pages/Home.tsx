import React, { Suspense, lazy } from 'react';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
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

// Lazy load components for better performance
const LazyHeroFeatures = lazy(() => import('../components/home/HeroFeatures'));
const LazyServicesOverview = lazy(() => import('../components/home/ServicesOverview'));
const LazyStatsSection = lazy(() => import('../components/home/StatsSection'));
const LazyTestimonials = lazy(() => import('../components/home/Testimonials'));
const LazyCTASection = lazy(() => import('../components/home/CTASection'));

const Home: React.FC = () => {
  const heroFeatures = [
    { icon: Brain, title: 'AI-Powered Solutions', description: 'Cutting-edge artificial intelligence for modern businesses' },
    { icon: Shield, title: 'Cybersecurity Excellence', description: 'Advanced protection for your digital assets' },
    { icon: Cloud, title: 'Cloud Infrastructure', description: 'Scalable cloud solutions for growth' },
    { icon: Zap, title: 'Digital Transformation', description: 'Transform your business with innovative technology' }
  ];

  const services = [
    {
      category: 'AI Services',
      icon: Brain,
      color: 'from-zion-cyan to-zion-blue',
      items: [
        'AI Consciousness Simulator',
        'Quantum Emotion Processor',
        'AI Autonomous Systems',
        'Neural Network Architect',
        'AI Ethics Framework',
        'Predictive Analytics'
      ]
    },
    {
      category: 'Micro SAAS',
      icon: Code,
      color: 'from-zion-purple to-zion-cyan',
      items: [
        'AI Business Intelligence',
        'Customer Experience Hub',
        'Quantum Computing Suite',
        'Supply Chain Optimizer',
        'Cybersecurity Platform',
        'IoT Edge Computing'
      ]
    },
    {
      category: 'IT Services',
      icon: Network,
      color: 'from-zion-blue to-zion-purple',
      items: [
        'Infrastructure Management',
        'Digital Transformation',
        'IT Consulting',
        'Onsite Support',
        'Green IT Solutions',
        '5G Network Solutions'
      ]
    },
    {
      category: 'Emerging Tech',
      icon: Rocket,
      color: 'from-zion-cyan to-zion-purple',
      items: [
        'Quantum Computing',
        'Blockchain & DeFi',
        'Space Technology',
        'Biotechnology',
        'Nanotechnology',
        'AR/VR Development'
      ]
    }
  ];

  const stats = [
    { number: '500+', label: 'Clients Worldwide', icon: Users },
    { number: '50+', label: 'AI Solutions', icon: Brain },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: MessageCircle }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'Zion Tech Group transformed our infrastructure with AI-powered solutions that increased our efficiency by 300%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO, InnovateLab',
      content: 'Their cybersecurity expertise protected us from sophisticated threats and gave us peace of mind.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Engineering, DataFlow',
      content: 'The quantum computing solutions opened new possibilities we never thought possible.',
      rating: 5
    }
  ];

  return (
    <LazyMotion features={domAnimation} strict>
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden" role="banner" aria-label="Hero section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-6xl mx-auto">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                  Future-Ready
                </span>
                <br />
                <span className="text-white">Technology Solutions</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Empowering businesses with cutting-edge AI, cybersecurity, and emerging technologies. 
                Transform your digital future with Zion Tech Group.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link 
                  to="/services"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-zion-cyan/50"
                  aria-label="Explore our services"
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
                </Link>
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-zion-cyan/50"
                  aria-label="Get started with Zion Tech Group"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>

            {/* Hero Features */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {heroFeatures.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
                  role="article"
                  aria-labelledby={`feature-${index}-title`}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 id={`feature-${index}-title`} className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-zion-slate-light text-sm">{feature.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <Suspense fallback={<div className="py-20 text-center text-zion-cyan">Loading services...</div>}>
          <LazyServicesOverview services={services} />
        </Suspense>

        {/* Stats Section */}
        <Suspense fallback={<div className="py-20 text-center text-zion-cyan">Loading statistics...</div>}>
          <LazyStatsSection stats={stats} />
        </Suspense>

        {/* Testimonials */}
        <Suspense fallback={<div className="py-20 text-center text-zion-cyan">Loading testimonials...</div>}>
          <LazyTestimonials testimonials={testimonials} />
        </Suspense>

        {/* CTA Section */}
        <Suspense fallback={<div className="py-20 text-center text-zion-cyan">Loading call to action...</div>}>
          <LazyCTASection />
        </Suspense>
      </div>
    </LazyMotion>
  );
};

export default Home;
