import React from 'react';
import { motion  } from 'framer-motion.ts';
import { Link  } from 'react-router-dom.ts';
import { SEO  } from '@/components/SEO';
import { Brain, 
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
  Server
 } from 'lucide-react';

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO 
        title="Our Services - Zion Tech Group"
        description="Explore Zion Tech Group's comprehensive range of AI solutions, cloud services, cybersecurity, and digital transformation services. Transform your business with cutting-edge technology."
        keywords="AI services, cloud solutions, cybersecurity, digital transformation, technology consulting, Zion Tech Group services"
        canonical="https://ziontechgroup.com/services"
      />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive AI-powered solutions and technology services designed to transform your business and drive innovation
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link 
              to="/pricing" 
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View Pricing
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Service Categories
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our comprehensive range of technology solutions organized by category
            </p>
          </motion.div>
          
          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              >
                <div className="text-center mb-12">
                  <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{category.name}</h3>
                  <p className="text-xl text-slate-300 max-w-2xl mx-auto">{category.description}</p>
                </div>
                
                <div className="grid lg: anygrid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex)  => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, x: serviceIndex % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}
                      className="group"
                    >
                      <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 h-full">
                        <div className="flex items-start justify-between mb-6">
                          <div>
                            <h4 className="text-2xl font-bold text-white mb-2">{service.name}</h4>
                            <p className="text-slate-300 mb-4">{service.description}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                            <div className="flex items-center justify-end mb-2">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-slate-600'}`} />
                              ))}
                              <span className="text-sm text-slate-400 ml-2">({service.reviewCount})</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3 mb-6">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-slate-300">
                              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                        
                        <Link 
                          to={service.href}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:scale-105 transition-all duration-300"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emerging Technologies */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Emerging Technologies
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Stay ahead of the curve with our cutting-edge technology solutions
            </p>
          </motion.div>
          
          <div className="grid md: anygrid-cols-2 lg:grid-cols-3 gap-8">
            {emergingTechnologies.map((tech, index)  => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link to={tech.href} className="block h-full">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <tech.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {tech.name}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver exceptional results
            </p>
          </motion.div>
          
          <div className="grid md: anygrid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index)  => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-slate-300">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </footer>

      </div>
    </>
  )};
;
export: default Services;



          <p className='text-lg text-gray-600'>Content coming soon...</p>
        </div>
      </div>
</>


  )}







