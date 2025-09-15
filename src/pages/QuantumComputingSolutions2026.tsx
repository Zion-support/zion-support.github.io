import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const QuantumComputingSolutions2026: React.FC = () => {
  const [selectedSolution, setSelectedSolution] = useState('quantum-optimization');
  const [isLoading, setIsLoading] = useState(false);

  const quantumSolutions = [
    {
      id: 'quantum-optimization',
      title: 'Quantum Optimization Engine',
      description: 'Revolutionary optimization algorithms that solve complex problems in seconds',
      features: [
        'Exponential speed improvements',
        'Multi-dimensional optimization',
        'Real-time problem solving',
        'Scalable quantum algorithms'
      ],
      applications: ['Supply Chain', 'Financial Modeling', 'Resource Allocation', 'Logistics'],
      performance: '1000x faster than classical computers',
      status: 'Available Now'
    },
    {
      id: 'quantum-cryptography',
      title: 'Quantum Cryptography Suite',
      description: 'Unbreakable encryption using quantum key distribution',
      features: [
        'Quantum key distribution',
        'Unbreakable encryption',
        'Quantum random number generation',
        'Secure communication protocols'
      ],
      applications: ['Banking', 'Government', 'Healthcare', 'Military'],
      performance: '100% secure communication',
      status: 'Pilot Phase'
    },
    {
      id: 'quantum-simulation',
      title: 'Quantum Molecular Simulation',
      description: 'Simulate complex molecular interactions for drug discovery and materials science',
      features: [
        'Molecular dynamics simulation',
        'Drug discovery acceleration',
        'Materials property prediction',
        'Chemical reaction modeling'
      ],
      applications: ['Pharmaceuticals', 'Materials Science', 'Chemistry', 'Biotechnology'],
      performance: '10,000x faster molecular modeling',
      status: 'Research Phase'
    },
    {
      id: 'quantum-machine-learning',
      title: 'Quantum Machine Learning',
      description: 'Next-generation AI powered by quantum computing principles',
      features: [
        'Quantum neural networks',
        'Quantum feature mapping',
        'Quantum optimization algorithms',
        'Exponential learning capacity'
      ],
      applications: ['Pattern Recognition', 'Predictive Analytics', 'Image Processing', 'Natural Language'],
      performance: 'Exponential learning speed',
      status: 'Development Phase'
    }
  ];

  const caseStudies = [
    {
      company: 'Global Financial Corp',
      industry: 'Finance',
      challenge: 'Portfolio optimization across 10,000+ assets',
      solution: 'Quantum Optimization Engine',
      results: [
        '95% reduction in optimization time',
        '40% improvement in portfolio returns',
        '$50M additional annual revenue',
        'Real-time risk assessment'
      ],
      timeline: '6 months implementation'
    },
    {
      company: 'PharmaTech Solutions',
      industry: 'Pharmaceuticals',
      challenge: 'Drug discovery for rare diseases',
      solution: 'Quantum Molecular Simulation',
      results: [
        '80% faster drug discovery process',
        '3 new drug candidates identified',
        '60% cost reduction in R&D',
        'Accelerated clinical trials'
      ],
      timeline: '12 months implementation'
    },
    {
      company: 'SecureComm Inc',
      industry: 'Cybersecurity',
      challenge: 'Ultra-secure communication for government clients',
      solution: 'Quantum Cryptography Suite',
      results: [
        '100% secure communication',
        'Zero security breaches',
        '50% reduction in security costs',
        'Future-proof encryption'
      ],
      timeline: '8 months implementation'
    }
  ];

  const quantumAdvantages = [
    {
      title: 'Exponential Speed',
      description: 'Solve problems that would take classical computers millions of years in seconds',
      icon: '⚡',
      metric: '10^15x faster'
    },
    {
      title: 'Parallel Processing',
      description: 'Process multiple solutions simultaneously using quantum superposition',
      icon: '🔄',
      metric: 'Infinite parallelism'
    },
    {
      title: 'Quantum Entanglement',
      description: 'Instantaneous correlation between quantum particles for ultra-fast communication',
      icon: '🔗',
      metric: 'Instant correlation'
    },
    {
      title: 'Quantum Tunneling',
      description: 'Overcome energy barriers that classical computers cannot',
      icon: '🚀',
      metric: 'Impossible solutions'
    }
  ];

  const pricingTiers = [
    {
      name: 'Quantum Starter',
      price: '$50,000',
      period: 'per month',
      description: 'Perfect for small-scale quantum computing needs',
      features: [
        '10 quantum computing hours/month',
        'Basic quantum algorithms',
        'Email support',
        'Standard security'
      ],
      popular: false
    },
    {
      name: 'Quantum Professional',
      price: '$150,000',
      period: 'per month',
      description: 'Ideal for medium-sized enterprises',
      features: [
        '50 quantum computing hours/month',
        'Advanced quantum algorithms',
        'Priority support',
        'Enhanced security',
        'Custom optimization'
      ],
      popular: true
    },
    {
      name: 'Quantum Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited quantum computing',
        'Custom quantum algorithms',
        'Dedicated support team',
        'Maximum security',
        'On-premise deployment',
        '24/7 monitoring'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              ⚡ QUANTUM COMPUTING 2026 • REVOLUTIONARY SOLUTIONS
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Quantum Computing Solutions
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Harness the power of quantum mechanics to solve impossible problems and unlock unprecedented computational capabilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Solutions
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold">
                Schedule Quantum Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quantum Advantages */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🚀 Quantum Computing Advantages</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Experience the revolutionary benefits of quantum computing that are transforming industries worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quantumAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-sm opacity-80 mb-4">{advantage.description}</p>
                <div className="text-2xl font-bold text-blue-300">{advantage.metric}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Showcase */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">💡 Quantum Solutions Portfolio</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover our comprehensive suite of quantum computing solutions designed for every industry need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {quantumSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300 cursor-pointer ${
                  selectedSolution === solution.id ? 'ring-2 ring-blue-400' : ''
                }`}
                onClick={() => setSelectedSolution(solution.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">{solution.title}</h3>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                    {solution.status}
                  </span>
                </div>
                
                <p className="text-blue-100 mb-6">{solution.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.applications.map((app, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-sm opacity-80 mb-2">Performance:</div>
                  <div className="text-blue-200 font-semibold">{solution.performance}</div>
                </div>

                <button className="w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">📊 Success Stories</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              See how leading companies are achieving unprecedented results with our quantum computing solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-blue-300">{study.company}</h3>
                  <div className="text-sm opacity-80">{study.industry}</div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Challenge:</h4>
                  <p className="text-sm opacity-80">{study.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Solution:</h4>
                  <p className="text-sm text-blue-200">{study.solution}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-sm opacity-80">
                  <strong>Timeline:</strong> {study.timeline}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">💰 Quantum Computing Pricing</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Choose the perfect quantum computing solution for your organization's needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 relative ${
                  tier.popular ? 'ring-2 ring-blue-400 scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-sm opacity-80 mb-4">{tier.description}</p>
                  <div className="text-4xl font-bold text-blue-300">
                    {tier.price}
                    <span className="text-lg text-gray-400">{tier.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                    : 'bg-white text-blue-600 hover:bg-blue-50'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Go Quantum?</h2>
            <p className="text-xl opacity-90 mb-8">
              Join the quantum revolution and unlock unprecedented computational power for your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-300 font-semibold">
                Start Quantum Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                Contact Quantum Experts
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputingSolutions2026;