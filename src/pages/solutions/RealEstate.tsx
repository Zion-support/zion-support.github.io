import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Users, 
  TrendingUp, 
  Shield, 
  Cloud, 
  Brain, 
  Zap, 
  Target,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Workflow,
  Database,
  Globe,
  Lock,
  Rocket,
  Star,
  Award,
  Headphones,
  Phone,
  Mail,
  MapPin,
  Building,
  Search,
  Filter,
  Calendar,
  Clock,
  CheckSquare,
  DollarSign,
  PieChart,
  LineChart,
  BarChart,
  Target as TargetIcon,
  Eye,
  FileText,
  Image,
  Video,
  Camera,
  Smartphone,
  Tablet,
  Laptop,
  Wifi,
  MessageCircle,
  PhoneCall,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  Navigation,
  Compass,
  Globe as GlobeIcon,
  Lock as LockIcon,
  Shield as ShieldIcon,
  CheckCircle as CheckCircleIcon,
  XCircle,
  AlertTriangle,
  Info,
  HelpCircle,
  Settings,
  Cog,
  Wrench,
  Tool,
  Hammer,
  Paintbrush,
  Ruler,
  Calculator,
  Percent,
  Plus,
  Minus,
  Divide,
  Equal
} from 'lucide-react';

export default function RealEstate() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Market Analysis",
      description: "Advanced analytics and machine learning algorithms to provide accurate market insights and property valuations.",
      benefits: ["Real-time market data", "Predictive analytics", "Property valuation", "Investment insights"]
    },
    {
      icon: Workflow,
      title: "Digital Property Management",
      description: "Comprehensive property management platforms that streamline operations and improve tenant satisfaction.",
      benefits: ["Tenant portal", "Maintenance tracking", "Financial reporting", "Document management"]
    },
    {
      icon: Shield,
      title: "Real Estate Security & Compliance",
      description: "Robust security solutions to protect sensitive property data and ensure regulatory compliance.",
      benefits: ["Data encryption", "Access controls", "Audit trails", "Compliance monitoring"]
    },
    {
      icon: Cloud,
      title: "Cloud-Based Real Estate Solutions",
      description: "Scalable cloud platforms designed for real estate professionals and property management companies.",
      benefits: ["Scalable infrastructure", "Remote access", "Data backup", "Cost optimization"]
    }
  ];

  const solutions = [
    {
      category: "Property Management",
      services: [
        "Tenant Management Systems",
        "Maintenance Request Tracking",
        "Financial Reporting & Analytics",
        "Document Management",
        "Property Inspections"
      ]
    },
    {
      category: "Market Analysis",
      services: [
        "Real Estate Market Data",
        "Property Valuation Tools",
        "Investment Analysis",
        "Market Trends & Forecasting",
        "Comparative Market Analysis"
      ]
    },
    {
      category: "Sales & Marketing",
      services: [
        "CRM Systems",
        "Lead Management",
        "Marketing Automation",
        "Virtual Tours & 3D Imaging",
        "Social Media Integration"
      ]
    },
    {
      category: "Investment & Finance",
      services: [
        "Investment Portfolio Management",
        "ROI Calculators",
        "Financial Modeling",
        "Risk Assessment",
        "Tax Optimization"
      ]
    }
  ];

  const caseStudies = [
    {
      company: "Property Management Firm",
      challenge: "Manual processes and lack of centralized data management",
      solution: "Integrated property management platform with AI-powered analytics",
      results: "40% reduction in operational costs, 60% improvement in tenant satisfaction"
    },
    {
      company: "Real Estate Investment Company",
      challenge: "Limited market insights and investment analysis capabilities",
      solution: "AI-powered market analysis platform with predictive modeling",
      results: "35% improvement in investment decisions, 25% increase in portfolio returns"
    },
    {
      company: "Real Estate Agency",
      challenge: "Inefficient lead management and marketing processes",
      solution: "Comprehensive CRM system with marketing automation",
      results: "50% increase in lead conversion, 45% reduction in marketing costs"
    }
  ];

  const technologies = [
    {
      name: "AI & Machine Learning",
      description: "Predictive analytics and market insights",
      icon: Brain
    },
    {
      name: "Virtual Reality",
      description: "Immersive property tours and visualization",
      icon: Eye
    },
    {
      name: "IoT & Smart Buildings",
      description: "Connected property management and monitoring",
      icon: Wifi
    },
    {
      name: "Blockchain",
      description: "Secure property transactions and records",
      icon: Database
    }
  ];

  const benefits = [
    {
      title: "Increased Efficiency",
      description: "Automate routine tasks and streamline operations",
      icon: TrendingUp
    },
    {
      title: "Better Decision Making",
      description: "Data-driven insights for improved business decisions",
      icon: BarChart3
    },
    {
      title: "Enhanced Customer Experience",
      description: "Provide better service to tenants and clients",
      icon: Users
    },
    {
      title: "Cost Savings",
      description: "Reduce operational costs and improve profitability",
      icon: DollarSign
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>Real Estate Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your real estate business with Zion Tech Group's AI-powered property management, market analysis, and digital real estate solutions." />
        <meta name="keywords" content="real estate solutions, property management, real estate technology, market analysis, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/solutions/real-estate" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-orange/20 border border-zion-orange/30 text-zion-orange text-sm font-medium mb-6">
              <Home className="w-4 h-4 mr-2" />
              Real Estate Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Real Estate with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-orange to-zion-cyan"> AI-Powered Technology</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Zion Tech Group delivers innovative real estate solutions that combine cutting-edge technology with industry expertise to revolutionize property management, market analysis, and investment strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-orange to-zion-cyan text-white font-semibold rounded-lg hover:from-zion-cyan hover:to-zion-orange transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-zion-orange text-zion-orange font-semibold rounded-lg hover:bg-zion-orange hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Real Estate Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              From property management to market analysis, we provide end-to-end real estate technology solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-zion-orange/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-zion-orange/20 rounded-lg mr-4">
                    <feature.icon className="w-8 h-8 text-zion-orange" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-zion-slate-light mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real Estate Solution Portfolio
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Comprehensive solutions covering all aspects of modern real estate operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-zion-cyan/20 rounded-lg mr-3">
                    <Target className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{solution.category}</h3>
                </div>
                <ul className="space-y-2">
                  {solution.services.map((service, idx) => (
                    <li key={idx} className="text-sm text-zion-slate-light flex items-center">
                      <ArrowRight className="w-4 h-4 text-zion-orange mr-2 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our real estate solutions deliver measurable improvements in efficiency and profitability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-zion-orange/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-zion-orange/20 rounded-lg mr-4">
                    <benefit.icon className="w-8 h-8 text-zion-orange" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{benefit.title}</h3>
                </div>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              We leverage the latest technologies to deliver innovative real estate solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
                <div className="p-3 bg-zion-purple/20 rounded-lg mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <tech.icon className="w-8 h-8 text-zion-purple" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-sm text-zion-slate-light">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real Estate Transformation Success Stories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              See how real estate companies are revolutionizing their operations with Zion Tech Group solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-zion-orange/20 rounded-lg mr-3">
                    <Star className="w-6 h-6 text-zion-orange" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">{study.company}</div>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                  <p className="text-zion-slate-light text-sm">{study.challenge}</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Solution:</h4>
                  <p className="text-zion-slate-light text-sm">{study.solution}</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Results:</h4>
                  <p className="text-zion-cyan text-sm font-medium">{study.results}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-zion-orange/20 to-zion-cyan/20 border border-zion-orange/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Real Estate Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let's discuss how Zion Tech Group can help you revolutionize your real estate operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-orange to-zion-cyan text-white font-semibold rounded-lg hover:from-zion-cyan hover:to-zion-orange transition-all duration-300 transform hover:scale-105"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-zion-orange text-zion-orange font-semibold rounded-lg hover:bg-zion-orange hover:text-white transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="p-3 bg-zion-cyan/20 rounded-lg mb-4">
                <Phone className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-zion-slate-light">+1 (302) 464-0950</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-3 bg-zion-orange/20 rounded-lg mb-4">
                <Mail className="w-8 h-8 text-zion-orange" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-3 bg-zion-purple/20 rounded-lg mb-4">
                <MapPin className="w-8 h-8 text-zion-purple" />
              </div>
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}