import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Cpu, 
  Database, 
  Network, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Rocket,
  Target,
  Lightbulb,
  Atom,
  Lock,
  BarChart3,
  Code,
  Server,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  TrendingUp,
  Scale,
  Gauge,
  Award,
  Globe2,
  CpuIcon,
  DatabaseIcon,
  ShieldIcon,
  ZapIcon,
  BrainIcon,
  CloudIcon,
  LeafIcon,
  HeartIcon,
  DollarSignIcon,
  FactoryIcon
} from 'lucide-react';
import newInnovativeServices2025 from '../data/newInnovativeServices2025';

export default function NewInnovativeServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = newInnovativeServices2025.flatMap(category => 
    category.items.filter(service => 
      (selectedCategory === 'all' || service.category === selectedCategory) &&
      (searchTerm === '' || 
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  );

  const getCategoryIcon = (categoryName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      'AI Solutions': BrainIcon,
      'Cybersecurity': ShieldIcon,
      'Cloud & DevOps': CloudIcon,
      'Data & Analytics': DatabaseIcon,
      'Sustainability': LeafIcon,
      'BioTech & Health': HeartIcon,
      'FinTech & DeFi': DollarSignIcon,
      'Manufacturing': FactoryIcon,
      'Micro SaaS': Code,
      'IT Services': Server,
      'Quantum Computing': Atom,
      'Blockchain & Web3': Coins,
      'IoT & Edge': Wifi,
      'Green Tech': Leaf,
      'Space Tech': Satellite,
      'Metaverse & AR/VR': Gamepad2,
      'Autonomous Systems': Bot,
      'Digital Transformation': ZapIcon,
      'Enterprise Solutions': Building2
    };
    return iconMap[categoryName] || Globe;
  };

  const getCategoryColor = (categoryName: string) => {
    const colorMap: { [key: string]: string } = {
      'AI Solutions': 'from-purple-500 to-pink-500',
      'Cybersecurity': 'from-red-500 to-orange-500',
      'Cloud & DevOps': 'from-blue-500 to-cyan-500',
      'Data & Analytics': 'from-indigo-500 to-purple-500',
      'Sustainability': 'from-green-500 to-emerald-500',
      'BioTech & Health': 'from-pink-500 to-rose-500',
      'FinTech & DeFi': 'from-yellow-500 to-orange-500',
      'Manufacturing': 'from-gray-500 to-slate-500',
      'Micro SaaS': 'from-violet-500 to-purple-500',
      'IT Services': 'from-sky-500 to-blue-500',
      'Quantum Computing': 'from-cyan-500 to-blue-500',
      'Blockchain & Web3': 'from-orange-500 to-red-500',
      'IoT & Edge': 'from-emerald-500 to-green-500',
      'Green Tech': 'from-green-400 to-emerald-400',
      'Space Tech': 'from-indigo-400 to-purple-400',
      'Metaverse & AR/VR': 'from-pink-400 to-purple-400',
      'Autonomous Systems': 'from-blue-400 to-indigo-400',
      'Digital Transformation': 'from-yellow-400 to-orange-400',
      'Enterprise Solutions': 'from-slate-400 to-gray-400'
    };
    return colorMap[categoryName] || 'from-gray-500 to-slate-500';
  };

  return (
    <>
      <Helmet>
        <title>New Innovative Services 2025 - Zion Tech Group</title>
        <meta name="description" content="Discover cutting-edge AI, cybersecurity, cloud, and digital transformation services. Transform your business with our innovative solutions." />
        <meta name="keywords" content="AI services, cybersecurity, cloud solutions, digital transformation, business intelligence, healthcare technology, fintech, manufacturing automation" />
        <link rel="canonical" href="https://ziontechgroup.com/new-innovative-services-2025" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  New Innovative Services 2025
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with cutting-edge AI, cybersecurity, cloud, and digital transformation solutions. 
                Discover the future of technology today.
              </p>
              
              {/* Contact Information */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-6 h-6 text-cyan-400" />
                    <div className="text-left">
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="text-white font-semibold">+1 302 464 0950</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-6 h-6 text-cyan-400" />
                    <div className="text-left">
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                    <div className="text-left">
                      <p className="text-sm text-gray-400">Address</p>
                      <p className="text-white font-semibold text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://ziontechgroup.com/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="https://ziontechgroup.com/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === 'all'
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/20 text-gray-300 hover:bg-white/30'
                    }`}
                  >
                    All Categories
                  </button>
                  {Array.from(new Set(newInnovativeServices2025.flatMap(cat => cat.items.map(item => item.category)))).map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-cyan-500 text-white'
                          : 'bg-white/20 text-gray-300 hover:bg-white/30'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {filteredServices.length === 0 ? (
              <div className="text-center py-20">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl text-gray-300 mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20"
                  >
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)} flex items-center justify-center`}>
                        {React.createElement(getCategoryIcon(service.category), { className: 'w-6 h-6 text-white' })}
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                          {service.category}
                        </span>
                      </div>
                    </div>

                    {/* Service Title and Description */}
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>

                    {/* Pricing */}
                    <div className="bg-white/10 rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-bold text-white">{service.price}</p>
                          <p className="text-sm text-gray-400">per {service.billing}</p>
                        </div>
                        <div className="text-right">
                          {service.roi && (
                            <p className="text-sm text-green-400 font-medium">{service.roi}</p>
                          )}
                          {service.implementationTime && (
                            <p className="text-xs text-gray-400">Implementation: {service.implementationTime}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {service.features.length > 3 && (
                          <li className="text-xs text-gray-400 ml-6">
                            +{service.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Market Size */}
                    {service.marketSize && (
                      <div className="mb-4 p-3 bg-blue-500/20 rounded-lg">
                        <p className="text-xs text-blue-300 font-medium">Market Size</p>
                        <p className="text-sm text-blue-200">{service.marketSize}</p>
                      </div>
                    )}

                    {/* CTA Button */}
                    <a
                      href={service.href}
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                      {service.ctaLabel}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of companies already leveraging our innovative solutions to drive growth, 
                reduce costs, and stay ahead of the competition.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Proven Results</h3>
                  <p className="text-gray-300 text-sm">300-800% ROI within 6-18 months</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Fast Implementation</h3>
                  <p className="text-gray-300 text-sm">Deploy in 1-12 weeks</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Expert Support</h3>
                  <p className="text-gray-300 text-sm">24/7 technical assistance</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://ziontechgroup.com/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  Email Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">About Zion Tech Group</h3>
                <p className="text-gray-300 mb-6">
                  We are a leading technology solutions provider specializing in AI, cybersecurity, cloud computing, 
                  and digital transformation. Our mission is to empower businesses with innovative technology solutions 
                  that drive growth and competitive advantage.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>500+ successful implementations</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>99.9% client satisfaction rate</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span>24/7 technical support</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-start text-gray-300">
                    <MapPin className="w-5 h-5 text-cyan-400 mr-3 mt-1" />
                    <span>
                      364 E Main St STE 1008<br />
                      Middletown DE 19709
                    </span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Globe className="w-5 h-5 text-cyan-400 mr-3" />
                    <a 
                      href="https://ziontechgroup.com" 
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ziontechgroup.com
                    </a>
                  </div>
                </div>
                
                <div className="mt-6">
                  <a
                    href="https://ziontechgroup.com/contact"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Schedule a Consultation
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}