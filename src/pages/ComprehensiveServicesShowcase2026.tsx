import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, Zap, Brain, Shield, Cpu, Network, Phone, Mail, MapPin, ExternalLink, TrendingUp, CheckCircle } from 'lucide-react';
import { SEO } from '../components/SEO';
import { ALL_REVOLUTIONARY_SERVICES_2026 } from '../data/comprehensiveServices2026';const ComprehensiveServicesShowcase2026: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState('all');
  const categories = ['all', ...Array.from(new Set(ALL_REVOLUTIONARY_SERVICES_2026.map(s => s.category)))];
  const innovationLevels = ['all', ...Array.from(new Set(ALL_REVOLUTIONARY_SERVICES_2026.map(s => s.innovationLevel)))];
  const filteredServices = useMemo(() => {
    let filtered = ALL_REVOLUTIONARY_SERVICES_2026;
    if (searchTerm) {
      const lowerQuery = searchTerm.toLowerCase();
      filtered = filtered.filter(service => 
        service.name.toLowerCase().includes(lowerQuery) ||
        service.description.toLowerCase().includes(lowerQuery) ||
        service.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
      );
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and streamline operations for 40-80% time savings"
    },
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description: "Reduce operational costs by 30-60% through intelligent automation and optimization"
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Enterprise-grade security with SOC2 compliance and advanced threat protection"
    },
    {
      icon: Users,
      title: "Improved Collaboration",
      description: "Seamless team collaboration with real-time updates and shared workspaces"
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      description: "Advanced analytics and AI-powered insights for better decision making"
    },
    {
      icon: Zap,
      title: "Scalable Solutions",
      description: "Cloud-native architecture that scales with your business growth"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Basic AI capabilities",
        "Standard support",
        "Core integrations",
        "Basic analytics"
      ],
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Advanced AI features",
        "Priority support",
        "Full integrations",
        "Advanced analytics",
        "Custom workflows"
      ],
      popular: true,
      cta: "Get Started"
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "For large organizations",
      features: [
        "Custom AI models",
        "Dedicated support",
        "API access",
        "White-label solutions",
        "Custom compliance",
        "On-premise options"
      ],
      cta: "Contact Sales"
    }
  ];

  return (
    <React.Fragment>
      <SEO 
        title="Revolutionary Services 2026 - Zion Tech Group"
        description="Discover Zion Tech Group's revolutionary 2026 micro SAAS, IT infrastructure, and AI services. Quantum computing, edge AI, autonomous agents, and more."
        keywords="quantum computing, edge AI, autonomous AI, blockchain, micro SAAS, IT services, AI services, 2026, Zion Tech Group"
      />
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Revolutionary Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                2026
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-4xl mx-auto"
            >
              Experience the future with Zion Tech Group's cutting-edge micro SAAS, IT infrastructure, and AI services. 
              Quantum computing, edge AI, autonomous agents, and blockchain solutions that redefine what's possible.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 text-sm text-zinc-400"
            >
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                {ALL_REVOLUTIONARY_SERVICES_2026.length} Revolutionary Services
              </span>
              <span className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                Up to 1000x Performance Improvement
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                Market Leading Innovation
              </span>
            </motion.div>
          </div>
        </section>
        {/* Search and Filter Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map(category  => (
                    <option key={category} value={category} className="bg-zinc-800 text-white">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
                {/* Innovation Level Filter */}
                <select
                  value={selectedInnovationLevel}
                  onChange={(e) => setSelectedInnovationLevel(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {innovationLevels.map(level  => (
                    <option key={level} value={level} className="bg-zinc-800 text-white">
                      {level === 'all' ? 'All Innovation Levels' : level}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our comprehensive suite of services covers every aspect of modern business technology needs.
            </p>
          </div>
          
          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-8">
                <div className="text-center">
                  <div className="inline-flex items-center space-x-3 mb-4">
                    <div className={`p-3 ${category.bgColor} rounded-lg`}>
                      <category.icon className={`w-8 h-8 ${category.color}`} />
                    </div>
                    <h3 className={`text-3xl font-bold ${category.color}`}>{category.title}</h3>
                  </div>
                  <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="p-6 bg-zion-slate-dark/50 rounded-xl border border-zion-purple/30 hover:border-zion-purple/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="mb-4">
                        <h4 className="text-xl font-semibold text-white mb-2">{service.name}</h4>
                        <p className="text-zion-slate-light text-sm mb-3">{service.description}</p>
                        <div className="text-zion-cyan font-semibold text-lg">{service.price}</div>
                      </div>
                      
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 text-sm text-zion-slate-light">
                            <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Link
                        to={service.href}
                        className="w-full py-3 px-4 bg-zion-cyan/20 text-zion-cyan rounded-lg text-center font-medium hover:bg-zion-cyan hover:text-white transition-all duration-300 inline-block"
                      >
                        Learn More
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Experience the benefits of working with a technology leader committed to your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className={`p-4 ${benefit.icon === TrendingUp ? 'bg-zion-cyan/20' : benefit.icon === DollarSign ? 'bg-zion-green/20' : benefit.icon === Shield ? 'bg-zion-purple/20' : benefit.icon === Users ? 'bg-zion-blue/20' : benefit.icon === BarChart3 ? 'bg-zion-orange/20' : 'bg-zion-cyan/20'} rounded-lg w-fit mx-auto mb-4`}>
                  <benefit.icon className={`w-8 h-8 ${benefit.icon === TrendingUp ? 'text-zion-cyan' : benefit.icon === DollarSign ? 'text-zion-green' : benefit.icon === Shield ? 'text-zion-purple' : benefit.icon === Users ? 'text-zion-blue' : benefit.icon === BarChart3 ? 'text-zion-orange' : 'text-zion-cyan'}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose the plan that fits your business needs and scale as you grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                tier.popular 
                  ? 'border-zion-cyan bg-zion-slate-dark/70 scale-105' 
                  : 'border-zion-purple/30 bg-zion-slate-dark/50 hover:border-zion-purple/50'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-zion-cyan">{tier.price}</span>
                    <span className="text-zion-slate-light ml-1">{tier.period}</span>
                  </div>
                  <p className="text-zion-slate-light mt-2">{tier.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:from-zion-cyan-light hover:to-zion-blue-light'
                      : 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center p-12 bg-gradient-to-r from-zion-purple/20 via-zion-cyan/20 to-zion-purple/20 rounded-2xl border border-zion-purple/30">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto mb-8">
              Join thousands of businesses already using our innovative solutions to drive growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                View Full Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Have questions about our services? Our team is here to help you find the perfect solution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="p-3 bg-zion-cyan/20 rounded-lg w-fit mx-auto mb-4">
                <Phone className="w-6 h-6 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <a href="tel:+13024640950" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
                +1 (302) 464-0950
              </a>
            </div>
            <div className="text-center p-6">
              <div className="p-3 bg-zion-cyan/20 rounded-lg w-fit mx-auto mb-4">
                <Mail className="w-6 h-6 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-center p-6">
              <div className="p-3 bg-zion-cyan/20 rounded-lg w-fit mx-auto mb-4">
                <MapPin className="w-6 h-6 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-zion-slate-light">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  )};
export default ComprehensiveServicesShowcase2026;
