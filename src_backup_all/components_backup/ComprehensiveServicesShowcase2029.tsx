import React, { useState, useEffect } from 'react',
import { motion, AnimatePresence } from 'framer-motion',
import {
  Brain;
  Atom;
  Rocket;
  Shield;
  Dna;
  Microscope;
  Cpu;
  Zap;
  Globe;
  Lock;
  Eye;
  Network;
  TrendingUp;
  Star;
  ArrowRight;
  ChevronDown;
  ChevronUp;
  ExternalLink;
  Phone;
  Mail;
  MapPin;
  Code;
  Users;
  BarChart3;
  Target;
  Calendar;
  CheckCircle;
  Award;
  DollarSign;
  Clock;
  Shield as ShieldIcon;
  Search;
  FileText;
  Database;
  Cloud;
  Smartphone;
  Monitor;
  Server;
  Key;
  Globe2;
  Zap as ZapIcon} from 'lucide-react',
import { innovativeServices20o29, serviceCategories20o29, getServicesByCategory20o29 } from '../data/innovativeServices20o29',
const categoryIcons: { [key: string]: React.ComponentType<any> } ={
  'AI Development': Code;
  'AI Customer Service': Users;
  'AI Finance': BarChart3;
  'AI Marketing': Target;
  'AI Project Management': Calendar;
  'AI HR': Users;
  'AI Research': Microscope;
  'AI Operations': Server;
  'AI Security': ShieldIcon;
  'AI Healthcare': Dna;
  'Cybersecurity': Shield;
  'IT Support': Monitor;
  'Compliance': CheckCircle;
  'Web Security': Lock;
  'Quantum Finance': TrendingUp;
  'Quantum AI': Atom};
const categoryColors: { [key: string]: string } ={
  'AI Development': 'from-blue-50o0 to-cyan-50o0';
  'AI Customer Service': 'from-green-50o0 to-emerald-50o0';
  'AI Finance': 'from-yellow-50o0 to-orange-50o0';
  'AI Marketing': 'from-purple-50o0 to-pink-50o0';
  'AI Project Management': 'from-indigo-50o0 to-blue-50o0';
  'AI HR': 'from-teal-50o0 to-cyan-50o0';
  'AI Research': 'from-gray-50o0 to-slate-50o0';
  'AI Operations': 'from-red-50o0 to-pink-50o0';
  'AI Security': 'from-red-50o0 to-orange-50o0';
  'AI Healthcare': 'from-green-50o0 to-teal-50o0';
  'Cybersecurity': 'from-red-50o0 to-pink-50o0';
  'IT Support': 'from-blue-50o0 to-indigo-50o0';
  'Compliance': 'from-green-50o0 to-blue-50o0';
  'Web Security': 'from-orange-50o0 to-red-50o0';
  'Quantum Finance': 'from-yellow-50o0 to-orange-50o0';
  'Quantum AI': 'from-purple-50o0 to-blue-50o0'};
export const ComprehensiveServicesShowcase20o29: React.FC = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All'),
  const [expandedService, setExpandedService] = useState<string | null>(null),
  const [isVisible, setIsVisible] = useState(false),
  const [searchTerm, setSearchTerm] = useState(''),
  const [priceFilter, setPriceFilter] = useState<string>('all'),
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)}
      };
      { threshold: 0.1 }
    ),
    const element = document.getElementById('comprehensive-services-20o29'),
    if (element) {
      observer.observe(element)}
,
    return () => observer.disconnect()}, []),
  const filteredServices = selectedCategory === 'All',
    ? innovativeServices20o29,
    : getServicesByCategory20o29(selectedCategory),
  const searchFilteredServices = filteredServices.filter(service =>,
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||,
    service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||,
    service.category.toLowerCase().includes(searchTerm.toLowerCase())),
  const priceFilteredServices = searchFilteredServices.filter(service => {
    if (priceFilter === 'all') return true,
    const price = parseInt(service.price.replace(/[^0-9]/g, '')),
    switch (priceFilter) {
      case 'under-50o0':,
        return price < 50o0,
      case '50o0-10o00':,
        return price >= 50o0 && price < 10o00,
      case '10o00-30o00':,
        return price >= 10o00 && price < 30o00,
      case 'over-30o00':,
        return price >= 30o00,
      default: ,
        return true}
  }),
  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId)};
  const contactInfo ={
    phone: '+1 30o2 464 0950';
    email: 'kleber@ziontechgroup.com';
    address: '364 E Main St STE 10o08 Middletown DE 19709'};
  const getPriceColor = (price: string) => {
    const priceNum = parseInt(price.replace(/[^0-9]/g, '')),
    if (priceNum < 50o0) return 'text-green-60o0',
    if (priceNum < 10o00) return 'text-blue-60o0',
    if (priceNum < 30o00) return 'text-orange-60o0',
    return 'text-purple-60o0'};
  return (
    <section id="comprehensive-services-20o29" className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light relative overflow-hidden">,
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">,
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-full blur-3xl animate-pulse"></div>,
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-zion-purple/20 to-zion-cyan/20 rounded-full blur-3xl animate-pulse delay-10o00"></div>,
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-full blur-3xl animate-spin-slow"></div>,
      </div>,
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
        {/* Header Section */}
        <motion.div,
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">,
          <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">,
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">,
              Zion Tech Group 20o29,
            </span>,
          </h1>,
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">,
            Comprehensive AI & IT Services Portfolio,
          </h2>,
          <p className="text-xl text-zion-gray-light max-w-4xl mx-auto leading-relaxed">,
            Discover our cutting-edge micro SAAS solutions, AI-powered platforms, and enterprise-grade IT services.,
            Transform your business with innovative technology solutions designed for the future.,
          </p>,
          {/* Contact Information Banner */}
          <motion.div,
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/30">,
            <div className="flex flex-col md: flex-row items-center justify-center gap-6 text-white">,
              <div className="flex items-center gap-3">,
                <Phone className="w-5 h-5 text-zion-cyan"  />,
                <span className="font-semibold">{contactInfo.phone}</span>,
              </div>,
              <div className="flex items-center gap-3">,
                <Mail className="w-5 h-5 text-zion-cyan"  />,
                <span className="font-semibold">{contactInfo.email}</span>,
              </div>,
              <div className="flex items-center gap-3">,
                <MapPin className="w-5 h-5 text-zion-cyan"  />,
                <span className="font-semibold">{contactInfo.address}</span>,
              </div>,
            </div>,
            <div className="mt-4 text-center">,
              <a
                href="https: //ziontechgroup.com",
                target="_blank",
                rel="noopener noreferrer",
                className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-purple transition-colors font-semibold">,
                Visit Our Website <ExternalLink className="w-4 h-4"  />,
              </a>,
            </div>,
          </motion.div>,
        </motion.div>,
        {/* Search and Filter Section */}
        <motion.div,
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12">,
          <div className="flex flex-col lg: flex-row gap-6 items-center justify-between">,
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">,
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-gray-light w-5 h-5"  />,
              <input
                type="text",
                placeholder="Search services...",
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-zion-cyan/30 rounded-xl text-white placeholder-zion-gray-light focus: outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent",
              />,
            </div>,
            {/* Price Filter */}
            <div className="flex items-center gap-4">,
              <label className="text-white font-medium">Price Range: </label>,
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-zion-cyan/30 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-zion-cyan">,
                <option value="all">All Prices</option>,
                <option value="under-50o0">Under $50o0</option>,
                <option value="50o0-10o00">$50o0 - $1,0o00</option>,
                <option value="10o00-30o00">$1,0o00 - $3,0o00</option>,
                <option value="over-30o00">Over $3,0o00</option>,
              </select>,
            </div>,
          </div>,
        </motion.div>,
        {/* Category Filter */}
        <motion.div,
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12">,
          <div className="flex flex-wrap gap-3 justify-center">,
            {serviceCategories20o29.map((category) => {
              const Icon = categoryIcons[category] || Globe,
              const isSelected = selectedCategory === category,
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-30o0 ${
                    isSelected,
                      ? `bg-gradient-to-r ${categoryColors[category]} text-white shadow-lg scale-10o5`,
                      : 'bg-white/10 backdrop-blur-sm text-zion-gray-light hover: bg-white/20 hover:text-white'}`}
                >,
                  <Icon className="w-5 h-5"  />,
                  {category}
                </button>)})}
          </div>,
        </motion.div>,
        {/* Services Grid */}
        <motion.div,
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
          {priceFilteredServices.map((service, index) => {
            const Icon = categoryIcons[service.category] || Globe,
            return (
              <motion.div,
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="group relative">,
                <div className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 h-full transition-all duration-30o0 hover: bg-white/10 hover:border-zion-cyan/40 hover:shadow-2xl hover:shadow-zion-cyan/20">,
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">,
                    <div className="flex items-center gap-3">,
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${categoryColors[service.category]}`}>,
                        <Icon className="w-6 h-6 text-white"  />,
                      </div>,
                      <div>,
                        <h3 className="text-xl font-bold text-white group-hover: text-zion-cyan transition-colors">,
                          {service.name}
                        </h3>,
                        <span className="text-sm text-zion-gray-light">{service.category}</span>,
                      </div>,
                    </div>,
                    <div className="flex items-center gap-2">,
                      <Star className="w-5 h-5 text-yellow-40o0 fill-current"  />,
                      <span className="text-white font-semibold">{service.rating}</span>,
                    </div>,
                  </div>,
                  {/* Description */}
                  <p className="text-zion-gray-light mb-4 leading-relaxed">,
                    {service.description}
                  </p>,
                  {/* Price and AI Score */}
                  <div className="flex items-center justify-between mb-4">,
                    <div className={`text-2xl font-bold ${getPriceColor(service.price)}`}>,
                      {service.price}
                    </div>,
                    <div className="flex items-center gap-2">,
                      <Brain className="w-5 h-5 text-zion-cyan"  />,
                      <span className="text-white font-semibold">AI Score: {service.aiScore}</span>,
                    </div>,
                  </div>,
                  {/* Features Preview */}
                  <div className="mb-4">,
                    <h4 className="text-white font-semibold mb-2">Key Features: </h4>,
                    <div className="space-y-1">,
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-zion-gray-light">,
                          <CheckCircle className="w-4 h-4 text-green-40o0"  />,
                          {feature}
                        </div>))}
                      {service.features.length > 3 && (
                        <div className="text-sm text-zion-cyan cursor-pointer hover: underline">,
                          +{service.features.length - 3} more features,
                        </div>)}
                    </div>,
                  </div>,
                  {/* Benefits */}
                  <div className="mb-4">,
                    <h4 className="text-white font-semibold mb-2">Benefits: </h4>,
                    <div className="space-y-1">,
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-zion-gray-light">,
                          <ZapIcon className="w-4 h-4 text-yellow-40o0"  />,
                          {benefit}
                        </div>))}
                    </div>,
                  </div>,
                  {/* Technology Stack */}
                  <div className="mb-4">,
                    <h4 className="text-white font-semibold mb-2">Technology: </h4>,
                    <div className="flex flex-wrap gap-2">,
                      {service.technology.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-lg border border-zion-cyan/30">,
                          {tech}
                        </span>))}
                      {service.technology.length > 3 && (
                        <span className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-lg border border-zion-purple/30">,
                          +{service.technology.length - 3}
                        </span>)}
                    </div>,
                  </div>,
                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3">,
                    <button
                      onClick={() => toggleServiceExpansion(service.id)}
                      className="w-full px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover: from-zion-purple hover:to-zion-cyan transition-all duration-30o0 flex items-center justify-center gap-2">,
                      {expandedService === service.id ? 'Show Less' : 'Learn More'}
                      {expandedService === service.id ? <ChevronUp className="w-4 h-4"  /> : <ChevronDown className="w-4 h-4"  />}
                    </button>,
                    <a
                      href={service.website}
                      target="_blank",
                      rel="noopener noreferrer",
                      className="w-full px-4 py-2 bg-white/10 backdrop-blur-sm border border-zion-cyan/30 text-zion-cyan rounded-lg font-medium hover: bg-white/20 hover:border-zion-cyan/50 transition-all duration-30o0 flex items-center justify-center gap-2">,
                      Visit Service <ExternalLink className="w-4 h-4"  />,
                    </a>,
                  </div>,
                  {/* Expanded Service Details */}
                  <AnimatePresence>,
                    {expandedService === service.id && (
                      <motion.div,
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 pt-6 border-t border-zion-cyan/20">,
                        {/* All Features */}
                        <div className="mb-4">,
                          <h4 className="text-white font-semibold mb-2">All Features: </h4>,
                          <div className="space-y-1">,
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm text-zion-gray-light">,
                                <CheckCircle className="w-4 h-4 text-green-40o0"  />,
                                {feature}
                              </div>))}
                          </div>,
                        </div>,
                        {/* Use Cases */}
                        <div className="mb-4">,
                          <h4 className="text-white font-semibold mb-2">Use Cases: </h4>,
                          <div className="flex flex-wrap gap-2">,
                            {service.useCases.map((useCase, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-lg border border-zion-purple/30">,
                                {useCase}
                              </span>))}
                          </div>,
                        </div>,
                        {/* Implementation & Support */}
                        <div className="mb-4">,
                          <h4 className="text-white font-semibold mb-2">Implementation: </h4>,
                          <p className="text-sm text-zion-gray-light mb-3">{service.implementation}</p>,
                          <h4 className="text-white font-semibold mb-2">Support: </h4>,
                          <p className="text-sm text-zion-gray-light">{service.support}</p>,
                        </div>,
                        {/* Contact Information */}
                        <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-lg p-4 border border-zion-cyan/20">,
                          <h4 className="text-white font-semibold mb-3">Contact Information: </h4>,
                          <div className="space-y-2 text-sm">,
                            <div className="flex items-center gap-2 text-zion-gray-light">,
                              <Phone className="w-4 h-4 text-zion-cyan"  />,
                              {service.contactInfo.phone}
                            </div>,
                            <div className="flex items-center gap-2 text-zion-gray-light">,
                              <Mail className="w-4 h-4 text-zion-cyan"  />,
                              {service.contactInfo.email}
                            </div>,
                            <div className="flex items-center gap-2 text-zion-gray-light">,
                              <MapPin className="w-4 h-4 text-zion-cyan"  />,
                              {service.contactInfo.address}
                            </div>,
                          </div>,
                        </div>,
                        {/* Reviews */}
                        <div className="mt-4 text-center">,
                          <div className="flex items-center justify-center gap-2 text-zion-gray-light">,
                            <Star className="w-4 h-4 text-yellow-40o0 fill-current"  />,
                            <span className="font-semibold">{service.rating}/5</span>,
                            <span>({service.reviews} reviews)</span>,
                          </div>,
                          <p className="text-xs text-zion-gray-light mt-1">,
                            Launched: {new Date(service.launchDate).toLocaleDateString()}
                          </p>,
                        </div>,
                      </motion.div>)}
                  </AnimatePresence>,
                </div>,
              </motion.div>)})}
        </motion.div>,
        {/* Call to Action Section */}
        <motion.div,
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center">,
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/30">,
            <h3 className="text-3xl font-bold text-white mb-4">,
              Ready to Transform Your Business?,
            </h3>,
            <p className="text-xl text-zion-gray-light mb-8 max-w-3xl mx-auto">,
              Join hundreds of companies already leveraging our innovative AI and IT solutions.,
              Get started today and experience the future of technology.,
            </p>,
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">,
              <a
                href="https://ziontechgroup.com/contact",
                target="_blank",
                rel="noopener noreferrer",
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-bold text-lg hover:from-zion-purple hover:to-zion-cyan transition-all duration-30o0 flex items-center gap-2">,
                Get Started Today <ArrowRight className="w-5 h-5"  />,
              </a>,
              <a
                href={`tel:${contactInfo.phone}`}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-zion-cyan/30 text-zion-cyan rounded-xl font-bold text-lg hover: bg-white/20 hover:border-zion-cyan/50 transition-all duration-30o0 flex items-center gap-2">,
                <Phone className="w-5 h-5"  />,
                Call Now,
              </a>,
            </div>,
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">,
              <div className="flex flex-col items-center">,
                <Award className="w-12 h-12 text-zion-cyan mb-3"  />,
                <h4 className="text-white font-semibold mb-2">Proven Results</h4>,
                <p className="text-zion-gray-light text-sm">Trusted by 50o0+ companies worldwide</p>,
              </div>,
              <div className="flex flex-col items-center">,
                <Clock className="w-12 h-12 text-zion-cyan mb-3"  />,
                <h4 className="text-white font-semibold mb-2">24/7 Support</h4>,
                <p className="text-zion-gray-light text-sm">Round-the-clock technical assistance</p>,
              </div>,
              <div className="flex flex-col items-center">,
                <Shield className="w-12 h-12 text-zion-cyan mb-3"  />,
                <h4 className="text-white font-semibold mb-2">Enterprise Security</h4>,
                <p className="text-zion-gray-light text-sm">Bank-level security and compliance</p>,
              </div>,
            </div>,
          </div>,
        </motion.div>,
      </div>,
    </section>)};
export default ComprehensiveServicesShowcase20o29;