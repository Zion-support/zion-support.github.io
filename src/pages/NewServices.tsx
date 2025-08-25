import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cpu, 
  Zap, 
  Target, 
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Award,
  Globe,
  Shield,
  Cloud,
  Lock,
  Database,
  Network,
  Code,
  BarChart3,
  Lightbulb,
  Rocket,
  Clock,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Eye,
  Heart,
  Settings,
  Workflow,
  BarChart,
  PieChart,
  Monitor,
  HardDrive,
  Server,
  FileCheck,
  AlertTriangle,
  Search,
  BookOpen,
  Microscope,
  TestTube,
  Wifi,
  Signal,
  Smartphone,
  Car,
  Building,
  Factory,
  Hospital,
  ShoppingCart,
  HelpCircle,
  MessageCircle,
  FileText,
  Video,
  Book,
  Mail as MailIcon,
  CreditCard,
  Bot,
  CircuitBoard,
  Atom,
  Satellite
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

const NewServices: React.FC = () => {
  const newServices = [
    {
      title: "AI Autonomous Business Manager",
      description: "Revolutionary AI system that autonomously manages your entire business operations with intelligent decision-making and predictive analytics",
      icon: Bot,
      category: "AI & Automation",
      features: ["24/7 business monitoring", "Autonomous decision making", "Predictive analytics", "Cost optimization"],
      benefits: ["40% efficiency increase", "Real-time insights", "Automated workflows", "Scalable operations"],
      status: "Now Available",
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Quantum Neural Network Platform",
      description: "Next-generation quantum computing platform that combines quantum algorithms with neural networks for unprecedented computational power",
      icon: CircuitBoard,
      category: "Quantum Computing",
      features: ["Quantum-classical hybrid", "Neural network optimization", "Real-time simulation", "Enterprise security"],
      benefits: ["100x faster processing", "Quantum advantage", "Advanced AI training", "Research acceleration"],
      status: "Now Available",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "5G Enterprise Network Solutions",
      description: "Cutting-edge 5G infrastructure with network slicing, edge computing, and AI-powered optimization for enterprise applications",
      icon: Signal,
      category: "Network Infrastructure",
      features: ["Ultra-fast connectivity", "Network slicing", "Edge computing", "AI optimization"],
      benefits: ["10x faster speeds", "1ms latency", "Massive IoT support", "Real-time analytics"],
      status: "Now Available",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "AI-Powered IT Asset Management",
      description: "Intelligent platform that automatically discovers, monitors, and optimizes your entire IT infrastructure with predictive maintenance",
      icon: Monitor,
      category: "IT Management",
      features: ["Auto-discovery", "Predictive maintenance", "Lifecycle management", "Security monitoring"],
      benefits: ["45% cost reduction", "99.9% uptime", "Automated compliance", "Real-time insights"],
      status: "Now Available",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "SOC2 Compliance Automation",
      description: "AI-driven platform that automates your entire SOC2 compliance process with continuous monitoring and automated reporting",
      icon: Shield,
      category: "Security & Compliance",
      features: ["Automated monitoring", "Risk assessment", "Evidence collection", "Compliance dashboard"],
      benefits: ["95% compliance rate", "Automated audits", "Real-time monitoring", "Zero violations"],
      status: "Now Available",
      color: "from-indigo-500 to-purple-600"
    },
    {
      title: "AI Autonomous Research Assistant",
      description: "Intelligent research platform that automates literature review, data analysis, and hypothesis generation for accelerated discoveries",
      icon: Microscope,
      category: "Research & Development",
      features: ["Literature automation", "Data analysis", "Hypothesis generation", "Collaboration tools"],
      benefits: ["85% efficiency gain", "Faster discoveries", "Accurate insights", "Team collaboration"],
      status: "Now Available",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  const upcomingServices = [
    {
      title: "Quantum Financial Trading Platform",
      description: "Revolutionary quantum-powered trading platform with AI-driven market analysis and predictive modeling",
      icon: BarChart3,
      category: "Financial Technology",
      expectedDate: "Q1 2025",
      features: ["Quantum algorithms", "AI market analysis", "Real-time trading", "Risk management"]
    },
    {
      title: "AI Consciousness Evolution Platform",
      description: "Groundbreaking platform for studying and simulating consciousness evolution using advanced AI and neuroscience",
      icon: Brain,
      category: "AI Research",
      expectedDate: "Q2 2025",
      features: ["Consciousness simulation", "Neural mapping", "Evolution modeling", "Research tools"]
    },
    {
      title: "Autonomous Vehicle AI Platform",
      description: "Next-generation AI platform for autonomous vehicles with quantum-enhanced decision making and safety systems",
      icon: Car,
      category: "Transportation",
      expectedDate: "Q3 2025",
      features: ["Quantum AI", "Safety systems", "Real-time processing", "Fleet management"]
    }
  ];

  const stats = [
    { icon: Users, value: "1000+", label: "Early Adopters", description: "Already using new services" },
    { icon: TrendingUp, value: "60%", label: "Performance Boost", description: "Average improvement across services" },
    { icon: Award, value: "15+", label: "Industry Awards", description: "Recognition for innovation" },
    { icon: Globe, value: "30+", label: "Countries", description: "Global service deployment" }
  ];

  return (
    <>
      <SEOHead 
        customData={{
          title: "New Services - Zion Tech Group",
          description: "Discover our latest revolutionary AI-powered services and upcoming innovations. Stay ahead with cutting-edge technology solutions that transform your business.",
          keywords: ["new services", "AI services", "quantum computing", "5G solutions", "IT management", "compliance automation", "research assistant", "innovation"],
          type: "website",
          url: "https://ziontechgroup.com/new-services"
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                New Services
              </h1>
              <p className="text-xl md:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto">
                Discover our latest revolutionary AI-powered services and upcoming innovations. Stay ahead with cutting-edge technology that transforms your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Early Access
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  View All Services
                </Link>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <stat.icon className="h-8 w-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-cyan-300 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-400">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* New Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Now Available
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our latest revolutionary services are ready to transform your business operations and drive innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {newServices.map((service, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <service.icon className="h-12 w-12 text-cyan-400" />
                      </div>
                      <div className="ml-4">
                        <div className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium mb-3">
                          {service.category}
                        </div>
                        <h3 className="text-2xl font-semibold text-white mb-2">{service.title}</h3>
                        <p className="text-gray-300 mb-4">{service.description}</p>
                      </div>
                    </div>
                    <div className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                      {service.status}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="h-4 w-4 text-cyan-400 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <Star className="h-4 w-4 text-yellow-400 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300`}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Coming Soon
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get a sneak peek at our upcoming revolutionary services and be among the first to experience the future.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {upcomingServices.map((service, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <div className="text-center mb-6">
                    <div className="flex justify-center mb-4">
                      <service.icon className="h-12 w-12 text-cyan-400" />
                    </div>
                    <div className="inline-block bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {service.category}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="inline-block bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-medium">
                      Expected: {service.expectedDate}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Planned Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <Lightbulb className="h-4 w-4 text-yellow-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <button className="px-6 py-3 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                      Join Waitlist
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Be among the first to access our revolutionary new services and transform your business with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Early Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NewServices;