import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  Calendar,
  Headphones,
  Phone,
  ExternalLink
} from 'lucide-react';
import { SEO } from '../components/SEO';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  price: string;
  features: string[];
  benefits: string[];
  icon: React.ReactNode;
  color: string;
  link: string;
}

const COMPREHENSIVE_SERVICES: Service[] = [
  {
    id: "ai-business-process-optimizer",
    title: "AI Business Process Optimizer",
    description: "Transform your business operations with intelligent AI-driven process optimization and automation.",
    category: "AI & Automation",
    price: "$1,999 - $12,999/mo",
    features: [
      "AI-powered process mining and discovery",
      "Real-time performance monitoring and alerts",
      "Predictive analytics for process bottlenecks",
      "Automated workflow optimization recommendations"
    ],
    benefits: [
      "Reduce process costs by 30-50%",
      "Improve efficiency by 40-70%",
      "Eliminate manual bottlenecks",
      "Real-time visibility into operations"
    ],
    icon: <Brain className="w-8 h-8" />,
    color: "from-zion-blue-dark via-zion-blue to-zion-slate-dark",
    link: "/services/ai-business-process-optimizer"
  },
  {
    id: "ai-cybersecurity-threat-hunter",
    title: "AI Cybersecurity Threat Hunter",
    description: "Stay ahead of cyber threats with intelligent AI-powered security detection and automated response.",
    category: "AI & Security",
    price: "$2,499 - $15,999/mo",
    features: [
      "AI-powered threat detection and hunting",
      "Real-time security monitoring 24/7",
      "Advanced behavioral analytics",
      "Automated incident response"
    ],
    benefits: [
      "Detect threats 10x faster than traditional methods",
      "Reduce false positives by 80%",
      "Automated response reduces incident time by 60%",
      "24/7 security monitoring without human fatigue"
    ],
    icon: <Shield className="w-8 h-8" />,
    color: "from-red-900 via-red-800 to-red-700",
    link: "/services/ai-cybersecurity-threat-hunter"
  },
  {
    id: "ai-marketing-automation-suite",
    title: "AI Marketing Automation Suite",
    description: "Transform your marketing with intelligent automation, predictive analytics, and personalized customer experiences.",
    category: "AI & Marketing",
    price: "$1,499 - $9,999/mo",
    features: [
      "AI-powered audience segmentation and targeting",
      "Predictive customer behavior modeling",
      "Automated content generation and optimization",
      "Multi-channel campaign orchestration"
    ],
    benefits: [
      "Increase conversion rates by 40-80%",
      "Reduce customer acquisition costs by 30-50%",
      "Improve customer lifetime value by 25-60%",
      "Automate 70% of marketing tasks"
    ],
    icon: <BarChart3 className="w-8 h-8" />,
    color: "from-purple-900 via-purple-800 to-purple-700",
    link: "/services/ai-marketing-automation-suite"
  },
  {
    id: "ai-financial-analytics-platform",
    title: "AI Financial Analytics Platform",
    description: "Make smarter financial decisions with AI-powered analytics, predictive modeling, and real-time market insights.",
    category: "AI & Analytics",
    price: "$2,999 - $19,999/mo",
    features: [
      "AI-powered financial forecasting and modeling",
      "Real-time market data analysis and insights",
      "Predictive risk assessment and management",
      "Portfolio optimization and rebalancing"
    ],
    benefits: [
      "Improve investment returns by 15-35%",
      "Reduce financial risk by 40-60%",
      "Automate 80% of financial analysis tasks",
      "Real-time market insights and alerts"
    ],
    icon: <DollarSign className="w-8 h-8" />,
    color: "from-green-900 via-green-800 to-green-700",
    link: "/services/ai-financial-analytics-platform"
  },
  {
    id: "ai-customer-support-automation",
    title: "AI Customer Support Automation",
    description: "Transform your customer support with intelligent automation, 24/7 availability, and personalized customer experiences.",
    category: "AI & Customer Experience",
    price: "$999 - $7,999/mo",
    features: [
      "AI-powered intelligent chatbot with natural language processing",
      "24/7 automated customer support across all channels",
      "Multi-language support for global customer base",
      "Sentiment analysis and emotion detection"
    ],
    benefits: [
      "Reduce support costs by 40-70%",
      "Improve customer satisfaction by 25-50%",
      "Handle 80% of support queries automatically",
      "24/7 customer support availability"
    ],
    icon: <MessageSquare className="w-8 h-8" />,
    color: "from-blue-900 via-blue-800 to-blue-700",
    link: "/services/ai-customer-support-automation"
  },
  {
    id: "ai-project-management-platform",
    title: "AI Project Management Platform",
    description: "Streamline your projects with intelligent planning, automated optimization, and predictive insights.",
    category: "AI & Operations",
    price: "$1,299 - $8,999/mo",
    features: [
      "AI-powered project planning and scheduling optimization",
      "Intelligent resource allocation and workload balancing",
      "Predictive risk assessment and mitigation strategies",
      "Automated task prioritization and dependency management"
    ],
    benefits: [
      "Complete projects 20-40% faster",
      "Reduce project costs by 15-30%",
      "Improve team productivity by 25-50%",
      "Minimize project risks and delays"
    ],
    icon: <Calendar className="w-8 h-8" />,
    color: "from-indigo-900 via-indigo-800 to-indigo-700",
    link: "/services/ai-project-management-platform"
  }
];

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');

  const categories = ['All', ...Array.from(new Set(COMPREHENSIVE_SERVICES.map(service => service.category)))];
  const priceRanges = [
    'All',
    'Under $2,000',
    '$2,000 - $4,999',
    '$5,000 - $9,999',
    '$10,000+'
  ];

  const getPriceRangeFilter = (range: string) => {
    switch (range) {
      case 'Under $2,000':
        return (service: Service) => parseInt(service.price.split('$')[1].split('-')[0].replace(',', '')) < 2000;
      case '$2,000 - $4,999':
        return (service: Service) => {
          const minPrice = parseInt(service.price.split('$')[1].split('-')[0].replace(',', ''));
          const maxPrice = parseInt(service.price.split('$')[1].split('-')[1].split('/')[0].replace(',', ''));
          return minPrice >= 2000 && maxPrice <= 4999;
        };
      case '$5,000 - $9,999':
        return (service: Service) => {
          const minPrice = parseInt(service.price.split('$')[1].split('-')[0].replace(',', ''));
          const maxPrice = parseInt(service.price.split('$')[1].split('-')[1].split('/')[0].replace(',', ''));
          return minPrice >= 5000 && maxPrice <= 9999;
        };
      case '$10,000+':
        return (service: Service) => parseInt(service.price.split('$')[1].split('-')[1].split('/')[0].replace(',', '')) >= 10000;
      default:
        return () => true;
    }
  };

  const filteredServices = COMPREHENSIVE_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesPrice = getPriceRangeFilter(selectedPriceRange)(service);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive AI Services Showcase 2025 - Zion Tech Group"
        description="Explore our comprehensive suite of AI-powered micro SAAS services, IT solutions, and innovative business automation tools."
      />
      
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-zion-cyan to-blue-500 text-white mb-6"
          >
            <Sparkles className="w-4 h-4 mr-2" /> 2025 AI Services Showcase
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Comprehensive AI Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto"
          >
            Discover our cutting-edge AI-powered micro SAAS services, IT solutions, and innovative business automation tools designed to transform your operations.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="tel:+13024640950" className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-blue-600 rounded-lg font-semibold hover:from-zion-cyan/90 hover:to-blue-600/90 transition-all duration-300 inline-flex items-center">
              <Phone className="w-5 h-5 mr-2"/> Call +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="px-8 py-4 border border-zion-cyan/30 rounded-lg font-semibold hover:bg-zion-cyan/10 transition-all duration-300 inline-flex items-center">
              <Mail className="w-5 h-5 mr-2"/> Get Quote
            </a>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 max-w-6xl mx-auto px-6">
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-zion-cyan/50"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-zion-cyan/50"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-zion-cyan/50"
            >
              {priceRanges.map(range => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-zion-cyan/50 transition-all duration-300 group"
            >
              {/* Service Header */}
              <div className={`bg-gradient-to-br ${service.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-sm opacity-80">{service.category}</div>
                    <div className="text-lg font-bold">{service.price}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm opacity-90">{service.description}</p>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="font-semibold text-zion-cyan mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-zion-cyan mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-300">
                        <TrendingUp className="w-4 h-4 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={service.link}
                    className="text-zion-cyan hover:text-zion-cyan/80 font-medium text-sm inline-flex items-center group-hover:underline"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${encodeURIComponent(service.title)}`}
                    className="px-4 py-2 bg-zion-cyan/10 text-zion-cyan rounded-lg hover:bg-zion-cyan/20 transition-colors text-sm"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-300 mb-2">No services found</h3>
            <p className="text-slate-400">Try adjusting your search criteria or contact us for custom solutions.</p>
          </div>
        )}
      </section>

      {/* Contact Section */}
      <section className="py-20 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-slate-300 mb-8 text-lg">
            Our AI-powered services are designed to drive innovation, efficiency, and growth. 
            Let's discuss how we can help you achieve your business objectives.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="text-center">
              <Phone className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-1">Phone</h3>
              <a href="tel:+13024640950" className="text-zion-cyan hover:underline">+1 302 464 0950</a>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-zion-cyan mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-1">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:underline">kleber@ziontechgroup.com</a>
            </div>
          </div>

          <div className="text-center">
            <h3 className="font-semibold text-white mb-2">Address</h3>
            <p className="text-slate-300 mb-4">
              364 E Main St STE 1008<br />
              Middletown DE 19709
            </p>
            <a 
              href="https://ziontechgroup.com" 
              target="_blank" 
              rel="noreferrer"
              className="text-zion-cyan hover:underline inline-flex items-center"
            >
              Visit our website <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;
