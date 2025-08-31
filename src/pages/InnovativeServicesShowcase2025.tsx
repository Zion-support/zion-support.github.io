import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Zap, 
  Users, 
  Globe, 
  Cpu,
  Lock,
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Code,
  Database,
  Network,
  Smartphone,
  BarChart3,
  MessageSquare,
  FileText,
  ShoppingCart,
  Headphones,
  Mail,
  Search,
  Clock,
  Leaf,
  FileText as FileTextIcon,
  Atom,
  PenTool,
  Sparkles,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Phone,
  MapPin,
  DollarSign,
  Target,
  Award,
  Lightbulb,
  Gauge,
  Activity,
  Thermometer,
  Stethoscope,
  Pill,
  Microscope,
  Recycle,
  Sun,
  Wind,
  Droplets,
  Factory,
  Store,
  Bank,
  Hospital,
  Building2,
  Gavel,
  Scale,
  BookOpen,
  Video,
  GraduationCap,
  Handshake,
  MessageCircle,
  HelpCircle,
  Settings,
  PieChart,
  LineChart,
  Wrench,
  Tool,
  Palette,
  Camera,
  Music,
  Gamepad2,
  Car,
  Plane,
  Ship,
  Train,
  Bus,
  Bicycle,
  Motorcycle,
  Truck,
  Warehouse,
  Museum,
  Theater,
  Stadium,
  Park,
  Beach,
  Mountain,
  Forest,
  Desert,
  Island,
  Ocean,
  River,
  Lake,
  Stream,
  Waterfall,
  Volcano,
  Cave,
  Canyon,
  Valley,
  Hill,
  Cliff,
  Rock,
  Sand,
  Soil,
  Grass,
  Tree,
  Flower,
  Bush,
  Vine,
  Moss,
  Algae,
  Coral,
  Shell,
  Fish,
  Bird,
  Mammal,
  Reptile,
  Amphibian,
  Insect,
  Arachnid,
  Crustacean,
  Mollusk,
  Worm,
  Bacteria,
  Virus,
  Fungus,
  Protozoa
} from 'lucide-react';

const InnovativeServicesShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const serviceCategories = [
    {
      title: 'AI-Powered Legal & Compliance',
      description: 'Intelligent legal technology solutions that streamline operations and reduce risks',
      icon: Gavel,
      color: 'from-blue-500 to-cyan-500',
      services: [
        {
          name: 'AI Intelligent Contract Analyzer',
          description: 'Advanced AI-powered contract analysis, risk assessment, and compliance monitoring',
          href: '/services/ai-intelligent-contract-analyzer',
          features: ['Contract risk scoring', 'Compliance monitoring', 'Automated summaries', 'Version tracking'],
          price: 'From $299/month',
          marketPrice: '$500-2000/month',
          benefits: ['Reduce legal review time by 80%', 'Identify risks automatically', 'Ensure regulatory compliance', 'Save on legal costs']
        }
      ]
    },
    {
      title: 'AI Sustainability & ESG',
      description: 'Environmental impact monitoring and sustainability analytics platforms',
      icon: Leaf,
      color: 'from-green-500 to-emerald-500',
      services: [
        {
          name: 'AI Sustainability Analytics Platform',
          description: 'Comprehensive environmental monitoring, carbon footprint analysis, and ESG compliance',
          href: '/services/ai-sustainability-analytics-platform',
          features: ['Real-time monitoring', 'Carbon tracking', 'ESG compliance', 'Supply chain visibility'],
          price: 'From $499/month',
          marketPrice: '$800-3000/month',
          benefits: ['Reduce carbon emissions by 25%', 'Achieve ESG compliance', 'Optimize resource usage', 'Improve brand reputation']
        }
      ]
    },
    {
      title: 'AI Healthcare & Life Sciences',
      description: 'Next-generation healthcare analytics and predictive medicine solutions',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      services: [
        {
          name: 'AI Healthcare Predictive Analytics',
          description: 'Predictive disease modeling, patient monitoring, and treatment optimization',
          href: '/services/ai-healthcare-predictive-analytics',
          features: ['Disease prediction', 'Patient monitoring', 'Treatment optimization', 'Population health'],
          price: 'From $799/month',
          marketPrice: '$1200-5000/month',
          benefits: ['Improve patient outcomes by 30%', 'Reduce readmission rates', 'Optimize resource allocation', 'Enable preventive care']
        }
      ]
    },
    {
      title: 'AI Content & Marketing',
      description: 'Revolutionary content creation and marketing automation solutions',
      icon: PenTool,
      color: 'from-purple-500 to-pink-500',
      services: [
        {
          name: 'AI Content Creation Studio Pro',
          description: 'Advanced AI-powered content creation, optimization, and marketing automation',
          href: '/services/AI-Content-Creation-Studio-Pro',
          features: ['AI content generation', 'SEO optimization', 'Brand consistency', 'Marketing automation'],
          price: 'From $199/month',
          marketPrice: '$400-1500/month',
          benefits: ['Increase content output by 500%', 'Improve SEO rankings', 'Maintain brand consistency', 'Reduce marketing costs']
        }
      ]
    },
    {
      title: 'Quantum AI & Advanced Computing',
      description: 'Cutting-edge quantum computing and AI hybrid solutions',
      icon: Atom,
      color: 'from-orange-500 to-red-500',
      services: [
        {
          name: 'Quantum AI Trading Platform',
          description: 'Next-generation quantum-enhanced trading and financial analytics',
          href: '/services/Quantum-AI-Trading-Platform',
          features: ['Quantum algorithms', 'AI predictions', 'Real-time analytics', 'Risk management'],
          price: 'From $1,999/month',
          marketPrice: '$3000-10000/month',
          benefits: ['Improve trading accuracy by 40%', 'Reduce risk exposure', 'Enable real-time decisions', 'Gain competitive advantage']
        }
      ]
    },
    {
      title: 'AI Business Intelligence',
      description: 'Intelligent business analytics and decision-making platforms',
      icon: BarChart3,
      color: 'from-indigo-500 to-blue-500',
      services: [
        {
          name: 'AI Business Intelligence Platform',
          description: 'Comprehensive business analytics with AI-powered insights and predictions',
          href: '/services/ai-business-intelligence',
          features: ['Predictive analytics', 'Real-time dashboards', 'Custom reporting', 'Data visualization'],
          price: 'From $599/month',
          marketPrice: '$1000-4000/month',
          benefits: ['Improve decision making by 60%', 'Identify growth opportunities', 'Optimize operations', 'Reduce costs by 25%']
        }
      ]
    }
  ];

  const allServices = serviceCategories.flatMap(category => category.services);

  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : serviceCategories.find(cat => cat.title === activeCategory)?.services || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              2025 Innovative Services Showcase
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Revolutionary AI Services
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our cutting-edge AI-powered solutions that are transforming industries worldwide. 
              From legal technology to healthcare analytics, sustainability monitoring to quantum computing - 
              we're leading the future of intelligent business solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Explore Services
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              All Services
            </button>
            {serviceCategories.map((category) => (
              <button
                key={category.title}
                onClick={() => setActiveCategory(category.title)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.title
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-400 text-lg">{service.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-400">{service.price}</div>
                    <div className="text-sm text-gray-500">Market: {service.marketPrice}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Business Benefits</h4>
                  <div className="space-y-2">
                    {service.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={service.href}
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <a
                    href="/contact"
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
                  >
                    <span>Get Quote</span>
                    <DollarSign className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of organizations that trust our AI-powered solutions to drive innovation and growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Sales
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                View Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-400">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-400">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2025;