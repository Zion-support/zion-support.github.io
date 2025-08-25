import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Atom, 
  Zap, 
  Cpu, 
  Brain, 
  Shield, 
  TrendingUp, 
  Users, 
  CheckCircle,
  ArrowRight,
  Play,
  Pause,
  Settings,
  BarChart3,
  Clock,
  DollarSign,
  Star,
  ChevronRight,
  ChevronLeft,
  Globe,
  Lock,
  Target
} from 'lucide-react';

const QuantumComputingSolutions: React.FC = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isDemoRunning, setIsDemoRunning] = useState(false);

  const features = [
    {
      title: "Quantum Algorithm Optimization",
      description: "Custom quantum algorithms designed for your specific computational challenges",
      icon: Brain,
      benefits: ["1000x faster computation", "Quantum advantage guaranteed", "Custom algorithm design"]
    },
    {
      title: "Quantum-Safe Cryptography",
      description: "Post-quantum cryptographic solutions that protect against quantum attacks",
      icon: Shield,
      benefits: ["Future-proof security", "Quantum-resistant encryption", "Zero-day attack protection"]
    },
    {
      title: "Quantum Machine Learning",
      description: "Quantum-enhanced ML models that outperform classical approaches",
      icon: Cpu,
      benefits: ["Superior pattern recognition", "Faster training times", "Quantum feature extraction"]
    }
  ];

  const pricingPlans = [
    {
      name: "Quantum Starter",
      price: "$1,999",
      period: "/month",
      description: "For research and development",
      features: [
        "Access to quantum simulators",
        "Basic quantum algorithms",
        "Email support",
        "Standard quantum libraries"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Quantum Professional",
      price: "$4,999",
      period: "/month",
      description: "For production quantum applications",
      features: [
        "Real quantum hardware access",
        "Custom quantum algorithms",
        "Priority support",
        "Advanced quantum libraries",
        "Performance optimization"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Quantum Enterprise",
      price: "$12,999",
      period: "/month",
      description: "For large-scale quantum deployments",
      features: [
        "Dedicated quantum resources",
        "Custom quantum hardware",
        "24/7 dedicated support",
        "White-label solutions",
        "Advanced security",
        "Custom development"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "Financial Services",
      description: "Portfolio optimization, risk assessment, and fraud detection using quantum algorithms",
      advantage: "1000x faster calculations",
      icon: "💼"
    },
    {
      industry: "Pharmaceutical",
      description: "Drug discovery, molecular modeling, and protein folding simulations",
      advantage: "Accelerated drug development",
      icon: "🧬"
    },
    {
      industry: "Logistics",
      description: "Route optimization, supply chain management, and complex scheduling",
      advantage: "Optimal solutions in minutes",
      icon: "🚚"
    },
    {
      industry: "Cybersecurity",
      description: "Quantum-safe encryption, threat detection, and secure communications",
      advantage: "Unbreakable security",
      icon: "🔒"
    }
  ];

  const quantumAdvantages = [
    {
      metric: "Computational Speed",
      classical: "1x",
      quantum: "1000x+",
      improvement: "100,000%"
    },
    {
      metric: "Problem Solving",
      classical: "Exponential time",
      quantum: "Polynomial time",
      improvement: "Revolutionary"
    },
    {
      metric: "Security",
      classical: "Vulnerable to quantum",
      quantum: "Quantum-resistant",
      improvement: "Future-proof"
    },
    {
      metric: "Optimization",
      classical: "Local minima",
      quantum: "Global optimum",
      improvement: "Superior results"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-indigo-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 animate-pulse"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-sm font-medium mb-6">
              <Atom className="w-4 h-4 mr-2" />
              Next-Generation Computing
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Quantum Computing
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Harness the power of quantum mechanics to solve previously impossible computational challenges
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button 
                onClick={() => setIsDemoRunning(!isDemoRunning)}
                className="px-8 py-4 border border-purple-500/30 text-purple-400 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                {isDemoRunning ? <Pause className="w-5 h-5 inline mr-2" /> : <Play className="w-5 h-5 inline mr-2" />}
                Watch Demo
              </button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">1000x</div>
              <div className="text-gray-400">Faster Computation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400 mb-2">50+</div>
              <div className="text-gray-400">Quantum Algorithms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-400">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-400">Quantum Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Advantages Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum <span className="text-purple-400">Advantage</span> in Action
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how quantum computing outperforms classical approaches across key metrics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quantumAdvantages.map((advantage, index) => (
              <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-purple-800/20 to-indigo-800/20 border border-purple-700/30 hover:border-purple-500/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-4">{advantage.metric}</h3>
                <div className="space-y-3">
                  <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                    <div className="text-sm text-gray-400 mb-1">Classical</div>
                    <div className="text-lg font-bold text-gray-300">{advantage.classical}</div>
                  </div>
                  <div className="text-center p-3 bg-purple-800/50 rounded-lg">
                    <div className="text-sm text-purple-400 mb-1">Quantum</div>
                    <div className="text-lg font-bold text-purple-300">{advantage.quantum}</div>
                  </div>
                  <div className="text-center p-2 bg-green-800/50 rounded-lg">
                    <div className="text-sm text-green-400 font-semibold">{advantage.improvement}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary <span className="text-indigo-400">Features</span> That Change Everything
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our quantum computing solutions provide capabilities that were previously impossible
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`p-8 rounded-2xl border transition-all duration-500 ${
                  index === currentFeature 
                    ? 'border-purple-500/50 bg-purple-500/10 shadow-2xl shadow-purple-500/20' 
                    : 'border-gray-700/50 bg-gray-800/20 hover:border-purple-500/30'
                }`}
              >
                <div className="text-purple-400 mb-4">
                  <feature.icon className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Transforming <span className="text-indigo-400">Industries</span> with Quantum Power
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how quantum computing is revolutionizing various sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 hover:border-indigo-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.industry}</h3>
                <p className="text-gray-400 text-sm mb-4">{useCase.description}</p>
                <div className="text-indigo-400 font-semibold text-sm">{useCase.advantage}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Access the <span className="text-green-400">Future</span> of Computing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the quantum computing plan that fits your research and production needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-green-500/50 bg-green-500/10 scale-105' 
                    : 'border-gray-700/50 bg-gray-800/20 hover:border-purple-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-green-500 hover:bg-green-600 text-white'
                    : 'bg-purple-500 hover:bg-purple-600 text-white'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience <span className="text-purple-400">Quantum</span> Computing?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join the quantum revolution and solve problems that were previously impossible
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <Link 
              to="/contact"
              className="px-8 py-4 border border-purple-500/30 text-purple-400 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputingSolutions;