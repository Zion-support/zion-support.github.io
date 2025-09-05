import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Star, TrendingUp, Users,
  Globe, Zap, Lock, Cloud, Smartphone, Building, Phone, Mail, MapPin
} from 'lucide-react';

// Import our new 2025 V2 innovative services
import { innovativeMicroSaas2025ExpansionV2 } from '../data/2025-innovative-micro-saas-expansion-v2';
import { innovativeITServices2025ExpansionV2 } from '../data/2025-innovative-it-services-expansion-v2';
import { innovativeAIServices2025ExpansionV2 } from '../data/2025-innovative-ai-services-expansion-v2';
import { industrySpecificSolutions2025V2 } from '../data/2025-industry-specific-solutions-v2';
import { emergingTechBreakthroughs2025V2 } from '../data/2025-emerging-tech-breakthroughs-v2';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ComprehensiveServicesShowcase2025V2() {
  const allNewServices = [
    ...innovativeMicroSaas2025ExpansionV2,
    ...innovativeITServices2025ExpansionV2,
    ...innovativeAIServices2025ExpansionV2,
    ...industrySpecificSolutions2025V2,
    ...emergingTechBreakthroughs2025V2
  ];

  const serviceCategories = [
    {
      id: 'micro-saas',
      name: 'Innovative Micro SAAS',
      icon: <Smartphone className=&quot;w-8 h-8&quot; />,
      color: 'from-blue-500 to-cyan-500',
      services: innovativeMicroSaas2025ExpansionV2,
      description: 'Cutting-edge micro SAAS solutions for modern businesses'
    },
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure Services',
      icon: <Cloud className=&quot;w-8 h-8&quot; />,
      color: 'from-purple-500 to-pink-500',
      services: innovativeITServices2025ExpansionV2,
      description: 'Advanced IT infrastructure and security solutions'
    },
    {
      id: 'ai-services',
      name: 'AI & Machine Learning',
      icon: <Brain className=&quot;w-8 h-8&quot; />,
      color: 'from-green-500 to-emerald-500',
      services: innovativeAIServices2025ExpansionV2,
      description: 'Intelligent AI solutions for business transformation'
    },
    {
      id: 'industry-solutions',
      name: 'Industry Solutions',
      icon: <Building className=&quot;w-8 h-8&quot; />,
      color: 'from-orange-500 to-red-500',
      services: industrySpecificSolutions2025V2,
      description: 'Specialized solutions for specific industries'
    },
    {
      id: 'emerging-tech',
      name: 'Emerging Technology',
      icon: <Atom className=&quot;w-8 h-8&quot; />,
      color: 'from-indigo-500 to-purple-500',
      services: emergingTechBreakthroughs2025V2,
      description: 'Breakthrough technologies of the future'
    }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;>
      <SEO 
        title=&quot;2025 Comprehensive Services Showcase V2 | Zion Tech Group&quot;
        description=&quot;Discover our comprehensive portfolio of innovative micro SAAS, IT infrastructure, AI services, industry solutions, and emerging technology breakthroughs. Transform your business with cutting-edge solutions.&quot;
        keywords={[&quot;micro SAAS&quot;, &quot;IT infrastructure&quot;, &quot;AI services&quot;, &quot;industry solutions&quot;, &quot;emerging technology&quot;, &quot;Zion Tech Group&quot;]}
      />
      
      {/* Hero Section */}
      <section className=&quot;relative py-20 px-4 overflow-hidden&quot;>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;>
          <motion.h1 
            className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6&quot;
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            2025 V2 Comprehensive
            <br />
            Services Showcase
          </motion.h1>
          <motion.p 
            className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto&quot;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience the future of technology with our revolutionary portfolio of innovative micro SAAS, 
            IT infrastructure, AI services, industry solutions, and emerging technology breakthroughs.
          </motion.p>
          <motion.div 
            className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href=&quot;#services&quot; 
              className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg&quot;
            >
              Explore Services
            </Link>
            <a 
              href=&quot;#contact&quot; 
              className=&quot;px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200&quot;
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section id=&quot;contact&quot; className=&quot;py-16 px-4 bg-black/20&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
          <motion.h2 
            className=&quot;text-3xl md:text-4xl font-bold text-white mb-8&quot;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.div 
            className=&quot;grid md:grid-cols-3 gap-8&quot;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className=&quot;text-center&quot;>
              <Phone className=&quot;w-12 h-12 text-cyan-400 mx-auto mb-4&quot; />
              <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>Call Us</h3>
              <p className=&quot;text-cyan-400 text-lg&quot;>{contactInfo.mobile}</p>
            </div>
            <div className=&quot;text-center&quot;>
              <Mail className=&quot;w-12 h-12 text-cyan-400 mx-auto mb-4&quot; />
              <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>Email Us</h3>
              <p className=&quot;text-cyan-400 text-lg&quot;>{contactInfo.email}</p>
            </div>
            <div className=&quot;text-center&quot;>
              <MapPin className=&quot;w-12 h-12 text-cyan-400 mx-auto mb-4&quot; />
              <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>Visit Us</h3>
              <p className=&quot;text-cyan-400 text-lg&quot;>{contactInfo.address}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services by Category */}
      <section id=&quot;services&quot; className=&quot;py-20 px-4&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.h2 
            className=&quot;text-4xl md:text-5xl font-bold text-white text-center mb-16&quot;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Comprehensive Service Portfolio
          </motion.h2>
          
          <motion.div 
            className=&quot;space-y-20&quot;
            variants={staggerContainer}
            initial=&quot;initial&quot;
            whileInView=&quot;animate&quot;
            viewport={{ once: true }}
          >
            {serviceCategories.map((category) => (
              <motion.div key={category.id} variants={fadeInUp}>
                <div className=&quot;text-center mb-12&quot;>
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${category.color} mb-6`}>
                    {category.icon}
                  </div>
                  <h3 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>
                    {category.name}
                  </h3>
                  <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                    {category.description}
                  </p>
                </div>
                
                <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
                  {category.services.map((service) => (
                    <motion.div
                      key={service.id}
                      className=&quot;bg-black/30 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105&quot;
                      whileHover={{ y: -5 }}
                    >
                      <h4 className=&quot;text-xl font-semibold text-white mb-3&quot;>
                        {service.title}
                      </h4>
                      <p className=&quot;text-gray-300 mb-4&quot;>
                        {service.description}
                      </p>
                      
                      <div className=&quot;space-y-3 mb-6&quot;>
                        <div className=&quot;flex items-center text-sm text-cyan-400&quot;>
                          <TrendingUp className=&quot;w-4 h-4 mr-2&quot; />
                          {service.marketSize}
                        </div>
                        <div className=&quot;flex items-center text-sm text-green-400&quot;>
                          <Star className=&quot;w-4 h-4 mr-2&quot; />
                          {service.growthRate}
                        </div>
                      </div>
                      
                      <div className=&quot;mb-6&quot;>
                        <div className=&quot;text-2xl font-bold text-white mb-2&quot;>
                          Starting at {(service as any).pricing?.starter || service.price}
                        </div>
                        <div className=&quot;text-sm text-gray-400&quot;>
                          {(service as any).pricing?.professional ? 
                            `Professional: ${(service as any).pricing.professional} | Enterprise: ${(service as any).pricing.enterprise}` :
                            `${service.price} ${service.period}`
                          }
                        </div>
                      </div>
                      
                      <a
                        href={`/services/${service.slug}`}
                        className=&quot;inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200&quot;
                      >
                        Learn More <ArrowRight className=&quot;w-4 h-4 ml-2&quot; />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Market Statistics */}
      <section className=&quot;py-20 px-4 bg-black/20&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.h2 
            className=&quot;text-4xl md:text-5xl font-bold text-white text-center mb-16&quot;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Market Impact & Growth
          </motion.h2>
          
          <motion.div 
            className=&quot;grid md:grid-cols-2 lg:grid-cols-4 gap-8&quot;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-4xl md:text-5xl font-bold text-cyan-400 mb-2&quot;>25+</div>
              <div className=&quot;text-white text-lg&quot;>New Services Added</div>
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-4xl md:text-5xl font-bold text-blue-400 mb-2&quot;>$150B+</div>
              <div className=&quot;text-white text-lg&quot;>Total Addressable Market</div>
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-4xl md:text-5xl font-bold text-purple-400 mb-2&quot;>40%+</div>
              <div className=&quot;text-white text-lg&quot;>Average Annual Growth</div>
            </div>
            <div className=&quot;text-center&quot;>
              <div className=&quot;text-4xl md:text-5xl font-bold text-green-400 mb-2&quot;>5</div>
              <div className=&quot;text-white text-lg&quot;>Service Categories</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className=&quot;py-20 px-4&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
          <motion.h2 
            className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Lead the Future?
          </motion.h2>
          <motion.p 
            className=&quot;text-xl text-gray-300 mb-8&quot;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join thousands of businesses already transforming their operations with our cutting-edge solutions.
          </motion.p>
          <motion.div 
            className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a 
              href={`mailto:${contactInfo.email}`}
              className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg&quot;
            >
              Contact Our Team
            </Link>
            <a 
              href=&quot;https://ziontechgroup.com&quot;
              className=&quot;px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200&quot;
            >
              Visit Website
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}