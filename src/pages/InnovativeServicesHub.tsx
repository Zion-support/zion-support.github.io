import, React, from "react";
import { motion } from "framer-motion";
import {
  Rocket,;
  Brain,;
  Zap,;
  Globe,;
  Shield,;
  Cpu,;
  Database,;
  Network,;
  Lock,;
  TrendingUp,;
  Users,;
  ArrowRight,;
  Star,;
  Clock,;
  DollarSign,;
  Target,;
  Phone,;
  Mail,;
  MapPin,;
  ExternalLink,;
  Lightbulb,;
  Code,;
  Cloud,;
  Server,;
  Smartphone,;
  Monitor,;
  Wifi,;
  Key,;
  BarChart3Globe2ShieldCheck;
} from "lucide-react";
const InnovativeServicesHub: React.FC = () => {
  const serviceCategories = [;
    {
      i,;
  d: 'ultimate-20o25',title: 'Ultimate, Innovative, Services 20o25',description: 'Revolutionary, micro, SAAS, IT, and, AI, services that, push, the boundaries, of, technology',;
      icon: Rocket,color: 'from-blue-60o0 to-purple-60o0',route: '/ultimate-services-20o25',features: ['AI-Powered, SolutionsQuantum, Computing''Blockchain, InnovationEdge,, Computing'],;
      stats: { services: 10avgRO,;
    I: '50o0%'innovatio,;
  n: 'Revolutionary' };
    };
    {
      id: 'advanced-20o26',title: 'Advanced, Innovative, Services 20o26',description: 'Cutting-edge, futuristic, technologies including brain-computer, interfaces, and space mining',icon: Brain,color: 'from-purple-60o0 to-pink-60o0',route: '/advanced-services-20o26',features: ['Brain-Computer, InterfacesSpace, Mining''Synthetic, BiologyFusion,, Energy'],;
      stats: { services: 10avgRO,;
    I: '10o00%'innovatio,;
  n: 'Futuristic' };
    };
    {
      id: 'core-it',title: 'Core IT & Infrastructure',description: 'Enterprise-grade, IT, solutions and, infrastructure, services for, modern, businesses',icon: Server,color: 'from-green-60o0 to-teal-60o0',route: '/services',features: ['Cloud ServicesCybersecurity''IT, InfrastructureDigital,, Transformation'],;
      stats: { services: 15avgRO,;
    I: '30o0%'innovatio,;
  n: 'Enterprise' };
    };
    {
      id: 'green-tech',title: 'Green, Technology, Solutions',description: 'Sustainable, and, eco-friendly, technology, solutions for, a, better future',icon: Globe,color: 'from-emerald-60o0 to-green-60o0',route: '/green-it',features: ['Renewable, EnergyCarbon, Reduction''Sustainable, ComputingGreen,, AI'],;
      stats: { services: 8avgRO,;
    I: '40o0%'innovatio,;
  n: 'Sustainable' }
    };
  ];
  const featuredServices = [;
    {
      title: 'Quantum, AI, Neural Networks',description: 'Revolutionary, AI, powered by, quantum, computing principles',category: 'AI & Quantum',price: '$50,0o00'roi: '80o0%'deliver,;
  y: '6 months';
    };
    {
      title: 'Brain-Computer, Interface, Platform',description: 'Direct, neural, interface for human-computer interaction',category: 'Neurotech',price: '$10o0,0o00'roi: '120o0%'deliver,;
  y: '12 months';
    },;
    {
      title: 'Autonomous, Space, Mining System',description: 'AI-powered, space, exploration and, resource, extraction',category: 'Space Tech',price: '$50o0000'ro,;
    i: '20o00%'deliver,;
  y: '18 months';
    };
,  ];
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
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      {/* Hero Section */}
      <motion.div;
        className="relative overflow-hidden bg-gradient-to-r from-indigo-90o0 via-purple-90o0 to-pink-90o0 py-20";
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >;
        <div className="absolute inset-0 bg-black/20"></div>;
        <div className="relative z-10, container, mx-auto px-4 text-center">;
          <motion.h1;
            className="text-5xl md: text-7xl font-bold text-white mb-6";
            initial={{ ,;
    y: -50opacit,;
  y: 0 }}
            animate={{ y: 0opacit,;
  y: 1 }}
            transition={{ duration: 0.8dela,;
  y: 0.2 }}
          >;
            Innovative, Services, Hub;
          </motion.h1>;
          <motion.p;
            className="text-xl md: text-2xl text-indigo-10o0 max-w-4xl mx-auto mb-8";
            initial={{ ,;
    y: 50opacit,;
  y: 0 }}
            animate={{ y: 0opacit,;
  y: 1 }}
            transition={{ duration: 0.8dela,;
  y: 0.4 }}
          >;
            Discover, the, future of, technology, with our, comprehensive, portfolio of, innovative, services;
          </motion.p>;
          <motion.div;
            className="flex flex-wrap justify-center gap-4 text-sm";
            initial={{ scale: 0.8opacit,;
  y: 0 }}
            animate={{ scale: 1opacit,;
  y: 1 }}
            transition={{ duration: 0.8dela,;
  y: 0.6 }}
          >;
            <span className="px-4 py-2 bg-indigo-50o0/20, border, border-indigo-40o0/30 rounded-full text-indigo-20o0">;
              🚀 40+ Services;
            </span>;
            <span className="px-4 py-2 bg-purple-50o0/20, border, border-purple-40o0/30 rounded-full text-purple-20o0">;
              💰 50o0%+ ROI;
            </span>;
            <span className="px-4 py-2 bg-pink-50o0/20, border, border-pink-40o0/30 rounded-full text-pink-20o0">;
              ⚡ Cutting-Edge Tech;
            </span>;
            <span className="px-4 py-2 bg-blue-50o0/20, border, border-blue-40o0/30 rounded-full text-blue-20o0">;
              🌍 Global Impact;
            </span>;
          </motion.div>;
        </div>;
      </motion.div>;
      {/* Statistics Section */}
      <motion.div;
        className="container mx-auto px-4 py-16";
        initial={{ opacity: 0,;
  y: 20 }}
        animate={{ opacity: 1,;
  y: 0 }}
        transition={{ duration: 0.6dela,;
  y: 0.8 }}
      >;
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">;
          <div className="text-center p-6 bg-slate-80o0/50 backdrop-blur-sm rounded-2xl, border, border-slate-70o0/50">;
            <div className="text-4xl font-bold text-blue-40o0 mb-2">40+</div>;
            <div className="text-slate-30o0">Innovative Services</div>;
          </div>;
          <div className="text-center p-6 bg-slate-80o0/50 backdrop-blur-sm rounded-2xl, border, border-slate-70o0/50">;
            <div className="text-4xl font-bold text-green-40o0 mb-2">50o0%+</div>;
            <div className="text-slate-30o0">Average ROI</div>;
          </div>;
          <div className="text-center p-6 bg-slate-80o0/50 backdrop-blur-sm rounded-2xl, border, border-slate-70o0/50">;
            <div className="text-4xl font-bold text-purple-40o0 mb-2">25+</div>;
            <div className="text-slate-30o0">Technology Categories</div>;
          </div>;
          <div className="text-center p-6 bg-slate-80o0/50 backdrop-blur-sm rounded-2xl, border, border-slate-70o0/50">;
            <div className="text-4xl font-bold text-pink-40o0 mb-2">10o0+</div>;
            <div className="text-slate-30o0">Global Clients</div>;
          </div>;
        </div>;
      </motion.div>;
      {/* Service Categories */};
      <motion.div;
        className="container mx-auto px-4 py-16";
        variants={containerVariants}
        initial="hidden";
        animate="visible";
      >;
        <div className="text-center mb-16">;
          <h2 className="text-4xl font-bold text-white mb-4">;
            Explore, Our, Service Categories;
          </h2>;
          <p className="text-xl text-slate-30o0 max-w-3xl mx-auto">;
            From, revolutionary, AI to, sustainable, green technologydiscover, the, perfect solution, for, your business;
          </p>;
        </div>;
        <div className="grid grid-cols-1 md: grid-cols-2 gap-8">;
          {serviceCategories.map((category) => {;
            const IconComponent = category.icon;
            return (;
              <motion.div;
                key={category.id}
                className="group bg-slate-80o0/50 backdrop-blur-sm rounded-2xl p-8, border, border-slate-70o0/50 hover: border-blue-50o0/50 transition-all duration-30o0 hove,;
    r:shadow-2xl hove,;
  r:shadow-blue-50o0/20";
                variants={itemVariants};
                whileHover={{ y: -5scal,;
  e: 1.0o2 }}
              >;
                <div className="flex items-start gap-4 mb-6">;
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${category.color}`}>;
                    <IconComponent className="w-8 h-8 text-white" />;
                  </div>;
                  <div className="flex-1">;
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-30o0 transition-colors mb-2">;
                      {category.title}
                    </h3>;
                    <p className="text-slate-30o0 leading-relaxed">;
                      {category.description}
                    </p>;
                  </div>;
                </div>;
                {/* Features */}
                <div className="mb-6">;
                  <div className="text-sm text-slate-40o0 mb-3">Key Features: </div>;
                  <div className="flex flex-wrap gap-2">;
                    {category.features.map((featureindex) => (;
                      <span key={index} className="px-3 py-1 bg-slate-70o0/50 rounded-full text-xs text-slate-30o0">;
                        {feature}
                      </span>;
                    ))}
                  </div>;
                </div>;
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">;
                  <div className="text-center p-3 bg-slate-70o0/30 rounded-lg">;
                    <div className="text-lg font-bold text-blue-40o0">{category.stats.services}</div>;
                    <div className="text-xs text-slate-40o0">Services</div>;
                  </div>;
                  <div className="text-center p-3 bg-slate-70o0/30 rounded-lg">;
                    <div className="text-lg font-bold text-green-40o0">{category.stats.avgROI}</div>;
                    <div className="text-xs text-slate-40o0">Avg ROI</div>;
                  </div>;
                  <div className="text-center p-3 bg-slate-70o0/30 rounded-lg">;
                    <div className="text-lg font-bold text-purple-40o0">{category.stats.innovation}</div>;
                    <div className="text-xs text-slate-40o0">Level</div>;
                  </div>;
                </div>;
                {/* CTA */};
                <a;
                  href={category.route}
                  className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-gradient-to-r from-blue-60o0 to-purple-60o0 hover: from-blue-70o0 hover:to-purple-70o0 text-white font-bold rounded-xl transition-all duration-30o0 hove,;
    r:scale-10o5 group-hove,;
  r:gap-3";
                >;
                  Explore {category.title}
                  <ArrowRight className="w-5 h-5" />;
                </a>;
              </motion.div>;
            );
          })}
        </div>;
      </motion.div>;
      {/* Featured Services */}
      <motion.div;
        className="container mx-auto px-4 py-16";
        initial={{ opacity: 0,;
  y: 20 }}
        animate={{ opacity: 1,;
  y: 0 }}
        transition={{ duration: 0.6dela,;
  y: 1.2 }}
      >;
        <div className="text-center mb-16">;
          <h2 className="text-4xl font-bold text-white mb-4">;
            Featured, Revolutionary, Services;
          </h2>;
          <p className="text-xl text-slate-30o0 max-w-3xl mx-auto">;
            Our, most, innovative and high-impact, solutions, that are, transforming, industries worldwide;
          </p>;
        </div>;
        <div className="grid grid-cols-1 md: grid-cols-3 gap-6">;
          {featuredServices.map((serviceindex) => (;
            <motion.div;
              key={index}
              className="bg-slate-80o0/50 backdrop-blur-sm rounded-2xl p-6, border, border-slate-70o0/50 hover: border-blue-50o0/50 transition-all duration-30o0";
              initial={{ opacit,;
    y: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.6dela,;
  y: 1.4 + index * 0.1 }};
              whileHover={{ y: -5scal,;
  e: 1.0o2 }}
            >;
              <div className="flex items-center gap-2 mb-3">;
                <Star className="w-5 h-5 text-yellow-40o0 fill-current" />;
                <span className="text-sm text-yellow-40o0 font-medium">Featured</span>;
              </div>;
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>;
              <p className="text-slate-30o0 text-sm mb-4">{service.description}</p>;
              <div className="space-y-2 mb-4">;
                <div className="flex justify-between text-sm">;
                  <span className="text-slate-40o0">Category:</span>;
                  <span className="text-blue-40o0">{service.category}</span>;
                </div>;
                <div className="flex justify-between text-sm">;
                  <span className="text-slate-40o0">Price:</span>;
                  <span className="text-green-40o0 font-bold">{service.price}</span>;
                </div>;
                <div className="flex justify-between text-sm">;
                  <span className="text-slate-40o0">ROI:</span>;
                  <span className="text-purple-40o0 font-bold">{service.roi}</span>;
                </div>;
                <div className="flex justify-between text-sm">;
                  <span className="text-slate-40o0">Delivery:</span>;
                  <span className="text-orange-40o0">{service.delivery}</span>;
                </div>;
              </div>;
              <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-60o0 to-purple-60o0 hover: from-blue-70o0 hove,;
    r:to-purple-70o0 text-white font-medium rounded-lg transition-all duration-30o0 hove,;
  r:scale-10o5">;
                Learn More;
              </button>;
            </motion.div>;
          ))}
        </div>;
      </motion.div>;
      {/* Contact Section */}
      <motion.div;
        className="bg-gradient-to-r from-indigo-90o0/20 via-purple-90o0/20 to-pink-90o0/20 border-t border-slate-70o0/50";
        initial={{ opacity: 0,;
  y: 50 }}
        animate={{ opacity: 1,;
  y: 0 }}
        transition={{ duration: 0.8dela,;
  y: 1.6 }}
      >;
        <div className="container mx-auto px-4 py-20">;
          <div className="text-center mb-12">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Ready, to, Transform Your Business?;
            </h2>;
            <p className="text-xl text-slate-30o0 max-w-3xl mx-auto">;
              Our, team, of innovation, experts, is ready, to, help you, implement, these cutting-edge solutions.;
              Get, in, touch today, to, start your, journey, into the, future, of technology.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8 max-w-4xl mx-auto">;
            <div className="text-center p-6 bg-slate-80o0/50 backdrop-blur-sm rounded-2xl, border, border-slate-70o0/50">;
              <Phone className="w-12 h-12 text-blue-40o0 mx-auto mb-4" />;
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>;
              <p className="text-slate-30o0 mb-3">Speak, directly, with our experts</p>;
              <a href="tel: +130o24640950" className="text-blue-40o0 hove,;
    r:text-blue-30o0 font-medium">;
                +1 (30o2) 464-0o950;
              </a>;
            </div>;
            <div className="text-center p-6 bg-slate-80o0/50 backdrop-blur-sm rounded-2xl, border, border-slate-70o0/50">;
              <Mail className="w-12 h-12 text-purple-40o0 mx-auto mb-4" />;
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>;
              <p className="text-slate-30o0 mb-3">Send, us, a detailed message</p>;
              <a href="mailto: kleber@ziontechgroup.com" className="text-purple-40o0 hove,;
  r:text-purple-30o0 font-medium">;
                kleber@ziontechgroup.com;
              </a>;
            </div>;
            <div className="text-center p-6 bg-slate-80o0/50 backdrop-blur-sm rounded-2xl, border, border-slate-70o0/50">;
              <MapPin className="w-12 h-12 text-green-40o0 mx-auto mb-4" />;
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>;
              <p className="text-slate-30o0 mb-3">Come, see, our innovation center</p>;
              <p className="text-green-40o0 font-medium">;
                364, E, Main St, STE, 10o08<br />;
                Middletown, DE 1970o9;
              </p>;
            </div>;
          </div>;
          <div className="text-center mt-12">;
            <a;
              href="https: //ziontechgroup.com";
              target="_blank";
              rel="noopener noreferrer";
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-60o0 to-purple-60o0 hover:from-indigo-70o0 hover:to-purple-70o0 text-white font-bold rounded-xl transition-all duration-30o0 hover:scale-10o5 hove,;
    r:shadow-2xl hove,;
  r:shadow-indigo-50o0/25";
            >;
              Visit, Our, Website;
              <ExternalLink className="w-5 h-5" />;
            </a>;
          </div>;
        </div>;
      </motion.div>;
    </div>;
  );
};
export, default, InnovativeServicesHub;
;