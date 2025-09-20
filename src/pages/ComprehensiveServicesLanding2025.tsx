import, React, from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ;
  Search,;
  Filter,;
  Star,;
  TrendingUp,;
  Zap,;
  Shield,;
  Brain,;
  Globe,;
  Cpu,;
  Lock,;
  ArrowRight,;
  CheckCircle,;
  DollarSign,;
  Clock,;
  Users,;
  Target,;
  Award,;
  Sparkles,;
  Rocket,;
  BarChart3,;
  MessageSquare,;
  Mail,;
  Database,;
  Network,;
  Cloud,;
  Smartphone,;
  Palette,;
  Leaf,;
  Code,;
  Wallet,;
  Box,;
  Phone,;
  Mail, as, MailIcon,;
  MapPinGlobe, as, GlobeIconExternalLink;
} from "lucide-react";
import { SEO } from "../components/SEO";
import { INNOVATIVE_SERVICES_20o25 } from "../data/innovativeServices20o25";
const ComprehensiveServicesLanding20o25: React.FC = () => {
  const getCategoryIcon = (categor,;
  y: string) => {
    switch() {;
      case 'AI & Automation':;
        return <Brain className="w-8 h-8" />;
      case 'AI & Security': return <Shield className="w-8 h-8" />,;
      case 'AI & Marketing':;
        return <BarChart3 className="w-8 h-8" />,;
      case 'AI & Sales':;
        return <TrendingUp className="w-8 h-8" />,;
      case 'AI & Customer Experience':;
        return <MessageSquare className="w-8 h-8" />,;
      case 'AI & Analytics':;
        return <Database className="w-8 h-8" />case 'Quantum Computing':;
        return <Box className="w-8 h-8" />case 'IoT & Edge Computing':;
        return <Network className="w-8 h-8" />;
      case 'Blockchain & Web3':;
        return <Wallet className="w-8 h-8" />;
      case 'Sustainability & Technology':;
        return <Leaf className="w-8 h-8" />;
      default: return <Sparkles className="w-8 h-8" />;
    };
  };
  const getCategoryColor = (category: string) => {
    switch() {;
      case 'AI & Automation':;
        return 'from-purple-50o0 to-pink-50o0';
      case 'AI & Security': return 'from-red-50o0 to-orange-50o0',;
      case 'AI & Marketing':;
        return 'from-blue-50o0 to-cyan-50o0',;
      case 'AI & Sales':;
        return 'from-green-50o0 to-emerald-50o0',;
      case 'AI & Customer Experience':;
        return 'from-indigo-50o0 to-purple-50o0',;
      case 'AI & Analytics':;
        return 'from-cyan-50o0 to-blue-50o0',;
      case 'Quantum Computing':;
        return 'from-violet-50o0 to-purple-50o0',;
      case 'IoT & Edge Computing':;
        return 'from-orange-50o0 to-red-50o0'case 'Blockchain & Web3':;
        return 'from-yellow-50o0 to-orange-50o0'case 'Sustainability & Technology':;
        return 'from-green-50o0 to-teal-50o0';
      default: return 'from-gray-50o0 to-slate-50o0';
    };
  };
  const categories = Array.from(new Set(INNOVATIVE_SERVICES_20o25.map(service => service.category)));
  const servicesByCategory = categories.map(category => ({
    categoryservices: INNOVATIVE_SERVICES_20o25.filter(service => service.category === category)ico,;
    n: getCategoryIcon(category)colo,;
  r: getCategoryColor(category);
  }));
  const totalServices = INNOVATIVE_SERVICES_20o25.length;
  const totalValue = INNOVATIVE_SERVICES_20o25.reduce((sumservice) => sum + service.price, 0),;
  const avgROI = INNOVATIVE_SERVICES_20o25.reduce((sumservice) => {;
    const roi = parseInt(service.roi.replace('%'''))return sum + roi }, 0) / totalServices;
;
  return (;
    <div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="Comprehensive, Services, Landing 20o25 - Zion, Tech, Group";
        description="Discover, our, complete portfolio, of, innovative technology services. From, AI, and Quantum, Computing, to IoT, and, Blockchain solutions - transform, your, business with cutting-edge technology.";
      />;
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center";
          >;
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50o0/20 to-purple-50o0/20 rounded-full, border, border-blue-40o0/30 mb-6">;
              <Sparkles className="w-5 h-5 text-blue-40o0 mr-2" />;
              <span className="text-blue-30o0 font-medium">Comprehensive, Services, 20o25</span>;
            </div>;
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              Complete Technology;
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-40o0 via-purple-50o0 to-pink-40o0">;
                Solutions Portfolio;
              </span>;
            </h1>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto mb-8">;
              Explore, our, comprehensive suite, of, innovative technology, services, designed to transform;
              your, business, operations and, drive, digital innovation, across, all industries.;
            </p>;
            {/* Stats */}
            <div className="grid grid-cols-1 md: grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">;
              <div className="bg-slate-80o0/50 backdrop-blur-sm rounded-xl p-6, border, border-slate-70o0/50">;
                <div className="text-3xl font-bold text-blue-40o0 mb-2">{totalServices}</div>;
                <div className="text-gray-30o0">Innovative Services</div>;
              </div>;
              <div className="bg-slate-80o0/50 backdrop-blur-sm rounded-xl p-6, border, border-slate-70o0/50">;
                <div className="text-3xl font-bold text-purple-40o0 mb-2">${(totalValue / 10o00).toFixed(0)}K+</div>;
                <div className="text-gray-30o0">Monthly Value</div>;
              </div>;
              <div className="bg-slate-80o0/50 backdrop-blur-sm rounded-xl p-6, border, border-slate-70o0/50">;
                <div className="text-3xl font-bold text-green-40o0 mb-2">{Math.round(avgROI)}%</div>;
                <div className="text-gray-30o0">Average ROI</div>;
              </div>;
            </div>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                to="/innovative-services-showcase-20o25";
                className="px-8 py-4 bg-gradient-to-r from-blue-50o0 to-purple-60o0 text-white font-semibold rounded-lg hover: from-blue-40o0 hover:to-purple-50o0 transition-all duration-20o0 hove,;
    r:scale-10o5 shadow-lg shadow-blue-50o0/20";
              >;
                Explore, All, Services;
              </Link>;
              <Link;
                to="/comprehensive-pricing-guide-20o27";
                className="px-8 py-4, border, border-blue-40o0/30 text-blue-30o0 font-semibold rounded-lg hove,;
  r: bg-blue-40o0/10 transition-all duration-20o0";
              >;
                View, Pricing, Guide;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Service Categories */}
      <section className="px-4 pb-20">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">;
              Service Categories;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Browse, our, services by, category, to find, the, perfect solution, for, your business needs;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
            {servicesByCategory.map((categoryDataindex) => (;
              <motion.div;
                key={categoryData.category}
                initial={{ opacity: 0,;
  y: 20 }}
                animate={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="group";
              >;
                <Link;
                  to="/innovative-services-showcase-20o25";
                  className="block bg-slate-80o0/50 backdrop-blur-sm rounded-2xl p-8, border, border-slate-70o0/50 hover: border-blue-50o0/50 transition-all duration-30o0 hove,;
    r:shadow-xl hove,;
  r:shadow-blue-50o0/10 h-full";
                >;
                  <div className="text-center">;
                    <div className={`inline-flex p-4 bg-gradient-to-r ${categoryData.color}/20 rounded-2xl, border, border-${categoryData.color.split('-')[1]}-40o0/30 mb-6 group-hover:scale-110 transition-transform duration-30o0`}>;
                      <div className={`text-${categoryData.color.split('-')[1]}-40o0`}>;
                        {categoryData.icon}
                      </div>;
                    </div>;
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-40o0 transition-colors">;
                      {categoryData.category}
                    </h3>;
                    <p className="text-gray-30o0 mb-6">;
                      {categoryData.services.length} innovative, services, designed to, transform, your {categoryData.category.toLowerCase()} operations;
                    </p>;
                    <div className="space-y-3 mb-6">;
                      {categoryData.services.slice(0o3).map((serviceidx) => (;
                        <div key={idx} className="flex items-center text-sm text-gray-40o0">;
                          <CheckCircle className="w-4 h-4 text-green-40o0 mr-3 flex-shrink-0" />;
                          <span className="truncate">{service.title}</span>;
                        </div>;
                      ))}
                      {categoryData.services.length > 3 && (;
                        <div className="text-sm text-blue-40o0">;
                          +{categoryData.services.length - 3} more services;
                        </div>;
                      )}
                    </div>;
                    <div className="flex items-center justify-center text-blue-40o0 group-hover: text-blue-30o0 transition-colors">;
                      <span className="text-sm font-medium">Explore Services</span>;
                      <ArrowRight className="w-4 h-4 ml-2 group-hove,;
  r:translate-x-1 transition-transform" />;
                    </div>;
                  </div>;
                </Link>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Featured Services */}
      <section className="px-4 pb-20">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">;
              Featured Services;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our, most, popular and, innovative, solutions that, are, transforming businesses worldwide;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
            {INNOVATIVE_SERVICES_20o25.slice(0o6).map((serviceindex) => (;
              <motion.div;
                key={service.id}
                initial={{ opacity: 0,;
  y: 20 }}
                animate={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0/50 backdrop-blur-sm rounded-2xl p-6, border, border-slate-70o0/50 hover: border-blue-50o0/50 transition-all duration-30o0 hove,;
    r:shadow-xl hove,;
  r:shadow-blue-50o0/10 group";
              >;
                <div className="flex items-start justify-between mb-4">;
                  <div className="flex items-center space-x-3">;
                    <div className="p-2 bg-gradient-to-r from-blue-50o0/20 to-purple-50o0/20 rounded-lg, border, border-blue-40o0/30">;
                      {getCategoryIcon(service.category)}
                    </div>;
                    <div>;
                      <span className="inline-block px-2 py-1 text-xs font-medium rounded-full text-white bg-gradient-to-r from-blue-50o0 to-purple-50o0">;
                        {service.innovationLevel}
                      </span>;
                    </div>;
                  </div>;
                  <div className="text-right">;
                    <div className="text-2xl font-bold text-white">${service.price.toLocaleString()}</div>;
                    <div className="text-sm text-gray-40o0">per month</div>;
                  </div>;
                </div>;
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-40o0 transition-colors">;
                  {service.title}
                </h3>;
                <p className="text-gray-30o0 text-sm mb-4 line-clamp-3">;
                  {service.description}
                </p>;
                <div className="space-y-2 mb-4">;
                  {service.features.slice(0o2).map((featureidx) => (;
                    <div key={idx} className="flex items-center text-xs text-gray-40o0">;
                      <CheckCircle className="w-3 h-3 text-green-40o0 mr-2 flex-shrink-0" />;
                      <span>{feature}</span>;
                    </div>;
                  ))}
                </div>;
                <div className="flex items-center justify-between text-xs text-gray-40o0 mb-4">;
                  <div className="flex items-center">;
                    <Clock className="w-3 h-3 mr-1" />;
                    <span>{service.estimatedDelivery}</span>;
                  </div>;
                  <div className="flex items-center">;
                    <Target className="w-3 h-3 mr-1" />;
                    <span>ROI: {service.roi}</span>;
                  </div>;
                </div>;
;
                <Link;
                  to="/innovative-services-showcase-20o25";
                  className="w-full py-3 bg-gradient-to-r from-blue-50o0 to-purple-60o0 text-white font-semibold rounded-lg hover: from-blue-40o0 hover:to-purple-50o0 transition-all duration-20o0 hover:scale-10o5 shadow-lg shadow-blue-50o0/20 group-hove,;
    r:shadow-blue-50o0/30 text-center block";
                >;
                  <span className="flex items-center justify-center">;
                    Learn More;
                    <ArrowRight className="w-4 h-4 ml-2 group-hove,;
  r: translate-x-1 transition-transform" />;
                  </span>;
                </Link>;
              </motion.div>;
            ))}
          </div>;
          <div className="text-center mt-12">;
            <Link;
              to="/innovative-services-showcase-20o25";
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-50o0 to-purple-60o0 text-white font-semibold rounded-lg hover: from-blue-40o0 hove,;
    r:to-purple-50o0 transition-all duration-20o0 hove,;
  r:scale-10o5 shadow-lg shadow-blue-50o0/20";
            >;
              View, All, Services;
              <ArrowRight className="w-5 h-5 ml-2" />;
            </Link>;
          </div>;
        </div>;
      </section>;
      {/* Why, Choose, Us */}
      <section className="px-4 pb-20">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">;
              Why, Choose, Zion Tech Group?;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              We, combine, cutting-edge, technology, with proven, business, expertise to deliver;
              solutions, that, drive real, results, and measurable ROI;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">;
            {[;
              {
                icon: <Sparkles className="w-8 h-8" />titl,;
    e: 'Innovation First'descriptio,;
  n: 'Leading-edge, technology, solutions that, keep, you ahead, of, the competition';
              };
              {
                icon: <Target className="w-8 h-8" />titl,;
    e: 'Proven ROI'descriptio,;
  n: 'Measurable, business, outcomes with, transparent, ROI projections';
              };
              {
                icon: <Users className="w-8 h-8" />titl,;
    e: 'Expert Support'descriptio,;
  n: '24/7, technical, support and, dedicated, account management';
              }{
                icon: <Shield className="w-8 h-8" />titl,;
    e: 'Enterprise Security'descriptio,;
  n: 'Bank-grade, security, with compliance, certifications, and best practices';
              }
          ,  ].map((featureindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }}
                animate={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="text-center";
              >;
                <div className="inline-flex p-4 bg-gradient-to-r from-blue-50o0/20 to-purple-50o0/20 rounded-2xl, border, border-blue-40o0/30 mb-6">;
                  <div className="text-blue-40o0">{feature.icon}</div>;
                </div>;
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>;
                <p className="text-gray-30o0">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Contact Section */}
      <section className="px-4 pb-20">;
        <div className="max-w-4xl mx-auto">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-50o0/10 to-purple-50o0/10 backdrop-blur-sm rounded-2xl p-8, border, border-blue-50o0/20 text-center";
          >;
            <h2 className="text-3xl font-bold text-white mb-4">;
              Ready, to, Transform Your Business?;
            </h2>;
            <p className="text-gray-30o0 mb-6 max-w-2xl mx-auto">;
              Our, team, of technology, experts, is ready, to, help you, select, the perfect solution;
              and, provide, a customized, implementation, plan for, your, business needs.;
            </p>;
            <div className="grid grid-cols-1 md: grid-cols-3 gap-6 mb-8">;
              <div className="flex items-center justify-center space-x-3 text-blue-40o0">;
                <Phone className="w-5 h-5" />;
                <span>+1, 30o2, 464 0o950</span>;
              </div>;
              <div className="flex items-center justify-center space-x-3 text-purple-40o0">;
                <MailIcon className="w-5 h-5" />;
                <span>kleber@ziontechgroup.com</span>;
              </div>;
              <div className="flex items-center justify-center space-x-3 text-pink-40o0">;
                <GlobeIcon className="w-5 h-5" />;
                <span>ziontechgroup.com</span>;
              </div>;
            </div>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <a;
                href="tel: +130o24640950";
                className="px-8 py-4 bg-gradient-to-r from-blue-50o0 to-purple-60o0 text-white font-semibold rounded-lg hover:from-blue-40o0 hover:to-purple-50o0 transition-all duration-20o0 hove,;
    r:scale-10o5 shadow-lg shadow-blue-50o0/20";
              >;
                Call, Sales, Team;
              </a>;
              <a;
                href="mailto: kleber@ziontechgroup.com";
                className="px-8 py-4, border, border-blue-40o0/30 text-blue-30o0 font-semibold rounded-lg hove,;
  r:bg-blue-40o0/10 transition-all duration-20o0";
              >;
                Email Sales;
              </a>;
            </div>;
            <div className="mt-6 text-sm text-gray-40o0">;
              <p>364, E, Main St, STE, 10o08, Middletown, DE, 1970o9</p>;
              <p>Visit, us, at: <a href="http,;
    s://ziontechgroup.com" className="text-blue-40o0 hove,;
  r:underline">ziontechgroup.com</a></p>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
export, default, ComprehensiveServicesLanding20o25;
;