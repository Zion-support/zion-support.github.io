import React from 'react';
import { Brain, Zap, Shield, TrendingUp, Users, Globe, ArrowRight, CheckCircle, Star, Cpu } from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AIQuantumComputingPlatform() {
  const features = [
    'Quantum-classical hybrid computing architecture',
    'AI-driven quantum algorithm optimization',
    'Real-time quantum error correction and mitigation',
    'Quantum machine learning model training',
    'Quantum cryptography and secure communications',
    'Scalable quantum cloud infrastructure'
  ];

  const tiers = [
    {
      name: 'Developer',
      price: '$1,999/mo',
      description: 'Perfect for research and development teams',
      details: [
        'Up to 50 qubits access',
        'Basic quantum algorithm library',
        'Standard support (8/5)',
        'API access and documentation',
        'Community forum access'
      ]
    },
    {
      name: 'Business',
      price: '$4,999/mo',
      description: 'Ideal for enterprise quantum computing needs',
      details: [
        'Up to 200 qubits access',
        'Advanced quantum algorithm suite',
        'Priority support (12/7)',
        'Custom quantum circuit design',
        'Dedicated account manager',
        'Training and certification'
      ]
    },
    {
      name: 'Enterprise',
      price: '$12,999/mo',
      description: 'Full-scale quantum computing platform',
      details: [
        'Unlimited qubits access',
        'Custom quantum algorithm development',
        '24/7 dedicated support',
        'On-premise deployment options',
        'Custom integrations and APIs',
        'White-label solutions available'
      ]
    }
  ];

  const useCases = [
    'Drug discovery and molecular modeling',
    'Financial portfolio optimization',
    'Cryptography and cybersecurity',
    'Machine learning acceleration',
    'Climate modeling and simulation',
    'Supply chain optimization'
  ];

  const benefits = [
    'Solve complex problems 1000x faster than classical computers',
    'Reduce computational costs by 60-80% for specific workloads',
    'Enable breakthroughs in previously unsolvable domains',
    'Future-proof your technology infrastructure',
    'Gain competitive advantage in research and development'
  ];

  const industries = [
    'Pharmaceutical and Biotechnology',
    'Financial Services and Banking',
    'Cybersecurity and Defense',
    'Research and Academia',
    'Energy and Climate Science',
    'Manufacturing and Logistics'
  ];

  return (
    <>
      <SEO 
        title="AI Quantum Computing Platform | Zion Tech Group"
        description="Revolutionary AI-powered quantum computing platform for solving complex problems. Access quantum algorithms, error correction, and hybrid computing architecture."
        keywords="AI quantum computing, quantum algorithms, quantum machine learning, quantum cryptography, quantum cloud"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full">
                <Cpu className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Quantum Computing Platform
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the power of quantum computing with AI-driven optimization. 
              Solve previously unsolvable problems and accelerate breakthroughs across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#pricing"
                className="inline-flex items-center px-8 py-3 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-200"
              >
                View Pricing
              </a>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Revolutionary Quantum Computing Features
              </h2>
              <p className="text-xl text-gray-300">
                Experience the future of computing with our AI-enhanced quantum platform
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quantum Computing Pricing Plans
              </h2>
              <p className="text-xl text-gray-300">
                Choose the perfect plan for your quantum computing journey
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiers.map((tier, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 border ${
                  index === 1 ? 'border-purple-400/50 scale-105' : 'border-white/10'
                } hover:border-purple-400/50 transition-all duration-300`}>
                  {index === 1 && (
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="text-4xl font-bold text-white mb-6">{tier.price}</div>
                  <ul className="space-y-3 mb-8">
                    {tier.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="https://ziontechgroup.com/contact"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transform Your Industry with Quantum Computing
              </h2>
              <p className="text-xl text-gray-300">
                Discover how quantum computing can revolutionize your business
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{useCase}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Quantum Platform?
              </h2>
              <p className="text-xl text-gray-300">
                Unlock unprecedented computational power and capabilities
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-300">
                Quantum computing solutions for every sector
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm text-gray-300">{industry}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience Quantum Computing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to learn how our AI-powered quantum computing platform can transform your business
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Contact Us</h3>
                <p className="text-gray-300">Mobile: +1 302 464 0950</p>
                <p className="text-gray-300">Email: kleber@ziontechgroup.com</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Visit Our Site</h3>
                <p className="text-gray-300">https://ziontechgroup.com</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008</p>
                <p className="text-gray-300">Middletown DE 19709</p>
              </div>
            </div>
            <a 
              href="https://ziontechgroup.com/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </section>
      </div>
    </>
  );
}