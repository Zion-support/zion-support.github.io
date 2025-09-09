import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Atom, 
  Link as LinkIcon, 
  Zap, 
  Shield, 
  Cloud, 
  Cpu, 
  Rocket, 
  Globe, 
  Heart,
  ArrowRight,
  Star,
  CheckCircle,
  TrendingUp,
  Users,
  BarChart3,
  Palette,
  Building,
  Car,
  MessageSquare,
  Target,
  Monitor,
  Code,
  Database,
  Network,
  Lock,
  Eye,
  Fingerprint,
  ShieldCheck,
  Globe2,
  Wallet,
  Coins,
  Smartphone,
  FileText,
  Calendar,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const ServicesOverview: React.FC = () => {
  const featuredServices = [
    {
      icon: Brain,
      title: "AI Workflow Automation",
      description: "Transform business operations with intelligent, AI-driven workflow automation",
      features: ["Process automation", "AI-powered insights", "Real-time monitoring", "Predictive analytics"],
      pricing: "$299 - $1,999/month",
      link: "/services/ai-workflow-automation",
      category: "AI & Automation",
      color: "from-zion-cyan to-zion-blue",
      badge: "Most Popular",
      roi: "300%",
      timeSaved: "8 hours/day"
    },
    {
      icon: Atom,
      title: "Quantum AI Platform",
      description: "Experience the future of AI with quantum computing and exponential speedup",
      features: ["Quantum algorithms", "Hybrid AI processing", "Quantum cryptography", "Real-time processing"],
      pricing: "$1,299 - $5,999/month",
      link: "/services/quantum-ai-platform",
      category: "Quantum Computing",
      color: "from-zion-purple to-zion-blue",
      badge: "Cutting-Edge",
      roi: "500%",
      timeSaved: "10x faster"
    },
    {
      icon: LinkIcon,
      title: "Blockchain Web3 Platform",
      description: "Build the future of decentralized applications with comprehensive Web3 capabilities",
      features: ["Multi-chain support", "Smart contracts", "DeFi protocols", "NFT marketplace"],
      pricing: "$499 - $2,999/month",
      link: "/services/blockchain-web3-platform",
      category: "Blockchain",
      color: "from-zion-blue to-zion-cyan",
      badge: "Decentralized",
      roi: "400%",
      timeSaved: "24/7 operation"
    }
  ];

  const allServices = [;
    // AI & Machine Learning;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
}
  ];

  // Calculate category counts;
  serviceCategories.forEach(category => {};
});
;
  // Filter services based on search and category;
  const filteredServices = allServices.filter(service => {};
});
;
  const contactInfo = {};
};
;
  return (;
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">;
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 border border-zion-cyan/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple/20 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-blue/20 rounded-full animate-pulse delay-2000"></div>
            {/* Floating particles */}
            <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-zion-cyan rounded-full animate-quantum-float"></div>
            <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-zion-purple rounded-full animate-blockchain-pulse delay-1000"></div>
            <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-zion-blue rounded-full animate-ai-glow delay-2000"></div>
          </div>
        </div>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">;
            <div className="flex-1 max-w-md">;
              <div className="relative">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />;
                <div>Broken JSX</div>
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent";
                />;
              </div>;
            </div>;

            <div className="flex flex-wrap gap-2">;
              {};
                  onClick={() => setSelectedCategory(category.id)}
                  className={};
}`}
                >;
                  <category.icon className="w-4 h-4" />;
                  <span>{category.name}</span>;
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">;
                    {category.count}
                  </span>;
                </button>;
              ))}
            </div>;
          </div>;
        </div>;
      </section>;

      {/* Services Grid */}
      <section className="py-20 bg-white">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
              {filteredServices.length} Services Available;
            </h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              {};
                ? `Showing results for "${searchTerm || serviceCategories.find(c => c.id === selectedCategory)?.name}"`;
                : 'Explore our comprehensive range of innovative technology services'}
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {};
                )}
                <div className="mb-6">;
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">;
                    <service.icon className="w-8 h-8 text-white" />;
                  </div>;
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>;
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>;
                  <div className="text-2xl font-bold text-cyan-600 mb-4">{service.price}</div>;
                </div>;

                <div className="mb-6">;
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>;
                  <ul className="space-y-2">;
                    {};
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">;
                        <CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0" />;
                        <span>{feature}</span>;
                      </li>;
                    ))}
                  </ul>;
                </div>;

                <div className="mb-6">;
                  <div className="flex flex-wrap gap-2">;
                    {};
                        {tag}
                      </span>;
                    ))}
                  </div>;
                </div>;
                ;
                <div>Broken JSX</div>
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-colors text-center inline-block">;
                  Learn More;
                </Link>;
              </motion.div>;
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
              Ready to Get Started?;
            </h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Contact our team to learn more about our services and how we can help ;
              transform your business with innovative technology solutions.;
            </p>;
          </div>;

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">;
            <div>;
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">;
                Get in Touch;
              </h3>;

              <div className="space-y-6">;
                <div className="flex items-center space-x-4">;
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">;
                    <Phone className="w-6 h-6 text-white" />;
                  </div>;
                  <div>;
                    <h4 className="font-semibold text-gray-900">Phone</h4>;
                    <a href={`tel:${contactInfo.phone}`} className="text-cyan-600 hover:text-cyan-700">;
                      {contactInfo.phone}
                    </a>;
                  </div>;
                </div>;

                <div className="flex items-center space-x-4">;
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">;
                    <Mail className="w-6 h-6 text-white" />;
                  </div>;
                  <div>;
                    <h4 className="font-semibold text-gray-900">Email</h4>;
                    <a href={`mailto:${contactInfo.email}`} className="text-cyan-600 hover:text-cyan-700">;
                      {contactInfo.email}
                    </a>;
                  </div>;
                </div>;

                <div className="flex items-center space-x-4">;
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">;
                    <MapPin className="w-6 h-6 text-white" />;
                  </div>;
                  <div>;
                    <h4 className="font-semibold text-gray-900">Address</h4>;
                    <p className="text-gray-600">{contactInfo.address}</p>;
                  </div>;
                </div>;
              </div>;
            </div>;

            <div className="bg-white p-8 rounded-xl shadow-lg">;
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">;
                Request Information;
              </h3>;

              <form className="space-y-4">;
                <div>;
                  <label className="block text-sm font-medium text-gray-700 mb-2">;
                    Company Name;
                  </label>;
                  <div>Broken JSX</div>
                  />;
                </div>;

                <div>;
                  <label className="block text-sm font-medium text-gray-700 mb-2">;
                    Email Address;
                  </label>;
                  <div>Broken JSX</div>
                  />;
                </div>;

                <div>;
                  <label className="block text-sm font-medium text-gray-700 mb-2">;
                    Services of Interest;
                  </label>;
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent">;
                    <option>Select services...</option>;
                    <option>AI & Machine Learning</option>;
                    <option>Cybersecurity</option>;
                    <option>Cloud & DevOps</option>;
                    <option>Blockchain Solutions</option>;
                    <option>Quantum Computing</option>;
                    <option>IoT & Edge Computing</option>;
                    <option>Data Analytics</option>;
                    <option>Specialized Solutions</option>;
                  </select>;
                </div>;

                <div>;
                  <label className="block text-sm font-medium text-gray-700 mb-2">;
                    Message;
                  </label>;
                  <div>Broken JSX</div>
                    placeholder="Tell us about your needs and how we can help"></textarea>;
                </div>;
                ;
                <div>Broken JSX</div>
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-colors">;
                  Send Request;
                </button>;
              </form>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <h2 className="text-3xl md:text-4xl font-bold mb-6">;
            Transform Your Business Today;
          </h2>;
          <p className="text-xl mb-8 text-cyan-100 max-w-3xl mx-auto">;
            Join thousands of businesses already leveraging our innovative technology ;
            services to drive growth, improve efficiency, and stay ahead of the competition.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <div>Broken JSX</div>
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">;
              Get Started Now;
              <ArrowRight className="ml-2 w-5 h-5" />;
            </Link>;
            <div>Broken JSX</div>
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors">;
              View Pricing;
            </Link>;
          </div>;
        </div>;
      </section>;
    </div>;
  )}
export default ServicesOverview;