import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Network, 
  Heart, 
  Zap, 
  Globe, 
  Users, 
  DollarSign,
  Target,
  CheckCircle,
  Star,
  ArrowRight,
  Activity,
  BarChart3,
  TrendingUp,
  PieChart,
  LineChart,
  Calculator,
  Route,
  Gauge,
  Lock,
  Eye,
  Truck,
  Package,
  Warehouse,
  Smartphone,
  Monitor,
  Phone,
  Mail,
  MapPin,
  Stethoscope,
  Pill,
  Microscope,
  Database,
  Truck,
<<<<<<< HEAD
  Eye,
  EyeOff,
  ExternalLink,
  Award,
  Target,
  Lightbulb,
  Sparkles,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Dna,
  Space,
  Layers,
  Monitor,
  Smartphone,
  Globe2,
  Leaf,
  BarChart3,
  PieChart,
  TrendingDown,
  Activity,
  Shield as ShieldIcon,
  Lock as LockIcon,
  Key,
  Database as DatabaseIcon,
  Server as ServerIcon,
  Wifi,
  Smartphone as SmartphoneIcon,
  Monitor as MonitorIcon,
  Globe as GlobeIcon2,
  Cpu as CpuIcon,
  Brain as BrainIcon2,
  Atom as AtomIcon,
  Rocket as RocketIcon,
  Satellite as SatelliteIcon,
  Dna as DnaIcon,
  Layers as LayersIcon,
  Monitor as MonitorIcon2,
  Smartphone as SmartphoneIcon2,
  Globe as GlobeIcon3,
  Cpu as CpuIcon2,
  Network as NetworkIcon,
  Leaf as LeafIcon
<<<<<<< HEAD
} from 'lucide-react';
import SEO from "@/components/SEO";
import { ULTIMATE_INNOVATIVE_SERVICES_2026 } from "@/data/ultimateInnovativeServices2026";
export default function ComprehensiveServicesOverview2026(...args[]):  {
=======
<<<<<<< HEAD
import { SEO              } from '@/components/SEO';
=======
} from 'lucide-react';
import SEO from "@/components/SEO";
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
import { ULTIMATE_INNOVATIVE_SERVICES_2026              } from '@/data/ultimateInnovativeServices2026';

export default function ComprehensiveServicesOverview2026(...args[]: any):  {
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedCategory, setExpandedCategory] = useState<any>(null);
=======
  Package,
  Warehouse
} from 'lucide-react';
import { SEO } from '../components/SEO';

const ComprehensiveServicesOverview2026 = () => {
>>>>>>> cursor/add-new-services-and-advertise-them-650b
  const serviceCategories = [
    {
      title: "AI-Powered Cybersecurity",
      description: "Advanced threat intelligence and protection",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      services: [
        {
          name: "AI Cybersecurity Threat Intelligence",
          description: "Real-time threat detection with 99.7% accuracy and automated incident response",
          price: "From $299/month",
          features: ["AI-powered threat detection", "Real-time monitoring", "Automated response", "Global threat correlation"],
          link: "/services/ai-cybersecurity-threat-intelligence"
        }
      ]
    },
    {
      title: "AI Supply Chain Optimization",
      description: "Intelligent logistics and inventory management",
      icon: Network,
      color: "from-blue-500 to-cyan-500",
      services: [
        {
          name: "AI Supply Chain Optimization",
          description: "End-to-end supply chain visibility with AI-driven forecasting and route optimization",
          price: "From $499/month",
          features: ["Demand forecasting", "Route optimization", "Inventory management", "Risk assessment"],
          link: "/services/ai-supply-chain-optimization"
        }
      ]
    },
    {
      title: "AI Healthcare Analytics",
      description: "Patient care optimization and clinical insights",
      icon: Heart,
      color: "from-green-500 to-emerald-500",
      services: [
        {
          name: "AI Healthcare Analytics",
          description: "Patient monitoring and diagnostic support with 94%+ accuracy",
          price: "From $799/month",
          features: ["Patient analytics", "Real-time monitoring", "Diagnostic support", "HIPAA compliance"],
          link: "/services/ai-healthcare-analytics"
        }
      ]
    },
    {
      title: "AI Financial Services",
      description: "Intelligent financial analytics and trading",
      icon: DollarSign,
      color: "from-purple-500 to-pink-500",
      services: [
        {
          name: "AI Financial Analytics",
          description: "Advanced financial modeling and risk management with predictive insights",
          price: "From $399/month",
          features: ["AI forecasting", "Risk assessment", "Portfolio optimization", "Real-time analytics"],
          link: "/services/ai-financial-analytics"
        },
        {
          name: "AI Financial Trading",
          description: "Algorithmic trading and market analysis with AI-driven insights",
          price: "From $599/month",
          features: ["Algorithmic trading", "Market analysis", "Risk management", "Performance optimization"],
          link: "/services/ai-financial-trading"
        }
      ]
    },
    {
      title: "AI Business Intelligence",
      description: "Data-driven decision making and insights",
      icon: Brain,
      color: "from-indigo-500 to-blue-500",
      services: [
        {
          name: "AI Business Intelligence",
          description: "Comprehensive business analytics and intelligent reporting",
          price: "From $299/month",
          features: ["Data analytics", "Predictive insights", "Custom dashboards", "Real-time reporting"],
          link: "/services/ai-business-intelligence"
        }
      ]
    },
    {
<<<<<<< HEAD
      id: 'brain-computer-interface',
      name: 'Brain-Computer Interface',
      description: 'Direct neural communication between human brain and computers',
      icon: MonitorIcon2,
      color: 'from-purple-500 to-pink-500',
      services: ULTIMATE_INNOVATIVE_SERVICES_2026.filter(s               => s.category === 'Brain-Computer Interface'),
      marketSize: anyanyanyanyanyanyanyanyanyanyanyanyany'$3.7 billion by 2027',
      avgROI: '800-3000%',
      innovationLevel: 'Revolutionary'
    },
    {
      id: 'digital-twin',
      name: 'Digital Twin AI',
      description: 'Virtual replicas of physical systems with real-time monitoring',
      icon: GlobeIcon3,
      color: 'from-cyan-500 to-green-500',
      services: ULTIMATE_INNOVATIVE_SERVICES_2026.filter(s               => s.category === 'Digital Twin'),
      marketSize: anyanyanyanyanyanyanyanyanyanyanyanyany'$86.1 billion by 2028',
      avgROI: '400-1200%',
      innovationLevel: 'Advanced'
    },
    {
      id: 'extended-reality',
      name: 'Extended Reality AI',
      description: 'Immersive VR, AR, and MR experiences powered by AI',
      icon: SmartphoneIcon2,
      color: 'from-orange-500 to-purple-500',
      services: ULTIMATE_INNOVATIVE_SERVICES_2026.filter(s               => s.category === 'Extended Reality'),
      marketSize: anyanyanyanyanyanyanyanyanyanyanyanyany'$125.2 billion by 2027',
      avgROI: '500-1500%',
      innovationLevel: 'Advanced'
    },
    {
      id: 'edge-ai',
      name: 'Edge AI Intelligence',
      description: 'AI processing at the edge of networks for real-time decision making',
      icon: CpuIcon2,
      color: 'from-green-500 to-cyan-500',
      services: ULTIMATE_INNOVATIVE_SERVICES_2026.filter(s               => s.category === 'Edge AI'),
      marketSize: anyanyanyanyanyanyanyanyanyanyanyanyany'$15.7 billion by 2027',
      avgROI: '400-1200%',
      innovationLevel: 'Advanced'
    },
    {
      id: 'federated-learning',
      name: 'Federated Learning AI',
      description: 'Collaborative AI training across distributed data sources',
      icon: NetworkIcon,
      color: 'from-purple-500 to-blue-500',
      services: ULTIMATE_INNOVATIVE_SERVICES_2026.filter(s               => s.category === 'Federated Learning'),
      marketSize: anyanyanyanyanyanyanyanyanyanyanyanyany'$2.3 billion by 2027',
      avgROI: '500-1500%',
      innovationLevel: 'Advanced'
    },
    {
      id: 'sustainable-technology',
      name: 'Sustainable Technology AI',
      description: 'AI solutions for environmental sustainability and green innovation',
      icon: LeafIcon,
      color: 'from-green-500 to-blue-500',
<<<<<<< HEAD
=======
<<<<<<< HEAD
      services: ULTIMATE_INNOVATIVE_SERVICES_2026.filter(s               => s.category === 'Sustainable Technology'),
      marketSize: '$1.2 trillion by 2027',
      avgROI: '300-800%',
<<<<<<< HEAD
      innovationLevel: 'Advanced'

=======
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
      innovationLevel: 'Advanced';
    };
  ];
  const filteredCategories = selectedCategory === 'all'
<<<<<<< HEAD
    ? serviceCategories
    : serviceCategories.filter(cat => cat.id === selectedCategory);
  const toggleCategoryExpansion = (categoryId: string) => {;
=======
    ? serviceCategories: anyanyanyanyanyanyanyanyanyanyanyanyanyserviceCategories.filter(cat              => cat.id === selectedCategory);

  const toggleCategoryExpansion = (categoryId: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {;
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };
  const totalMarketSize = '$3.2+ trillion';
  const avgROI = '400-1500%';
=======
      title: "AI Content & Marketing",
      description: "Intelligent content creation and optimization",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      services: [
        {
          name: "AI Content Creation Suite",
          description: "Automated content generation and optimization for marketing",
          price: "From $199/month",
          features: ["Content generation", "SEO optimization", "Multi-language support", "Brand consistency"],
          link: "/services/ai-content-creation-suite"
        },
        {
          name: "AI-Powered SEO",
          description: "Intelligent search engine optimization and performance tracking",
          price: "From $149/month",
          features: ["Keyword optimization", "Performance tracking", "Competitor analysis", "ROI measurement"],
          link: "/services/ai-seo"
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Proven Results",
      value: "25-95%",
      description: "Measurable improvements across all services"
    },
    {
      icon: TrendingUp,
      title: "ROI",
      value: "300-800%",
      description: "Exceptional return on investment"
    },
    {
      icon: Clock,
      title: "Implementation",
      value: "2-4 weeks",
      description: "Fast deployment and setup"
    },
    {
      icon: Star,
      title: "Customer Satisfaction",
      value: "98%",
      description: "Highly rated by clients"
    }
  ];

  const testimonials = [
    {
      name: "David Chen",
      role: "CTO",
      company: "GlobalTech Solutions",
      content: "Zion Tech Group's AI services have transformed our operations. The cybersecurity platform alone has prevented multiple attacks.",
      rating: 5
    },
    {
      name: "Sarah Rodriguez",
      role: "Operations Director",
      company: "Manufacturing Corp",
      content: "The supply chain optimization platform reduced our costs by 35% and improved delivery times by 45%.",
      rating: 5
    },
    {
      name: "Dr. Emily Thompson",
      role: "Chief Medical Officer",
      company: "Healthcare Systems",
      content: "Our patient outcomes have improved dramatically with the AI healthcare analytics platform.",
      rating: 5
    }
  ];

>>>>>>> cursor/add-new-services-and-advertise-them-650b
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="Comprehensive AI Services Overview 2026 - Zion Tech Group"
        description="Explore our complete suite of AI-powered services including cybersecurity, supply chain optimization, healthcare analytics, and more. Start transforming your business today."
      />
<<<<<<< HEAD
=======
      
>>>>>>> cursor/add-new-services-and-advertise-them-650b
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
<<<<<<< HEAD
            initial = {
  { opacity: 0,
  y: 20 
}}
            animate = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.8 }}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Comprehensive Services
              <span className="block text-6xl md:text-8xl bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Overview 2026
=======
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
              <Brain className="w-4 h-4 mr-2 text-purple-400" />
              Comprehensive AI Services 2026
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Complete AI Services
>>>>>>> cursor/add-new-services-and-advertise-them-650b
              </span>
              <br />
              <span className="text-white">Suite</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your business with our comprehensive suite of AI-powered services. From cybersecurity to healthcare, 
              supply chain to finance - we have the intelligent solutions you need to succeed in 2026 and beyond.
            </p>
<<<<<<< HEAD
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/20 backdrop-blur-sm rounded-xl p-6"
                <div className="text-4xl font-bold text-white mb-2">{totalServices}</div>
                <div className="text-white/80">Revolutionary Services</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/20 backdrop-blur-sm rounded-xl p-6"
                <div className="text-4xl font-bold text-white mb-2">{totalMarketSize}</div>
                <div className="text-white/80">Total Market Size</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/20 backdrop-blur-sm rounded-xl p-6"
                <div className="text-4xl font-bold text-white mb-2">{avgROI}</div>
                <div className="text-white/80">Average ROI</div>
              </motion.div>
=======
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 flex items-center group"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="border border-purple-400/30 text-purple-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-400/10 transition-all duration-300 flex items-center group"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
>>>>>>> cursor/add-new-services-and-advertise-them-650b
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Category Filter */}
      <section className="py-12 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Explore by Category</h2>
            <p className="text-zion-slate-300">Filter our services by technology category</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg transition-all duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-zion-cyan text-white'
                  : 'bg-white/10 text-zion-slate-300 hover: anyanyanyanyanyanyanyanyanyanyanyanyanybg-white/20'
              }`}
              All Categories
            </button>
            {serviceCategories.map(category               => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-zion-cyan text-white'
                    : 'bg-white/10 text-zion-slate-300 hover:bg-white/20'
                }`}
                {category.name}
              </button>
=======

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven results and exceptional value across all our AI-powered services
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center"
              >
                <div className="glass rounded-2xl p-8 border border-white/20 hover:border-purple-400/40 transition-all duration-300 group-hover:transform group-hover:scale-105 backdrop-blur-sm h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-purple-400 mb-2">{benefit.value}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              </motion.div>
>>>>>>> cursor/add-new-services-and-advertise-them-650b
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {filteredCategories.length} Technology Categories
=======

      {/* Services Overview Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our AI Services Portfolio
              </span>
>>>>>>> cursor/add-new-services-and-advertise-them-650b
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions designed to address every aspect of modern business challenges
            </p>
<<<<<<< HEAD
          </div>
          <div className="space-y-8">
            <AnimatePresence>
              {filteredCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial = {
  { opacity: 0,
  y: 20 
}}
                  animate = {
  { opacity: 1,
  y: 0 
}}
                  exit = {
  { opacity: 0,
  y: -20 
}}
                  transition = {
  { duration: 0.5,
  delay: index * 0.1 
}}
                  className="bg-white/5 backdrop-blur-sm border border-zion-slate-300/20 rounded-2xl p-6"
                  {/* Category Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${category.color}`}>
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                        <p className="text-zion-slate-300 max-w-2xl">{category.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-zion-slate-400 mb-1">Market Size</div>
                      <div className="text-lg font-bold text-zion-cyan">{category.marketSize}</div>
                      <div className="text-sm text-zion-slate-400 mt-1">Avg ROI: {category.avgROI}</div>
                    </div>
                  </div>
                  {/* Innovation Level Badge */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      category.innovationLevel === 'Revolutionary'
                        ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                        : category.innovationLevel === 'Cutting-edge'
                        ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {category.innovationLevel}
                    </div>
                    <div className="text-zion-slate-400">
                      {category.services.length} service{category.services.length !== 1 ? 's' : ''}
                    </div>
                  </div>
                  {/* Services Preview */}
                  <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {category.services.slice(0, 3).map((service, serviceIndex)               => (
                      <div key={service.id} className="bg-zion-slate-800/50 rounded-lg p-4">
                        <h4 className="font-semibold text-white mb-2">{service.title}</h4>
                        <div className="text-zion-cyan font-bold text-lg mb-2">
                          ${service.price.toLocaleString()}
                        </div>
                        <div className="text-xs text-zion-slate-400 line-clamp-2">
                          {service.description}
                        </div>
                      </div>
                    ))}
                    {category.services.length > 3 && (
                      <div className="bg-zion-slate-800/50 rounded-lg p-4 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-2xl text-zion-cyan font-bold mb-2">
                            +{category.services.length - 3}
                          </div>
                          <div className="text-sm text-zion-slate-400">More Services</div>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Expand/Collapse Button */}
                  <button
                    onClick={() => toggleCategoryExpansion(category.id)}
                    className="w-full flex items-center justify-center gap-2 py-3 text-zion-cyan hover:text-white transition-colors border-t border-zion-slate-600/30"
                    {expandedCategory === category.id ? (
                      <>
                        <EyeOff className="w-4 h-4" />
                        Show Less
                      </>
                    ) : (
                      <>
                        <Eye className="w-4 h-4" />
                        View All Services
                      </>
                    )}
                  </button>
                  {/* Expanded Services Details */}
                  <AnimatePresence>
                    {expandedCategory === category.id && (
                      <motion.div
                        initial = {
  { opacity: 0,
  height: 0 
}}
                        animate = {
  { opacity: 1,
  height: 'auto' 
}}
                        exit = {
  { opacity: 0,
  height: 0 
}}
                        transition={{ duration: 0.3 }}
                        className="mt-6 pt-6 border-t border-zion-slate-600/30"
<<<<<<< HEAD
                      >
                        <div className="grid grid-cols-1 lg: grid-cols-2 gap-6">
                          {category.services.map((service, serviceIndex)  => (
=======
<<<<<<< HEAD

                        <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-6">
                          {category.services.map((service, serviceIndex)              => (
=======
                      >
                        <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-6">
                          {category.services.map((service, serviceIndex)               => (
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                            <div key={service.id} className="bg-zion-slate-800/30 rounded-lg p-6 border border-zion-slate-600/30">
                              <div className="flex items-start justify-between mb-4">
                                <h4 className="text-lg font-semibold text-white">{service.title}</h4>
                                <div className="text-right">
                                  <div className="text-xl font-bold text-zion-cyan">
                                    ${service.price.toLocaleString()}
                                  </div>
                                  <div className="text-sm text-zion-slate-400">
                                    {service.pricingModel}
                                  </div>
                                </div>
                              </div>
                              <p className="text-zion-slate-300 text-sm mb-4">{service.description}</p>
                              <div className="flex items-center gap-2 mb-4">
                                <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                  service.innovationLevel === 'Revolutionary'
                                    ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                                    : service.innovationLevel === 'Cutting-edge'
                                    ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                                    : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                }`}>
                                  {service.innovationLevel}
                                </div>
                                <div className="text-xs text-zion-slate-400">
                                  ROI: {service.roi}
                                </div>
                              </div>
                              <div className="flex flex-wrap gap-2 mb-4">
                                {service.tags.slice(0, 3).map((tag, tagIndex) => (
                                  <span
                                    key={tagIndex}
                                    className="px-2 py-1 bg-zion-slate-700/50 text-zion-slate-300 text-xs rounded-md"
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <Link
                                to="/contact"
                                className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-200 font-semibold text-sm"
                                <MessageCircle className="w-4 h-4" />
                                Get Started
                              </Link>
=======
          </motion.div>
          
          <div className="space-y-12">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-3xl p-8 border border-white/20 backdrop-blur-sm"
              >
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mr-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-xl text-gray-300">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-bold text-white">{service.name}</h4>
                        <span className="text-purple-400 font-semibold">{service.price}</span>
                      </div>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      
                      <div className="mb-6">
                        <h5 className="text-white font-semibold mb-3">Key Features:</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                              {feature}
>>>>>>> cursor/add-new-services-and-advertise-them-650b
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <a
                        href={service.link}
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-semibold group"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-blue/10 to-zion-purple/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
=======

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
>>>>>>> cursor/add-new-services-and-advertise-them-650b
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                What Our Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real businesses using our AI services
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-8 border border-white/20 backdrop-blur-sm"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-purple-400">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of organizations that trust our AI-powered services to drive innovation, 
              improve efficiency, and achieve remarkable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-200 font-semibold text-lg"
                <MessageCircle className="w-5 h-5" />
=======
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 flex items-center justify-center group"
              >
>>>>>>> cursor/add-new-services-and-advertise-them-650b
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+13024640950"
<<<<<<< HEAD
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-zion-slate-300 text-white rounded-lg hover:bg-white/20 transition-all duration-200 font-semibold text-lg"
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
            <div className="mt-8 text-zion-slate-400">
              <p>Mobile: +1 302 464 0950 | Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
}
=======
                className="border border-purple-400/30 text-purple-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-400/10 transition-all duration-300 flex items-center justify-center group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-purple-400 mb-4" />
              <div className="text-white font-semibold">Phone</div>
              <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-purple-400 mb-4" />
              <div className="text-white font-semibold">Email</div>
              <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-purple-400 mb-4" />
              <div className="text-white font-semibold">Address</div>
              <div className="text-gray-300 text-center">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesOverview2026;
>>>>>>> cursor/add-new-services-and-advertise-them-650b
