import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, TrendingUp, Zap, Brain, Shield, Cloud, Rocket, Heart, Globe, Cpu, Lock, Users, DollarSign, Clock, Target, Award, CheckCircle, ArrowRight, Phone, Mail, MapPin, ExternalLink, ChevronRight, Sparkles, Flame, Lightning, Sun, Moon, Planet, Galaxy, Universe, Infinity, Alpha, Beta, Gamma, Delta, Epsilon, Zeta, Eta, Theta, Iota, Kappa, Lambda, Mu, Nu, Xi, Omicron, Pi, Rho, Sigma, Tau, Upsilon, Phi, Chi, Psi, Omega } from 'lucide-react';
import SEO from '@/components/SEO';

const ComprehensiveServicesLanding2025: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const serviceCategories = [
    {
      id: 'ai-services',
      title: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence solutions for business transformation',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        'AI Business Intelligence Platform',
        'AI Sales Copilot',
        'AI Compliance Assistant',
        'AI Auto Email Responder',
        'AI Compliance Copilot',
        'LLM Content Studio'
      ],
      href: '/ai-services',
      featured: true
    },
    {
      id: 'quantum-services',
      title: 'Quantum Computing',
      description: 'Next-generation quantum solutions for complex problem solving',
      icon: Zap,
      color: 'from-cyan-500 to-blue-500',
      services: [
        'Quantum AI Hybrid Platform',
        'Quantum Financial Trading',
        'Quantum Internet Security',
        'Quantum Neural Networks',
        'Quantum Edge Computing',
        'Quantum Cloud Infrastructure'
      ],
      href: '/revolutionary-services-2030',
      featured: true
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Advanced security solutions for the digital age',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      services: [
        'AI-Powered Cybersecurity Platform',
        'Zero Trust Architecture',
        'Threat Intelligence',
        'Incident Response',
        'Compliance Automation',
        'Security Analytics'
      ],
      href: '/services',
      featured: true
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and automation solutions',
      icon: Cloud,
      color: 'from-blue-500 to-indigo-500',
      services: [
        'Cloud Infrastructure Management',
        'DevOps Automation',
        'Container Orchestration',
        'Serverless Architecture',
        'Cloud Migration',
        'Performance Optimization'
      ],
      href: '/services/cloud-devops',
      featured: false
    },
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure',
      description: 'Enterprise-grade infrastructure and support services',
      icon: Cpu,
      color: 'from-green-500 to-emerald-500',
      services: [
        'Network Infrastructure',
        'Data Center Management',
        'Onsite IT Support',
        'Green IT Solutions',
        '5G Network Solutions',
        'IoT Edge Computing'
      ],
      href: '/services/it-infrastructure',
      featured: false
    },
    {
      id: 'micro-saas',
      title: 'Micro SaaS Solutions',
      description: 'Productized software solutions for specific business needs',
      icon: Rocket,
      color: 'from-yellow-500 to-orange-500',
      services: [
        'Customer Feedback Surveys',
        'FinOps Advisor',
        'Business Intelligence Tools',
        'Process Automation',
        'Analytics Dashboards',
        'Integration Platforms'
      ],
      href: '/micro-saas',
      featured: true
    },
    {
      id: 'healthcare-tech',
      title: 'Healthcare Technology',
      description: 'AI-powered healthcare solutions and diagnostics',
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      services: [
        'AI Healthcare Diagnostics',
        'Medical Imaging Analysis',
        'Patient Care Optimization',
        'Telemedicine Platforms',
        'Clinical Decision Support',
        'Healthcare Analytics'
      ],
      href: '/revolutionary-services-2030',
      featured: false
    },
    {
      id: 'smart-cities',
      title: 'Smart Cities & IoT',
      description: 'Sustainable urban infrastructure and IoT solutions',
      icon: Globe,
      color: 'from-teal-500 to-cyan-500',
      services: [
        'Sustainable Smart City Platform',
        'IoT Infrastructure Management',
        'Energy Grid Optimization',
        'Traffic Management',
        'Environmental Monitoring',
        'Public Safety Systems'
      ],
      href: '/revolutionary-services-2030',
      featured: false
    },
    {
      id: 'education-tech',
      title: 'Education Technology',
      description: 'AI-powered learning and educational platforms',
      icon: Users,
      color: 'from-indigo-500 to-purple-500',
      services: [
        'AI Education Platform',
        'Personalized Learning',
        'Intelligent Tutoring',
        'Student Analytics',
        'Content Management',
        'Assessment Tools'
      ],
      href: '/revolutionary-services-2030',
      featured: false
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing & Industry 4.0',
      description: 'Smart manufacturing and industrial automation',
      icon: Cpu,
      color: 'from-slate-500 to-gray-500',
      services: [
        'AI Manufacturing Platform',
        'Predictive Maintenance',
        'Quality Control Automation',
        'Supply Chain Optimization',
        'Industrial IoT',
        'Smart Factory Solutions'
      ],
      href: '/revolutionary-services-2030',
      featured: false
    }
  ];

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return serviceCategories;
    
    const query = searchQuery.toLowerCase();
    return serviceCategories.filter(category =>
      category.title.toLowerCase().includes(query) ||
      category.description.toLowerCase().includes(query) ||
      category.services.some(service => service.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  const featuredCategories = serviceCategories.filter(cat => cat.featured);
  const regularCategories = serviceCategories.filter(cat => !cat.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="Comprehensive Services - Zion Tech Group" 
        description="Explore our complete portfolio of AI, quantum computing, cybersecurity, cloud, and innovative technology services designed to transform your business."
        canonical="/comprehensive-services"
      />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
              Comprehensive
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Technology Services
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              From AI and quantum computing to cybersecurity and cloud solutions, discover our complete portfolio 
              of innovative services designed to accelerate your digital transformation and drive unprecedented growth.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search services, technologies, or solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-lg"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>10 Service Categories</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span>50+ Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Global Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Service Categories</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Our most popular and innovative service categories that are transforming industries worldwide
            </p>
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {featuredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-slate-900/60 backdrop-blur border border-cyan-400/15 hover:border-cyan-400/40 transition-all duration-300 rounded-2xl p-6 hover:shadow-2xl hover:shadow-cyan-400/10 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-300 transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm mb-4 line-clamp-2">
                    {category.description}
                  </p>

                  {/* Services Preview */}
                  <div className="space-y-2 mb-6">
                    {category.services.slice(0, 3).map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                        <span className="line-clamp-1">{service}</span>
                      </div>
                    ))}
                    {category.services.length > 3 && (
                      <div className="text-xs text-slate-400">
                        +{category.services.length - 3} more services
                      </div>
                    )}
                  </div>

                  <Link
                    to={category.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 duration-300"
                  >
                    Explore {category.title}
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Categories */}
      <section className="py-16 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Complete Service Portfolio</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Browse our comprehensive range of technology services across all categories
            </p>
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group bg-slate-800/40 backdrop-blur border border-slate-700/30 hover:border-cyan-400/30 transition-all duration-300 rounded-xl p-5 hover:shadow-lg hover:shadow-cyan-400/5"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold mb-2 group-hover:text-cyan-300 transition-colors">
                      {category.title}
                    </h3>
                    
                    <p className="text-slate-300 text-sm mb-3 line-clamp-2">
                      {category.description}
                    </p>

                    <Link
                      to={category.href}
                      className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn More
                      <ChevronRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No services found</h3>
              <p className="text-slate-400">Try adjusting your search criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value
            </p>
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation First</h3>
              <p className="text-slate-300">
                We stay ahead of the curve with the latest AI, quantum computing, and emerging technologies
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Results Driven</h3>
              <p className="text-slate-300">
                Every solution is designed to deliver measurable business outcomes and ROI
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
              <p className="text-slate-300">
                Our specialists bring decades of experience in technology and business transformation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our comprehensive technology services can transform your business 
            and accelerate your digital transformation journey.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <a 
                href="tel:+13024640950" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                +1 302 464 0950
              </a>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </a>
            <a 
              href="/revolutionary-services-2030" 
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Explore Revolutionary Services
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                {serviceCategories.length}
              </div>
              <div className="text-lg font-semibold mb-2">Service Categories</div>
              <div className="text-sm text-gray-400">Comprehensive coverage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                50+
              </div>
              <div className="text-lg font-semibold mb-2">Solutions</div>
              <div className="text-sm text-gray-400">Innovative offerings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                24/7
              </div>
              <div className="text-lg font-semibold mb-2">Support</div>
              <div className="text-sm text-gray-400">Global availability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                99.9%
              </div>
              <div className="text-lg font-semibold mb-2">Uptime</div>
              <div className="text-sm text-gray-400">Reliable service</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesLanding2025;