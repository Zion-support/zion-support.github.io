import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Zap, 
  Brain, 
  Shield, 
  Network, 
  Database, 
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Beaker,
  Cpu,
  Target,
  Globe
} from 'lucide-react';

const AIQuantumComputingSolutionsEnterprise: React.FC = () => {
  const features = [
    {
      icon: <Atom className="w-6 h-6 text-purple-400" />,
      title: "Quantum-Classical Hybrid Computing",
      description: "Seamless integration of quantum and classical computing resources for optimal performance across all workloads."
    },
    {
      icon: <Brain className="w-6 h-6 text-purple-400" />,
      title: "AI-Enhanced Quantum Algorithms",
      description: "Machine learning optimized quantum algorithms that deliver superior results for complex computational problems."
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      title: "Real-Time Error Correction",
      description: "Advanced quantum error correction techniques ensuring reliable computation even with noisy quantum hardware."
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: "Quantum-Safe Security",
      description: "Post-quantum cryptography and quantum-resistant security protocols for future-proof data protection."
    },
    {
      icon: <Network className="w-6 h-6 text-purple-400" />,
      title: "Distributed Quantum Computing",
      description: "Multi-node quantum computing networks enabling scalable quantum processing across distributed systems."
    },
    {
      icon: <Database className="w-6 h-6 text-purple-400" />,
      title: "Quantum Data Management",
      description: "Specialized quantum data structures and storage systems optimized for quantum information processing."
    }
  ];

  const useCases = [
    {
      icon: <Beaker className="w-8 h-8 text-purple-400" />,
      title: "Drug Discovery & Molecular Modeling",
      description: "Accelerate pharmaceutical research with quantum simulations of molecular interactions and drug efficacy."
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      title: "Financial Modeling & Risk Analysis",
      description: "Solve complex financial optimization problems and risk assessment scenarios in real-time."
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: "Logistics & Supply Chain Optimization",
      description: "Optimize complex routing, scheduling, and resource allocation problems across global networks."
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      title: "Climate Modeling & Prediction",
      description: "Advanced climate simulations and weather forecasting with unprecedented accuracy and detail."
    }
  ];

  const benefits = [
    {
      metric: "1000x",
      description: "Faster processing for complex algorithms"
    },
    {
      metric: "99.9%",
      description: "Accuracy in quantum simulations"
    },
    {
      metric: "24/7",
      description: "Quantum computing availability"
    },
    {
      metric: "Unlimited",
      description: "Scalability for growing workloads"
    }
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$4,999",
      period: "/month",
      features: [
        "Up to 100 qubits",
        "Basic quantum algorithms",
        "Standard error correction",
        "Email support",
        "Monthly usage reports"
      ]
    },
    {
      plan: "Professional",
      price: "$8,999",
      period: "/month",
      features: [
        "Up to 500 qubits",
        "Advanced quantum algorithms",
        "Enhanced error correction",
        "Priority support",
        "Real-time monitoring",
        "Custom integrations"
      ],
      popular: true
    },
    {
      plan: "Enterprise",
      price: "$19,999",
      period: "/month",
      features: [
        "Unlimited qubits",
        "Custom quantum algorithms",
        "Premium error correction",
        "24/7 dedicated support",
        "White-label solution",
        "On-premise deployment",
        "Custom training"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Quantum Computing Solutions Enterprise | Zion Tech Group</title>
        <meta name="description" content="Enterprise-grade AI-powered quantum computing solutions with hybrid computing, advanced algorithms, and real-time error correction capabilities." />
        <meta name="keywords" content="AI quantum computing, enterprise quantum, quantum algorithms, hybrid computing, quantum error correction" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-quantum-computing-solutions-enterprise" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Quantum Computing Solutions
                <span className="text-purple-400 block">Enterprise Platform</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Unlock the future of computing with our AI-powered quantum computing platform. 
                Experience 1000x faster processing, unlimited scalability, and breakthrough computational capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Schedule Demo
                </button>
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
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Next-Generation Quantum Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Built for the quantum era with cutting-edge AI technology and revolutionary computing capabilities
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-colors"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Revolutionary Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform industries with quantum computing applications that were previously impossible
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">{useCase.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                      <p className="text-gray-300">{useCase.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quantum Computing Advantages
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the power of quantum computing with measurable performance improvements
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                    {benefit.metric}
                  </div>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quantum Computing Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Access the future of computing with flexible enterprise pricing plans
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular 
                      ? 'border-purple-500 ring-2 ring-purple-500/20' 
                      : 'border-gray-700'
                  } relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.plan}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-purple-500 hover:bg-purple-600 text-white'
                      : 'border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-purple-700">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Experience Quantum Computing?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Join the quantum revolution and unlock computational possibilities that were previously impossible
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Get in Touch
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                  <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIQuantumComputingSolutionsEnterprise;