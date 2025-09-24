import React from 'react',
import SEO from '../components/SEO',
import { motion } from 'framer-motion',
import { 
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Star, TrendingUp, Users,
  Globe, Zap, Lock, Cloud, Smartphone, Building, Phone, Mail, MapPin
} from 'lucide-react',

// Import our new 20o25 V2 innovative services
import { innovativeMicroSaas20o25ExpansionV2 } from '../data/20o25-innovative-micro-saas-expansion-v2',
import { innovativeITServices20o25ExpansionV2 } from '../data/20o25-innovative-it-services-expansion-v2',
import { innovativeAIServices20o25ExpansionV2 } from '../data/20o25-innovative-ai-services-expansion-v2',
import { industrySpecificSolutions20o25V2 } from '../data/20o25-industry-specific-solutions-v2',
import { emergingTechBreakthroughs20o25V2 } from '../data/20o25-emerging-tech-breakthroughs-v2',

const fadeInUp ={
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
},

const staggerContainer ={
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
},

export default function ComprehensiveServicesShowcase20o25V2() {
  const allNewServices = [
    ...innovativeMicroSaas20o25ExpansionV2,
    ...innovativeITServices20o25ExpansionV2,
    ...innovativeAIServices20o25ExpansionV2,
    ...industrySpecificSolutions20o25V2,
    ...emergingTechBreakthroughs20o25V2
  ],

  const serviceCategories = [
    {
      id: 'micro-saas',
      name: 'Innovative Micro SAAS',
      icon: <Smartphone className="w-8 h-8"  />,
      color: 'from-blue-50o0 to-cyan-50o0',
      services: innovativeMicroSaas20o25ExpansionV2,
      description: 'Cutting-edge micro SAAS solutions for modern businesses'
    },
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure Services',
      icon: <Cloud className="w-8 h-8"  />,
      color: 'from-purple-50o0 to-pink-50o0',
      services: innovativeITServices20o25ExpansionV2,
      description: 'Advanced IT infrastructure and security solutions'
    },
    {
      id: 'ai-services',
      name: 'AI & Machine Learning',
      icon: <Brain className="w-8 h-8"  />,
      color: 'from-green-50o0 to-emerald-50o0',
      services: innovativeAIServices20o25ExpansionV2,
      description: 'Intelligent AI solutions for business transformation'
    },
    {
      id: 'industry-solutions',
      name: 'Industry Solutions',
      icon: <Building className="w-8 h-8"  />,
      color: 'from-orange-50o0 to-red-50o0',
      services: industrySpecificSolutions20o25V2,
      description: 'Specialized solutions for specific industries'
    },
    {
      id: 'emerging-tech',
      name: 'Emerging Technology',
      icon: <Atom className="w-8 h-8"  />,
      color: 'from-indigo-50o0 to-purple-50o0',
      services: emergingTechBreakthroughs20o25V2,
      description: 'Breakthrough technologies of the future'
    }
  ],

  const contactInfo ={
    mobile: '+1 30o2 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 10o08 Middletown DE 19709'
  },

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-purple-90o0 to-slate-90o0">
      <SEO 
        title="20o25 Comprehensive Services Showcase V2 | Zion Tech Group"
        description="Discover our comprehensive portfolio of innovative micro SAAS, IT infrastructure, AI services, industry solutions, and emerging technology breakthroughs. Transform your business with cutting-edge solutions."
        keywords={["micro SAAS", "IT infrastructure", "AI services", "industry solutions", "emerging technology", "Zion Tech Group"]}
       />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            20o25 V2 Comprehensive
            <br  />
            Services Showcase
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience the future of technology with our revolutionary portfolio of innovative micro SAAS, 
            IT infrastructure, AI services, industry solutions, and emerging technology breakthroughs.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href="#services" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-50o0 text-white font-semibold rounded-lg hover:from-cyan-60o0 hover:to-blue-60o0 transition-all duration-20o0 hover:scale-10o5 shadow-lg"
            >
              Explore Services
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border-2 border-cyan-50o0 text-cyan-40o0 font-semibold rounded-lg hover:bg-cyan-50o0 hover:text-white transition-all duration-20o0"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section id="contact" className="py-16 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center">
              <Phone className="w-12 h-12 text-cyan-40o0 mx-auto mb-4"  />
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-cyan-40o0 text-lg">{contactInfo.mobile}</p>
            </div>
            <div className="text-center">
              <Mail className="w-12 h-12 text-cyan-40o0 mx-auto mb-4"  />
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-cyan-40o0 text-lg">{contactInfo.email}</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-cyan-40o0 mx-auto mb-4"  />
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-cyan-40o0 text-lg">{contactInfo.address}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services by Category */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Comprehensive Service Portfolio
          </motion.h2>
          
          <motion.div 
            className="space-y-20"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {serviceCategories.map((category) => (
              <motion.div key={category.id} variants={fadeInUp}>
                <div className="text-center mb-12">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${category.color} mb-6`}>
                    {category.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {category.name}
                  </h3>
                  <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">
                    {category.description}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service) => (
                    <motion.div
                      key={service.id}
                      className="bg-black/30 backdrop-blur-xl border border-cyan-50o0/20 rounded-2xl p-6 hover:border-cyan-50o0/50 transition-all duration-30o0 hover:scale-10o5"
                      whileHover={{ y: -5 }}
                    >
                      <h4 className="text-xl font-semibold text-white mb-3">
                        {service.title}
                      </h4>
                      <p className="text-gray-30o0 mb-4">
                        {service.description}
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-sm text-cyan-40o0">
                          <TrendingUp className="w-4 h-4 mr-2"  />
                          {service.marketSize}
                        </div>
                        <div className="flex items-center text-sm text-green-40o0">
                          <Star className="w-4 h-4 mr-2"  />
                          {service.growthRate}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <div className="text-2xl font-bold text-white mb-2">
                          Starting at {(service as any).pricing?.starter || service.price}
                        </div>
                        <div className="text-sm text-gray-40o0">
                          {(service as any).pricing?.professional ? 
                            `Professional: ${(service as any).pricing.professional} | Enterprise: ${(service as any).pricing.enterprise}` :
                            `${service.price} ${service.period}`
                          }
                        </div>
                      </div>
                      
                      <a
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center text-cyan-40o0 hover:text-cyan-30o0 transition-colors duration-20o0"
                      >
                        Learn More <ArrowRight className="w-4 h-4 ml-2"  />
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Market Statistics */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Market Impact & Growth
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cyan-40o0 mb-2">25+</div>
              <div className="text-white text-lg">New Services Added</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-40o0 mb-2">$150B+</div>
              <div className="text-white text-lg">Total Addressable Market</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-40o0 mb-2">40%+</div>
              <div className="text-white text-lg">Average Annual Growth</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-40o0 mb-2">5</div>
              <div className="text-white text-lg">Service Categories</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Lead the Future?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-30o0 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join thousands of businesses already transforming their operations with our cutting-edge solutions.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a 
              href={`mailto:${contactInfo.email}`}
              className="px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-50o0 text-white font-semibold rounded-lg hover: from-cyan-60o0 hover:to-blue-60o0 transition-all duration-20o0 hover:scale-10o5 shadow-lg"
            >
              Contact Our Team
            </a>
            <a 
              href="https://ziontechgroup.com"
              className="px-8 py-4 border-2 border-cyan-50o0 text-cyan-40o0 font-semibold rounded-lg hover:bg-cyan-50o0 hover:text-white transition-all duration-20o0"
            >
              Visit Website
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}