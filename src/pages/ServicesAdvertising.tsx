import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Server, 
  Zap, 
  Globe, 
  Cpu, 
  Code,
  Rocket,
  Users,
  Star,
  TrendingUp,
  DollarSign,
  CheckCircle,
  ArrowRight,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Atom,
  Blockchain,
  Heart,
  Scale,
  Factory,
  Satellite,
  ShoppingCart,
  Building,
  Truck,
  Lock,
  Globe as GlobeIcon
} from 'lucide-react';
import { SEO } from "@/components/SEO";
import { ALL_INNOVATIVE_SERVICES } from "@/data/innovativeMicroSaasServices2025.ts";

export default function ServicesAdvertising() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-zion-cyan to-zion-blue' },
    { id: 'ai-content-marketing', name: 'AI Content & Marketing', icon: Code, color: 'from-zion-orange to-zion-pink' },
    { id: 'data-privacy-compliance', name: 'Data Privacy & Compliance', icon: Lock, color: 'from-zion-red to-zion-purple' },
    { id: 'green-tech-sustainability', name: 'Green Tech & Sustainability', icon: Globe, color: 'from-zion-green to-zion-blue' },
    { id: 'remote-work-collaboration', name: 'Remote Work & Collaboration', icon: Users, color: 'from-zion-blue to-zion-purple' },
    { id: 'ecommerce-retail', name: 'E-commerce & Retail', icon: ShoppingCart, color: 'from-zion-green to-zion-orange' },
    { id: 'healthcare-technology', name: 'Healthcare Technology', icon: Heart, color: 'from-zion-pink to-zion-red' },
    { id: 'educational-technology', name: 'Educational Technology', icon: BookOpen, color: 'from-zion-blue to-zion-green' },
    { id: 'real-estate-technology', name: 'Real Estate Technology', icon: Building, color: 'from-zion-orange to-zion-blue' },
    { id: 'supply-chain-logistics', name: 'Supply Chain & Logistics', icon: Truck, color: 'from-zion-green to-zion-purple' },
    { id: 'customer-support', name: 'Customer Support', icon: MessageCircle, color: 'from-zion-blue to-zion-pink' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? ALL_INNOVATIVE_SERVICES 
    : ALL_INNOVATIVE_SERVICES.filter(service => 
        service.category.toLowerCase().includes(selectedCategory.replace('-', ' '))
      );

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.id === category.toLowerCase().replace(' ', '-'));
    return cat ? cat.icon : Zap;
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category.toLowerCase().replace(' ', '-'));
    return cat ? cat.color : 'from-zion-cyan to-zion-blue';
  };

  return (
    <>
      <SEO 
        title="Comprehensive Micro SAAS Services - Zion Tech Group"
        description="Discover our complete portfolio of innovative micro SAAS services including AI Content & Marketing, Data Privacy, Green Tech, Remote Work Tools, E-commerce Solutions, Healthcare Tech, EdTech, Real Estate Tech, Supply Chain AI, and Customer Support Automation."
        canonical="/services-advertising"
        url="https://ziontechgroup.com/services-advertising"
      />
      
      {/* Hero Section */}
      <section className="bg-futuristic min-h-[70vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-zion-blue rounded-full animate-pulse delay-2000"></div>
        </div>

        <div className="container-responsive relative z-10">
          <motion.div 
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-responsive font-bold mb-6">
              <span className="text-gradient">Complete Portfolio of</span>
              <br />
              <span className="text-white">Innovative Micro SAAS Services</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Transform your business with our comprehensive suite of cutting-edge technology solutions. 
              From AI-powered content creation to quantum computing, blockchain applications to healthcare AI, 
              discover the future of business technology with Zion Tech Group.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-3xl font-bold text-zion-cyan mb-2">{ALL_INNOVATIVE_SERVICES.length}+</div>
                <div className="text-zion-slate-light">Innovative Services</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-3xl font-bold text-zion-purple mb-2">32+</div>
                <div className="text-zion-slate-light">Technology Categories</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-3xl font-bold text-zion-blue mb-2">99.9%</div>
                <div className="text-zion-slate-light">Uptime Guarantee</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="text-3xl font-bold text-zion-green mb-2">24/7</div>
                <div className="text-zion-slate-light">Expert Support</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container-responsive">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'border-zion-cyan bg-zion-cyan/10 text-zion-cyan'
                    : 'border-zion-slate-light/30 text-zion-slate-light hover:border-zion-cyan/50 hover:text-zion-cyan'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-futuristic">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-slate-light/20 rounded-2xl p-6 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-zion-slate-light text-sm mb-3">{service.description}</p>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getCategoryColor(service.category)} flex items-center justify-center`}>
                      {React.createElement(getCategoryIcon(service.category), { className: "w-6 h-6 text-white" })}
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="bg-zion-slate-dark/50 rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-zion-cyan">
                      {service.currency}{service.price.toLocaleString()}
                    </span>
                    <span className="text-zion-slate-light text-sm">/{service.pricingModel}</span>
                  </div>
                  <div className="text-sm text-zion-slate-light">
                    Market Price: {service.marketPrice}
                  </div>
                  <div className="text-sm text-zion-green font-medium">
                    ROI: {service.roi}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.slice(0, 5).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-green flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 5 && (
                      <div className="text-sm text-zion-slate-light text-center">
                        +{service.features.length - 5} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-3">Benefits</h4>
                  <div className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="text-sm text-zion-slate-light">
                        • {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Specs */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-3">Technical Specifications</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-zion-slate-light">Uptime:</span>
                      <div className="text-white font-medium">{service.technicalSpecs?.uptime}</div>
                    </div>
                    <div>
                      <span className="text-zion-slate-light">API Endpoints:</span>
                      <div className="text-white font-medium">{service.technicalSpecs?.apiEndpoints}</div>
                    </div>
                  </div>
                </div>

                {/* Delivery & Support */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div>
                    <span className="text-zion-slate-light">Delivery:</span>
                    <div className="text-white font-medium">{service.estimatedDelivery}</div>
                  </div>
                  <div>
                    <span className="text-zion-slate-light">Support:</span>
                    <div className="text-white font-medium capitalize">{service.supportLevel}</div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex gap-3">
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                    className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-center py-3 px-4 rounded-xl font-medium hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Get Quote
                  </a>
                  <a
                    href={`tel:${service.contactInfo.phone}`}
                    className="bg-zion-slate-dark border border-zion-slate-light/30 text-white p-3 rounded-xl hover:border-zion-cyan/50 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container-responsive">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Contact our team of experts to discuss your specific needs and discover how our innovative 
              micro SAAS services can drive your business forward.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-zion-slate-light">+1 302 464 0950</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-pink rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-green to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Business Consultation Request"
                className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-8 py-4 rounded-xl font-medium hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Schedule Consultation
              </a>
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-xl font-medium hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <GlobeIcon className="w-5 h-5" />
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 bg-futuristic">
        <div className="container-responsive">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light">
              We're not just another technology company. We're your strategic partner in digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Proven Track Record</h3>
              <p className="text-zion-slate-light">
                Successfully delivered innovative solutions to businesses across industries, 
                with measurable ROI and customer satisfaction.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-zion-purple to-zion-pink rounded-3xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Cutting-Edge Technology</h3>
              <p className="text-zion-slate-light">
                Stay ahead of the competition with the latest AI, blockchain, quantum computing, 
                and emerging technologies.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-zion-green to-zion-blue rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Expert Team</h3>
              <p className="text-zion-slate-light">
                Our team of experienced professionals brings deep expertise in technology, 
                business strategy, and industry best practices.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-zion-orange to-zion-red rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Enterprise Security</h3>
              <p className="text-zion-slate-light">
                SOC 2 compliance, end-to-end encryption, and industry-leading security 
                practices to protect your data and operations.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-zion-yellow to-zion-orange rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Rapid Deployment</h3>
              <p className="text-zion-slate-light">
                Get your solutions up and running quickly with our streamlined development 
                process and proven methodologies.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-zion-pink to-zion-purple rounded-3xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">24/7 Support</h3>
              <p className="text-zion-slate-light">
                Round-the-clock technical support and maintenance to ensure your 
                systems run smoothly and efficiently.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}