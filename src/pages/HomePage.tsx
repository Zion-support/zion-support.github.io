import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion - Professional Services Marketplace</title>
        <meta name="description" content="Connect with top professionals and service providers on Zion's marketplace." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-zion-blue to-zion-purple">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">
              Welcome to <span className="text-zion-cyan">Zion</span>
            </h1>
            <p className="text-xl mb-8 text-zion-slate-light max-w-2xl mx-auto">
              Connect with top professionals and service providers. Find the perfect match for your project needs.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan/80">
                <Link to="/services">Browse Services</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-zion-blue">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-zion-cyan rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Find Services</h3>
              <p className="text-zion-slate-light">Discover professional services tailored to your needs</p>
            </div>
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-zion-cyan rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect</h3>
              <p className="text-zion-slate-light">Connect directly with verified professionals</p>
            </div>
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-zion-cyan rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Results</h3>
              <p className="text-zion-slate-light">Complete your projects with confidence</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-zion-slate-light">Don't just take our word for it</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-zion-cyan text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-zion-slate-light mb-4">
                "Zion Tech Group transformed our business with their AI solutions. The team's expertise and dedication are unmatched."
              </p>
              <div className="text-white font-semibold">John Smith</div>
              <div className="text-zion-slate-light text-sm">CEO, TechCorp</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-zion-cyan text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-zion-slate-light mb-4">
                "Outstanding web development services. They delivered exactly what we needed on time and within budget."
              </p>
              <div className="text-white font-semibold">Sarah Johnson</div>
              <div className="text-zion-slate-light text-sm">Founder, StartupXYZ</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-zion-cyan text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-zion-slate-light mb-4">
                "Professional, reliable, and innovative. Zion Tech Group is our go-to partner for all IT needs."
              </p>
              <div className="text-white font-semibold">Mike Davis</div>
              <div className="text-zion-slate-light text-sm">CTO, Enterprise Solutions</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;