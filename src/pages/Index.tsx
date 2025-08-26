import React from 'react';
import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-cyan-400">Zion Tech Group</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Leading the future of technology with innovative AI solutions and digital transformation expertise
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-slate-300 mb-6">
                To empower businesses with cutting-edge technology solutions that drive innovation, 
                efficiency, and sustainable growth in the digital age.
              </p>
              <p className="text-lg text-slate-300">
                We believe in leveraging artificial intelligence, cloud computing, and emerging 
                technologies to solve complex business challenges and create lasting value for our clients.
              </p>
            </div>
            <div className="bg-slate-700 h-64 rounded-lg flex items-center justify-center">
              <span className="text-6xl">🎯</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Innovation', description: 'Pushing boundaries and exploring new possibilities in technology', icon: '🚀' },
              { title: 'Excellence', description: 'Delivering the highest quality solutions and service to our clients', icon: '⭐' },
              { title: 'Integrity', description: 'Building trust through honest, transparent, and ethical business practices', icon: '🤝' }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-slate-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's discuss how our technology solutions can drive your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
            >
              Get Started
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
