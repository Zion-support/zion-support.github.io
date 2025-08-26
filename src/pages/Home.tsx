import React from 'react';
import { motion } from 'framer-motion';
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
  Smartphone,
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
  Satellite,
  Telescope,
  Microscope,
  Beaker,
  TestTube,
  Flask,
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
  Star,
  Heart,
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
  Heart,
  Brain,
  Eye,
  Ear,
  Nose,
  Mouth,
  Tongue,
  Tooth,
  Hair,
  Beard,
  Mustache,
  Eyebrow,
  Eyelash,
  Nail,
  Finger,
  Toe,
  Hand,
  Foot,
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
  Joint,
  Muscle,
  Bone,
  Tendon,
  Ligament,
  Cartilage,
  Skin,
  Blood,
  Vein,
  Artery,
  Capillary,
  Heart,
  Lung,
  Liver,
  Kidney,
  Stomach,
  Intestine,
  Brain,
  SpinalCord,
  Nerve,
  Neuron,
  Synapse,
  Hormone,
  Enzyme,
  Protein,
  Vitamin,
  Mineral,
  Oxygen,
  Carbon,
  Hydrogen,
  Nitrogen,
  Helium,
  Neon,
  Argon,
  Krypton,
  Xenon,
  Radon,
  Uranium,
  Plutonium,
  Thorium,
  Radium,
  Polonium,
  Actinium,
  Protactinium,
  Neptunium,
  Americium,
  Curium,
  Berkelium,
  Californium,
  Einsteinium,
  Fermium,
  Mendelevium,
  Nobelium,
  Lawrencium,
  Rutherfordium,
  Dubnium,
  Seaborgium,
  Bohrium,
  Hassium,
  Meitnerium,
  Darmstadtium,
  Roentgenium,
  Copernicium,
  Nihonium,
  Flerovium,
  Moscovium,
  Livermorium,
  Tennessine,
  Oganesson
} from 'lucide-react';

import { SEO } from '../components/SEO';
import { AIServicesShowcase } from '../components/AIServicesShowcase';
import { UltimateServicesShowcase } from '../components/UltimateServicesShowcase';
import { CategoriesSection } from '../components/CategoriesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

export default function Home() {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Global Clients",
      description: "Serving businesses worldwide"
    },
    {
      icon: Globe,
      value: "25+",
      label: "Countries",
      description: "Global presence"
    },
    {
      icon: Code,
      value: "1000+",
      label: "Projects",
      description: "Successfully delivered"
    },
    {
      icon: Shield,
      value: "99.9%",
      label: "Uptime",
      description: "Reliable service"
    }
  ];

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence and machine learning technologies"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade cybersecurity and data protection"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions for modern businesses"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "High-performance solutions with minimal latency"
    }
  ];

  const services = [
    {
      icon: Cpu,
      title: "AI & Autonomous Systems",
      description: "Revolutionary AI platforms and autonomous business solutions",
      color: "from-blue-600 to-purple-600",
      link: "/services"
    },
    {
      icon: Database,
      title: "IT Infrastructure",
      description: "Enterprise-grade IT infrastructure and cloud solutions",
      color: "from-green-600 to-emerald-600",
      link: "/services"
    },
    {
      icon: Code,
      title: "Micro SAAS Solutions",
      description: "Innovative micro software-as-a-service solutions",
      color: "from-orange-600 to-red-600",
      link: "/services"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="Zion Tech Group - Revolutionary AI, IT & Micro SAAS Solutions"
        description="Transform your business with Zion Tech Group's cutting-edge AI, IT infrastructure, and innovative micro SAAS solutions. Leading the future of technology."
        keywords="AI solutions, IT infrastructure, micro SAAS, autonomous systems, cloud computing, cybersecurity, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Revolutionary{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                AI & IT Solutions
              </span>
              {' '}for the Future
            </h1>
            <p className="text-xl sm:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge artificial intelligence, autonomous systems, 
              and enterprise-grade IT infrastructure. Leading the technological revolution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-slate-dark transition-all duration-300"
              >
                Get Started Today
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-zion-slate-light mb-1">{stat.label}</div>
                <div className="text-sm text-zion-slate-light">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver 
              solutions that transform businesses and drive innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Revolutionary Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover our comprehensive range of AI, IT infrastructure, and micro SAAS solutions 
              designed to revolutionize your business operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={service.link}>
                  <div className={`p-8 bg-gradient-to-br ${service.color} rounded-xl text-white text-center transform transition-all duration-300 group-hover:scale-105`}>
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                      <service.icon className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-lg opacity-90">{service.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Showcase */}
      <AIServicesShowcase />

      {/* Ultimate Services Showcase */}
      <UltimateServicesShowcase />

      {/* Categories Section */}
      <CategoriesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
