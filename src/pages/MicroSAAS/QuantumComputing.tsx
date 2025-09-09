import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Zap, 
  Target, 
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Globe,
  Shield,
  Cloud,
  BarChart3,
  Cpu,
  Lightbulb,
  Rocket,
  Brain
} from 'lucide-react';

const QuantumComputing = () => {
  const features = [
    {
      title: 'Quantum Algorithm Development',
      description: 'Custom quantum algorithms designed for your specific business problems.',
      icon: Brain,
      benefits: ['Problem Analysis', 'Algorithm Design', 'Optimization', 'Implementation']
    },
    {
      title: 'Quantum Software Solutions',
      description: 'Ready-to-use quantum software for common business applications.',
      icon: Cpu,
      benefits: ['Pre-built Solutions', 'Customization', 'Integration', 'Support']
    },
    {
      title: 'Quantum Consulting',
      description: 'Expert guidance on quantum computing strategy and implementation.',
      icon: Lightbulb,
      benefits: ['Strategy Planning', 'Technology Assessment', 'Implementation Roadmap', 'Ongoing Support']
    },
    {
      title: 'Quantum Education & Training',
      description: 'Comprehensive training programs for your team on quantum computing.',
      icon: Rocket,
      benefits: ['Fundamentals', 'Advanced Topics', 'Hands-on Practice', 'Certification']
    }
  ];

  const benefits = [
    {
      title: 'Exponential Speedup',
      description: 'Solve complex problems that would take classical computers years in minutes.',
      icon: Zap
    },
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition with cutting-edge quantum technology.',
      icon: Target
    },
    {
      title: 'Future-Proof Investment',
      description: 'Prepare your business for the quantum computing revolution.',
      icon: Globe
    },
    {
      title: 'Innovation Leadership',
      description: 'Position your company as a leader in quantum technology adoption.',
      icon: Award
    }
  ];

  const applications = [
    'Cryptography & Security',
    'Drug Discovery',
    'Financial Modeling',
    'Supply Chain Optimization',
    'Machine Learning',
    'Climate Modeling',
    'Logistics Planning',
    'Material Science'
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
              <Atom className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-cyan font-medium">Quantum Computing</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Quantum
              <span className="text-gradient"> Computing</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Harness the power of quantum mechanics to solve the most complex business 
              problems. Our platform brings quantum computing capabilities to your fingertips.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                Schedule Demo
              </button>
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
              Quantum Computing Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our comprehensive quantum computing platform provides everything you need to 
              leverage quantum technology for business advantage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                
                <p className="text-zion-slate-light mb-6 text-lg">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      {benefit}
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
              Why Choose Quantum Computing?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Quantum computing represents the next frontier in computational power, 
              offering unprecedented capabilities for solving complex problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
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
              Quantum Applications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover the wide range of industries and applications where quantum 
              computing is revolutionizing problem-solving and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((application, index) => (
              <motion.div
                key={application}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium">{application}</p>
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
              Start your quantum computing journey today and discover how this revolutionary 
              technology can transform your business operations and competitive position.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputing;