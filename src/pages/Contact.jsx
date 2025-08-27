import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-futuristic py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Contact Us
        </h1>
        <div className="max-w-2xl mx-auto">
          <div className="bg-zion-blue-dark/50 p-8 rounded-lg border border-zion-cyan/20">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-zion-slate-light">
                Ready to transform your business? Let's discuss your technology needs.
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <button className="w-full px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:scale-105 transition-transform">
                Send Message
              </button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-zion-cyan/20 text-center">
              <p className="text-zion-slate-light mb-2">
                <strong>Phone:</strong> +1 302 464 0950
              </p>
              <p className="text-zion-slate-light mb-2">
                <strong>Email:</strong> kleber@ziontechgroup.com
              </p>
              <p className="text-zion-slate-light">
                <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
