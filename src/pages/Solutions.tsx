import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Brain, 
  Cloud, 
  Shield, 
  BarChart3, 
  Building, 
  Building2, 
  Rocket, 
  Heart, 
  TrendingUp, 
  Users, 
  Factory, 
  City, 
  Car, 
  Leaf, 
  Globe, 
  Zap, 
  Star,
  ArrowRight,
  CheckCircle,
  Award,
  Clock,
  DollarSign
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Solutions() {
  const industrySolutions = [
    {
      name: 'Healthcare Solutions',
      icon: Heart,
      description: 'Digital health transformation with AI diagnostics, telemedicine platforms, and healthcare analytics',
      features: ['AI-powered diagnostics', 'Telemedicine platforms', 'Healthcare analytics', 'HIPAA compliance', 'Patient data management'],
      href: '/solutions#healthcare',
      color: 'from-red-500 to-pink-500',
      featured: true
    },
    {
      name: 'Financial Services',
      icon: TrendingUp,
      description: 'Fintech innovation with AI trading, risk management, and regulatory compliance solutions',
      features: ['AI trading platforms', 'Risk management', 'Regulatory compliance', 'Fraud detection', 'Financial analytics'],
      href: '/solutions#financial',
      color: 'from-emerald-500 to-green-500',
      featured: true
    },
    {
      name: 'Legal Services',
      icon: Shield,
      description: 'AI-powered legal tech solutions for document analysis, compliance, and case management',
      features: ['Document analysis', 'Legal research', 'Compliance monitoring', 'Case management', 'Contract review'],
      href: '/solutions#legal',
      color: 'from-blue-500 to-indigo-500',
      featured: true
    },
    {
      name: 'Research & Academia',
      icon: Brain,
      description: 'Scientific research acceleration with AI-powered discovery and data analysis tools',
      features: ['Research automation', 'Data analysis', 'Literature review', 'Experiment design', 'Publication support'],
      href: '/solutions#research',
      color: 'from-purple-500 to-violet-500',
      featured: true
    },
    {
      name: 'Manufacturing',
      icon: Factory,
      description: 'Smart manufacturing with IoT, predictive maintenance, and supply chain optimization',
      features: ['IoT integration', 'Predictive maintenance', 'Supply chain optimization', 'Quality control', 'Automation'],
      href: '/solutions#manufacturing',
      color: 'from-orange-500 to-red-500',
      featured: false
    },
    {
      name: 'Retail & E-commerce',
      icon: ShoppingCart,
      description: 'Omnichannel retail solutions with AI-powered personalization and inventory management',
      features: ['AI personalization', 'Inventory management', 'Customer analytics', 'Omnichannel integration', 'Fraud prevention'],
      href: '/solutions#retail',
      color: 'from-pink-500 to-rose-500',
      featured: false
    },
    {
      name: 'Government & Public Sector',
      icon: Building2,
      description: 'Digital government transformation with secure, scalable, and compliant solutions',
      features: ['Digital services', 'Security compliance', 'Data governance', 'Citizen engagement', 'Process automation'],
      href: '/solutions#government',
      color: 'from-slate-500 to-gray-500',
      featured: false
    },
    {
      name: 'Energy & Sustainability',
      icon: Leaf,
      description: 'Green technology solutions for renewable energy, carbon tracking, and sustainability management',
      features: ['Renewable energy', 'Carbon tracking', 'Sustainability management', 'Smart grids', 'Energy optimization'],
      href: '/solutions#energy',
      color: 'from-green-500 to-emerald-500',
      featured: false
    },
    {
      name: 'Space & Aerospace',
      icon: Rocket,
      description: 'Space technology solutions for satellite operations, mission planning, and aerospace innovation',
      features: ['Satellite operations', 'Mission planning', 'Aerospace innovation', 'Data processing', 'Mission control'],
      href: '/solutions#space',
      color: 'from-indigo-500 to-purple-500',
      featured: false
    },
    {
      name: 'Education & Training',
      icon: Users,
      description: 'Educational technology solutions for personalized learning and skill development',
      features: ['Personalized learning', 'Skill assessment', 'Content creation', 'Student analytics', 'Virtual classrooms'],
      href: '/solutions#education',
      color: 'from-cyan-500 to-blue-500',
      featured: false
    }
  ];

  const capabilitySolutions = [
    {
      name: 'Enterprise Solutions',
      icon: Building2,
      description: 'Large-scale business transformations with end-to-end digital solutions',
      features: ['Digital transformation', 'Legacy modernization', 'Enterprise architecture', 'Change management', 'ROI optimization'],
      href: '/solutions#enterprise',
      color: 'from-blue-500 to-cyan-500',
      featured: true
    },
    {
      name: 'SMB Solutions',
      icon: Building,
      description: 'Scalable solutions designed for small to medium business growth and efficiency',
      features: ['Cost-effective scaling', 'Quick implementation', 'Growth optimization', 'Process automation', 'Market expansion'],
      href: '/solutions#smb',
      color: 'from-green-500 to-emerald-500',
      featured: false
    },
    {
      name: 'Startup Solutions',
      icon: Rocket,
      description: 'Accelerate your startup growth with innovative technology solutions',
      features: ['MVP development', 'Rapid prototyping', 'Market validation', 'Investor readiness', 'Scale preparation'],
      href: '/solutions#startup',
      color: 'from-purple-500 to-pink-500',
      featured: false
    }
  ];

  const stats = [
    { value: '500+', label: 'Projects Delivered', icon: Target, color: 'text-cyan-400' },
    { value: '98%', label: 'Client Satisfaction', icon: Star, color: 'text-yellow-400' },
    { value: '50+', label: 'Industries Served', icon: Building, color: 'text-blue-400' },
    { value: '24/7', label: 'Support Available', icon: Clock, color: 'text-green-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Solutions - Zion Tech Group"
        description="Comprehensive technology solutions across industries including healthcare, finance, legal, research, and more. Transform your business with AI-powered innovation."
        canonical="https://ziontechgroup.com/solutions"
      />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Industry Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your business with cutting-edge AI, cloud, and technology solutions tailored to your industry. 
              From healthcare to finance, we deliver innovative solutions that drive growth and efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 inline-flex items-center gap-2"
              >
                Get Your Solution
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="px-8 py-4 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-lg transition-all duration-300 inline-flex items-center gap-2"
              >
                View Case Studies
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Industry Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored solutions designed specifically for your industry's unique challenges and opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={solution.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-slate-800/50 rounded-2xl p-6 border transition-all duration-300 hover:scale-105 ${
                  solution.featured 
                    ? 'border-cyan-400/50 shadow-lg shadow-cyan-400/20' 
                    : 'border-slate-700/50 hover:border-cyan-400/30'
                }`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-4`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{solution.name}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={solution.href}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capability Solutions */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Capability Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Solutions designed around your organization's size, maturity, and growth stage
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilitySolutions.map((solution, index) => (
              <motion.div
                key={solution.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-slate-900/50 rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  solution.featured 
                    ? 'border-cyan-400/50 shadow-lg shadow-cyan-400/20' 
                    : 'border-slate-700/50 hover:border-cyan-400/30'
                }`}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <solution.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{solution.name}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{solution.description}</p>
                <ul className="space-y-3 mb-8">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={solution.href}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Explore Solutions
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-400/20"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our industry-specific solutions can drive innovation, efficiency, and growth for your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 inline-flex items-center gap-2"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-lg transition-all duration-300 inline-flex items-center gap-2"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}