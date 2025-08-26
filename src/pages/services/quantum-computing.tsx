import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Atom, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Star,
  Award,
  Brain,
  BarChart3,
  Users,
  Globe,
  Cpu,
  Shield,
  Database
} from 'lucide-react';

const QuantumComputingServicesPage = () => {
  const services = [
    {
      title: 'Quantum Algorithm Development',
      description: 'Custom quantum algorithms for optimization, cryptography, and machine learning applications.',
      features: ['Quantum Optimization', 'Quantum Cryptography', 'Quantum ML', 'Algorithm Design'],
      icon: Brain
    },
    {
      title: 'Quantum Software Solutions',
      description: 'Quantum software development and integration with classical computing systems.',
      features: ['Quantum SDKs', 'Hybrid Computing', 'Quantum Simulators', 'Software Integration'],
      icon: Cpu
    },
    {
      title: 'Quantum Consulting',
      description: 'Strategic guidance on quantum computing adoption and implementation strategies.',
      features: ['Technology Assessment', 'Roadmap Planning', 'Use Case Analysis', 'Vendor Selection'],
      icon: Users
    },
    {
      title: 'Quantum Education & Training',
      description: 'Comprehensive training programs for teams to understand and work with quantum technologies.',
      features: ['Quantum Fundamentals', 'Hands-on Training', 'Workshops', 'Certification Programs'],
      icon: Globe
    }
  ];

  const benefits = [
    'Exponential speedup for complex problems',
    'Enhanced security with quantum cryptography',
    'Breakthrough optimization capabilities',
    'Future-proof technology investment',
    'Competitive advantage in research',
    'Access to cutting-edge quantum resources'
  ];

  const applications = [
    'Financial Modeling',
    'Drug Discovery',
    'Logistics Optimization',
    'Climate Modeling',
    'AI & Machine Learning',
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
            <div className="inline-flex items-center space-x-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full px-6 py-3 mb-8">
              <Rocket className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-cyan font-medium">Quantum Computing Services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Unlock the Power of
              <span className="text-gradient"> Quantum Computing</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Harness the revolutionary power of quantum computing to solve previously 
              unsolvable problems and accelerate innovation across industries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Quantum Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                Explore Quantum Solutions
              </button>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Quantum Computing Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              From algorithm development to quantum software solutions, we provide cutting-edge 
              quantum computing services that drive innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                
                <p className="text-zion-slate-light mb-6 text-lg">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Quantum Computing Services?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the future of computing with our quantum expertise and innovative solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg text-zion-slate-light">{benefit}</p>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum Computing Applications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover how quantum computing can revolutionize various industries and applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {applications.map((application, index) => (
              <motion.div
                key={application}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Atom className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-medium text-white">{application}</p>
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
              Ready to Go Quantum?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Be at the forefront of the quantum revolution. Our quantum computing experts 
              are ready to help you explore the infinite possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Start Quantum Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                Download Quantum Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputingServicesPage;