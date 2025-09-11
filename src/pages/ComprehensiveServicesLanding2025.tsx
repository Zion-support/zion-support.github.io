import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Zap, 
  Shield, 
  Brain, 
  Globe, 
  Cpu, 
  Lock,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Clock,
  Users,
  Target,
  Award,
  Sparkles,
  Rocket,
  BarChart3,
  MessageSquare,
  Mail,
  Database,
  Network,
  Cloud,
  Smartphone,
  Palette,
  Leaf,
  Code,
  Wallet,
  Box,
  Phone,
  Mail as MailIcon,
  MapPin,
  Globe as GlobeIcon,
  ExternalLink
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { INNOVATIVE_SERVICES_2025 } from '../data/innovativeServices2025';

const ComprehensiveServicesLanding2025: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Automation':
        return <Brain className="w-8 h-8" />;
      case 'AI & Security':
        return <Shield className="w-8 h-8" />;
      case 'AI & Marketing':
        return <BarChart3 className="w-8 h-8" />;
      case 'AI & Sales':
        return <TrendingUp className="w-8 h-8" />;
      case 'AI & Customer Experience':
        return <MessageSquare className="w-8 h-8" />;
      case 'AI & Analytics':
        return <Database className="w-8 h-8" />;
      case 'Quantum Computing':
        return <Box className="w-8 h-8" />;
      case 'IoT & Edge Computing':
        return <Network className="w-8 h-8" />;
      case 'Blockchain & Web3':
        return <Wallet className="w-8 h-8" />;
      case 'Sustainability & Technology':
        return <Leaf className="w-8 h-8" />;
      default:
        return <Sparkles className="w-8 h-8" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Automation':
        return 'from-purple-500 to-pink-500';
      case 'AI & Security':
        return 'from-red-500 to-orange-500';
      case 'AI & Marketing':
        return 'from-blue-500 to-cyan-500';
      case 'AI & Sales':
        return 'from-green-500 to-emerald-500';
      case 'AI & Customer Experience':
        return 'from-indigo-500 to-purple-500';
      case 'AI & Analytics':
        return 'from-cyan-500 to-blue-500';
      case 'Quantum Computing':
        return 'from-violet-500 to-purple-500';
      case 'IoT & Edge Computing':
        return 'from-orange-500 to-red-500';
      case 'Blockchain & Web3':
        return 'from-yellow-500 to-orange-500';
      case 'Sustainability & Technology':
        return 'from-green-500 to-teal-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  const categories = Array.from(new Set(INNOVATIVE_SERVICES_2025.map(service => service.category)));
  const servicesByCategory = categories.map(category => ({
    category,
    services: INNOVATIVE_SERVICES_2025.filter(service => service.category === category),
    icon: getCategoryIcon(category),
    color: getCategoryColor(category)
  }));

  const totalServices = INNOVATIVE_SERVICES_2025.length;
  const totalValue = INNOVATIVE_SERVICES_2025.reduce((sum, service) => sum + service.price, 0);
  const avgROI = INNOVATIVE_SERVICES_2025.reduce((sum, service) => {
    const roi = parseInt(service.roi.replace('%', ''));
    return sum + roi;
  }, 0) / totalServices;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Services Landing 2025 - Zion Tech Group"
        description="Discover our complete portfolio of innovative technology services. From AI and Quantum Computing to IoT and Blockchain solutions - transform your business with cutting-edge technology."
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30 mb-6">
              <Sparkles className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-300 font-medium">Comprehensive Services 2025</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Complete Technology
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400">
                Solutions Portfolio
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Explore our comprehensive suite of innovative technology services designed to transform 
              your business operations and drive digital innovation across all industries.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <div className="text-3xl font-bold text-blue-400 mb-2">{totalServices}</div>
                <div className="text-gray-300">Innovative Services</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <div className="text-3xl font-bold text-purple-400 mb-2">${(totalValue / 1000).toFixed(0)}K+</div>
                <div className="text-gray-300">Monthly Value</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <div className="text-3xl font-bold text-green-400 mb-2">{Math.round(avgROI)}%</div>
                <div className="text-gray-300">Average ROI</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/innovative-services-showcase-2025"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-purple-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-500/20"
              >
                Explore All Services
              </Link>
              <Link
                to="/comprehensive-pricing-guide-2027"
                className="px-8 py-4 border border-blue-400/30 text-blue-300 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-200"
              >
                View Pricing Guide
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our services by category to find the perfect solution for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesByCategory.map((categoryData, index) => (
              <motion.div
                key={categoryData.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link
                  to="/innovative-services-showcase-2025"
                  className="block bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 h-full"
                >
                  <div className="text-center">
                    <div className={`inline-flex p-4 bg-gradient-to-r ${categoryData.color}/20 rounded-2xl border border-${categoryData.color.split('-')[1]}-400/30 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className={`text-${categoryData.color.split('-')[1]}-400`}>
                        {categoryData.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {categoryData.category}
                    </h3>
                    
                    <p className="text-gray-300 mb-6">
                      {categoryData.services.length} innovative services designed to transform your {categoryData.category.toLowerCase()} operations
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {categoryData.services.slice(0, 3).map((service, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          <span className="truncate">{service.title}</span>
                        </div>
                      ))}
                      {categoryData.services.length > 3 && (
                        <div className="text-sm text-blue-400">
                          +{categoryData.services.length - 3} more services
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-center text-blue-400 group-hover:text-blue-300 transition-colors">
                      <span className="text-sm font-medium">Explore Services</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular and innovative solutions that are transforming businesses worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INNOVATIVE_SERVICES_2025.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-400/30">
                      {getCategoryIcon(service.category)}
                    </div>
                    <div>
                      <span className="inline-block px-2 py-1 text-xs font-medium rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-500">
                        {service.innovationLevel}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">${service.price.toLocaleString()}</div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>

                <div className="space-y-2 mb-4">
                  {service.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-400">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{service.estimatedDelivery}</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-3 h-3 mr-1" />
                    <span>ROI: {service.roi}</span>
                  </div>
                </div>

                <Link
                  to="/innovative-services-showcase-2025"
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-purple-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/30 text-center block"
                >
                  <span className="flex items-center justify-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/innovative-services-showcase-2025"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-purple-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-500/20"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business expertise to deliver 
              solutions that drive real results and measurable ROI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: 'Innovation First',
                description: 'Leading-edge technology solutions that keep you ahead of the competition'
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: 'Proven ROI',
                description: 'Measurable business outcomes with transparent ROI projections'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Expert Support',
                description: '24/7 technical support and dedicated account management'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Enterprise Security',
                description: 'Bank-grade security with compliance certifications and best practices'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-400/30 mb-6">
                  <div className="text-blue-400">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our team of technology experts is ready to help you select the perfect solution 
              and provide a customized implementation plan for your business needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-blue-400">
                <Phone className="w-5 h-5" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-purple-400">
                <MailIcon className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-pink-400">
                <GlobeIcon className="w-5 h-5" />
                <span>ziontechgroup.com</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-purple-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-500/20"
              >
                Call Sales Team
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 border border-blue-400/30 text-blue-300 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-200"
              >
                Email Sales
              </a>
            </div>
            
            <div className="mt-6 text-sm text-gray-400">
              <p>364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Visit us at: <a href="https://ziontechgroup.com" className="text-blue-400 hover:underline">ziontechgroup.com</a></p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesLanding2025;