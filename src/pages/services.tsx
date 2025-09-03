import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Zap, 
  Database, 
  Cloud, 
  Smartphone, 
  Globe, 
  BarChart3, 
  Users, 
  Lock, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  Target,
  Code,
  Server,
  Cpu,
  Network,
  FileText,
  MessageSquare,
  ShoppingCart,
  Headphones,
  Search,
  Clock,
  Camera,
  CreditCard,
  Monitor,
  Building2,
  Home,
  Car,
  GraduationCap,
  Heart,
  ShoppingBag,
  Briefcase,
  Palette,
  Music,
  Video,
  BookOpen,
  Calendar,
  Bell,
  Eye,
  Download,
  Upload,
  Share2,
  QrCode,
  Tablet,
  Laptop,
  Desktop,
  Watch,
  Speaker,
  Microphone,
  Image,
  File,
  Folder,
  Archive,
  Edit,
  Plus,
  Check,
  AlertCircle,
  Info,
  HelpCircle,
  ExternalLink,
  ArrowUpRight,
  ArrowDownRight,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  Menu,
  Grid,
  List,
  Filter,
  SortAsc,
  SortDesc,
  RefreshCw,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Maximize,
  Minimize,
  Fullscreen,
  FullscreenExit,
  Volume,
  Volume2,
  VolumeX,
  Mute,
  Unmute,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Shuffle,
  Repeat,
  Repeat1
} from 'lucide-react';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      name: "AI & Machine Learning Services",
      description: "Cutting-edge artificial intelligence solutions that transform your business operations",
      icon: Brain,
      count: 25,
      color: "from-purple-400 to-pink-500",
      services: [
        "AI-Powered Business Intelligence",
        "Machine Learning Model Development",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "AI Chatbots & Virtual Assistants",
        "Intelligent Document Processing",
        "AI-Powered Marketing Automation"
      ]
    },
    {
      name: "Cybersecurity & Compliance",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance",
      icon: Shield,
      count: 18,
      color: "from-red-400 to-orange-500",
      services: [
        "Advanced Threat Detection",
        "Security Audits & Assessments",
        "Compliance Management (SOC2, GDPR, HIPAA)",
        "Penetration Testing",
        "Security Training & Awareness",
        "Incident Response Planning",
        "Data Encryption & Protection",
        "Identity & Access Management"
      ]
    },
    {
      name: "Cloud & Infrastructure",
      description: "Scalable cloud solutions and infrastructure management for modern businesses",
      icon: Cloud,
      count: 22,
      color: "from-blue-400 to-cyan-500",
      services: [
        "Cloud Migration & Strategy",
        "AWS, Azure, GCP Management",
        "DevOps & CI/CD Implementation",
        "Container Orchestration (Kubernetes)",
        "Infrastructure as Code",
        "Cloud Cost Optimization",
        "Disaster Recovery Planning",
        "Performance Monitoring & Optimization"
      ]
    },
    {
      name: "Software Development",
      description: "Custom software solutions built with modern technologies and best practices",
      icon: Code,
      count: 30,
      color: "from-green-400 to-emerald-500",
      services: [
        "Web Application Development",
        "Mobile App Development (iOS/Android)",
        "API Development & Integration",
        "Microservices Architecture",
        "Legacy System Modernization",
        "Quality Assurance & Testing",
        "Code Review & Optimization",
        "Technical Documentation"
      ]
    },
    {
      name: "Data Analytics & Business Intelligence",
      description: "Transform your data into actionable insights with advanced analytics solutions",
      icon: BarChart3,
      count: 15,
      color: "from-indigo-400 to-purple-500",
      services: [
        "Data Warehouse Design",
        "ETL/ELT Pipeline Development",
        "Business Intelligence Dashboards",
        "Real-time Analytics",
        "Data Visualization",
        "Statistical Analysis",
        "Data Governance & Quality",
        "Machine Learning Integration"
      ]
    },
    {
      name: "Digital Transformation",
      description: "Comprehensive digital transformation strategies to modernize your business",
      icon: TrendingUp,
      count: 20,
      color: "from-yellow-400 to-orange-500",
      services: [
        "Digital Strategy Consulting",
        "Process Automation",
        "Workflow Optimization",
        "Change Management",
        "Technology Assessment",
        "Digital Training Programs",
        "Innovation Workshops",
        "ROI Analysis & Reporting"
      ]
    }
  ];

  const featuredServices = [
    {
      title: "AI-Powered Business Intelligence Platform",
      description: "Advanced analytics platform that uses machine learning to provide actionable business insights and predictive analytics",
      price: "From $2,999/month",
      features: [
        "Predictive Analytics",
        "Real-time Dashboards",
        "Custom ML Models",
        "Data Visualization",
        "Automated Reporting",
        "API Integration"
      ],
      href: "/ai-services",
      color: "from-purple-400 to-pink-500",
      popular: true,
      icon: Brain
    },
    {
      title: "Comprehensive Cybersecurity Suite",
      description: "End-to-end cybersecurity solution that protects your organization from advanced threats and ensures compliance",
      price: "From $1,999/month",
      features: [
        "24/7 Threat Monitoring",
        "Automated Incident Response",
        "Compliance Management",
        "Security Training",
        "Penetration Testing",
        "Risk Assessment"
      ],
      href: "/services/cybersecurity",
      color: "from-red-400 to-orange-500",
      popular: true,
      icon: Shield
    },
    {
      title: "Cloud Migration & Optimization",
      description: "Seamless cloud migration services with ongoing optimization to reduce costs and improve performance",
      price: "From $3,499/month",
      features: [
        "Migration Strategy",
        "Cost Optimization",
        "Performance Tuning",
        "Security Implementation",
        "Disaster Recovery",
        "24/7 Support"
      ],
      href: "/services/cloud-migration",
      color: "from-blue-400 to-cyan-500",
      popular: false,
      icon: Cloud
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$999",
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 5 users",
        "Basic AI features",
        "Email support",
        "99.5% uptime SLA",
        "Standard security",
        "Monthly reports"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Professional",
      price: "$2,499",
      period: "/month",
      description: "Ideal for growing businesses with advanced needs",
      features: [
        "Up to 25 users",
        "Advanced AI features",
        "Priority support",
        "99.9% uptime SLA",
        "Enhanced security",
        "Real-time analytics",
        "API access",
        "Custom integrations"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited users",
        "Full AI suite",
        "Dedicated support",
        "99.99% uptime SLA",
        "Enterprise security",
        "Custom analytics",
        "White-label options",
        "On-premise deployment",
        "SLA guarantees"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Professional IT Services & Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including AI solutions, cybersecurity, cloud migration, software development, and digital transformation. Expert consulting and implementation." />
        <meta name="keywords" content="IT services, AI solutions, cybersecurity, cloud migration, software development, digital transformation, business intelligence" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Professional IT Services & Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Transform your business with cutting-edge technology solutions from industry experts
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Service Categories
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive technology solutions across all major domains
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {category.description}
                  </p>
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-3">
                      {category.count} Services Available
                    </p>
                    <ul className="space-y-2">
                      {category.services.slice(0, 4).map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {service}
                        </li>
                      ))}
                    </ul>
                    {category.services.length > 4 && (
                      <p className="text-sm text-gray-500 mt-2">
                        +{category.services.length - 4} more services
                      </p>
                    )}
                  </div>
                  <Link 
                    to={`/services/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-semibold"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Featured Services
              </h2>
              <p className="text-xl text-gray-600">
                Our most popular and impactful solutions
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <div key={index} className={`relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 ${service.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <p className="text-3xl font-bold text-gray-900 mb-2">
                      {service.price}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    to={service.href}
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600">
                Choose the plan that fits your business needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 ${tier.popular ? 'ring-2 ring-cyan-500 scale-105' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {tier.description}
                    </p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">
                        {tier.price}
                      </span>
                      <span className="text-gray-600 ml-1">
                        {tier.period}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    tier.popular 
                      ? 'bg-cyan-500 hover:bg-cyan-600 text-white' 
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                  }`}>
                    {tier.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-200">
                Get in touch with our experts for a free consultation
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Phone className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-200">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <Mail className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-200">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-200">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                to="/contact" 
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;