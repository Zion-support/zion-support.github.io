import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  ArrowRight, 
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
  Phone,
  Zap,
  Target,
  Award,
  Brain,
  Cpu,
  Lock,
  Eye,
  ShieldCheck,
  Activity,
  BarChart,
  PieChart,
  LineChart,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Clock,
  Star,
  DollarSign,
  Percent
} from 'lucide-react';
import SEO from '../components/SEO';
import { INNOVATIVE_SERVICES_2025, InnovativeService2025 } from '../data/innovativeServices2025';

export default function InnovativeServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles, color: 'from-purple-500 to-pink-500' },
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: Brain, color: 'from-blue-500 to-cyan-500' },
    { id: 'AI & Security', name: 'AI & Security', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'AI & Marketing', name: 'AI & Marketing', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
    { id: 'AI & Sales', name: 'AI & Sales', icon: Users, color: 'from-indigo-500 to-purple-500' },
    { id: 'AI & Support', name: 'AI & Support', icon: MessageSquare, color: 'from-teal-500 to-blue-500' },
    { id: 'IT & Infrastructure', name: 'IT & Infrastructure', icon: Server, color: 'from-gray-500 to-slate-500' },
    { id: 'IT & Support', name: 'IT & Support', icon: Workflow, color: 'from-yellow-500 to-orange-500' },
    { id: 'IT & Data', name: 'IT & Data', icon: Database, color: 'from-cyan-500 to-blue-500' },
    { id: 'IT & Networking', name: 'IT & Networking', icon: Network, color: 'from-violet-500 to-purple-500' },
    { id: 'IT & Consulting', name: 'IT & Consulting', icon: Rocket, color: 'from-pink-500 to-rose-500' }
  ];

  const filteredServices = REAL_INNOVATIVE_SERVICES_2025.filter(service => {
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

  const getCategoryColor = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData ? categoryData.color : 'from-purple-500 to-pink-500';
  };

  const getInnovationBadge = (level: string) => {
    switch (level.toLowerCase()) {
      case 'advanced':
        return { text: 'Advanced AI', color: 'bg-gradient-to-r from-purple-500 to-pink-500', icon: Brain };
      case 'professional':
        return { text: 'Professional', color: 'bg-gradient-to-r from-blue-500 to-cyan-500', icon: Shield };
      case 'strategic':
        return { text: 'Strategic', color: 'bg-gradient-to-r from-green-500 to-emerald-500', icon: Rocket };
      default:
        return { text: 'Innovative', color: 'bg-gradient-to-r from-orange-500 to-red-500', icon: Sparkles };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Innovative Services Showcase 2025 - Zion Tech Group"
        description="Explore our cutting-edge AI-powered services, advanced cybersecurity solutions, and innovative technology services designed to revolutionize your business operations."
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-6">
              <Sparkles className="w-4 h-4 mr-2" /> 2025 Innovation Showcase
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovative Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">
                Showcase 2025
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Discover our cutting-edge AI-powered services, advanced cybersecurity solutions, and innovative 
              technology services designed to revolutionize your business operations and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-4 h-4 mr-2"/> Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="inline-flex items-center px-6 py-3 border border-purple-500/50 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                <Mail className="w-4 h-4 mr-2"/> Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Brain, label: 'AI-Powered Services', value: '25+', color: 'from-blue-500 to-cyan-500' },
              { icon: Shield, label: 'Security Solutions', value: '99.9%', color: 'from-red-500 to-orange-500' },
              { icon: TrendingUp, label: 'ROI Improvement', value: '300%+', color: 'from-green-500 to-emerald-500' },
              { icon: Users, label: 'Happy Clients', value: '500+', color: 'from-purple-500 to-pink-500' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-zion-slate-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>
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
                    placeholder="Search innovative services, features, or benefits..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              {/* Category Filter */}
              <div className="lg:w-80">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
              const categoryColor = getCategoryColor(service.category);
              const innovationBadge = getInnovationBadge(service.innovationLevel);
              const BadgeIcon = innovationBadge.icon;
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  {/* Innovation Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white ${innovationBadge.color}`}>
                      <BadgeIcon className="w-3 h-3 mr-1" />
                      {innovationBadge.text}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-zion-slate-light">
                        per {service.pricingModel}
                      </div>
                    </div>
                  </div>

                  {/* Service Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${categoryColor}`}>
                      <CategoryIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-xs text-zion-slate-light bg-white/10 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  {/* Service Title & Description */}
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2 flex items-center">
                      <Zap className="w-4 h-4 text-purple-400 mr-2" />
                      Key Features:
                    </h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-zion-slate-light">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-purple-400 mt-1">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2 flex items-center">
                      <Award className="w-4 h-4 text-green-400 mr-2" />
                      Benefits:
                    </h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ROI & Market Info */}
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-2 border border-green-500/30">
                      <div className="text-zion-slate-light flex items-center">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        ROI
                      </div>
                      <div className="text-green-400 font-semibold">{service.roi}</div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg p-2 border border-blue-500/30">
                      <div className="text-zion-slate-light flex items-center">
                        <DollarSign className="w-3 h-3 mr-1" />
                        Market Price
                      </div>
                      <div className="text-blue-400 font-semibold">{service.marketPrice}</div>
                    </div>
                  </div>

                  {/* Technical Specs */}
                  {service.technicalSpecs && (
                    <div className="mb-4 p-3 bg-white/5 rounded-lg border border-white/10">
                      <h4 className="text-sm font-semibold text-white mb-2 flex items-center">
                        <Cpu className="w-4 h-4 text-cyan-400 mr-2" />
                        Tech Specs:
                      </h4>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="text-zion-slate-light">Uptime:</span>
                          <span className="text-cyan-400 ml-1">{service.technicalSpecs.uptime}</span>
                        </div>
                        <div>
                          <span className="text-zion-slate-light">APIs:</span>
                          <span className="text-cyan-400 ml-1">{service.technicalSpecs.apiEndpoints}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-col space-y-2">
                    <a
                      href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg text-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl"
                    >
                      Get Started
                    </a>
                    <a
                      href={`tel:${service.contactInfo.phone}`}
                      className="w-full border border-purple-500/50 text-purple-400 py-2 px-4 rounded-lg text-center hover:bg-purple-500/10 transition-all duration-300 text-sm font-medium"
                    >
                      Call Now
                    </a>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-4 pt-4 border-t border-white/10 text-xs text-zion-slate-light">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {service.estimatedDelivery}
                      </span>
                      <span className="flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        {service.supportLevel}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-zion-slate-light text-lg mb-4">
                No innovative services found matching your criteria
              </div>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="text-purple-400 hover:text-purple-300 transition-colors"
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
              Ready to Innovate Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Our team of AI experts and technology specialists is ready to help you implement 
              cutting-edge solutions that will transform your business operations and drive unprecedented growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Phone className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-zion-slate-light mb-3">Speak directly with our AI experts</p>
                <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-zion-slate-light mb-3">Send us a detailed message</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Globe className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Website</h3>
                <p className="text-zion-slate-light mb-3">Explore more services</p>
                <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">
                  ziontechgroup.com
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                Special 2025 Innovation Offer
              </h3>
              <p className="text-zion-slate-light mb-6">
                Get 25% off your first 3 months when you sign up for any of our innovative AI services. 
                Limited time offer for early adopters and innovators.
              </p>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=2025 Innovation Offer - 25% Discount"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                Claim Your Innovation Discount
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}