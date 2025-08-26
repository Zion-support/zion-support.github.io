import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to <span className="text-cyan-400">Zion Tech Group</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Leading AI & Technology Solutions for Business Transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/about" 
              className="px-8 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
            >
              Learn More
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'AI Solutions', description: 'Cutting-edge artificial intelligence services', icon: '🤖' },
              { name: 'Cloud Services', description: 'Scalable cloud infrastructure solutions', icon: '☁️' },
              { name: 'Cybersecurity', description: 'Advanced security and protection systems', icon: '🔒' },
              { name: 'Digital Transformation', description: 'End-to-end business modernization', icon: '🚀' },
              { name: 'IT Consulting', description: 'Strategic technology guidance', icon: '💡' },
              { name: 'Green IT', description: 'Sustainable technology solutions', icon: '🌱' }
            ].map((service, index) => (
              <div key={index} className="bg-slate-700 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-slate-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's discuss how our technology solutions can drive your success
          </p>
          <Link 
            to="/contact" 
            className="px-8 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors text-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
