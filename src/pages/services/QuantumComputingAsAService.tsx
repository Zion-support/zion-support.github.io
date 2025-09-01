import React from 'react';
import { Link } from 'react-router-dom';
import { Atom, Cpu, Zap, Shield, BarChart3, Users, Clock, CheckCircle, ArrowRight, ExternalLink, Brain, Database, Globe, Lock, TrendingUp, Target, Network, Server, Cloud } from 'lucide-react';

const QuantumComputingAsAService = () => {

  const features = [
    {

      icon: Atom,
      title: 'Quantum Processing Units (QPUs)',
      description: 'Access to state-of-the-art quantum processors including superconducting qubits, trapped ions, and photonic quantum computers.',
      benefits: [
        'Real-time quantum computation',
        'Multiple quantum architectures',
        'Quantum error correction',
        'Scalable quantum resources'
      ],
      price: 'From $1,000/hour'
    },
    {

      icon: Cpu,
      title: 'Hybrid Quantum-Classical Computing',
      description: 'Seamless integration of quantum and classical computing resources for optimal problem-solving performance.',
      benefits: [
        'Quantum-classical optimization',
        'Hybrid algorithms',
        'Resource allocation',
        'Performance optimization'
      ],
      price: 'From $500/hour'
    },
    {

      icon: Zap,
      title: 'Quantum Algorithm Library',
      description: 'Pre-built quantum algorithms for optimization, machine learning, cryptography, and scientific simulations.',
      benefits: [
        'Ready-to-use algorithms',
        'Custom algorithm development',
        'Performance benchmarking',
        'Documentation and support'
      ],
      price: 'From $299/month'
    },
    {

      icon: Shield,
      title: 'Quantum Security & Encryption',
      description: 'Post-quantum cryptography solutions and quantum-resistant security protocols for future-proof protection.',
      benefits: [
        'Quantum-resistant algorithms',
        'Security audits',
        'Compliance frameworks',
        'Threat modeling'
      ],
      price: 'From $799/month'
    }
  ];

  const applications = [
    {

      title: 'Financial Services',
      description: 'Portfolio optimization, risk assessment, and algorithmic trading with quantum speedup.',
      icon: BarChart3,
      benefits: ['Portfolio optimization', 'Risk modeling', 'Option pricing', 'Fraud detection']
    },
    {

      title: 'Drug Discovery',
      description: 'Molecular simulation, protein folding, and drug candidate screening using quantum chemistry.',
      icon: Target,
      benefits: ['Molecular modeling', 'Protein folding', 'Drug screening', 'Chemical reactions']
    },
    {

      title: 'Logistics & Supply Chain',
      description: 'Route optimization, inventory management, and supply chain optimization with quantum algorithms.',
      icon: Network,
      benefits: ['Route optimization', 'Inventory management', 'Demand forecasting', 'Resource allocation']
    },
    {

      title: 'Machine Learning',
      description: 'Quantum machine learning algorithms for pattern recognition and data classification.',
      icon: Brain,
      benefits: ['Pattern recognition', 'Data classification', 'Feature selection', 'Model training']
    }
  ];

  const quantumProviders = [
    { name: 'IBM Quantum', description: 'Superconducting qubit systems with up to 433 qubits' },
    { name: 'Google Quantum AI', description: 'Sycamore processor and quantum supremacy demonstrations' },
    { name: 'Microsoft Azure Quantum', description: 'Topological qubits and quantum development kit' },
    { name: 'Amazon Braket', description: 'Multi-provider quantum computing service' },
    { name: 'Rigetti Computing', description: 'Superconducting quantum processors and cloud access' },
    { name: 'IonQ', description: 'Trapped ion quantum computers with high fidelity' }
  ];

  const pricingTiers = [
    {

      name: 'Explorer',
      price: '$299/month',
      description: 'Perfect for learning and experimentation',
      features: [
        '5 hours/month quantum compute time',
        'Access to basic quantum simulators',
        'Standard algorithm library',
        'Community support',
        'Basic tutorials and documentation'
      ]
    },
    {

      name: 'Professional',
      price: '$1,999/month',
      description: 'Ideal for research and development',
      features: [
        '50 hours/month quantum compute time',
        'Access to real quantum hardware',
        'Advanced algorithm library',
        'Priority support',
        'Custom algorithm development',
        'Performance analytics'
      ]
    },
    {

      name: 'Enterprise',
      price: 'Custom',
      description: 'For large-scale quantum applications',
      features: [
        'Unlimited quantum compute time',
        'Dedicated quantum resources',
        'Custom quantum algorithms',
        'Dedicated support team',
        'SLA guarantees',
        'On-premise deployment options'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 h-[28rem] w-[28rem] rounded-full bg-indigo-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-slate-900/50 px-4 py-1 text-blue-300">
            <Atom className="h-4 w-4" />
            <span className="text-xs font-semibold tracking-wider">QUANTUM COMPUTING AS A SERVICE</span>
          </div>
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl mb-6">
            Access the Future of Computing with
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent"> Quantum Power</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Leverage the power of quantum computing through our cloud platform. Solve complex problems that are impossible for classical computers.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 font-semibold hover:from-blue-400 hover:to-indigo-500 transition-all">
              Start Free Trial
            </Link>
            <Link to="/request-quote" className="rounded-lg border border-blue-400/40 px-6 py-3 font-semibold text-blue-300 hover:bg-white/5 transition-all">
              Request Demo
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:border-blue-400/30 hover:bg-white/10">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-600/20 text-blue-300">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-slate-300 mb-6">{feature.description}</p>
              <ul className="space-y-3 mb-6">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-200">
                    <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="text-2xl font-bold text-blue-300">{feature.price}</div>
            </div>
          ))}
        </div>

        {/* Applications */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Quantum Applications & Use Cases</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {applications.map((app, index) => (
              <div key={index} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-600/20 text-blue-300">
                  <app.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{app.title}</h3>
                <p className="text-sm text-slate-300 mb-3">{app.description}</p>
                <ul className="text-xs text-slate-400 space-y-1">
                  {app.benefits.map((benefit, idx) => (
                    <li key={idx}>• {benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Quantum Providers */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Leading Quantum Computing Providers</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {quantumProviders.map((provider, index) => (
              <div key={index} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md text-center">
                <h3 className="text-lg font-semibold mb-2">{provider.name}</h3>
                <p className="text-sm text-slate-300">{provider.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Flexible Pricing Plans</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`rounded-xl border p-8 backdrop-blur-md ${

                tier.name === 'Professional' 
                  ? 'border-2 border-blue-400 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 relative' 
                  : 'border-white/10 bg-white/5'
              }`}>
                {tier.name === 'Professional' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                <div className="text-4xl font-bold text-blue-300 mb-6">{tier.price}</div>
                <p className="text-slate-300 mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <span className="text-slate-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to={tier.name === 'Enterprise' ? '/contact' : '/contact'} 
                  className={`w-full rounded-lg py-3 text-center font-semibold transition-all ${

                    tier.name === 'Enterprise'
                      ? 'border border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white'
                      : 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500'
                  }`}
                >
                  {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Specifications</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md text-center">
              <div className="text-3xl font-bold text-blue-300 mb-2">1000+</div>
              <div className="text-sm text-slate-300">Quantum Qubits Available</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md text-center">
              <div className="text-3xl font-bold text-blue-300 mb-2">99.9%</div>
              <div className="text-sm text-slate-300">Uptime Guarantee</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md text-center">
              <div className="text-3xl font-bold text-blue-300 mb-2">24/7</div>
              <div className="text-sm text-slate-300">Technical Support</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md text-center">
              <div className="text-3xl font-bold text-blue-300 mb-2">50+</div>
              <div className="text-sm text-slate-300">Pre-built Algorithms</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-blue-500/10 to-indigo-600/10 p-12 backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-4">Ready to Harness Quantum Power?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join the quantum revolution and solve problems that were previously impossible with classical computing.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-8 py-4 font-semibold hover:from-blue-400 hover:to-indigo-500 transition-all">
                Start Your Free Trial
              </Link>
              <a href="mailto:kleber@ziontechgroup.com" className="rounded-lg border border-blue-400 px-8 py-4 font-semibold text-blue-300 hover:bg-blue-400 hover:text-white transition-all">
                Schedule a Demo
              </a>
            </div>
            <div className="mt-6 text-sm text-slate-400">
              Contact: +1 302 464 0950 · kleber@ziontechgroup.com · 364 E Main St STE 1008 Middletown DE 19709
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingAsAService;