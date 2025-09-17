import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to{' '}
              <span className="text-gradient-purple">Zion Tech Group</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Leading the revolution in AI, quantum computing, and cybersecurity solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="btn-primary text-lg px-8 py-4"
              >
                Explore Our Services
              </Link>
              <Link
                to="/contact"
                className="btn-secondary text-lg px-8 py-4"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cutting-edge solutions for the digital future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI Solutions",
                description: "Machine learning, NLP, and computer vision solutions",
                icon: "🤖",
                href: "/ai-services"
              },
              {
                title: "Quantum Computing",
                description: "Quantum algorithms and breakthrough computing solutions",
                icon: "⚛️",
                href: "/quantum-computing"
              },
              {
                title: "Cybersecurity",
                description: "Advanced security solutions for modern threats",
                icon: "🔒",
                href: "/cybersecurity"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card card-hover text-center"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <Link
                  to={service.href}
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our cutting-edge solutions can drive your success
            </p>
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Start Your Journey
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;