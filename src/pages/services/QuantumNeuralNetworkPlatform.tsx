import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  Cpu, 
  Database, 
  Network, 
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Award,
  Globe,
  Lock,
  Code,
  BarChart3,
  Target,
  Lightbulb,
  Rocket,
  Clock,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const QuantumNeuralNetworkPlatform: React.FC = () => {
  const features = [
    {
      title: "Quantum-Classical Hybrid Architecture",
      description: "Seamlessly integrates quantum processing with classical neural networks for optimal performance",
      icon: Cpu,
      benefits: ["Enhanced computational power", "Faster training times", "Better optimization"]
    },
    {
      title: "Advanced Neural Network Models",
      description: "State-of-the-art neural network architectures optimized for quantum computing",
      icon: Brain,
      benefits: ["Deep learning capabilities", "Transfer learning", "Adaptive architectures"]
    },
    {
      title: "Quantum Security Protocols",
      description: "Built-in quantum-resistant security measures for data protection",
      icon: Shield,
      benefits: ["Quantum-safe encryption", "Secure data transmission", "Privacy preservation"]
    },
    {
      title: "Real-time Processing",
      description: "Ultra-fast processing capabilities for real-time applications",
      icon: Zap,
      benefits: ["Instant results", "Low latency", "High throughput"]
    }
  ];

  const useCases = [
    {
      title: "Financial Modeling",
      description: "Advanced risk assessment and portfolio optimization using quantum neural networks",
      icon: BarChart3,
      examples: ["Risk analysis", "Portfolio optimization", "Market prediction"]
    },
    {
      title: "Drug Discovery",
      description: "Accelerated molecular modeling and drug development processes",
      icon: Target,
      examples: ["Molecular simulation", "Protein folding", "Drug interaction"]
    },
    {
      title: "Climate Modeling",
      description: "Complex climate pattern analysis and prediction models",
      icon: Globe,
      examples: ["Weather forecasting", "Climate change analysis", "Environmental modeling"]
    },
    {
      title: "AI Research",
      description: "Breakthrough research in artificial intelligence and machine learning",
      icon: Lightbulb,
      examples: ["Algorithm development", "Model training", "Research automation"]
    }
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$5,000",
      period: "/month",
      description: "Perfect for research institutions and small teams",
      features: [
        "Basic quantum neural network access",
        "Standard API endpoints",
        "Community support",
        "Basic documentation",
        "100 hours/month processing time"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      plan: "Professional",
      price: "$15,000",
      period: "/month",
      description: "Ideal for growing businesses and research teams",
      features: [
        "Advanced quantum neural network features",
        "Priority API access",
        "Dedicated support",
        "Comprehensive documentation",
        "500 hours/month processing time",
        "Custom model training"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      plan: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      features: [
        "Full platform customization",
        "Unlimited processing time",
        "24/7 dedicated support",
        "Custom integrations",
        "On-premise deployment options",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const stats = [
    { icon: Users, value: "100+", label: "Research Partners" },
    { icon: TrendingUp, value: "1000x", label: "Faster Processing" },
    { icon: Award, value: "15+", label: "Research Papers" },
    { icon: Globe, value: "25+", label: "Countries" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Revolutionary Technology
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quantum Neural Network
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the future of computing with our groundbreaking quantum neural network platform. 
              Combining the power of quantum computing with advanced neural networks to solve previously 
              impossible problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link
                to="#demo"
                className="px-8 py-4 bg-gray-800/50 hover:bg-gray-700/70 text-white font-semibold rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the cutting-edge capabilities that make our platform the future of computing
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/30 rounded-lg p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <feature.icon className="w-16 h-16 text-cyan-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
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
      <section className="py-16 px-4 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From finance to healthcare, our platform is revolutionizing how industries solve complex problems
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-800/30 rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <useCase.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{useCase.description}</p>
                <ul className="space-y-1">
                  {useCase.examples.map((example, idx) => (
                    <li key={idx} className="text-gray-400 text-sm flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options designed to meet your research and business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-gray-800/30 rounded-lg p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-purple-500 bg-purple-500/10' 
                  : 'border-gray-700 hover:border-cyan-500'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={plan.plan === "Enterprise" ? "/contact" : "/contact"}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-purple-600 hover:bg-purple-700 text-white'
                      : 'bg-cyan-600 hover:bg-cyan-700 text-white'
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
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the quantum revolution and unlock unprecedented computational power for your research and business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 bg-gray-800/50 hover:bg-gray-700/70 text-white font-semibold rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumNeuralNetworkPlatform;