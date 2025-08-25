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
  DollarSign,
  Globe,
  Lock,
  Database
} from 'lucide-react';

const AIAutonomousBusinessPlatform = () => {
  const platformFeatures = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced machine learning algorithms that continuously learn and adapt to your business needs'
    },
    {
      icon: Cpu,
      title: 'Autonomous Operations',
      description: 'Self-managing systems that handle complex business processes without human intervention'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Instant data analysis and decision-making for optimal business performance'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC2 compliance and advanced threat protection'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Forecast trends and opportunities with AI-driven predictive modeling'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless integration with your existing team and workflow systems'
    }
  ];

  const useCases = [
    {
      title: 'Financial Services',
      description: 'Automated trading, risk assessment, and compliance monitoring',
      icon: DollarSign
    },
    {
      title: 'Healthcare',
      description: 'Patient care optimization, drug discovery, and medical research',
      icon: Shield
    },
    {
      title: 'Manufacturing',
      description: 'Predictive maintenance, quality control, and supply chain optimization',
      icon: Cpu
    },
    {
      title: 'Retail',
      description: 'Customer behavior analysis, inventory management, and pricing optimization',
      icon: TrendingUp
    },
    {
      title: 'Logistics',
      description: 'Route optimization, demand forecasting, and fleet management',
      icon: Globe
    },
    {
      title: 'Energy',
      description: 'Grid optimization, renewable energy management, and consumption prediction',
      icon: Zap
    }
  ];

  const technicalSpecs = [
    {
      category: 'AI & Machine Learning',
      specs: [
        'Deep learning neural networks',
        'Natural language processing',
        'Computer vision capabilities',
        'Reinforcement learning algorithms',
        'Transfer learning support'
      ]
    },
    {
      category: 'Infrastructure',
      specs: [
        'Cloud-native architecture',
        'Microservices design',
        'Auto-scaling capabilities',
        '99.9% uptime guarantee',
        'Global CDN distribution'
      ]
    },
    {
      category: 'Security & Compliance',
      specs: [
        'SOC2 Type II certified',
        'GDPR compliance',
        'End-to-end encryption',
        'Multi-factor authentication',
        'Regular security audits'
      ]
    },
    {
      category: 'Integration',
      specs: [
        'RESTful API endpoints',
        'Webhook support',
        'Third-party integrations',
        'Custom connector development',
        'Real-time data sync'
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
              <span className="text-zion-cyan text-sm font-medium">Next-Generation Business Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              AI Autonomous
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> Business Platform</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              The world's most advanced autonomous business platform powered by artificial intelligence. 
              Transform your operations with self-managing systems that learn, adapt, and optimize continuously.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/80 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center justify-center px-8 py-4 border border-zion-cyan/50 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/20 transition-all duration-300"
              >
                Request Demo
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
              Comprehensive AI-powered features designed for enterprise-scale business operations
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

      {/* Use Cases Section */}
      <section className="py-20 bg-zion-blue-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform is designed to transform operations across diverse industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div key={index} className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                  <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade technology built for scale, security, and performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-white mb-4">{spec.category}</h3>
                <ul className="space-y-3">
                  {spec.specs.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
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
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading organizations that have already transformed their operations with our AI platform
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

export default AIAutonomousBusinessPlatform;