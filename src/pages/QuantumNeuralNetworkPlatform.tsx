import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { 
  Brain, 
  Cpu, 
  Zap, 
  Shield, 
  Users, 
  BarChart3, 
  Target,
  CheckCircle,
  Star,
  Atom,
  Network,
  Database
} from 'lucide-react';

const QuantumNeuralNetworkPlatform: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Quantum Neural Networks",
      description: "Advanced quantum computing algorithms that revolutionize neural network processing"
    },
    {
      icon: Cpu,
      title: "Hybrid Computing",
      description: "Seamless integration of quantum and classical computing for optimal performance"
    },
    {
      icon: Zap,
      title: "Quantum Speedup",
      description: "Exponential performance improvements for complex computational tasks"
    },
    {
      icon: Shield,
      title: "Quantum Security",
      description: "Unbreakable encryption using quantum key distribution and quantum-resistant algorithms"
    }
  ];

  const applications = [
    {
      title: "Drug Discovery",
      description: "Accelerate pharmaceutical research with quantum molecular modeling",
      icon: Brain
    },
    {
      title: "Financial Modeling",
      description: "Advanced risk assessment and portfolio optimization using quantum algorithms",
      icon: BarChart3
    },
    {
      title: "Climate Prediction",
      description: "Complex climate modeling and weather forecasting with quantum precision",
      icon: Network
    },
    {
      title: "AI Training",
      description: "Train large language models and neural networks with quantum acceleration",
      icon: Cpu
    }
  ];

  const benefits = [
    "1000x faster computation for complex problems",
    "Unbreakable quantum encryption",
    "Revolutionary AI model training",
    "Accelerated scientific research",
    "Future-proof technology investment",
    "Competitive advantage in innovation"
  ];

  const pricing = {
    research: {
      price: "$25,000/month",
      features: [
        "Basic quantum access",
        "Research support",
        "Documentation",
        "Email support",
        "Monthly reports"
      ]
    },
    enterprise: {
      price: "$75,000/month",
      features: [
        "Full quantum platform access",
        "Custom quantum algorithms",
        "Dedicated support team",
        "API access",
        "Custom integrations",
        "Priority support"
      ]
    },
    custom: {
      price: "Custom Pricing",
      features: [
        "Custom quantum solutions",
        "White-label platform",
        "Dedicated infrastructure",
        "Custom development",
        "24/7 support",
        "Training & certification"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <SEOHead 
        title="Quantum Neural Network Platform - Zion Tech Group"
        description="Revolutionary quantum neural network platform combining quantum computing with advanced AI. Experience exponential performance improvements and breakthrough capabilities."
        keywords="quantum neural networks, quantum computing, AI platform, quantum AI, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Atom className="h-12 w-12 text-cyan-400 mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Quantum Neural Network Platform
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            The future of computing is here. Our quantum neural network platform combines the power of 
            quantum computing with advanced AI to solve previously impossible problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Request Access
            </button>
            <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Revolutionary Features
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

      {/* Applications Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Revolutionary Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                <div className="bg-cyan-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <app.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{app.title}</h3>
                <p className="text-gray-300 text-lg">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Why Choose Quantum Neural Networks?
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
                  <span className="text-gray-300">Speed Improvement</span>
                  <span className="text-cyan-400 font-semibold">1000x</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Quantum Qubits</span>
                  <span className="text-cyan-400 font-semibold">100+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Error Rate</span>
                  <span className="text-cyan-400 font-semibold">&lt;0.1%</span>
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Access Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(pricing).map(([plan, details]) => (
              <div key={plan} className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                plan === 'enterprise' ? 'border-cyan-500 ring-2 ring-cyan-500/20' : 'border-gray-700'
              }`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-white capitalize mb-2">{plan}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{details.price}</div>
                  {plan === 'enterprise' && (
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
                  plan === 'custom' ? 'bg-cyan-500 hover:bg-cyan-600 text-white' 
                    : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                }`}>
                  {plan === 'custom' ? 'Contact Sales' : 'Get Started'}
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
            Ready for the Quantum Future?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Join the quantum revolution and solve problems that were once impossible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Request Access
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

export default QuantumNeuralNetworkPlatform;