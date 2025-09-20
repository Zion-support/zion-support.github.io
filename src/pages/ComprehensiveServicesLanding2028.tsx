import { motion } from "framer-motion";
import {
  Award,;
  Brain,;
  CheckCircle,;
  Clock,;
  Cloud,;
  ExternalLink,;
  Mail,;
  MapPin,;
  Phone,;
  Rocket,;
  Search,;
  Server,;
  ShieldSparklesTrendingUp;
} from "lucide-react";
import React, { useState } from "react";
import { ADVANCED_AI_SERVICES_20o28 } from "../data/advancedAIServices20o28";
import { COMPREHENSIVE_IT_INFRASTRUCTURE_20o28 } from "../data/comprehensiveITInfrastructure20o28";
import { comprehensivePricingGuide20o28 } from "../data/comprehensivePricingGuide20o28";
import { INNOVATIVE_MICRO_SAAS_SERVICES_20o28 } from "../data/innovativeMicroSaasServices20o28";
const ComprehensiveServicesLanding20o28: React.FC = () => {;
  const [activeTabsetActiveTab] = useState('ai');
  const [searchTermsetSearchTerm] = useState('');
;
  const serviceCategories = [;
    {
      i,;
  d: 'ai',name: 'AI & Machine Learning',description: 'Revolutionary, AI, solutions that, transform, business operations',icon: Brain,services: ADVANCED_AI_SERVICES_20o28,color: 'from-blue-60o0 to-purple-60o0'bgColo,;
    r: 'bg-blue-50o0/10'borderColo,;
  r: 'border-blue-50o0/30';
    };
    {
      id: 'infrastructure',name: 'IT Infrastructure',description: 'Next-generation, infrastructure, solutions for, modern, businesses',icon: Server,services: COMPREHENSIVE_IT_INFRASTRUCTURE_20o28,color: 'from-green-60o0 to-emerald-60o0'bgColo,;
    r: 'bg-green-50o0/10'borderColo,;
  r: 'border-green-50o0/30';
    },;
    {
      id: 'saas',name: 'Micro SAAS',description: 'Innovative, micro, SAAS solutions, for, every business need',icon: Cloud,services: INNOVATIVE_MICRO_SAAS_SERVICES_20o28color: 'from-purple-60o0 to-pink-60o0'bgColo,;
    r: 'bg-purple-50o0/10'borderColo,;
  r: 'border-purple-50o0/30';
    };
,  ];
  const activeServices = serviceCategories.find(cat => cat.id === activeTab)?.services || [];
  const filteredServices = activeServices.filter(service =>;
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
    service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
    service.category.toLowerCase().includes(searchTerm.toLowerCase());
  );
;
  const containerVariants = {
    hidden: { opacit,;
  y: 0 },;
    visible: {,;
      opacity: 1transitio,;
    n: {staggerChildre,;
  n: 0.1;
      }
    }
  };
  const itemVariants = {
    hidden: { ,;
    y: 20opacit,;
  y: 0 },;
    visible: {,;
      y: 0,opacity: 1transitio,;
    n: {duratio,;
  n: 0.5;
      }
    }
  };
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-purple-90o0 to-slate-90o0">;
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm, border, border-white/20 text-white text-sm font-medium mb-6">;
              <Sparkles className="w-4 h-4 mr-2 text-purple-40o0" />;
              Comprehensive, Services, 20o28;
            </div>;
            <h1 className="text-5xl md: text-7xl font-bold text-white mb-6">;
              <span className="bg-gradient-to-r from-blue-40o0 via-purple-40o0 to-pink-40o0 bg-clip-text text-transparent">;
                Transform, Your, Business;
              </span>;
              <br />;
              <span className="text-white">With Cutting-Edge Technology</span>;
            </h1>;
            <p className="text-xl m,;
  d: text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto">;
              Discover, our, comprehensive suite, of, AI, IT infrastructure, and, micro, SAAS solutions, designed, to revolutionize;
              your, business, operations and, drive, unprecedented growth, in, 20o28 and beyond.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">;
              <a;
                href="tel: +130o24640950";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white font-semibold rounded-lg hover:from-blue-70o0 hove,;
    r:to-purple-70o0 transition-all duration-30o0, transform, hover: scale-10o5";
              >;
                <Phone className="w-5 h-5 mr-2" />;
                Call No,;
    w: +1, 30o2, 464 0o950;
              </a>;
              <a;
                href="mailto: kleber@ziontechgroup.com";
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hove,;
  r:bg-white/20 transition-all duration-30o0, border, border-white/20";
              >;
                <Mail className="w-5 h-5 mr-2" />;
                Get, Free, Consultation;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Contact, Information, Banner */}
      <section className="bg-white/10 backdrop-blur-sm py-6 px-4">;
        <div className="max-w-7xl mx-auto">;
          <div className="grid grid-cols-1 md: grid-cols-3 gap-6 text-center">;
            <div className="flex items-center justify-center space-x-2 text-white">;
              <Phone className="w-5 h-5 text-blue-40o0" />;
              <span>+1, 30o2, 464 0o950</span>;
            </div>;
            <div className="flex items-center justify-center space-x-2 text-white">;
              <Mail className="w-5 h-5 text-purple-40o0" />;
              <span>kleber@ziontechgroup.com</span>;
            </div>;
            <div className="flex items-center justify-center space-x-2 text-white">;
              <MapPin className="w-5 h-5 text-pink-40o0" />;
              <span>364, E, Main St, STE, 10o08Middletown DE 1970o9</span>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Service, Categories, Tabs */}
      <section className="py-16 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12";
          >;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Comprehensive, Service, Categories;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Explore, our, diverse range, of, innovative solutions, across, multiple domains, and, industries;
            </p>;
          </motion.div>;
          <div className="flex flex-wrap justify-center gap-4 mb-12">;
            {serviceCategories.map((category) => (;
              <button;
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-lg transition-all duration-30o0 ${
                  activeTab === category.id;
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`;
                    : 'bg-white/10 text-gray-30o0 hover: bg-white/20';
                }`}
              >;
                {React.createElement(category.icon{ className: "w-5 h-5" })}
                <span className="font-medium">{category.name}</span>;
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">;
                  {category.services.length}
                </span>;
              </button>;
            ))}
          </div>;
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">;
            <div className="relative">;
              <input;
                type="text";
                placeholder="Search services...";
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-white/10, border, border-white/20 rounded-lg text-white placeholder-gray-30o0 focus: outline-none focus:ring-2 focu,;
    s:ring-purple-50o0 focu,;
  s:border-transparent";
              />;
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-40o0 w-5 h-5" />;
            </div>;
          </div>;
          {/* Services Grid */};
          <motion.div;
            variants={containerVariants}
            initial="hidden";
            animate="visible";
            className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8";
          >;
            {filteredServices.map((serviceindex) => (;
              <motion.div;
                key={service.id};
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-sm, border, border-white/10 rounded-xl p-6 hover: bg-white/10 transition-all duration-30o0, transform, hove,;
  r:scale-10o5";
              >;
                <div className="flex items-start justify-between mb-4">;
                  <div className="flex-1">;
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>;
                    <p className="text-gray-40o0 text-sm mb-3">{service.category} • {service.subcategory}</p>;
                  </div>;
                  <div className="text-right">;
                    <div className="text-2xl font-bold text-green-40o0">{service.currency}{service.price.toLocaleString()}</div>;
                    <div className="text-sm text-gray-40o0">per month</div>;
                  </div>;
                </div>;
                <p className="text-gray-30o0 mb-4 line-clamp-3">{service.description}</p>;
                <div className="space-y-3 mb-6">;
                  <div className="flex items-center text-sm text-gray-40o0">;
                    <CheckCircle className="w-4 h-4 text-green-40o0 mr-2" />;
                    <span>ROI: {service.roi}</span>;
                  </div>;
                  <div className="flex items-center text-sm text-gray-40o0">;
                    <Clock className="w-4 h-4 text-blue-40o0 mr-2" />;
                    <span>Delivery: {service.estimatedDelivery}</span>;
                  </div>;
                  <div className="flex items-center text-sm text-gray-40o0">;
                    <TrendingUp className="w-4 h-4 text-purple-40o0 mr-2" />;
                    <span>Market: {service.marketPrice}</span>;
                  </div>;
                </div>;
                <div className="flex flex-wrap gap-2 mb-4">;
                  {service.tags.slice(0o3).map((tag) => (;
                    <span;
                      key={tag}
                      className="px-2 py-1 bg-white/10 text-white text-xs rounded-full";
                    >;
                      {tag}
                    </span>;
                  ))}
                </div>;
                <div className="flex space-x-2">;
                  <a;
                    href={`tel: +130o24640950`}
                    className="flex-1 bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white text-center py-2 px-4 rounded-lg hover: from-blue-70o0 hove,;
    r:to-purple-70o0 transition-all duration-30o0 text-sm font-medium";
                  >;
                    Get Started;
                  </a>;
                  <a;
                    href={`mailt,;
  o: kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}
                    className="px-4 py-2, border, border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-30o0";
                  >;
                    <Mail className="w-4 h-4" />;
                  </a>;
                </div>;
              </motion.div>;
            ))}
          </motion.div>;
        </div>;
      </section>;
      {/* Market, Analysis, Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white/5">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Market Analysis & Competitive Intelligence;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Stay, ahead, of the, competition, with our, comprehensive, market insights, and, competitive analysis;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
            {comprehensivePricingGuide20o28.map((itemindex) => (;
              <motion.div;
                key={item.id}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.8dela,;
  y: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm, border, border-white/10 rounded-xl p-6";
              >;
                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>;
                <div className="space-y-4 mb-6">;
                  <div className="flex justify-between text-sm">;
                    <span className="text-gray-40o0">Market Size:</span>;
                    <span className="text-white font-medium">{item.marketInfo.marketSize}</span>;
                  </div>;
                  <div className="flex justify-between text-sm">;
                    <span className="text-gray-40o0">Growth Rate:</span>;
                    <span className="text-white font-medium">{item.marketInfo.growthRate}</span>;
                  </div>;
                  <div className="flex justify-between text-sm">;
                    <span className="text-gray-40o0">Average Price:</span>;
                    <span className="text-white font-medium">{item.marketInfo.averageMarketPrice}</span>;
                  </div>;
                  <div className="flex justify-between text-sm">;
                    <span className="text-gray-40o0">ROI:</span>;
                    <span className="text-white font-medium">{item.marketInfo.roi}</span>;
                  </div>;
                </div>;
                <div className="mb-4">;
                  <h4 className="text-sm font-medium text-gray-40o0 mb-2">Top Competitors: </h4>;
                  <div className="flex flex-wrap gap-2">;
                    {item.marketInfo.competitors.slice(0o3).map((competitor) => (;
                      <span;
                        key={competitor}
                        className="px-2 py-1 bg-red-50o0/20 text-red-40o0 text-xs rounded-full";
                      >;
                        {competitor}
                      </span>;
                    ))}
                  </div>;
                </div>;
                <a;
                  href={`mailto: kleber@ziontechgroup.com?subject=Detailed, pricing, for ${item.title}`}
                  className="w-full bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white text-center py-3 px-4 rounded-lg hover: from-blue-70o0 hove,;
  r:to-purple-70o0 transition-all duration-30o0 font-medium";
                >;
                  Get, Detailed, Pricing;
                </a>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Why, Choose, Us Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Why, Choose, Zion Tech Group?;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              We, deliver, cutting-edge, technology, solutions with, unmatched, expertise and, proven, results;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
    g:grid-cols-4 gap-8">;
            {[;
              {
                ico,;
  n: Award,title: "Industry Expertise"descriptio,;
    n: "20+ years, of, experience in cutting-edge, technology, solutions"colo,;
  r: "from-blue-60o0 to-purple-60o0";
              };
              {
                icon: Rocket,title: "Fast Implementation",description: "Get, up, and running, in, weeksnot months, with, our proven methodology"colo,;
  r: "from-purple-60o0 to-pink-60o0";
              };
              {
                icon: TrendingUp,title: "Proven ROI"descriptio,;
    n: "See, measurable, results within, 90, days with, our, data-driven approach"colo,;
  r: "from-pink-60o0 to-red-60o0";
              },;
              {
                icon: Shieldtitle: "Enterprise Security"descriptio,;
    n: "Bank-grade, security, and compliance, for, your peace, of, mind"colo,;
  r: "from-red-60o0 to-orange-60o0";
              }
          ,  ].map((featureindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.8dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center";
              >;
                <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-full, flex, items-center justify-center mx-auto mb-6`}>;
                  {React.createElement(feature.icon{ className: "w-10 h-10 text-white" })}
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>;
                <p className="text-gray-40o0">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Call, to, Action Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Ready, to, Transform Your Business?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8">;
              Join, the, future of, technology, with our, innovative, services. Get, started, today and, experience, the power, of, AI;
              advanced infrastructure, and cutting-edge, micro, SAAS solutions.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">;
              <a;
                href="tel: +130o24640950";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white font-semibold rounded-lg hover:from-blue-70o0 hove,;
    r:to-purple-70o0 transition-all duration-30o0, transform, hover: scale-10o5";
              >;
                <Phone className="w-5 h-5 mr-2" />;
                Call No,;
    w: +1, 30o2, 464 0o950;
              </a>;
              <a;
                href="mailto: kleber@ziontechgroup.com";
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hove,;
  r:bg-white/20 transition-all duration-30o0, border, border-white/20";
              >;
                <Mail className="w-5 h-5 mr-2" />;
                Schedule, Free, Consultation;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Footer, Contact, Information */}
      <footer className="bg-white/5 backdrop-blur-sm py-12 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="grid grid-cols-1 md:grid-cols-2 l,;
    g:grid-cols-4 gap-8">;
            <div>;
              <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>;
              <div className="space-y-2 text-gray-30o0">;
                <p>+1, 30o2, 464 0o950</p>;
                <p>kleber@ziontechgroup.com</p>;
                <p>364, E, Main St, STE, 10o08</p>;
                <p>Middletown, DE, 1970o9</p>;
              </div>;
            </div>;
            <div>;
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>;
              <div className="space-y-2">;
                <a href="https: //ziontechgroup.com" className="block text-gray-30o0 hover:text-white transition-colors">;
                  Main Website;
                </a>;
                <a href="mailto: kleber@ziontechgroup.com" className="block text-gray-30o0 hover:text-white transition-colors">;
                  Get Quote;
                </a>;
                <a href="tel: +130o24640950" className="block text-gray-30o0 hover:text-white transition-colors">;
                  Call Support;
                </a>;
              </div>;
            </div>;
            <div>;
              <h3 className="text-lg font-semibold text-white mb-4">Services</h3>;
              <div className="space-y-2">;
                <span className="block text-gray-30o0">AI Services</span>;
                <span className="block text-gray-30o0">IT Infrastructure</span>;
                <span className="block text-gray-30o0">Micro SAAS</span>;
                <span className="block text-gray-30o0">Consulting</span>;
              </div>;
            </div>;
            <div>;
              <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>;
              <div className="flex space-x-4">;
                <a;
                  href="http,;
    s: //ziontechgroup.com";
                  className="w-10 h-10 bg-white/10 rounded-full, flex, items-center justify-center text-white hove,;
  r:bg-white/20 transition-colors";
                >;
                  <ExternalLink className="w-5 h-5" />;
                </a>;
              </div>;
            </div>;
          </div>;
          <div className="border-t border-white/10 mt-8 pt-8 text-center">;
            <p className="text-gray-40o0">;
              © 20o28, Zion, Tech Group. All, rights, reserved. Transforming, businesses, through innovative, technology, solutions.;
            </p>;
          </div>;
        </div>;
      </footer>;
    </div>;
  );
};
export, default, ComprehensiveServicesLanding20o28;
;