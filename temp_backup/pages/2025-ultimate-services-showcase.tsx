<<<<<<< HEAD
import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Check, Star, ArrowRight, Phone, Mail, MapPin,
  Brain, Atom, Rocket, Target, Server, Building,
  Shield, Globe, Zap, TrendingUp, Users, Award
} from 'lucide-react';

// Import all our new services
import { advancedAIAutomationPlatforms2025 } from '../data/2025-advanced-ai-automation-platforms';
import { innovativeITInfrastructureSolutions2025 } from '../data/2025-innovative-it-infrastructure-solutions';
import { specializedMicroSaasSolutions2025 } from '../data/2025-specialized-micro-saas-solutions';
import { emergingTechnologyServices2025 } from '../data/2025-emerging-technology-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const ServiceCard = ({ service, index }: { service: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`relative overflow-hidden rounded-2xl p-6 shadow-xl transition-all duration-300 hover:scale-105 ${
      service.popular ? 'ring-2 ring-blue-500' : ''
    }`}
    style={{
      background: `linear-gradient(135deg, ${service.color})`
    }}
  >
    {service.popular && (
      <div className="absolute -right-2 -top-2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
        Popular
      </div>
    )}
    
    <div className="text-white">
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-xl font-bold mb-2">{service.name}</h3>
      <p className="text-sm opacity-90 mb-4">{service.tagline}</p>
      
      <div className="mb-4">
        <div className="text-2xl font-bold">${service.price.monthly}/month</div>
        <div className="text-sm opacity-75">${service.price.yearly}/year (save 17%)</div>
      </div>
      
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <Star className="w-4 h-4 text-yellow-300 mr-1" />
          <span className="text-sm">{service.rating} ({service.reviews} reviews)</span>
        </div>
        <div className="text-sm opacity-75">{service.customers} customers</div>
      </div>
      
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Key Benefits:</h4>
        <ul className="space-y-1">
          {service.benefits.slice(0, 3).map((benefit: string, idx: number) => (
            <li key={idx} className="text-sm flex items-start">
              <Check className="w-3 h-3 mr-2 mt-0.5 flex-shrink-0" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Target Audience:</h4>
        <div className="text-sm opacity-75">
          {service.targetAudience.slice(0, 3).join(', ')}
        </div>
      </div>
      
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Market Position:</h4>
        <div className="text-sm opacity-75">{service.marketPosition}</div>
      </div>
      
      <div className="mb-4">
        <h4 className="font-semibold mb-2">ROI:</h4>
        <div className="text-sm opacity-75">{service.roi}</div>
      </div>
      
      <a
        href={service.link}
        className="inline-flex items-center justify-center w-full px-4 py-2 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
      >
        Learn More <ArrowRight className="w-4 h-4 ml-2" />
      </a>
    </div>
  </motion.div>
);

const ServiceCategory = ({ title, services, icon: Icon, color }: { 
  title: string; 
  services: any[]; 
  icon: any; 
  color: string;
}) => (
  <div className="mb-16">
    <div className="text-center mb-12">
      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${color}`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Discover our cutting-edge {title.toLowerCase()} that are transforming industries and driving innovation
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <ServiceCard key={service.id} service={service} index={index} />
      ))}
    </div>
  </div>
);

const ContactSection = () => (
  <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Business?</h2>
      <p className="text-xl mb-12 max-w-3xl mx-auto">
        Join thousands of organizations already leveraging our innovative solutions to drive growth, 
        reduce costs, and stay ahead of the competition.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="text-center">
          <Phone className="w-12 h-12 mx-auto mb-4 text-blue-200" />
          <h3 className="text-xl font-semibold mb-2">Call Us</h3>
          <p className="text-blue-100">{contactInfo.mobile}</p>
        </div>
        <div className="text-center">
          <Mail className="w-12 h-12 mx-auto mb-4 text-blue-200" />
          <h3 className="text-xl font-semibold mb-2">Email Us</h3>
          <p className="text-blue-100">{contactInfo.email}</p>
        </div>
        <div className="text-center">
          <MapPin className="w-12 h-12 mx-auto mb-4 text-blue-200" />
          <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
          <p className="text-blue-100">{contactInfo.address}</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <a
          href={`tel:${contactInfo.mobile}`}
          className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors mr-4"
        >
          <Phone className="w-5 h-5 mr-2" />
          Call Now
        </a>
        <a
          href={`mailto:${contactInfo.email}`}
          className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
        >
          <Mail className="w-5 h-5 mr-2" />
          Send Email
        </a>
      </div>
    </div>
  </div>
);

const StatsSection = () => (
  <div className="py-20 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're not just another technology company. We're your strategic partner in digital transformation.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">10,000+</h3>
          <p className="text-gray-600">Happy Customers</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">500%</h3>
          <p className="text-gray-600">Average ROI</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">50+</h3>
          <p className="text-gray-600">Industry Awards</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Zap className="w-8 h-8 text-orange-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">24/7</h3>
          <p className="text-gray-600">Support Available</p>
        </div>
      </div>
    </div>
  </div>
);

export default function UltimateServicesShowcase2025() {
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

const 2025-ultimate-services-showcase: React.FC = () => {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>2025-ultimate-services-showcase | Zion Tech Group</title>
        <meta name="description" content="2025-ultimate-services-showcase - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">2025-ultimate-services-showcase</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default 2025-ultimate-services-showcase;
