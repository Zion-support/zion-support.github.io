import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ArrowRight, 
  DollarSign, 
  ExternalLink, 
  Workflow, 
  MessageSquare, 
  Globe,
  Shield,
  Brain,
  Database,
  Cloud,
  Zap,
  Target,
  TrendingUp,
  Users,
  Rocket,
  Lock,
  Cpu,
  Network,
  BarChart3,
  FileText,
  Palette,
  Globe2,
  Smartphone,
  Building2,
  Car,
  Leaf,
  Microscope,
  Satellite,
  Atom,
  Network,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

const InnovativeServicesShowcase2025: React.FC = () => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const services = INNOVATIVE_MICRO_SAAS_SERVICES_2025;

  // Enhanced category mapping with icons and descriptions
  const categories = [
    { 
      id: 'All', 
      name: 'All Services', 
      icon: Workflow, 
      description: 'Complete portfolio of innovative solutions',
      count: services.length
    },
    { 
      id: 'AI & Analytics', 
      name: 'AI & Analytics', 
      icon: Brain, 
      description: 'Intelligent data analysis and business insights',
      count: services.filter(s => s.category === 'AI & Analytics').length
    },
    { 
      id: 'AI & Content Creation', 
      name: 'AI Content Creation', 
      icon: FileText, 
      description: 'Automated content generation and marketing',
      count: services.filter(s => s.category === 'AI & Content Creation').length
    },
    { 
      id: 'AI & Customer Service', 
      name: 'AI Customer Service', 
      icon: MessageSquare, 
      description: 'Intelligent customer support automation',
      count: services.filter(s => s.category === 'AI & Customer Service').length
    },
    { 
      id: 'Healthcare AI', 
      name: 'Healthcare AI', 
      icon: Microscope, 
      description: 'Medical diagnostics and healthcare solutions',
      count: services.filter(s => s.category === 'Healthcare AI').length
    },
    { 
      id: 'FinTech', 
      name: 'Financial Technology', 
      icon: DollarSign, 
      description: 'AI-powered financial planning and analysis',
      count: services.filter(s => s.category === 'FinTech').length
    },
    { 
      id: 'Legal Technology', 
      name: 'Legal Technology', 
      icon: Shield, 
      description: 'AI-powered legal document analysis',
      count: services.filter(s => s.category === 'Legal Technology').length
    },
    { 
      id: 'Quantum Security', 
      name: 'Quantum Security', 
      icon: Lock, 
      description: 'Future-proof cybersecurity solutions',
      count: services.filter(s => s.category === 'Quantum Security').length
    },
    { 
      id: 'Quantum AI', 
      name: 'Quantum AI', 
      icon: Atom, 
      description: 'Quantum computing and machine learning',
      count: services.filter(s => s.category === 'Quantum AI').length
    },
    { 
      id: 'Blockchain', 
      name: 'Blockchain Solutions', 
      icon: Blockchain, 
      description: 'Distributed ledger and supply chain tracking',
      count: services.filter(s => s.category === 'Blockchain').length
    },
    { 
      id: 'IoT & Smart Cities', 
      name: 'IoT & Smart Cities', 
      icon: Building2, 
      description: 'Smart city infrastructure and management',
      count: services.filter(s => s.category === 'IoT & Smart Cities').length
    },
    { 
      id: 'Space Technology', 
      name: 'Space Technology', 
      icon: Satellite, 
      description: 'Satellite operations and space analytics',
      count: services.filter(s => s.category === 'Space Technology').length
    }
  ];

  const filtered = useMemo(() => {
    let filteredServices = services;
    
    if (selectedCategory !== 'All') {
      filteredServices = services.filter(s => s.category === selectedCategory);
    }
    
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      filteredServices = filteredServices.filter(s =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        s.tags?.some(t => t.toLowerCase().includes(q))
      );
    }
    
    return filteredServices;
  }, [query, selectedCategory, services]);

  const featuredServices = services.filter(s => 
    ['ai-powered-legal-document-reviewer', 'quantum-cybersecurity-suite', 'ai-healthcare-diagnostic-assistant', 'blockchain-supply-chain-tracker'].includes(s.id)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="Innovative Services Showcase 2025 - Zion Tech Group" 
        description="Discover cutting-edge AI, Quantum, Blockchain, and IoT solutions. Transform your business with our comprehensive technology services portfolio."
        canonical="/innovative-services-showcase-2025"
        url="https://ziontechgroup.com/innovative-services-showcase-2025"
      />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Innovative Services Showcase 2025
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto mb-8">
              Pioneering the future with cutting-edge AI, Quantum Computing, Blockchain, and IoT solutions. 
              Transform your business with Zion Tech Group's comprehensive technology ecosystem.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-slate-800/50 backdrop-blur border border-cyan-400/20 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-cyan-400">{services.length}+</div>
                <div className="text-sm text-slate-300">Innovative Services</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur border border-blue-400/20 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-blue-400">15+</div>
                <div className="text-sm text-slate-300">Technology Categories</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur border border-purple-400/20 rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-purple-400">99.9%</div>
                <div className="text-sm text-slate-300">Uptime Guarantee</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-white">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span className="font-semibold">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
            <Link 
              to="https://ziontechgroup.com" 
              target="_blank" 
              className="bg-white text-cyan-600 px-4 py-2 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Visit Website
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Revolutionary Services</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Experience the future of technology with our most innovative and high-impact solutions
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="bg-slate-900/60 backdrop-blur border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 rounded-2xl p-8 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-sm uppercase tracking-wide text-cyan-300/70">{service.category}</div>
                  <div className="text-2xl font-bold text-green-400">${service.price}</div>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-300 mb-6 line-clamp-3">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span>ROI: {service.roi}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span>Innovation: {service.innovationLevel}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Target className="w-4 h-4 text-blue-400" />
                    <span>Market: {service.marketPrice}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags?.slice(0, 4).map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-slate-800/50 text-slate-300 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link 
                  to={`/services/${service.id.replace(/-/g, '-')}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-1 transition-transform"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Explore by Category</h2>
            <p className="text-lg text-slate-300">
              Discover solutions tailored to your specific technology needs
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-6 rounded-xl border transition-all duration-300 text-left ${
                  selectedCategory === category.id
                    ? 'border-cyan-400 bg-cyan-400/10'
                    : 'border-slate-700 hover:border-cyan-400/50 hover:bg-slate-800/50'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <category.icon className={`w-6 h-6 ${
                    selectedCategory === category.id ? 'text-cyan-400' : 'text-slate-400'
                  }`} />
                  <span className="font-semibold">{category.name}</span>
                </div>
                <p className="text-sm text-slate-400 mb-3">{category.description}</p>
                <div className="text-xs text-slate-500">{category.count} services</div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto mb-12 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services, e.g. AI, quantum, blockchain, IoT..."
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.slice(0, 30).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group bg-slate-900/60 backdrop-blur border border-cyan-400/15 hover:border-cyan-400/40 transition-all duration-300 rounded-2xl p-6"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="text-xs uppercase tracking-wide text-cyan-300/70">{service.category}</div>
                  <div className="text-lg font-bold text-green-400">${service.price}</div>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-300 mb-4 line-clamp-3">{service.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <TrendingUp className="w-3 h-3 text-green-400" />
                    <span>ROI: {service.roi}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Target className="w-3 h-3 text-blue-400" />
                    <span>Market: {service.marketPrice}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {service.tags?.slice(0, 3).map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-slate-800/50 text-slate-300 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link 
                  to={`/services/${service.id.replace(/-/g, '-')}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium group-hover:translate-x-1 transition-transform"
                >
                  Learn More <ArrowRight className="ml-1 w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length > 30 && (
            <div className="text-center mt-12">
              <p className="text-slate-400 mb-4">
                Showing 30 of {filtered.length} services. Use search to find more specific solutions.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-8">
              Join hundreds of forward-thinking companies already leveraging our innovative technology solutions. 
              Get started today with a personalized consultation and implementation plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link 
                to="/request-quote" 
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Request Custom Quote
              </Link>
            </div>
            <div className="mt-8 text-sm text-slate-400">
              <p>Questions? Call <a className="text-cyan-300 hover:text-cyan-200" href="tel:+13024640950">+1 302 464 0950</a></p>
              <p>Email: <a className="text-cyan-300 hover:text-cyan-200" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></p>
              <p>Visit: <a className="text-cyan-300 hover:text-cyan-200" href="https://ziontechgroup.com" target="_blank" rel="noreferrer">ziontechgroup.com</a></p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2025;