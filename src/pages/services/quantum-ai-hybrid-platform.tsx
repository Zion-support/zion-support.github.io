import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Atom, 
  Brain, 
  Zap, 
  Shield, 
  Users, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Star,
  Target,
  Lightbulb,
  Database,
  Activity,
  Globe,
  Lock,
  Network,
  Server,
  FileText,
  BarChart3,
  TrendingUp,
  Cpu,
  CircuitBoard,
  Rocket,
  Satellite,
  Microscope,
  Flask,
  Beaker,
  TestTube,
  Gauge,
  CpuIcon
} from 'lucide-react';

export function QuantumAIHybridPlatform() {
  const features = [
    {
      icon: Atom,
      title: "Quantum Computing Power",
      description: "Leverage quantum bits (qubits) for exponentially faster computation of complex problems and optimization tasks."
    },
    {
      icon: Brain,
      title: "AI Quantum Hybrid Algorithms",
      description: "Combines quantum computing with artificial intelligence for breakthrough performance in machine learning and data analysis."
    },
    {
      icon: Zap,
      title: "Quantum Speedup",
      description: "Achieve 1000x+ speed improvements for specific computational tasks compared to classical computing approaches."
    },
    {
      icon: Shield,
      title: "Quantum-Safe Security",
      description: "Post-quantum cryptography and quantum-resistant algorithms to protect against future quantum attacks."
    },
    {
      icon: Network,
      title: "Quantum Cloud Access",
      description: "Access quantum computing resources through our cloud platform without expensive hardware investments."
    },
    {
      icon: Users,
      title: "Expert Quantum Team",
      description: "Dedicated quantum physicists and AI researchers to help optimize your quantum algorithms and applications."
    }
  ];

  const pricingPlans = [
    {
      name: "Quantum Starter",
      price: "$1,999",
      period: "/month",
      description: "Perfect for research institutions and startups exploring quantum computing",
      features: [
        "Up to 100 quantum circuit executions",
        "Basic quantum algorithms library",
        "AI model training on quantum simulators",
        "Email support",
        "100GB quantum data storage",
        "Basic quantum education resources"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Quantum Professional",
      price: "$4,999",
      period: "/month",
      description: "Ideal for companies developing quantum applications and AI models",
      features: [
        "Up to 1000 quantum circuit executions",
        "Advanced quantum algorithms",
        "Real quantum hardware access",
        "Priority support",
        "1TB quantum data storage",
        "Custom quantum circuit design",
        "API access",
        "Quantum AI model optimization"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Quantum Enterprise",
      price: "$12,999",
      period: "/month",
      description: "For large organizations requiring enterprise quantum computing solutions",
      features: [
        "Unlimited quantum executions",
        "Custom quantum hardware access",
        "Dedicated quantum engineers",
        "24/7 dedicated support",
        "Unlimited storage",
        "Custom quantum algorithms",
        "White-label solutions",
        "SLA guarantees",
        "On-premise deployment options"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "1000x Faster Computation",
      description: "Solve complex optimization problems in minutes instead of years with quantum speedup."
    },
    {
      icon: CheckCircle,
      title: "Breakthrough AI Performance",
      description: "Quantum-enhanced machine learning achieves unprecedented accuracy and training speed."
    },
    {
      icon: Target,
      title: "Solve Previously Impossible Problems",
      description: "Tackle computational challenges that were beyond the reach of classical computers."
    },
    {
      icon: Lightbulb,
      title: "Future-Proof Technology",
      description: "Stay ahead of the curve with cutting-edge quantum computing and AI capabilities."
    }
  ];

  const useCases = [
    {
      title: "Drug Discovery & Molecular Modeling",
      description: "Simulate molecular interactions with quantum accuracy to accelerate pharmaceutical research and development.",
      icon: Flask
    },
    {
      title: "Financial Portfolio Optimization",
      description: "Optimize investment portfolios using quantum algorithms for maximum returns with minimal risk.",
      icon: TrendingUp
    },
    {
      title: "Supply Chain Optimization",
      description: "Solve complex logistics problems with quantum computing for optimal routing and resource allocation.",
      icon: Network
    },
    {
      title: "Climate Modeling & Prediction",
      description: "Accurate climate simulations using quantum algorithms for better environmental forecasting and planning.",
      icon: Globe
    }
  ];

  const quantumAdvantages = [
    {
      icon: Cpu,
      title: "Quantum Supremacy",
      description: "Demonstrated quantum advantage in specific computational tasks over classical supercomputers."
    },
    {
      icon: CircuitBoard,
      title: "Quantum Entanglement",
      description: "Leverage quantum entanglement for secure communication and enhanced computational power."
    },
    {
      icon: Rocket,
      title: "Exponential Scaling",
      description: "Computational power scales exponentially with the number of qubits, not linearly."
    },
    {
      icon: Satellite,
      title: "Quantum Sensing",
      description: "Ultra-sensitive detection capabilities for applications in navigation, imaging, and measurement."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate-darker to-zion-slate-darkest">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-900/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Atom className="w-4 h-4 mr-2" />
              Quantum AI Hybrid Technology
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Quantum AI Hybrid
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Experience the future of computing with our revolutionary Quantum AI Hybrid Platform. 
              Combine the power of quantum computing with artificial intelligence to solve 
              previously impossible problems and achieve breakthrough performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300"
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
              Revolutionary Quantum AI Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our platform combines the best of quantum computing and artificial intelligence 
              to deliver unprecedented computational power and problem-solving capabilities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-zion-slate-dark/50 border border-zion-slate rounded-lg hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
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

      {/* Benefits Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Quantum AI Hybrid?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the next generation of computing with measurable improvements in speed, accuracy, and problem-solving capabilities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-zion-slate-dark/50 border border-zion-slate rounded-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Applications
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how quantum AI is transforming industries and solving previously impossible problems.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="p-6 bg-zion-slate-dark/50 border border-zion-slate rounded-lg hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Advantages Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum Computing Advantages
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Understand the fundamental advantages that make quantum computing revolutionary.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quantumAdvantages.map((advantage, index) => (
              <div
                key={index}
                className="text-center p-6 bg-zion-slate-dark/50 border border-zion-slate rounded-lg hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum Computing Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Access the future of computing with our flexible quantum computing plans. 
              All plans include quantum simulator access and expert support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/50 scale-105'
                    : 'bg-zion-slate-dark/50 border-zion-slate hover:border-blue-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={plan.name === "Quantum Enterprise" ? "/contact" : "/signup"}
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                      : 'bg-zion-slate border border-zion-slate-light text-white hover:bg-zion-slate-light'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience Quantum Computing?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the quantum revolution and solve problems that were previously impossible. 
              Our expert team will help you harness the power of quantum AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Quantum Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300"
              >
                Schedule Quantum Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zion-slate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Zion Tech Group. All rights reserved. | 
            <Link to="/privacy" className="text-blue-400 hover:text-blue-300 ml-2">
              Privacy Policy
            </Link> | 
            <Link to="/terms" className="text-blue-400 hover:text-blue-300 ml-2">
              Terms of Service
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default QuantumAIHybridPlatform;