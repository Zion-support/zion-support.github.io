import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Atom,
  Brain,
  Zap,
  Shield,
  Cpu,
  Database,
  Cloud,
  Lock,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Workflow,
  Target,
  Rocket,
  Award,
  Clock,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Users,
  BarChart3,
  Network,
  Chip,
  Server,
  Code,
  Eye,
  Search,
  Settings
} from 'lucide-react';

export default function AIQuantumComputingSolutions() {
  const features = [
    {
      icon: Atom,
      title: "Quantum AI Processing",
      description: "Leverage quantum computing power for AI model training and optimization"
    },
    {
      icon: Brain,
      title: "Hybrid AI-Quantum Algorithms",
      description: "Advanced algorithms that combine classical AI with quantum computing"
    },
    {
      icon: Zap,
      title: "Quantum Speedup",
      description: "Achieve exponential speedup for complex computational problems"
    },
    {
      icon: Shield,
      title: "Quantum-Safe Security",
      description: "Post-quantum cryptography and quantum-resistant security protocols"
    },
    {
      icon: Cpu,
      title: "Quantum Machine Learning",
      description: "Quantum-enhanced ML models for superior pattern recognition"
    },
    {
      icon: Database,
      title: "Quantum Database Optimization",
      description: "Quantum algorithms for database search and optimization"
    }
  ];

  const pricingPlans = [
    {
      name: "Quantum Starter",
      price: "$4,999",
      period: "/month",
      description: "For research institutions and startups",
      features: [
        "Up to 100 quantum circuit executions",
        "Basic quantum AI models",
        "5 user licenses",
        "Email support",
        "Standard quantum simulators"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Quantum Professional",
      price: "$12,999",
      period: "/month",
      description: "For growing tech companies",
      features: [
        "Up to 1,000 quantum circuit executions",
        "Advanced quantum AI models",
        "25 user licenses",
        "Priority support",
        "Custom quantum algorithms",
        "Real quantum hardware access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Quantum Enterprise",
      price: "$29,999",
      period: "/month",
      description: "For large enterprises and governments",
      features: [
        "Unlimited quantum executions",
        "Custom quantum AI solutions",
        "Unlimited user licenses",
        "24/7 dedicated support",
        "White-label quantum platform",
        "Advanced security features"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Computational Speed",
      description: "Solve complex problems in minutes instead of years",
      metric: "1000x+",
      icon: Zap
    },
    {
      title: "AI Model Accuracy",
      description: "Quantum-enhanced AI models with superior accuracy",
      metric: "25-40%",
      icon: Brain
    },
    {
      title: "Cost Efficiency",
      description: "Reduce computational costs significantly",
      metric: "60-80%",
      icon: DollarSign
    },
    {
      title: "Innovation Leadership",
      description: "Stay ahead with cutting-edge quantum technology",
      metric: "First-mover",
      icon: Rocket
    }
  ];

  const useCases = [
    {
      title: "Drug Discovery",
      description: "Accelerate pharmaceutical research with quantum molecular modeling",
      icon: Atom
    },
    {
      title: "Financial Modeling",
      description: "Complex risk assessment and portfolio optimization",
      icon: TrendingUp
    },
    {
      title: "Climate Modeling",
      description: "Advanced climate prediction and environmental analysis",
      icon: Globe
    },
    {
      title: "Cybersecurity",
      description: "Quantum-resistant encryption and threat detection",
      icon: Shield
    },
    {
      title: "Supply Chain",
      description: "Optimize logistics with quantum algorithms",
      icon: Network
    },
    {
      title: "AI Training",
      description: "Faster and more efficient AI model training",
      icon: Brain
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-400 to-cyan-600 rounded-2xl mb-6 shadow-2xl shadow-purple-400/25">
              <Atom className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Quantum Computing Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Unlock the future of computing with our AI-powered quantum solutions. 
              Experience exponential speedup and solve previously impossible problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                Start Free Trial
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Request Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Quantum AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines the power of quantum computing with advanced AI 
              to deliver unprecedented computational capabilities.
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
                className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 bg-zinc-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transformative Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how quantum AI is revolutionizing industries across the globe
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Advantage Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the transformative power of quantum computing combined with AI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-purple-400 mb-2">{benefit.metric}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-zinc-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Computing Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access to the future of computing with flexible pricing options
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-zinc-800/50 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-purple-400/50 shadow-2xl shadow-purple-400/25' 
                    : 'border-zinc-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-400 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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

                <button className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for the Quantum Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the quantum revolution and solve problems that were once impossible. 
              Our AI-powered quantum solutions are the key to your competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                Get Started Today
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 bg-zinc-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-purple-400 mb-4" />
              <p className="text-white font-semibold">Phone</p>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-purple-400 mb-4" />
              <p className="text-white font-semibold">Email</p>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-purple-400 mb-4" />
              <p className="text-white font-semibold">Address</p>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}