import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Globe,
  Shield,
  Brain,
  Cloud,
  Lock,
  Zap,
  Rocket,
  Users
} from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our Comprehensive
            <span className="text-zion-cyan"> Services</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover our cutting-edge technology solutions designed to transform your business 
            and drive innovation across all industries.
          </p>
        </div>

        {/* Navigation to Specialized Service Pages */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <Link to="/enhanced-services">
            <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
              <Globe className="h-4 w-4 mr-2" />
              Enhanced Services Showcase
            </Button>
          </Link>
          <Link to="/ai-services">
            <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
              <Brain className="h-4 w-4 mr-2" />
              AI Services
            </Button>
          </Link>
          <Link to="/cybersecurity-services">
            <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
              <Shield className="h-4 w-4 mr-2" />
              Cybersecurity
            </Button>
          </Link>
          <Link to="/request-quote">
            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
              Request a Quote
            </Button>
          </Link>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* AI & Machine Learning */}
          <div className="bg-zion-slate/50 backdrop-blur-sm rounded-xl p-6 border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Brain className="h-8 w-8 text-zion-cyan mr-3" />
              <h3 className="text-xl font-semibold text-white">AI & Machine Learning</h3>
            </div>
            <p className="text-zion-slate-light mb-4">
              Advanced artificial intelligence solutions for automation, data analysis, and intelligent decision-making.
            </p>
            <Link to="/ai-services" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
              Learn More →
            </Link>
          </div>

          {/* Cybersecurity */}
          <div className="bg-zion-slate/50 backdrop-blur-sm rounded-xl p-6 border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-zion-cyan mr-3" />
              <h3 className="text-xl font-semibold text-white">Cybersecurity</h3>
            </div>
            <p className="text-zion-slate-light mb-4">
              Comprehensive security solutions to protect your digital assets and ensure compliance.
            </p>
            <Link to="/cybersecurity-services" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
              Learn More →
            </Link>
          </div>

          {/* Cloud Infrastructure */}
          <div className="bg-zion-slate/50 backdrop-blur-sm rounded-xl p-6 border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Cloud className="h-8 w-8 text-zion-cyan mr-3" />
              <h3 className="text-xl font-semibold text-white">Cloud Infrastructure</h3>
            </div>
            <p className="text-zion-slate-light mb-4">
              Scalable cloud solutions for modern applications and enterprise infrastructure needs.
            </p>
            <Link to="/cloud-services" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
              Learn More →
            </Link>
          </div>

          {/* Digital Transformation */}
          <div className="bg-zion-slate/50 backdrop-blur-sm rounded-xl p-6 border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Rocket className="h-8 w-8 text-zion-cyan mr-3" />
              <h3 className="text-xl font-semibold text-white">Digital Transformation</h3>
            </div>
            <p className="text-zion-slate-light mb-4">
              Strategic guidance and implementation for modernizing your business processes and technology stack.
            </p>
            <Link to="/digital-transformation" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
              Learn More →
            </Link>
          </div>

          {/* IT Consulting */}
          <div className="bg-zion-slate/50 backdrop-blur-sm rounded-xl p-6 border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 text-zion-cyan mr-3" />
              <h3 className="text-xl font-semibold text-white">IT Consulting</h3>
            </div>
            <p className="text-zion-slate-light mb-4">
              Expert technology consulting to optimize your IT strategy and maximize ROI.
            </p>
            <Link to="/it-consulting" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
              Learn More →
            </Link>
          </div>

          {/* Custom Solutions */}
          <div className="bg-zion-slate/50 backdrop-blur-sm rounded-xl p-6 border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Zap className="h-8 w-8 text-zion-cyan mr-3" />
              <h3 className="text-xl font-semibold text-white">Custom Solutions</h3>
            </div>
            <p className="text-zion-slate-light mb-4">
              Tailored technology solutions designed specifically for your unique business requirements.
            </p>
            <Link to="/custom-solutions" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
              Learn More →
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-zion-slate/30 backdrop-blur-sm rounded-xl p-8 border border-zion-slate-light/20">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
            Let our experts help you navigate the digital landscape and implement solutions that drive real results.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/request-quote">
              <Button size="lg" className="bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white">
                Get Started Today
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
