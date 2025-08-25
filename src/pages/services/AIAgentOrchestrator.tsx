import React from 'react';
import { Link } from 'react-router-dom';
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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
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
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
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
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
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
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
          </div>
        </div>
      </section>
    </div>
  );
}