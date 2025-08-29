import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ArrowRight, DollarSign, ExternalLink, Workflow, MessageSquare, Globe, Brain, Rocket, Shield, Cloud, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, Zap, Star, Target, TrendingUp, Lightbulb, Atom, Dna, Eye, Network, Leaf, Building, Car, GraduationCap, Factory, Store, Truck, Zap as Lightning, Phone, MapPin } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';
import { EMERGING_TECH_SERVICES_2025 } from '../data/emergingTechServices2025';
import { INDUSTRY_SPECIFIC_SERVICES_2025 } from '../data/industrySpecificServices2025';

const Services: React.FC = () => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  
  // Combine all services
  const allServices = [
    ...INNOVATIVE_MICRO_SAAS_SERVICES_2025,
    ...EMERGING_TECH_SERVICES_2025,
    ...INDUSTRY_SPECIFIC_SERVICES_2025
  ];

  const featuredCategories = [
    { icon: Brain, title: 'AI & Analytics', desc: 'Advanced AI solutions for business intelligence, automation, and insights.', href: '/ai-services', color: 'from-purple-500 to-pink-500' },
    { icon: Rocket, title: 'Emerging Tech', desc: 'Cutting-edge technologies like quantum computing, neuromorphic computing, and DNA computing.', href: '/emerging-tech', color: 'from-blue-500 to-cyan-500' },
    { icon: Building, title: 'Industry Solutions', desc: 'Tailored AI solutions for healthcare, finance, manufacturing, and more.', href: '/industry-solutions', color: 'from-green-500 to-emerald-500' },
    { icon: Zap, title: 'Micro SaaS', desc: 'Productized SaaS solutions for specific business needs and niches.', href: '/micro-saas', color: 'from-orange-500 to-red-500' }
  ];

  const serviceCategories = [
    { name: 'AI & Analytics', icon: Brain, count: allServices.filter(s => s.category.includes('AI') || s.category.includes('Analytics')).length },
    { name: 'Emerging Tech', icon: Rocket, count: allServices.filter(s => s.category.includes('Quantum') || s.category.includes('Neuromorphic') || s.category.includes('DNA') || s.category.includes('Photonic')).length },
    { name: 'Industry Solutions', icon: Building, count: INDUSTRY_SPECIFIC_SERVICES_2025.length },
    { name: 'Micro SaaS', icon: Zap, count: INNOVATIVE_MICRO_SAAS_SERVICES_2025.length },
    { name: 'Healthcare', icon: Heart, count: allServices.filter(s => s.industry === 'Healthcare' || s.category.includes('Healthcare')).length },
    { name: 'Finance', icon: DollarSign, count: allServices.filter(s => s.industry === 'Financial Services' || s.category.includes('Finance')).length },
    { name: 'Manufacturing', icon: Factory, count: allServices.filter(s => s.industry === 'Manufacturing' || s.category.includes('Manufacturing')).length },
    { name: 'Retail', icon: Store, count: allServices.filter(s => s.industry === 'Retail' || s.category.includes('Retail')).length }
  ];

  const industries = [
    { name: 'Healthcare', icon: Heart, color: 'from-red-500 to-pink-500' },
    { name: 'Financial Services', icon: DollarSign, color: 'from-green-500 to-emerald-500' },
    { name: 'Manufacturing', icon: Factory, color: 'from-blue-500 to-cyan-500' },
    { name: 'Retail', icon: Store, color: 'from-purple-500 to-indigo-500' },
    { name: 'Education', icon: GraduationCap, color: 'from-yellow-500 to-orange-500' },
    { name: 'Transportation', icon: Truck, color: 'from-gray-500 to-slate-500' },
    { name: 'Energy', icon: Lightning, color: 'from-yellow-400 to-orange-500' },
    { name: 'Agriculture', icon: Leaf, color: 'from-green-400 to-emerald-500' },
    { name: 'Construction', icon: Building, color: 'from-blue-600 to-indigo-600' }
  ];

  const filtered = useMemo(() => {
    let filteredServices = allServices;
    
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      filteredServices = filteredServices.filter(s =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        s.tags?.some(t => t.toLowerCase().includes(q))
      );
    }
    
    if (selectedCategory !== 'all') {
      filteredServices = filteredServices.filter(s => {
        if (selectedCategory === 'AI & Analytics') {
          return s.category.includes('AI') || s.category.includes('Analytics');
        } else if (selectedCategory === 'Emerging Tech') {
          return s.category.includes('Quantum') || s.category.includes('Neuromorphic') || s.category.includes('DNA') || s.category.includes('Photonic');
        } else if (selectedCategory === 'Industry Solutions') {
          return s.industry && s.industry !== '';
        } else if (selectedCategory === 'Micro SaaS') {
          return s.category.includes('Micro SaaS') || s.category.includes('SaaS');
        }
        return true;
      });
    }
    
    if (selectedIndustry !== 'all') {
      filteredServices = filteredServices.filter(s => s.industry === selectedIndustry);
    }
    
    return filteredServices;
  }, [query, selectedCategory, selectedIndustry, allServices]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO title="Services - Zion Tech Group" description="Comprehensive AI, Micro SaaS, Emerging Technologies, and Industry-Specific Solutions. Transform your business with cutting-edge technology services." />

      <section className="relative py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 16 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }} 
              className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Our Comprehensive Services
            </motion.h1>
            <p className="mt-6 text-xl text-slate-300">
              Discover our extensive portfolio of AI-powered solutions, emerging technologies, and industry-specific platforms designed to transform your business.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">{allServices.length}+</div>
                <div className="text-sm text-slate-400">Total Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">{industries.length}</div>
                <div className="text-sm text-slate-400">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">99.9%</div>
                <div className="text-sm text-slate-400">Uptime Guarantee</div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-12 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services, technologies, or industries..."
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-lg"
            />
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Service Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((category) => (
              <Link key={category.title} to={category.href} className="group">
                <div className={`bg-gradient-to-br ${category.color} p-6 rounded-2xl hover:scale-105 transition-transform duration-300`}>
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
                  <p className="text-white/80 text-sm">{category.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Category and Industry Filters */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Category Filter */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Service Categories</h3>
              <div className="grid grid-cols-2 gap-3">
                {serviceCategories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name === selectedCategory ? 'all' : category.name)}
                    className={`p-4 rounded-lg border transition-all duration-200 text-left ${
                      selectedCategory === category.name
                        ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                        : 'border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <category.icon className="w-5 h-5" />
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <span className="text-sm bg-slate-700 px-2 py-1 rounded-full">{category.count}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Industry Filter */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Industries</h3>
              <div className="grid grid-cols-2 gap-3">
                {industries.map((industry) => (
                  <button
                    key={industry.name}
                    onClick={() => setSelectedIndustry(industry.name === selectedIndustry ? 'all' : industry.name)}
                    className={`p-4 rounded-lg border transition-all duration-200 text-left ${
                      selectedIndustry === industry.name
                        ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                        : 'border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${industry.color} flex items-center justify-center`}>
                        <industry.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium">{industry.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">
              {filtered.length} Services Found
              {selectedCategory !== 'all' && ` in ${selectedCategory}`}
              {selectedIndustry !== 'all' && ` for ${selectedIndustry}`}
            </h2>
            <div className="text-slate-400">
              Showing {Math.min(filtered.length, 30)} of {filtered.length} services
            </div>
          </div>

          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filtered.slice(0, 30).map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="group bg-slate-900/60 backdrop-blur border border-cyan-400/15 hover:border-cyan-400/40 transition-all duration-300 rounded-2xl p-6 hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-xs uppercase tracking-wide text-cyan-300/70">{service.category}</div>
                  {service.industry && (
                    <div className="text-xs bg-slate-700 px-2 py-1 rounded-full text-slate-300">
                      {service.industry}
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold group-hover:text-cyan-300 transition-colors mb-3 line-clamp-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-300 line-clamp-3 mb-4">{service.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Market Price:</span>
                    <span className="text-cyan-300 font-medium">{service.marketPrice}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">ROI:</span>
                    <span className="text-green-400 font-medium">{service.roi}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Innovation:</span>
                    <span className={`font-medium ${
                      service.innovationLevel === 'Revolutionary' ? 'text-purple-400' :
                      service.innovationLevel === 'Cutting-edge' ? 'text-blue-400' :
                      'text-cyan-400'
                    }`}>
                      {service.innovationLevel}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="text-xs bg-slate-800 px-2 py-1 rounded-full text-slate-300">
                      {tag}
                    </span>
                  ))}
                  {service.tags.length > 3 && (
                    <span className="text-xs bg-slate-800 px-2 py-1 rounded-full text-slate-400">
                      +{service.tags.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-xs text-slate-400">
                    Delivery: {service.estimatedDelivery}
                  </div>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length > 30 && (
            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Load More Services
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Quick Access Links */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Access</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link to="/revolutionary-services-2030" className="block bg-slate-900/60 border border-cyan-400/15 hover:border-cyan-400/40 rounded-2xl p-6 text-left group hover:scale-105 transition-all duration-300">
              <div className="text-xs uppercase tracking-wide text-cyan-300/70">Future Tech</div>
              <div className="mt-2 text-xl font-semibold group-hover:text-cyan-300 transition-colors">Revolutionary Services 2030</div>
              <div className="mt-2 text-sm text-slate-300">Next-generation solutions for the future</div>
            </Link>
            
            <Link to="/revolutionary-services-showcase-2030" className="block bg-slate-900/60 border border-cyan-400/15 hover:border-cyan-400/40 rounded-2xl p-6 text-left group hover:scale-105 transition-all duration-300">
              <div className="text-xs uppercase tracking-wide text-cyan-300/70">Showcase</div>
              <div className="mt-2 text-xl font-semibold group-hover:text-cyan-300 transition-colors">Services Showcase 2030</div>
              <div className="mt-2 text-sm text-slate-300">Interactive demonstrations and case studies</div>
            </Link>
            
            <Link to="/pricing-2030" className="block bg-slate-900/60 border border-cyan-400/15 hover:border-cyan-400/40 rounded-2xl p-6 text-left group hover:scale-105 transition-all duration-300">
              <div className="text-xs uppercase tracking-wide text-cyan-300/70">Pricing</div>
              <div className="mt-2 text-xl font-semibold group-hover:text-cyan-300 transition-colors">Pricing Guide 2030</div>
              <div className="mt-2 text-sm text-slate-300">Comprehensive pricing and ROI analysis</div>
            </Link>
            
            <Link to="/request-quote" className="block bg-slate-900/60 border border-cyan-400/15 hover:border-cyan-400/40 rounded-2xl p-6 text-left group hover:scale-105 transition-all duration-300">
              <div className="text-xs uppercase tracking-wide text-cyan-300/70">Get Started</div>
              <div className="mt-2 text-xl font-semibold group-hover:text-cyan-300 transition-colors">Request Custom Quote</div>
              <div className="mt-2 text-sm text-slate-300">Tailored solutions for your business needs</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Business?</h2>
            <div className="bg-slate-900/60 border border-cyan-400/15 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <div className="font-semibold">Phone</div>
                  <a href="tel:+13024640950" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="text-center">
                  <MessageCircle className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <div className="font-semibold">Email</div>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <div className="font-semibold">Office</div>
                  <div className="text-slate-300">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </div>
                </div>
              </div>
              <div className="text-slate-300 mb-6">
                Visit our website at{' '}
                <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                  ziontechgroup.com
                </a>
                {' '}to explore our complete service portfolio and discover how we can help you achieve your business goals.
              </div>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

