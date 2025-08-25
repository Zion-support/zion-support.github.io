import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Network, 
  Zap, 
  Shield, 
  Cpu, 
  Database, 
  Users, 
  BarChart3, 
  Target, 
  Lock, 
  Code, 
  Clock, 
  Eye, 
  ArrowRight,
  Play,
  Pause,
  Settings,
  Monitor,
  Activity,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Info,
  DollarSign
} from 'lucide-react';

export default function AIAgentOrchestrator() {
  const features = [
    {
      icon: Brain,
      title: "Intelligent Agent Management",
      description: "AI-powered orchestration of multiple autonomous agents with intelligent task distribution and resource allocation.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Network,
      title: "Multi-Agent Coordination",
      description: "Seamless coordination between different AI agents, ensuring optimal collaboration and conflict resolution.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Real-time Performance Optimization",
      description: "Dynamic optimization of agent performance based on real-time metrics and adaptive learning algorithms.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Advanced Security & Compliance",
      description: "Enterprise-grade security protocols and compliance monitoring for all AI agent operations.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Cpu,
      title: "Scalable Infrastructure",
      description: "Cloud-native architecture that scales automatically to handle thousands of concurrent AI agents.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Intelligent Data Management",
      description: "Smart data routing and processing across agents with built-in data governance and privacy controls.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const useCases = [
    {
      title: "Customer Service Automation",
      description: "Orchestrate multiple AI agents for seamless customer support across all channels",
      icon: Users,
      benefits: ["24/7 availability", "Multi-language support", "Intelligent routing", "Context awareness"]
    },
    {
      title: "Business Process Automation",
      description: "Coordinate AI agents to automate complex business workflows and decision-making processes",
      icon: BarChart3,
      benefits: ["Process optimization", "Error reduction", "Cost savings", "Scalability"]
    },
    {
      title: "Research & Development",
      description: "Manage AI research agents for automated data collection, analysis, and insight generation",
      icon: Brain,
      benefits: ["Faster research", "Comprehensive coverage", "Pattern recognition", "Innovation acceleration"]
    },
    {
      title: "Cybersecurity Operations",
      description: "Orchestrate security AI agents for comprehensive threat detection and response",
      icon: Shield,
      benefits: ["Real-time monitoring", "Threat intelligence", "Automated response", "Risk mitigation"]
    }
  ];

  const capabilities = [
    {
      category: "Agent Management",
      items: [
        "Agent lifecycle management",
        "Performance monitoring",
        "Resource allocation",
        "Load balancing",
        "Fault tolerance",
        "Auto-scaling"
      ]
    },
    {
      category: "Intelligence & Learning",
      items: [
        "Machine learning integration",
        "Adaptive algorithms",
        "Pattern recognition",
        "Predictive analytics",
        "Continuous improvement",
        "Knowledge sharing"
      ]
    },
    {
      category: "Security & Compliance",
      items: [
        "Role-based access control",
        "Data encryption",
        "Audit logging",
        "Compliance monitoring",
        "Threat detection",
        "Privacy protection"
      ]
    },
    {
      category: "Integration & APIs",
      items: [
        "RESTful APIs",
        "Webhook support",
        "Third-party integrations",
        "Custom connectors",
        "Real-time sync",
        "Data transformation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
                <Brain className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              AI Agent Orchestrator
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Master the orchestration of multiple AI agents with our intelligent platform. 
              Coordinate, optimize, and scale autonomous AI systems for maximum efficiency and impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <Play className="w-5 h-5 mr-2" />
                Get Started
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 bg-gray-800/50 hover:bg-gray-700/50 text-white font-semibold rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-200"
              >
                <Monitor className="w-5 h-5 mr-2" />
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Orchestration Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Agent Orchestrator provides enterprise-grade tools to manage, coordinate, and optimize 
              multiple AI agents across your organization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-gray-800/30 hover:bg-gray-700/40 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
              >
                <div className={`p-4 rounded-xl bg-gradient-to-r ${feature.color} w-fit mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your Business with AI Orchestration
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI Agent Orchestration can revolutionize your operations across various industries and use cases.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="p-8 bg-gray-800/30 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{useCase.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{useCase.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white">Key Benefits:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Platform Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to orchestrate AI agents at scale with enterprise-grade reliability and security.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((category, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800/30 rounded-xl border border-gray-700"
              >
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-2 text-gray-300 text-sm">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Orchestrate Your AI Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join leading organizations that are already transforming their operations with AI Agent Orchestration. 
            Start your journey today and unlock the full potential of autonomous AI systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Get Started Now
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 bg-gray-800/50 hover:bg-gray-700/50 text-white font-semibold rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-200"
            >
              <DollarSign className="w-5 h-5 mr-2" />
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Related AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive suite of AI-powered solutions and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              to="/services/ai-autonomous-systems"
              className="group p-6 bg-gray-800/30 hover:bg-gray-700/40 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-200"
            >
              <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg w-fit mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200">
                AI Autonomous Systems
              </h3>
              <p className="text-gray-400 text-sm">
                Advanced autonomous AI systems for complex decision-making and operations.
              </p>
            </Link>
            
            <Link
              to="/ai-autonomous-research-assistant"
              className="group p-6 bg-gray-800/30 hover:bg-gray-700/40 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-200"
            >
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg w-fit mb-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-200">
                AI Research Assistant
              </h3>
              <p className="text-gray-400 text-sm">
                AI-powered research automation and intelligent data analysis.
              </p>
            </Link>
            
            <Link
              to="/services/cybersecurity"
              className="group p-6 bg-gray-800/30 hover:bg-gray-700/40 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-200"
            >
              <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg w-fit mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors duration-200">
                Cybersecurity Services
              </h3>
              <p className="text-gray-400 text-sm">
                Comprehensive security solutions with AI-powered threat detection.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}