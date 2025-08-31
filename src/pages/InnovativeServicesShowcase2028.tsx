import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  TrendingUp, 
  Building2, 
  Car, 
  Atom, 
  Cloud, 
  Server,
  Lock,
  Zap,
  Users,
  BarChart3,
  MessageCircle,
  Workflow,
  Calendar,
  PenTool,
  Eye,
  Activity,
  Rocket,
  Globe,
  Cpu,
  Network,
  Wifi,
  Satellite,
  Coins,
  DollarSign,
  Lightbulb,
  TrafficCone,
  Leaf,
  Droplets,
  Gauge,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const InnovativeServicesShowcase2028: React.FC = () => {
  const services = [
    {
      category: "AI & Machine Learning",
      services: [
        {
          name: "AI Autonomous Vehicle Management Platform",
          description: "Revolutionary AI-powered autonomous vehicle fleet management with real-time monitoring, predictive maintenance, and intelligent optimization.",
          path: "/services/ai-autonomous-vehicle-management-platform",
          icon: Car,
          color: "from-blue-500 to-cyan-500",
          features: ["Real-time monitoring", "AI predictive maintenance", "Fleet optimization", "Advanced safety systems"]
        },
        {
          name: "AI Smart City Infrastructure Management",
          description: "Transform cities into sustainable, efficient, and intelligent urban ecosystems with AI-powered infrastructure management.",
          path: "/services/ai-smart-city-infrastructure-management",
          icon: Building2,
          color: "from-green-500 to-emerald-500",
          features: ["Energy management", "Traffic optimization", "Water systems", "Waste management"]
        },
        {
          name: "AI Quantum Financial Trading Platform",
          description: "Revolutionary AI-powered quantum financial trading with real-time market analysis, predictive algorithms, and portfolio optimization.",
          path: "/services/ai-quantum-financial-trading-platform",
          icon: TrendingUp,
          color: "from-purple-500 to-pink-500",
          features: ["Quantum computing", "AI market analysis", "Algorithmic trading", "Risk management"]
        },
        {
          name: "AI Business Intelligence Dashboard",
          description: "Advanced AI-powered business intelligence with real-time analytics, predictive insights, and automated reporting.",
          path: "/services/ai-business-intelligence-dashboard",
          icon: BarChart3,
          color: "from-indigo-500 to-purple-500",
          features: ["Real-time analytics", "Predictive insights", "Automated reporting", "Custom dashboards"]
        },
        {
          name: "AI Customer Support Automation",
          description: "Intelligent customer support automation with 24/7 availability, smart issue resolution, and personalized assistance.",
          path: "/services/ai-customer-support-automation",
          icon: MessageCircle,
          color: "from-green-500 to-teal-500",
          features: ["24/7 availability", "Smart issue resolution", "Personalized support", "Performance analytics"]
        }
      ]
    },
    {
      category: "IT & Infrastructure",
      services: [
        {
          name: "Cloud & DevOps Solutions",
          description: "Comprehensive cloud infrastructure and DevOps automation for scalable, reliable, and efficient application deployment.",
          path: "/services/cloud-devops",
          icon: Cloud,
          color: "from-blue-500 to-indigo-500",
          features: ["Cloud migration", "DevOps automation", "CI/CD pipelines", "Infrastructure as code"]
        },
        {
          name: "Cybersecurity Platform",
          description: "Advanced cybersecurity solutions with AI-powered threat detection, zero-trust security, and comprehensive protection.",
          path: "/services/cybersecurity",
          icon: Shield,
          color: "from-red-500 to-pink-500",
          features: ["AI threat detection", "Zero-trust security", "Incident response", "Security training"]
        },
        {
          name: "Quantum Computing Solutions",
          description: "Cutting-edge quantum computing services for complex problem-solving, optimization, and research applications.",
          path: "/services/quantum-computing-solutions",
          icon: Atom,
          color: "from-purple-500 to-violet-500",
          features: ["Quantum algorithms", "Optimization problems", "Research applications", "Custom development"]
        },
        {
          name: "Edge Computing Solutions",
          description: "Distributed edge computing infrastructure for low-latency, high-performance applications and IoT deployments.",
          path: "/services/edge-computing-solutions",
          icon: Cpu,
          color: "from-orange-500 to-red-500",
          features: ["Low latency", "High performance", "IoT support", "Distributed architecture"]
        }
      ]
    },
    {
      category: "Micro SaaS & Specialized",
      services: [
        {
          name: "AI Project Management Platform",
          description: "Intelligent project management with AI-powered planning, resource optimization, and automated workflows.",
          path: "/services/ai-project-management-platform",
          icon: Calendar,
          color: "from-green-500 to-blue-500",
          features: ["AI planning", "Resource optimization", "Automated workflows", "Real-time tracking"]
        },
        {
          name: "AI Workflow Orchestrator",
          description: "Advanced workflow automation with AI-powered decision making, process optimization, and intelligent routing.",
          path: "/services/ai-workflow-orchestrator",
          icon: Workflow,
          color: "from-cyan-500 to-blue-500",
          features: ["AI decision making", "Process optimization", "Intelligent routing", "Performance analytics"]
        },
        {
          name: "AI Content Creation Studio",
          description: "Revolutionary AI-powered content creation with intelligent writing, SEO optimization, and audience targeting.",
          path: "/services/ai-content-creation-studio",
          icon: PenTool,
          color: "from-pink-500 to-purple-500",
          features: ["AI writing", "SEO optimization", "Audience targeting", "Content analytics"]
        },
        {
          name: "AI Predictive Maintenance",
          description: "Intelligent predictive maintenance with machine learning algorithms for equipment monitoring and failure prevention.",
          path: "/services/ai-predictive-maintenance",
          icon: Activity,
          color: "from-yellow-500 to-orange-500",
          features: ["Equipment monitoring", "Failure prediction", "Cost reduction", "Uptime optimization"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>Innovative Services Showcase 2028 | Zion Tech Group</title>
        <meta name="description" content="Discover Zion Tech Group's revolutionary AI-powered services for 2028. From autonomous vehicles to smart cities, quantum computing to micro SaaS solutions." />
        <meta name="keywords" content="AI services 2028, autonomous vehicles, smart cities, quantum computing, micro SaaS, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-services-showcase-2028" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovative Services
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Showcase 2028
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience the future of technology with our revolutionary AI-powered services. From autonomous vehicles 
              to smart cities, quantum computing to micro SaaS solutions - we're building tomorrow's innovations today.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
              Explore Services
            </button>
            <button className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      {services.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 px-4 sm:px-6 lg:px-8 ${categoryIndex % 2 === 0 ? 'bg-slate-800/50' : ''}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {category.category}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Revolutionary solutions that transform industries and drive innovation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300 group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    to={service.path}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors group-hover:translate-x-1 transition-transform"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with cutting-edge technologies for maximum performance, scalability, and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI & Machine Learning</h3>
              <p className="text-gray-300 text-sm">
                TensorFlow, PyTorch, and custom neural networks
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Atom className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quantum Computing</h3>
              <p className="text-gray-300 text-sm">
                IBM Q, Google Quantum, and custom algorithms
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Cloud Infrastructure</h3>
              <p className="text-gray-300 text-sm">
                AWS, Azure, and Google Cloud with global distribution
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Edge Computing</h3>
              <p className="text-gray-300 text-sm">
                Distributed computing for low-latency applications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented innovation, efficiency, and transformation with our cutting-edge services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Innovation First</h3>
              <p className="text-gray-300">
                We're constantly pushing the boundaries of what's possible with AI, quantum computing, and emerging technologies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Enterprise Grade</h3>
              <p className="text-gray-300">
                All our solutions are built with enterprise-grade security, scalability, and reliability in mind.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Expert Support</h3>
              <p className="text-gray-300">
                Our team of experts provides comprehensive support and guidance throughout your digital transformation journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the future of technology with our innovative AI-powered services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300">
              Contact Sales Team
            </button>
          </div>
          <p className="text-gray-400 mt-6">
            No credit card required • 30-day free trial • Full support included
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Need Help Getting Started?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-blue-400 mb-4" />
              <h4 className="text-white font-semibold mb-2">Call Us</h4>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-blue-400 mb-4" />
              <h4 className="text-white font-semibold mb-2">Email Us</h4>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-blue-400 mb-4" />
              <h4 className="text-white font-semibold mb-2">Visit Us</h4>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2028;
