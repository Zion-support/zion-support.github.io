import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { comprehensiveMicroSaasServices2025 } from '../../data/2025-comprehensive-micro-saas-services';
import { innovativeITAIServices2025 } from '../../data/2025-innovative-it-ai-services';
import { expandedInnovativeServices2025 } from '../../data/2025-expanded-innovative-services';
import { emergingTechInnovationServices2025 } from '../../data/2025-emerging-tech-innovations';
import { enterpriseITInnovationServices2025 } from '../../data/2025-enterprise-it-innovations';
const InnovativeServicesOverview = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const allServices = [
        ...comprehensiveMicroSaasServices2025,
        ...innovativeITAIServices2025,
        ...expandedInnovativeServices2025,
        ...emergingTechInnovationServices2025,
        ...enterpriseITInnovationServices2025
    ];
    const categories = [
        { id: 'all', name: 'All Services', count: allServices.length },
        { id: 'ai-services', name: 'AI & Machine Learning', count: allServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning')).length },
        { id: 'quantum-computing', name: 'Quantum Computing', count: allServices.filter(s => s.category.includes('Quantum')).length },
        { id: 'blockchain', name: 'Blockchain & Web3', count: allServices.filter(s => s.category.includes('Blockchain')).length },
        { id: 'enterprise-it', name: 'Enterprise IT', count: allServices.filter(s => s.category.includes('Enterprise')).length },
        { id: 'emerging-tech', name: 'Emerging Technologies', count: allServices.filter(s => s.category.includes('Space') || s.category.includes('Robotics') || s.category.includes('Metaverse')).length },
        { id: 'cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category.includes('Security') || s.category.includes('Cybersecurity')).length },
        { id: 'healthcare', name: 'Healthcare & Biotech', count: allServices.filter(s => s.category.includes('Healthcare') || s.category.includes('Biology')).length },
        { id: 'finance', name: 'Finance & Trading', count: allServices.filter(s => s.category.includes('Finance') || s.category.includes('Trading')).length },
        { id: 'sustainability', name: 'Sustainability & Energy', count: allServices.filter(s => s.category.includes('Energy') || s.category.includes('Climate')).length }
    ];
    const filteredServices = selectedCategory === 'all'
        ? allServices
        : allServices.filter(service => {
            const category = categories.find(c => c.id === selectedCategory);
            if (!category)
                return true;
            const categoryMappings = {
                'ai-services': ['AI', 'Machine Learning', 'Content', 'Marketing', 'Customer Service', 'Sales', 'CRM', 'Social Media', 'Supply Chain', 'HR', 'Recruitment', 'Finance', 'Accounting'],
                'quantum-computing': ['Quantum'],
                'blockchain': ['Blockchain', 'Web3'],
                'enterprise-it': ['Enterprise'],
                'emerging-tech': ['Space', 'Robotics', 'Metaverse', 'Virtual Reality', 'Autonomous'],
                'cybersecurity': ['Security', 'Cybersecurity'],
                'healthcare': ['Healthcare', 'Biology', 'Biotechnology', 'Neuroscience'],
                'finance': ['Finance', 'Trading'],
                'sustainability': ['Energy', 'Climate', 'Sustainability', 'Green Tech']
            };
            const targetKeywords = categoryMappings[selectedCategory] || [category.name];
            return targetKeywords.some(keyword => service.category.toLowerCase().includes(keyword.toLowerCase()));
        });
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-7xl mx-auto text-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Zion Tech Group
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 block">
              Innovative Services Portfolio
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Discover our comprehensive portfolio of cutting-edge micro SAAS services, AI solutions, 
            emerging technology innovations, enterprise IT services, and quantum computing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
            <a href="tel:+13024640950" className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105">
              Call Now: +1 302 464 0950
            </a>
          </div>
          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl mb-2">📱</div>
                <h3 className="font-semibold mb-2">Mobile</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">✉️</div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">📍</div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Category Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Service Categories</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (<button key={category.id} onClick={() => setSelectedCategory(category.id)} className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${selectedCategory === category.id
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'}`}>
                {category.name} ({category.count})
              </button>))}
          </div>
        </div>
      </section>
      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            {selectedCategory === 'all' ? 'All Services' : categories.find(c => c.id === selectedCategory)?.name}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (<motion.div key={service.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-300 hover:scale-105 cursor-pointer ${service.popular ? 'border-cyan-400/50 shadow-cyan-400/20' : 'border-white/20'}`} onClick={() => setSelectedService(service)}>
                {service.popular && (<div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                      POPULAR
                    </span>
                  </div>)}
                
                <div className="text-center mb-4">
                  <div className={`text-4xl mb-2 ${service.textColor}`}>{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-3">{service.tagline}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-1">
                    {service.price}<span className="text-sm text-gray-400">{service.period}</span>
                  </div>
                  <div className="text-sm text-gray-400 mb-4">
                    {service.trialDays} days free trial • {service.setupTime} setup
                  </div>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm">
                    <span className="text-cyan-400 mr-2">📊</span>
                    <span className="text-gray-300">{service.category}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-cyan-400 mr-2">🎯</span>
                    <span className="text-gray-300">{service.targetAudience.split(', ').slice(0, 2).join(', ')}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-cyan-400 mr-2">⭐</span>
                    <span className="text-gray-300">{service.rating}/5 ({service.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-cyan-400 mr-2">👥</span>
                    <span className="text-gray-300">{service.customers} customers</span>
                  </div>
                </div>
                <div className="text-center">
                  <a href={service.link} className="inline-block w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                    Learn More
                  </a>
                </div>
              </motion.div>))}
          </div>
        </div>
      </section>
      {/* Service Detail Modal */}
      {selectedService && (<div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="bg-slate-800 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className={`text-4xl ${selectedService.textColor}`}>{selectedService.icon}</div>
                <div>
                  <h2 className="text-3xl font-bold">{selectedService.name}</h2>
                  <p className="text-gray-300">{selectedService.tagline}</p>
                </div>
              </div>
              <button onClick={() => setSelectedService(null)} className="text-gray-400 hover:text-white text-2xl">
                ×
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Service Details</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Price:</span>
                    <span className="text-cyan-400 font-bold">{selectedService.price}{selectedService.period}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Category:</span>
                    <span>{selectedService.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Trial:</span>
                    <span>{selectedService.trialDays} days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Setup:</span>
                    <span>{selectedService.setupTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Rating:</span>
                    <span>{selectedService.rating}/5 ({selectedService.reviews} reviews)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Customers:</span>
                    <span>{selectedService.customers}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">Market Position</h3>
                <p className="text-gray-300 mb-4">{selectedService.marketPosition}</p>
                <h3 className="text-xl font-bold mb-4">ROI</h3>
                <p className="text-gray-300 mb-4">{selectedService.roi}</p>
                <h3 className="text-xl font-bold mb-4">Market Size</h3>
                <p className="text-gray-300 mb-4">{selectedService.marketSize} • {selectedService.growthRate}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Features</h3>
                <ul className="space-y-2 mb-6">
                  {selectedService.features.map((feature, index) => (<li key={index} className="flex items-center">
                      <span className="text-cyan-400 mr-2">✓</span>
                      {feature}
                    </li>))}
                </ul>
                <h3 className="text-xl font-bold mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedService.technology.map((tech, index) => (<span key={index} className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>))}
                </div>
                <h3 className="text-xl font-bold mb-4">Use Cases</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedService.useCases.map((useCase, index) => (<span key={index} className="bg-green-600/20 text-green-300 px-2 py-1 rounded text-sm">
                      {useCase}
                    </span>))}
                </div>
                <h3 className="text-xl font-bold mb-4">Competitors</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedService.competitors.map((competitor, index) => (<span key={index} className="bg-red-600/20 text-red-300 px-2 py-1 rounded text-sm">
                      {competitor}
                    </span>))}
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <a href={selectedService.link} className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 mr-4">
                Get Started
              </a>
              <a href={`mailto:${selectedService.contactInfo.email}?subject=Inquiry about ${selectedService.name}`} className="inline-block bg-white/10 text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/20 transition-all duration-300">
                Contact Sales
              </a>
            </div>
          </motion.div>
        </div>)}
      {/* Footer CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our innovative services to drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
              Start Your Journey
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
            <a href="tel:+13024640950" className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105">
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>);
};
export default InnovativeServicesOverview;
