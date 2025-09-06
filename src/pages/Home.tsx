import React from 'react';

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto animate-fade-in-delay">
            Advanced Technology Solutions for the Future
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105">
              Get Started
            </button>
            <button className="border border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <div className="bg-card p-8 rounded-xl border hover:shadow-lg transition-all duration-300 hover:scale-105 group">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <span className="text-3xl">🤖</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4">AI Solutions</h3>
            <p className="text-foreground/70 leading-relaxed">
              Cutting-edge artificial intelligence solutions for modern businesses. 
              From machine learning models to intelligent automation systems.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-xl border hover:shadow-lg transition-all duration-300 hover:scale-105 group">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <span className="text-3xl">☁️</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Cloud Services</h3>
            <p className="text-foreground/70 leading-relaxed">
              Scalable cloud infrastructure and deployment solutions. 
              Secure, reliable, and optimized for performance.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-xl border hover:shadow-lg transition-all duration-300 hover:scale-105 group">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <span className="text-3xl">🚀</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Digital Transformation</h3>
            <p className="text-foreground/70 leading-relaxed">
              Complete digital transformation strategies and implementation. 
              Modernize your business with cutting-edge technology.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-card rounded-xl border p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-foreground/70">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-foreground/70">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-foreground/70">Uptime</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-foreground/70">Support</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary/5 rounded-xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can help your business grow and succeed.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105">
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
}