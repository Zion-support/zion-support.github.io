import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Target, 
  Users, 
  Zap, 
  Shield, 
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Eye,
  PenTool,
  Analytics,
  MessageSquare,
  Calendar,
  DollarSign,
  Heart,
  Smile,
  ThumbsUp,
  UserCheck,
  Monitor,
  Smartphone,
  AlertTriangle,
  TrendingDown,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  Cpu,
  Lock,
  Database,
  Network,
  Rocket,
  Atom,
  Cloud,
  Server,
  Code,
  Palette,
  Camera,
  Video,
  FileText,
  Search,
  ShoppingCart,
  CreditCard,
  Truck,
  Factory,
  Building,
  GraduationCap,
  Hospital,
  Car,
  Plane,
  Ship
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const ComprehensiveServicesShowcase2025 = () => {
  const aiServices = [
    {
      icon: Brain,
      title: "AI Content Intelligence Platform",
      description: "Transform your content strategy with AI-powered intelligence. Analyze performance, optimize engagement, and drive results.",
      features: ["Content Analysis", "Predictive Optimization", "Audience Intelligence", "Multi-platform Integration"],
      pricing: "Starting at $99/month",
      href: "/services/ai-content-intelligence-platform",
      category: "AI & Machine Learning"
    },
    {
      icon: Heart,
      title: "AI Customer Experience Analytics",
      description: "Transform your customer experience with AI-powered analytics. Understand, predict, and optimize every customer interaction.",
      features: ["Sentiment Analysis", "Customer Journey Mapping", "Predictive Behavior", "Personalization Engine"],
      pricing: "Starting at $149/month",
      href: "/services/ai-customer-experience-analytics",
      category: "AI & Machine Learning"
    },
    {
      icon: AlertTriangle,
      title: "AI Financial Risk Management",
      description: "Transform your financial risk management with AI-powered analytics. Monitor, predict, and mitigate risks effectively.",
      features: ["Risk Assessment", "Market Monitoring", "Predictive Modeling", "Portfolio Analysis"],
      pricing: "Starting at $299/month",
      href: "/services/ai-financial-risk-management",
      category: "AI & Machine Learning"
    },
    {
      icon: Brain,
      title: "AI Supply Chain Optimization",
      description: "Revolutionize your supply chain with AI-powered optimization and predictive analytics.",
      features: ["Demand Forecasting", "Route Optimization", "Inventory Management", "Risk Assessment"],
      pricing: "Starting at $199/month",
      href: "/services/ai-supply-chain-optimization",
      category: "AI & Machine Learning"
    },
    {
      icon: Shield,
      title: "AI Cybersecurity Platform",
      description: "Advanced AI-powered cybersecurity platform for threat detection and prevention.",
      features: ["Threat Detection", "Behavioral Analysis", "Incident Response", "Security Automation"],
      pricing: "Starting at $399/month",
      href: "/services/ai-cybersecurity-platform",
      category: "AI & Machine Learning"
    },
    {
      icon: Heart,
      title: "AI Healthcare Platform",
      description: "AI-powered healthcare solutions for diagnosis, treatment planning, and patient care optimization.",
      features: ["Medical Imaging", "Diagnostic Support", "Treatment Planning", "Patient Monitoring"],
      pricing: "Starting at $599/month",
      href: "/services/ai-healthcare-platform",
      category: "AI & Machine Learning"
    }
  ];

  const itServices = [
    {
      icon: Cloud,
      title: "Cloud & DevOps Solutions",
      description: "Comprehensive cloud infrastructure and DevOps automation services for modern applications.",
      features: ["Cloud Migration", "DevOps Automation", "Infrastructure as Code", "Monitoring & Logging"],
      pricing: "Starting at $150/hour",
      href: "/services/cloud-devops",
      category: "IT Infrastructure"
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      description: "End-to-end cybersecurity solutions to protect your digital assets and infrastructure.",
      features: ["Security Audits", "Penetration Testing", "Incident Response", "Security Training"],
      pricing: "Starting at $200/hour",
      href: "/services/cybersecurity",
      category: "IT Infrastructure"
    },
    {
      icon: Database,
      title: "Data & Analytics",
      description: "Data engineering, analytics, and business intelligence solutions for data-driven decisions.",
      features: ["Data Engineering", "Business Intelligence", "Machine Learning", "Data Governance"],
      pricing: "Starting at $175/hour",
      href: "/services/data-analytics",
      category: "IT Infrastructure"
    },
    {
      icon: Network,
      title: "Network Infrastructure",
      description: "Design, implementation, and management of enterprise network infrastructure.",
      features: ["Network Design", "Implementation", "Management", "Security"],
      pricing: "Starting at $125/hour",
      href: "/services/network-infrastructure",
      category: "IT Infrastructure"
    }
  ];

  const microSaaSServices = [
    {
      icon: Code,
      title: "Micro CRM Platform",
      description: "Lightweight, scalable CRM solution designed for small to medium businesses.",
      features: ["Contact Management", "Sales Pipeline", "Email Integration", "Analytics"],
      pricing: "Starting at $49/month",
      href: "/services/micro-crm",
      category: "Micro SAAS"
    },
    {
      icon: Search,
      title: "AI-Powered SEO Platform",
      description: "Intelligent SEO optimization platform with AI-driven insights and recommendations.",
      features: ["Keyword Research", "Content Optimization", "Ranking Analysis", "Competitive Intelligence"],
      pricing: "Starting at $79/month",
      href: "/services/ai-powered-seo",
      category: "Micro SAAS"
    },
    {
      icon: FileText,
      title: "LLM Content Studio",
      description: "AI-powered content creation and optimization platform for marketers and creators.",
      features: ["Content Generation", "SEO Optimization", "Brand Voice", "Performance Analytics"],
      pricing: "Starting at $89/month",
      href: "/services/llm-content-studio",
      category: "Micro SAAS"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Analytics",
      description: "Comprehensive analytics platform for e-commerce businesses to optimize performance.",
      features: ["Sales Analytics", "Customer Insights", "Conversion Optimization", "Inventory Management"],
      pricing: "Starting at $69/month",
      href: "/services/ecommerce-analytics",
      category: "Micro SAAS"
    }
  ];

  const industrySolutions = [
    {
      icon: Hospital,
      title: "Healthcare Technology",
      description: "Specialized technology solutions for healthcare providers and organizations.",
      features: ["Electronic Health Records", "Telemedicine", "Patient Management", "Compliance"],
      pricing: "Custom pricing",
      href: "/solutions/healthcare",
      category: "Industry Solutions"
    },
    {
      icon: Building,
      title: "Financial Services",
      description: "Technology solutions tailored for banks, insurance companies, and financial institutions.",
      features: ["Risk Management", "Compliance", "Digital Banking", "Analytics"],
      pricing: "Custom pricing",
      href: "/solutions/financial",
      category: "Industry Solutions"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Smart manufacturing solutions with IoT, AI, and automation technologies.",
      features: ["IoT Integration", "Predictive Maintenance", "Quality Control", "Supply Chain"],
      pricing: "Custom pricing",
      href: "/solutions/manufacturing",
      category: "Industry Solutions"
    },
    {
      icon: GraduationCap,
      title: "Education Technology",
      description: "Innovative technology solutions for educational institutions and online learning.",
      features: ["Learning Management", "Student Analytics", "Virtual Classrooms", "Assessment Tools"],
      pricing: "Custom pricing",
      href: "/solutions/education",
      category: "Industry Solutions"
    }
  ];

  const categories = [
    {
      name: "AI & Machine Learning",
      icon: Brain,
      services: aiServices,
      description: "Cutting-edge AI solutions to transform your business operations and decision-making."
    },
    {
      name: "IT Infrastructure",
      icon: Server,
      services: itServices,
      description: "Comprehensive IT infrastructure and managed services for modern enterprises."
    },
    {
      name: "Micro SAAS",
      icon: Code,
      services: microSaaSServices,
      description: "Scalable software-as-a-service solutions designed for specific business needs."
    },
    {
      name: "Industry Solutions",
      icon: Building,
      services: industrySolutions,
      description: "Specialized technology solutions tailored for specific industries and sectors."
    }
  ];

  return (
    <>
      <SEO 
        title="Comprehensive Services Showcase 2025 | Zion Tech Group"
        description="Explore our comprehensive range of AI services, IT solutions, and micro SAAS platforms. Transform your business with cutting-edge technology."
        keywords="AI services, IT solutions, micro SAAS, technology services, digital transformation, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-2 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                <span>2025 Comprehensive Services Showcase</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Comprehensive
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Services Showcase
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover our complete portfolio of AI-powered services, IT solutions, and micro SAAS platforms. 
                From cutting-edge artificial intelligence to robust infrastructure solutions, we have everything 
                you need to transform your business in 2025 and beyond.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Explore Services
                </button>
                <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Categories */}
        {categories.map((category, categoryIndex) => (
          <section key={categoryIndex} className={`py-20 px-6 ${categoryIndex % 2 === 1 ? 'bg-slate-800/30' : ''}`}>
            <div className="container mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <div className="inline-flex items-center space-x-2 bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </div>
                
                <h2 className="text-4xl font-bold text-white mb-4">
                  {category.name} Services
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  {category.description}
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/30 transition-colors">
                      <service.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 text-sm">
                      {service.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-xs text-gray-400 flex items-center">
                            <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-cyan-400">
                        {service.pricing}
                      </p>
                    </div>
                    
                    <Link 
                      to={service.href}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium group-hover:translate-x-1 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our comprehensive suite of services is designed to help you succeed in the digital age. 
                Let's discuss how we can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300">
                  Contact Our Team
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ComprehensiveServicesShowcase2025;
