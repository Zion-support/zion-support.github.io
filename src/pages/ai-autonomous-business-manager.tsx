import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  TrendingUp, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  DollarSign
} from 'lucide-react';

const AIAutonomousBusinessManager = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Decision Making',
      description: 'AI-powered business decisions based on real-time data analysis and predictive modeling'
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Continuous monitoring and optimization of business processes for maximum efficiency'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Proactive risk identification and mitigation strategies using advanced AI algorithms'
    },
    {
      icon: Zap,
      title: 'Automated Operations',
      description: 'Seamless automation of routine tasks and complex business workflows'
    },
    {
      icon: Users,
      title: 'Team Coordination',
      description: 'Intelligent resource allocation and team performance optimization'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive business intelligence with actionable insights and recommendations'
    }
  ];

  const benefits = [
    '24/7 autonomous business operations',
    'Real-time performance monitoring',
    'Predictive analytics and forecasting',
    'Automated decision-making processes',
    'Cost reduction through optimization',
    'Scalable business management solutions'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Basic AI decision support',
        'Performance monitoring',
        'Email alerts',
        'Basic analytics dashboard'
      ]
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Advanced AI decision making',
        'Real-time monitoring',
        'Custom alerts',
        'Advanced analytics',
        'API access',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Full autonomous operations',
        'Custom AI models',
        'White-label solutions',
        'Dedicated support',
        'Custom integrations',
        'SLA guarantees'
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
              <span className="text-zion-cyan text-sm font-medium">AI-Powered Business Management</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              AI Autonomous
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> Business Manager</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Transform your business operations with our cutting-edge AI autonomous business manager. 
              Experience intelligent decision-making, automated processes, and optimized performance 24/7.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/80 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center justify-center px-8 py-4 border border-zion-cyan/50 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/20 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Intelligent Business Management
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI autonomous business manager provides comprehensive solutions for modern business challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
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

      {/* Benefits Section */}
      <section className="py-20 bg-zion-blue-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose AI Autonomous Business Manager?
              </h2>
              <p className="text-xl text-gray-300">
                Experience the future of business management with our advanced AI solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-zion-blue-dark/50 backdrop-blur-sm border rounded-xl p-8 ${
                plan.popular 
                  ? 'border-zion-cyan/50 shadow-lg shadow-zion-cyan/20' 
                  : 'border-zion-cyan/20'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-zion-cyan text-black px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-zion-cyan text-white hover:bg-zion-cyan/80'
                      : 'border border-zion-cyan/50 text-zion-cyan hover:bg-zion-cyan/20'
                  }`}
                >
                  Get Started
                </Link>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of autonomous business management with our AI-powered solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/80 transition-all duration-300"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center justify-center px-8 py-4 border border-zion-cyan/50 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/20 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousBusinessManager;