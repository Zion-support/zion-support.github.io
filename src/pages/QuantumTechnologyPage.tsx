import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Atom, 
  Zap, 
  Shield, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Star,
  TrendingUp,
  Users,
  Lock,
  BarChart3,
  Settings,
  Lightbulb,
  Rocket
} from 'lucide-react';

const QuantumTechnologyPage = () => {
  const quantumServices = [
    {
      id: 'quantum-algorithms',
      title: 'Quantum Algorithms',
      description: 'Develop and optimize quantum algorithms for complex computational problems',
      icon: <Cpu className="w-8 h-8" />,
      features: ['Algorithm Design', 'Quantum Circuit Optimization', 'Error Correction', 'Performance Analysis'],
      useCases: ['Cryptography', 'Optimization Problems', 'Machine Learning', 'Financial Modeling'],
      pricing: 'Starting from $8,000/month'
    },
    {
      id: 'quantum-security',
      title: 'Quantum Security',
      description: 'Next-generation security solutions leveraging quantum principles',
      icon: <Shield className="w-8 h-8" />,
      features: ['Quantum Key Distribution', 'Post-Quantum Cryptography', 'Quantum Random Number Generation', 'Security Audits'],
      useCases: ['Secure Communications', 'Financial Transactions', 'Government Systems', 'Critical Infrastructure'],
      pricing: 'Starting from $6,500/month'
    },
    {
      id: 'quantum-simulation',
      title: 'Quantum Simulation',
      description: 'Simulate quantum systems for research and development',
      icon: <Atom className="w-8 h-8" />,
      features: ['System Modeling', 'Quantum Chemistry', 'Material Science', 'Drug Discovery'],
      useCases: ['Research & Development', 'Pharmaceuticals', 'Materials Engineering', 'Scientific Discovery'],
      pricing: 'Starting from $7,200/month'
    },
    {
      id: 'quantum-research',
      title: 'Research & Development',
      description: 'Cutting-edge quantum research and development services',
      icon: <Rocket className="w-8 h-8" />,
      features: ['Quantum Computing Research', 'Hardware Development', 'Software Frameworks', 'Academic Collaboration'],
      useCases: ['Technology Innovation', 'Academic Research', 'Industry Partnerships', 'Patent Development'],
      pricing: 'Starting from $10,000/month'
    }
  ];

  const quantumApplications = [
    'Cryptography', 'Optimization', 'Machine Learning', 'Chemistry', 'Finance', 'Logistics', 'AI', 'Cybersecurity'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mb-6">
            <Cpu className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Quantum Technology
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed mb-8">
            Harness the power of quantum computing for revolutionary breakthroughs. 
            From quantum algorithms to quantum security, we're at the forefront of the quantum revolution.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">1000x</div>
              <div className="text-zion-slate-light">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-purple mb-2">Unlimited</div>
              <div className="text-zion-slate-light">Computational Power</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-blue mb-2">Future</div>
              <div className="text-zion-slate-light">Technology Today</div>
            </div>
          </div>
        </motion.div>

        {/* Quantum Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {quantumServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-zion-blue-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/10"
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <div className="text-right">
                  <div className="text-sm text-zion-cyan font-medium">{service.pricing}</div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Use Cases */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Use Cases:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.useCases.map((useCase, useCaseIndex) => (
                    <span
                      key={useCaseIndex}
                      className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full border border-zion-cyan/20"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to={`/quantum-technology/${service.id}`}
                className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Quantum Applications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Quantum Applications
            </h2>
            <p className="text-zion-slate-light max-w-2xl mx-auto">
              Quantum computing opens up new possibilities across various fields, 
              revolutionizing how we solve complex problems.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quantumApplications.map((application, index) => (
              <motion.div
                key={application}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zion-blue-dark/20 border border-zion-cyan/20 rounded-lg p-4 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="text-zion-cyan font-medium">{application}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Quantum Computing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Quantum Computing?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Exponential Speed</h3>
              <p className="text-zion-slate-light">
                Solve problems that are impossible for classical computers
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
              <p className="text-zion-slate-light">
                Unlock new possibilities in science and technology
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-blue to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Competitive Edge</h3>
              <p className="text-zion-slate-light">
                Stay ahead of the competition with quantum technology
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center bg-zion-blue-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for the Quantum Future?
          </h2>
          <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
            Join the quantum revolution and discover how quantum computing can transform 
            your business and research capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 hover:scale-105"
            >
              Explore Quantum Solutions
            </Link>
            <Link
              to="/services/pricing"
              className="px-8 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              View Quantum Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuantumTechnologyPage;