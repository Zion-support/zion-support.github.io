import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  Activity, 
  CheckCircle,
  ArrowRight,
  Star,
  Rocket,
  Lock,
  Target,
  Cpu,
  ChartLine,
  Network,
  Database,
  Server,
  Monitor,
  Smartphone,
  Cloud,
  Users,
  Award,
  Clock,
  Phone,
  Mail,
  MapPin,
  Settings,
  BarChart3,
  TrendingUp,
  BrainCircuit,
  ShieldCheck,
  Cog,
  Workflow,
  Automation,
  Bot,
  Globe,
  Lightbulb,
  CheckSquare,
  AlertTriangle,
  FileText,
  UserCheck,
  Microscope,
  Atom,
  Heart,
  Building2,
  Car,
  Leaf,
  Eye,
  Stethoscope,
  DollarSign,
  Wallet,
  ChartBar,
  Target,
  Zap,
  Star,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function UltimateServicesShowcase2025() {
  const featuredServices = [
    {
      title: "AI Quantum Financial Trading Platform",
      description: "Revolutionary AI-powered quantum financial trading platform combining machine learning with quantum computing for superior trading performance and risk management.",
      icon: Atom,
      category: "AI & Finance",
      price: "$2,500 - $25,000/month",
      features: ["AI-Powered Trading Algorithms", "Quantum Computing Integration", "Real-time Risk Management", "High-Frequency Trading"],
      benefits: ["300% ROI within 6 months", "60% faster decision-making", "Real-time market insights", "Automated risk mitigation"],
      href: "/services/ai-quantum-financial-trading-platform",
      color: "from-green-500 to-blue-600",
      popular: true
    },
    {
      title: "AI Smart City Platform",
      description: "Transform your city into an intelligent, sustainable, and efficient urban ecosystem with AI-powered infrastructure management and citizen services.",
      icon: Building2,
      category: "Smart Cities & IoT",
      price: "$15,000 - $125,000/month",
      features: ["AI-Powered Urban Analytics", "Smart Infrastructure Management", "Cybersecurity & Privacy", "Real-time Response Systems"],
      benefits: ["30-40% operational cost reduction", "Improved citizen experience", "Enhanced sustainability", "Better public safety"],
      href: "/services/ai-smart-city-platform",
      color: "from-blue-500 to-green-600",
      popular: false
    },
    {
      title: "AI Healthcare Analytics Platform",
      description: "Revolutionary AI-powered healthcare analytics platform for improved patient outcomes, predictive diagnostics, and clinical decision support.",
      icon: Heart,
      category: "Healthcare & AI",
      price: "$3,500 - $35,000/month",
      features: ["AI-Powered Diagnostics", "Predictive Analytics", "HIPAA Compliant Security", "Real-time Monitoring"],
      benefits: ["25-40% improved patient outcomes", "60% faster diagnosis", "Enhanced patient safety", "20-30% cost reduction"],
      href: "/services/ai-healthcare-analytics-platform",
      color: "from-red-500 to-blue-600",
      popular: false
    },
    {
      title: "AI Autonomous Business Operations Platform",
      description: "Transform your business with autonomous AI operations. Intelligent automation, decision-making, and optimization across all aspects of business operations.",
      icon: Automation,
      category: "Business Automation",
      price: "$5,000 - $45,000/month",
      features: ["AI-Powered Decision Making", "End-to-End Automation", "Intelligent Risk Management", "Real-time Optimization"],
      benefits: ["40-60% operational efficiency", "24/7 business operations", "Risk reduction", "Seamless scalability"],
      href: "/services/ai-autonomous-business-operations-platform",
      color: "from-purple-500 to-blue-600",
      popular: false
    }
  ];

  const allServices = [
    {
      title: "AI Business Intelligence Elite",
      description: "Advanced AI-powered analytics platform with real-time insights and predictive analytics",
      price: "$2,500 - $12,000/month",
      category: "AI & Analytics"
    },
    {
      title: "AI Cybersecurity Elite",
      description: "Military-grade AI-powered cybersecurity platform with real-time threat detection",
      price: "$3,500 - $18,000/month",
      category: "Cybersecurity"
    },
    {
      title: "Quantum Computing Elite",
      description: "Access to cutting-edge quantum computing with AI-quantum hybrid systems",
      price: "$8,500 - $45,000/month",
      category: "Quantum Computing"
    },
    {
      title: "Micro-SaaS Platform Elite",
      description: "Complete platform to launch and scale your micro-SaaS business",
      price: "$2,500 - $12,000/month",
      category: "Micro-SaaS"
    },
    {
      title: "AI Content Creation Studio Pro",
      description: "Professional AI-powered content creation and optimization platform",
      price: "$1,500 - $8,000/month",
      category: "Content & Marketing"
    },
    {
      title: "Quantum AI Trading Platform",
      description: "Advanced quantum AI trading system for institutional investors",
      price: "$15,000 - $75,000/month",
      category: "Trading & Finance"
    }
  ];

  const categories = [
    { name: "AI & Machine Learning", icon: Brain, count: 8 },
    { name: "Quantum Computing", icon: Atom, count: 3 },
    { name: "Cybersecurity", icon: Shield, count: 4 },
    { name: "Healthcare", icon: Heart, count: 2 },
    { name: "Smart Cities", icon: Building2, count: 1 },
    { name: "Business Automation", icon: Automation, count: 2 },
    { name: "Finance & Trading", icon: DollarSign, count: 3 },
    { name: "Content & Marketing", icon: FileText, count: 2 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO 
        title="Ultimate Services Showcase 2025 - Zion Tech Group"
        description="Discover Zion Tech Group's comprehensive portfolio of cutting-edge AI services, quantum computing solutions, and innovative micro-SaaS platforms. Transform your business with the future of technology."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Ultimate Innovation 2025
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Ultimate Services
              <span className="block bg-gradient-to-r from-purple-400 via-blue-500 to-green-600 bg-clip-text text-transparent">
                Showcase 2025
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Discover Zion Tech Group's comprehensive portfolio of cutting-edge AI services, quantum computing solutions, 
              and innovative micro-SaaS platforms. Transform your business with the future of technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-purple-500/20"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-purple-400/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-200"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Innovation Services
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our flagship services that represent the cutting edge of AI, quantum computing, and business innovation.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 border rounded-xl p-8 hover:border-purple-400/30 transition-all duration-200 ${
                  service.popular ? 'border-purple-400/50 bg-gradient-to-br from-purple-500/10 to-blue-500/10' : 'border-slate-700/50'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="inline-flex items-center px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300 mb-2">
                      {service.category}
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-slate-300 text-lg">{service.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-white mb-2">{service.price}</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-300 mb-2">Key Features</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 2).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-slate-400 text-sm">
                            <CheckCircle className="w-3 h-3 text-purple-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-300 mb-2">Benefits</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-slate-400 text-sm">
                            <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <Link
                  to={service.href}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    service.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-400 hover:to-blue-500 hover:scale-105'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Explore our comprehensive range of services across multiple technology domains and industries.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 hover:border-purple-400/30 transition-all duration-200 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <category.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-slate-400 text-sm">{category.count} services</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Browse our complete collection of innovative services and solutions designed to transform your business.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 hover:border-purple-400/30 transition-all duration-200"
              >
                <div className="inline-flex items-center px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300 mb-3">
                  {service.category}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300 text-sm mb-4">{service.description}</p>
                <div className="text-lg font-bold text-purple-400 mb-4">{service.price}</div>
                <Link
                  to="/services"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zion Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Discover what makes us the leading provider of innovative technology solutions.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Award className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proven Excellence</h3>
              <p className="text-slate-300">Award-winning solutions with proven track records across industries</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Brain className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI Innovation</h3>
              <p className="text-slate-300">Cutting-edge AI and machine learning technologies</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-slate-300">Military-grade security and compliance standards</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Support</h3>
              <p className="text-slate-300">24/7 dedicated support and strategic consulting</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500/10 to-blue-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Join the future of technology with Zion Tech Group's innovative services and solutions. 
                Get started with a free consultation today.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="flex items-center justify-center space-x-3 text-slate-300">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-slate-300">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-purple-500/20"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 border border-purple-400/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-200"
                >
                  Explore All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
