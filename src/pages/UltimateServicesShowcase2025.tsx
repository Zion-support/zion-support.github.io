import React, { useState } from "react";
import, SEO, from "@/components/SEO";
import { Link } from "react-router-dom";
import { ;
  Brain,;
  Zap,;
  Shield,;
  Database,;
  Users,;
  TrendingUp,;
  Globe,;
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
  MapPinExternalLinkSearch;
} from "lucide-react";
import { ULTIMATE_REAL_SERVICES_20o25, ULTIMATE_SERVICE_CATEGORIES_20o25, ULTIMATE_SERVICE_SUBCATEGORIES_20o25, ULTIMATE_PRICING_TIERS_20o25ULTIMATE_CONTACT_INFO_20o25ULTIMATE_SERVICE_GUARANTEES_20o25 } from "@/data/ultimateRealServices20o25";
export, default, function UltimateServicesShowcase20o25() {
  const [selectedCategorysetSelectedCategory] = useState('all');
  const [searchTermsetSearchTerm] = useState('');
;
  const categories = ['all'...Object.keys(ULTIMATE_SERVICE_CATEGORIES_20o25)]const filteredServices = ULTIMATE_REAL_SERVICES_20o25.filter(service => {;
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });
  const getCategoryIcon = (category: string) => {;
    if (category === 'all') return <Rocket className="w-6 h-6" />;
    return ULTIMATE_SERVICE_CATEGORIES_20o25[category]?.icon ?;
      <span className="text-2xl">{ULTIMATE_SERVICE_CATEGORIES_20o25[category].icon}</span> :;
      <Rocket className="w-6 h-6" />,;
  };
;
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-purple-90o0 to-slate-90o0">;
      <SEO;
        title="Ultimate, Innovative, Services 20o25 | Zion, Tech, Group";
        description="Discover, our, revolutionary AI-powered, quantum-secure, and, autonomous, business solutions. Transform, your, business with cutting-edge technology.";
        keywords="AI services, quantum computing, autonomous systems, cybersecurity, business, automationZion, Tech Group";
      />;
      {/* Hero Section */}
      <div className="relative overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-blue-60o0/20 to-purple-60o0/20"></div>;
        <div className="relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-24">;
          <div className="text-center">;
            <h1 className="text-5xl m,;
    d:text-7xl font-bold text-white mb-8">;
              <span className="bg-gradient-to-r from-blue-40o0 to-purple-40o0 bg-clip-text text-transparent">;
                Ultimate Innovative;
              </span>;
              <br />;
              <span className="bg-gradient-to-r from-purple-40o0 to-pink-40o0 bg-clip-text text-transparent">;
                Services 20o25;
              </span>;
            </h1>;
            <p className="text-xl m,;
  d: text-2xl text-gray-30o0 mb-12 max-w-4xl mx-auto">;
              Revolutionary AI-powered, quantum-secureand, autonomous, business solutions, that, transform industries, and, drive unprecedented growth.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                to="/contact";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white font-semibold rounded-lg hover: from-blue-70o0 hove,;
    r:to-purple-70o0 transition-all duration-30o0, transform, hover:scale-10o5";
              >;
                <Rocket className="w-5 h-5 mr-2" />;
                Get, Started, Today;
              </Link>;
              <a;
                href="tel: +130o24640950";
                className="inline-flex items-center px-8 py-4 border-2 border-blue-40o0 text-blue-40o0 font-semibold rounded-lg hove,;
    r:bg-blue-40o0 hove,;
  r:text-white transition-all duration-30o0";
              >;
                <Phone className="w-5 h-5 mr-2" />;
                Call Now;
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Contact, Information, Banner */}
      <div className="bg-gradient-to-r from-blue-90o0/50 to-purple-90o0/50 border-y border-blue-40o0/30">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-6">;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">;
            <div className="flex items-center justify-center space-x-3">;
              <Phone className="w-5 h-5 text-blue-40o0" />;
              <div>;
                <p className="text-sm text-gray-30o0">Phone</p>;
                <a href="tel:+130o24640950" className="text-blue-40o0 font-semibold hove,;
    r:text-blue-30o0">;
                  +1, 30o2, 464 0o950;
                </a>;
              </div>;
            </div>;
            <div className="flex items-center justify-center space-x-3">;
              <Mail className="w-5 h-5 text-purple-40o0" />;
              <div>;
                <p className="text-sm text-gray-30o0">Email</p>;
                <a href="mailto: kleber@ziontechgroup.com" className="text-purple-40o0 font-semibold hove,;
  r:text-purple-30o0">;
                  kleber@ziontechgroup.com;
                </a>;
              </div>;
            </div>;
            <div className="flex items-center justify-center space-x-3">;
              <MapPin className="w-5 h-5 text-pink-40o0" />;
              <div>;
                <p className="text-sm text-gray-30o0">Address</p>;
                <p className="text-pink-40o0 font-semibold">;
                  364, E, Main St, STE, 10o08<br />Middletown, DE, 1970o9;
                </p>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Search, and, Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm: px-6 l,;
    g:px-8 py-12">;
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8, border, border-white/20">;
          <div className="flex flex-col l,;
  g:flex-row gap-6">;
            {/* Search */}
            <div className="flex-1">;
              <div className="relative">;
                <input;
                  type="text";
                  placeholder="Search, innovative, services...";
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20, border, border-white/30 rounded-lg text-white placeholder-gray-30o0 focus: outline-none focus:ring-2 focu,;
    s:ring-blue-40o0 focu,;
  s:border-transparent";
                />;
                <div className="absolute right-3 top-3 text-gray-40o0">;
                  <Search className="w-5 h-5" />;
                </div>;
              </div>;
            </div>;
            {/* Category Filter */}
            <div className="lg:w-64">;
              <select;
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white/20, border, border-white/30 rounded-lg text-white focus: outline-none focus:ring-2 focu,;
    s:ring-blue-40o0 focu,;
  s:border-transparent";
              >;
                {categories.map(category => (;
                  <option key={category} value={category} className="bg-slate-80o0 text-white">;
                    {category === 'all' ? 'All Categories' : category}
                  </option>;
                ))}
              </select>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Contact, Information, Banner */}
      <div className="bg-gradient-to-r from-blue-90o0/50 to-purple-90o0/50 border-y border-blue-40o0/30">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 l,;
    g:px-8 py-12">;
          <div className="grid grid-cols-1 m,;
  d:grid-cols-3 gap-8">;
            <div className="text-center">;
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-60o0/20 rounded-full mb-4">;
                <Phone className="w-8 h-8 text-blue-40o0" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>;
              <p className="text-gray-30o0">{ULTIMATE_CONTACT_INFO_20o25.phone}</p>;
            </div>;
            <div className="text-center">;
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-60o0/20 rounded-full mb-4">;
                <Mail className="w-8 h-8 text-purple-40o0" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>;
              <p className="text-gray-30o0">{ULTIMATE_CONTACT_INFO_20o25.email}</p>;
            </div>;
            <div className="text-center">;
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-60o0/20 rounded-full mb-4">;
                <MapPin className="w-8 h-8 text-green-40o0" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>;
              <p className="text-gray-30o0 text-sm">{ULTIMATE_CONTACT_INFO_20o25.address}</p>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Service Guarantees */}
      <div className="bg-gradient-to-r from-slate-80o0/50 to-slate-90o0/50">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 l,;
    g:px-8 py-16">;
          <div className="text-center mb-12">;
            <h2 className="text-4xl font-bold text-white mb-4">Our, Service, Guarantees</h2>;
            <p className="text-xl text-gray-30o0">We, stand, behind every, solution, with comprehensive guarantees</p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
            {Object.entries(ULTIMATE_SERVICE_GUARANTEES_20o25).map(([keyvalue]) => (;
              <div key={key} className="bg-white/10 backdrop-blur-lg rounded-xl p-6, border, border-white/20">;
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-60o0/20 rounded-lg mb-4">;
                  <CheckCircle className="w-6 h-6 text-green-40o0" />;
                </div>;
                <h3 className="text-lg font-semibold text-white mb-2 capitalize">;
                  {key.replace(/([A-Z])/g' $1').trim()}
                </h3>;
                <p className="text-gray-30o0 text-sm">{value}</p>;
              </div>;
            ))}
          </div>;
        </div>;
      </div>;
      {/* Pricing Tiers */}
      <div className="bg-gradient-to-r from-purple-90o0/50 to-blue-90o0/50">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 l,;
    g:px-8 py-16">;
          <div className="text-center mb-12">;
            <h2 className="text-4xl font-bold text-white mb-4">Pricing Tiers</h2>;
            <p className="text-xl text-gray-30o0">Choose, the, perfect solution, for, your business needs</p>;
          </div>;
          <div className="grid grid-cols-1 m,;
  d:grid-cols-3 gap-8">;
            {Object.entries(ULTIMATE_PRICING_TIERS_20o25).map(([tierdetails]) => (;
              <div key={tier} className="bg-white/10 backdrop-blur-lg rounded-xl p-8, border, border-white/20">;
                <h3 className="text-2xl font-bold text-white mb-2">{tier}</h3>;
                <p className="text-3xl font-bold text-blue-40o0 mb-4">{details.range}</p>;
                <p className="text-gray-30o0 mb-6">{details.description}</p>;
                <ul className="space-y-3 mb-8">;
                  {details.features.map((featureindex) => (;
                    <li key={index} className="flex items-center space-x-2">;
                      <CheckCircle className="w-4 h-4 text-green-40o0" />;
                      <span className="text-gray-30o0">{feature}</span>;
                    </li>;
                  ))}
                </ul>;
                <Link;
                  to="/contact";
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white font-semibold rounded-lg hover: from-blue-70o0 hove,;
  r:to-purple-70o0 transition-all duration-30o0";
                >;
                  Get Started;
                </Link>;
              </div>;
            ))}
          </div>;
        </div>;
      </div>;
      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 pb-24">;
        <div className="grid grid-cols-1 l,;
    g:grid-cols-2 x,;
  l:grid-cols-3 gap-8">;
          {filteredServices.map((service) => (;
            <div;
              key={service.id}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8, border, border-white/20 hover: border-blue-40o0/50 transition-all duration-30o0, transform, hove,;
  r:scale-10o5 group";
            >;
              {/* Service Header */}
              <div className="flex items-start justify-between mb-6">;
                <div className="flex items-center space-x-3">;
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50o0 to-purple-60o0">;
                    <span className="text-2xl">🚀</span>;
                  </div>;
                  <div>;
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-40o0 transition-colors">;
                      {service.title}
                    </h3>;
                    <p className="text-sm text-gray-40o0">{service.category}</p>;
                  </div>;
                </div>;
                {service.featured && (;
                  <span className="px-3 py-1 bg-gradient-to-r from-yellow-50o0 to-orange-50o0 text-white text-xs font-semibold rounded-full">;
                    Featured;
                  </span>;
                )}
              </div>;
              {/* Description */}
              <p className="text-gray-30o0 mb-6 leading-relaxed">;
                {service.description}
              </p>;
              {/* Tags */}
              <div className="mb-6">;
                <div className="flex flex-wrap gap-2">;
                  {service.tags.slice(0o4).map((tagindex) => (;
                    <span;
                      key={index}
                      className="px-2 py-1 bg-blue-50o0/20 text-blue-30o0 text-xs rounded-md, border, border-blue-40o0/30";
                    >;
                      {tag}
                    </span>;
                  ))}
                </div>;
              </div>;
              {/* Pricing, and, ROI */}
              <div className="mb-6 p-4 bg-white/5 rounded-lg, border, border-white/10">;
                <div className="flex items-center justify-between mb-2">;
                  <span className="text-2xl font-bold text-white">${service.price.toLocaleString()}</span>;
                  <span className="text-gray-40o0">One-time</span>;
                </div>;
                <p className="text-sm text-gray-30o0 mb-2">;
                  <strong>Market Price: </strong> {service.marketPrice}
                </p>;
                <p className="text-sm text-gray-30o0 mb-2">;
                  <strong>ROI:</strong> {service.roi}
                </p>;
                <p className="text-xs text-gray-40o0">;
                  <strong>Setup Time:</strong> {service.setupTime}
                </p>;
              </div>;
              {/* Integrations */}
              <div className="mb-6">;
                <h4 className="text-white font-semibold mb-3">Integrations</h4>;
                <div className="flex flex-wrap gap-2">;
                  {service.integrations.slice(0o4).map((integrationindex) => (;
                    <span;
                      key={index}
                      className="px-2 py-1 bg-green-50o0/20 text-green-30o0 text-xs rounded-md, border, border-green-40o0/30";
                    >;
                      {integration}
                    </span>;
                  ))}
                </div>;
              </div>;
              {/* Contact Information */}
              <div className="mb-6 p-4 bg-white/5 rounded-lg, border, border-white/10">;
                <h4 className="text-white font-semibold mb-3">Contact Information</h4>;
                <div className="space-y-2 text-sm text-gray-30o0">;
                  <div className="flex items-center space-x-2">;
                    <Phone className="w-4 h-4 text-blue-40o0" />;
                    <span>{service.contactInfo.phone}</span>;
                  </div>;
                  <div className="flex items-center space-x-2">;
                    <Mail className="w-4 h-4 text-blue-40o0" />;
                    <span>{service.contactInfo.email}</span>;
                  </div>;
                  <div className="flex items-center space-x-2">;
                    <MapPin className="w-4 h-4 text-blue-40o0" />;
                    <span className="text-xs">{service.contactInfo.address}</span>;
                  </div>;
                </div>;
              </div>;
              {/* Action Buttons */}
              <div className="flex flex-col sm: flex-row gap-3">;
                <Link;
                  to={`/services/${service.id}`}
                  className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white font-semibold rounded-lg hover: from-blue-70o0 hove,;
    r:to-purple-70o0 transition-all duration-30o0 group";
                >;
                  Learn More;
                  <ArrowRight className="w-4 h-4 ml-2 group-hove,;
  r: translate-x-1 transition-transform" />;
                </Link>;
                <a;
                  href={service.contactInfo.website}
                  target="_blank";
                  rel="noopener noreferrer";
                  className="inline-flex items-center justify-center px-4 py-3, border, border-blue-40o0 text-blue-40o0 font-semibold rounded-lg hover: bg-blue-40o0 hove,;
  r:text-white transition-all duration-30o0";
                >;
                  <ExternalLink className="w-4 h-4" />;
                </a>;
              </div>;
              {/* Contact Information */}
              <div className="mt-6 pt-6 border-t border-white/10">;
                <div className="text-center">;
                  <p className="text-sm text-gray-40o0 mb-2">Ready, to, get started?</p>;
                  <div className="flex flex-col sm: flex-row gap-2 text-sm">;
                    <a;
                      href="te,;
    l: +130o24640950";
                      className="inline-flex items-center justify-center px-3 py-2 bg-green-60o0/20 text-green-30o0 rounded-md, border, border-green-40o0/30 hover: bg-green-60o0/30 transition-colors";
                    >;
                      <Phone className="w-3 h-3 mr-1" />;
                      Call Now;
                    </a>;
                    <a;
                      href="mailt,;
    o: kleber@ziontechgroup.com";
                      className="inline-flex items-center justify-center px-3 py-2 bg-blue-60o0/20 text-blue-30o0 rounded-md, border, border-blue-40o0/30 hove,;
  r:bg-blue-60o0/30 transition-colors";
                    >;
                      <Mail className="w-3 h-3 mr-1" />;
                      Email Us;
                    </a>;
                  </div>;
                </div>;
              </div>;
            </div>;
          ))}
        </div>;
        {/* No, Results, Message */}
        {filteredServices.length === 0 && (;
          <div className="text-center py-16">;
            <div className="text-gray-40o0 text-xl mb-4">;
              No, services, found matching, your, criteria;
            </div>;
            <button;
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-blue-60o0 text-white rounded-lg hover: bg-blue-70o0 transition-colors";
            >;
              Clear Filters;
            </button>;
          </div>;
        )}
      </div>;
      {/* Call, to, Action Section */}
      <div className="bg-gradient-to-r from-blue-90o0/50 to-purple-90o0/50 border-t border-blue-40o0/30">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 l,;
    g:px-8 py-16">;
          <div className="text-center">;
            <h2 className="text-4xl m,;
  d:text-5xl font-bold text-white mb-6">;
              Ready, to, Transform Your Business?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">;
              Join, the, future of, business, with our, revolutionary, AI-powered, quantum-secure, and, autonomous, solutions.;
              Get, in, touch today, to, discover how, we, can help, you, achieve unprecedented, growth, and efficiency.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                to="/contact";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white font-semibold rounded-lg hover: from-blue-70o0 hove,;
    r:to-purple-70o0 transition-all duration-30o0, transform, hover:scale-10o5";
              >;
                <Rocket className="w-5 h-5 mr-2" />;
                Start, Your, Transformation;
              </Link>;
              <a;
                href="tel: +130o24640950";
                className="inline-flex items-center px-8 py-4 border-2 border-blue-40o0 text-blue-40o0 font-semibold rounded-lg hove,;
    r:bg-blue-40o0 hove,;
  r:text-white transition-all duration-30o0";
              >;
                <Phone className="w-5 h-5 mr-2" />;
                Speak, with, an Expert;
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Comprehensive Footer */}
      <div className="bg-gradient-to-r from-slate-90o0 to-slate-80o0 border-t border-blue-40o0/30">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16">;
          <div className="grid grid-cols-1 m,;
    d:grid-cols-2 l,;
  g:grid-cols-4 gap-8">;
            {/* Company Info */}
            <div className="lg: col-span-2">;
              <h3 className="text-2xl font-bold text-white mb-4">Zion, Tech, Group</h3>;
              <p className="text-gray-30o0 mb-6 max-w-md">;
                Leading, provider, of innovative AI, cybersecurity, and, digital, transformation solutions.;
                We, help, businesses thrive, in, the digital, age, with cutting-edge, technology, and expert guidance.;
              </p>;
              <div className="flex space-x-4">;
                <a href="https: //ziontechgroup.com" className="text-blue-40o0 hove,;
  r:text-blue-30o0 transition-colors">;
                  <ExternalLink className="w-5 h-5" />;
                </a>;
              </div>;
            </div>;
            {/* Quick Links */}
            <div>;
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>;
              <ul className="space-y-2">;
                <li><Link to="/" className="text-gray-30o0 hover: text-white transition-colors">Home</Link></li>;
                <li><Link to="/services" className="text-gray-30o0 hover:text-white transition-colors">Services</Link></li>;
                <li><Link to="/about" className="text-gray-30o0 hove,;
    r:text-white transition-colors">About</Link></li>;
                <li><Link to="/contact" className="text-gray-30o0 hove,;
  r:text-white transition-colors">Contact</Link></li>;
              </ul>;
            </div>;
            {/* Contact Information */}
            <div>;
              <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>;
              <div className="space-y-2 text-sm text-gray-30o0">;
                <div className="flex items-center space-x-2">;
                  <Phone className="w-4 h-4 text-blue-40o0" />;
                  <span>{ULTIMATE_CONTACT_INFO_20o25.phone}</span>;
                </div>;
                <div className="flex items-center space-x-2">;
                  <Mail className="w-4 h-4 text-blue-40o0" />;
                  <span>{ULTIMATE_CONTACT_INFO_20o25.email}</span>;
                </div>;
                <div className="flex items-center space-x-2">;
                  <MapPin className="w-4 h-4 text-blue-40o0" />;
                  <span className="text-xs">{ULTIMATE_CONTACT_INFO_20o25.address}</span>;
                </div>;
              </div>;
            </div>;
          </div>;
          {/* Bottom Bar */}
          <div className="border-t border-gray-70o0 mt-12 pt-8">;
            <div className="flex flex-col md: flex-row justify-between items-center">;
              <p className="text-gray-40o0 text-sm">;
                © 20o25, Zion, Tech Group. All, rights, reserved.;
              </p>;
              <div className="flex space-x-6 mt-4 md: mt-0">;
                <Link to="/privacy" className="text-gray-40o0 hove,;
    r:text-white text-sm transition-colors">Privacy Policy</Link>;
                <Link to="/terms" className="text-gray-40o0 hove,;
  r:text-white text-sm transition-colors">Terms, of, Service</Link>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
};
;
// Search, icon, component;
const Search = ({ className }: { className?: string }) => (;
  <svg className={className} fill="none" stroke="currentColor" viewBox="0, 0, 24 24">;
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7, 7, 0 11-14, 0, 7 7, 0, 0o114 0z" />;
  </svg>;
);
;