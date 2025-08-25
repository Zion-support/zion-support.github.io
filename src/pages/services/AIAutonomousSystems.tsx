import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cpu, 
  Zap, 
  Shield, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Bot,
  Network,
  Database,
  Cloud,
  Lock,
  BarChart3,
  Clock,
  Target,
  Code
} from 'lucide-react';

export default function AIAutonomousSystems() {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Decision Making',
      description: 'AI systems that make autonomous decisions based on real-time data and learned patterns'
    },
    {
              icon: Bot,
      title: 'Autonomous Operations',
      description: 'Self-operating systems that require minimal human intervention for routine tasks'
    },
    {
      icon: Network,
      title: 'Distributed Intelligence',
      description: 'Multi-agent systems that collaborate and coordinate across networks'
    },
    {
      icon: Database,
      title: 'Continuous Learning',
      description: 'Systems that improve performance through ongoing data analysis and adaptation'
    }
  ];

  const benefits = [
    '24/7 autonomous operation without human supervision',
    'Real-time decision making and response',
    'Scalable performance across multiple systems',
    'Continuous improvement through machine learning',
    'Reduced operational costs and human error',
    'Enhanced security and threat detection'
  ];

  const useCases = [
    {
      title: 'Manufacturing Automation',
      description: 'Intelligent production lines that self-optimize and maintain quality standards',
      icon: Cpu
    },
    {
      title: 'Financial Trading',
      description: 'AI-powered trading systems that execute strategies autonomously',
      icon: TrendingUp
    },
    {
      title: 'Healthcare Monitoring',
      description: 'Patient monitoring systems that detect issues and alert medical staff',
      icon: Users
    },
    {
      title: 'Cybersecurity',
      description: 'Threat detection and response systems that protect networks automatically',
      icon: Shield
    }
  ];

  const technologies = [
    'Machine Learning & Deep Learning',
    'Neural Networks & AI Algorithms',
    'IoT & Edge Computing',
    'Cloud Infrastructure',
    'Real-time Data Processing',
    'Blockchain for Security'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Autonomous Systems</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Build intelligent, self-operating systems that learn, adapt, and make decisions autonomously. 
            Transform your business operations with cutting-edge AI technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
            >
              Get Started
            </Link>
            <Link
              to="/case-studies"
              className="px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Core Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose AI Autonomous Systems?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our AI autonomous systems deliver unprecedented efficiency, accuracy, and scalability 
                while reducing operational costs and human error.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center">
                <Brain className="w-32 h-32 text-cyan-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Industry Applications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-400 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Technology Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-800/50 rounded-lg">
                <div className="w-3 h-3 bg-cyan-400 rounded-full mr-3"></div>
                <span className="text-gray-300">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Implementation Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Assessment</h3>
              <p className="text-gray-400">Analyze your current systems and identify automation opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Design</h3>
              <p className="text-gray-400">Create custom AI architecture and autonomous workflows</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Development</h3>
              <p className="text-gray-400">Build and integrate AI systems with your existing infrastructure</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Deployment</h3>
              <p className="text-gray-400">Launch and monitor autonomous systems in production</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Automate Your Operations?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Let's discuss how AI autonomous systems can transform your business and drive unprecedented efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/services"
              className="px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}