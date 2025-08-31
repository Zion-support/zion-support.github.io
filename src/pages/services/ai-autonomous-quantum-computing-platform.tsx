import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Brain, 
  Zap, 
  BarChart3, 
  Globe, 
  Shield, 
  Database, 
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Cpu,
  Target,
  Eye,
  Rocket
} from 'lucide-react';

const AIAutonomousQuantumComputingPlatform: React.FC = () => {
  const features = [
    {
      icon: <Atom className="w-6 h-6 text-purple-500" />,
      title: "Quantum Processing Units",
      description: "Access to state-of-the-art quantum computers with 1000+ qubits for complex computational tasks"
    },
    {
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      title: "AI-Quantum Hybrid Algorithms",
      description: "Intelligent algorithms that optimize quantum circuit design and execution for maximum efficiency"
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Quantum Machine Learning",
      description: "Advanced quantum algorithms for machine learning, optimization, and pattern recognition"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-500" />,
      title: "Real-time Quantum Analytics",
      description: "Live monitoring and analysis of quantum computations with performance optimization insights"
    },
    {
      icon: <Globe className="w-6 h-6 text-emerald-500" />,
      title: "Global Quantum Network",
      description: "Access to distributed quantum computing resources across multiple locations worldwide"
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: "Quantum-Safe Security",
      description: "Post-quantum cryptography and quantum-resistant security protocols for future-proof protection"
    }
  ];

  const pricingPlans = [
    {
      name: "Quantum Starter",
      price: "$4,999",
      period: "/month",
      description: "Perfect for research institutions and startups beginning their quantum computing journey",
      features: [
        "Up to 100 qubits",
        "Basic quantum algorithms",
        "Standard quantum circuits",
        "Email support",
        "Web interface access",
        "Basic documentation",
        "Community forum access"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Quantum Professional",
      price: "$12,999",
      period: "/month",
      description: "Ideal for growing companies and research teams requiring advanced quantum capabilities",
      features: [
        "Up to 500 qubits",
        "Advanced quantum algorithms",
        "Custom circuit design",
        "Priority support",
        "API access",
        "Advanced analytics",
        "Multi-user accounts",
        "Quantum simulation tools"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Quantum Enterprise",
      price: "$29,999",
      period: "/month",
      description: "For large corporations and research institutions requiring maximum quantum computing power",
      features: [
        "1000+ qubits",
        "Custom quantum models",
        "Dedicated quantum resources",
        "24/7 support",
        "Advanced security features",
        "White-label solutions",
        "Custom integrations",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    "Solve complex problems 1000x faster than classical computers",
    "Achieve quantum advantage in optimization and machine learning",
    "Reduce computational costs by 90% for specific problem types",
    "Enable breakthroughs in drug discovery and materials science",
    "Accelerate AI training and inference by orders of magnitude",
    "Future-proof your organization with quantum-ready infrastructure"
  ];

  const quantumModules = [
    {
      category: "Quantum Algorithms",
      solutions: [
        "Grover's search algorithm",
        "Shor's factoring algorithm",
        "Quantum Fourier transform",
        "Quantum machine learning",
        "Quantum optimization algorithms"
      ]
    },
    {
      category: "Quantum Applications",
      solutions: [
        "Drug discovery and molecular modeling",
        "Financial modeling and risk assessment",
        "Logistics and supply chain optimization",
        "Cryptography and cybersecurity",
        "Artificial intelligence acceleration"
      ]
    },
    {
      category: "Quantum Development",
      solutions: [
        "Quantum programming languages",
        "Circuit design and optimization",
        "Quantum error correction",
        "Hybrid classical-quantum systems",
        "Performance benchmarking tools"
      ]
    },
    {
      category: "Quantum Infrastructure",
      solutions: [
        "Cloud-based quantum access",
        "Quantum simulators",
        "Hardware abstraction layers",
        "Multi-cloud quantum deployment",
        "Quantum networking protocols"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Atom className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI-Powered Autonomous Quantum Computing Platform
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto">
              Unlock the power of quantum computing with intelligent AI-driven algorithms, 
              autonomous optimization, and breakthrough computational capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition-colors">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Revolutionary Quantum Computing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered quantum platform combines cutting-edge quantum hardware with intelligent 
              algorithms to solve previously impossible computational challenges.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Modules Section */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Quantum Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform provides end-to-end quantum computing capabilities, from algorithm development 
              to deployment and optimization, enabling breakthroughs across all industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {quantumModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {index === 0 && <Rocket className="w-6 h-6 text-purple-500 mr-3" />}
                  {index === 1 && <Target className="w-6 h-6 text-blue-500 mr-3" />}
                  {index === 2 && <Cpu className="w-6 h-6 text-green-500 mr-3" />}
                  {index === 3 && <Eye className="w-6 h-6 text-orange-500 mr-3" />}
                  <h3 className="text-xl font-semibold text-gray-900">{module.category}</h3>
                </div>
                <ul className="space-y-2">
                  {module.solutions.map((solution, solutionIndex) => (
                    <li key={solutionIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{solution}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Quantum Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join the quantum revolution and gain unprecedented computational power to solve 
              the world's most complex problems and drive innovation across all industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
            <div className="space-y-6">
              {benefits.slice(3).map((benefit, index) => (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Technology & Seamless Integration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on cutting-edge quantum technologies with seamless integration capabilities 
              for your existing computational infrastructure and workflows.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Atom className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quantum Hardware</h3>
              <p className="text-gray-600">
                Access to superconducting, trapped ion, and photonic quantum computers with 1000+ qubits
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI & ML Integration</h3>
              <p className="text-gray-600">
                Intelligent algorithms that optimize quantum circuits and enhance computational efficiency
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Database className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quantum Software Stack</h3>
              <p className="text-gray-600">
                Comprehensive development tools, simulators, and optimization frameworks for quantum applications
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quantum Security</h3>
              <p className="text-gray-600">
                Post-quantum cryptography and quantum-resistant security protocols for future-proof protection
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your quantum computing needs and research requirements. 
              All plans include access to our AI-powered quantum optimization capabilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white p-8 rounded-2xl shadow-lg border-2 ${
                  plan.popular 
                    ? 'border-purple-500 scale-105' 
                    : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Go Quantum?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Join the quantum computing revolution and unlock unprecedented computational power. 
              Our team of quantum experts is ready to help you get started.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6 text-purple-300" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6 text-purple-300" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-6 h-6 text-purple-300" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                Schedule a Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition-colors">
                Contact Quantum Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Visit Our Website
            </h3>
            <p className="text-gray-300 mb-6">
              Learn more about our revolutionary quantum computing solutions and explore our full service portfolio.
            </p>
            <a 
              href="https://ziontechgroup.com/services/ai-autonomous-quantum-computing-platform"
              className="inline-flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousQuantumComputingPlatform;