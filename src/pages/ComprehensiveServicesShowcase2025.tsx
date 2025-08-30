<<<<<<< HEAD
import React from 'react.ts';
import { SEO  } from "../components/SEO";
import { servicesCatalog  } from "../data/servicesCatalog";
import { MICRO_SAAS_SERVICES  } from "../data/microSaasServices";

const ComprehensiveServicesShowcase2025: React.FC = (): JSX.Element => {
  const contactInfo = {
  mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com';
  ;

};

  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Services Showcase 2025 - Zion Tech Group"
        description="Explore our comprehensive portfolio of innovative AI, IT, and micro SaaS services designed to transform your business operations and drive digital innovation."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Comprehensive Services Showcase 2025
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover our cutting-edge portfolio of AI-powered solutions, IT services, and innovative micro SaaS platforms designed to revolutionize your business operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`mailto:${contactInfo.email}`}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started Today
            </a>
            <a 
              href={`tel:${contactInfo.mobile}`}
              className="bg-transparent border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-blue-900/20 border-t border-b border-blue-500/30 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-blue-400 font-semibold mb-2">Mobile</h3>
              <a href={`tel:${contactInfo.mobile}`} className="text-white hover:text-blue-300 transition-colors">
                {contactInfo.mobile}
              </a>;
=======;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  ArrowRight, 
  ChevronDown, 
  Globe, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Lock, 
  Users, 
  TrendingUp, 
  Award, 
  Clock, 
  DollarSign, 
  CheckCircle,
  Rocket,
  Cpu,
  Database,
  Network,
  Smartphone,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Target,
  Lightbulb,
  BarChart,
  PieChart,
  LineChart,
  Activity,
  FileText,
  MessageCircle,
  Calendar,
  Settings,
  Monitor,
  Truck,
  Car,
  Clipboard,
  Link,
  Microscope,
  X,
  Atom,
  Heart,
  Leaf
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from "../data/innovativeMicroSaasServices2025";

interface ServiceContact {
  mobile: string;
  email: string;
  address: string;
  website: string;
}

const ComprehensiveServicesShowcase2025: React.FC = () => {;
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [innovationLevel, setInnovationLevel] = useState('all');

  const allServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025;

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length, icon: '🚀' },
    { id: 'AI & Automation', name: 'AI & Automation', count: allServices.filter(s => s.category === 'AI & Automation').length, icon: '🤖' },
    { id: 'AI & Analytics', name: 'AI & Analytics', count: allServices.filter(s => s.category === 'AI & Analytics').length, icon: '📊' },
    { id: 'AI & Legal', name: 'AI & Legal', count: allServices.filter(s => s.category === 'AI & Legal').length, icon: '⚖️' },
    { id: 'AI & Logistics', name: 'AI & Logistics', count: allServices.filter(s => s.category === 'AI & Logistics').length, icon: '🚚' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: allServices.filter(s => s.category === 'AI & Healthcare').length, icon: '🏥' },
    { id: 'AI & Marketing', name: 'AI & Marketing', count: allServices.filter(s => s.category === 'AI & Marketing').length, icon: '📢' },
    { id: 'AI & Research', name: 'AI & Research', count: allServices.filter(s => s.category === 'AI & Research').length, icon: '🔬' },
    { id: 'AI & HR', name: 'AI & HR', count: allServices.filter(s => s.category === 'AI & HR').length, icon: '👥' },
    { id: 'AI & Manufacturing', name: 'AI & Manufacturing', count: allServices.filter(s => s.category === 'AI & Manufacturing').length, icon: '🏭' },
    { id: 'AI & Content', name: 'AI & Content', count: allServices.filter(s => s.category === 'AI & Content').length, icon: '✍️' },
    { id: 'AI & Transportation', name: 'AI & Transportation', count: allServices.filter(s => s.category === 'AI & Transportation').length, icon: '🚗' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: allServices.filter(s => s.category === 'Quantum Computing').length, icon: '⚛️' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category === 'Cybersecurity').length, icon: '🛡️' },
    { id: 'Edge Computing', name: 'Edge Computing', count: allServices.filter(s => s.category === 'Edge Computing').length, icon: '🌐' },
    { id: 'Sustainability', name: 'Sustainability', count: allServices.filter(s => s.category === 'Sustainability').length, icon: '🌱' },
    { id: 'Blockchain', name: 'Blockchain', count: allServices.filter(s => s.category === 'Blockchain').length, icon: '🔗' },
    { id: 'Metaverse', name: 'Metaverse', count: allServices.filter(s => s.category === 'Metaverse').length, icon: '🌍' },
    { id: 'Autonomous Vehicles', name: 'Autonomous Vehicles', count: allServices.filter(s => s.category === 'Autonomous Vehicles').length, icon: '🚗' },;
    { id: 'Healthcare', name: 'Healthcare', count: allServices.filter(s => s.category === 'Healthcare').length, icon: '🏥' },;
    { id: 'Financial Services', name: 'Financial Services', count: allServices.filter(s => s.category === 'Financial Services').length, icon: '💰' },;
    { id: 'Marketing', name: 'Marketing', count: allServices.filter(s => s.category === 'Marketing').length, icon: '📢' },;
    { id: 'Project Management', name: 'Project Management', count: allServices.filter(s => s.category === 'Project Management').length, icon: '📋' },;
    { id: 'Business Intelligence', name: 'Business Intelligence', count: allServices.filter(s => s.category === 'Business Intelligence').length, icon: '📊' },;
    { id: 'Software Development', name: 'Software Development', count: allServices.filter(s => s.category === 'Software Development').length, icon: '💻' };
  ];

  const filteredServices = allServices.filter(service => {;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesInnovation = innovationLevel === 'all' || service.innovationLevel === innovationLevel;
    
    return matchesCategory && matchesSearch && matchesPrice && matchesInnovation;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {;
    switch (sortBy) {;
      case 'price-low':;
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.title.localeCompare(b.title);
      case 'innovation':
        const innovationOrder = {
  'Breakthrough': 3, 'Revolutionary': 2,;
  ;
  ;
  ;
  ;
  ;
  'Advanced': 1 ;






};
        return (innovationOrder[b.innovationLevel as keyof typeof innovationOrder] || 0) - (innovationOrder[a.innovationLevel as keyof typeof innovationOrder] || 0);
      default:
        return 0;
    }
  });

  const handleServiceClick = (service: any) => {;
    setSelectedService(service);
  };

  const closeModal = () => {;
    setSelectedService(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },;
    visible: {;
      opacity: 1,;
      transition: {;
        staggerChildren: 0.1;
      };
    };
  };

  const itemVariants = {
  hidden: { y: 20,
  opacity: 0 






},
    visible: {
      y: 0,;
      opacity: 1,;
      transition: {;
        duration: 0.5,;
        ease: "easeOut";
      };
    };
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI & Automation': Brain,
      'AI & Analytics': BarChart3,
      'AI & Legal': Shield,
      'AI & Logistics': Truck,
      'AI & Healthcare': Heart,
      'AI & Marketing': MessageCircle,
      'AI & Research': Microscope,
      'AI & HR': Users,
      'AI & Manufacturing': Cpu,
      'AI & Content': FileText,
      'AI & Transportation': Car,
      'Quantum Computing': Atom,
      'Cybersecurity': ShieldCheck,
      'Edge Computing': Network,
      'Sustainability': Leaf,
      'Blockchain': Link,
      'Metaverse': Globe,
      'Autonomous Vehicles': Car,;
      'Healthcare': Heart,;
      'Financial Services': DollarSign,;
      'Marketing': MessageCircle,;
      'Project Management': Clipboard,;
      'Business Intelligence': BarChart,;
      'Software Development': Code;
    };
    return iconMap[category] || Rocket;
  };

  return (
    <div className = "min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue/20 via-zion-cyan/20 to-zion-purple/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            animate = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Comprehensive AI Services Showcase 2025
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
            </div>
            <div>
              <h3 className="text-blue-400 font-semibold mb-2">Email</h3>
              <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-blue-300 transition-colors">
                {contactInfo.email}
              </a>
            </div>
            <div>
              <h3 className="text-blue-400 font-semibold mb-2">Address</h3>
              <p className="text-white">{contactInfo.address}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Comprehensive Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI-powered business intelligence to quantum cybersecurity, we offer cutting-edge solutions that drive innovation and growth
            </p>
          </div>

<<<<<<< HEAD
          {/* Service Categories */}
          <div className="grid grid-cols-1 lg: grid-cols-2 xl:grid-cols-3 gap-8">
            {servicesCatalog.map((category)  => (
              <div key={category.slug} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all">
                <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                <div className="space-y-4">
                  {category.items.slice(0, 3).map((service) => (
                    <div key={service.id} className="bg-slate-700/50 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
                      <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-blue-400 font-bold">{service.price}/{service.billing}</span>
                        <a 
                          href={service.href}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition-colors"
                        >
                          {service.ctaLabel}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <a 
                    href={`/services/${category.slug}`}
                    className="text-blue-400 hover:text-blue-300 font-semibold"
                  >
                    View All {category.name} →
                  </a>
                </div>
=======
          {/* Advanced Filters */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-zion-slate-light mb-2">
                Price Range: ${priceRange[0]} - ${priceRange[1]}
              </label>
              <div className="flex gap-2">
                <input
                  type="range"
                  min="0"
                  max="10000"
                  value={priceRange[0]}
                  onChange = {
  (e) => setPriceRange([parseInt(e.target.value),
  priceRange[1]])






}
                  className="flex-1"
                />
                <input
                  type="range"
                  min="0"
                  max="10000"
                  value={priceRange[1]}
                  onChange = {
  (e) => setPriceRange([priceRange[0],
  parseInt(e.target.value)])






}
                  className="flex-1"
                />
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Micro SaaS Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Featured Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Innovative, scalable software solutions designed to solve specific business challenges and drive operational efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
            {MICRO_SAAS_SERVICES.filter(service  => service.featured).slice(0, 6).map((service) => (
              <div key={service.id} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="text-white ml-1">{service.rating}</span>
                    <span className="text-gray-400 ml-1">({service.reviewCount})</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Price:</span>
                    <span className="text-white font-semibold">{service.currency}{service.price}/{service.pricingModel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Market Price:</span>
                    <span className="text-blue-400">{service.marketPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">AI Score:</span>
                    <span className="text-green-400 font-semibold">{service.aiScore}/100</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="text-white font-semibold">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-gray-300 text-sm flex items-center">
                        <span className="text-blue-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="text-white font-semibold">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="text-gray-300 text-sm flex items-center">
                        <span className="text-green-400 mr-2">→</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href={service.website}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-center transition-colors"
                  >
                    Learn More
                  </a>
                  <a 
                    href={`mailto:${service.contactEmail}`}
                    className="bg-transparent border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-4 py-2 rounded text-center transition-colors"
                  >
                    Contact Sales
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Competitive Pricing & Market Analysis
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our services are priced competitively within the market, offering exceptional value for enterprise-grade solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4">Micro SaaS Solutions</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <span className="text-4xl font-bold text-blue-400">$29</span>
                  <span className="text-gray-400">/month</span>
                  <p className="text-gray-300 text-sm">Starting price</p>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• AI-powered automation</li>
                  <li>• Scalable infrastructure</li>
                  <li>• 24/7 support</li>
                  <li>• Regular updates</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/50">
              <h3 className="text-2xl font-bold text-white mb-4">AI & IT Services</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <span className="text-4xl font-bold text-blue-400">$1,299</span>
                  <span className="text-gray-400">/month</span>
                  <p className="text-gray-300 text-sm">Average price</p>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Enterprise-grade solutions</li>
                  <li>• Custom development</li>
                  <li>• Dedicated support</li>
                  <li>• SLA guarantees</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4">Quantum & Advanced</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <span className="text-4xl font-bold text-blue-400">$4,999</span>
                  <span className="text-gray-400">/month</span>
                  <p className="text-gray-300 text-sm">Premium tier</p>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Cutting-edge technology</li>
                  <li>• Research collaboration</li>
                  <li>• Expert consultation</li>
                  <li>• Priority access</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
=======
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value
            </p>
          </div>

<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Innovation First</h3>
              <p className="text-gray-300">Leading-edge AI, quantum computing, and emerging technologies</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Rapid Deployment</h3>
              <p className="text-gray-300">Quick implementation and time-to-value for your business</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-grade security and compliance for all solutions</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
              <p className="text-gray-300">Track record of successful implementations and ROI</p>
            </div>
=======
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI-First Approach",
                description: "Every solution is built with cutting-edge AI at its core, ensuring maximum efficiency and innovation."
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-grade security with SOC 2 compliance, ensuring your data and operations are always protected."
              },
              {
                icon: Zap,
                title: "Rapid Implementation",
                description: "Get up and running in weeks, not months, with our proven implementation methodology."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.8,
  delay: index * 0.1 






}}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our innovative solutions can drive your digital transformation and business growth
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-3">Schedule a Consultation</h3>
              <p className="text-gray-300 mb-4">Book a free consultation to discuss your needs</p>
              <a 
                href={`mailto:${contactInfo.email}?subject=Consultation Request`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
              >
                Book Consultation
              </a>
            </div>
=======
      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let's discuss how our AI-powered solutions can drive your success.
            </p>
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
            
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-3">Get a Custom Quote</h3>
              <p className="text-gray-300 mb-4">Receive a personalized quote for your project</p>
              <a 
                href={`mailto:${contactInfo.email}?subject=Custom Quote Request`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
              >
                Request Quote
              </a>
            </div>
          </div>

          <div className="bg-blue-900/20 rounded-xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="text-blue-400 font-semibold mb-2">Mobile</h4>
                <a href={`tel:${contactInfo.mobile}`} className="text-white hover:text-blue-300 transition-colors">
                  {contactInfo.mobile}
                </a>
              </div>
              <div>
                <h4 className="text-blue-400 font-semibold mb-2">Email</h4>
                <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-blue-300 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div>
                <h4 className="text-blue-400 font-semibold mb-2">Website</h4>
                <a href={contactInfo.website} className="text-white hover:text-blue-300 transition-colors">
                  {contactInfo.website}
                </a>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-300">{contactInfo.address}</p>
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD;
    </div>;
  )};
=======

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial = {{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial = {
  { scale: 0.9,
  opacity: 0 






}}
              animate = {
  { scale: 1,
  opacity: 1 






}}
              exit = {
  { scale: 0.9,
  opacity: 0 






}}
              className="bg-zion-slate-dark rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedService.title}</h2>
                    <p className="text-zion-slate-light text-lg">{selectedService.description}</p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-zion-slate-light hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Features</h3>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-zion-slate-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Benefits</h3>
                    <ul className="space-y-2">
                      {selectedService.benefits.map((benefit: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <Zap className="w-5 h-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-zion-slate-light">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-zion-slate-light/20">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-zion-cyan">${selectedService.price.toLocaleString()}</div>
                      <div className="text-sm text-zion-slate-light">Monthly</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-zion-cyan">{selectedService.roi}</div>
                      <div className="text-sm text-zion-slate-light">ROI</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-zion-cyan">{selectedService.estimatedDelivery}</div>
                      <div className="text-sm text-zion-slate-light">Delivery</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-zion-cyan">{selectedService.innovationLevel}</div>
                      <div className="text-sm text-zion-slate-light">Innovation</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-semibold hover:from-zion-cyan/80 hover:to-zion-blue/80 transition-all duration-300">
                    Get Started
                  </button>
                  <button className="flex-1 px-6 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
                    Contact Sales
                  </button>
                </div>;
              </div>;
            </motion.div>;
          </motion.div>;
        )};
      </AnimatePresence>;
    </div>;
  );
};
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

export default ComprehensiveServicesShowcase2025;
