import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  BarChart3, 
  Database, 
  Zap, 
  Shield, 
  Globe, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Play,
  Cpu,
  Network,
  Lock,
  Eye,
  Brain,
  Rocket
} from 'lucide-react';

const QuantumDataAnalytics: React.FC = () => {
  const features = [
    {
      icon: Atom,
      title: "Quantum Machine Learning",
      description: "Leverage quantum algorithms for pattern recognition and predictive analytics",
      benefits: ["Quantum neural networks", "Superior pattern recognition", "Faster training times", "Quantum advantage"]
    },
    {
      icon: Database,
      title: "Quantum Database Optimization",
      description: "Revolutionary database queries and data processing using quantum principles",
      benefits: ["Quantum SQL acceleration", "Parallel data processing", "Quantum indexing", "Real-time analytics"]
    },
    {
      icon: Brain,
      title: "Quantum AI Models",
      description: "Next-generation AI models powered by quantum computing capabilities",
      benefits: ["Quantum neural networks", "Quantum reinforcement learning", "Quantum natural language processing", "Quantum computer vision"]
    },
    {
      icon: Zap,
      title: "Quantum Data Encryption",
      description: "Unbreakable data security using quantum cryptography and quantum-resistant algorithms",
      benefits: ["Quantum key distribution", "Post-quantum cryptography", "Quantum random number generation", "Future-proof security"]
    }
  ];

  const pricing = [
    {
      name: "Quantum Starter",
      price: "$1,299",
      period: "/month",
      description: "Entry-level quantum analytics for small datasets",
      features: [
        "Up to 1TB data processing",
        "Basic quantum algorithms",
        "Standard support",
        "Cloud deployment",
        "Basic quantum models"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Quantum Professional",
      price: "$3,999",
      period: "/month",
      description: "Advanced quantum analytics for enterprise needs",
      features: [
        "Up to 10TB data processing",
        "Advanced quantum algorithms",
        "Priority support",
        "Hybrid quantum-classical",
        "Custom quantum models",
        "Real-time quantum processing"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Quantum Enterprise",
      price: "Custom",
      period: "",
      description: "Full-scale quantum analytics platform",
      features: [
        "Unlimited data processing",
        "Custom quantum algorithms",
        "Dedicated quantum support",
        "On-premise quantum hardware",
        "White-label solution",
        "Quantum consulting services"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Financial Modeling",
      description: "Quantum-powered risk assessment and portfolio optimization",
      icon: TrendingUp,
      advantage: "1000x faster calculations"
    },
    {
      title: "Drug Discovery",
      description: "Quantum molecular modeling and protein folding simulations",
      icon: Atom,
      advantage: "Exponential speed improvement"
    },
    {
      title: "Climate Modeling",
      description: "Complex climate simulations and weather prediction",
      icon: Globe,
      advantage: "Real-time global modeling"
    },
    {
      title: "Supply Chain Optimization",
      description: "Quantum logistics and route optimization algorithms",
      icon: Network,
      advantage: "Optimal solutions in seconds"
    }
  ];

  const quantumAdvantages = [
    {
      title: "Quantum Supremacy",
      description: "Solve problems impossible for classical computers",
      icon: Rocket,
      metric: "1000x+ faster"
    },
    {
      title: "Parallel Processing",
      description: "Process multiple data streams simultaneously",
      icon: Cpu,
      metric: "Exponential scaling"
    },
    {
      title: "Quantum Entanglement",
      description: "Correlated data analysis across vast datasets",
      icon: Network,
      metric: "Instant correlation"
    },
    {
      title: "Quantum Tunneling",
      description: "Optimization algorithms that bypass local minima",
      icon: Zap,
      metric: "Global optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
              <Atom className="w-4 h-4 mr-2" />
              Quantum Computing
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Quantum Data Analytics
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the future of data analytics with quantum computing that processes information at speeds impossible for classical computers
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg font-semibold text-white hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
                Quantum Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quantum Advantages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Quantum Computing Advantages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of quantum mechanics to solve complex problems in seconds
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quantumAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 group hover:bg-slate-800/70 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{advantage.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{advantage.description}</p>
                <div className="inline-flex items-center px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium">
                  {advantage.metric}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Quantum Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge quantum algorithms and tools for next-generation data analysis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 group hover:bg-slate-800/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 mb-6">{feature.description}</p>
                
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Revolutionary Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how quantum computing transforms industries with unprecedented computational power
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-600 rounded-lg flex items-center justify-center">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                    <p className="text-gray-400 mb-4">{useCase.description}</p>
                    <div className="inline-flex items-center px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm">
                      <Zap className="w-4 h-4 mr-2" />
                      {useCase.advantage}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Quantum Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access to quantum computing power at competitive prices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative p-8 rounded-xl border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border-purple-500/50' 
                    : 'bg-slate-800/50 border-slate-700'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 mt-2">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-600 text-white hover:from-purple-600 hover:to-cyan-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Quantum Computing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the quantum revolution and solve problems that were previously impossible
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg font-semibold text-white hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumDataAnalytics;