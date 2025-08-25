import React from 'react';
import { Link } from 'react-router-dom';
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
    }
  ];

  const capabilities = [
    {
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