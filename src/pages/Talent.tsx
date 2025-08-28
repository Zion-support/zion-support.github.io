import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { Users, Search, Briefcase, Star, Award, TrendingUp, Globe, Zap } from 'lucide-react';

export default function Talent() {
  const features = [
    {
      icon: Search,
      title: 'AI-Powered Talent Discovery',
      description: 'Advanced algorithms to find the perfect match for your organization'
    },
    {
      icon: Briefcase,
      title: 'Specialized Tech Recruitment',
      description: 'Expert recruiters focused on AI, Quantum Computing, and emerging technologies'
    },
    {
      icon: Star,
      title: 'Top-Tier Candidates',
      description: 'Access to the best talent in the technology industry'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous screening and verification processes'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth Support',
      description: 'Continuous development and advancement opportunities'
    },
    {
      icon: Globe,
      title: 'Global Talent Pool',
      description: 'Worldwide network of qualified professionals'
    }
  ];

  const services = [
    {
      title: 'Executive Search',
      description: 'C-level and senior leadership recruitment',
      price: 'Custom'
    },
    {
      title: 'Technical Recruitment',
      description: 'AI, ML, Quantum Computing, and IT professionals',
      price: '15-25%'
    },
    {
      title: 'Contract Staffing',
      description: 'Flexible staffing solutions for project-based work',
      price: 'Hourly rates'
    },
    {
      title: 'Talent Assessment',
      description: 'AI-powered skills evaluation and personality testing',
      price: 'Per assessment'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Talent Solutions - Zion Tech Group"
        description="Discover top-tier technology talent with our AI-powered recruitment solutions. Specialized in AI, Quantum Computing, and emerging technologies."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Discover
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Top Talent</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Connect with exceptional technology professionals through our AI-powered talent solutions. 
              Specialized in AI, Quantum Computing, and emerging technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105">
                Find Talent
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200">
                Post a Job
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Talent Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge AI technology and industry expertise to find the perfect candidates for your organization.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Talent Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive recruitment solutions tailored to your organization's needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-900/50 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-200"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <div className="text-cyan-400 font-semibold">{service.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Find Your Next Star?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our AI-powered talent solutions connect you with exceptional professionals who can drive your organization forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105">
                Get Started Today
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200">
                Schedule a Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}