import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Brain, 
  Zap, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Star,
  Users,
  Clock,
  Shield,
  Globe,
  BarChart3,
  TrendingUp,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  Atom,
  CircuitBoard,
  Microscope,
  Beaker,
  TestTube,
  Calculator,
  Gauge
} from 'lucide-react';

const features = [
  {
    icon: Atom,
    title: 'Quantum Algorithms',
    description: 'Access to cutting-edge quantum algorithms for optimization, simulation, and machine learning.',
    benefits: ['Grover\'s algorithm', 'Shor\'s algorithm', 'Quantum Fourier Transform', 'Quantum machine learning']
  },
  {
    icon: CircuitBoard,
    title: 'Quantum Simulation',
    description: 'Simulate quantum systems and quantum chemistry for research and development.',
    benefits: ['Molecular modeling', 'Material science', 'Drug discovery', 'Quantum chemistry']
  },
  {
    icon: Calculator,
    title: 'Optimization Tools',
    description: 'Solve complex optimization problems using quantum annealing and variational algorithms.',
    benefits: ['Portfolio optimization', 'Supply chain optimization', 'Route planning', 'Scheduling problems']
  },
  {
    icon: Gauge,
    title: 'Performance Monitoring',
    description: 'Real-time monitoring of quantum system performance and error rates.',
    benefits: ['Error correction', 'Performance metrics', 'System health', 'Optimization insights']
  }
];

const useCases = [
  {
    title: 'Financial Services',
    description: 'Optimize trading strategies, risk assessment, and portfolio management.',
    icon: BarChart3,
    metrics: ['Portfolio optimization', 'Risk modeling', 'Algorithmic trading', 'Fraud detection']
  },
  {
    title: 'Pharmaceutical Research',
    description: 'Accelerate drug discovery and molecular modeling with quantum simulation.',
    icon: Beaker,
    metrics: ['Molecular dynamics', 'Drug design', 'Protein folding', 'Chemical reactions']
  },
  {
    title: 'Logistics & Supply Chain',
    description: 'Optimize complex routing and scheduling problems for maximum efficiency.',
    icon: Globe,
    metrics: ['Route optimization', 'Inventory management', 'Scheduling', 'Resource allocation']
  },
  {
    title: 'Machine Learning',
    description: 'Enhance AI models with quantum computing capabilities for better performance.',
    icon: Brain,
    metrics: ['Quantum neural networks', 'Feature selection', 'Pattern recognition', 'Classification']
  }
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '$499',
    period: '/month',
    description: 'Perfect for researchers and small teams exploring quantum computing.',
    features: [
      'Up to 100 quantum operations/month',
      'Basic quantum algorithms',
      'Standard simulation tools',
      'Email support',
      'Basic API access',
      'Community forum access'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '$1,299',
    period: '/month',
    description: 'Ideal for growing organizations with advanced quantum computing needs.',
    features: [
      'Up to 1,000 quantum operations/month',
      'Advanced quantum algorithms',
      'Custom simulation tools',
      'Priority support',
      'Advanced API access',
      'Performance analytics',
      'Custom optimization',
      'White-label options'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$2,999',
    period: '/month',
    description: 'For large organizations requiring enterprise-grade quantum solutions.',
    features: [
      'Unlimited quantum operations',
      'Custom quantum algorithms',
      'Advanced simulation tools',
      '24/7 support',
      'Custom API development',
      'Advanced analytics',
      'Custom ML models',
      'Dedicated infrastructure',
      'Advanced security',
      'Dedicated account manager'
    ],
    popular: false
  }
];

export default function QuantumComputing() {
  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mx-auto mb-6">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
              Quantum Computing
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Harness the power of quantum mechanics to solve complex problems that are 
              impossible for classical computers. Access cutting-edge quantum algorithms and tools.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-futuristic px-8 py-4 text-lg"
              >
                Start Free Trial
              </Link>
              <Link
                to="/demo"
                className="btn-neon px-8 py-4 text-lg"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum Computing Capabilities
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our platform provides access to state-of-the-art quantum computing resources 
              and algorithms designed for real-world applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{feature.description}</p>
                
                <div className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover how quantum computing is revolutionizing industries and solving 
              previously intractable problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 text-center">{useCase.title}</h3>
                <p className="text-zion-slate-light mb-4 text-center text-sm">{useCase.description}</p>
                
                <div className="space-y-2">
                  {useCase.metrics.map((metric, idx) => (
                    <div key={idx} className="text-xs text-zion-cyan text-center">
                      • {metric}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Access quantum computing resources with flexible pricing options designed 
              to meet your research and development needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-zion-slate-dark/50 border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan/50 bg-zion-cyan/5' 
                    : 'border-zion-cyan/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light text-sm">{plan.description}</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:shadow-lg hover:shadow-zion-cyan/25'
                      : 'bg-zion-cyan/10 text-zion-cyan border border-zion-cyan/30 hover:bg-zion-cyan/20'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Explore Quantum Computing?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join the quantum revolution and solve problems that were once impossible. 
              Start your quantum computing journey today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-futuristic px-8 py-4 text-lg"
              >
                Start Free Trial
              </Link>
              <Link
                to="/demo"
                className="btn-neon px-8 py-4 text-lg"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}