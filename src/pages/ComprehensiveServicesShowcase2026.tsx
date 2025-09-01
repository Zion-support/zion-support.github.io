import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Brain, Cloud, Shield, Cpu, Globe, ArrowRight, CheckCircle, Star, Target, Lightbulb, Database, Zap, Users, Heart, PenTool } from 'lucide-react';

export default function ComprehensiveServicesShowcase2026() {
  const featuredServices = [
    {
      icon: Brain,
      title: "AI Business Intelligence",
      href: "/services/ai-business-intelligence",
      description: "Transform data into actionable insights with AI-powered analytics",
      color: "from-purple-500 to-cyan-500",
      featured: true
    },
    {
      icon: Heart,
      title: "AI Healthcare Platform",
      href: "/services/ai-healthcare-platform",
      description: "Revolutionize healthcare with AI-powered diagnostics and patient care",
      color: "from-red-500 to-pink-500",
      featured: true
    },
    {
      icon: PenTool,
      title: "AI Content Creation",
      href: "/services/ai-content-creation",
      description: "Generate high-quality content at scale with intelligent automation",
      color: "from-blue-500 to-indigo-500",
      featured: true
    },
    {
      icon: Shield,
      title: "AI Cybersecurity",
      href: "/services/ai-cybersecurity",
      description: "Protect your organization with next-generation AI security",
      color: "from-green-500 to-emerald-500",
      featured: true
    },
    {
      icon: Cpu,
      title: "IoT Edge Computing",
      href: "/services/iot-edge-computing",
      description: "Process data locally with real-time edge computing capabilities",
      color: "from-blue-500 to-cyan-500",
      featured: true
    },
    {
      icon: Cloud,
      title: "Cloud DevOps",
      href: "/services/cloud-devops",
      description: "Accelerate development with automated cloud infrastructure",
      color: "from-blue-500 to-indigo-500",
      featured: true
    }
  ];

  const allServices = [
    {
      category: "AI & Machine Learning",
      services: [
        { name: "AI Business Intelligence", href: "/services/ai-business-intelligence" },
        { name: "AI Healthcare Platform", href: "/services/ai-healthcare-platform" },
        { name: "AI Content Creation", href: "/services/ai-content-creation" },
        { name: "AI Cybersecurity", href: "/services/ai-cybersecurity" },
        { name: "AI Project Management", href: "/services/ai-project-management-platform" },
        { name: "AI HR Platform", href: "/services/ai-hr-platform" },
        { name: "AI Legal Research", href: "/services/ai-legal-research-platform" },
        { name: "AI Education Platform", href: "/services/ai-education-platform" },
        { name: "AI Marketing Automation", href: "/services/ai-marketing-automation" },
        { name: "AI Customer Success", href: "/services/ai-customer-success-platform" },
        { name: "AI Supply Chain", href: "/services/ai-supply-chain-optimization" },
        { name: "AI Financial Trading", href: "/services/ai-financial-trading-platform" }
      ]
    },
    {
      category: "Infrastructure & Cloud",
      services: [
        { name: "Cloud DevOps", href: "/services/cloud-devops" },
        { name: "IoT Edge Computing", href: "/services/iot-edge-computing" },
        { name: "Digital Twin Platform", href: "/services/digital-twin" },
        { name: "Quantum Computing", href: "/services/quantum-computing" },
        { name: "Space Technology", href: "/services/space-tech" },
        { name: "Sustainability Solutions", href: "/services/sustainability" },
        { name: "Zero Trust Architecture", href: "/services/zero-trust-network-architecture" }
      ]
    },
    {
      category: "Micro SaaS Solutions",
      services: [
        { name: "Micro SaaS Platform", href: "/services/micro-saas" },
        { name: "Micro SaaS Solutions", href: "/services/micro-saas-solutions" },
        { name: "AI Content Marketing", href: "/services/ai-content-marketing-automation" }
      ]
    }
  ];

  const benefits = [
    "Access to cutting-edge AI technologies",
    "Scalable solutions for any business size",
    "Expert consultation and implementation",
    "Ongoing support and optimization",
    "Competitive pricing and ROI focus",
    "Industry-specific customization"
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'budget', label: 'Under $500' },
    { value: 'mid', label: '$500 - $2,000' },
    { value: 'premium', label: '$2,000+' }
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'roi', label: 'Highest ROI' },
    { value: 'implementation', label: 'Fastest Implementation' }
  ];

  const featuredServices = innovativeServices2026.filter(service => service.featured).slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
              <Rocket className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300 text-sm font-medium">2026 Services Showcase</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Comprehensive Services
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Showcase 2026
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our complete portfolio of cutting-edge technology services. From AI-powered solutions 
              to infrastructure optimization, we provide comprehensive services to transform your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>

            {/* Advanced Filters */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 pt-6 border-t border-slate-700/50"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Category Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      <option value="all">All Categories</option>
                      {Array.from(new Set(innovativeServices2026.map(s => s.category))).map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  {/* Price Range Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                    <select
                      value={selectedPriceRange}
                      onChange={(e) => setSelectedPriceRange(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      {priceRanges.map(range => (
                        <option key={range.value} value={range.value}>{range.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Sort By */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      {sortOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Featured Services 2026
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our most popular and innovative services that are transforming businesses worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className="group p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-cyan-500/50 transition-all duration-300 hover:bg-slate-800/80 hover:scale-105"
              >
                <div className={`p-3 bg-gradient-to-br ${service.color} rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                {service.featured && (
                  <span className="inline-flex items-center gap-1 text-xs text-cyan-400">
                    <Star className="w-3 h-3" />
                    Featured Service
                  </span>
                )}
              </Link>
            ))}
          </div>
        </section>
        {/* Contact CTA Section */}
        <section className="py - 16">;
          <div role="button" className="container mx - auto px - 4 text - center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg - gradient - to - r from - blue - 600 / 20 via - purple - 600 / 20 to - cyan - 600 / 20 rounded - 3xl p - 12 border border - white / 10"

      {/* All Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our comprehensive range of technology services across all categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {allServices.map((category, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-6 text-center">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <Link
                      key={serviceIndex}
                      to={service.href}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors py-2 border-b border-slate-700/50 last:border-b-0"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We deliver comprehensive technology solutions that drive measurable business results 
                and provide competitive advantages in today's digital landscape.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-500/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                    <div className="text-sm text-gray-300">Services Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                    <div className="text-sm text-gray-300">Support Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                    <div className="text-sm text-gray-300">Uptime Guarantee</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">Global</div>
                    <div className="text-sm text-gray-300">Service Coverage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/50 via-blue-900/50 to-purple-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore our comprehensive services and discover how we can help you achieve your technology goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Your Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-300"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}