import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import {

  Shield, Brain, Zap, Target, CheckCircle, ArrowRight, TrendingUp,
  MessageCircle, Phone, Mail, MapPin, Star, Award, Lightbulb,
  Settings, Search, Users, Cloud, Cpu, Database, Layers, Lock,
  Key, Bug, Virus, Fire, FileText, Wifi, Bluetooth, Radio
} from 'lucide-react';

const QuantumAICybersecurity: React.FC = () => {

  const features = [
    {

      icon: Shield,
      title: 'Quantum Encryption',
      description: 'Unbreakable quantum-based encryption systems',
      color: 'from-blue-500 to-cyan-500'
    },
    {

      icon: Brain,
      title: 'AI Threat Detection',
      description: 'Intelligent AI-powered threat identification',
      color: 'from-purple-500 to-pink-500'
    },
    {

      icon: Zap,
      title: 'Real-time Protection',
      description: 'Instant quantum security response systems',
      color: 'from-yellow-500 to-orange-500'
    },
    {

      icon: Target,
      title: 'Precision Security',
      description: 'Targeted quantum security solutions',
      color: 'from-green-500 to-emerald-500'
    },
    {

      icon: Cloud,
      title: 'Quantum Cloud Security',
      description: 'Cloud-based quantum security platform',
      color: 'from-indigo-500 to-blue-500'
    },
    {

      icon: Lock,
      title: 'Advanced Authentication',
      description: 'Quantum-powered identity verification',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const solutions = [
    {

      title: 'Quantum Encryption',
      description: 'Unbreakable quantum encryption for data protection',
      icon: Lock,
      benefits: ['Unbreakable security', 'Future-proof protection', 'Data integrity', 'Compliance ready'],
      color: 'from-blue-500 to-cyan-500'
    },
    {

      title: 'AI Threat Intelligence',
      description: 'Intelligent threat detection and response systems',
      icon: Brain,
      benefits: ['Real-time detection', 'Predictive analysis', 'Automated response', 'Threat prevention'],
      color: 'from-purple-500 to-pink-500'
    },
    {

      title: 'Quantum Key Distribution',
      description: 'Secure quantum key exchange protocols',
      icon: Key,
      benefits: ['Secure communication', 'Quantum keys', 'Tamper detection', 'Perfect secrecy'],
      color: 'from-green-500 to-emerald-500'
    },
    {

      title: 'Zero Trust Security',
      description: 'Quantum-powered zero trust architecture',
      icon: Shield,
      benefits: ['Continuous verification', 'Micro-segmentation', 'Least privilege', 'Risk reduction'],
      color: 'from-red-500 to-orange-500'
    }
  ];

  const industries = [
    'Financial Services',
    'Healthcare',
    'Government',
    'Defense',
    'Energy',
    'Telecommunications',
    'Manufacturing',
    'Retail',
    'Education',
    'Technology'
  ];

  const benefits = [
    'Unbreakable quantum encryption',
    'Real-time threat detection',
    'Reduce security breaches by 99%',
    'Future-proof protection',
    'AI-powered intelligence',
    'Compliance assurance',
    'Cost-effective security',
    'Competitive advantage'
  ];

  const technologies = [
    'Quantum Computing',
    'AI/ML',
    'Quantum Cryptography',
    'Blockchain',
    'Zero Trust',
    'Edge Computing',
    '5G Security',
    'Cloud Security'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Quantum AI Cybersecurity - Zion Tech Group"
        description="Revolutionary quantum-powered AI cybersecurity solutions. Unbreakable encryption, intelligent threat detection, and future-proof security for the digital age."
        keywords="quantum AI cybersecurity, quantum encryption, AI threat detection, cybersecurity, Zion Tech Group"
        ogType="website"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium">
                <Shield className="w-4 h-4" />
                Quantum Security
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Quantum AI
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Cybersecurity
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Secure your digital future with our revolutionary quantum-powered AI cybersecurity platform. Unbreakable encryption, intelligent threat detection, and future-proof protection.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-futuristic bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700">
                  <Shield className="w-5 h-5" />
                  Security Demo
                </button>
                <button className="btn-futuristic-outline">
                  <FileText className="w-5 h-5" />
                  Download Security Guide
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-purple-500/20 rounded-2xl border border-blue-500/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Shield className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Quantum AI Cybersecurity</h3>
                    <p className="text-gray-300">Unbreakable Security</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Revolutionary Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our quantum AI cybersecurity platform combines cutting-edge quantum computing with advanced artificial intelligence to deliver unprecedented security capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-700/50"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Quantum Security Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From quantum encryption to AI threat intelligence, our platform addresses diverse cybersecurity needs with quantum-powered solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{solution.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{solution.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Why Choose Quantum AI Cybersecurity?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the advantages of quantum-powered security and AI-driven threat protection.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-700/50 rounded-xl border border-slate-600/50 text-center hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-600/50"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium text-sm leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform leverages the latest advancements in quantum computing, AI, and cybersecurity to deliver superior protection.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 text-center hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-700/50 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium text-sm leading-relaxed">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Industries We Protect
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our quantum AI cybersecurity platform is designed to protect various industries with quantum-powered security solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-700/50 rounded-xl border border-slate-600/50 text-center hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-600/50 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium text-sm leading-relaxed">{industry}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready for Quantum Security?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the quantum security revolution with our AI-powered platform. Experience the future of unbreakable cybersecurity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700">
                <MessageCircle className="w-5 h-5" />
                Schedule Security Demo
              </button>
              <button className="btn-futuristic-outline">
                <Phone className="w-5 h-5" />
                Contact Security Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Ready to revolutionize your cybersecurity with quantum AI technology? Our team of security experts is here to help you implement the future of digital protection.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-gray-300">+1 302 464 0950</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-300">kleber@ziontechgroup.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Address</p>
                    <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Request Security Consultation</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                
                <input
                  type="text"
                  placeholder="Organization"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                
                <textarea
                  placeholder="Tell us about your cybersecurity needs..."
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                ></textarea>
                
                <button
                  type="submit"
                  className="w-full btn-futuristic bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700"
                >
                  <MessageCircle className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumAICybersecurity;