import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  ArrowRight, 
  DollarSign, 
  ExternalLink, 
  Workflow, 
  MessageSquare, 
  Globe, 
  TrendingUp, 
  Sparkles,
  Shield,
  Bot,
  BarChart3,
  Users,
  Cloud,
  Server,
  Database,
  Network,
  Rocket,
  Mail,
  Calendar,
  FileText,
  CreditCard,
  Package,
  Zap,
  Target,
  Award,
  Phone,
  Mail as MailIcon
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { REAL_INNOVATIVE_SERVICES_2025 } from '../data/realInnovativeServices2025';
import { COMPREHENSIVE_MICRO_SAAS_SERVICES_2025 } from '../data/comprehensiveMicroSaasServices2025';

export default function ComprehensiveServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const allServices = [...REAL_INNOVATIVE_SERVICES_2025, ...COMPREHENSIVE_MICRO_SAAS_SERVICES_2025];
  
  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles },
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: Bot },
    { id: 'AI & Security', name: 'AI & Security', icon: Shield },
    { id: 'AI & Marketing', name: 'AI & Marketing', icon: TrendingUp },
    { id: 'AI & Sales', name: 'AI & Sales', icon: Users },
    { id: 'AI & Support', name: 'AI & Support', icon: MessageSquare },
    { id: 'IT & Infrastructure', name: 'IT & Infrastructure', icon: Server },
    { id: 'IT & Support', name: 'IT & Support', icon: Workflow },
    { id: 'IT & Data', name: 'IT & Data', icon: Database },
    { id: 'IT & Networking', name: 'IT & Networking', icon: Network },
    { id: 'IT & Consulting', name: 'IT & Consulting', icon: Rocket },
    { id: 'Micro SaaS & Marketing', name: 'Micro SaaS & Marketing', icon: Globe },
    { id: 'Micro SaaS & Analytics', name: 'Micro SaaS & Analytics', icon: BarChart3 },
    { id: 'Micro SaaS & Productivity', name: 'Micro SaaS & Productivity', icon: Zap },
    { id: 'Micro SaaS & Sales', name: 'Micro SaaS & Sales', icon: Target },
    { id: 'Micro SaaS & Finance', name: 'Micro SaaS & Finance', icon: CreditCard },
    { id: 'Micro SaaS & Operations', name: 'Micro SaaS & Operations', icon: Package }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData ? categoryData.icon : Sparkles;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Services Showcase 2025 - Zion Tech Group"
        description="Discover our comprehensive range of AI-powered services, IT solutions, and micro SAAS tools designed to transform your business operations and drive growth."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue/20 to-zion-cyan/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
              <Sparkles className="w-4 h-4 mr-2" /> 2025 Innovation Showcase
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-blue">
                Showcase 2025
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Discover our comprehensive range of AI-powered services, IT solutions, and micro SAAS tools 
              designed to transform your business operations and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="inline-flex items-center px-6 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2"/> Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="inline-flex items-center px-6 py-3 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan/10 transition-colors"
              >
                <MailIcon className="w-4 h-4 mr-2"/> Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services, features, or benefits..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  />
                </div>
              </div>
              
              {/* Category Filter */}
              <div className="lg:w-80">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id} className="bg-slate-800 text-white">
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => {
              const CategoryIcon = getCategoryIcon(service.category);
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-zion-cyan/20 rounded-lg">
                        <CategoryIcon className="w-5 h-5 text-zion-cyan" />
                      </div>
                      <div>
                        <span className="text-xs text-zion-slate-light bg-white/10 px-2 py-1 rounded-full">
                          {service.category}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-zion-cyan">
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-zion-slate-light">
                        per {service.pricingModel}
                      </div>
                    </div>
                  </div>

                  {/* Service Title & Description */}
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-zion-slate-light">
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-zion-slate-light mt-1">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-zion-slate-light">
                          <Award className="w-3 h-3 text-zion-cyan mr-2" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ROI & Market Info */}
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="bg-white/5 rounded-lg p-2">
                      <div className="text-zion-slate-light">ROI</div>
                      <div className="text-zion-cyan font-semibold">{service.roi}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2">
                      <div className="text-zion-slate-light">Market Price</div>
                      <div className="text-white font-semibold">{service.marketPrice}</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col space-y-2">
                    <a
                      href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                      className="w-full bg-zion-cyan text-white py-2 px-4 rounded-lg text-center hover:bg-zion-cyan/80 transition-colors text-sm font-medium"
                    >
                      Get Started
                    </a>
                    <a
                      href={`tel:${service.contactInfo.phone}`}
                      className="w-full border border-zion-cyan/50 text-zion-cyan py-2 px-4 rounded-lg text-center hover:bg-zion-cyan/10 transition-colors text-sm font-medium"
                    >
                      Call Now
                    </a>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-4 pt-4 border-t border-white/10 text-xs text-zion-slate-light">
                    <div className="flex items-center justify-between">
                      <span>Delivery: {service.estimatedDelivery}</span>
                      <span>Support: {service.supportLevel}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-zion-slate-light text-lg mb-4">
                No services found matching your criteria
              </div>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="text-zion-cyan hover:text-zion-cyan/80 transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Our team of experts is ready to help you implement the perfect solution for your business needs. 
              Get in touch today for a personalized consultation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Phone className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-zion-slate-light mb-3">Speak directly with our experts</p>
                <a href="tel:+13024640950" className="text-zion-cyan hover:text-zion-cyan/80 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <MailIcon className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-zion-slate-light mb-3">Send us a detailed message</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:text-zion-cyan/80 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Globe className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Website</h3>
                <p className="text-zion-slate-light mb-3">Explore more services</p>
                <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-zion-cyan/80 transition-colors">
                  ziontechgroup.com
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-r from-zion-blue/20 to-zion-cyan/20 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Special 2025 Launch Offer
              </h3>
              <p className="text-zion-slate-light mb-6">
                Get 20% off your first 3 months when you sign up for any of our premium services. 
                Limited time offer for early adopters.
              </p>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=2025 Launch Offer - 20% Discount"
                className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors font-semibold text-lg"
              >
                Claim Your Discount
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
