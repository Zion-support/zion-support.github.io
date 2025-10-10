import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import {
  Brain,
  Cloud,
  Shield,
  Code,
  BarChart,
  Users,
  Zap,
  Star,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  Target,
  Globe,
  Cpu,
  Database,
  Lock,
  Settings,
  MessageSquare,
  Eye,
  BarChart3,
  FileText,
  Search,
  Bot,
  Palette,
  DollarSign,
  Camera,
  Music,
  Video,
  Gamepad2,
  ShoppingCart,
  CreditCard,
  Building,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Heart,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  Calendar,
  Clock3,
  Compass,
  Navigation as NavIcon,
  PieChart,
  TrendingDown,
  Activity,
  Zap as Lightning,
  Target as Crosshair,
  Shield as Security,
  Users as People,
  Star as StarIcon,
  CheckCircle as Check,
  ArrowRight as Arrow,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as Location,
  Truck,
  Smartphone,
  Box
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      description: 'Cutting-edge artificial intelligence solutions that transform your business',
      services: [
        {
          name: 'Machine Learning Solutions',
          description: 'Custom ML models for predictive analytics and automation',
          price: 'Starting at $2,500/mo',
          features: ['Custom Model Development', 'Data Pipeline Setup', 'Model Training & Optimization', 'API Integration']
        },
        {
          name: 'Natural Language Processing',
          description: 'Advanced NLP for text analysis and language understanding',
          price: 'Starting at $1,800/mo',
          features: ['Sentiment Analysis', 'Text Classification', 'Language Translation', 'Chatbot Development']
        },
        {
          name: 'Computer Vision',
          description: 'Image and video analysis with AI-powered recognition',
          price: 'Starting at $2,200/mo',
          features: ['Object Detection', 'Image Classification', 'Video Analytics', 'Facial Recognition']
        },
        {
          name: 'AI Automation',
          description: 'Intelligent process automation and workflow optimization',
          price: 'Starting at $1,500/mo',
          features: ['Process Mapping', 'Workflow Design', 'RPA Implementation', 'Performance Monitoring']
        }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      description: 'Comprehensive IT infrastructure and cloud solutions',
      services: [
        {
          name: 'Cloud Migration',
          description: 'Seamless migration to AWS, Azure, or Google Cloud',
          price: 'Starting at $2,500/mo',
          features: ['Migration Planning', 'Data Transfer', 'Security Setup', 'Performance Optimization']
        },
        {
          name: 'Cybersecurity',
          description: 'Enterprise-grade security solutions and monitoring',
          price: 'Starting at $2,200/mo',
          features: ['Security Assessment', 'Threat Detection', 'Incident Response', 'Compliance Management']
        },
        {
          name: 'DevOps & CI/CD',
          description: 'Automated deployment and continuous integration',
          price: 'Starting at $1,800/mo',
          features: ['Pipeline Setup', 'Automated Testing', 'Deployment Automation', 'Monitoring & Alerting']
        },
        {
          name: 'Database Management',
          description: 'Database design, optimization, and management',
          price: 'Starting at $1,200/mo',
          features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening']
        }
      ]
    },
    {
      title: 'Digital Transformation',
      icon: Zap,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      description: 'Complete digital transformation strategies and implementation',
      services: [
        {
          name: 'Digital Strategy',
          description: 'Comprehensive digital transformation roadmap',
          price: 'Starting at $3,000/mo',
          features: ['Strategy Development', 'Technology Assessment', 'Change Management', 'ROI Planning']
        },
        {
          name: 'Process Optimization',
          description: 'Streamline and optimize business processes',
          price: 'Starting at $2,000/mo',
          features: ['Process Analysis', 'Workflow Design', 'Automation Implementation', 'Performance Monitoring']
        },
        {
          name: 'Data Analytics',
          description: 'Advanced analytics and business intelligence',
          price: 'Starting at $1,500/mo',
          features: ['Data Integration', 'Dashboard Creation', 'Predictive Analytics', 'Reporting Automation']
        },
        {
          name: 'Mobile Solutions',
          description: 'Native and cross-platform mobile applications',
          price: 'Starting at $2,800/mo',
          features: ['App Development', 'UI/UX Design', 'API Integration', 'App Store Deployment']
        }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Cpu,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      description: 'Next-generation technologies for competitive advantage',
      services: [
        {
          name: 'Quantum Computing',
          description: 'Quantum algorithms and quantum-enhanced solutions',
          price: 'Starting at $5,000/mo',
          features: ['Quantum Algorithm Development', 'Quantum Simulation', 'Hybrid Solutions', 'Research & Development']
        },
        {
          name: 'Blockchain Solutions',
          description: 'Decentralized applications and smart contracts',
          price: 'Starting at $3,500/mo',
          features: ['Smart Contract Development', 'DApp Creation', 'Token Development', 'DeFi Solutions']
        },
        {
          name: 'IoT & Edge Computing',
          description: 'Connected devices and edge processing solutions',
          price: 'Starting at $2,200/mo',
          features: ['Device Integration', 'Edge Processing', 'Data Collection', 'Real-time Analytics']
        },
        {
          name: 'AR/VR Solutions',
          description: 'Immersive experiences and virtual environments',
          price: 'Starting at $3,200/mo',
          features: ['3D Modeling', 'Interactive Experiences', 'Hardware Integration', 'Performance Optimization']
        }
      ]
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your current systems, identify opportunities, and define clear objectives.',
      icon: Search,
      color: 'text-cyan-400'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive roadmap with timelines, milestones, and success metrics.',
      icon: Target,
      color: 'text-purple-400'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute the solution with minimal disruption to your business operations.',
      icon: Settings,
      color: 'text-pink-400'
    },
    {
      step: '04',
      title: 'Optimization & Support',
      description: 'Continuous monitoring, optimization, and 24/7 support to ensure success.',
      icon: TrendingUp,
      color: 'text-orange-400'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: '300% Average ROI',
      description: 'Our clients see significant returns on their AI and IT investments'
    },
    {
      icon: Shield,
      title: '99.9% Uptime',
      description: 'Enterprise-grade reliability with guaranteed uptime'
    },
    {
      icon: Zap,
      title: '70% Cost Reduction',
      description: 'Streamlined processes and automation reduce operational costs'
    },
    {
      icon: Users,
      title: '100+ Happy Clients',
      description: 'Trusted by businesses of all sizes across various industries'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="AI & IT Services - Zion Tech Group Solutions"
        description="Comprehensive AI and IT services including machine learning, cloud migration, cybersecurity, and digital transformation. Get 300% ROI with our proven solutions."
        keywords={["AI Services", "IT Services", "Cloud Migration", "Cybersecurity", "Digital Transformation", "Machine Learning"]}
        canonicalUrl="https://ziontechgroup.com/services"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0">
          <div className="cyber-grid h-full"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="neon-text-advanced block mb-4">
                Our
              </span>
              <span className="holographic-text text-4xl md:text-6xl lg:text-7xl">
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive AI and IT solutions designed to transform your business.
              From machine learning to cloud migration, we deliver
              <span className="text-cyan-400 font-semibold"> measurable results</span> and
              <span className="text-purple-400 font-semibold"> competitive advantage</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                to="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold group"
              >
                <span className="relative z-10">Get Free Consultation</span>
              </Link>
              <Link
                to="/case-studies"
                className="quantum-button px-8 py-4 text-lg font-semibold group"
              >
                <span className="relative z-10">View Case Studies</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="neon-text-advanced">Why Choose Our Services?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven results and enterprise-grade solutions that drive real business value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card-advanced p-8 text-center group hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 text-4xl mb-4">
                  <benefit.icon className="w-12 h-12 mx-auto" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{benefit.title}</div>
                <div className="text-gray-300">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="neon-text-advanced">Service Categories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions across AI, IT, and emerging technologies
            </p>
          </div>

          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="quantum-card-advanced p-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`p-4 rounded-lg ${category.bgColor}`}>
                    <category.icon className={`w-8 h-8 ${category.color}`} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-300 text-lg">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="cyber-card-advanced p-6 group hover:scale-105 transition-all duration-300">
                      <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <div className="text-cyan-400 font-semibold mb-4">{service.price}</div>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to="/contact"
                        className="mt-4 inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="neon-text-advanced">Our Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and maximum ROI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center mx-auto border-2 border-cyan-400/30 group-hover:border-cyan-400 transition-colors">
                    <span className="text-2xl font-bold text-cyan-400">{step.step}</span>
                  </div>
                  <div className="absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-cyan-400/30 to-transparent hidden lg:block transform -translate-y-1/2"></div>
                </div>
                <div className="text-cyan-400 text-4xl mb-4">
                  <step.icon className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with a free consultation and discover how our services can deliver
            measurable results for your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button px-8 py-4 text-lg font-semibold"
            >
              <PhoneIcon className="w-5 h-5 inline mr-2" />
              Get Free Consultation
            </Link>
            <Link
              to="/about"
              className="quantum-button px-8 py-4 text-lg font-semibold"
            >
              <Users className="w-5 h-5 inline mr-2" />
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
