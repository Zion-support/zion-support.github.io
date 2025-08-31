import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Quantum,
  NeuralNetwork,
  AI,
  Cloud,
  Security,
  Analytics,
  Integration
} from 'lucide-react';

const AIQuantumNeuralInterface: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Quantum Neural Processing",
      description: "Advanced quantum computing algorithms for neural network optimization and training acceleration"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Hybrid AI Architecture",
      description: "Seamless integration of classical AI with quantum computing for unprecedented performance"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Learning",
      description: "Continuous adaptation and learning from quantum data streams with minimal latency"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quantum Security",
      description: "Post-quantum cryptography and quantum-resistant security protocols"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalable Performance",
      description: "Linear scaling with quantum bits for exponential performance improvements"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Multi-User Access",
      description: "Secure multi-tenant access with role-based permissions and isolation"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$2,999",
      period: "/month",
      description: "Perfect for research institutions and small teams",
      features: [
        "Up to 10 quantum qubits",
        "Basic neural network training",
        "Standard security protocols",
        "Email support",
        "5GB quantum data storage"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "/month",
      description: "Ideal for enterprises and advanced research",
      features: [
        "Up to 50 quantum qubits",
        "Advanced neural optimization",
        "Enhanced security features",
        "Priority support",
        "25GB quantum data storage",
        "Custom model training"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$19,999",
      period: "/month",
      description: "For large organizations requiring maximum performance",
      features: [
        "Unlimited quantum qubits",
        "Custom quantum algorithms",
        "Dedicated security team",
        "24/7 phone support",
        "Unlimited storage",
        "Custom integrations",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Quantum className="w-8 h-8" />,
      title: "Quantum Advantage",
      description: "Achieve computational superiority with quantum neural networks"
    },
    {
      icon: <NeuralNetwork className="w-8 h-8" />,
      title: "Neural Evolution",
      description: "Continuous learning and adaptation through quantum-enhanced algorithms"
    },
    {
      icon: <AI className="w-8 h-8" />,
      title: "AI Revolution",
      description: "Transform your AI capabilities with quantum computing power"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Native",
      description: "Built for modern cloud infrastructure with seamless scaling"
    },
    {
      icon: <Security className="w-8 h-8" />,
      title: "Future-Proof Security",
      description: "Quantum-resistant security protocols for long-term protection"
    },
    {
      icon: <Analytics className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Deep insights into quantum neural network performance and optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Quantum Neural Interface
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize your AI capabilities with the world's first quantum-enhanced neural interface. 
              Experience exponential performance improvements and unlock new possibilities in artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white font-semibold rounded-lg transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of AI with quantum-enhanced neural networks
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="text-purple-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI Quantum Neural Interface?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your organization with cutting-edge quantum AI technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-purple-400 mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your organization's needs and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                  plan.popular 
                    ? 'border-purple-500 ring-2 ring-purple-500/20' 
                    : 'border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://ziontechgroup.com/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-purple-600 hover:bg-purple-700 text-white'
                      : 'bg-transparent border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience the Future of AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the quantum revolution and transform your AI capabilities today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white font-semibold rounded-lg transition-colors"
              >
                Contact Sales Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-purple-400 mb-2">Phone</h4>
              <a href="tel:+13024640950" className="text-white hover:text-purple-400 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-purple-400 mb-2">Email</h4>
              <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-purple-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-purple-400 mb-2">Address</h4>
              <p className="text-white">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIQuantumNeuralInterface;