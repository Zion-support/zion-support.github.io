import React, { useState } from 'react';
import { SEO } from "@/components/SEO";
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  Database, 
  Users, 
  TrendingUp, 
  Globe, 
  Lock,
  Cloud,
  Briefcase,
  Scale,
  Rocket,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Search
} from 'lucide-react';
import ultimateInnovativeServices2025 from '../../data/2025-ultimate-innovative-services-expansion';

export default function UltimateServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'all',
    'Financial Technology',
    'Research & Development',
    'IoT & Cybersecurity',
    'Supply Chain & Logistics',
    'Quantum Computing',
    'Business Operations',
    'Healthcare',
    'Marketing',
    'Cloud Infrastructure',
    'Legal Technology'
  ];

  const filteredServices = ultimateInnovativeServices2025.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory);
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    if (category.includes('Financial')) return <TrendingUp className="w-6 h-6" />;
    if (category.includes('Research')) return <Brain className="w-6 h-6" />;
    if (category.includes('IoT')) return <Shield className="w-6 h-6" />;
    if (category.includes('Supply Chain')) return <Database className="w-6 h-6" />;
    if (category.includes('Quantum')) return <Zap className="w-6 h-6" />;
    if (category.includes('Business')) return <Briefcase className="w-6 h-6" />;
    if (category.includes('Healthcare')) return <Users className="w-6 h-6" />;
    if (category.includes('Marketing')) return <Globe className="w-6 h-6" />;
    if (category.includes('Cloud')) return <Cloud className="w-6 h-6" />;
    if (category.includes('Legal')) return <Scale className="w-6 h-6" />;
    return <Rocket className="w-6 h-6" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Ultimate Innovative Services 2025 | Zion Tech Group"
        description="Discover our revolutionary AI-powered, quantum-secure, and autonomous business solutions. Transform your business with cutting-edge technology."
        keywords="AI services, quantum computing, autonomous systems, cybersecurity, business automation, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ultimate Innovative
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Services 2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Revolutionary AI-powered, quantum-secure, and autonomous business solutions that transform industries and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-y border-blue-400/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-300">Phone</p>
                <a href="tel:+13024640950" className="text-blue-400 font-semibold hover:text-blue-300">
                  +1 302 464 0950
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-5 h-5 text-purple-400" />
              <div>
                <p className="text-sm text-gray-300">Email</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 font-semibold hover:text-purple-300">
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-5 h-5 text-pink-400" />
              <div>
                <p className="text-sm text-gray-300">Address</p>
                <p className="text-pink-400 font-semibold">
                  364 E Main St STE 1008<br />Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search innovative services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
                <div className="absolute right-3 top-3 text-gray-400">
                  <Search className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-slate-800 text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 group"
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color}`}>
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-400">{service.category}</p>
                  </div>
                </div>
                {service.popular && (
                  <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold rounded-full">
                    Popular
                  </span>
                )}
              </div>

              {/* Tagline */}
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                {service.tagline}
              </p>

              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <Star className="w-4 h-4 mr-2 text-yellow-400" />
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing and ROI */}
              <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-white">{service.price}</span>
                  <span className="text-gray-400">{service.period}</span>
                </div>
                <p className="text-sm text-gray-300 mb-2">
                  <strong>ROI:</strong> {service.roi}
                </p>
                <p className="text-xs text-gray-400">
                  <strong>Market Size:</strong> {service.marketSize} | <strong>Growth:</strong> {service.growthRate}
                </p>
              </div>

              {/* Technology Stack */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technology.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-md border border-blue-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Special Features */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Special Features</h4>
                <div className="flex flex-wrap gap-2">
                  {service.specialFeatures.slice(0, 3).map((feature, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-md border border-purple-400/30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Industry Focus */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Industry Focus</h4>
                <div className="flex flex-wrap gap-2">
                  {service.industryFocus.slice(0, 3).map((industry, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-md border border-green-400/30"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>

              {/* Compliance */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Compliance & Security</h4>
                <div className="flex flex-wrap gap-2">
                  {service.compliance.slice(0, 3).map((compliance, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded-md border border-red-400/30"
                    >
                      {compliance}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to={`/services/${service.id}`}
                  className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-3 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Contact Information */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-center">
                  <p className="text-sm text-gray-400 mb-2">Ready to get started?</p>
                  <div className="flex flex-col sm:flex-row gap-2 text-sm">
                    <a
                      href="tel:+13024640950"
                      className="inline-flex items-center justify-center px-3 py-2 bg-green-600/20 text-green-300 rounded-md border border-green-400/30 hover:bg-green-600/30 transition-colors"
                    >
                      <Phone className="w-3 h-3 mr-1" />
                      Call Now
                    </a>
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="inline-flex items-center justify-center px-3 py-2 bg-blue-600/20 text-blue-300 rounded-md border border-blue-400/30 hover:bg-blue-600/30 transition-colors"
                    >
                      <Mail className="w-3 h-3 mr-1" />
                      Email Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 text-xl mb-4">
              No services found matching your criteria
            </div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-t border-blue-400/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the future of business with our revolutionary AI-powered, quantum-secure, and autonomous solutions. 
              Get in touch today to discover how we can help you achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Your Transformation
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Speak with an Expert
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Search icon component
const Search = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);