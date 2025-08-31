import React from 'react';
import { motion } from 'framer-motion';
import SEOOptimizer from '../components/SEOOptimizer';
import { Link } from 'react-router-dom';
import { 
  Truck, 
  Search, 
  Atom, 
  Brain, 
  BarChart3, 
  Zap, 
  Shield, 
  CheckCircle,
  Star,
  Users,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Play,
  Eye,
  Settings,
  Download,
  Share2,
  Filter,
  AlertTriangle,
  Clock,
  DollarSign,
  Activity,
  Target,
  Rocket,
  Lightbulb,
  Cog,
  BarChart,
  Network,
  Server,
  Cpu,
  HardDrive,
  Wifi,
  Monitor,
  Smartphone,
  Globe2,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Shield as ShieldIcon,
  BarChart3 as AnalyticsIcon,
  CheckCircle as CheckIcon,
  Star as StarIcon,
  ArrowRight as ArrowIcon,
  MapPin as LocationIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  Building2,
  ShoppingCart,
  Factory,
  Leaf,
  Code,
  Database,
  Lock,
  Key,
  Shield as SecurityIcon,
  Users as TeamIcon,
  Calendar,
  Clock3,
  Stopwatch,
  Hourglass,
  Bell,
  Info,
  HelpCircle,
  Wrench,
  Tool,
  Hammer,
  Screwdriver,
  Pliers,
  Saw,
  Drill,
  Welder,
  Crane,
  Forklift,
  Excavator,
  Bulldozer,
  Tractor,
  Harvester,
  Sprayer,
  Planter,
  Seeder,
  Cultivator,
  Plow,
  Rake,
  Shovel,
  Wheelbarrow,
  Cart,
  Pallet,
  Box,
  Container,
  Crate,
  Barrel,
  Tank,
  Silo,
  Hopper,
  Conveyor,
  Belt,
  Chain,
  Gear,
  Motor,
  Engine,
  Pump,
  Valve,
  Pipe,
  Hose,
  Cable,
  Wire,
  Circuit,
  Chip,
  Sensor,
  Microphone,
  Speaker,
  Display,
  Keyboard,
  Mouse,
  Touchpad,
  Joystick,
  Gamepad,
  Remote,
  Controller,
  Switch,
  Button,
  Dial,
  Knob,
  Lever,
  Pedal,
  Handle,
  Grip,
  Trigger,
  Safety,
  Emergency,
  Warning,
  Caution,
  Danger,
  Hazard,
  Toxic,
  Radioactive,
  Biohazard,
  Chemical,
  Explosive,
  Flammable,
  Corrosive,
  Irritant,
  Carcinogen,
  Mutagen,
  Teratogen,
  Allergen,
  Pathogen,
  Virus,
  Bacteria,
  Fungus,
  Parasite,
  Prion,
  Toxin,
  Venom,
  Poison,
  Drug,
  Medicine,
  Vaccine,
  Antibiotic,
  Antiviral,
  Antifungal,
  Antiparasitic,
  Antitoxin,
  Antivenom,
  Antidote,
  Cure,
  Treatment,
  Therapy,
  Surgery,
  Transplant,
  Implant,
  Prosthesis,
  Orthosis,
  Brace,
  Cast,
  Bandage,
  Dressing,
  Suture,
  Staple,
  Clip,
  Pin,
  Screw,
  Plate,
  Rod,
  Wire as WireIcon,
  Nail,
  Bolt,
  Nut,
  Washer,
  Spring,
  Bearing,
  Seal,
  Gasket,
  Oring,
  Filter,
  Screen,
  Mesh,
  Fabric,
  Textile,
  Leather,
  Rubber,
  Plastic,
  Metal,
  Wood,
  Stone,
  Glass,
  Ceramic,
  Composite,
  Alloy,
  Polymer,
  Fiber,
  Carbon,
  Silicon,
  Aluminum,
  Steel,
  Iron,
  Copper,
  Gold,
  Silver,
  Platinum,
  Titanium,
  Tungsten,
  Chromium,
  Nickel,
  Cobalt,
  Manganese,
  Molybdenum,
  Vanadium,
  Niobium,
  Tantalum,
  Rhenium,
  Osmium,
  Iridium,
  Palladium,
  Rhodium,
  Ruthenium,
  Zirconium,
  Hafnium,
  Scandium,
  Yttrium,
  Lanthanum,
  Actinium,
  Thorium,
  Protactinium,
  Uranium,
  Neptunium,
  Plutonium,
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

const seoData = {
  title: "Innovative Services Showcase 2026 | Zion Tech Group",
  description: "Discover our cutting-edge AI, quantum computing, and innovative micro SAAS services that are revolutionizing industries in 2026.",
  keywords: "AI services 2026, quantum computing, micro SAAS, innovative technology, Zion Tech Group",
  ogImage: "/images/services/innovative-services-showcase-2026.jpg",
  canonicalUrl: "https://ziontechgroup.com/innovative-services-showcase-2026"
};

export default function InnovativeServicesShowcase2026() {
  const featuredServices = [
    {
      title: "AI Autonomous Logistics Platform",
      description: "Revolutionary AI-powered logistics platform that autonomously manages supply chains, route optimization, and delivery operations with real-time intelligence.",
      icon: <Truck className="w-12 h-12" />,
      features: ["AI-Powered Route Optimization", "Autonomous Fleet Management", "Smart Inventory Management", "Global Supply Chain Visibility"],
      benefits: ["Reduce logistics costs by 25-40%", "Improve delivery accuracy by 95%", "Cut carbon emissions by 30%"],
      pricing: "Starting at $2,500/month",
      link: "/services/ai-autonomous-logistics-platform",
      category: "AI & Automation"
    },
    {
      title: "AI-Powered SEO Platform",
      description: "Revolutionary AI-powered SEO platform that autonomously optimizes websites, analyzes competitors, and drives organic traffic growth with machine learning.",
      icon: <Search className="w-12 h-12" />,
      features: ["AI Content Optimization", "Intelligent Keyword Research", "Competitive Intelligence", "Predictive Analytics"],
      benefits: ["Increase organic traffic by 200-400%", "Improve search rankings by 60%", "Reduce SEO workload by 80%"],
      pricing: "Starting at $1,500/month",
      link: "/services/ai-powered-seo",
      category: "AI & Marketing"
    },
    {
      title: "Quantum Edge Computing Solutions",
      description: "Revolutionary quantum edge computing solutions that combine quantum processing power with edge computing efficiency for unprecedented performance and scalability.",
      icon: <Atom className="w-12 h-12" />,
      features: ["Quantum Processing Units", "Hybrid Quantum-Classical Computing", "Edge Computing Infrastructure", "Machine Learning Acceleration"],
      benefits: ["1000x faster computational performance", "90% reduction in latency", "Unlimited scalability potential"],
      pricing: "Starting at $5,000/month",
      link: "/services/quantum-edge-computing-solutions",
      category: "Quantum Computing"
    }
  ];

  const allServices = [
    {
      title: "AI Autonomous Business Operations Platform",
      description: "End-to-end automation of business processes with AI-driven decision making and autonomous execution.",
      icon: <Brain className="w-8 h-8" />,
      category: "AI & Automation",
      link: "/services/ai-autonomous-business-operations-platform"
    },
    {
      title: "AI Customer Experience Analytics Platform",
      description: "Advanced analytics platform that provides deep insights into customer behavior and preferences.",
      icon: <BarChart3 className="w-8 h-8" />,
      category: "AI & Analytics",
      link: "/services/ai-customer-experience-analytics-platform"
    },
    {
      title: "AI Project Management Platform",
      description: "Intelligent project management with AI-powered resource allocation and risk prediction.",
      icon: <Cog className="w-8 h-8" />,
      category: "AI & Management",
      link: "/services/ai-project-management-platform"
    },
    {
      title: "AI Enterprise Automation Platform",
      description: "Comprehensive enterprise automation with AI-driven workflow optimization.",
      icon: <Zap className="w-8 h-8" />,
      category: "AI & Automation",
      link: "/services/ai-enterprise-automation-platform"
    },
    {
      title: "AI Data Analytics Platform",
      description: "Advanced data analytics with machine learning and predictive modeling capabilities.",
      icon: <BarChart3 className="w-8 h-8" />,
      category: "AI & Analytics",
      link: "/services/ai-data-analytics-platform"
    },
    {
      title: "AI Business Intelligence",
      description: "Comprehensive business intelligence with AI-powered insights and reporting.",
      icon: <TrendingUp className="w-8 h-8" />,
      category: "AI & Analytics",
      link: "/services/ai-business-intelligence"
    },
    {
      title: "IT Infrastructure Management",
      description: "Comprehensive IT infrastructure management with automation and monitoring.",
      icon: <Server className="w-8 h-8" />,
      category: "IT & Infrastructure",
      link: "/services/it-infrastructure-management"
    },
    {
      title: "Cloud & DevOps",
      description: "Advanced cloud infrastructure and DevOps automation services.",
      icon: <Cloud className="w-8 h-8" />,
      category: "IT & Infrastructure",
      link: "/services/cloud-devops"
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive cybersecurity solutions with threat detection and prevention.",
      icon: <Shield className="w-8 h-8" />,
      category: "Security",
      link: "/services/cybersecurity"
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation consulting and implementation services.",
      icon: <Rocket className="w-8 h-8" />,
      category: "Consulting",
      link: "/services/digital-transformation"
    }
  ];

  const categories = [
    {
      name: "AI & Automation",
      description: "Cutting-edge AI solutions that automate complex business processes",
      icon: <Brain className="w-8 h-8" />,
      color: "from-zion-cyan to-blue-500"
    },
    {
      name: "AI & Analytics",
      description: "Advanced analytics powered by artificial intelligence and machine learning",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "AI & Management",
      description: "AI-powered management tools for modern business operations",
      icon: <Cog className="w-8 h-8" />,
      color: "from-green-500 to-teal-500"
    },
    {
      name: "Quantum Computing",
      description: "Next-generation quantum computing solutions for complex problems",
      icon: <Atom className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-600"
    },
    {
      name: "IT & Infrastructure",
      description: "Comprehensive IT infrastructure and cloud solutions",
      icon: <Server className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Security",
      description: "Advanced cybersecurity and threat protection solutions",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-600"
    },
    {
      name: "Consulting",
      description: "Strategic consulting and digital transformation services",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer {...seoData} />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/10 border border-zion-cyan/20 text-zion-cyan text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Innovation Showcase 2026
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Innovative Services
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> Showcase 2026</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Discover our cutting-edge AI, quantum computing, and innovative micro SAAS services that are revolutionizing 
              industries and transforming businesses in 2026 and beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 transform hover:scale-105">
                Explore All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300">
                <Play className="w-5 h-5 mr-2" />
                Watch Overview
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Services 2026
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our most innovative and transformative services that are setting new industry standards.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="text-zion-cyan mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-zion-cyan/10 text-zion-cyan text-xs font-medium rounded-full mb-3">
                    {service.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-zion-slate-light mb-4">{service.description}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-zion-slate-light">
                        <Star className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-zion-cyan mb-2">{service.pricing}</div>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Explore our comprehensive range of services organized by category and specialization.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{category.name}</h3>
                <p className="text-zion-slate-light">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Browse our comprehensive collection of innovative services designed to meet every business need.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="text-zion-cyan mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-zion-slate-light text-sm mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="inline-block px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs font-medium rounded">
                    {service.category}
                  </span>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already using our innovative services to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-zion-cyan mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <a href="tel:+13024640950" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-zion-cyan mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-zion-cyan mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-zion-slate-light text-center">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
