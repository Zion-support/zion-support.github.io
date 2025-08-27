import React from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight, DollarSign, ExternalLink, Workflow, MessageSquare, Globe, TrendingUp, Sparkles, Bot, Shield, FileText, Users, BarChart3, Cloud, ShieldCheck } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';
import { NEW_SERVICES_2025 } from '../data/newServices2025';
import { enhancedServices2025 } from '../../data/enhanced-2025-services';
import { specializedIndustryServices } from '../../data/specialized-industry-services';
import { allServices } from '../../data/services';
import { Link } from 'react-router-dom';

export default function Services() {
  // Combine all services for display
  const allAvailableServices = [
    ...enhancedServices2025,
    ...specializedIndustryServices,
    ...allServices
  ];

  // Get services by category
  const aiServices = allAvailableServices.filter(service => service.category === 'AI').slice(0, 6);
  const itServices = allAvailableServices.filter(service => service.category === 'IT').slice(0, 6);
  const saasServices = allAvailableServices.filter(service => service.category === 'SAAS').slice(0, 6);
  const developmentServices = allAvailableServices.filter(service => service.category === 'Development').slice(0, 6);
  const securityServices = allAvailableServices.filter(service => service.category === 'Security').slice(0, 6);
  const analyticsServices = allAvailableServices.filter(service => service.category === 'Analytics').slice(0, 6);
  const automationServices = allAvailableServices.filter(service => service.category === 'Automation').slice(0, 6);
  const fintechServices = allAvailableServices.filter(service => service.category === 'Fintech').slice(0, 6);
  const healthcareServices = allAvailableServices.filter(service => service.category === 'Healthcare').slice(0, 6);
  const educationServices = allAvailableServices.filter(service => service.category === 'Education').slice(0, 6);
  const marketingServices = allAvailableServices.filter(service => service.category === 'Marketing').slice(0, 6);

  // Get popular and new services
  const popularServices = allAvailableServices.filter(service => service.isPopular).slice(0, 8);
  const newServices = allAvailableServices.filter(service => service.isNew).slice(0, 8);

  // Get services by industry
  const manufacturingServices = specializedIndustryServices.filter(service => service.industry === 'Manufacturing').slice(0, 4);
  const retailServices = specializedIndustryServices.filter(service => service.industry === 'Retail').slice(0, 4);
  const healthcareIndustryServices = specializedIndustryServices.filter(service => service.industry === 'Healthcare').slice(0, 4);
  const legalServices = specializedIndustryServices.filter(service => service.industry === 'Legal').slice(0, 4);
  const realEstateServices = specializedIndustryServices.filter(service => service.industry === 'Real Estate').slice(0, 4);
  const agricultureServices = specializedIndustryServices.filter(service => service.industry === 'Agriculture').slice(0, 4);
  const energyServices = specializedIndustryServices.filter(service => service.industry === 'Energy').slice(0, 4);
  const transportationServices = specializedIndustryServices.filter(service => service.industry === 'Transportation').slice(0, 4);
  const hospitalityServices = specializedIndustryServices.filter(service => service.industry === 'Hospitality').slice(0, 4);

  const renderServiceCard = (service: any) => (
    <motion.div
      key={service.id}
      className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
      whileHover={{ y: -5, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl mb-2">{service.icon}</div>
        {service.isPopular && (
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs px-3 py-1 rounded-full">
            Popular
          </span>
        )}
        {service.isNew && (
          <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs px-3 py-1 rounded-full">
            New
          </span>
        )}
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
      <p className="text-gray-300 text-sm mb-4 line-clamp-2">{service.description}</p>
      
      <div className="mb-4">
        <span className="text-2xl font-bold text-cyan-400">
          ${service.pricing?.starter || service.price?.replace(/[^0-9]/g, '') || 'Contact'}
        </span>
        <span className="text-gray-400 text-sm ml-2">
          {service.pricing?.period || '/month'}
        </span>
      </div>

      <div className="mb-4">
        <h4 className="text-white font-semibold mb-2">Key Features:</h4>
        <ul className="space-y-1">
          {(service.features || []).slice(0, 3).map((feature: string, index: number) => (
            <li key={index} className="text-gray-300 text-sm flex items-center">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="text-white font-semibold mb-2">Benefits:</h4>
        <ul className="space-y-1">
          {(service.benefits || []).slice(0, 2).map((benefit: string, index: number) => (
            <li key={index} className="text-gray-300 text-sm flex items-center">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {service.marketPosition && (
        <div className="mb-4 p-3 bg-white/5 rounded-lg">
          <p className="text-gray-300 text-sm italic">"{service.marketPosition}"</p>
        </div>
      )}

      <div className="flex items-center justify-between">
        <Link
          to={service.link || `/services/${service.id}`}
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          Learn More <ArrowRight className="ml-1 w-4 h-4" />
        </Link>
        
        <div className="flex items-center space-x-2">
          {service.rating && (
            <div className="flex items-center text-yellow-400">
              <span className="text-sm">★</span>
              <span className="text-sm ml-1">{service.rating}</span>
            </div>
          )}
          {service.reviewCount && (
            <span className="text-gray-400 text-sm">({service.reviewCount})</span>
          )}
        </div>
      </div>
    </motion.div>
  );

  const renderIndustrySection = (title: string, services: any[], icon: any) => (
    <section className="mb-16">
      <div className="flex items-center mb-8">
        <div className="text-3xl mr-3">{icon}</div>
        <h2 className="text-3xl font-bold text-white">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map(renderServiceCard)}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="Zion Tech Group - Comprehensive AI, IT & Micro SAAS Services"
        description="Discover our comprehensive range of AI, IT, and micro SAAS services. From autonomous business operations to specialized industry solutions, we deliver cutting-edge technology services."
        keywords="AI services, IT services, micro SAAS, specialized industry solutions, technology consulting, digital transformation"
        canonicalUrl="https://ziontechgroup.com/services"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Comprehensive
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Technology Services
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From AI-powered solutions to specialized industry platforms, we deliver cutting-edge technology services that transform businesses and drive innovation across all sectors.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/pricing"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              View Pricing
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Popular Services */}
      {popularServices.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Most Popular Services</h2>
              <p className="text-gray-300 text-lg">Our most requested and highly-rated solutions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {popularServices.map(renderServiceCard)}
            </div>
          </div>
        </section>
      )}

      {/* New Services */}
      {newServices.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Latest Innovations</h2>
              <p className="text-gray-300 text-lg">Cutting-edge services just launched</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {newServices.map(renderServiceCard)}
            </div>
          </div>
        </section>
      )}

      {/* AI Services */}
      {aiServices.length > 0 && renderIndustrySection("AI & Machine Learning Services", aiServices, Bot)}

      {/* IT & Infrastructure Services */}
      {itServices.length > 0 && renderIndustrySection("IT & Infrastructure Services", itServices, Cloud)}

      {/* Security Services */}
      {securityServices.length > 0 && renderIndustrySection("Cybersecurity & Security Services", securityServices, Shield)}

      {/* Analytics Services */}
      {analyticsServices.length > 0 && renderIndustrySection("Analytics & Business Intelligence", analyticsServices, BarChart3)}

      {/* Automation Services */}
      {automationServices.length > 0 && renderIndustrySection("Automation & Process Optimization", automationServices, Workflow)}

      {/* Fintech Services */}
      {fintechServices.length > 0 && renderIndustrySection("Fintech & Financial Services", fintechServices, DollarSign)}

      {/* Healthcare Services */}
      {healthcareServices.length > 0 && renderIndustrySection("Healthcare & Biotech Solutions", healthcareServices, FileText)}

      {/* Education Services */}
      {educationServices.length > 0 && renderIndustrySection("Education & Learning Platforms", educationServices, Users)}

      {/* Marketing Services */}
      {marketingServices.length > 0 && renderIndustrySection("Marketing & Content Solutions", marketingServices, MessageSquare)}

      {/* Industry-Specific Services */}
      {manufacturingServices.length > 0 && renderIndustrySection("Manufacturing & Industry 4.0", manufacturingServices, Workflow)}
      {retailServices.length > 0 && renderIndustrySection("Retail & E-commerce Solutions", retailServices, Globe)}
      {healthcareIndustryServices.length > 0 && renderIndustrySection("Healthcare Industry Solutions", healthcareIndustryServices, FileText)}
      {legalServices.length > 0 && renderIndustrySection("Legal Tech Solutions", legalServices, ShieldCheck)}
      {realEstateServices.length > 0 && renderIndustrySection("Real Estate Technology", realEstateServices, TrendingUp)}
      {agricultureServices.length > 0 && renderIndustrySection("Agriculture & AgTech", agricultureServices, Sparkles)}
      {energyServices.length > 0 && renderIndustrySection("Energy & Sustainability", energyServices, Sparkles)}
      {transportationServices.length > 0 && renderIndustrySection("Transportation & Logistics", transportationServices, Globe)}
      {hospitalityServices.length > 0 && renderIndustrySection("Hospitality & Tourism", hospitalityServices, Users)}

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how our cutting-edge technology services can drive innovation, efficiency, and growth for your organization.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Consultation
            </Link>
            <a
              href="tel:+13024640950"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              Call +1 (302) 464-0950
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

