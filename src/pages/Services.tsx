import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  Lock, 
  BarChart3, 
  Heart, 
  DollarSign, 
  ShoppingCart, 
  Building,
  Eye,
  ArrowRight,
  Search,
  Filter,
  Star,
  CheckCircle,
  Clock,
  TrendingUp,
  FileText,
  MessageCircle,
  Truck
} from 'lucide-react';

export function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Our Services - Zion Tech Group"
        description="Comprehensive technology solutions designed to accelerate your business growth and digital transformation."
        canonical="https://ziontechgroup.com/services"
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
            >
              Get Started
            </Link>
            <Link 
              to="/request-quote" 
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-colors"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Our Service Categories</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore our comprehensive range of technology services designed to meet your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <Brain className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">AI & Machine Learning</h3>
              <p className="text-zion-slate-light mb-4">Intelligent solutions powered by artificial intelligence</p>
              <Link to="/services/ai-services" className="text-zion-cyan hover:text-zion-cyan-light">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <Cloud className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Cloud & Infrastructure</h3>
              <p className="text-zion-slate-light mb-4">Scalable cloud solutions and robust infrastructure</p>
              <Link to="/services/cloud-services" className="text-zion-cyan hover:text-zion-cyan-light">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <Shield className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity</h3>
              <p className="text-zion-slate-light mb-4">Advanced security solutions to protect your business</p>
              <Link to="/services/cybersecurity" className="text-zion-cyan hover:text-zion-cyan-light">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Contact our team to discuss your specific needs and discover how our services can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              to="/revolutionary-services-2025" 
              className="inline-flex items-center px-8 py-3 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
