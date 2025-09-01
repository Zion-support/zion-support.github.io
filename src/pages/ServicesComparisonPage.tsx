import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Check, 
  X, 
  Star, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket,
  TrendingUp,
  DollarSign,
  Clock,
  Users,
  Globe,
  ChevronDown,
  ChevronUp,
  Filter,
  Search
} from 'lucide-react';

export default function ServicesComparisonPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const allServices = [
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
      category: 'AI & Analytics',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      description: 'Machine Learning & Data Science solutions',
      features: [
        'Predictive Analytics',
        'Machine Learning Models',
        'Data Visualization',
        'Real-time Insights',
        'Custom Dashboards',
        'API Integration'
      ],
      pricing: 'Custom',
      deployment: 'Cloud/On-premise',
      support: '24/7',
      rating: 4.9,
      bestFor: 'Enterprise Analytics'
    },
    {
      id: 'ai-sales-copilot',
      name: 'AI Sales Copilot',
      category: 'AI & Sales',
      icon: TrendingUp,
      color: 'from-blue-600 to-cyan-600',
      description: 'AI-powered sales automation and optimization',
      features: [
        'Lead Scoring',
        'Sales Forecasting',
        'Email Automation',
        'CRM Integration',
        'Performance Analytics',
        'Multi-channel Support'
      ],
      pricing: 'Per User/Month',
      deployment: 'Cloud',
      support: 'Business Hours',
      rating: 4.8,
      bestFor: 'Sales Teams'
    },
    {
      id: 'cloud-devops',
      name: 'Cloud DevOps',
      category: 'Infrastructure',
      icon: Cloud,
      color: 'from-green-600 to-emerald-600',
      description: 'Infrastructure automation and cloud management',
      features: [
        'CI/CD Pipelines',
        'Infrastructure as Code',
        'Monitoring & Alerting',
        'Auto-scaling',
        'Security Compliance',
        'Cost Optimization'
      ],
      pricing: 'Usage-based',
      deployment: 'Cloud',
      support: '24/7',
      rating: 4.7,
      bestFor: 'DevOps Teams'
    },
    {
      id: 'ai-compliance-copilot',
      name: 'AI Compliance Copilot',
      category: 'Security & Compliance',
      icon: Shield,
      color: 'from-red-600 to-pink-600',
      description: 'AI-powered compliance monitoring and automation',
      features: [
        'Real-time Monitoring',
        'Automated Reports',
        'Risk Assessment',
        'Policy Management',
        'Audit Preparation',
        'Regulatory Updates'
      ],
      pricing: 'Annual',
      deployment: 'Cloud',
      support: 'Business Hours',
      rating: 4.9,
      bestFor: 'Compliance Teams'
    },
    {
      id: 'digital-twin',
      name: 'Digital Twin',
      category: 'IoT & Simulation',
      icon: Rocket,
      color: 'from-orange-600 to-red-600',
      description: 'Digital simulation and monitoring solutions',
      features: [
        '3D Modeling',
        'Real-time Monitoring',
        'Predictive Maintenance',
        'Performance Analytics',
        'Integration APIs',
        'Custom Dashboards'
      ],
      pricing: 'Custom',
      deployment: 'Hybrid',
      support: '24/7',
      rating: 4.6,
      bestFor: 'Manufacturing & IoT'
    },
    {
      id: 'micro-saas-solutions',
      name: 'Micro SaaS Solutions',
      category: 'Software Solutions',
      icon: Zap,
      color: 'from-yellow-600 to-orange-600',
      description: 'Scalable software solutions for specific niches',
      features: [
        'Custom Development',
        'Scalable Architecture',
        'Multi-tenant Support',
        'API Integration',
        'Analytics Dashboard',
        'White-label Options'
      ],
      pricing: 'Subscription',
      deployment: 'Cloud',
      support: 'Business Hours',
      rating: 4.5,
      bestFor: 'SaaS Businesses'
    }
  ];

  const categories = ['All', 'AI & Analytics', 'AI & Sales', 'Infrastructure', 'Security & Compliance', 'IoT & Simulation', 'Software Solutions'];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedServices.length === 0 || selectedServices.includes(service.id);
    return matchesSearch && matchesCategory;
  });

  const toggleServiceSelection = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter(id => id !== serviceId));
    } else {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  const clearSelection = () => {
    setSelectedServices([]);
  };

  const selectAll = () => {
    setSelectedServices(allServices.map(service => service.id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Services Comparison
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Compare our services to find the perfect solution for your business needs
            </p>
            
            {/* Search and Filter Controls */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent w-80"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-6 py-3 bg-slate-800 border border-slate-700 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors flex items-center gap-2"
              >
                <Filter className="w-4 h-4" />
                Filters
                {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>

            {/* Filter Options */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-slate-800/50 rounded-xl p-6 mb-8"
              >
                <div className="flex flex-wrap justify-center gap-4 mb-4">
                  <button
                    onClick={selectAll}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Select All
                  </button>
                  <button
                    onClick={clearSelection}
                    className="px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    Clear Selection
                  </button>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`px-3 py-1 rounded-full text-sm ${
                        category === 'All' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200"
              >
                <div className="p-6">
                  {/* Service Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold text-slate-700">{service.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.name}</h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-slate-700">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {/* Service Details */}
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Pricing:</span>
                      <span className="font-medium text-slate-900">{service.pricing}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Deployment:</span>
                      <span className="font-medium text-slate-900">{service.deployment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Support:</span>
                      <span className="font-medium text-slate-900">{service.support}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Best For:</span>
                      <span className="font-medium text-slate-900">{service.bestFor}</span>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Link
                      to={`/services/${service.id}`}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 text-center"
                    >
                      Learn More
                    </Link>
                    <button
                      onClick={() => toggleServiceSelection(service.id)}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                        selectedServices.includes(service.id)
                          ? 'bg-green-500 text-white hover:bg-green-600'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {selectedServices.includes(service.id) ? 'Selected' : 'Compare'}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-700 mb-2">No services found</h3>
              <p className="text-slate-500">Try adjusting your search terms or filters</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Comparison Table */}
      {selectedServices.length > 1 && (
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Compare Selected Services
              </h2>
              <p className="text-xl text-slate-600">
                Side-by-side comparison of your selected services
              </p>
            </motion.div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl shadow-lg">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="p-6 text-left text-slate-900 font-semibold">Features</th>
                    {selectedServices.map(serviceId => {
                      const service = allServices.find(s => s.id === serviceId);
                      return (
                        <th key={serviceId} className="p-6 text-center text-slate-900 font-semibold">
                          <div className="flex flex-col items-center">
                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service?.color} flex items-center justify-center mb-2`}>
                              <service?.icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-sm font-medium">{service?.name}</div>
                          </div>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="p-6 font-medium text-slate-700">Category</td>
                    {selectedServices.map(serviceId => {
                      const service = allServices.find(s => s.id === serviceId);
                      return (
                        <td key={serviceId} className="p-6 text-center text-slate-600">
                          {service?.category}
                        </td>
                      );
                    })}
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="p-6 font-medium text-slate-700">Pricing</td>
                    {selectedServices.map(serviceId => {
                      const service = allServices.find(s => s.id === serviceId);
                      return (
                        <td key={serviceId} className="p-6 text-center text-slate-600">
                          {service?.pricing}
                        </td>
                      );
                    })}
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="p-6 font-medium text-slate-700">Deployment</td>
                    {selectedServices.map(serviceId => {
                      const service = allServices.find(s => s.id === serviceId);
                      return (
                        <td key={serviceId} className="p-6 text-center text-slate-600">
                          {service?.deployment}
                        </td>
                      );
                    })}
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="p-6 font-medium text-slate-700">Support</td>
                    {selectedServices.map(serviceId => {
                      const service = allServices.find(s => s.id === serviceId);
                      return (
                        <td key={serviceId} className="p-6 text-center text-slate-600">
                          {service?.support}
                        </td>
                      );
                    })}
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="p-6 font-medium text-slate-700">Rating</td>
                    {selectedServices.map(serviceId => {
                      const service = allServices.find(s => s.id === serviceId);
                      return (
                        <td key={serviceId} className="p-6 text-center">
                          <div className="flex items-center justify-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-slate-700">{service?.rating}</span>
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Our experts can help you find the perfect solution for your business
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
              >
                Get Expert Advice
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}