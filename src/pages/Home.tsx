import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { UltimateServicesShowcase } from '@/components/UltimateServicesShowcase';
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

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
      description: "Cutting-edge artificial intelligence for business transformation",
      color: "from-blue-600 to-purple-600"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade cybersecurity and data protection",
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions for modern businesses",
      color: "from-orange-600 to-red-600"
    },
    {
      icon: Code,
      title: "Micro SAAS",
      description: "Innovative software-as-a-service solutions",
      color: "from-purple-600 to-pink-600"
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: "Proven Results",
      description: "Track record of delivering measurable business outcomes"
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      description: "Solutions that grow with your business needs"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Award-winning solutions and expert team"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Zion Tech Group - Revolutionary AI, IT Infrastructure & Micro SAAS Solutions"
        description="Leading the future of technology with revolutionary AI, IT infrastructure, and innovative micro SAAS solutions that transform businesses worldwide."
        keywords="AI solutions, IT infrastructure, micro SAAS, cybersecurity, cloud services, business transformation, Zion Tech Group"
        canonical="https://ziontechgroup.com"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                Revolutionary Technology
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Solutions for Tomorrow
                </span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl sm:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8 leading-relaxed"
              >
                Leading the future of technology with revolutionary AI, IT infrastructure, 
                and innovative micro SAAS solutions that transform businesses worldwide.
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Explore Services
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-slate-dark/50 to-zion-slate/50">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-cyan-400 mb-2">{stat.label}</div>
                  <p className="text-zion-slate-light">{stat.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                We combine cutting-edge technology with proven business strategies to deliver exceptional results
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <div className={`p-8 bg-gradient-to-br ${feature.color} rounded-xl text-white text-center transform transition-all duration-300 group-hover:scale-105`}>
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                      <feature.icon className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-lg opacity-90">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-slate-dark/50 to-zion-slate/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Our Commitment to Excellence
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                We're dedicated to delivering solutions that exceed expectations and drive real business value
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-6">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-zion-slate-light">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Ultimate Services Showcase */}
        <UltimateServicesShowcase />

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8">
                Let's discuss how our revolutionary technology solutions can help you achieve your goals
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Schedule Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
