import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ;
  CheckCircle,
  X,
  Star,
  TrendingUp,
  Clock,
  DollarSign,
  Zap,
  Brain,
  Shield,
  Cloud,
  ShoppingCart,
  ArrowRight,
  Search,
  Filter,
  BarChart3,
  Target,
  Users,
  Settings,
  Rocket,
  Heart,
  Atom,
  MessageCircle,
  Search as SearchIcon,
  FileText,
  Lock,
  Server,
  Cpu,
  Database,
  Wifi,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  BarChart,
  Building2,
  GraduationCap,
  Briefcase,
  Globe,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Award;
} from 'lucide-react';
interface Service {
  id: string;
  title: string;
  category: string;
  subcategory: string;
  description: string;
  price: number;
  features: string[];
  pros: string[];
  cons: string[];
  bestFor: string[];
  estimatedDelivery: string;
  innovationLevel: string;
  marketPrice: string;
  roi: string;
  icon: React.ComponentType<any>;
  color: string;
  href: string;
  rating: number;
  complexity: 'Low' | 'Medium' | 'High';
  scalability: 'Small' | 'Medium' | 'Enterprise';
}

export default function ServicesComparison() {;
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const services: Service[] = [;
    // AI Services;
    {;
      id: 'ai-supply-chain',
      title: 'AI Supply Chain Optimization',
      category: 'AI Services',
      subcategory: 'Operations',
      description: 'Optimize your supply chain with AI-powered analytics and predictive modeling',
      price: 2500,
      features: ['Predictive Analytics', 'Demand Forecasting', 'Inventory Optimization', 'Route Optimization', 'Real-time Monitoring', 'Automated Alerts'],
      pros: ['High ROI potential', 'Real-time insights', 'Automated optimization', 'Scalable solution'],
      cons: ['Complex implementation', 'Requires data quality', 'Higher initial cost'],
      bestFor: ['Large enterprises', 'Manufacturing companies', 'Retail chains', 'Logistics providers'],
      estimatedDelivery: '4-6 weeks',
      innovationLevel: 'Advanced',
      marketPrice: '$3,500',
      roi: '300%',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      href: '/services/ai-supply-chain-optimization',
      rating: 4.8,
      complexity: 'High',
      scalability: 'Enterprise';
},
    {;
      id: 'ai-cybersecurity',
      title: 'AI Cybersecurity Platform',
      category: 'AI Services',
      subcategory: 'Security',
      description: 'Advanced AI-powered cybersecurity platform for enterprise protection',
      price: 3500,
      features: ['Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Risk Assessment', 'Compliance Monitoring', 'Incident Management'],
      pros: ['Advanced threat detection', 'Automated response', 'Compliance ready', '24/7 monitoring'],
      cons: ['High cost', 'Complex setup', 'Requires expertise'],
      bestFor: ['Financial institutions', 'Healthcare organizations', 'Government agencies', 'Tech companies'],
      estimatedDelivery: '6-8 weeks',
      innovationLevel: 'Cutting-Edge',
      marketPrice: '$5,000',
      roi: '400%',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      href: '/services/ai-cybersecurity-platform',
      rating: 4.9,
      complexity: 'High',
      scalability: 'Enterprise';
},
    {;
      id: 'ai-healthcare',
      title: 'AI Healthcare Platform',
      category: 'AI Services',
      subcategory: 'Healthcare',
      description: 'Comprehensive healthcare technology solutions powered by AI',
      price: 4000,
      features: ['Patient Analytics', 'Diagnostic Support', 'Treatment Planning', 'Health Monitoring', 'Predictive Medicine', 'Clinical Decision Support'],
      pros: ['Improved patient outcomes', 'Reduced diagnostic errors', 'Efficiency gains', 'Compliance focused'],
      cons: ['Regulatory complexity', 'High implementation cost', 'Training requirements'],
      bestFor: ['Hospitals', 'Clinics', 'Research institutions', 'Health tech companies'],
      estimatedDelivery: '8-10 weeks',
      innovationLevel: 'Advanced',
      marketPrice: '$6,000',
      roi: '350%',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      href: '/services/ai-healthcare-platform',
      rating: 4.7,
      complexity: 'High',
      scalability: 'Enterprise';
},
    // IT Services;
    {;
      id: 'cloud-devops',
      title: 'Cloud & DevOps Solutions',
      category: 'IT Services',
      subcategory: 'Infrastructure',
      description: 'Comprehensive cloud infrastructure and DevOps automation services',
      price: 2000,
      features: ['Cloud Migration', 'CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring', 'Automated Scaling', 'Cost Optimization'],
      pros: ['Cost effective', 'Quick implementation', 'Proven technology', 'Good ROI'],
      cons: ['Vendor lock-in risk', 'Security concerns', 'Requires expertise'],
      bestFor: ['Startups', 'Medium businesses', 'Tech companies', 'Digital agencies'],
      estimatedDelivery: '3-5 weeks',
      innovationLevel: 'Advanced',
      marketPrice: '$3,000',
      roi: '250%',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      href: '/it-services',
      rating: 4.6,
      complexity: 'Medium',
      scalability: 'Medium';
},
    {;
      id: 'cybersecurity-suite',
      title: 'Cybersecurity Suite',
      category: 'IT Services',
      subcategory: 'Security',
      description: 'Complete enterprise cybersecurity and compliance solutions',
      price: 3000,
      features: ['Network Security', 'Endpoint Protection', 'Compliance Management', 'Incident Response', 'Vulnerability Assessment', 'Security Training'],
      pros: ['Comprehensive protection', 'Compliance ready', 'Professional support', 'Proven track record'],
      cons: ['Higher cost', 'Complex management', 'Ongoing maintenance'],
      bestFor: ['Medium enterprises', 'Financial services', 'Healthcare', 'Government contractors'],
      estimatedDelivery: '4-6 weeks',
      innovationLevel: 'Advanced',
      marketPrice: '$4,500',
      roi: '300%',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      href: '/it-services',
      rating: 4.5,
      complexity: 'Medium',
      scalability: 'Medium';
},
    // Micro SaaS;
    {;
      id: 'ai-lead-scoring',
      title: 'AI Lead Scoring',
      category: 'Micro SaaS',
      subcategory: 'Sales',
      description: 'Intelligent lead qualification and scoring automation',
      price: 500,
      features: ['Lead Scoring', 'CRM Integration', 'Analytics Dashboard', 'Automated Workflows', 'Email Marketing', 'Performance Tracking'],
      pros: ['Low cost', 'Quick setup', 'Easy to use', 'Immediate ROI'],
      cons: ['Limited features', 'Basic AI', 'Integration limitations'],
      bestFor: ['Small businesses', 'Sales teams', 'Marketing agencies', 'Startups'],
      estimatedDelivery: '1-2 weeks',
      innovationLevel: 'Advanced',
      marketPrice: '$800',
      roi: '400%',
      icon: Target,
      color: 'from-green-500 to-emerald-500',
      href: '/micro-saas',
      rating: 4.4,
      complexity: 'Low',
      scalability: 'Small';
},
    {;
      id: 'ai-chatbot',
      title: 'Website AI Chatbot',
      category: 'Micro SaaS',
      subcategory: 'Support',
      description: 'AI-powered customer support chatbot for websites',
      price: 300,
      features: ['24/7 Support', 'Multi-language', 'Integration APIs', 'Analytics', 'Custom Responses', 'Lead Capture'],
      pros: ['Very low cost', 'Instant setup', '24/7 availability', 'Easy customization'],
      cons: ['Limited AI capabilities', 'Basic responses', 'No human fallback'],
      bestFor: ['E-commerce sites', 'Small businesses', 'Service providers', 'Blogs'],
      estimatedDelivery: '1 week',
      innovationLevel: 'Advanced',
      marketPrice: '$500',
      roi: '300%',
      icon: MessageCircle,
      color: 'from-blue-500 to-cyan-500',
      href: '/micro-saas',
      rating: 4.3,
      complexity: 'Low',
      scalability: 'Small';
}
  ];
  const filteredServices = services.filter(service => {;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
});
  const categories = [...new Set(services.map(service => service.category))];
  const toggleService = (serviceId: string) => {;
    setSelectedServices(prev => ;
      prev.includes(serviceId) ;
        ? prev.filter(id => id !== serviceId);
        : prev.length < 4 ;
          ? [...prev, serviceId];
          : prev;
    );
};
  const selectedServicesData = services.filter(service => selectedServices.includes(service.id));
  const contactInfo = {;
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    website: "https://ziontechgroup.com";
};
  return (;
    <div className="min-h-screen bg-zion-blue pt-20">;
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center">;
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
              Services Comparison;
            </h1>;
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">;
              Compare our services side by side to find the perfect solution for your business needs;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link;
                to="/contact";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:-translate-y-1">;
                Get Expert Advice;
                <ArrowRight className="ml-2 w-5 h-5" />;
              </Link>;
              <Link;
                to="/services-catalog";
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">;
                View All Services;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">;
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-zion-cyan/20 rounded-full blur-3xl"></div>;
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-zion-purple/20 rounded-full blur-3xl"></div>;
        </div>;
      </section>;

      {/* Service Selection */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark">;
        <div className="max-w-7xl mx-auto">;
          <div className="mb-8">;
            <h2 className="text-3xl font-bold text-white mb-4">Select Services to Compare</h2>;
            <p className="text-zion-slate-light">Choose up to 4 services to compare side by side</p>;
          </div>;

          {/* Filters */}
          <div className="mb-8">;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;
              <div className="relative">;
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />;
                <input;
                  type="text";
                  placeholder="Search services...";
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-zion-blue-darker border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent";
                />;
              </div>;
              <div>;
                <select;
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 bg-zion-blue-darker border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent">;
                  <option value="all">All Categories</option>;
                  {categories.map(category => (;
                    <option key={category} value={category}>{category}</option>;
                  ))}
                </select>;
              </div>;
              <div className="text-right">;
                <span className="text-zion-slate-light">;
                  {selectedServices.length}/4 services selected;
                </span>;
              </div>;
            </div>;
          </div>;

          {/* Service Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
            {filteredServices.map((service) => {;
              const Icon = service.icon;
              const isSelected = selectedServices.includes(service.id);
              return (;
                <motion.div;
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`relative cursor-pointer transition-all duration-300 ${;
                    isSelected ? 'ring-2 ring-zion-cyan scale-105' : 'hover:scale-105';
}`}
                  onClick={() => toggleService(service.id)}
                >;
                  <div className={`bg-zion-blue border rounded-2xl p-6 h-full transition-all duration-300 ${;
                    isSelected ? 'border-zion-cyan bg-zion-blue-darker' : 'border-zion-purple/30 hover:border-zion-cyan/50';
}`}>;
                    {/* Selection Indicator */}
                    <div className="absolute top-4 right-4">;
                      {isSelected ? (;
                        <div className="w-6 h-6 bg-zion-cyan rounded-full flex items-center justify-center">;
                          <CheckCircle className="w-4 h-4 text-white" />;
                        </div>;
                      ) : (;
                        <div className="w-6 h-6 border-2 border-zion-slate-light rounded-full"></div>;
                      )}
                    </div>;

                    {/* Service Header */}
                    <div className="flex items-center mb-4">;
                      <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mr-4`}>;
                        <Icon className="w-6 h-6 text-white" />;
                      </div>;
                      <div>;
                        <h3 className="text-lg font-semibold text-white">{service.title}</h3>;
                        <p className="text-sm text-zion-slate-light">{service.subcategory}</p>;
                      </div>;
                    </div>;

                    {/* Description */}
                    <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">;
                      {service.description}
                    </p>;

                    {/* Key Info */}
                    <div className="space-y-2 mb-4">;
                      <div className="flex justify-between text-sm">;
                        <span className="text-zion-slate-light">Price:</span>;
                        <span className="text-white font-semibold">${service.price.toLocaleString()}/mo</span>;
                      </div>;
                      <div className="flex justify-between text-sm">;
                        <span className="text-zion-slate-light">Rating:</span>;
                        <div className="flex items-center">;
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />;
                          <span className="text-white ml-1">{service.rating}</span>;
                        </div>;
                      </div>;
                      <div className="flex justify-between text-sm">;
                        <span className="text-zion-slate-light">Complexity:</span>;
                        <span className={`px-2 py-1 rounded text-xs ${;
                          service.complexity === 'Low' ? 'bg-green-500/20 text-green-400' :;
                          service.complexity === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :;
                          'bg-red-500/20 text-red-400';
}`}>;
                          {service.complexity}
                        </span>;
                      </div>;
                    </div>;

                    {/* Category Badge */}
                    <div className="flex justify-between items-center">;
                      <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">;
                        {service.category}
                      </span>;
                      <Link;
                        to={service.href}
                        className="text-zion-cyan hover:text-zion-cyan-light text-sm font-medium";
                        onClick={(e) => e.stopPropagation()}
                      >;
                        Learn More →;
                      </Link>;
                    </div>;
                  </div>;
                </motion.div>;
              );
})}
          </div>;
        </div>;
      </section>;

      {/* Comparison Table */}
      {selectedServicesData.length > 0 && (;
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-zion-blue">;
          <div className="max-w-7xl mx-auto">;
            <div className="mb-8">;
              <h2 className="text-3xl font-bold text-white mb-4">Service Comparison</h2>;
              <p className="text-zion-slate-light">Detailed comparison of selected services</p>;
            </div>;

            <div className="overflow-x-auto">;
              <div className="bg-zion-blue-dark border border-zion-purple/30 rounded-2xl overflow-hidden">;
                <table className="w-full">;
                  <thead>;
                    <tr className="bg-zion-blue-darker">;
                      <th className="px-6 py-4 text-left text-zion-cyan font-semibold">Features</th>;
                      {selectedServicesData.map((service) => (;
                        <th key={service.id} className="px-6 py-4 text-center">;
                          <div className="flex flex-col items-center">;
                            <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-2`}>;
                              <service.icon className="w-8 h-8 text-white" />;
                            </div>;
                            <h3 className="text-white font-semibold text-sm">{service.title}</h3>;
                            <p className="text-zion-slate-light text-xs">{service.subcategory}</p>;
                          </div>;
                        </th>;
                      ))}
                    </tr>;
                  </thead>;
                  <tbody className="divide-y divide-zion-purple/20">;
                    {/* Price */}
                    <tr>;
                      <td className="px-6 py-4 text-zion-cyan font-semibold">Monthly Price</td>;
                      {selectedServicesData.map((service) => (;
                        <td key={service.id} className="px-6 py-4 text-center">;
                          <div className="text-2xl font-bold text-white">${service.price.toLocaleString()}</div>;
                          <div className="text-zion-slate-light text-sm">per month</div>;
                        </td>;
                      ))}
                    </tr>;

                    {/* Rating */}
                    <tr>;
                      <td className="px-6 py-4 text-zion-cyan font-semibold">Rating</td>;
                      {selectedServicesData.map((service) => (;
                        <td key={service.id} className="px-6 py-4 text-center">;
                          <div className="flex items-center justify-center">;
                            <Star className="w-5 h-5 text-yellow-400 fill-current" />;
                            <span className="text-white ml-2 font-semibold">{service.rating}</span>;
                          </div>;
                        </td>;
                      ))}
                    </tr>;

                    {/* Complexity */}
                    <tr>;
                      <td className="px-6 py-4 text-zion-cyan font-semibold">Complexity</td>;
                      {selectedServicesData.map((service) => (;
                        <td key={service.id} className="px-6 py-4 text-center">;
                          <span className={`px-3 py-1 rounded-full text-sm ${;
                            service.complexity === 'Low' ? 'bg-green-500/20 text-green-400' :;
                            service.complexity === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :;
                            'bg-red-500/20 text-red-400';
}`}>;
                            {service.complexity}
                          </span>;
                        </td>;
                      ))}
                    </tr>;

                    {/* Scalability */}
                    <tr>;
                      <td className="px-6 py-4 text-zion-cyan font-semibold">Scalability</td>;
                      {selectedServicesData.map((service) => (;
                        <td key={service.id} className="px-6 py-4 text-center">;
                          <span className="text-white font-medium">{service.scalability}</span>;
                        </td>;
                      ))}
                    </tr>;

                    {/* Delivery Time */}
                    <tr>;
                      <td className="px-6 py-4 text-zion-cyan font-semibold">Delivery Time</td>;
                      {selectedServicesData.map((service) => (;
                        <td key={service.id} className="px-6 py-4 text-center">;
                          <div className="flex items-center justify-center">;
                            <Clock className="w-4 h-4 text-zion-slate-light mr-2" />;
                            <span className="text-white">{service.estimatedDelivery}</span>;
                          </div>;
                        </td>;
                      ))}
                    </tr>;

                    {/* ROI */}
                    <tr>;
                      <td className="px-6 py-4 text-zion-cyan font-semibold">Expected ROI</td>;
                      {selectedServicesData.map((service) => (;
                        <td key={service.id} className="px-6 py-4 text-center">;
                          <div className="text-green-400 font-semibold">{service.roi}</div>;
                        </td>;
                      ))}
                    </tr>;

                    {/* Features */}
                    <tr>;
                      <td className="px-6 py-4 text-zion-cyan font-semibold">Key Features</td>;
                      {selectedServicesData.map((service) => (;
                        <td key={service.id} className="px-6 py-4">;
                          <ul className="space-y-2">;
                            {service.features.slice(0, 4).map((feature, idx) => (;
                              <li key={idx} className="flex items-start">;
                                <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 mr-2 flex-shrink-0" />;
                                <span className="text-white text-sm">{feature}</span>;
                              </li>;
                            ))}
                            {service.features.length > 4 && (;
                              <li className="text-zion-slate-light text-sm">;
                                +{service.features.length - 4} more features;
                              </li>;
                            )}
                          </ul>;
                        </td>;
                      ))}
                    </tr>;

                    {/* Pros */}
                    <tr>;
                      <td className="px-6 py-4 text-zion-cyan font-semibold">Pros</td>;
                      {selectedServicesData.map((service) => (;
                        <td key={service.id} className="px-6 py-4">;
                          <ul className="space-y-2">;
                            {service.pros.map((pro, idx) => (;
                              <li key={idx} className="flex items-start">;
                                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 mr-2 flex-shrink-0" />;
                                <span className="text-white text-sm">{pro}</span>;
                              </li>;
                            ))}
                          </ul>;
                        </td>;
                      ))}
                    </tr>;

                    {/* Cons */}
                    <tr>;
                      <td className="px-6 py-4 text-zion-cyan font-semibold">Cons</td>;
                      {selectedServicesData.map((service) => (;
                        <td key={service.id} className="px-6 py-4">;
                          <ul className="space-y-2">;
                            {service.cons.map((con, idx) => (;
                              <li key={idx} className="flex items-start">;
                                <X className="w-4 h-4 text-red-400 mt-0.5 mr-2 flex-shrink-0" />;
                                <span className="text-white text-sm">{con}</span>;
                              </li>;
                            ))}
                          </ul>;
                        </td>;
                      ))}
                    </tr>;

                    {/* Best For */}
                    <tr>;
                      <td className="px-6 py-4 text-zion-cyan font-semibold">Best For</td>;
                      {selectedServicesData.map((service) => (;
                        <td key={service.id} className="px-6 py-4">;
                          <ul className="space-y-1">;
                            {service.bestFor.map((target, idx) => (;
                              <li key={idx} className="text-white text-sm">• {target}</li>;
                            ))}
                          </ul>;
                        </td>;
                      ))}
                    </tr>;
                  </tbody>;
                </table>;
              </div>;
            </div>;
          </div>;
        </section>;
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-zion-purple to-zion-purple-dark">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >;
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
              Need Help Choosing?;
            </h2>;
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">;
              Our experts can help you select the right service based on your specific business needs and requirements;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link;
                to="/contact";
                className="inline-flex items-center px-8 py-4 bg-white text-zion-purple font-semibold rounded-lg hover:bg-zion-slate-light transition-all duration-300 transform hover:-translate-y-1">;
                Schedule Consultation;
                <ArrowRight className="ml-2 w-5 h-5" />;
              </Link>;
              <a;
                href={`mailto:${contactInfo.email}?subject=Service Selection Help&body=Hi, I need help choosing between different services. Can you provide guidance based on my business needs?`}
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-purple transition-all duration-300">;
                Get Expert Advice;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
}