import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
import { 
  BarChart3,
  Zap,
  Server,
  Cloud,
  Atom,
  PenTool,
  Eye,
  Workflow,
  TrendingUp,
  Users,
  Target,
  MessageCircle,
  Heart,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Rocket,
  Lightbulb,
  Code,
  Database,
  Network,
  Lock,
  Globe,
  Cpu,
  Palette,
import { comprehensiveServices2025Enhanced, serviceCategories } from '../data/comprehensive-services-2025-enhanced';

      icon: <Brain className="w-8 h-8" />,
          icon: <Workflow className="w-6 h-6" />
          icon: <BarChart3 className="w-6 h-6" />
          icon: <TrendingUp className="w-6 h-6" />
      icon: <PenTool className="w-8 h-8" />,
          icon: <Sparkles className="w-6 h-6" />
          icon: <Target className="w-6 h-6" />
          icon: <TrendingUp className="w-6 h-6" />
      icon: <Eye className="w-8 h-8" />,
          icon: <BarChart3 className="w-6 h-6" />
          icon: <MessageCircle className="w-6 h-6" />
          icon: <Users className="w-6 h-6" />
      icon: <Shield className="w-8 h-8" />,
          icon: <Lock className="w-6 h-6" />
          icon: <Atom className="w-6 h-6" />
          icon: <CheckCircle className="w-6 h-6" />
      icon: <Server className="w-8 h-8" />,
          icon: <Cpu className="w-6 h-6" />
          icon: <Cloud className="w-6 h-6" />
          icon: <DollarSign className="w-6 h-6" />
      icon: <Atom className="w-8 h-8" />,
          icon: <Brain className="w-6 h-6" />
          icon: <Network className="w-6 h-6" />
          icon: <Globe className="w-6 h-6" />




  // Mock data for demonstration - replace with actual data import


    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: '10x Faster Implementation',
      description: 'Our AI-powered solutions reduce implementation time from months to weeks'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: '40-60% Cost Reduction',
      description: 'Significant cost savings through automation and optimization'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: '99.9% Uptime Guarantee',
      description: 'Enterprise-grade reliability with comprehensive SLA guarantees'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '24/7 Expert Support',
      description: 'Round-the-clock support from our team of certified professionals'
    }
  ];

  const openServiceModal = (service: any) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Micro SaaS': return <Code className="w-6 h-6" />;
      case 'AI Solutions': return <Brain className="w-6 h-6" />;
      case 'IT Services': return <Server className="w-6 h-6" />;
      case 'Digital Twin': return <Globe className="w-6 h-6" />;
      case 'Sustainable Tech': return <Leaf className="w-6 h-6" />;
      default: return <Zap className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Micro SaaS': return 'from-blue-600 to-cyan-700';
      case 'AI Solutions': return 'from-purple-600 to-indigo-700';
      case 'IT Services': return 'from-green-600 to-emerald-700';
      case 'Digital Twin': return 'from-orange-600 to-red-700';
      case 'Sustainable Tech': return 'from-green-500 to-emerald-600';
      default: return 'from-gray-600 to-slate-700';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
              <Sparkles className="w-4 h-4 mr-2" />
            
            
            

              <Link
              </Link>


              <Rocket className="w-4 h-4 mr-2"/>

              <Phone className="w-5 h-5 text-blue-300"/>
              <Mail className="w-5 h-5 text-blue-300"/>
              <MapPin className="w-5 h-5 text-blue-300"/>

                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />



          
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore our comprehensive range of services organized by category. Each service is designed 
              to work independently or integrate seamlessly with others for maximum business impact.
            </p>
          </motion.div>

                    <Lightbulb className="w-3 h-3 mr-1" />


                        <CheckCircle className="w-3 h-3 text-indigo-400 mr-2 flex-shrink-0" />

                        <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />

                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <p className="text-zion-slate-light">{category.description}</p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: serviceIndex * 0.1 }}
                      className="bg-zion-blue-darker border border-zion-purple/20 rounded-lg p-6 hover:border-zion-cyan/50 transition-all"
                    >
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-zion-cyan/20 rounded-lg flex items-center justify-center text-zion-cyan">
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">{service.name}</h4>
                          <p className="text-sm text-zion-slate-light">{service.description}</p>
                        </div>
                      </div>

                              <CheckCircle className="w-3 h-3 text-zion-cyan mr-2" />


                      <Link
                      </Link>
                    <Play className="w-4 h-4"/>
                    <ExternalLink className="w-4 h-4"/>

                      <Phone className="w-3 h-3 text-blue-300"/>
                      <Mail className="w-3 h-3 text-blue-300"/>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Services Found */}
          {filteredServices.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-blue-200 mb-6">Try adjusting your search criteria or browse all our services.</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }} 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                View All Services
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-zion-blue-dark border border-zion-cyan/30 rounded-lg p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
                Our team of experts is ready to help you implement the perfect combination of services 
                for your business needs. Get in touch today for a personalized consultation and demo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  to="/contact"
                  className="bg-zion-cyan text-zion-blue-dark px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors text-lg"
                >
                  Get Started Today
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan hover:text-zion-blue-dark transition-colors text-lg"
                >
                  Call Now: +1 302 464 0950
                </a>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-zion-cyan mb-2">50+</div>
                  <div className="text-zion-slate-light">Services Available</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-zion-cyan mb-2">24/7</div>
                  <div className="text-zion-slate-light">Expert Support</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-zion-cyan mb-2">30-Day</div>
                  <div className="text-zion-slate-light">Money Back Guarantee</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
                <Phone className="w-8 h-8 text-zion-cyan mb-4" />
          
                <MessageSquare className="w-8 h-8 text-white"/>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-zion-cyan mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-zion-cyan mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
                <Globe className="w-8 h-8 text-white"/>
            
                <Building className="w-8 h-8 text-white"/>
          
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;
