import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Database, 
  Globe, 
  Cpu, 
  Zap, 
  Heart, 
  Scale, 
  Rocket,
  Atom,
  Target,
  TrendingUp,
  Users,
  PenTool,
  Eye,
  Server,
  Smartphone,
  Network,
  Clock,
  ShoppingCart,
  Lock,
  FileText,
  Settings,
  Key,
  Leaf,
  Building2,
  Car,
  Home,
  Factory,
  City,
  CheckCircle,
  ArrowUpRight,
  Play,
  MailIcon,
  BarChart3,
  Code,
  Truck,
  Gauge,
  GitFork,
  Award,
  Crown,
  Sparkles,
  Flame,
  Sun,
  Moon,
  Infinity
} from 'lucide-react';
import { SEO } from '../components/SEO';
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

<<<<<<< HEAD
const ServicesPage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900">Our Services</h1>
      <p className="mt-4 text-lg text-gray-700">Discover our comprehensive technology solutions.</p>
=======
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Smartphone, 
  Shield, 
  Cloud, 
  Globe,
  Zap,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
  DollarSign
} from 'lucide-react';

const ServiceCard = ({ title, description, icon, href, features, price, popular = false }) => (
  <motion.div 
    className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300 border ${
      popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-gray-700/50'
    }`}
    whileHover={{ y: -5, scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    {popular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </span>
      </div>
    )}
    
    <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    
    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
      {title}
    </h3>
    
    <p className="text-gray-300 mb-6 leading-relaxed">
      {description}
    </p>

    {features && (
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    )}

    {price && (
      <div className="text-3xl font-bold text-white mb-6">
        {price}
      </div>
    )}

    <Link
      to={href}
      className="inline-flex items-center w-full justify-center bg-gradient-to-r from-cyan-400 to-blue-500 text-black py-3 px-6 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 group"
    >
      Learn More
      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Link>
  </motion.div>
);

const Services = () => {
  const mainServices = [
    {
<<<<<<< HEAD
      id: 'ai-business-intelligence',
      title: 'AI Business Intelligence',
      description: 'Advanced machine learning and data science solutions for business transformation',
      icon: Brain,
      features: [
        'Predictive Analytics & Forecasting',
        'Customer Behavior Analysis',
        'Market Trend Identification',
        'Real-time Data Processing',
        'Automated Decision Making',
        'Performance Optimization'
      ],
      color: 'from-purple-500 to-cyan-500'
    },
    {
      id: 'ai-healthcare',
      title: 'AI Healthcare Diagnostics',
      description: 'Revolutionary AI-powered healthcare solutions for improved patient outcomes',
      icon: Heart,
      features: [
        'Medical Image Analysis',
        'Diagnostic Assistance',
        'Patient Risk Assessment',
        'Treatment Optimization',
        'Drug Discovery Support',
        'Healthcare Workflow Automation'
      ],
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'ai-legal-tech',
      title: 'AI Legal Tech Platform',
      description: 'Intelligent legal document analysis and contract management solutions',
      icon: Scale,
      features: [
        'Contract Analysis & Review',
        'Legal Document Classification',
        'Compliance Monitoring',
        'Risk Assessment',
        'Legal Research Automation',
        'Document Generation'
      ],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'ai-research',
      title: 'AI Research & Discovery',
      description: 'Accelerating scientific research with AI-powered discovery platforms',
      icon: Atom,
      features: [
        'Literature Review Automation',
        'Hypothesis Generation',
        'Data Pattern Recognition',
        'Research Collaboration Tools',
        'Publication Analysis',
        'Grant Opportunity Identification'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'ai-green-tech',
      title: 'AI Green Technology',
      description: 'Sustainable technology solutions powered by artificial intelligence',
      icon: Leaf,
      features: [
        'Energy Consumption Optimization',
        'Carbon Footprint Tracking',
        'Sustainable Supply Chain',
        'Environmental Monitoring',
        'Green Building Management',
        'Renewable Energy Integration'
      ],
      color: 'from-green-500 to-blue-500'
    },
    {
      id: 'ai-metaverse',
      title: 'AI Metaverse Platform',
      description: 'Next-generation virtual reality and augmented reality experiences',
      icon: Globe,
      features: [
        'Virtual World Creation',
        'AI-Powered Avatars',
        'Immersive Experiences',
        'Virtual Commerce',
        'Social Interaction Tools',
        'Content Generation'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ai-space-tech',
      title: 'AI Space Technology',
      description: 'Advanced AI solutions for space exploration and satellite operations',
      icon: Rocket,
      features: [
        'Satellite Data Analysis',
        'Space Debris Tracking',
        'Mission Planning',
        'Astronomical Research',
        'Space Weather Monitoring',
        'Autonomous Spacecraft'
      ],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'ai-fintech',
      title: 'AI FinTech Platform',
      description: 'Intelligent financial technology solutions for modern banking',
      icon: TrendingUp,
      features: [
        'Fraud Detection',
        'Risk Assessment',
        'Algorithmic Trading',
        'Customer Service Automation',
        'Credit Scoring',
        'Investment Analysis'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'ai-supply-chain',
      title: 'AI Supply Chain',
      description: 'Optimized supply chain management with AI-driven insights',
      icon: Truck,
      features: [
        'Demand Forecasting',
        'Inventory Optimization',
        'Route Planning',
        'Supplier Risk Assessment',
        'Quality Control',
        'Cost Optimization'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'ai-qa',
      title: 'AI Quality Assurance',
      description: 'Automated quality testing and assurance for software and products',
      icon: CheckCircle,
      features: [
        'Automated Testing',
        'Bug Detection',
        'Performance Monitoring',
        'User Experience Testing',
        'Regression Testing',
        'Test Case Generation'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'ai-marketing-automation',
      title: 'AI Marketing Automation',
      description: 'Intelligent marketing automation for personalized customer engagement',
      icon: Target,
      features: [
        'Customer Segmentation',
        'Personalized Content',
        'Campaign Optimization',
        'Lead Scoring',
        'Marketing Analytics',
        'A/B Testing Automation'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ai-customer-support',
      title: 'AI Customer Support',
      description: '24/7 intelligent customer support with natural language processing',
      icon: Users,
      features: [
        'Chatbot Support',
        'Ticket Classification',
        'Knowledge Base Management',
        'Customer Sentiment Analysis',
        'Automated Responses',
        'Support Ticket Routing'
      ],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'ai-hr',
      title: 'AI HR & Recruitment',
      description: 'Streamlined human resources and recruitment processes',
      icon: Users,
      features: [
        'Resume Screening',
        'Candidate Matching',
        'Interview Scheduling',
        'Performance Analytics',
        'Employee Onboarding',
        'Talent Management'
      ],
      color: 'from-green-500 to-blue-500'
    },
    {
      id: 'ai-content-creation',
      title: 'AI Content Creation',
      description: 'Automated content generation and optimization tools',
      icon: PenTool,
      features: [
        'Article Generation',
        'Social Media Content',
        'Email Marketing Copy',
        'SEO Optimization',
        'Content Personalization',
        'Multilingual Content'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'zero-trust-security',
      title: 'Zero Trust Security',
      description: 'Advanced cybersecurity with zero-trust architecture principles',
      icon: Shield,
      features: [
        'Identity Verification',
        'Access Control',
        'Network Segmentation',
        'Threat Detection',
        'Incident Response',
        'Security Monitoring'
      ],
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'ai-ethics-guardian',
      title: 'AI Ethics & Governance',
      description: 'Ensuring responsible AI development and deployment',
      icon: Scale,
      features: [
        'Bias Detection',
        'Fairness Monitoring',
        'Transparency Tools',
        'Compliance Management',
        'Ethical Guidelines',
        'Audit Trails'
      ],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions for modern digital threats',
      icon: Lock,
      features: [
        'Threat Intelligence',
        'Vulnerability Assessment',
        'Penetration Testing',
        'Security Training',
        'Incident Response',
        'Compliance Management'
      ],
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      description: 'Streamlined cloud infrastructure and development operations',
      icon: Cloud,
      features: [
        'Cloud Migration',
        'Infrastructure as Code',
        'Continuous Integration',
        'Automated Deployment',
        'Monitoring & Logging',
        'Cost Optimization'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Comprehensive data analysis and business intelligence solutions',
      icon: BarChart3,
      features: [
        'Data Visualization',
        'Statistical Analysis',
        'Predictive Modeling',
        'Real-time Dashboards',
        'Data Warehousing',
        'ETL Processes'
      ],
      color: 'from-green-500 to-blue-500'
    },
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure',
      description: 'Robust and scalable IT infrastructure solutions',
      icon: Server,
      features: [
        'Network Design',
        'Server Management',
        'Storage Solutions',
        'Backup & Recovery',
        'Performance Monitoring',
        'Capacity Planning'
      ],
      color: 'from-gray-500 to-blue-500'
    },
    {
      id: 'digital-twin',
      title: 'Digital Twin Solutions',
      description: 'Virtual replicas for simulation and optimization',
      icon: Globe,
      features: [
        '3D Modeling',
        'Real-time Simulation',
        'Predictive Maintenance',
        'Performance Optimization',
        'Scenario Planning',
        'Integration Services'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'iot-edge',
      title: 'IoT & Edge Computing',
      description: 'Internet of Things and edge computing solutions',
      icon: Cpu,
      features: [
        'Sensor Integration',
        'Edge Analytics',
        'Real-time Processing',
        'Device Management',
        'Data Collection',
        'Automation Systems'
      ],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'blockchain',
      title: 'Blockchain & Web3',
      description: 'Decentralized technology solutions for the future',
      icon: Network,
      features: [
        'Smart Contracts',
        'DeFi Solutions',
        'NFT Platforms',
        'Supply Chain Tracking',
        'Identity Management',
        'Decentralized Applications'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      description: 'Next-generation quantum computing solutions',
      icon: Atom,
      features: [
        'Quantum Algorithms',
        'Optimization Problems',
        'Cryptography',
        'Machine Learning',
        'Simulation',
        'Research Support'
      ],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'ai-workflow-automation',
      title: 'AI Workflow Automation',
      description: 'Intelligent automation of business processes',
      icon: Settings,
      features: [
        'Process Mapping',
        'Automation Design',
        'Integration Services',
        'Monitoring & Analytics',
        'Optimization',
        'Scalability'
      ],
      color: 'from-blue-500 to-green-500'
    },
    {
      id: 'ai-project-management',
      title: 'AI Project Management',
      description: 'AI-powered project management and collaboration tools',
      icon: Target,
      features: [
        'Task Automation',
        'Resource Allocation',
        'Risk Assessment',
        'Progress Tracking',
        'Team Collaboration',
        'Performance Analytics'
      ],
      color: 'from-purple-500 to-blue-500'
    },
    {
      id: 'ai-sales-intelligence',
      title: 'AI Sales Intelligence',
      description: 'Data-driven sales optimization and customer insights',
      icon: TrendingUp,
      features: [
        'Lead Scoring',
        'Customer Segmentation',
        'Sales Forecasting',
        'Pipeline Analytics',
        'Competitive Intelligence',
        'Performance Optimization'
      ],
      color: 'from-green-500 to-blue-500'
    },
    {
      id: 'ai-innovation-management',
      title: 'AI Innovation Management',
      description: 'Managing innovation processes with artificial intelligence',
      icon: Sparkles,
      features: [
        'Idea Generation',
        'Innovation Tracking',
        'Market Analysis',
        'Portfolio Management',
        'Collaboration Tools',
        'Success Metrics'
      ],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO 
        title="AI & Technology Services | Zion Tech Group"
        description="Comprehensive AI, cloud, cybersecurity, and technology services. Transform your business with cutting-edge solutions from Zion Tech Group."
        keywords="AI services, cloud computing, cybersecurity, digital transformation, technology solutions"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Revolutionary
                </span>
                <br />
                <span className="text-white">Technology Services</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Transform your business with cutting-edge AI, cloud computing, cybersecurity, and digital transformation solutions. 
                Experience the future of technology with Zion Tech Group.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => scrollToSection('ai-business-intelligence')}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Explore AI Services
                </button>
                <button 
                  onClick={() => scrollToSection('cybersecurity')}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  Security Solutions
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive Technology Services
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                From AI-powered solutions to robust infrastructure, we provide end-to-end technology services 
                that drive innovation and growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <button className="text-cyan-400 hover:text-cyan-300 font-medium text-sm flex items-center group">
                      Learn More
                      <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Let's discuss how our technology services can drive innovation, efficiency, and growth for your organization.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Schedule a Consultation
                </button>
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  Request a Quote
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
=======
      title: "AI & Machine Learning",
      description: "Transform your business with cutting-edge AI solutions including machine learning, natural language processing, and computer vision.",
      icon: <Code className="w-8 h-8" />,
      href: "/services/ai-services",
      features: [
        "Custom AI model development",
        "Natural language processing",
        "Computer vision solutions",
        "Predictive analytics",
        "AI strategy consulting"
      ],
      price: "From $5,000"
    },
    {
      title: "Cybersecurity",
      description: "Protect your digital assets with advanced security solutions, threat detection, and compliance management.",
      icon: <Shield className="w-8 h-8" />,
      href: "/services/cybersecurity",
      features: [
        "Security assessment & audit",
        "Penetration testing",
        "Compliance management",
        "24/7 monitoring",
        "Incident response"
      ],
      price: "From $3,000"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scale your operations with robust cloud solutions, migration services, and infrastructure optimization.",
      icon: <Cloud className="w-8 h-8" />,
      href: "/services/cloud-solutions",
      features: [
        "Cloud migration",
        "Infrastructure optimization",
        "DevOps implementation",
        "Cost optimization",
        "24/7 support"
      ],
      price: "From $2,500"
    },
    {
      title: "Micro SaaS Development",
      description: "Build scalable software-as-a-service solutions that grow with your business and generate recurring revenue.",
      icon: <Smartphone className="w-8 h-8" />,
      href: "/services/micro-saas",
      features: [
        "Custom SaaS development",
        "Multi-tenant architecture",
        "Payment integration",
        "User management",
        "Analytics dashboard"
      ],
      price: "From $10,000"
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics, reporting, and business intelligence.",
      icon: <Database className="w-8 h-8" />,
      href: "/services/data-analytics",
      features: [
        "Data visualization",
        "Business intelligence",
        "Predictive modeling",
        "Real-time dashboards",
        "Data warehousing"
      ],
      price: "From $4,000"
    },
    {
      title: "IT Services",
      description: "Comprehensive IT support, infrastructure management, and digital transformation solutions.",
      icon: <Globe className="w-8 h-8" />,
      href: "/services/it-services",
      features: [
        "IT infrastructure setup",
        "Network management",
        "Software development",
        "Technical support",
        "System maintenance"
      ],
      price: "From $1,500"
    }
  ];

  const additionalServices = [
    {
      title: "Blockchain Solutions",
      description: "Secure, transparent, and decentralized solutions for modern businesses.",
      href: "/services/blockchain"
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      href: "/services/mobile-development"
    },
    {
      title: "DevOps & Automation",
      description: "Streamline your development and deployment processes with automation.",
      href: "/services/devops"
    },
    {
      title: "Data Science",
      description: "Advanced data science solutions for complex business problems.",
      href: "/services/data-science"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project plan."
    },
    {
      step: "02",
      title: "Design & Development",
      description: "Our team builds your solution using cutting-edge technologies."
    },
    {
      step: "03",
      title: "Testing & Quality Assurance",
      description: "Rigorous testing ensures your solution meets the highest standards."
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "We deploy your solution and provide ongoing maintenance and support."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to transform your business 
              and drive innovation across all sectors.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="group border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                View Pricing
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Services */}
      <div className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our flagship services that have helped hundreds of businesses achieve their digital transformation goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard {...service} popular={index === 1} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Additional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized solutions for specific business needs and emerging technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700/50 hover:border-cyan-400/50 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to={service.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-black font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project requirements and create a custom solution that fits your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="group border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                View Pricing Plans
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-3cef
    </div>
  );
};

export default ServicesPage;
=======
export function Services() {
  const services = [
    {
      title: "AI & Machine Learning",
      description: "Custom AI solutions including machine learning models, natural language processing, and computer vision applications.",
      features: ["Custom ML Models", "NLP Solutions", "Computer Vision", "Predictive Analytics"],
      icon: "🤖"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions with AWS, Azure, and Google Cloud Platform integration.",
      features: ["Cloud Migration", "DevOps & CI/CD", "Container Orchestration", "Auto-scaling"],
      icon: "☁️"
    },
    {
      title: "Web Development",
      description: "Modern web applications built with React, Next.js, and cutting-edge technologies.",
      features: ["Frontend Development", "Backend APIs", "Database Design", "Performance Optimization"],
      icon: "💻"
    },
    {
      title: "Mobile Development",
      description: "Cross-platform mobile applications for iOS and Android using React Native and Flutter.",
      features: ["iOS Apps", "Android Apps", "Cross-platform", "App Store Optimization"],
      icon: "📱"
    },
    {
      title: "Data Analytics",
      description: "Business intelligence and data visualization solutions to drive informed decision making.",
      features: ["Data Visualization", "Business Intelligence", "Real-time Analytics", "Custom Dashboards"],
      icon: "📊"
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Incident Response"],
      icon: "🔒"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth 
            and digital transformation journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-card p-8 rounded-xl border hover:shadow-lg transition-all duration-300 hover:scale-105 group">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <span className="text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-foreground/80">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Discovery</h3>
              <p className="text-foreground/70">
                We understand your business needs and technical requirements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Planning</h3>
              <p className="text-foreground/70">
                We create a detailed project plan and timeline.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-foreground/70">
                We build your solution using agile methodologies.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Deployment</h3>
              <p className="text-foreground/70">
                We deploy and provide ongoing support and maintenance.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/5 rounded-xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105">
              Get a Quote
            </button>
            <button className="border border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
