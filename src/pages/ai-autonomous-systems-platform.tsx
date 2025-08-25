import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cpu, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Globe,
  Lock,
  Database,
  Network,
  Server
} from 'lucide-react';

const AIAutonomousSystemsPlatform = () => {
  const platformFeatures = [
    {
      icon: Brain,
      title: 'AI Core Engine',
      description: 'Advanced neural networks and machine learning algorithms that power autonomous decision-making'
    },
    {
      icon: Cpu,
      title: 'Autonomous Processing',
      description: 'Self-managing computational systems that optimize performance and resource allocation'
    },
    {
      icon: Zap,
      title: 'Real-time Adaptation',
      description: 'Continuous learning and adaptation to changing environments and requirements'
    },
    {
      icon: Shield,
      title: 'Intelligent Security',
      description: 'AI-powered threat detection and automated security response systems'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Forecast system performance and proactively address potential issues'
    },
    {
      icon: Users,
      title: 'Human-AI Collaboration',
      description: 'Seamless integration between autonomous systems and human operators'
    }
  ];

  const systemTypes = [
    {
      title: 'Autonomous Vehicles',
      description: 'Self-driving cars, drones, and robotic systems with advanced AI navigation',
      icon: Globe
    },
    {
      title: 'Smart Cities',
      description: 'Intelligent infrastructure management and urban planning systems',
      icon: Network
    },
    {
      title: 'Industrial Automation',
      description: 'Manufacturing and production systems with autonomous quality control',
      icon: Cpu
    },
    {
      title: 'Healthcare Systems',
      description: 'AI-powered medical diagnosis and patient care automation',
      icon: Shield
    },
    {
      title: 'Financial Trading',
      description: 'Autonomous trading algorithms and risk management systems',
      icon: TrendingUp
    },
    {
      title: 'Energy Management',
      description: 'Smart grid optimization and renewable energy systems',
      icon: Zap
    }
  ];

  const technicalArchitecture = [
    {
      category: 'AI & Machine Learning',
      components: [
        'Deep learning neural networks',
        'Reinforcement learning systems',
        'Natural language processing',
        'Computer vision capabilities',
        'Predictive modeling engines'
      ]
    },
    {
      category: 'System Infrastructure',
      components: [
        'Distributed computing architecture',
        'Edge computing capabilities',
        'Cloud-native design',
        'Microservices architecture',
        'Auto-scaling systems'
      ]
    },
    {
      category: 'Security & Safety',
      components: [
        'Multi-layered security protocols',
        'Real-time threat detection',
        'Automated incident response',
        'Compliance monitoring',
        'Safety fail-safes'
      ]
    },
    {
      category: 'Integration & APIs',
      components: [
        'RESTful API endpoints',
        'WebSocket connections',
        'Third-party integrations',
        'Custom connector framework',
        'Real-time data streaming'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-zion-cyan/10 border border-zion-cyan/30 rounded-full px-4 py-2 mb-6">
              <Brain className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-cyan text-sm font-medium">Next-Generation Autonomous Systems</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              AI Autonomous
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> Systems Platform</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              The most advanced autonomous systems platform powered by artificial intelligence. 
              Build, deploy, and manage intelligent systems that operate independently and continuously learn.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/80 transition-all duration-300 transform hover:scale-105"
              >
                Start Building
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center justify-center px-8 py-4 border border-zion-cyan/50 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/20 transition-all duration-300"
              >
                Platform Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Platform Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive features designed to create and manage the most advanced autonomous systems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-zion-cyan/30 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* System Types Section */}
      <section className="py-20 bg-zion-blue-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              System Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform supports a wide range of autonomous system applications across industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {systemTypes.map((system, index) => {
              const Icon = system.icon;
              return (
                <div key={index} className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                  <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{system.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{system.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Architecture Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Technical Architecture
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade technology built for scale, reliability, and performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {technicalArchitecture.map((arch, index) => (
              <div key={index} className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-white mb-4">{arch.category}</h3>
                <ul className="space-y-3">
                  {arch.components.map((component, compIndex) => (
                    <li key={compIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{component}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start building intelligent autonomous systems that will transform your industry
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/80 transition-all duration-300"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center justify-center px-8 py-4 border border-zion-cyan/50 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/20 transition-all duration-300"
              >
                Schedule Platform Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousSystemsPlatform;