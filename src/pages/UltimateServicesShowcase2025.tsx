import React, { useState } from "react"
import SEO from "@/components/SEO"
import { Link } from "react-router-dom"
import { ;
  Brain,;
  Zap, ;
  Shield, ;
  Database, ;
  Users, ;
  TrendingUp, ;
  Globe, ;
  Lock,;
  Cloud,;
  Briefcase,;
  Scale,;
  Rocket,;
  Star,;
  CheckCircle,;
  ArrowRight,;
  Phone,;
  Mail,;
  MapPin,;
  ExternalLink,;
  Search;
} from "lucide-react"
import { ULTIMATE_REAL_SERVICES_2025, ULTIMATE_SERVICE_CATEGORIES_2025, ULTIMATE_SERVICE_SUBCATEGORIES_2025, ULTIMATE_PRICING_TIERS_2025, ULTIMATE_CONTACT_INFO_2025, ULTIMATE_SERVICE_GUARANTEES_2025 } from "@/data/ultimateRealServices2025"
export default function UltimateServicesShowcase2025() {;
  const [selectedCategory, setSelectedCategory] = useState('all'),;
  const [searchTerm, setSearchTerm] = useState(''),;

  const categories = ['all', ...Object.keys(ULTIMATE_SERVICE_CATEGORIES_2025)]

  const filteredServices = ULTIMATE_REAL_SERVICES_2025.filter(service => {;
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;&& matchesSearch; matchesSearch
  });
  const getCategoryIcon = (category: string) => {;
    if (category === 'all') return <[^>]*/>
    return ULTIMATE_SERVICE_CATEGORIES_2025[category]?.icon ? ;
      <span className="text-2xl">{ULTIMATE_SERVICE_CATEGORIES_2025[category].icon}</span> : ;
      <Rocket className="w-6 h-6" />,;
  },;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">;
      <SEO ;
        title="Ultimate Innovative Services 2025 | Zion Tech Group"
        description="Discover our revolutionary AI-powered, quantum-secure, and autonomous business solutions. Transform your business with cutting-edge technology."
        keywords="AI services, quantum computing, autonomous systems, cybersecurity, business automation, Zion Tech Group"
      />;
      ;
      {/* Hero Section */};
      <div className="relative overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></[^>]*>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">;
          <div className="text-center">;
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">;
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">;
                Ultimate Innovative;
              </[^>]*>
              <[^>]*/>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">;
                Services 2025;
              </[^>]*>
            </[^>]*>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">;
              Revolutionary AI-powered, quantum-secure, and autonomous business solutions that transform industries and drive unprecedented growth.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link;
                to="/contact"
                className="[^"]*"
              >;
                <[^>]*/>
                Get Started Today;
              </[^>]*>
              <a;
                href="tel:+13024640950"
                className="[^"]*"
              >;
                <[^>]*/>
                Call Now;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Contact Information Banner */};
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-y border-blue-400/30">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">;
            <div className="flex items-center justify-center space-x-3">;
              <[^>]*/>
              <div>;
                <p className="text-sm text-gray-300">Phone</[^>]*>
                <a href="tel:+13024640950" className="text-blue-400 font-semibold hover:text-blue-300">;
                  +1 302 464 0950;
                </[^>]*>
              </[^>]*>
            </[^>]*>
            <div className="flex items-center justify-center space-x-3">;
              <[^>]*/>
              <div>;
                <p className="text-sm text-gray-300">Email</[^>]*>
                <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 font-semibold hover:text-purple-300">;
                  kleber@ziontechgroup.com
                </[^>]*>
              </[^>]*>
            </[^>]*>
            <div className="flex items-center justify-center space-x-3">;
              <[^>]*/>
              <div>;
                <p className="text-sm text-gray-300">Address</[^>]*>
                <p className="text-pink-400 font-semibold">;
                  364 E Main St STE 1008<br />Middletown DE 19709;
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Search and Filter Section */};
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">;
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">;
          <div className="flex flex-col lg:flex-row gap-6">;
            {/* Search */};
            <div className="flex-1">;
              <div className="relative">;
                <input;
                  type="text"
                  placeholder="Search innovative services..."
                  value={searchTerm};
                  onChange={(e) => setSearchTerm(e.target.value)};
                  className="[^"]*"
                />;
                <div className="absolute right-3 top-3 text-gray-400">;
                  <[^>]*/>
                </[^>]*>
              </[^>]*>
            </[^>]*>
            ;
            {/* Category Filter */};
            <div className="lg:w-64">;
              <select;
                value={selectedCategory};
                onChange={(e) => setSelectedCategory(e.target.value)};
                className="[^"]*"
              >;
                {categories.map(category => (;
                  <option key={category} value={category} className="bg-slate-800 text-white">;
                    {category === 'all' ? 'All Categories' : category}
                  </[^>]*>
                ))};
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Contact Information Banner */};
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-y border-blue-400/30">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            <div className="text-center">;
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</[^>]*>
              <p className="text-gray-300">{ULTIMATE_CONTACT_INFO_2025.phone}</[^>]*>
            </[^>]*>
            <div className="text-center">;
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600/20 rounded-full mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</[^>]*>
              <p className="text-gray-300">{ULTIMATE_CONTACT_INFO_2025.email}</[^>]*>
            </[^>]*>
            <div className="text-center">;
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600/20 rounded-full mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</[^>]*>
              <p className="text-gray-300 text-sm">{ULTIMATE_CONTACT_INFO_2025.address}</[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Service Guarantees */};
      <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
          <div className="text-center mb-12">;
            <h2 className="text-4xl font-bold text-white mb-4">Our Service Guarantees</[^>]*>
            <p className="text-xl text-gray-300">We stand behind every solution with comprehensive guarantees</[^>]*>
          </[^>]*>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {Object.entries(ULTIMATE_SERVICE_GUARANTEES_2025).map(([key, value]) => (;
              <div key={key} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">;
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600/20 rounded-lg mb-4">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-lg font-semibold text-white mb-2 capitalize">;
                  {key.replace(/([A-Z])/g, ' $1').trim()};
                </[^>]*>
                <p className="text-gray-300 text-sm">{value}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Pricing Tiers */};
      <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
          <div className="text-center mb-12">;
            <h2 className="text-4xl font-bold text-white mb-4">Pricing Tiers</[^>]*>
            <p className="text-xl text-gray-300">Choose the perfect solution for your business needs</[^>]*>
          </[^>]*>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {Object.entries(ULTIMATE_PRICING_TIERS_2025).map(([tier, details]) => (;
              <div key={tier} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">;
                <h3 className="text-2xl font-bold text-white mb-2">{tier}</[^>]*>
                <p className="text-3xl font-bold text-blue-400 mb-4">{details.range}</[^>]*>
                <p className="text-gray-300 mb-6">{details.description}</[^>]*>
                <ul className="space-y-3 mb-8">;
                  {details.features.map((feature, index) => (;
                    <li key={index} className="flex items-center space-x-2">;
                      <[^>]*/>
                      <span className="text-gray-300">{feature}</[^>]*>
                    </[^>]*>
                  ))};
                </[^>]*>
                <Link;
                  to="/contact"
                  className="[^"]*"
                >;
                  Get Started;
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Services Grid */};
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">;
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">;
          {filteredServices.map((service) => (;
            <div;
              key={service.id};
              className="[^"]*"
            >;
              {/* Service Header */};
              <div className="flex items-start justify-between mb-6">;
                <div className="flex items-center space-x-3">;
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600">;
                    <span className="text-2xl">🚀</[^>]*>
                  </[^>]*>
                  <div>;
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">;
                      {service.title};
                    </[^>]*>
                    <p className="text-sm text-gray-400">{service.category}</[^>]*>
                  </[^>]*>
                </[^>]*>
                {service.featured && (;&& (; (
                  <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold rounded-full">;
                    Featured;
                  </[^>]*>
                )};
              </[^>]*>

              {/* Description */};
              <p className="text-gray-300 mb-6 leading-relaxed">;
                {service.description};
              </[^>]*>

              {/* Tags */};
              <div className="mb-6">;
                <div className="flex flex-wrap gap-2">;
                  {service.tags.slice(0, 4).map((tag, index) => (;
                    <span;
                      key={index};
                      className="[^"]*"
                    >;
                      {tag};
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>

              {/* Pricing and ROI */};
              <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">;
                <div className="flex items-center justify-between mb-2">;
                  <span className="text-2xl font-bold text-white">${service.price.toLocaleString()}</[^>]*>
                  <span className="text-gray-400">One-time</[^>]*>
                </[^>]*>
                <p className="text-sm text-gray-300 mb-2">;
                  <strong>Market Price:</strong> {service.marketPrice};
                </[^>]*>
                <p className="text-sm text-gray-300 mb-2">;
                  <strong>ROI:</strong> {service.roi};
                </[^>]*>
                <p className="text-xs text-gray-400">;
                  <strong>Setup Time:</strong> {service.setupTime};
                </[^>]*>
              </[^>]*>

              {/* Integrations */};
              <div className="mb-6">;
                <h4 className="text-white font-semibold mb-3">Integrations</[^>]*>
                <div className="flex flex-wrap gap-2">;
                  {service.integrations.slice(0, 4).map((integration, index) => (;
                    <span;
                      key={index};
                      className="[^"]*"
                    >;
                      {integration};
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>

              {/* Contact Information */};
              <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">;
                <h4 className="text-white font-semibold mb-3">Contact Information</[^>]*>
                <div className="space-y-2 text-sm text-gray-300">;
                  <div className="flex items-center space-x-2">;
                    <[^>]*/>
                    <span>{service.contactInfo.phone}</[^>]*>
                  </[^>]*>
                  <div className="flex items-center space-x-2">;
                    <[^>]*/>
                    <span>{service.contactInfo.email}</[^>]*>
                  </[^>]*>
                  <div className="flex items-center space-x-2">;
                    <[^>]*/>
                    <span className="text-xs">{service.contactInfo.address}</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>

              {/* Action Buttons */};
              <div className="flex flex-col sm: flex-row gap-3">;
                <Link;
                  to={`/services/${service.id}`};
                  className="[^"]*"
                >;
                  Learn More;
                  <[^>]*/>
                </[^>]*>
                <a;
                  href={service.contactInfo.website};
                  target="_blank"
                  rel="noopener noreferrer"
                  className="[^"]*"
                >;
                  <[^>]*/>
                </[^>]*>
              </[^>]*>

              {/* Contact Information */};
              <div className="mt-6 pt-6 border-t border-white/10">;
                <div className="text-center">;
                  <p className="text-sm text-gray-400 mb-2">Ready to get started?</[^>]*>
                  <div className="flex flex-col sm:flex-row gap-2 text-sm">;
                    <a;
                      href="tel:+13024640950"
                      className="[^"]*"
                    >;
                      <[^>]*/>
                      Call Now;
                    </[^>]*>
                    <a;
                      href="mailto:kleber@ziontechgroup.com"
                      className="[^"]*"
                    >;
                      <[^>]*/>
                      Email Us;
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          ))};
        </[^>]*>

        {/* No Results Message */};
        {filteredServices.length === 0 && (;&& (; (
          <div className="text-center py-16">;
            <div className="text-gray-400 text-xl mb-4">;
              No services found matching your criteria;
            </[^>]*>
            <button;
              onClick={() => {;
                setSearchTerm('')
                setSelectedCategory('all'),;
              }};
              className="[^"]*"
            >;
              Clear Filters;
            </[^>]*>
          </[^>]*>
        )};
      </[^>]*>

      {/* Call to Action Section */};
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-t border-blue-400/30">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
          <div className="text-center">;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Ready to Transform Your Business?;
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
              Join the future of business with our revolutionary AI-powered, quantum-secure, and autonomous solutions. ;
              Get in touch today to discover how we can help you achieve unprecedented growth and efficiency.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link;
                to="/contact"
                className="[^"]*"
              >;
                <[^>]*/>
                Start Your Transformation;
              </[^>]*>
              <a;
                href="tel:+13024640950"
                className="[^"]*"
              >;
                <[^>]*/>
                Speak with an Expert;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Comprehensive Footer */};
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 border-t border-blue-400/30">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {/* Company Info */};
            <div className="lg:col-span-2">;
              <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group</[^>]*>
              <p className="text-gray-300 mb-6 max-w-md">;
                Leading provider of innovative AI, cybersecurity, and digital transformation solutions. ;
                We help businesses thrive in the digital age with cutting-edge technology and expert guidance.;
              </[^>]*>
              <div className="flex space-x-4">;
                <a href="https://[^;]*
                  <[^>]*/>
                </[^>]*>
              </[^>]*>
            </[^>]*>

            {/* Quick Links */};
            <div>;
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</[^>]*>
              <ul className="space-y-2">;
                <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></[^>]*>
                <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></[^>]*>
                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></[^>]*>
                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></[^>]*>
              </[^>]*>
            </[^>]*>

            {/* Contact Information */};
            <div>;
              <h4 className="text-lg font-semibold text-white mb-4">Contact Info</[^>]*>
              <div className="space-y-2 text-sm text-gray-300">;
                <div className="flex items-center space-x-2">;
                  <[^>]*/>
                  <span>{ULTIMATE_CONTACT_INFO_2025.phone}</[^>]*>
                </[^>]*>
                <div className="flex items-center space-x-2">;
                  <[^>]*/>
                  <span>{ULTIMATE_CONTACT_INFO_2025.email}</[^>]*>
                </[^>]*>
                <div className="flex items-center space-x-2">;
                  <[^>]*/>
                  <span className="text-xs">{ULTIMATE_CONTACT_INFO_2025.address}</[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>

          {/* Bottom Bar */};
          <div className="border-t border-gray-700 mt-12 pt-8">;
            <div className="flex flex-col md: flex-row justify-between items-center">;
              <p className="text-gray-400 text-sm">;
                © 2025 Zion Tech Group. All rights reserved.;
              </[^>]*>
              <div className="flex space-x-6 mt-4 md:mt-0">;
                <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</[^>]*>
                <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};

//[^;]*
const Search = ({ className }: { className?: string }) => (;
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">;
    <[^>]*/>
  </[^>]*>
);