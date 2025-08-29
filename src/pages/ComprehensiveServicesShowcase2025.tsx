import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Cpu, 
  Lock, 
  Heart, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  Lightbulb,
  Database,
  Network,
  Smartphone,
  Server,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';
import expandedServices2025 from '../data/expandedServices2025';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const stats = [
    { label: 'Services Available', value: '25+' },
    { label: 'Industries Served', value: '15+' },
    { label: 'Client Satisfaction', value: '98%' },
    { label: 'Years Experience', value: '15+' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp Inc.',
      company: 'TechCorp Inc.',
      content: 'Zion Tech Group transformed our entire IT infrastructure. Their AI solutions increased our operational efficiency by 40% and reduced costs significantly.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'VP Operations, Global Manufacturing',
      company: 'Global Manufacturing',
      content: 'The supply chain optimization platform from Zion Tech Group helped us reduce inventory costs by 25% and improve delivery times by 30%.',
      rating: 5
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Chief Medical Officer, HealthTech Solutions',
      company: 'HealthTech Solutions',
      content: 'Their healthcare AI platform has improved our diagnosis accuracy and patient outcomes. The ROI was immediate and substantial.',
      rating: 5
    }
  ];

  return (
    <>
      <SEO
        title="Comprehensive Services Showcase 2025 | Zion Tech Group"
        description="Explore our comprehensive portfolio of AI-powered micro SaaS, IT infrastructure, and emerging technology solutions. Transform your business with cutting-edge technology."
        keywords="AI services, micro SaaS, IT infrastructure, quantum computing, blockchain, IoT, healthcare AI, fintech, edtech, Zion Tech Group"
        canonical="https://ziontechgroup.com/comprehensive-services-showcase-2025"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Comprehensive Services Showcase 2025
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover our complete portfolio of innovative AI-powered solutions, enterprise IT services, and cutting-edge technology platforms designed to transform your business.
              </p>
              
              {/* Contact Information */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="text-blue-400 w-5 h-5" />
                    <div className="text-left">
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="text-white font-semibold">{contactInfo.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="text-green-400 w-5 h-5" />
                    <div className="text-left">
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-white font-semibold">{contactInfo.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="text-red-400 w-5 h-5" />
                    <div className="text-left">
                      <p className="text-sm text-gray-400">Address</p>
                      <p className="text-white font-semibold text-sm">{contactInfo.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Visit Our Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Contact Us</span>
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Comprehensive Service Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From AI-powered micro SaaS to enterprise IT infrastructure, we provide end-to-end technology solutions that drive innovation and growth.
              </p>
            </motion.div>

            {expandedServices2025.map((category, categoryIndex) => (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="mb-20"
              >
                <div className="text-center mb-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{category.name}</h3>
                  <p className="text-lg text-gray-300 max-w-2xl mx-auto">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((service, serviceIndex) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <div className="mb-4">
                        <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                        <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                        
                        {/* Price */}
                        <div className="flex items-baseline space-x-2 mb-4">
                          <span className="text-2xl font-bold text-green-400">{service.price}</span>
                          <span className="text-gray-400">/{service.billing}</span>
                        </div>

                        {/* Market Size */}
                        <div className="bg-blue-900/30 rounded-lg p-3 mb-4">
                          <p className="text-sm text-blue-300">
                            <span className="font-semibold">Market Size:</span> {service.marketSize}
                          </p>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-white mb-2">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.slice(0, 4).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                              <CheckCircle className="text-green-400 w-3 h-3 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-white mb-2">Key Benefits:</h5>
                        <ul className="space-y-1">
                          {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                              <TrendingUp className="text-blue-400 w-3 h-3 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Target Audience */}
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-white mb-2">Target Audience:</h5>
                        <p className="text-gray-300 text-xs">{service.targetAudience}</p>
                      </div>

                      {/* CTA Button */}
                      <a
                        href={service.href}
                        className={`w-full py-3 px-4 rounded-lg font-semibold text-center transition-all duration-300 block ${
                          service.ctaLabel.includes('Free') || service.ctaLabel.includes('Demo')
                            ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white'
                            : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                        }`}
                      >
                        {service.ctaLabel}
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what industry leaders have to say about our services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-blue-400 text-sm">{testimonial.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our comprehensive technology solutions can drive innovation, efficiency, and growth for your organization.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <Phone className="text-blue-400 w-8 h-8 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Call Us</h3>
                  <p className="text-gray-300 text-sm">{contactInfo.phone}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <Mail className="text-green-400 w-8 h-8 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-300 text-sm">{contactInfo.email}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <MapPin className="text-red-400 w-8 h-8 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Visit Us</h3>
                  <p className="text-gray-300 text-sm">{contactInfo.address}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email</span>
                </a>
                <a 
                  href={contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-green-400 text-green-400 font-semibold py-3 px-8 rounded-lg hover:bg-green-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Visit Website</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ComprehensiveServicesShowcase2025;