import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  GlobeIcon, 
  Search, 
  Phone, 
  Mail, 
  MapPin,
  Sparkles,
  CloudIcon,
  Cpu
} from 'lucide-react';
import { SEO } from '../components/SEO';

// Service data structure
interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  price: string;
  rating: number;
  features: string[];
  link: string;
}

// Sample service data
const microSaaS: Service[] = [
  {
    id: '1',
    title: 'SOC2 Automation Platform',
    description: 'Automate SOC2 compliance with AI-powered monitoring and reporting',
    category: 'Security',
    price: '$2,999/month',
    rating: 4.8,
    features: ['AI-powered monitoring', 'Automated reporting', 'Real-time alerts', 'Compliance dashboard'],
    link: '/services/soc2-automation'
  },
  {
    id: '2',
    title: 'Kubernetes Management Suite',
    description: 'Enterprise-grade Kubernetes management with advanced monitoring and automation',
    category: 'DevOps',
    price: '$1,999/month',
    rating: 4.9,
    features: ['Multi-cluster management', 'Auto-scaling', 'Security scanning', 'Cost optimization'],
    link: '/services/kubernetes-management'
  },
  {
    id: '3',
    title: 'RAG Platform for Enterprises',
    description: 'Build and deploy Retrieval-Augmented Generation applications at scale',
    category: 'AI',
    price: '$3,999/month',
    rating: 4.7,
    features: ['Vector database integration', 'Custom embeddings', 'API management', 'Analytics dashboard'],
    link: '/services/rag-platform'
  }
];

const itServices: Service[] = [
  {
    id: '4',
    title: 'Cloud Architecture Consulting',
    description: 'Expert guidance on cloud infrastructure design and optimization',
    category: 'Consulting',
    price: '$250/hour',
    rating: 4.9,
    features: ['Architecture review', 'Migration planning', 'Cost optimization', 'Security assessment'],
    link: '/services/cloud-consulting'
  },
  {
    id: '5',
    title: 'Platform Engineering',
    description: 'Build and maintain internal developer platforms for faster delivery',
    category: 'Engineering',
    price: '$5,000/month',
    rating: 4.8,
    features: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring setup', 'Developer tools'],
    link: '/services/platform-engineering'
  },
  {
    id: '6',
    title: 'Security Operations Center',
    description: '24/7 security monitoring and incident response services',
    category: 'Security',
    price: '$8,000/month',
    rating: 4.9,
    features: ['Threat detection', 'Incident response', 'Vulnerability management', 'Compliance reporting'],
    link: '/services/soc-services'
  }
];

const aiSolutions: Service[] = [
  {
    id: '7',
    title: 'AI Governance Platform',
    description: 'Ensure responsible AI deployment with comprehensive governance tools',
    category: 'AI',
    price: '$4,999/month',
    rating: 4.8,
    features: ['Model monitoring', 'Bias detection', 'Explainability', 'Compliance tracking'],
    link: '/services/ai-governance'
  },
  {
    id: '8',
    title: 'Privacy-Preserving AI',
    description: 'Deploy AI solutions while maintaining data privacy and compliance',
    category: 'AI',
    price: '$6,999/month',
    rating: 4.7,
    features: ['Federated learning', 'Differential privacy', 'Secure computation', 'GDPR compliance'],
    link: '/services/privacy-ai'
  },
  {
    id: '9',
    title: 'Business AI Integration',
    description: 'Seamlessly integrate AI into existing business processes and workflows',
    category: 'AI',
    price: '$3,999/month',
    rating: 4.9,
    features: ['Process automation', 'Data integration', 'User training', 'Performance monitoring'],
    link: '/services/business-ai'
  }
];

// Section component
const Section: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  items: Service[];
  gradient: string;
}> = ({ icon, title, description, items, gradient }) => (
  <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r ${gradient}`}>
    <div className="max-w-7xl mx-auto">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
          {icon}
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{title}</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">{description}</p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
            <p className="text-gray-300 mb-6">{item.description}</p>
            <div className="mb-6">
              <span className="inline-block bg-white/10 text-white px-3 py-1 rounded-full text-sm mb-2">
                {item.category}
              </span>
              <div className="flex items-center mb-2">
                <span className="text-yellow-400 text-sm mr-2">★</span>
                <span className="text-white text-sm">{item.rating}</span>
              </div>
              <div className="text-cyan-400 font-semibold text-lg">{item.price}</div>
            </div>
            <ul className="space-y-2 mb-6">
              {item.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-300">
                  <span className="text-cyan-400 mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              to={item.link}
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              Learn More
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// Service card component
const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => (
  <motion.div
    className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
    <p className="text-gray-300 mb-6">{service.description}</p>
    <div className="mb-6">
      <span className="inline-block bg-white/10 text-white px-3 py-1 rounded-full text-sm mb-2">
        {service.category}
      </span>
      <div className="flex items-center mb-2">
        <span className="text-yellow-400 text-sm mr-2">★</span>
        <span className="text-white text-sm">{service.rating}</span>
      </div>
      <div className="text-cyan-400 font-semibold text-lg">{service.price}</div>
    </div>
    <ul className="space-y-2 mb-6">
      {service.features.map((feature, idx) => (
        <li key={idx} className="flex items-center text-gray-300">
          <span className="text-cyan-400 mr-2">✓</span>
          {feature}
        </li>
      ))}
    </ul>
    <Link
      to={service.link}
      className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
    >
      Learn More
    </Link>
  </motion.div>
);

export default function ComprehensiveServices() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const allServices = [...microSaaS, ...itServices, ...aiSolutions];
  const categories = ['all', ...Array.from(new Set(allServices.map(s => s.category)))];

  const filteredServices = useMemo(() => {
    let filtered = allServices;
    
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }
    
    return filtered;
  }, [searchTerm, selectedCategory]);

  const sortedServices = useMemo(() => {
    const sorted = [...filteredServices];
    
    switch (sortBy) {
      case 'rating':
        return sorted.sort((a, b) => b.rating - a.rating);
      case 'price-low':
        return sorted.sort((a, b) => parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, '')));
      case 'price-high':
        return sorted.sort((a, b) => parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, '')));
      case 'newest':
        return sorted.sort((a, b) => b.id.localeCompare(a.id));
      default:
        return sorted;
    }
  }, [filteredServices, sortBy]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Comprehensive Services - Zion Tech Group"
        description="Micro SaaS, IT services, and AI solutions with clear pricing, links, and rapid delivery."
        keywords="micro saas, it services, ai solutions, soc2 automation, kubernetes, rag platform"
        canonical="https://ziontechgroup.com/comprehensive-services"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Comprehensive
              </span>
              <br />
              <span className="text-white">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover our complete portfolio of cutting-edge technology solutions designed to transform industries and drive innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold text-lg rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                <GlobeIcon className="w-5 h-5 mr-2" />
                Visit Our Website
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      <Section
        icon={<Sparkles className="h-6 w-6" />}
        title="Micro SaaS Products"
        description="Subscription software for security, legal, revenue, and operations with fast time-to-value."
        items={microSaaS}
        gradient="from-violet-900/60 to-indigo-900/40"
      />

      <Section
        icon={<CloudIcon className="h-6 w-6" />}
        title="IT Services"
        description="Cloud, platform, and security engagements by seasoned architects and SREs."
        items={itServices}
        gradient="from-sky-900/60 to-teal-900/40"
      />

      <Section
        icon={<Cpu className="h-6 w-6" />}
        title="AI Solutions"
        description="Applied AI with governance, privacy, and business outcomes at the core."
        items={aiSolutions}
        gradient="from-fuchsia-900/60 to-rose-900/40"
      />

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50"
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:border-cyan-400/50"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-slate-800 text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:border-cyan-400/50"
              >
                <option value="popular" className="bg-slate-800 text-white">Most Popular</option>
                <option value="rating" className="bg-slate-800 text-white">Highest Rated</option>
                <option value="price-low" className="bg-slate-800 text-white">Price: Low to High</option>
                <option value="price-high" className="bg-slate-800 text-white">Price: High to Low</option>
                <option value="newest" className="bg-slate-800 text-white">Newest</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {filteredServices.length} Revolutionary Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive portfolio of cutting-edge technology solutions designed to transform industries and drive innovation
            </p>
          </motion.div>
          
          {sortedServices.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {sortedServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or browse all categories</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your <span className="text-cyan-400">Business</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our cutting-edge services can help you achieve your business goals and drive innovation. 
              Contact us today for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold text-lg rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}