import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Atom, Cpu, Brain, Shield, CheckCircle, Star, ArrowRight, Target, Zap, Users } from 'lucide-react';

const QuantumComputingPage: React.FC = () => {
  const features = [
    {
      icon: Atom,
      title: 'Quantum Algorithms',
      description: 'Advanced quantum algorithms for optimization, cryptography, and machine learning'
    },
    {
      icon: Cpu,
      title: 'Quantum Hardware',
      description: 'Access to cutting-edge quantum computing hardware and simulators'
    },
    {
      icon: Brain,
      title: 'Quantum Machine Learning',
      description: 'Quantum-enhanced machine learning models for superior performance'
    },
    {
      icon: Shield,
      title: 'Quantum Security',
      description: 'Quantum-resistant cryptography and secure communication protocols'
    }
  ];

  const benefits = [
    'Solve complex optimization problems exponentially faster',
    'Enhance machine learning with quantum algorithms',
    'Implement quantum-resistant security measures',
    'Accelerate drug discovery and materials science',
    'Enable breakthrough innovations in various industries',
    'Stay ahead of the quantum computing revolution'
  ];

  const services = [
    {
      title: 'Quantum Algorithm Development',
      description: 'Custom quantum algorithm development for specific business problems',
      price: 'Starting at $25,000/month'
    },
    {
      title: 'Quantum Machine Learning',
      description: 'Quantum-enhanced ML models and training systems',
      price: 'Starting at $30,000/month'
    },
    {
      title: 'Quantum Security Solutions',
      description: 'Quantum-resistant cryptography and security implementations',
      price: 'Starting at $20,000/month'
    },
    {
      title: 'Quantum Consulting',
      description: 'Strategic quantum computing consulting and planning',
      price: 'Starting at $15,000/month'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Quantum Computing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the power of quantum computing to solve complex problems and unlock new possibilities in optimization, cryptography, and machine learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/consultation"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Free Quantum Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quantum Computing Features</h2>
            <p className="text-xl text-gray-600">Cutting-edge quantum solutions for tomorrow's challenges</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Quantum Computing?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Quantum computing represents the next frontier in computational power, offering exponential
                speedups for specific problems that are intractable for classical computers.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quantum Impact</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Speed Improvement</span>
                  <span className="text-2xl font-bold text-green-600">Exponential</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Problem Complexity</span>
                  <span className="text-2xl font-bold text-blue-600">+1000x</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Security Level</span>
                  <span className="text-2xl font-bold text-purple-600">Quantum-Resistant</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Innovation Potential</span>
                  <span className="text-2xl font-bold text-orange-600">Unlimited</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Quantum Services</h2>
            <p className="text-xl text-gray-600">Comprehensive quantum computing solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-lg font-semibold text-blue-600 mb-4">{service.price}</div>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center block flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Quantum Process</h2>
            <p className="text-xl text-gray-600">How we develop quantum computing solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Problem Analysis</h3>
              <p className="text-gray-600 text-sm">Analyze problems to identify quantum computing opportunities</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Algorithm Design</h3>
              <p className="text-gray-600 text-sm">Design custom quantum algorithms for specific problems</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600 text-sm">Implement quantum solutions on available hardware</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimization</h3>
              <p className="text-gray-600 text-sm">Optimize and scale quantum solutions for production</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Quantum Computing?</h2>
          <p className="text-xl mb-8">Contact us today to discuss your quantum computing needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Get Started
            </Link>
            <Link
              to="/consultation"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Free Quantum Assessment
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuantumComputingPage;