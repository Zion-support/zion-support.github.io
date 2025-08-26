import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  Atom, 
  Zap, 
  Brain, 
  Globe, 
  Shield, 
  BarChart3, 
  Cpu,
  ArrowRight,
  CheckCircle,
  Star,
  Network,
  Cloud,
  Database
} from 'lucide-react';

const QuantumComputingPage = () => {
  const services = [
    {
      title: 'Quantum Algorithm Development',
      description: 'Custom quantum algorithms designed to solve complex computational problems efficiently.',
      features: ['Custom Algorithms', 'Optimization Problems', 'Quantum Machine Learning', 'Performance Analysis'],
      price: '$15,000/month',
      icon: Rocket,
      category: 'Algorithm Development'
    },
    {
      title: 'Quantum Software Solutions',
      description: 'Quantum software development and integration for enterprise applications.',
      features: ['Quantum SDKs', 'API Integration', 'Custom Applications', 'Testing & Validation'],
      price: '$8,500/month',
      icon: Cpu,
      category: 'Software Development'
    },
    {
      title: 'Quantum Security',
      description: 'Quantum-resistant cryptography and security solutions for future-proof protection.',
      features: ['Post-Quantum Cryptography', 'Quantum Key Distribution', 'Security Auditing', 'Compliance'],
      price: '$12,000/month',
      icon: Shield,
      category: 'Security'
    },
    {
      title: 'Quantum Machine Learning',
      description: 'Quantum-enhanced machine learning models for superior pattern recognition and prediction.',
      features: ['Quantum Neural Networks', 'Feature Selection', 'Model Optimization', 'Performance Metrics'],
      price: '$18,000/month',
      icon: Brain,
      category: 'Machine Learning'
    },
    {
      title: 'Quantum Optimization',
      description: 'Solve complex optimization problems with quantum computing power.',
      features: ['Supply Chain Optimization', 'Financial Modeling', 'Logistics Planning', 'Resource Allocation'],
      price: '$20,000/month',
      icon: BarChart3,
      category: 'Optimization'
    },
    {
      title: 'Quantum Consulting',
      description: 'Strategic guidance for quantum computing adoption and implementation.',
      features: ['Strategy Development', 'Technology Assessment', 'Roadmap Planning', 'Team Training'],
      price: '$5,000/month',
      icon: Globe,
      category: 'Consulting'
    }
  ];

  const benefits = [
    'Solve problems 100x faster than classical computers',
    'Enable breakthroughs in drug discovery and materials science',
    'Revolutionize financial modeling and optimization',
    'Future-proof your technology investments'
  ];

  const applications = [
    'Drug Discovery',
    'Financial Modeling',
    'Supply Chain',
    'Climate Modeling',
    'AI & ML',
    'Cryptography'
  ];

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
            <div className="flex items-center justify-center mb-6">
              <Rocket className="w-16 h-16 text-zion-cyan mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold text-gradient">
                Quantum Computing
              </h1>
            </div>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Harness the power of quantum mechanics to solve previously unsolvable problems. 
              Our quantum computing solutions unlock new possibilities in computation and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-neon px-8 py-4 text-lg font-semibold"
              >
                Explore Quantum
              </Link>
              <Link
                to="/request-quote"
                className="btn-futuristic px-8 py-4 text-lg font-semibold"
              >
                Quantum Assessment
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Quantum Computing Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From algorithm development to quantum software, we provide comprehensive solutions 
              that leverage the power of quantum mechanics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-zion-cyan bg-zion-cyan/10 px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-zion-cyan">
                    {service.price}
                  </div>
                  <Link
                    to="/contact"
                    className="flex items-center text-zion-cyan hover:text-white transition-colors duration-300 group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Quantum Computing?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the revolutionary power of quantum computing and unlock new possibilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg text-zion-slate-light leading-relaxed">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Quantum Applications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover how quantum computing is transforming industries and solving complex challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {applications.map((application, index) => (
              <motion.div
                key={application}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors duration-300">
                  {application}
                </h3>
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
            className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20 border border-zion-cyan/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Go Quantum?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Be at the forefront of the quantum revolution. Our expert team is ready to help you 
              harness the power of quantum computing for your most complex challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-neon px-8 py-4 text-lg font-semibold"
              >
                Start Quantum Journey
              </Link>
              <Link
                to="/request-quote"
                className="btn-futuristic px-8 py-4 text-lg font-semibold"
              >
                Get Quantum Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputingPage;