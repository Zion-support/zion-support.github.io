import React, { useState, useEffect } from 'react.ts';
import { Link  } from 'react-router-dom.ts';
import { motion  } from 'framer-motion.ts';
import { Brain, 
  Cloud, 
  Shield, 
  Server, 
  Zap, 
  Globe, 
  Cpu, 
  Database,
  Network,
  Lock,
  Code,
  Rocket,
  Users,
  BarChart3,
  FileImage,
  TrendingUp,
  MessageCircle,
  Video,
  FileText,
  Heart,
  Star,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  Sparkles,
  Phone,
  Mail,
  MapPin
 } from 'lucide-react';
import { SEO  } from '@/components/SEO';

const ComprehensiveServicesOverview: React.FC = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPricing, setSelectedPricing] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Globe },
    { id: 'ai-services', name: 'AI Services', icon: Brain },
    { id: 'it-services', name: 'IT Services', icon: Server },
    { id: 'micro-saas', name: 'Micro SaaS', icon: Rocket },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud Solutions', icon: Cloud }
  ];

  const pricingModels = [
    { id: 'all', name: 'All Pricing' },
    { id: 'monthly', name: 'Monthly' },
    { id: 'yearly', name: 'Yearly' },
    { id: 'one-time', name: 'One-time' },
    { id: 'usage-based', name: 'Usage-based' }
  ];

  const services = [
    {
      id: 'ai-workflow-automation',
      title: 'AI Workflow Automation',
      description: 'Intelligent automation platform that streamlines business processes',
      category: 'ai-services',
      pricing: 'monthly',
      price: '$1,200',
      features['Process automation', 'AI decision making', 'Integration APIs', 'Analytics dashboard'],
      icon: Brain,
      rating: 4.9,
      reviewCount: 127
    },
    {
      id: 'ai-customer-experience',
      title: 'AI Customer Experience Platform',
      description: 'Personalized customer engagement powered by artificial intelligence',
      category: 'ai-services',
      pricing: 'monthly',
      price: '$2,500',
      features['Customer segmentation', 'Predictive analytics', 'Omnichannel support', 'Real-time insights'],
      icon: Users,
      rating: 4.8,
      reviewCount: 89
    },
    {
      id: 'ai-supply-chain',
      title: 'AI Supply Chain Optimization',
      description: 'End-to-end supply chain management with AI-driven insights',
      category: 'ai-services',
      pricing: 'monthly',
      price: '$3,800',
      features['Demand forecasting', 'Inventory optimization', 'Route planning', 'Risk management'],
      icon: Network,
      rating: 4.7,
      reviewCount: 156
    },
    {
      id: 'ai-cybersecurity',
      title: 'AI Cybersecurity Suite',
      description: 'Advanced threat detection and response using machine learning',
      category: 'cybersecurity',
      pricing: 'monthly',
      price: '$2,200',
      features['Threat detection', 'Behavioral analysis', 'Incident response', 'Compliance reporting'],
      icon: Shield,
      rating: 4.9,
      reviewCount: 203
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps Solutions',
      description: 'Scalable cloud infrastructure and automated deployment',
      category: 'it-services',
      pricing: 'monthly',
      price: '$1,800',
      features['Cloud migration', 'CI/CD pipelines', 'Monitoring', 'Auto-scaling'],
      icon: Cloud,
      rating: 4.6,
      reviewCount: 94
    },
    {
      id: 'data-governance',
      title: 'AI Data Governance',
      description: 'Comprehensive data protection and compliance management',
      category: 'ai-services',
      pricing: 'monthly',
      price: '$1,500',
      features['Data classification', 'Privacy controls', 'Audit trails', 'GDPR compliance'],
      icon: Database,
      rating: 4.5,
      reviewCount: 67
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPricing = selectedPricing === 'all' || service.pricing === selectedPricing;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesPricing && matchesSearch});

  return (
  {/* Empty JSX fragment */}
      <SEO 
        title="Comprehensive Services Overview | Zion Tech Group"
        description="Explore our complete range of AI services, IT solutions, and micro SaaS platforms designed to transform your business operations."
        keywords="AI services, IT solutions, micro SaaS, cybersecurity, cloud solutions, business automation"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="py-32 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Complete
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Service Portfolio
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Discover our comprehensive range of AI-powered services, IT solutions, and innovative micro SaaS platforms 
                designed to accelerate your business transformation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <div className="flex flex-col lg:flex-row gap-6 mb-8">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50"
                    />
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus: outline-none focus:border-blue-400/50"
                  >
                    {categories.map(category  => (
                      <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                  </select>
                  
                  <select
                    value={selectedPricing}
                    onChange={(e) => setSelectedPricing(e.target.value)}
                    className="px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus: outline-none focus:border-blue-400/50"
                  >
                    {pricingModels.map(pricing  => (
                      <option key={pricing.id} value={pricing.id}>{pricing.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index)  => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-blue-400 mb-2">{service.price}</div>
                    <div className="text-sm text-gray-400 capitalize">{service.pricing} pricing</div>
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-gray-400 ml-2">({service.reviewCount})</span>
                  </div>
                  
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to={`/services/${service.id}`}
                    className="block w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-cyan-400 transition-all duration-300 text-center"
                  >
                    Learn More
                  </Link>
                </motion.div>
              ))}
            </div>
            
            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedPricing('all');
                    setSearchQuery('')}}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-12 rounded-3xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/50">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our team of experts is ready to help you implement the perfect solution for your needs. 
                Get in touch today for a personalized consultation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30 flex items-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2"/>
                  Schedule Consultation
                </Link>
                <a 
                  href="tel:+13024640950"
                  className="px-8 py-4 border border-blue-400/50 text-blue-400 font-semibold rounded-xl hover:bg-blue-400/20 transition-all duration-300 flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2"/>
                  Call Now: +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 border-t border-slate-700/50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-400 mb-4" />
                <h4 className="text-white font-semibold mb-2">Phone</h4>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-400 mb-4" />
                <h4 className="text-white font-semibold mb-2">Email</h4>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-blue-400 mb-4" />
                <h4 className="text-white font-semibold mb-2">Address</h4>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )};

export default ComprehensiveServicesOverview;