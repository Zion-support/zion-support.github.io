import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Zap, 
  CheckCircle, 
  BarChart3, 
  Sparkles, 
  ArrowRight, 
  Brain,
  Cpu,
  Database,
  Globe,
  Rocket,
  Target,
  Shield,
  TrendingUp,
  Layers
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function QuantumComputingSolutions() {
  const features = [
    'Quantum algorithm optimization and development',
    'Quantum machine learning and AI acceleration',
    'Cryptography and security solutions',
    'Financial modeling and risk analysis',
    'Drug discovery and molecular simulation',
    'Supply chain optimization and logistics',
    'Climate modeling and environmental analysis',
    'Quantum error correction and fault tolerance'
  ];

  const benefits = [
    'Solve complex problems 1000x faster than classical computers',
    'Breakthrough discoveries in drug development and materials science',
    'Unbreakable quantum encryption for ultimate security',
    'Revolutionary optimization for logistics and supply chains',
    'Accelerate AI training and inference by orders of magnitude',
    'Enable new computational paradigms impossible with classical computing'
  ];

  const quantumApplications = [
    {
      name: 'Financial Services',
      description: 'Portfolio optimization, risk assessment, and algorithmic trading',
      icon: TrendingUp,
      useCases: ['Monte Carlo simulations', 'Option pricing', 'Risk management', 'Market prediction']
    },
    {
      name: 'Healthcare & Pharma',
      description: 'Drug discovery, protein folding, and personalized medicine',
      icon: Brain,
      useCases: ['Molecular dynamics', 'Drug interaction modeling', 'Genomic analysis', 'Clinical trials optimization']
    },
    {
      name: 'Logistics & Supply Chain',
      description: 'Route optimization, inventory management, and demand forecasting',
      icon: Globe,
      useCases: ['Traveling salesman problem', 'Vehicle routing', 'Warehouse optimization', 'Supply chain resilience']
    },
    {
      name: 'Cybersecurity',
      description: 'Quantum-resistant cryptography and secure communications',
      icon: Shield,
      useCases: ['Post-quantum cryptography', 'Quantum key distribution', 'Secure multi-party computation', 'Blockchain security']
    }
  ];

  const pricing = [
    {
      plan: 'Research',
      price: '$2,999',
      period: '/month',
      features: ['Up to 100 qubits', 'Basic quantum algorithms', 'Email support', 'Standard documentation'],
      recommended: false
    },
    {
      plan: 'Enterprise',
      price: '$9,999',
      period: '/month',
      features: ['Up to 1000 qubits', 'Custom quantum algorithms', 'Priority support', 'Dedicated quantum engineers', 'Custom integrations'],
      recommended: true
    },
    {
      plan: 'Government',
      price: '$24,999',
      period: '/month',
      features: ['Unlimited qubits', 'Custom quantum hardware', '24/7 support', 'On-site quantum experts', 'White-label solutions'],
      recommended: false
    }
  ];

  const quantumTechnologies = [
    { name: 'IBM Q', url: 'https://quantum-computing.ibm.com/', category: 'Quantum Hardware' },
    { name: 'Google Cirq', url: 'https://quantumai.google/cirq', category: 'Quantum Framework' },
    { name: 'Microsoft Q#', url: 'https://docs.microsoft.com/en-us/azure/quantum/', category: 'Quantum Language' },
    { name: 'Amazon Braket', url: 'https://aws.amazon.com/braket/', category: 'Quantum Cloud' },
    { name: 'Rigetti', url: 'https://www.rigetti.com/', category: 'Quantum Processors' },
    { name: 'D-Wave', url: 'https://www.dwavesys.com/', category: 'Quantum Annealing' },
    { name: 'IonQ', url: 'https://ionq.com/', category: 'Trapped Ion Quantum' },
    { name: 'Xanadu', url: 'https://www.xanadu.ai/', category: 'Photonics Quantum' }
  ];

  const researchAreas = [
    'Quantum machine learning and neural networks',
    'Quantum optimization algorithms',
    'Quantum error correction codes',
    'Quantum cryptography protocols',
    'Quantum simulation methods',
    'Quantum sensing and metrology',
    'Quantum communication networks',
    'Quantum materials and devices'
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      <SEO 
        title="Quantum Computing Solutions - Zion Tech Group"
        description="Unlock the power of quantum computing with our cutting-edge solutions. Solve complex problems 1000x faster and enable breakthrough discoveries."
        canonical="/services/quantum-computing-solutions"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Quantum Computing</span> Solutions
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Harness the power of quantum mechanics to solve the world's most complex computational challenges and unlock unprecedented possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Explore Quantum Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                Visit Our Site
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
          <motion.div 
            className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.3, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          />
        </div>
      </section>

      {/* Quantum Applications Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary <span className="text-cyan-400">Quantum Applications</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Discover how quantum computing is transforming industries and solving previously impossible problems
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quantumApplications.map((app, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                    <app.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{app.name}</h3>
                    <p className="text-cyan-400 text-sm font-medium">Quantum Application</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">{app.description}</p>
                <ul className="space-y-2">
                  {app.useCases.map((useCase, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <CheckCircle className="h-4 w-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {useCase}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced <span className="text-cyan-400">Quantum Capabilities</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Cutting-edge quantum computing features for the most challenging computational problems
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Atom className="h-6 w-6 text-white" />
                </div>
                <p className="text-slate-300 text-sm">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum <span className="text-cyan-400">Advantages</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Unprecedented computational power that transforms what's possible
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="ml-3 text-lg font-semibold text-white">Advantage {index + 1}</h3>
                </div>
                <p className="text-slate-300">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cutting-Edge <span className="text-cyan-400">Research Areas</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Pioneering research in quantum computing and its applications
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">{area}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum <span className="text-cyan-400">Pricing</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Access to the future of computing with flexible pricing options
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative bg-slate-800/50 border rounded-xl p-8 ${
                  plan.recommended 
                    ? 'border-cyan-500/50 bg-slate-800/70' 
                    : 'border-slate-700/50'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-slate-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-all duration-300 ${
                    plan.recommended
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Leading <span className="text-cyan-400">Quantum Technologies</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Integration with the world's most advanced quantum computing platforms
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quantumTechnologies.map((tech, index) => (
              <motion.a
                key={index}
                href={tech.url}
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800/60 border border-slate-700/60 rounded-lg p-4 text-center hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-sm text-cyan-400 mb-1">{tech.category}</div>
                <div className="text-white font-semibold">{tech.name}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to <span className="text-cyan-400">Quantum Leap</span> Forward?
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Join the quantum revolution and solve problems that were once considered impossible
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Quantum Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-6 text-sm text-slate-400">
              Questions? Email <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:underline">kleber@ziontechgroup.com</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}