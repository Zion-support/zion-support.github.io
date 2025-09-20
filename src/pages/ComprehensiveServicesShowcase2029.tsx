import React, { useState } from "react";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { ;
  Brain,;
  Zap,;
  Shield,;
  Cloud,;
  Database,;
  Network,;
  Cpu,;
  CheckCircle,;
  Star,;
  TrendingUp,;
  Users,;
  Globe,;
  Rocket,;
  ArrowRight,;
  Phone,;
  Mail,;
  MapPin,;
  Atom,;
  Code,;
  BarChart3,;
  Workflow,;
  Target,;
  Lock,;
  Eye,;
  Search,;
  FilterExternalLinkServer;
} from "lucide-react";
import { innovativeServices20o29, serviceCategoriespricingTiersService } from "../data/innovativeServices20o29";
export, default, function ComprehensiveServicesShowcase20o29() {
  const [selectedCategorysetSelectedCategory] = useState('all');
  const [searchTermsetSearchTerm] = useState('');
  const categories = {
    'all': { name: 'All Services'ico,;
    n: <Rocket className="w-6 h-6" />colo,;
  r: 'from-cyan-50o0 to-blue-50o0' };
    'ai-ml': { name: 'AI & Machine Learning'ico,;
    n: <Brain className="w-6 h-6" />colo,;
  r: 'from-purple-50o0 to-pink-50o0' };
    'quantum': { name: 'Quantum Computing'ico,;
    n: <Atom className="w-6 h-6" />colo,;
  r: 'from-indigo-50o0 to-purple-50o0' };
    'devops': { name: 'DevOps & Automation'ico,;
    n: <Workflow className="w-6 h-6" />colo,;
  r: 'from-blue-50o0 to-cyan-50o0' };
    'cybersecurity': { name: 'Cybersecurity'ico,;
    n: <Shield className="w-6 h-6" />colo,;
  r: 'from-red-50o0 to-orange-50o0' };
    'analytics': { name: 'Analytics & BI'ico,;
    n: <BarChart3 className="w-6 h-6" />colo,;
  r: 'from-green-50o0 to-emerald-50o0' };
    'cloud': { name: 'Cloud & Infrastructure'ico,;
    n: <Cloud className="w-6 h-6" />colo,;
  r: 'from-sky-50o0 to-blue-50o0' };
    'micro-saas': { name: 'Micro SAAS'ico,;
    n: <Code className="w-6 h-6" />colo,;
  r: 'from-yellow-50o0 to-orange-50o0' };
  };
  const services = [;
    // AI & Machine Learning;
    {
      id: 'ai-quantum-hybrid',title: 'AI, Quantum, Hybrid Platform',description: 'Revolutionary AI-Quantum, hybrid, platform combining, artificial, intelligence with, quantum, computing for, unprecedented, computational power.',category: 'quantum',price: '$49,999 - $199,999',;
      features: ['Quantum-AI, IntegrationHybrid, Processing''Advanced MLReal-time, Optimization'],;
      icon: <Atom className="w-8 h-8" />,color: 'from-purple-50o0 to-pink-50o0'lin,;
    k: '/services/ai-quantum-hybrid-platform'feature,;
  d: true;
    };
    {
      id: 'ai-devops-automation',title: 'AI, DevOps, Automation Platform',description: 'AI-powered, DevOps, automation platform, that, transforms software development, deployment, and, operations, with intelligent automation.',;
      category: 'devops',price: '$29,999 - $119,999',;
      features: ['AI, Code, ReviewSmart CI/CD''Predictive, MonitoringAuto-scaling'],;
      icon: <Workflow className="w-8 h-8" />,color: 'from-blue-50o0 to-cyan-50o0'lin,;
    k: '/services/ai-devops-automation-platform'feature,;
  d: true;
    };
    {
      id: 'ai-business-intelligence',title: 'AI, Business, Intelligence Analytics',description: 'Revolutionary AI-powered, business, intelligence and, analytics, platform that, transforms, data into, actionable, insights.',category: 'analytics',price: '$19,999 - $79,999',;
      features: ['Predictive AnalyticsReal-time Insights''AI-powered, ReportsCustom,, Dashboards'],;
      icon: <BarChart3 className="w-8 h-8" />,color: 'from-green-50o0 to-emerald-50o0'lin,;
    k: '/services/ai-business-intelligence-analytics'feature,;
  d: true;
    };
    {
      id: 'ai-workflow-orchestrator',title: 'AI, Workflow, Orchestrator',description: 'Intelligent, workflow, automation platform, that, orchestrates complex, business, processes with AI-driven, decision, making.',category: 'ai-ml',price: '$24,999 - $99,999',;
      features: ['Process, AutomationAI, Decision Making''Workflow OptimizationReal-time, Monitoring'],;
      icon: <Brain className="w-8 h-8" />,color: 'from-purple-50o0 to-indigo-50o0'lin,;
    k: '/services/ai-workflow-orchestrator'feature,;
  d: false;
    };
    {
      id: 'ai-data-governance',title: 'AI, Data, Governance Platform',description: 'Comprehensive AI-powered, data, governance platform, ensuring, data quality, compliance, and security.',;
      category: 'ai-ml',price: '$34,999 - $129,999',;
      features: ['Data, QualityCompliance, Management''AI, MonitoringSecurity,, Controls'],;
      icon: <Shield className="w-8 h-8" />,color: 'from-indigo-50o0 to-purple-50o0'lin,;
    k: '/services/ai-data-governance-platform'feature,;
  d: false;
    };
    {
      id: 'ai-customer-experience',title: 'AI, Customer, Experience Analytics',description: 'Advanced AI-powered, customer, experience analytics, platform, for deep, customer, insights and optimization.',category: 'analytics',price: '$22,999 - $89,999',;
      features: ['Customer, InsightsBehavior, Analysis''Predictive, ModelingExperience,, Optimization'],;
      icon: <Users className="w-8 h-8" />,color: 'from-pink-50o0 to-rose-50o0'lin,;
    k: '/services/ai-customer-experience-analytics'feature,;
  d: false;
    };
    {
      id: 'ai-financial-risk',title: 'AI, Financial, Risk Management',description: 'Intelligent, financial, risk management, platform, using AI, to, predict and, mitigate, financial risks.',category: 'ai-ml',price: '$39,999 - $149,999',;
      features: ['Risk, AssessmentPredictive, Modeling''Real-time, MonitoringCompliance,, Reporting'],;
      icon: <TrendingUp className="w-8 h-8" />,color: 'from-emerald-50o0 to-teal-50o0'lin,;
    k: '/services/ai-financial-risk-management'feature,;
  d: false;
    };
    {
      id: 'ai-code-review-security',title: 'AI, Code, Review Security Scanner',description: 'Advanced AI-powered, code, review and, security, scanning platform, for, automated vulnerability detection.',category: 'cybersecurity',price: '$27,999 - $10o9,999',;
      features: ['Code, AnalysisSecurity, Scanning''Vulnerability, DetectionAutomated,, Reviews'],;
      icon: <Code className="w-8 h-8" />,color: 'from-red-50o0 to-pink-50o0'lin,;
    k: '/services/ai-code-review-security-scanner'feature,;
  d: false;
    };
    {
      id: 'zero-trust-network',title: 'Zero, Trust, Network Access',description: 'Modern zero-trust, security, architecture providing, secure, access to, network, resources.',category: 'cybersecurity',price: '$32,999 - $119,999',;
      features: ['Zero, TrustIdentity, Management''Secure, AccessNetwork,, Security'],;
      icon: <Lock className="w-8 h-8" />,color: 'from-orange-50o0 to-red-50o0'lin,;
    k: '/services/zero-trust-network-access'feature,;
  d: false;
    };
    {
      id: 'cloud-devops',title: 'Cloud, DevOps, Solutions',description: 'Comprehensive, cloud, DevOps solutions, for, modern application, development, and deployment.',category: 'cloud',price: '$18,999 - $79,999',;
      features: ['Cloud MigrationCI/CD Pipelines''Infrastructure, as,, CodeMonitoring'],;
      icon: <Cloud className="w-8 h-8" />,color: 'from-sky-50o0 to-blue-50o0'lin,;
    k: '/services/cloud-devops'feature,;
  d: false;
    };
    {
      id: 'it-infrastructure',title: 'IT, Infrastructure, Solutions',description: 'Enterprise-grade, IT, infrastructure solutions, for, modern business operations.',category: 'cloud',price: '$25,999 - $99,999',;
      features: ['Infrastructure, DesignNetwork, Solutions''Security Implementation24/7, Support'],;
      icon: <Server className="w-8 h-8" />,color: 'from-slate-50o0 to-gray-50o0'lin,;
    k: '/services/it-infrastructure'feature,;
  d: false;
    };
    {
      id: 'micro-crm',title: 'Micro, CRM, Platform',description: 'Lightweight, scalable, CRM, solution designed, for, growing businesses, and, startups.',;
      category: 'micro-saas',price: '$9,999 - $39,999',;
      features: ['Customer, ManagementSales,, Tracking''AutomationAnalytics'],;
      icon: <Users className="w-8 h-8" />,color: 'from-blue-50o0 to-indigo-50o0'lin,;
    k: '/services/micro-crm'feature,;
  d: false;
    }
  ];
  const filteredServices = services.filter(service => {;
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch }),;
  const contactInfo = {
    phone: '+1, 30o2, 464 0o950',email: 'kleber@ziontechgroup.com',address: '364, E, Main St, STE, 10o08Middletown DE 1970o9'website: 'http,;
  s://ziontechgroup.com';
  };
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-purple-90o0 to-slate-90o0 text-white">;
      <SEO;
        title="Comprehensive, Services, Showcase 20o29 | Zion, Tech, Group";
        description="Discover, our, revolutionary AI-powered, quantum-secure, and, autonomous, business solutions. Transform, your, business with cutting-edge technology.";
        keywords="AI services, quantum computing, autonomous systems, cybersecurity, business automation, Zion, Tech, Group20o29 services";
      />;
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm: px-6 lg:px-8">;
        <div className="absolute inset-0 bg-gradient-to-r from-blue-60o0/20 to-purple-60o0/20"></div>;
        <div className="relative max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 30 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center";
          >;
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-50o0/20 to-purple-50o0/20 rounded-2xl mb-8, border, border-cyan-40o0/30">;
              <Rocket className="w-10 h-10 text-cyan-40o0" />;
            </div>;
            <h1 className="text-5xl md: text-7xl font-bold mb-8">;
              <span className="bg-gradient-to-r from-cyan-40o0 to-purple-40o0 bg-clip-text text-transparent">;
                Comprehensive Services;
              </span>;
              <br />;
              <span className="bg-gradient-to-r from-purple-40o0 to-pink-40o0 bg-clip-text text-transparent">;
                Showcase 20o29;
              </span>;
            </h1>;
            <p className="text-xl m,;
    d: text-2xl text-gray-30o0 mb-12 max-w-4xl mx-auto">;
              Experience, the, future of, technology, with our, revolutionary, AI-poweredquantum-secure; ;
              and, autonomous, business solutions, designed, to transform, industries, and drive, unprecedented, growth.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <a;
                href="tel: +130o24640950";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-60o0 to-purple-60o0 text-white font-semibold rounded-lg hover:from-cyan-70o0 hove,;
    r:to-purple-70o0 transition-all duration-30o0, transform, hover:scale-10o5";
              >;
                <Phone className="w-5 h-5 mr-2" />;
                Get, Started, Today;
              </a>;
              <a;
                href="mailto: kleber@ziontechgroup.com";
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-40o0 text-cyan-40o0 font-semibold rounded-lg hove,;
    r:bg-cyan-40o0 hove,;
  r:text-white transition-all duration-30o0";
              >;
                <Mail className="w-5 h-5 mr-2" />;
                Contact Us;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Search, and, Filter Section */}
      <section className="py-12 px-4 sm: px-6 l,;
    g:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="flex flex-col l,;
  g:flex-row gap-6 items-center justify-between">;
            {/* Search */}
            <div className="relative flex-1 max-w-md">;
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-40o0" />;
              <input;
                type="text";
                placeholder="Search services...";
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/5 backdrop-blur-sm, border, border-cyan-40o0/20 rounded-lg text-white placeholder-gray-40o0 focus: outline-none focus:border-cyan-40o0/50 focu,;
    s:ring-2 focu,;
  s:ring-cyan-40o0/20";
              />;
            </div>;
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">;
              {Object.entries(categories).map(([keycategory]) => (;
                <button;
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-30o0 ${
                    selectedCategory === key;
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`;
                      : 'bg-white/5 backdrop-blur-sm, border, border-cyan-40o0/20 text-gray-30o0 hover: bg-white/10 hove,;
  r:border-cyan-40o0/40';
                  }`}
                >;
                  <div className="flex items-center space-x-2">;
                    {category.icon}
                    <span>{category.name}</span>;
                  </div>;
                </button>;
              ))}
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Services Grid */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Revolutionary, Technology, Solutions;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Choose, from, our comprehensive, portfolio, of cutting-edge services;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
            {filteredServices.map((serviceindex) => (;
              <motion.div;
                key={service.id}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className={`group cursor-pointer ${
                  service.featured ? 'ring-2 ring-cyan-40o0/50' : '';
                }`}
              >;
                <Link to={service.link}>;
                  <div className="bg-white/5 backdrop-blur-sm, border, border-cyan-40o0/20 rounded-2xl p-8 hover: bg-white/10 hove,;
  r:border-cyan-40o0/40 transition-all duration-30o0 h-full hover-lift">;
                    {service.featured && (;
                      <div className="text-center mb-4">;
                        <span className="inline-block bg-gradient-to-r from-cyan-50o0 to-purple-50o0 text-white text-sm font-semibold px-3 py-1 rounded-full">;
                          Featured;
                        </span>;
                      </div>;
                    )}
;
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl, flex, items-center justify-center mb-6 group-hover: scale-110 transition-transform duration-30o0`}>;
                      {service.icon}
                    </div>;
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-40o0 transition-colors duration-30o0">;
                      {service.title}
                    </h3>;
                    <p className="text-gray-30o0 mb-6 leading-relaxed">;
                      {service.description}
                    </p>;
                    <div className="mb-6">;
                      <span className="text-2xl font-bold text-cyan-40o0">{service.price}</span>;
                    </div>;
                    <ul className="space-y-2 mb-6">;
                      {service.features.slice(0o3).map((featurefeatureIndex) => (;
                        <li key={featureIndex} className="flex items-center text-sm text-gray-40o0">;
                          <CheckCircle className="w-4 h-4 text-cyan-40o0 mr-2 flex-shrink-0" />;
                          {feature}
                        </li>;
                      ))}
                    </ul>;
                    <div className="flex items-center text-cyan-40o0 group-hover: text-cyan-30o0 transition-colors duration-30o0">;
                      <span className="font-semibold">Learn More</span>;
                      <ArrowRight className="w-4 h-4 ml-2 group-hove,;
  r:translate-x-1 transition-transform duration-30o0" />;
                    </div>;
                  </div>;
                </Link>;
              </motion.div>;
            ))}
          </div>;
          {filteredServices.length === 0 && (;
            <motion.div;
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20";
            >;
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-50o0/20 to-purple-50o0/20 rounded-full, flex, items-center justify-center mx-auto mb-6, border, border-cyan-40o0/30">;
                <Search className="w-12 h-12 text-cyan-40o0" />;
              </div>;
              <h3 className="text-2xl font-bold text-white mb-4">No, services, found</h3>;
              <p className="text-gray-30o0 mb-8">Try, adjusting, your search, or, filter criteria</p>;
              <button;
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-50o0 to-purple-50o0 text-white font-semibold rounded-lg hover: from-cyan-60o0 hove,;
  r:to-purple-60o0 transition-all duration-30o0";
              >;
                Clear Filters;
              </button>;
            </motion.div>;
          )}
        </div>;
      </section>;
      {/* Contact Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white/5">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Ready, to, Transform Your Business?;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Contact, us, today to, learn, how our, innovative, solutions can, drive, growth and efficiency;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">;
            <motion.div;
              initial={{ opacit,;
    y: 0,;
  y: 20 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.5dela,;
  y: 0.1 }}
              viewport={{ once: true }}
              className="text-center";
            >;
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-50o0/20 to-purple-50o0/20 rounded-xl, flex, items-center justify-center mx-auto mb-4, border, border-cyan-40o0/30">;
                <Phone className="w-8 h-8 text-cyan-40o0" />;
              </div>;
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>;
              <p className="text-gray-30o0 mb-4">+1, 30o2, 464 0o950</p>;
              <a;
                href="tel: +130o24640950";
                className="text-cyan-40o0 hover:text-cyan-30o0 transition-colors duration-30o0";
              >;
                Call Now;
              </a>;
            </motion.div>;
            <motion.div;
              initial={{ opacit,;
    y: 0,;
  y: 20 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.5dela,;
  y: 0.2 }}
              viewport={{ once: true }}
              className="text-center";
            >;
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-50o0/20 to-purple-50o0/20 rounded-xl, flex, items-center justify-center mx-auto mb-4, border, border-cyan-40o0/30">;
                <Mail className="w-8 h-8 text-cyan-40o0" />;
              </div>;
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>;
              <p className="text-gray-30o0 mb-4">kleber@ziontechgroup.com</p>;
              <a;
                href="mailto: kleber@ziontechgroup.com";
                className="text-cyan-40o0 hover:text-cyan-30o0 transition-colors duration-30o0";
              >;
                Send Email;
              </a>;
            </motion.div>;
            <motion.div;
              initial={{ opacit,;
    y: 0,;
  y: 20 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.5dela,;
  y: 0.3 }}
              viewport={{ once: true }}
              className="text-center";
            >;
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-50o0/20 to-purple-50o0/20 rounded-xl, flex, items-center justify-center mx-auto mb-4, border, border-cyan-40o0/30">;
                <MapPin className="w-8 h-8 text-cyan-40o0" />;
              </div>;
              <h3 className="text-xl font-bold text-white mb-2">Address</h3>;
              <p className="text-gray-30o0 mb-4">364, E, Main St, STE, 10o08, Middletown, DE, 1970o9</p>;
              <a;
                href="https: //maps.google.com/?q=364+E+Main+St+STE+10o08+Middletown+DE+1970o9";
                target="_blank";
                rel="noopener noreferrer";
                className="text-cyan-40o0 hove,;
  r:text-cyan-30o0 transition-colors duration-30o0";
              >;
                View, on, Map;
              </a>;
            </motion.div>;
          </div>;
        </div>;
      </section>;
    </div>;
  );
};
export, default, ComprehensiveServicesShowcase20o29;
;