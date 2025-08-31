import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import {
  Brain,
  Shield,
  Zap,
  Cloud,
  Database,
  Network,
  Smartphone,
  Lock,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  Globe2,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Building2,
  FileText,
  HelpCircle,
  BarChart,
  Settings,
  Palette,
  Rocket,
  Target,
  Handshake,
  Lightbulb,
  Cpu,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  MessageCircle,
  Search,
  Atom,
  Gamepad,
  Coins as CoinsIcon,
  Satellite as SatelliteIcon,
  Activity as ActivityIcon,
  FileText as FileTextIcon,
  MessageCircle as MessageCircleIcon,
  Search as SearchIcon,
  BarChart as BarChartIcon,
  Users2,
  Settings as SettingsIcon,
  Palette as PaletteIcon,
  ShoppingCart
} from 'lucide-react';

// Service Categories with comprehensive details
const serviceCategories = [
  {
    name: "AI & Machine Learning Solutions",
    description: "Cutting-edge artificial intelligence and machine learning services that transform business operations",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    count: 25,
    href: "/ai-services",
    services: [
      "AI-Powered Analytics & BI",
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "Predictive Analytics",
      "AI Chatbots & Virtual Assistants"
    ],
    pricing: {
      starter: "$99/month",
      professional: "$299/month",
      enterprise: "Custom"
    }
  },
  {
    name: "Micro SAAS Solutions",
    description: "Specialized software-as-a-service solutions designed for specific business needs",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    count: 30,
    href: "/micro-saas",
    services: [
      "AI Project Management",
      "Content Optimization Tools",
      "Customer Support Automation",
      "Data Analytics Platforms",
      "Workflow Orchestration",
      "Compliance Management"
    ],
    pricing: {
      starter: "$29/month",
      professional: "$99/month",
      enterprise: "$299/month"
    }
  },
  {
    name: "IT Infrastructure & Cloud",
    description: "Scalable cloud solutions and enterprise-grade infrastructure services",
    icon: Cloud,
    color: "from-green-500 to-emerald-500",
    count: 20,
    href: "/it-services",
    services: [
      "Cloud Migration & Strategy",
      "DevOps Automation",
      "Multi-Cloud Management",
      "Infrastructure as Code",
      "24/7 Monitoring & Support",
      "Disaster Recovery"
    ],
    pricing: {
      starter: "$199/month",
      professional: "$599/month",
      enterprise: "Custom"
    }
  },
  {
    name: "Cybersecurity & Compliance",
    description: "Advanced security solutions and compliance automation for modern enterprises",
    icon: Shield,
    color: "from-red-500 to-orange-500",
    count: 18,
    href: "/cybersecurity",
    services: [
      "Threat Detection & Response",
      "Zero Trust Architecture",
      "SOC2 Compliance Automation",
      "Security Audits & Assessments",
      "Incident Response Platform",
      "Vendor Risk Management"
    ],
    pricing: {
      starter: "$149/month",
      professional: "$399/month",
      enterprise: "Custom"
    }
  },
  {
    name: "Quantum Computing Solutions",
    description: "Next-generation quantum computing services and hybrid AI platforms",
    icon: Atom,
    color: "from-indigo-500 to-purple-500",
    count: 12,
    href: "/quantum-solutions",
    services: [
      "Quantum Neural Networks",
      "Hybrid AI-Quantum Platforms",
      "Quantum Cryptography",
      "Optimization Algorithms",
      "Research & Development",
      "Enterprise Integration"
    ],
    pricing: {
      starter: "$499/month",
      professional: "$1,299/month",
      enterprise: "Custom"
    }
  },
  {
    name: "Digital Transformation",
    description: "End-to-end digital transformation consulting and implementation services",
    icon: Rocket,
    color: "from-yellow-500 to-orange-500",
    count: 15,
    href: "/digital-transformation",
    services: [
      "Process Automation",
      "Legacy System Modernization",
      "Change Management",
      "Digital Strategy Consulting",
      "Technology Roadmapping",
      "Performance Optimization"
    ],
    pricing: {
      starter: "$299/month",
      professional: "$799/month",
      enterprise: "Custom"
    }
  }
];

// Featured Services with detailed information
const featuredServices = [
  {
    title: "AI-Powered Business Intelligence",
    description: "Transform your data into actionable insights with our advanced AI analytics platform",
    icon: BarChart3,
    path: "/services/ai-business-intelligence",
    features: [
      "Real-time Data Processing",
      "Predictive Analytics",
      "Custom Dashboards",
      "API Integration",
      "Automated Reporting",
      "Multi-source Data Connectors"
    ],
    pricing: "From $99/month",
    benefits: [
      "Increase decision-making speed by 300%",
      "Reduce manual reporting by 80%",
      "Improve forecast accuracy by 40%"
    ]
  },
  {
    title: "Cloud FinOps Optimizer",
    description: "Optimize your cloud spending with intelligent cost management and automation",
    icon: Cloud,
    path: "/services/finops-advisor",
    features: [
      "Cost Optimization",
      "Resource Management",
      "Automated Scaling",
      "Budget Alerts",
      "Performance Monitoring",
      "Multi-cloud Support"
    ],
    pricing: "From $149/month",
    benefits: [
      "Reduce cloud costs by 25-40%",
      "Improve resource utilization by 60%",
      "Automate cost optimization workflows"
    ]
  },
  {
    title: "AI Cybersecurity Suite",
    description: "Advanced threat detection and response powered by artificial intelligence",
    icon: Shield,
    path: "/services/ai-cybersecurity-suite",
    features: [
      "AI Threat Detection",
      "Behavioral Analysis",
      "Automated Response",
      "24/7 Monitoring",
      "Compliance Reporting",
      "Incident Management"
    ],
    pricing: "From $199/month",
    benefits: [
      "Detect threats 10x faster than traditional methods",
      "Reduce false positives by 70%",
      "Automate 80% of security responses"
    ]
  },
  {
    title: "Quantum AI Hybrid Platform",
    description: "Revolutionary platform combining quantum computing with artificial intelligence",
    icon: Atom,
    path: "/services/ai-quantum-hybrid-platform",
    features: [
      "Quantum Neural Networks",
      "Hybrid AI Algorithms",
      "Optimization Solvers",
      "Research Tools",
      "Enterprise APIs",
      "Performance Analytics"
    ],
    pricing: "From $499/month",
    benefits: [
      "Solve complex problems 1000x faster",
      "Unlock new AI capabilities",
      "Future-proof your technology stack"
    ]
  }
];

// Industry Solutions
const industrySolutions = [
  {
    name: "Healthcare",
    icon: Activity,
    description: "AI-powered healthcare analytics, patient management, and compliance solutions",
    services: ["Patient Analytics", "Compliance Automation", "Clinical Decision Support", "Telemedicine Platforms"],
    pricing: "From $299/month"
  },
  {
    name: "Financial Services",
    icon: CoinsIcon,
    description: "Fintech solutions including AI trading, risk management, and compliance automation",
    services: ["AI Trading Platforms", "Risk Analytics", "Compliance Automation", "Fraud Detection"],
    pricing: "From $399/month"
  },
  {
    name: "Manufacturing",
    icon: Cpu,
    description: "Smart manufacturing solutions with IoT, predictive maintenance, and quality control",
    services: ["Predictive Maintenance", "Quality Control", "Supply Chain Optimization", "IoT Integration"],
    pricing: "From $249/month"
  },
  {
    name: "Retail & E-commerce",
    icon: ShoppingCart,
    description: "Customer experience optimization, inventory management, and AI-powered personalization",
    services: ["Customer Analytics", "Inventory Optimization", "Personalization Engines", "Omnichannel Solutions"],
    pricing: "From $199/month"
  }
];

// Animation variants
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

// Enhanced Service Card Component
const ServiceCard = ({ service, index }: { service: any; index: number }) => (
  <motion.div
    variants={itemVariants}
    className="group relative"
  >
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/10 hover:-translate-y-2">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <service.icon className="w-8 h-8 text-white" />
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-white">{service.count}</div>
          <div className="text-sm text-slate-400">Services</div>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
        {service.name}
      </h3>
      
      <p className="text-slate-300 mb-6 leading-relaxed">
        {service.description}
      </p>
      
      <div className="space-y-2 mb-6">
        {service.services.map((s: string, idx: number) => (
          <div key={idx} className="flex items-center text-sm text-slate-400">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
            {s}
          </div>
        ))}
      </div>

      <div className="mb-6 p-4 bg-slate-800/30 rounded-lg border border-slate-600/20">
        <div className="text-sm text-slate-400 mb-2">Pricing:</div>
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div>
            <div className="text-cyan-400 font-medium">Starter</div>
            <div className="text-white">{service.pricing.starter}</div>
          </div>
          <div>
            <div className="text-cyan-400 font-medium">Pro</div>
            <div className="text-white">{service.pricing.professional}</div>
          </div>
          <div>
            <div className="text-cyan-400 font-medium">Enterprise</div>
            <div className="text-white">{service.pricing.enterprise}</div>
          </div>
        </div>
      </div>
      
      <Link
        to={service.href}
        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200 group-hover:translate-x-1"
      >
        Explore {service.name}
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
      </Link>
    </div>
  </motion.div>
);

// Featured Service Card Component
const FeaturedServiceCard = ({ service, index }: { service: any; index: number }) => (
  <motion.div
    variants={itemVariants}
    className="group"
  >
    <Link to={service.path} className="block h-full">
      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6 h-full flex flex-col justify-between hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/10 hover:-translate-y-2">
        <div className="text-center mb-4">
          <div className={`w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
            <service.icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-slate-300 text-sm mb-4 leading-relaxed">
            {service.description}
          </p>
        </div>

        <div className="space-y-3 mb-4">
          <div className="text-sm text-slate-400 mb-2">Key Features:</div>
          {service.features.slice(0, 4).map((feature: string, idx: number) => (
            <div key={idx} className="flex items-center text-xs text-slate-300">
              <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
              {feature}
            </div>
          ))}
        </div>

        <div className="space-y-3 mb-4">
          <div className="text-sm text-slate-400 mb-2">Benefits:</div>
          {service.benefits.map((benefit: string, idx: number) => (
            <div key={idx} className="flex items-center text-xs text-slate-300">
              <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
              {benefit}
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="text-cyan-400 text-sm font-medium mb-2">{service.pricing}</div>
          <div className="text-xs text-slate-400">Click to learn more</div>
        </div>
      </div>
    </Link>
  </motion.div>
);

// Industry Solution Card Component
const IndustrySolutionCard = ({ solution, index }: { solution: any; index: number }) => (
  <motion.div
    variants={itemVariants}
    className="group"
  >
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/10 hover:-translate-y-2">
      <div className="text-center mb-4">
        <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg">
          <solution.icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
          {solution.name}
        </h3>
        <p className="text-slate-300 text-sm mb-4 leading-relaxed">
          {solution.description}
        </p>
      </div>

      <div className="space-y-2 mb-4">
        {solution.services.map((service: string, idx: number) => (
          <div key={idx} className="flex items-center text-xs text-slate-400">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3"></div>
            {service}
          </div>
        ))}
      </div>

      <div className="text-center">
        <div className="text-emerald-400 text-sm font-medium">{solution.pricing}</div>
      </div>
    </div>
  </motion.div>
);

// Contact Information Component
const ContactInfo = () => (
  <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8">
    <h3 className="text-2xl font-bold text-white mb-6 text-center">Get in Touch</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="flex items-center space-x-3">
        <Phone className="h-6 w-6 text-cyan-400" />
        <div>
          <div className="text-white font-medium">Phone</div>
          <div className="text-slate-300">+1 302 464 0950</div>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <Mail className="h-6 w-6 text-cyan-400" />
        <div>
          <div className="text-white font-medium">Email</div>
          <div className="text-slate-300">kleber@ziontechgroup.com</div>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <MapPin className="h-6 w-6 text-cyan-400" />
        <div>
          <div className="text-white font-medium">Address</div>
          <div className="text-slate-300">364 E Main St STE 1008<br />Middletown DE 19709</div>
        </div>
      </div>
    </div>
  </div>
);

// Main Component
const ComprehensiveServicesOverview2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <>
      <SEO 
        title="Comprehensive Services Overview 2025 - Zion Tech Group"
        description="Explore Zion Tech Group's comprehensive range of AI solutions, micro SAAS services, IT infrastructure, cybersecurity, and quantum computing solutions. Transform your business with cutting-edge technology."
        keywords="AI solutions, micro SAAS, IT services, cybersecurity, quantum computing, digital transformation, Zion Tech Group"
        canonical="https://ziontechgroup.com/comprehensive-services-overview-2025"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Comprehensive <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Services Overview 2025</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                Discover our complete portfolio of innovative technology solutions designed to transform your business and drive growth in the digital age
              </p>
            </motion.div>

            {/* Tab Navigation */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {['all', 'ai-ml', 'micro-saas', 'it-infrastructure', 'cybersecurity', 'quantum', 'digital-transformation'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white'
                  }`}
                >
                  {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Service Categories
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Explore our comprehensive range of technology solutions organized by category
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {serviceCategories.map((category, index) => (
                <ServiceCard key={category.name} service={category} index={index} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 bg-gradient-to-b from-white/5 to-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Services
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our most popular and innovative solutions that deliver exceptional value
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {featuredServices.map((service, index) => (
                <FeaturedServiceCard key={service.title} service={service} index={index} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industry Solutions
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Tailored solutions designed for specific industry challenges and requirements
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {industrySolutions.map((solution, index) => (
                <IndustrySolutionCard key={solution.name} solution={solution} index={index} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Contact our team to discuss how our services can transform your business
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ContactInfo />
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-white font-medium">Expert Team</div>
                        <div className="text-slate-300 text-sm">Certified professionals with 10+ years of experience</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-white font-medium">Innovation First</div>
                        <div className="text-slate-300 text-sm">Cutting-edge technology and forward-thinking solutions</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-white font-medium">24/7 Support</div>
                        <div className="text-slate-300 text-sm">Round-the-clock technical support and monitoring</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-white font-medium">Proven Results</div>
                        <div className="text-slate-300 text-sm">Track record of successful implementations and ROI</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 text-lg shadow-lg hover:shadow-xl"
                  >
                    Schedule a Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ComprehensiveServicesOverview2025;