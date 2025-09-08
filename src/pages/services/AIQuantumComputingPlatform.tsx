import React from 'react';
import { motion   } from 'framer-motion';
import { Link   } from 'react-router-dom';
import { Brain, 
  Zap, 
  Atom, 
  Clock, 
  CheckCircle, 
  Globe,
  TrendingUp,
  ArrowRight,
  Target,
  Cpu,
  Activity,
  BarChart3,
  Network,
  Rocket
  } from 'lucide-react';
import { SEO   } from '../../components/SEO';

export default function AIQuantumComputingPlatform() {
  const features = [
    'AI-powered quantum algorithm optimization',
    'Hybrid quantum-classical computing solutions',
    'Quantum machine learning frameworks',
    'Real-time quantum circuit simulation',
    'Quantum error correction and optimization',
    'Multi-qubit system management',
    'Quantum cryptography and security',
    'Custom quantum algorithm development',
    'Quantum cloud infrastructure access',
    'Advanced quantum analytics and visualization'
  ];

  const benefits = [
    'Solve complex problems 1000x faster',
    'Reduce computational costs by 60-80%',
    'Enable breakthrough scientific discoveries',
    'Real-time quantum optimization',
    'Access to cutting-edge quantum hardware',
    'Future-proof your computational capabilities'
  ];

  const pricing = [
    { 
      name: 'Starter', 
      price: '$1,299/mo', 
      features: ['Up to 10 qubits', 'Basic quantum simulation', 'Standard algorithms', 'Email support', 'Monthly usage reports'],
      popular: false
    },
    { 
      name: 'Professional', 
      price: '$2,999/mo', 
      features: ['Up to 50 qubits', 'Advanced quantum AI', 'Real-time optimization', 'Priority support', 'Custom algorithms', 'API access'],
      popular: true
    },
    { 
      name: 'Enterprise', 
      price: '$7,999/mo', 
      features: ['Unlimited qubits', 'Full quantum suite', 'Custom quantum models', 'Dedicated support', 'White-label solutions', 'Hardware access'],
      popular: false
    }
  ];

  const useCases = [
    'Drug discovery and molecular modeling',
    'Financial portfolio optimization',
    'Cryptography and cybersecurity',
    'Climate modeling and prediction',
    'Machine learning acceleration',
    'Supply chain optimization'
  ];

  const industries = [
    'Pharmaceuticals & Healthcare',
    'Financial Services & Banking',
    'Cybersecurity & Defense',
    'Climate Science & Energy',
    'Artificial Intelligence & ML',
    'Logistics & Transportation'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-800 py-20 text-center text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Atom className="w-4 h-4 mr-2" /> AI-Powered Quantum Computing Platform
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">AI Quantum Computing Platform</h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Harness the power of quantum computing with AI-driven optimization, hybrid quantum-classical solutions, 
            and breakthrough computational capabilities. Solve the impossible with quantum intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
              View Pricing
            </a>
            <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              The Future of Computing is Here
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our AI-quantum hybrid platform combines the power of quantum computing with the intelligence of AI to deliver unprecedented computational capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index)   => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-lg border border-zion-slate/30 rounded-2xl p-8 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose AI Quantum Computing Platform?</h2>
            <p className="text-xl text-gray-600">Transform your computational capabilities with quantum intelligence</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Applications</h2>
          <p className="text-xl text-gray-600">Revolutionary applications across cutting-edge industries</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{useCase}</h3>
            </div>
          ))}
        </div>
      </section>

          <div className="grid grid-cols-1 md: anygrid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index)   => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-zion-slate-dark/50 backdrop-blur-lg border rounded-2xl p-8 ${
                  service.popular 
                    ? 'border-zion-cyan shadow-lg shadow-zion-cyan/25' 
                    : 'border-zion-slate/30'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-2">{plan.price}</div>
                  <p className="text-gray-600">per month</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-purple-600 text-white hover:bg-purple-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Need a custom plan? Contact us for enterprise pricing</p>
            <a href="mailto:kleber@ziontechgroup.com" className="text-purple-600 hover:text-purple-700 font-semibold">
              Contact Sales Team
            </a>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Revolutionary quantum computing solutions for various industries with proven results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg: anygrid-cols-2 gap-8">
            {useCases.map((useCase, index)   => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-lg border border-zion-slate/30 rounded-2xl p-8"
              >
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-zion-cyan mr-3" />
                  <h3 className="text-2xl font-bold text-white">{useCase.industry}</h3>
                </div>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-zion-slate-light">
                      <TrendingUp className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Advanced Quantum Technologies
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Built on the latest quantum technologies to ensure maximum performance and reliability
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md: anygrid-cols-4 gap-6 max-w-4xl mx-auto">
            {technologies.map((tech, index)   => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 backdrop-blur-lg border border-zion-slate/30 rounded-xl p-6 text-center hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Harness Quantum Power?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading organizations already using AI Quantum Computing Platform to solve the impossible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:kleber@ziontechgroup.com" className="px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Start Free Trial
            </a>
            <a href="tel:+13024640950" className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors">
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Questions? We're Here to Help</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <Phone className="w-8 h-8 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">Speak with our quantum computing experts</p>
            <a href="tel:+13024640950" className="text-purple-600 hover:text-purple-700 font-semibold">
              +1 302 464 0950
            </a>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <Mail className="w-8 h-8 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">Get detailed information and pricing</p>
            <a href="mailto:kleber@ziontechgroup.com" className="text-purple-600 hover:text-purple-700 font-semibold">
              kleber@ziontechgroup.com
            </a>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-gray-50 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Our Website</h3>
          <p className="text-gray-600 mb-4">
            Learn more about our complete suite of AI-powered business solutions
          </p>
          <a 
            href="https://ziontechgroup.com" 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold"
          >
            Visit ziontechgroup.com <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
}