import React from 'react';
import { SEOHead } from '../../components/SEOHead';
import { 
  Cpu, 
  Network, 
  Database, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Lock,
  Brain
} from 'lucide-react';

const AIAutonomousBusinessPlatform: React.FC = () => {
  const features = [
    {
      icon: Cpu,
      title: "Intelligent Core Engine",
      description: "Advanced AI algorithms that power autonomous decision-making and business optimization"
    },
    {
      icon: Network,
      title: "Seamless Integration",
      description: "Connect with existing systems and tools through our comprehensive API ecosystem"
    },
    {
      icon: Database,
      title: "Data Intelligence",
      description: "Real-time data processing and analytics for actionable business insights"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with SOC2 compliance and advanced threat protection"
    }
  ];

  const capabilities = [
    {
      title: "Business Process Automation",
      description: "Automate complex workflows and business processes with AI intelligence",
      icon: Zap
    },
    {
      title: "Predictive Analytics",
      description: "Forecast trends and make data-driven decisions with machine learning",
      icon: Brain
    },
    {
      title: "Customer Experience Optimization",
      description: "Personalize customer interactions and improve satisfaction scores",
      icon: Users
    },
    {
      title: "Resource Management",
      description: "Optimize resource allocation and reduce operational costs",
      icon: BarChart3
    }
  ];

  const benefits = [
    "Reduce operational costs by up to 45%",
    "Increase productivity by 60%",
    "Improve decision accuracy to 98%",
    "24/7 autonomous operation",
    "Scalable across all business units",
    "Real-time performance monitoring"
  ];

  const pricing = {
    starter: {
      price: "$3,000/month",
      features: [
        "Core AI platform",
        "Up to 10 business processes",
        "Basic analytics dashboard",
        "Email support",
        "Monthly reports"
      ]
    },
    professional: {
      price: "$6,500/month",
      features: [
        "Advanced AI capabilities",
        "Up to 50 business processes",
        "Custom dashboards",
        "Priority support",
        "API access",
        "Weekly optimization"
      ]
    },
    enterprise: {
      price: "$15,000/month",
      features: [
        "Full AI platform suite",
        "Unlimited processes",
        "Custom AI models",
        "Dedicated support",
        "White-label options",
        "Custom development"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <SEOHead 
        title="AI Autonomous Business Platform - Zion Tech Group"
        description="Transform your business with our comprehensive AI Autonomous Business Platform. End-to-end automation, intelligent decision-making, and scalable solutions."
        keywords="AI business platform, autonomous platform, business automation, AI integration, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Cpu className="h-12 w-12 text-cyan-400 mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              AI Autonomous Business Platform
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            The complete AI-powered business platform that automates, optimizes, and scales your operations. 
            Built for the future of autonomous business management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Free Trial
            </button>
            <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Request Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Platform Features
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

      {/* Capabilities Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Platform Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                <div className="bg-cyan-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <capability.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{capability.title}</h3>
                <p className="text-gray-300 text-lg">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Why Choose Our Platform?
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
              <h3 className="text-2xl font-semibold text-white mb-6">Performance Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Uptime</span>
                  <span className="text-cyan-400 font-semibold">99.99%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Response Time</span>
                  <span className="text-cyan-400 font-semibold">&lt;100ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Scalability</span>
                  <span className="text-cyan-400 font-semibold">10M+ users</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Security</span>
                  <span className="text-cyan-400 font-semibold">SOC2 Type II</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Pricing Plans
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
            Join the future of autonomous business management. Our AI platform is ready to scale your operations.
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

export default AIAutonomousBusinessPlatform;
