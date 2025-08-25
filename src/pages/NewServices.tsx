import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Zap, 
  Brain, 
  Globe, 
  Shield, 
  Cpu, 
  Database, 
  ArrowRight,
  Star,
  CheckCircle,
  Clock,
  Award,
  Lightbulb,
  Target,
  Settings,
  Rocket,
  Atom,
  Bot
} from 'lucide-react';

const NewServices = () => {
  const newServices = [
    {
      title: "AI Autonomous Research Assistant",
      description: "Revolutionary AI-powered research platform that works independently to discover insights and patterns across multiple data sources.",
      features: [
        "Autonomous research capabilities",
        "Multi-source data integration",
        "Real-time analysis and insights",
        "Advanced knowledge synthesis"
      ],
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      path: "/ai-autonomous-research-assistant",
      status: "New"
    },
    {
      title: "Quantum Neural Network Platform",
      description: "Cutting-edge platform combining quantum computing with neural networks to solve previously impossible computational problems.",
      features: [
        "Quantum processing power",
        "Exponential speed improvements",
        "Hybrid quantum-classical architecture",
        "Advanced simulation capabilities"
      ],
      icon: Atom,
      color: "from-purple-500 to-pink-500",
      path: "/quantum-neural-network-platform",
      status: "New"
    },
    {
      title: "Autonomous Business Operations Platform",
      description: "AI-powered platform that handles complex business processes independently, optimizing efficiency and driving growth.",
      features: [
        "24/7 autonomous operation",
        "Intelligent process automation",
        "Real-time decision making",
        "Predictive business analytics"
      ],
      icon: Bot,
      color: "from-green-500 to-emerald-500",
      path: "/autonomous-business-operations-platform",
      status: "New"
    },
    {
      title: "AI-Powered IT Asset Management",
      description: "Intelligent asset management platform that provides complete visibility and optimization of your IT infrastructure.",
      features: [
        "Automated asset discovery",
        "Predictive maintenance",
        "Real-time monitoring",
        "Comprehensive analytics"
      ],
      icon: Cpu,
      color: "from-orange-500 to-red-500",
      path: "/ai-powered-it-asset-management",
      status: "New"
    },
    {
      title: "SOC2 Compliance Automation",
      description: "Streamlined SOC2 compliance with AI-powered automation that reduces manual effort and ensures continuous compliance.",
      features: [
        "Automated compliance monitoring",
        "Real-time violation detection",
        "Automated evidence collection",
        "Audit preparation tools"
      ],
      icon: Shield,
      color: "from-indigo-500 to-blue-500",
      path: "/soc2-compliance-automation",
      status: "New"
    },
    {
      title: "5G Enterprise Solutions",
      description: "Transform your enterprise with cutting-edge 5G technology for ultra-fast connectivity and ultra-low latency.",
      features: [
        "Ultra-fast 5G networks",
        "Enterprise security protocols",
        "Private network solutions",
        "Real-time analytics"
      ],
      icon: Globe,
      color: "from-teal-500 to-cyan-500",
      path: "/5g-enterprise-solutions",
      status: "New"
    }
  ];

  const upcomingServices = [
    {
      title: "AI-Powered Voice Cloning",
      description: "Advanced voice synthesis technology for personalized AI interactions and content creation.",
      eta: "Q2 2024",
      icon: Mic,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Blockchain Enterprise Solutions",
      description: "Enterprise-grade blockchain infrastructure for secure, transparent business operations.",
      eta: "Q3 2024",
      icon: LinkIcon,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "IoT Data Analytics Platform",
      description: "Comprehensive IoT data management and analytics for smart city and industrial applications.",
      eta: "Q3 2024",
      icon: Wifi,
      color: "from-green-500 to-teal-500"
    }
  ];

  const benefits = [
    "Early access to cutting-edge technology",
    "Competitive advantage in your industry",
    "Reduced implementation costs",
    "Priority support and consultation",
    "Customization and integration support",
    "Exclusive training and resources"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-12 h-12 text-cyan-400 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                New Services
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover our latest AI-powered services and cutting-edge technology solutions. 
              Be among the first to experience the future of business technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Early Access
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* New Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Latest Innovations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our newest AI-powered services that are revolutionizing industries 
              and transforming business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 text-xs font-medium">
                    {service.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to={service.path}
                  className="inline-flex items-center w-full justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get a sneak peek at the revolutionary services we're developing for the future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 text-center"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mx-auto mb-6`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm">
                  <Clock className="w-4 h-4 mr-2" />
                  {service.eta}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our New Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Be among the first to experience cutting-edge technology and gain a competitive advantage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700"
              >
                <Star className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't wait to transform your business with our latest AI-powered services. 
            Contact us today to get early access and priority implementation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Add missing icons
const Mic = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
  </svg>
);

const LinkIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);

const Wifi = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
  </svg>
);

export default NewServices;