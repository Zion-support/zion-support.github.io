import React from 'react';
import { SEOHead } from '../../components/SEOHead';
import { 
  Bot, 
  Brain, 
  TrendingUp, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  Target,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';

const AIAutonomousBusinessManager: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Intelligent Decision Making",
      description: "AI-powered decision engine that analyzes data and makes strategic business decisions autonomously"
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Continuously monitors and optimizes business processes for maximum efficiency and profitability"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Advanced risk assessment and mitigation strategies using machine learning algorithms"
    },
    {
      icon: Zap,
      title: "Real-time Analytics",
      description: "Instant insights and actionable intelligence from your business data"
    }
  ];

  const benefits = [
    "24/7 autonomous business monitoring and optimization",
    "Data-driven decision making with 95% accuracy",
    "Reduced operational costs by up to 40%",
    "Improved customer satisfaction and retention",
    "Scalable AI solutions that grow with your business"
  ];

  const pricing = {
    basic: {
      price: "$2,500/month",
      features: [
        "Core AI decision engine",
        "Basic analytics dashboard",
        "Email support",
        "Monthly performance reports"
      ]
    },
    professional: {
      price: "$5,000/month",
      features: [
        "Advanced AI algorithms",
        "Real-time monitoring",
        "Priority support",
        "Custom integrations",
        "Weekly optimization reports"
      ]
    },
    enterprise: {
      price: "$10,000/month",
      features: [
        "Full AI autonomy suite",
        "Custom AI model training",
        "Dedicated support team",
        "API access",
        "Daily optimization reports",
        "Custom features development"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <SEOHead 
        title="AI Autonomous Business Manager - Zion Tech Group"
        description="Transform your business with our AI Autonomous Business Manager. Intelligent decision-making, performance optimization, and 24/7 business monitoring."
        keywords="AI business manager, autonomous business, AI decision making, business optimization, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Bot className="h-12 w-12 text-cyan-400 mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              AI Autonomous Business Manager
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            The future of business management is here. Our AI system operates autonomously, 
            making intelligent decisions and optimizing your business 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Started
            </button>
            <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Revolutionary AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <div className="bg-cyan-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Why Choose AI Autonomous Business Manager?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Success Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Decision Accuracy</span>
                  <span className="text-cyan-400 font-semibold">95%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Cost Reduction</span>
                  <span className="text-cyan-400 font-semibold">40%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Response Time</span>
                  <span className="text-cyan-400 font-semibold">Real-time</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Uptime</span>
                  <span className="text-cyan-400 font-semibold">99.9%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(pricing).map(([plan, details]) => (
              <div key={plan} className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                plan === 'professional' ? 'border-cyan-500 ring-2 ring-cyan-500/20' : 'border-gray-700'
              }`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-white capitalize mb-2">{plan}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{details.price}</div>
                  {plan === 'professional' && (
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {details.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan === 'professional' 
                    ? 'bg-cyan-500 hover:bg-cyan-600 text-white' 
                    : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Join the future of autonomous business management. Our AI system is ready to optimize your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousBusinessManager;