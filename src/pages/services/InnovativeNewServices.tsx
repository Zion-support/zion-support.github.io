import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { 
  Rocket, 
  Brain, 
  Shield, 
  Heart, 
  Leaf, 
  Scale, 
  Lightbulb, 
  Zap, 
  TrendingUp, 
  Users, 
  Globe,
  Cpu,
  BarChart3,
  Target,
  Award,
  Clock,
  Truck,
  DollarSign,
  Atom,
  Search,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../../data/innovativeMicroSaasServices';
import { EMERGING_TECH_SERVICES } from '../../data/emergingTechServices';
import { SPECIALIZED_IT_INFRASTRUCTURE_SERVICES } from '../../data/specializedITInfrastructureServices';

export default function InnovativeNewServices() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const allServices = [
    ...INNOVATIVE_MICRO_SAAS_SERVICES,
    ...EMERGING_TECH_SERVICES,
    ...SPECIALIZED_IT_INFRASTRUCTURE_SERVICES
  ];

  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const serviceCategories = [
    { name: "AI & Creative Services", icon: Brain, color: "from-purple-500 to-pink-500" },
    { name: "Cybersecurity", icon: Shield, color: "from-red-500 to-orange-500" },
    { name: "Legal Tech", icon: Scale, color: "from-blue-500 to-indigo-500" },
    { name: "Sustainability", icon: Leaf, color: "from-green-500 to-emerald-500" },
    { name: "Healthcare", icon: Heart, color: "from-pink-500 to-rose-500" },
    { name: "Edge Computing", icon: Cpu, color: "from-cyan-500 to-blue-500" },
    { name: "FinTech", icon: DollarSign, color: "from-yellow-500 to-orange-500" },
    { name: "Quantum Computing", icon: Atom, color: "from-violet-500 to-purple-500" },
    { name: "Supply Chain", icon: Truck, color: "from-gray-500 to-slate-500" },
    { name: "Metaverse", icon: Globe, color: "from-indigo-500 to-purple-500" }
  ];

  const getCategoryIcon = (category: string) => {
    const cat = serviceCategories.find(c => category.includes(c.name.split(' ')[0]));
    return cat ? cat.icon : Rocket;
  };

  const getCategoryColor = (category: string) => {
    const cat = serviceCategories.find(c => category.includes(c.name.split(' ')[0]));
    return cat ? cat.color : "from-blue-500 to-purple-500";
  };

  return (
    <>
      <SEO 
        title="Innovative New Services - Zion Tech Group"
        description="Discover cutting-edge AI, quantum computing, and emerging technology services that transform businesses and drive innovation."
        keywords="AI services, quantum computing, emerging technology, innovation, digital transformation"
        canonical="https://ziontechgroup.com/services/innovative-new-services"
      />
      
      <div className="min-h-screen bg-zion-blue-dark text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-quantum-gradient opacity-20 animate-pulse"></div>
        <div className="absolute inset-0 bg-quantum-mesh"></div>
        
        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-zion-cyan text-xs animate-matrix-rain"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>

        {/* Header Section */}
        <section className="relative z-10 py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Innovative New Services
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-zion-cyan/80 mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Cutting-edge AI, quantum computing, and emerging technology services that transform businesses and drive innovation
            </motion.p>
            
            {/* Search and Filter Controls */}
            <motion.div 
              className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-80 px-4 py-3 pl-12 bg-white/10 backdrop-blur-sm border border-zion-cyan/30 rounded-lg text-white placeholder-zion-cyan/50 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-zion-cyan/50" />
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category} className="bg-zion-blue-dark text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative z-10 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="group relative bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:bg-white/10 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
                >
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                      {service.category}
                    </span>
                  </div>
                  
                  {/* Service Icon */}
                  <div className="mb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                      {React.createElement(getCategoryIcon(service.category), { size: 24 })}
                    </div>
                  </div>
                  
                  {/* Service Content */}
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zion-cyan/80 mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <Link
                    to={service.href}
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-medium rounded-lg hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 group-hover:shadow-lg group-hover:shadow-zion-cyan/30"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            
            {filteredServices.length === 0 && (
              <motion.div 
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="text-zion-cyan/60 text-lg">
                  No services found matching your criteria.
                </div>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="mt-4 px-6 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-light transition-colors"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section className="relative z-10 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Why Choose Our Innovative Services?
              </h2>
              <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
                Cutting-edge technology, rapid deployment, and measurable business outcomes
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div 
                variants={itemVariants}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-zion-purple to-zion-pink rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Enterprise Security</h3>
                <p className="text-zion-cyan/80">
                  Built with enterprise-grade security and compliance standards
                </p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-zion-green to-zion-teal rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Rapid Implementation</h3>
                <p className="text-zion-cyan/80">
                  Measurable business outcomes with rapid implementation and quick time-to-value
                </p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Expert Support</h3>
                <p className="text-zion-cyan/80">
                  24/7 expert support and continuous innovation updates
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div 
              className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 backdrop-blur-sm rounded-2xl p-12 border border-zion-cyan/30"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zion-cyan/80 mb-8 max-w-3xl mx-auto">
                Let's discuss how our innovative services can drive your digital transformation and competitive advantage
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-bold rounded-lg hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/30"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-zion-cyan/30 text-white font-bold rounded-lg hover:bg-white/20 hover:border-zion-cyan/50 transition-all duration-300"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
