import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Welcome to <span className="text-zion-cyan">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Leading the future of technology innovation with cutting-edge AI solutions, 
            expert talent, and innovative services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors">
              Get Started
            </button>
            <button className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zion-slate-light/10 p-6 rounded-xl border border-zion-cyan/20">
              <h3 className="text-xl font-semibold text-white mb-4">AI Solutions</h3>
              <p className="text-zion-slate-light">
                Cutting-edge artificial intelligence solutions for modern businesses.
              </p>
            </div>
            <div className="bg-zion-slate-light/10 p-6 rounded-xl border border-zion-cyan/20">
              <h3 className="text-xl font-semibold text-white mb-4">IT Services</h3>
              <p className="text-zion-slate-light">
                Comprehensive IT infrastructure and support services.
              </p>
            </div>
            <div className="bg-zion-slate-light/10 p-6 rounded-xl border border-zion-cyan/20">
              <h3 className="text-xl font-semibold text-white mb-4">Consulting</h3>
              <p className="text-zion-slate-light">
                Strategic technology consulting and digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Get in touch with our technology experts today.
          </p>
          <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
