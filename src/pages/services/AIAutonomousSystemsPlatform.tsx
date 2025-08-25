import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Target, 
  TrendingUp, 
  Shield, 
  Users, 
  BarChart3, 
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Award,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Eye,
  BarChart,
  Rocket,
  Layers,
  Workflow,
  Monitor,
  Settings,
  Cloud,
  Server,

  Gauge,
  CpuIcon,
  Building
} from 'lucide-react';

const AIAutonomousSystemsPlatform = () => {
  const platformFeatures = [
    {
      icon: Brain,
      title: "AI Core Engine",
      description: "Advanced artificial intelligence that powers all autonomous systems and decision-making processes"
    },
    {
      icon: Server,
      title: "System Integration",
      description: "Seamless integration with existing infrastructure and third-party systems for unified operations"
    },
    {
      icon: Monitor,
      title: "Real-Time Monitoring",
      description: "Continuous monitoring and analysis of system performance, health, and operational metrics"
    },
    {
      icon: Zap,
      title: "Automated Response",
      description: "Intelligent automated responses to system events, anomalies, and operational requirements"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Built-in security protocols and compliance automation for enterprise-grade protection"
    },
    {
      icon: Cloud,
      title: "Scalable Architecture",
      description: "Cloud-native architecture that scales automatically with your business growth and requirements"
    }
  ];

  const autonomousSystems = [
    {
      title: "IT Infrastructure Management",
      description: "Autonomous management of servers, networks, storage, and cloud resources",
      icon: Server,
      capabilities: ["Resource optimization", "Performance monitoring", "Automated scaling", "Fault tolerance"]
    },
    {
      title: "Business Process Automation",
      description: "End-to-end automation of business workflows and operational processes",
      icon: Workflow,
      capabilities: ["Process optimization", "Workflow automation", "Task scheduling", "Performance tracking"]
    },
    {
      title: "Customer Service Automation",
      description: "Intelligent customer support and service delivery systems",
      icon: Users,
      capabilities: ["24/7 support", "Intelligent routing", "Automated responses", "Customer analytics"]
    },
    {
      title: "Security & Threat Management",
      description: "Proactive security monitoring and automated threat response systems",
      icon: Shield,
      capabilities: ["Threat detection", "Automated response", "Security monitoring", "Compliance management"]
    }
  ];

  const benefits = [
    "Reduce operational costs by up to 80%",
    "Increase system reliability by 99.9%",
    "24/7 autonomous operation",
    "Real-time system optimization",
    "Predictive maintenance",
    "Automated problem resolution",
    "Scalable system architecture",
    "Enhanced security posture"
  ];

  const industries = [
    "Manufacturing",
    "Healthcare",
    "Financial Services",
    "Retail & E-commerce",
    "Technology",
    "Transportation",
    "Energy",
    "Government"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <CpuIcon className="w-12 h-12 text-cyan-400 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                AI Autonomous Systems Platform
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              The comprehensive platform for building, deploying, and managing intelligent autonomous systems 
              that operate independently and optimize your business operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300">
                <Play className="mr-2 w-5 h-5" />
                Platform Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Platform Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Autonomous Systems Platform provides the foundation for building intelligent, 
              self-operating systems that transform your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Autonomous Systems */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Autonomous System Types
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build and deploy various types of autonomous systems tailored to your specific business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {autonomousSystems.map((system, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                    <system.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{system.title}</h3>
                    <p className="text-gray-300 text-sm">{system.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {system.capabilities.map((capability, capIndex) => (
                    <div key={capIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {capability}
                    </div>
                  ))}
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
              Transform Your Operations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented efficiency and reliability with AI-powered autonomous systems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center hover:border-cyan-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform is designed to work across all industries with specialized configurations 
              for your specific operational requirements
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center hover:border-cyan-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/50 to-blue-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Autonomous Systems?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the future of autonomous operations with our AI Autonomous Systems Platform. 
            Start building intelligent systems that work for you 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousSystemsPlatform;