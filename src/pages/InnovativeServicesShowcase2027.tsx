import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  Users, 
  HardDrive, 
  TrendingUp, 
  Building2, 
  FileText, 
  HelpCircle, 
  BarChart3,
  Server,
  Cloud,
  Lock,
  BarChart,
  Cpu,
  Workflow,
  Database,
  Globe,
  Target,
  Rocket,
  Lightbulb,
  Code,
  Monitor,
  Smartphone,
  Network,
  Wifi,
  Activity,
  Search,
  Settings,
  Palette,
  Zap as ZapIcon,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  MessageCircle,
  Star,
  Users2,
  Cog,
  Palette as PaletteIcon,
  Menu,
  X,
  ArrowRight,
  Video,
  GraduationCap,
  Handshake,
  ShoppingCart,
  Truck,
  Heart,
  Scale,
  Home,
  BookOpen,
  Microscope,
  Flask,
  TestTube,
  Beaker,
  Dna,
  Pill,
  Stethoscope,
  Car,
  Plane,
  Ship,
  Train,
  Building,
  Factory,
  Warehouse,
  Store,
  Bank,
  CreditCard,
  PiggyBank,
  ChartLine,
  PieChart,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Calendar,
  UserCheck,
  UserPlus,
  UserMinus,
  UserX,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserHeart,
  UserStar,
  UserCheckCircle,
  Gavel,
  Music,
  Image,
  Brush,
  Sparkles,
  Eye,
  Award
} from 'lucide-react';

export default function InnovativeServicesShowcase2027() {
  const services = [
    {
      category: "AI & Automation",
      icon: Brain,
      color: "text-zion-cyan",
      bgColor: "bg-zion-cyan/20",
      services: [
        {
          name: "AI Autonomous Legal Research Platform",
          description: "Revolutionary AI-powered legal research platform that autonomously analyzes case law, statutes, and legal documents with unprecedented accuracy and speed.",
          href: "/services/ai-autonomous-legal-research-platform",
          features: ["90% Time Savings", "99.7% Accuracy Rate", "24/7 Availability", "Cost Reduction"],
          pricing: "Starting at $299/month",
          icon: Gavel
        },
        {
          name: "AI Autonomous Education Platform",
          description: "Transform education with AI-powered personalized learning, adaptive curriculum, and autonomous content creation that adapts to every student's unique needs.",
          href: "/services/ai-autonomous-education-platform",
          features: ["40% Learning Improvement", "Personalized Learning", "24/7 Availability", "Reduced Admin Burden"],
          pricing: "Starting at $199/month",
          icon: GraduationCap
        },
        {
          name: "AI Autonomous Creative Studio",
          description: "Unleash unlimited creativity with AI-powered autonomous content generation for visual arts, videos, music, and digital design.",
          href: "/services/ai-autonomous-creative-studio",
          features: ["10x Faster Creation", "Unlimited Possibilities", "Professional Quality", "Cost-Effective"],
          pricing: "Starting at $99/month",
          icon: Palette
        },
        {
          name: "AI Autonomous Cybersecurity Platform",
          description: "Next-generation AI-powered cybersecurity platform that autonomously detects, prevents, and responds to threats in real-time.",
          href: "/services/ai-autonomous-cybersecurity-platform",
          features: ["Real-time Threat Detection", "Automated Response", "Zero-day Protection", "24/7 Monitoring"],
          pricing: "Starting at $499/month",
          icon: Shield
        },
        {
          name: "AI Autonomous Financial Advisor",
          description: "Intelligent financial advisory platform that provides personalized investment strategies and portfolio management.",
          href: "/services/ai-autonomous-financial-advisor",
          features: ["Personalized Strategies", "Risk Management", "Portfolio Optimization", "Market Analysis"],
          pricing: "Starting at $399/month",
          icon: TrendingUp
        }
      ]
    },
    {
      category: "IT & Infrastructure",
      icon: Server,
      color: "text-zion-purple",
      bgColor: "bg-zion-purple/20",
      services: [
        {
          name: "Quantum Edge Computing Solutions",
          description: "Cutting-edge quantum computing solutions combined with edge computing for unprecedented processing power and speed.",
          href: "/services/quantum-edge-computing-solutions",
          features: ["Quantum Processing", "Edge Computing", "High Performance", "Scalable Architecture"],
          pricing: "Starting at $1,999/month",
          icon: Atom
        },
        {
          name: "AI-Powered DevOps Automation",
          description: "Streamline development and operations with AI-driven automation, monitoring, and optimization.",
          href: "/services/ai-devops-automation-platform",
          features: ["Automated Deployment", "Intelligent Monitoring", "Performance Optimization", "CI/CD Pipeline"],
          pricing: "Starting at $299/month",
          icon: Workflow
        },
        {
          name: "Blockchain Enterprise Solutions",
          description: "Enterprise-grade blockchain solutions for secure, transparent, and efficient business operations.",
          href: "/services/blockchain-enterprise-solutions",
          features: ["Smart Contracts", "Supply Chain Tracking", "Digital Identity", "Asset Management"],
          pricing: "Starting at $599/month",
          icon: Network
        }
      ]
    },
    {
      category: "Micro SaaS Solutions",
      icon: Rocket,
      color: "text-zion-blue",
      bgColor: "bg-zion-blue/20",
      services: [
        {
          name: "AI Customer Success Automation",
          description: "Automate customer success processes with AI-powered insights, engagement, and retention strategies.",
          href: "/services/ai-customer-success-automation",
          features: ["Customer Insights", "Engagement Automation", "Retention Strategies", "Success Metrics"],
          pricing: "Starting at $199/month",
          icon: Users
        },
        {
          name: "AI Marketing Automation Platform",
          description: "Comprehensive marketing automation with AI-driven personalization, optimization, and analytics.",
          href: "/services/ai-marketing-automation-platform",
          features: ["Personalized Campaigns", "A/B Testing", "Performance Analytics", "Lead Scoring"],
          pricing: "Starting at $299/month",
          icon: BarChart3
        },
        {
          name: "AI Project Management Platform",
          description: "Intelligent project management with AI-powered planning, resource allocation, and progress tracking.",
          href: "/services/ai-project-management-platform",
          features: ["Smart Planning", "Resource Optimization", "Progress Tracking", "Risk Management"],
          pricing: "Starting at $199/month",
          icon: Target
        }
      ]
    },
    {
      category: "Industry Solutions",
      icon: Building2,
      color: "text-zion-green",
      bgColor: "bg-zion-green/20",
      services: [
        {
          name: "AI Healthcare Analytics Platform",
          description: "Advanced healthcare analytics platform providing insights for improved patient care and operational efficiency.",
          href: "/services/ai-healthcare-analytics-platform",
          features: ["Patient Analytics", "Operational Insights", "Predictive Modeling", "Compliance Monitoring"],
          pricing: "Starting at $799/month",
          icon: Heart
        },
        {
          name: "AI Financial Trading Platform",
          description: "High-performance AI-powered trading platform with real-time analysis and automated trading strategies.",
          href: "/services/ai-financial-trading-platform",
          features: ["Real-time Analysis", "Automated Trading", "Risk Management", "Market Prediction"],
          pricing: "Starting at $999/month",
          icon: TrendingUp
        },
        {
          name: "AI Supply Chain Optimization",
          description: "Intelligent supply chain optimization with AI-driven forecasting, inventory management, and logistics optimization.",
          href: "/services/ai-supply-chain-optimization",
          features: ["Demand Forecasting", "Inventory Optimization", "Logistics Planning", "Cost Reduction"],
          pricing: "Starting at $599/month",
          icon: Truck
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>Innovative AI Services Showcase 2027 | Zion Tech Group</title>
        <meta name="description" content="Discover Zion Tech Group's comprehensive suite of innovative AI services and solutions for 2027. From autonomous platforms to industry-specific solutions." />
        <meta name="keywords" content="AI services 2027, innovative solutions, autonomous platforms, AI automation, micro SaaS, industry solutions, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-services-showcase-2027" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl">
                <Rocket className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovative AI Services Showcase 2027
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive suite of cutting-edge AI services and solutions designed to transform your business and drive innovation across all industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#services" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive AI Services Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our innovative services span across multiple domains, providing cutting-edge solutions for every business need.
            </p>
          </div>

          {services.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="flex items-center space-x-3 mb-8">
                <div className={`p-3 ${category.bgColor} rounded-lg`}>
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.category}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-2 ${category.bgColor} rounded-lg`}>
                        <service.icon className={`w-6 h-6 ${category.color}`} />
                      </div>
                      <h4 className="text-lg font-semibold text-white">{service.name}</h4>
                    </div>
                    
                    <p className="text-gray-300 mb-4 text-sm">
                      {service.description}
                    </p>

                    <div className="mb-4">
                      <div className="text-blue-400 font-semibold text-sm mb-2">Key Features:</div>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 text-xs text-gray-300">
                            <CheckCircle className="w-3 h-3 text-green-400" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <div className="text-green-400 font-semibold text-sm">Starting at: {service.pricing}</div>
                    </div>

                    <Link 
                      to={service.href}
                      className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver transformative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI-First Approach</h3>
              <p className="text-gray-300">Leading-edge AI technology at the core of every solution</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proven Excellence</h3>
              <p className="text-gray-300">Track record of successful implementations across industries</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300">World-class engineers, scientists, and business experts</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Global Reach</h3>
              <p className="text-gray-300">Serving clients worldwide with localized expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with our experts to discover how our innovative AI services can drive your business forward.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-gray-300">+1 302 464 0950</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-gray-300">kleber@ziontechgroup.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-500/20 rounded-lg">
                    <MapPin className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Address</div>
                    <div className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-6">Request Consultation</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Company</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Service Interest</label>
                  <select className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white focus:outline-none focus:border-blue-500">
                    <option value="">Select a service</option>
                    <option value="ai-legal-research">AI Legal Research Platform</option>
                    <option value="ai-education">AI Autonomous Education Platform</option>
                    <option value="ai-creative-studio">AI Autonomous Creative Studio</option>
                    <option value="ai-cybersecurity">AI Autonomous Cybersecurity Platform</option>
                    <option value="ai-financial-advisor">AI Autonomous Financial Advisor</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Tell us about your business needs"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Request Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Your AI Transformation Journey Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses that have already transformed their operations with our innovative AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Now
            </a>
            <a 
              href="https://ziontechgroup.com" 
              className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
