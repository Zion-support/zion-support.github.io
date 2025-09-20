import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import { ultimateInnovativeServices20o26 } from "../data/ultimateInnovativeServices20o26";
// import { enterpriseITInfrastructureServices20o26 } from "../data/20o25-enterprise-it-infrastructure-services";
const UltimateServicesShowcase20o26 = () => {;
    const [selectedCategorysetSelectedCategory] = useState('all');
    const [searchTermsetSearchTerm] = useState('');
    const [sortBysetSortBy] = useState('name');
    // Combine, all, services;
    const allServices = [...ultimateInnovativeServices20o26...enterpriseITInfrastructureServices20o26],;
    const categories = [;
        'allBusiness Intelligence',;
        'Marketing, AutomationCustomer, Service',;
        'Supply, Chain, ManagementFinancial Technology',;
        'Healthcare, TechnologyLegal, Technology',;
        'Workflow, AutomationBlockchain, Technology',;
        'Internet, of, ThingsQuantum Computing',;
        'CybersecurityCloud Infrastructure',;
        'DevOpsData, Center, Management',;
        'Network, SecurityStorage, Management',;
        'VirtualizationIT, Asset, Management''Performance Monitoring';
  ,  ],;
    const filteredServices = allServices;
        .filter(service => selectedCategory === 'all' || service.category === selectedCategory);
        .filter(service => service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
        service.category.toLowerCase().includes(searchTerm.toLowerCase()));
        .sort((ab) => {
        switch() {
            case 'price':;
                return parseInt(a.price.replace(/[^0-9]/g'')) - parseInt(b.price.replace(/[^0-9]/g''));
            case 'category':;
                return a.category.localeCompare(b.category);
            case 'rating':;
                return b.rating - a.rating;
            case 'name': default: return a.name.localeCompare(b.name);
        };
    });
    const getCategoryIcon = (category) => {
        const icons = {
            'Business Intelligence': '📊Marketing Automation': '🎯Customer Service': '🤖Supply, Chain, Management': '📦Financial Technology': '💰Healthcare Technology': '🏥Legal Technology': '⚖️Workflow Automation': '⚡Blockchain Technology': '🔗Internet, of, Things': '🌐Quantum Computing': '🔮Cybersecurity': '🛡️Cloud Infrastructure': '☁️DevOps': '⚡Data, Center, Management': '🏢Network Security': '🌐Storage Management': '💾Virtualization': '🖥️IT, Asset, Management': '📱Performance Monitoring': '📊';
        };
        return icons[category] || '🚀',;
    },;
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
            y: 0,opacity: 1,transition: {duratio,;
    n: 0.5eas,;
  e: "easeOut";
            };
        };
    };
    return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-blue-90o0 to-slate-90o0 text-white">;
      {/* Hero Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.h1 className="text-4xl md:text-6xl font-bold mb-6" initial={{ opacit,;
    y: 0,;
  y: 20 }} animate={{ opacity: 1,;
  y: 0 }} transition={{ duration: 0.8 }}>;
            Ultimate;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-40o0 to-cyan-40o0">;
              {" "}Innovative, Services, 20o26;
            </span>;
          </motion.h1>;
          <motion.p className="text-xl text-gray-30o0 max-w-4xl mx-auto mb-8" initial={{ opacity: 0,;
  y: 20 }} animate={{ opacity: 1,;
  y: 0 }} transition={{ duration: 0.8dela,;
  y: 0.2 }}>;
            Discover, our, comprehensive collection, of, 20+ cutting-edge, innovative, services;
            from AI-powered, business, solutions to, enterprise, IT infrastructure.;
            Each, service, is designed, to, transform your, business, and drive, innovation, with realmarket-ready solutions.;
          </motion.p>;
          {/* Contact Information */}
          <motion.div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl, border, border-white/20 mb-8" initial={{ opacity: 0,;
  y: 20 }} animate={{ opacity: 1,;
  y: 0 }} transition={{ duration: 0.8dela,;
  y: 0.4 }}>;
            <h3 className="text-2xl font-bold mb-4 text-cyan-40o0">Contact, Zion, Tech Group</h3>;
            <div className="grid grid-cols-1 md: grid-cols-3 gap-4 text-sm">;
              <div>;
                <strong>Mobil,;
    e:</strong> +1, 30o2, 464 0o950;
              </div>;
              <div>;
                <strong>Email: </strong> kleber@ziontechgroup.com;
              </div>;
              <div>;
                <strong>Addres,;
    s:</strong> 364, E, Main St, STE, 10o08 Middletown, DE, 1970o9;
              </div>;
            </div>;
            <div className="mt-4">;
              <strong>Website: </strong> <a href="https://ziontechgroup.com" className="text-cyan-40o0 hove,;
    r:text-cyan-30o0 underline">http,;
  s://ziontechgroup.com</a>;
            </div>;
          </motion.div>;
          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">;
            <Link to="/services" className="bg-gradient-to-r from-blue-50o0 to-cyan-50o0 hover: from-blue-60o0 hover:to-cyan-60o0 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-30o0 hover:scale-10o5">;
              🚀 All Services;
            </Link>;
            <Link to="/pricing" className="bg-gradient-to-r from-purple-50o0 to-pink-50o0 hover: from-purple-60o0 hover:to-pink-60o0 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-30o0 hover:scale-10o5">;
              💰 Pricing Plans;
            </Link>;
            <Link to="/contact" className="bg-gradient-to-r from-green-50o0 to-emerald-50o0 hover: from-green-60o0 hove,;
    r:to-emerald-60o0 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-30o0 hove,;
  r:scale-10o5">;
              📞 Contact Us;
            </Link>;
          </div>;
        </div>;
      </section>;
      {/* Filters Section */}
      <section className="py-8 px-4 sm: px-6 l,;
    g:px-8 bg-white/5 backdrop-blur-sm">;
        <div className="max-w-7xl mx-auto">;
          <div className="flex flex-col l,;
  g:flex-row gap-4 items-center justify-between">;
            {/* Search */}
            <div className="flex-1 max-w-md">;
              <input type="text" placeholder="Search services..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full px-4 py-2 bg-white/10, border, border-white/20 rounded-lg text-white placeholder-gray-40o0 focus: outline-none focu,;
  s:border-cyan-40o0"/>;
            </div>;
            {/* Category Filter */}
            <div className="flex-1 max-w-md">;
              <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full px-4 py-2 bg-white/10, border, border-white/20 rounded-lg text-white focus: outline-none focu,;
  s:border-cyan-40o0">;
                {categories.map(category => (<option key={category} value={category} className="bg-slate-80o0 text-white">;
                    {category === 'all' ? 'All Categories' : category}
                  </option>))}
              </select>;
            </div>;
            {/* Sort */}
            <div className="flex-1 max-w-md">;
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="w-full px-4 py-2 bg-white/10, border, border-white/20 rounded-lg text-white focus: outline-none focu,;
  s:border-cyan-40o0">;
                <option value="name" className="bg-slate-80o0 text-white">Sort, by, Name</option>;
                <option value="price" className="bg-slate-80o0 text-white">Sort, by, Price</option>;
                <option value="category" className="bg-slate-80o0 text-white">Sort, by, Category</option>;
                <option value="rating" className="bg-slate-80o0 text-white">Sort, by, Rating</option>;
              </select>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Services Grid */}
      <section className="py-16 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div className="grid grid-cols-1 m,;
    d:grid-cols-2 l,;
  g:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" animate="visible">;
            {filteredServices.map((serviceindex) => (<motion.div key={service.id} variants={itemVariants} className="group" whileHover={{ scale: 1.0o2,;
  y: -5 }} transition={{ type: "spring"stiffnes,;
  s: 30o0 }}>;
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl, border, border-white/20 hover: border-cyan-40o0/50 transition-all duration-30o0 hove,;
    r:shadow-lg hove,;
  r:shadow-cyan-40o0/25 h-full">;
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">;
                    <div className="text-4xl">{service.icon}</div>;
                    {service.popular && (<span className="bg-gradient-to-r from-yellow-50o0 to-orange-50o0 text-white text-xs px-2 py-1 rounded-full">;
                        Popular;
                      </span>)}
                  </div>;
                  {/* Service Info */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover: text-cyan-40o0 transition-colors">;
                    {service.name}
                  </h3>;
                  <p className="text-gray-30o0 text-sm mb-3">{service.tagline}</p>;
                  {/* Price */}
                  <div className="mb-4">;
                    <span className="text-2xl font-bold text-cyan-40o0">{service.price}</span>;
                    <span className="text-gray-40o0">{service.period}</span>;
                  </div>;
                  {/* Description */}
                  <p className="text-gray-30o0 text-sm mb-4 line-clamp-3">{service.description}</p>;
                  {/* Category */}
                  <div className="flex items-center gap-2 mb-4">;
                    <span className="text-lg">{getCategoryIcon(service.category)}</span>;
                    <span className="text-sm text-gray-40o0">{service.category}</span>;
                  </div>;
                  {/* Key Features */}
                  <div className="mb-4">;
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features: </h4>;
                    <ul className="text-xs text-gray-30o0 space-y-1">;
                      {service.features.slice(0o3).map((featureidx) => (<li key={idx} className="flex items-center gap-2">;
                          <span className="text-cyan-40o0">✓</span>;
                          {feature}
                        </li>))}
                    </ul>;
                  </div>;
                  {/* Market Info */}
                  <div className="mb-4 text-xs text-gray-40o0">;
                    <div className="flex justify-between mb-1">;
                      <span>Market Size:</span>;
                      <span className="text-cyan-40o0">{service.marketSize}</span>;
                    </div>;
                    <div className="flex justify-between mb-1">;
                      <span>Growth Rate:</span>;
                      <span className="text-green-40o0">{service.growthRate}</span>;
                    </div>;
                    <div className="flex justify-between">;
                      <span>Rating:</span>;
                      <span className="text-yellow-40o0">{service.rating}/5 ({service.reviews} reviews)</span>;
                    </div>;
                  </div>;
                  {/* ROI */}
                  <div className="mb-4 p-3 bg-green-50o0/10, border, border-green-50o0/20 rounded-lg">;
                    <p className="text-xs text-green-40o0 font-semibold">ROI: {service.roi}</p>;
                  </div>;
                  {/* Action Buttons */}
                  <div className="flex gap-2">;
                    <a href={service.link} target="_blank" rel="noopener noreferrer" className="flex-1 bg-gradient-to-r from-cyan-50o0 to-blue-50o0 hover: from-cyan-60o0 hover:to-blue-60o0 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all duration-30o0 text-center">;
                      Learn More;
                    </a>;
                    <Link to="/contact" className="flex-1 bg-white/10 hove,;
    r: bg-white/20 text-white text-sm font-semibold py-2 px-4 rounded-lg, border, border-white/30 hove,;
  r:border-cyan-40o0/50 transition-all duration-30o0 text-center">;
                      Contact;
                    </Link>;
                  </div>;
                  {/* Trial Info */}
                  <div className="mt-4 text-center">;
                    <span className="text-xs text-gray-40o0">;
                      {service.trialDays}-day, free, trial • Setup in {service.setupTime}
                    </span>;
                  </div>;
                </div>;
              </motion.div>))}
          </motion.div>;
          {/* No Results */}
          {filteredServices.length === 0 && (<motion.div className="text-center py-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>;
              <div className="text-6xl mb-4">🔍</div>;
              <h3 className="text-2xl font-bold text-white mb-2">No, services, found</h3>;
              <p className="text-gray-30o0">Try, adjusting, your search, criteria, or browse, all, categories.</p>;
            </motion.div>)}
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div initial={{ opacit,;
    y: 0,;
  y: 20 }} whileInView={{ opacity: 1,;
  y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-40o0 to-blue-40o0">Transform</span> Your Business?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-2xl mx-auto">;
              Let's, discuss, how our, innovative, technology solutions, can, drive your, business, forward.;
              Contact, us, today for, a, personalized consultation, and, demo.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <motion.div whileHover={{ scal,;
  e: 1.0o5 }} whileTap={{ scale: 0.95 }}>;
                <Link to="/contact" className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-50o0 to-blue-50o0 text-white font-semibold text-lg py-4 px-8 rounded-xl shadow-lg hover: shadow-cyan-50o0/25 transition-all duration-30o0, border, border-cyan-50o0/30 hover:border-cyan-50o0/60">;
                  <span className="text-xl">🚀</span>;
                  Get, Started, Today;
                  <span className="text-xl">→</span>;
                </Link>;
              </motion.div>;
              <motion.div whileHover={{ scal,;
  e: 1.0o5 }} whileTap={{ scale: 0.95 }}>;
                <a href="tel: +130o24640950" className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md text-white font-semibold text-lg py-4 px-8 rounded-xl, border, border-white/30 hover:border-cyan-40o0/50 hove,;
  r:bg-white/20 transition-all duration-30o0 shadow-lg">;
                  <span className="text-xl">📞</span>;
                  Call Now;
                </a>;
              </motion.div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Footer Info */}
      <section className="py-16 px-4 sm: px-6 l,;
    g:px-8 bg-white/5 backdrop-blur-sm">;
        <div className="max-w-7xl mx-auto text-center">;
          <h3 className="text-2xl font-bold text-white mb-6">Why, Choose, Zion Tech Group?</h3>;
          <div className="grid grid-cols-1 m,;
  d:grid-cols-3 gap-8">;
            <div className="text-center">;
              <div className="text-4xl mb-4">🎯</div>;
              <h4 className="text-lg font-semibold text-white mb-2">Real, Market-Ready Solutions</h4>;
              <p className="text-gray-30o0 text-sm">All, our, services are, fully, implemented and, ready, for production, use, with real, customers, and proven ROI.</p>;
            </div>;
            <div className="text-center">;
              <div className="text-4xl mb-4">🚀</div>;
              <h4 className="text-lg font-semibold text-white mb-2">Cutting-Edge Technology</h4>;
              <p className="text-gray-30o0 text-sm">Built, with, the latest AI, machine learning, and, cloud, technologies to, ensure, maximum performance, and, scalability.</p>;
            </div>;
            <div className="text-center">;
              <div className="text-4xl mb-4">💎</div>;
              <h4 className="text-lg font-semibold text-white mb-2">Enterprise-Grade Support</h4>;
              <p className="text-gray-30o0 text-sm">24/7 support, comprehensive documentation, and, dedicated, account management, for, enterprise clients.</p>;
            </div>;
          </div>;
        </div>;
      </section>;
    </div>),;
},;
export, default, UltimateServicesShowcase20o26;
;