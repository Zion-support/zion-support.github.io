 } from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2027               } from '@/data/innovativeMicroSaasServices2027';
import { EMERGING_TECH_SERVICES_2027               } from '@/data/emergingTechServices2027';
export default function InnovativeServicesShowcase2027(...args[]: any):  {
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<any>('grid');
  const [sortBy, setSortBy] = useState<any>('aiScore');
  const allServices = [...INNOVATIVE_MICRO_SAAS_SERVICES_2027, ...EMERGING_TECH_SERVICES_2027];
  const categories = ['All', ...Array.from(new Set(allServices.map(service => service.category)))];
  const filteredServices = allServices
    .filter(service =>
      (selectedCategory === 'All' || service.category === selectedCategory) &&
      (searchQuery === '' ||
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
    )
    .sort((a, b) => b[sortBy] - a[sortBy]);
  const containerVariants = {
    hidden: { opacity: 0 },;
    visible: {;
      opacity: 1,;
      transition: {;
        staggerChildren: 0.1;
      };
    };
  };
  const itemVariants = {
  hidden: { y: 20,
  opacity: 0 
},
    visible: {
      y: 0,;
      opacity: 1,;
      transition: {;
        duration: 0.5,;
        ease: "easeOut";
      };
    };
  };
  const cardVariants = {
  hidden: { scale: 0.8,
  opacity: 0 
},
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
=======
import React from 'react';
import { motion } from 'framer-motion';
import { EnhancedSEO, SEOConfigs } from '../components/EnhancedSEO.tsx';
import { SEO } from "@/components/SEO";
import { Link } from 'react-router-dom';
import {
  Brain,
  Shield,
  Heart,
  DollarSign,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Target,
  Globe,
  Lock,
  Activity,
  BarChart3,
  Cpu,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  Cloud,
  Rocket,
  Lightbulb,
  Award,
  Clock,
  Phone,
  Mail,
  MapPin,
  Atom,
  Truck,
  Search,
  FileText,
  GraduationCap,
  Home,
  Building2,
  Eye,
  AlertTriangle,
  Microscope,
  Stethoscope,
  Scale,
  BookOpen,
  Satellite,
  Workflow,
  Database as DatabaseIcon,
  Workflow as WorkflowIcon,
  MessageCircle,
  BarChart,
  Users2,
  Settings,
  Palette,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Target2
} from 'lucide-react';

const InnovativeServicesShowcase2027 = () => {
  const featuredServices = [
    {
      title: "AI Autonomous Financial Advisor",
      description: "Revolutionary AI-powered financial advice and portfolio optimization with 99.7% accuracy",
      icon: DollarSign,
      color: "from-green-500 to-cyan-500",
      link: "/services/ai-autonomous-financial-advisor",
      features: ["Investment Analysis", "Portfolio Optimization", "Risk Management", "Market Prediction"],
      pricing: "Starting at $99/month"
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
    },
    {
      title: "AI Autonomous Healthcare Diagnostics",
      description: "Transform healthcare with AI-powered diagnostics and medical image analysis",
      icon: Heart,
      color: "from-red-500 to-blue-500",
      link: "/services/ai-autonomous-healthcare-diagnostics",
      features: ["Medical Imaging", "Disease Detection", "Predictive Analytics", "Clinical Support"],
      pricing: "Starting at $499/month"
    },
    {
      title: "AI Autonomous Cybersecurity Operations",
      description: "Next-generation AI-powered cybersecurity with autonomous threat response",
      icon: Shield,
      color: "from-orange-500 to-red-500",
      link: "/services/ai-autonomous-cybersecurity-operations",
      features: ["Threat Detection", "Autonomous Response", "Zero Trust", "24/7 Monitoring"],
      pricing: "Starting at $299/month"
    },
    {
      title: "AI Autonomous Business Operations",
      description: "Transform your business with AI that autonomously manages and optimizes operations",
      icon: Brain,
      color: "from-purple-500 to-blue-500",
      link: "/services/ai-autonomous-business-operations-platform",
      features: ["Process Automation", "Decision Making", "Resource Optimization", "Performance Analytics"],
      pricing: "Starting at $1,999/month"
    },
    {
      title: "Quantum Edge Computing Solutions",
      description: "Revolutionary quantum-enhanced edge computing for exponential performance",
      icon: Atom,
      color: "from-cyan-500 to-purple-500",
      link: "/services/quantum-edge-computing-solutions",
      features: ["Quantum Processing", "Edge Computing", "AI Integration", "Real-time Analytics"],
      pricing: "Starting at $2,999/month"
    },
    {
      title: "AI Space Technology Platform",
      description: "Next-generation space technology and exploration with AI-powered insights",
      icon: Satellite,
      color: "from-blue-500 to-indigo-500",
      link: "/services/ai-space-technology-platform",
      features: ["Satellite Analytics", "Space Data Processing", "Mission Planning", "Earth Observation"],
      pricing: "Starting at $4,999/month"
    }
  ];

  const serviceCategories = [
    {
      title: "AI & Automation",
      icon: Brain,
      color: "text-zion-cyan",
      services: [
        { name: "AI Autonomous Business Operations", href: "/services/ai-autonomous-business-operations-platform" },
        { name: "AI Project Management Platform", href: "/services/ai-project-management-platform" },
        { name: "AI Workflow Orchestrator", href: "/services/ai-workflow-orchestrator" },
        { name: "AI Enterprise Workflow Automation", href: "/services/ai-enterprise-workflow-automation" }
      ]
    },
    {
      title: "Financial Services",
      icon: DollarSign,
      color: "text-green-400",
      services: [
        { name: "AI Autonomous Financial Advisor", href: "/services/ai-autonomous-financial-advisor" },
        { name: "AI Financial Trading Platform", href: "/services/ai-financial-trading-platform" },
        { name: "AI Financial Risk Management", href: "/services/ai-financial-risk-management-enhanced" },
        { name: "Cloud FinOps Optimizer", href: "/services/cloud-finops-optimizer" }
      ]
    },
    {
      title: "Healthcare & Life Sciences",
      icon: Heart,
      color: "text-red-400",
      services: [
        { name: "AI Autonomous Healthcare Diagnostics", href: "/services/ai-autonomous-healthcare-diagnostics" },
        { name: "AI Healthcare Analytics Platform", href: "/services/ai-healthcare-analytics-platform" },
        { name: "AI Mental Health Support Platform", href: "/services/ai-mental-health-support-platform" },
        { name: "AI Smart Home Energy Management", href: "/services/ai-smart-home-energy-management-platform" }
      ]
    },
    {
      title: "Cybersecurity & Defense",
      icon: Shield,
      color: "text-orange-400",
      services: [
        { name: "AI Autonomous Cybersecurity Operations", href: "/services/ai-autonomous-cybersecurity-operations" },
        { name: "AI Cybersecurity Threat Intelligence", href: "/services/ai-cybersecurity-threat-intelligence" },
        { name: "Quantum AI Cybersecurity Platform", href: "/services/quantum-ai-cybersecurity-platform" },
        { name: "Zero Trust Network Architecture", href: "/services/zero-trust-network-architecture" }
      ]
    },
    {
      title: "Quantum & Advanced Computing",
      icon: Atom,
      color: "text-purple-400",
      services: [
        { name: "Quantum Edge Computing Solutions", href: "/services/quantum-edge-computing-solutions" },
        { name: "AI Quantum Neural Network Platform", href: "/services/ai-quantum-neural-network-platform" },
        { name: "AI Quantum Computing Solutions", href: "/services/ai-quantum-computing-solutions" },
        { name: "Quantum AI Trading Platform", href: "/services/quantum-ai-trading-platform" }
      ]
    },
    {
      title: "Space & Aerospace",
      icon: Satellite,
      color: "text-blue-400",
      services: [
        { name: "AI Space Technology Platform", href: "/services/ai-space-technology-platform" },
        { name: "Space Tech Solutions", href: "/services/space-tech" },
        { name: "Satellite Data Analytics", href: "/services/satellite-data-analytics" },
        { name: "Aerospace AI Solutions", href: "/services/aerospace-ai-solutions" }
      ]
    }
  ];

  const benefits = [
    "Increase operational efficiency by 40-80%",
    "Reduce costs by 25-50% through automation",
    "Improve accuracy and decision-making by 90%+",
    "Enable 24/7 autonomous operations",
    "Provide real-time insights and analytics",
    "Scale operations without proportional cost increase"
  ];

  const industries = [
    "Healthcare",
    "Financial Services",
    "Manufacturing",
    "Retail",
    "Government",
    "Education",
    "Energy",
    "Transportation",
    "Telecommunications",
    "Aerospace"
  ];

  return (
                  className="appearance-none bg-zion-blue-light/20 border border-zion-purple/20 rounded-lg px-4 py-3 text-white focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent pr-10"
                >
                  {categories.map(category               => (
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5 pointer-events-none" />
=======
    <EnhancedSEO data={SEOConfigs.innovativeServicesShowcase2027}>
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate-dark to-zion-blue-dark">
        <SEO
          title="Innovative Services Showcase 2027 - AI & Technology Solutions"
          description="Discover Zion Tech Group's revolutionary AI services, quantum computing solutions, and autonomous operations platforms. Transform your business with cutting-edge technology for 2027 and beyond."
          keywords="AI services, quantum computing, autonomous operations, healthcare AI, financial AI, cybersecurity AI, space technology, edge computing, Zion Tech Group 2027"
          canonical="https://ziontechgroup.com/innovative-services-showcase-2027"
        />
        
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                Innovation Showcase 2027
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Revolutionary AI Services for
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  2027 and Beyond
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Experience the future of technology with our comprehensive suite of AI-powered solutions, 
                quantum computing platforms, and autonomous operations systems designed to transform 
                industries and drive unprecedented growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+1 302 464 0950"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  Call Now: +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-purple-400/50 text-purple-400 font-semibold rounded-xl hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Get Consultation
                </a>
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-20 bg-zion-blue-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Featured Revolutionary Services
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our flagship AI services that are transforming industries and setting new standards 
                for innovation and performance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link to={service.link} className="block">
                    <div className="bg-zion-blue-dark border border-zion-purple/30 rounded-2xl p-8 h-full hover:border-zion-cyan/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-zion-cyan/20">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-zinc-400 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-zion-cyan mb-3">Key Features:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                              <span className="text-xs text-gray-400">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-zion-cyan font-medium mb-2">{service.pricing}</div>
                        <div className="flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors justify-center">
                          <span className="text-sm font-medium">Learn More</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories Section */}
        <section className="py-20 bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Comprehensive Service Categories
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Explore our complete range of AI-powered solutions organized by industry 
                and technology specialization.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zion-blue-dark border border-zion-purple/30 rounded-2xl p-8 hover:border-zion-cyan/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color.replace('text-', 'bg-')}/20 rounded-xl flex items-center justify-center`}>
                      <category.icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <h3 className={`text-xl font-bold ${category.color}`}>{category.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex}>
                        <Link 
                          to={service.href} 
                          className="text-zion-slate-light hover:text-white transition-all duration-300 text-sm flex items-center group"
                        >
                          <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-zion-blue-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Experience the future of technology with our AI-powered solutions that deliver 
                unprecedented results and competitive advantages.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-zion-cyan/25">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-lg text-white leading-relaxed">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Industries We Transform
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our AI solutions are designed to revolutionize operations across diverse industries, 
                from healthcare to aerospace, delivering measurable results and competitive advantages.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-6 text-center hover:border-zion-cyan/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <h3 className="text-sm font-medium text-white">{industry}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                Join leading organizations that have already revolutionized their operations 
                with our AI-powered solutions and autonomous systems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a
                  href="tel:+1 302 464 0950"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  Call Now: +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-purple-400/50 text-purple-400 font-semibold rounded-xl hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Get Free Consultation
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-300">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
                  <span>24/7 expert support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-zion-blue-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-zion-cyan mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <a href="tel:+1 302 464 0950" className="text-gray-300 hover:text-zion-cyan transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-zion-cyan mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-zion-cyan transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-zion-cyan mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
                transition={{ duration: anyanyanyanyanyanyanyanyanyanyanyanyany0.3 }}
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              >
                {filteredServices.map((service, index)  => (
                  <motion.div
                    key={service.id}
                    variants={viewMode === 'grid' ? itemVariants : { /* empty */ }}
                    className={viewMode === 'grid' ? '' : 'bg-zion-blue-dark/30 backdrop-blur-md rounded-2xl p-6 border border-zion-purple/20'}
                    {viewMode === 'grid' ? (
                      <motion.div
                        className="bg-zion-blue-dark/30 backdrop-blur-md rounded-2xl p-6 border border-zion-purple/20 h-full group cursor-pointer"
                        variants={cardVariants}
                        whileHover="hover"
                        onClick = {
  () => window.open(service.website,
  '_blank')
}
                      >
                        {/* Service Image */}
                        <div className="relative mb-6 overflow-hidden rounded-lg">
                          <img
                            src={service.images[0]}
                            alt={service.title}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute top-4 right-4 bg-zion-cyan text-black px-3 py-1 rounded-full text-sm font-semibold">
                            {service.category}
                          </div>
                          {service.featured && (
                            <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                              <Star className="w-4 h-4" />
                              Featured
                            </div>
                          )}
                        </div>
                        {/* Service Content */}
                        <div className="space-y-4">
                          <h3 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-gray-300 text-sm line-clamp-3">
                            {service.description}
                          </p>
                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            {service.tags.slice(0, 3).map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-2 py-1 bg-zion-purple/20 text-zion-cyan text-xs rounded-full border border-zion-purple/30"
                                {tag}
                              </span>
                            ))}
                          </div>
                          {/* Stats */}
                          <div className="flex items-center justify-between pt-4 border-t border-zion-purple/20">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1">
                                <Brain className="w-4 h-4 text-zion-cyan" />
                                <span className="text-sm text-gray-300">{service.aiScore}%</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-500" />
                                <span className="text-sm text-gray-300">{service.rating}</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-zion-cyan">{service.currency}{service.price}</div>
                              <div className="text-xs text-gray-400">per {service.pricingModel}</div>
                            </div>
                          </div>
                          {/* CTA Button */}
                          <button className="w-full mt-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-black font-semibold py-3 px-6 rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="flex gap-6">
                        {/* Service Image */}
                        <div className="relative w-48 h-32 overflow-hidden rounded-lg flex-shrink-0">
                          <img
                            src={service.images[0]}
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 right-2 bg-zion-cyan text-black px-2 py-1 rounded-full text-xs font-semibold">
                            {service.category}
                          </div>
                        </div>
                        {/* Service Content */}
                        <div className="flex-1 space-y-3">
                          <div className="flex items-start justify-between">
                            <h3 className="text-xl font-bold text-white">{service.title}</h3>
                            <div className="text-right">
                              <div className="text-lg font-bold text-zion-cyan">{service.currency}{service.price}</div>
                              <div className="text-xs text-gray-400">per {service.pricingModel}</div>
                            </div>
                          </div>
                          <p className="text-gray-300 text-sm">{service.description}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <div className="flex items-center gap-1">
                              <Brain className="w-4 h-4 text-zion-cyan" />
                              AI Score: {service.aiScore}%
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-500" />
                              Rating: {service.rating}
                            </div>
                            <div className="flex items-center gap-1">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              {service.availability}
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                              {service.tags.slice(0, 4).map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="px-2 py-1 bg-zion-purple/20 text-zion-cyan text-xs rounded-full border border-zion-purple/30"
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <button
                              onClick={() => window.open(service.website, '_blank')}
                              className="bg-gradient-to-r from-zion-cyan to-zion-blue text-black font-semibold py-2 px-4 rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 flex items-center gap-2"
                              View Details
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search criteria or filters</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>
      {/* CTA Section */}
      <motion.section
        className="relative z-10 px-6 pb-20"
        initial = {
  { opacity: 0,
  y: 30 
}}
        animate = {
  { opacity: 1,
  y: 0 
}}
        transition = {
  { duration: 0.8,
  delay: 1.2 
}}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 backdrop-blur-md rounded-2xl p-12 border border-zion-cyan/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our experts to discuss how these innovative services can drive your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-black font-semibold rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
                Contact Our Team
              </Link>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-black transition-all duration-300"
                Call +1 302 464 0950
              </a>
            </div>;
          </div>;
        </div>;
      </motion.section>;
    </div>;
=======
        </section>
      </div>
    </EnhancedSEO>
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
  );
};

export default InnovativeServicesShowcase2027;
