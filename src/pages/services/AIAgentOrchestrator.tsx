import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
import { 
  Bot, 
  Network, 
  Zap, 
  Brain, 
  Users, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Cpu,
  Globe,
  Star,
  Clock,
  Target,
  Lightbulb,
  Rocket,
  Award
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const AIAgentOrchestrator: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: "Multi-Agent Coordination",
      description: "Orchestrate multiple AI agents to work together seamlessly, managing complex workflows and decision-making processes.",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Network,
      title: "Intelligent Routing",
      description: "Smart task distribution across AI agents based on expertise, availability, and workload optimization.",
      color: "from-green-500 to-blue-600"
    },
    {
      icon: Brain,
      title: "Adaptive Learning",
      description: "Continuous learning and improvement of agent coordination patterns based on performance metrics and outcomes.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Lightning-fast communication and coordination between agents for time-critical business operations.",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: Shield,
      title: "Secure Communication",
      description: "End-to-end encrypted communication channels between AI agents with robust authentication protocols.",
      color: "from-red-500 to-purple-600"
    },
    {
      icon: Globe,
      title: "Scalable Architecture",
      description: "Elastic infrastructure that scales from dozens to thousands of AI agents based on business demands.",
      color: "from-teal-500 to-blue-600"
=======
import { motion } from 'framer-motion';
import { Brain, Zap, Cpu, Target, ArrowRight, CheckCircle, Star, Users, Shield, Globe, Network, Command, Bot, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIAgentOrchestrator = () => {
  const features = [
    {
      icon: Network,
      title: "Multi-Agent Coordination",
      description: "Intelligent coordination and communication between multiple AI agents"
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Automated orchestration of complex business processes and workflows"
    },
    {
      icon: Command,
      title: "Centralized Control",
      description: "Centralized management and monitoring of all AI agents and processes"
    },
    {
      icon: Bot,
      title: "Intelligent Routing",
      description: "Smart routing of tasks to the most appropriate AI agents"
>>>>>>> origin/cursor/website-audit-and-enhancement-fc31
    }
  ];

  const capabilities = [
    {
<<<<<<< HEAD
      title: "Workflow Automation",
      description: "Automate complex business processes by coordinating specialized AI agents for each step.",
      benefits: ["Process optimization", "Error reduction", "24/7 operation", "Cost efficiency"]
    },
    {
      title: "Decision Making",
      description: "Collaborative AI decision-making with multiple agents contributing expertise and analysis.",
      benefits: ["Multi-perspective analysis", "Risk assessment", "Consensus building", "Quality assurance"]
    },
    {
      title: "Resource Management",
      description: "Intelligent allocation and management of computational resources across agent networks.",
      benefits: ["Load balancing", "Performance optimization", "Cost control", "Scalability"]
    },
    {
      title: "Monitoring & Analytics",
      description: "Comprehensive monitoring and analytics for agent performance and system health.",
      benefits: ["Real-time insights", "Performance metrics", "Predictive analytics", "Issue detection"]
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI Agent Orchestrator | Zion Tech Group"
        description="Coordinate and manage multiple AI agents with our advanced orchestration platform. Intelligent routing, scalable architecture, and seamless workflow automation."
        keywords="AI agent orchestrator, multi-agent systems, AI coordination, workflow automation, intelligent routing"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Bot className="w-4 h-4" />
                Advanced AI Orchestration
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Agent
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Orchestrator</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Harness the power of coordinated AI agents to automate complex workflows, make intelligent decisions, 
                and scale your business operations with unprecedented efficiency and reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 inline-flex items-center gap-2"
                >
                  Start Orchestrating
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/demo" 
                  className="bg-white text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors border border-gray-200 inline-flex items-center gap-2"
                >
                  Live Demo
                  <Rocket className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Orchestration Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced capabilities for managing and coordinating AI agent networks at scale.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                  <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Core Capabilities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive orchestration capabilities for enterprise-grade AI agent management.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{capability.title}</h3>
                  <p className="text-gray-600 mb-6">{capability.description}</p>
                  <div className="space-y-3">
                    {capability.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Orchestrate Your AI Agents?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Transform your business operations with intelligent AI agent coordination and automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/pricing" 
                className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors border border-white/20 inline-flex items-center gap-2"
              >
                View Pricing
                <Star className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAgentOrchestrator;
=======
import { Brain, Network, Zap, Shield, BarChart3, Users, ArrowRight, CheckCircle, Star } from 'lucide-react';

export default function AIAgentOrchestrator() {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Agent Coordination',
      description: 'Advanced algorithms that coordinate multiple AI agents for complex business processes'
    },
    {
      icon: Network,
      title: 'Multi-Agent Communication',
      description: 'Seamless communication protocols between different AI agents and systems'
    },
    {
      icon: Zap,
      title: 'Real-time Optimization',
      description: 'Dynamic resource allocation and task distribution for optimal performance'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with built-in compliance monitoring'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Comprehensive monitoring and analytics for agent performance'
    },
    {
      icon: Users,
      title: 'Human-AI Collaboration',
      description: 'Intuitive interfaces for seamless human-AI team collaboration'
    }
  ];

  const useCases = [
    'Customer Service Automation',
    'Supply Chain Optimization',
    'Financial Trading Systems',
    'Healthcare Diagnosis Support',
    'Manufacturing Process Control',
    'Research & Development'
  ];

  const benefits = [
    'Increased operational efficiency by 40-60%',
    'Reduced human error in complex processes',
    '24/7 automated operations',
    'Scalable solution for growing businesses',
    'Cost savings through automation',
    'Improved decision-making speed'
=======
      title: "Agent Management",
      description: "Comprehensive management of AI agents and their capabilities",
      icon: Bot,
      features: ["Agent registration & discovery", "Capability assessment", "Performance monitoring", "Health checks"]
    },
    {
      title: "Task Orchestration",
      description: "Intelligent task distribution and workflow management",
      icon: Workflow,
      features: ["Task prioritization", "Load balancing", "Dependency management", "Error handling"]
    },
    {
      title: "Communication Hub",
      description: "Seamless communication and data sharing between agents",
      icon: Network,
      features: ["Message routing", "Data synchronization", "Conflict resolution", "Collaborative learning"]
    },
    {
      title: "Performance Optimization",
      description: "Continuous optimization of agent performance and resource utilization",
      icon: Target,
      features: ["Performance analytics", "Resource optimization", "Learning algorithms", "Adaptive scaling"]
    }
  ];

  const benefits = [
    "Increase operational efficiency by up to 70%",
    "Reduce manual intervention by 80%",
    "Improve task completion accuracy by 90%",
    "Enable 24/7 autonomous operation",
    "Scalable agent deployment and management",
    "Real-time performance monitoring and optimization"
  ];

  const useCases = [
    "Customer Service Automation",
    "Supply Chain Management",
    "Financial Trading Systems",
    "Healthcare Diagnostics",
    "Manufacturing Process Control",
    "Research & Development",
    "Quality Assurance",
    "Predictive Maintenance"
>>>>>>> origin/cursor/website-audit-and-enhancement-fc31
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              AI Agent Orchestrator
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Orchestrate multiple AI agents to work together seamlessly, creating intelligent systems 
              that can handle complex business processes with unprecedented efficiency and accuracy.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/20 transition-all duration-300">
                Watch Demo
              </button>
            </div>
=======
import { Brain, Zap, Shield, TrendingUp, Users, Globe, ArrowRight } from 'lucide-react';

const AIAgentOrchestrator: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-blue-900/20"></div>
        <div className="absolute inset-0 bg-gray-800/20 opacity-30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/50 text-cyan-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI Innovation
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              A I Agent Orchestrator
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Leverage the power of artificial intelligence with our advanced a i agent orchestrator platform. Automate, optimize, and innovate like never before.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30"
            >
              Get Started Today
            </Link>
            <button className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400/20 transition-all duration-300">
              Watch Demo
            </button>
>>>>>>> origin/cursor/website-audit-and-enhancement-ac08
          </div>
=======
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/50 to-blue-900/50"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-blue-600 rounded-xl flex items-center justify-center">
                <Network className="w-7 h-7 text-white" />
              </div>
              <span className="text-indigo-400 font-semibold">AI Orchestration</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-400 to-blue-600 bg-clip-text text-transparent">
              AI Agent Orchestrator
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Orchestrate and coordinate multiple AI agents to work together seamlessly. 
              Automate complex workflows and achieve unprecedented operational efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                Get Started Today
              </Link>
              <Link
                to="/services/ai-autonomous-systems"
                className="border border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-fc31
        </div>
      </section>

      {/* Features Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
<<<<<<< HEAD
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Powerful Orchestration Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI Agent Orchestrator provides the tools and intelligence needed to coordinate 
              multiple AI agents effectively across your entire organization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
=======
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform delivers cutting-edge capabilities to transform your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Advanced Technology</h3>
              <p className="text-gray-300 leading-relaxed">
                Built with cutting-edge technology to deliver exceptional performance and reliability.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Scalable Solutions</h3>
              <p className="text-gray-300 leading-relaxed">
                Grow your operations seamlessly with our scalable and flexible platform.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Expert Support</h3>
              <p className="text-gray-300 leading-relaxed">
                Get 24/7 support from our team of experts to ensure your success.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Secure & Compliant</h3>
              <p className="text-gray-300 leading-relaxed">
                Enterprise-grade security and compliance built into every solution.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Easy Integration</h3>
              <p className="text-gray-300 leading-relaxed">
                Seamlessly integrate with your existing systems and workflows.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Continuous Innovation</h3>
              <p className="text-gray-300 leading-relaxed">
                Stay ahead with regular updates and new features.
              </p>
            </div>
            
>>>>>>> origin/cursor/website-audit-and-enhancement-ac08
=======
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Platform Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Agent Orchestrator provides comprehensive coordination and management 
              of multiple AI agents working together to achieve complex goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-500/40 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-indigo-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-fc31
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Use Cases Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Transform Your Business Operations
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how AI Agent Orchestration can revolutionize various aspects of your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400" />
                  <span className="text-lg font-medium text-white">{useCase}</span>
                </div>
              </div>
=======
      {/* Capabilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Orchestration Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced orchestration features that enable seamless coordination and 
              management of AI agents across complex business processes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-8 hover:border-indigo-500/40 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <capability.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-indigo-400 transition-colors">
                      {capability.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {capability.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                      <span className="text-gray-200 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-fc31
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Measurable Business Impact
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See the real results that AI Agent Orchestration delivers to organizations like yours
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <Star className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-300">{benefit}</span>
              </div>
            ))}
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our solutions are revolutionizing various sectors
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Enterprise Solutions</h3>
                  <p className="text-gray-300">
                    Transform large-scale operations with enterprise-grade capabilities and support.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Small Business</h3>
                  <p className="text-gray-300">
                    Level the playing field with affordable, powerful solutions designed for growth.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Startups</h3>
                  <p className="text-gray-300">
                    Accelerate your growth with innovative solutions that scale with your business.
                  </p>
                </div>
              </div>
              
            </div>

            <div className="space-y-8">
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Government</h3>
                  <p className="text-gray-300">
                    Meet strict compliance requirements while delivering exceptional citizen services.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Healthcare</h3>
                  <p className="text-gray-300">
                    Improve patient outcomes with secure, compliant, and innovative solutions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">6</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Education</h3>
                  <p className="text-gray-300">
                    Enhance learning experiences with cutting-edge technology and tools.
                  </p>
                </div>
              </div>
              
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-ac08
=======
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Business Impact</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience transformative improvements in operational efficiency and 
              business process automation with our AI Agent Orchestrator.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3 p-4 bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-indigo-500/20 rounded-lg hover:border-indigo-500/40 transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-indigo-400 flex-shrink-0" />
                <span className="text-gray-200">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Industry Applications</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Agent Orchestrator is designed to work across industries, 
              providing intelligent automation for complex business processes.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-indigo-500/20 rounded-lg p-4 text-center hover:border-indigo-500/40 transition-all duration-300 group"
              >
                <span className="text-gray-200 group-hover:text-indigo-400 transition-colors font-medium">
                  {useCase}
                </span>
              </motion.div>
            ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-fc31
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Orchestrate Your AI Agents?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the future of intelligent business automation with our AI Agent Orchestrator
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
              Schedule Demo
            </button>
            <Link to="/contact" className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/20 transition-all duration-300 flex items-center justify-center">
              Contact Sales
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Related Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our other AI and automation solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/services/ai-autonomous-systems" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 group-hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                  AI Autonomous Systems
                </h3>
                <p className="text-gray-400 mb-4">
                  Build intelligent systems that operate independently and adapt to changing conditions
                </p>
                <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
            
            <Link to="/services/ai-autonomous-business-operations" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 group-hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                  AI Autonomous Business Operations
                </h3>
                <p className="text-gray-400 mb-4">
                  Automate complex business processes with intelligent AI agents
                </p>
                <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
            
            <Link to="/services/ai-autonomous-ecosystem" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 group-hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                  AI Autonomous Ecosystem
                </h3>
                <p className="text-gray-400 mb-4">
                  Create a comprehensive ecosystem of interconnected AI systems
                </p>
                <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-cyan-900/30 via-blue-900/30 to-purple-900/30 rounded-3xl p-12 border border-cyan-500/30">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business with our cutting-edge AI solutions today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 inline-flex items-center"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400/20 transition-all duration-300"
              >
                Explore All Services
              </Link>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-ac08
          </div>
=======
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Orchestrate Your AI Agents?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business processes with intelligent AI agent orchestration 
              that delivers real results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                Schedule a Demo
              </Link>
              <Link
                to="/pricing"
                className="border border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-fc31
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> origin/cursor/website-audit-and-enhancement-9ceb
=======
};

export default AIAgentOrchestrator;
>>>>>>> origin/cursor/website-audit-and-enhancement-ac08
=======
};

export default AIAgentOrchestrator;
>>>>>>> origin/cursor/website-audit-and-enhancement-fc31
