import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { 
  Brain, 
  Shield, 
  Cloud, 
  Code, 
  Database, 
  Smartphone, 
  Globe, 
=======
<<<<<<< HEAD
import ServiceCard from '../components/ServiceCard';
import Card from '../components/Card';

const Services: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            Comprehensive technology solutions designed to transform your business
            and drive innovation across all sectors.
          </p>
        </div>
        
        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ServiceCard
            title="AI & Machine Learning"
            description="Transform your business with cutting-edge AI solutions including machine learning, natural language processing, and computer vision."
            icon="🤖"
          />
          <ServiceCard
            title="Cybersecurity"
            description="Protect your digital assets with advanced security solutions, threat detection, and compliance management."
            icon="🔒"
          />
          <ServiceCard
            title="Cloud Infrastructure"
            description="Scale your operations with robust cloud solutions, migration services, and infrastructure optimization."
            icon="☁️"
          />
          <ServiceCard
            title="Digital Transformation"
            description="Modernize your business processes with comprehensive digital transformation strategies and implementation."
            icon="🚀"
          />
          <ServiceCard
            title="Data Analytics"
            description="Unlock insights from your data with advanced analytics, business intelligence, and reporting solutions."
            icon="📊"
          />
          <ServiceCard
            title="IoT Solutions"
            description="Connect and manage your devices with Internet of Things solutions for smart operations and monitoring."
            icon="🌐"
          />
        </div>

        {/* Service Categories */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Service Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              title="Consulting Services"
              description="Strategic technology consulting to help you make informed decisions about your digital future."
            />
            <Card
              title="Implementation"
              description="End-to-end implementation of technology solutions tailored to your specific business needs."
            />
            <Card
              title="Support & Maintenance"
              description="Ongoing support and maintenance to ensure your systems run smoothly and efficiently."
            />
            <Card
              title="Training & Education"
              description="Comprehensive training programs to help your team master new technologies and processes."
            />
            <Card
              title="Custom Development"
              description="Bespoke software development solutions designed specifically for your unique requirements."
            />
            <Card
              title="Integration Services"
              description="Seamless integration of new technologies with your existing systems and workflows."
            />
          </div>
        </div>

        {/* Industry Solutions */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12">Industry Solutions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-lg font-semibold">Healthcare</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏦</span>
              </div>
              <h3 className="text-lg font-semibold">Finance</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-lg font-semibold">Manufacturing</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="text-lg font-semibold">Retail</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-lg font-semibold">Education</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-lg font-semibold">Government</h3>
            </div>
          </div>
        </div>
=======
import {
  Brain,
  Shield,
  Cloud,
  Code,
  Database,
  Smartphone,
  Globe,
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  Lock,
  Zap,
  BarChart3,
  Users,
<<<<<<< HEAD
  Settings
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

const Services = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI & Machine Learning',
      description: 'Transform your business with cutting-edge AI solutions',
      features: [
        'Custom AI model development',
        'Natural Language Processing',
        'Computer Vision solutions',
        'Predictive Analytics',
        'Chatbot development',
        'AI strategy consulting'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with advanced security solutions',
      features: [
        'Security audits & assessments',
        'Threat detection & response',
        'Compliance management',
        'Penetration testing',
        'Security training',
        'Incident response planning'
      ],
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Infrastructure',
      description: 'Scale your operations with robust cloud solutions',
      features: [
        'Cloud migration services',
        'Infrastructure setup & management',
        'Cost optimization',
        'Disaster recovery',
        'Multi-cloud strategies',
        'Cloud security implementation'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your needs',
      features: [
        'Web application development',
        'Mobile app development',
        'API development & integration',
        'Legacy system modernization',
        'Quality assurance & testing',
        'DevOps implementation'
      ],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Solutions',
      description: 'Unlock insights from your data with advanced analytics',
      features: [
        'Data warehousing',
        'Business intelligence',
        'Data visualization',
        'ETL/ELT processes',
        'Data governance',
        'Real-time analytics'
      ],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Solutions',
      description: 'Engage your customers with powerful mobile experiences',
      features: [
        'Native iOS & Android apps',
        'Cross-platform development',
        'Mobile app optimization',
        'Push notification systems',
        'Mobile security',
        'App store optimization'
      ],
      color: 'from-pink-500 to-rose-500'
=======
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
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
=======
<<<<<<< HEAD
import {
  Brain,
  Shield,
  Cloud,
  Code,
  Database,
  Smartphone,
  Globe,
  Lock,
  Zap,
  BarChart3,
  Users,
  Settings,
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
  Settings,
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
<<<<<<< HEAD
  DollarSign
<<<<<<< HEAD
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
        <span className="bg-cyan-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </span>
      </div>
    )}
    
    <div className="text-center mb-6">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-400/10 rounded-2xl mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-lg">{description}</p>
    </div>
    
    {features && (
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    )}
    
    {price && (
      <div className="text-center mb-6">
        <div className="text-4xl font-bold text-white mb-2">{price}</div>
        <div className="text-gray-400">per month</div>
      </div>
    )}
    
    <Link
      to={href}
      className="block w-full bg-cyan-400 text-gray-900 font-semibold py-3 px-6 rounded-lg text-center hover:bg-cyan-300 transition-colors duration-200"
    >
      Learn More
      <ArrowRight className="inline-block ml-2 w-4 h-4" />
    </Link>
  </motion.div>
);

const Services: React.FC = () => {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence',
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      href: '/services/ai-services',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Consulting'
      ],
      price: '$2,999'
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your digital assets with advanced security solutions',
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      href: '/services/cybersecurity',
      features: [
        'Security Assessment',
        'Penetration Testing',
        'Incident Response',
        'Compliance Management',
        '24/7 Monitoring'
      ],
      price: '$1,999'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scale your operations with robust cloud solutions',
      icon: <Cloud className="w-8 h-8 text-cyan-400" />,
      href: '/services/cloud-infrastructure',
      features: [
        'Cloud Migration',
        'Infrastructure as Code',
        'Auto-scaling',
        'Disaster Recovery',
        'Cost Optimization'
      ],
      price: '$1,499',
      popular: true
    },
    {
      title: 'Blockchain Solutions',
      description: 'Leverage blockchain technology for secure transactions',
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      href: '/services/blockchain',
      features: [
        'Smart Contracts',
        'DeFi Applications',
        'NFT Marketplaces',
        'Token Development',
        'Blockchain Consulting'
      ],
      price: '$3,499'
    },
    {
      title: 'Mobile Development',
      description: 'Create powerful mobile applications for iOS and Android',
      icon: <Smartphone className="w-8 h-8 text-cyan-400" />,
      href: '/services/mobile-development',
      features: [
        'Native iOS/Android Apps',
        'Cross-platform Solutions',
        'UI/UX Design',
        'App Store Optimization',
        'Maintenance & Support'
      ],
      price: '$2,499'
    },
    {
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights',
      icon: <Database className="w-8 h-8 text-cyan-400" />,
      href: '/services/data-analytics',
      features: [
        'Data Visualization',
        'Business Intelligence',
        'Real-time Dashboards',
        'Data Warehousing',
        'Advanced Analytics'
      ],
      price: '$1,799'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project plan.'
    },
    {
      step: '02',
      title: 'Design & Development',
      description: 'Our team builds your solution using cutting-edge technologies.'
    },
    {
      step: '03',
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing ensures your solution meets the highest standards.'
    },
    {
      step: '04',
      title: 'Deployment & Launch',
      description: 'We handle the deployment process and ensure a smooth launch.'
    },
    {
      step: '05',
      title: 'Support & Maintenance',
      description: 'Ongoing support and maintenance to keep your solution running smoothly.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We provide comprehensive technology solutions to help your business 
            thrive in the digital age. From AI and cybersecurity to cloud infrastructure 
            and blockchain, we've got you covered.
          </p>
        </motion.div>

=======
  Target,
  Rocket,
  Cpu,
  Network,
  Palette,
  Search,
  MessageSquare,
  TrendingUp,
  Lightbulb,
  Wrench,
  Headphones,
} from 'lucide-react';
=======
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
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business requirements and current systems to understand your needs.'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'We develop a comprehensive strategy and detailed project plan tailored to your goals.'
    },
    {
      step: '03',
      title: 'Development & Implementation',
      description: 'Our expert team builds and implements the solution using industry best practices.'
    },
    {
      step: '04',
      title: 'Testing & Quality Assurance',
      description: 'Thorough testing ensures your solution is reliable, secure, and performs optimally.'
    },
    {
      step: '05',
      title: 'Deployment & Launch',
      description: 'We handle the deployment process and ensure a smooth launch of your solution.'
    },
    {
      step: '06',
      title: 'Support & Maintenance',
      description: 'Ongoing support and maintenance to keep your solution running smoothly.'
=======
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
    <>
      <SEOHead 
        title="Our Services - AI, Cybersecurity & Cloud Solutions | Zion Tech Group"
        description="Comprehensive technology services including AI & Machine Learning, Cybersecurity, Cloud Infrastructure, Software Development, Data Solutions, and Mobile Development."
        keywords="AI services, cybersecurity, cloud infrastructure, software development, data solutions, mobile development, technology consulting"
      />
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Users className="w-5 h-5 text-blue-400" />
              <span>Expert Team</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Settings className="w-5 h-5 text-green-400" />
              <span>24/7 Support</span>
=======
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
=======
  Target,
  Rocket,
  Cpu,
  Network,
  Palette,
  Search,
  MessageSquare,
  TrendingUp,
  Lightbulb,
  Wrench,
  Headphones,
} from 'lucide-react';
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
import SEOHead from '../components/SEOHead';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions for your business needs.',
      icon: Brain,
      features: [
        'Machine Learning',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Chatbots',
        'Automated Decision Making',
      ],
      color: 'from-blue-500 to-purple-600',
      price: 'Starting at $299/month',
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your business from evolving threats.',
      icon: Shield,
      features: [
        'Threat Detection & Response',
        'Security Audits',
        'Penetration Testing',
        'Compliance Management',
        'Incident Response',
        'Security Training',
      ],
      color: 'from-red-500 to-pink-600',
      price: 'Starting at $199/month',
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services.',
      icon: Cloud,
      features: [
        'AWS/Azure/GCP Migration',
        'DevOps Implementation',
        'Containerization',
        'Auto-scaling Solutions',
        'Cloud Security',
        'Cost Optimization',
      ],
      color: 'from-orange-500 to-red-600',
      price: 'Starting at $399/month',
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT services and infrastructure management.',
      icon: Settings,
      features: [
        'System Administration',
        'Network Management',
        'Hardware Support',
        'Software Installation',
        'Backup & Recovery',
        '24/7 Monitoring',
      ],
      color: 'from-green-500 to-teal-600',
      price: 'Starting at $149/month',
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights.',
      icon: BarChart3,
      features: [
        'Data Visualization',
        'Business Intelligence',
        'Real-time Analytics',
        'Custom Dashboards',
        'Data Warehousing',
        'Predictive Modeling',
      ],
      color: 'from-purple-500 to-indigo-600',
      price: 'Starting at $249/month',
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications.',
      icon: Smartphone,
      features: [
        'iOS Development',
        'Android Development',
        'React Native',
        'Flutter Apps',
        'App Store Optimization',
        'Mobile UI/UX Design',
      ],
      color: 'from-pink-500 to-rose-500',
      price: 'Starting at $199/month',
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive web applications and websites.',
      icon: Globe,
      features: [
        'React/Next.js Development',
        'Node.js Backend',
        'Database Design',
        'API Development',
        'Performance Optimization',
        'SEO Implementation',
      ],
      color: 'from-cyan-500 to-blue-600',
      price: 'Starting at $179/month',
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business.',
      icon: Rocket,
      features: [
        'Process Automation',
        'Workflow Optimization',
        'Digital Strategy',
        'Change Management',
        'Technology Integration',
        'Staff Training',
      ],
      color: 'from-yellow-500 to-orange-600',
      price: 'Starting at $499/month',
    },
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Proven Expertise',
      description: 'Over 500+ successful projects delivered',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support',
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: '100% satisfaction guarantee on all services',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with years of experience',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <SEOHead
        title="Our Services - Zion Tech Group"
        description="Comprehensive AI, cybersecurity, cloud, and IT services to transform your business. Expert solutions tailored to your needs."
        keywords="AI services, cybersecurity, cloud solutions, IT services, digital transformation, technology consulting"
      />

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We offer comprehensive technology solutions to help your business thrive in the digital age.
            From AI and cybersecurity to cloud infrastructure and digital transformation.
          </p>
        </motion.div>

        {/* Services Grid */}
<<<<<<< HEAD
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Process
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We follow a proven methodology to deliver exceptional results for every project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-cyan-400/10 rounded-2xl p-6 mb-4">
                <div className="text-2xl font-bold text-cyan-400 mb-2">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {step.description}
                </p>
=======
=======
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
<<<<<<< HEAD
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
=======
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t pt-4">
                <div className="text-2xl font-bold text-blue-600 mb-4">{service.price}</div>
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
<<<<<<< HEAD
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
              </div>
            </motion.div>
          ))}
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-12 mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Zion Tech?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to delivering exceptional results and providing the best possible service to our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss your project and create a customized solution that meets your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Us Today
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Portfolio
            </button>
          </div>
        </motion.div>
<<<<<<< HEAD
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
>>>>>>> main
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
      </div>
    </div>
<<<<<<< HEAD
    </>
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  );
};

<<<<<<< HEAD
export default Services;
=======
export default Services;
<<<<<<< HEAD
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
>>>>>>> main
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
