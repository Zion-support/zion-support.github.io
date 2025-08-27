import React from 'react';
import { Link } from 'react-router-dom';

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-12">
          Sitemap
        </h1>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-zion-slate-dark/50 p-6 rounded-lg border border-zion-cyan/20">
            <h3 className="text-xl font-semibold text-white mb-4">Main Pages</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-zion-cyan hover:text-zion-cyan-light">Home</Link></li>
              <li><Link to="/about" className="text-zion-cyan hover:text-zion-cyan-light">About</Link></li>
              <li><Link to="/services" className="text-zion-cyan hover:text-zion-cyan-light">Services</Link></li>
              <li><Link to="/contact" className="text-zion-cyan hover:text-zion-cyan-light">Contact</Link></li>
            </ul>
          </div>
          
          <div className="bg-zion-slate-dark/50 p-6 rounded-lg border border-zion-cyan/20">
            <h3 className="text-xl font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/ai" className="text-zion-cyan hover:text-zion-cyan-light">AI Services</Link></li>
              <li><Link to="/services/cybersecurity" className="text-zion-cyan hover:text-zion-cyan-light">Cybersecurity</Link></li>
              <li><Link to="/services/cloud-devops" className="text-zion-cyan hover:text-zion-cyan-light">Cloud & DevOps</Link></li>
              <li><Link to="/services/quantum" className="text-zion-cyan hover:text-zion-cyan-light">Quantum Computing</Link></li>
            </ul>
          </div>
          
          <div className="bg-zion-slate-dark/50 p-6 rounded-lg border border-zion-cyan/20">
            <h3 className="text-xl font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help-center" className="text-zion-cyan hover:text-zion-cyan-light">Help Center</Link></li>
              <li><Link to="/faq" className="text-zion-cyan hover:text-zion-cyan-light">FAQ</Link></li>
              <li><Link to="/blog" className="text-zion-cyan hover:text-zion-cyan-light">Blog</Link></li>
              <li><Link to="/request-quote" className="text-zion-cyan hover:text-zion-cyan-light">Request Quote</Link></li>
            </ul>
          </div>
          
          <div className="bg-zion-slate-dark/50 p-6 rounded-lg border border-zion-cyan/20">
            <h3 className="text-xl font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/careers" className="text-zion-cyan hover:text-zion-cyan-light">Careers</Link></li>
              <li><Link to="/partners" className="text-zion-cyan hover:text-zion-cyan-light">Partners</Link></li>
              <li><Link to="/news" className="text-zion-cyan hover:text-zion-cyan-light">News</Link></li>
              <li><Link to="/research-development" className="text-zion-cyan hover:text-zion-cyan-light">R&D</Link></li>
            </ul>
          </div>
          
          <div className="bg-zion-slate-dark/50 p-6 rounded-lg border border-zion-cyan/20">
            <h3 className="text-xl font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-zion-cyan hover:text-zion-cyan-light">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-zion-cyan hover:text-zion-cyan-light">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-zion-cyan hover:text-zion-cyan-light">Cookie Policy</Link></li>
              <li><Link to="/accessibility" className="text-zion-cyan hover:text-zion-cyan-light">Accessibility</Link></li>
            </ul>
          </div>
          
          <div className="bg-zion-slate-dark/50 p-6 rounded-lg border border-zion-cyan/20">
            <h3 className="text-xl font-semibold text-white mb-4">Account</h3>
            <ul className="space-y-2">
              <li><Link to="/login" className="text-zion-cyan hover:text-zion-cyan-light">Login</Link></li>
              <li><Link to="/signup" className="text-zion-cyan hover:text-zion-cyan-light">Sign Up</Link></li>
              <li><Link to="/dashboard" className="text-zion-cyan hover:text-zion-cyan-light">Dashboard</Link></li>
              <li><Link to="/profile" className="text-zion-cyan hover:text-zion-cyan-light">Profile</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}