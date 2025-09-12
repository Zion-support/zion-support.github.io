import React from 'react';
import { Link } from 'react-router-dom';

const services = [];
const solutions = [];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Cutting-edge AI, Quantum Computing, and Cybersecurity solutions for the future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="px-8 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 border border-cyan-500 text-cyan-500 rounded-lg hover:bg-cyan-500 hover:text-white transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">AI Solutions</h3>
              <p className="text-slate-300">
                Advanced artificial intelligence solutions for business automation and optimization.
              </p>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Quantum Computing</h3>
              <p className="text-slate-300">
                Next-generation quantum computing services for complex problem solving.
              </p>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Cybersecurity</h3>
              <p className="text-slate-300">
                Comprehensive security solutions to protect your digital assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Get in touch with our experts to discuss your project requirements.
          </p>
          <Link
            to="/contact"
            className="px-8 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}