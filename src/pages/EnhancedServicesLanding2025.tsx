import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  TrendingUp, 
  Users, 
  Shield, 
  Zap, 
  Globe,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  BarChart3,
  Brain,
  Server,
  Code,
  Target,
  Rocket,
  Lock,
  Cloud,
  Database,
  Smartphone,
  Cpu,
  Network,
  Eye,
  Heart,
  Factory,
  ShoppingCart,
  GraduationCap,
  Home,
  Scale,
  Leaf,
  Truck,
  TestTube
} from 'lucide-react';
import { enhancedServicesCatalog2025, contactInfo, successMetrics } from '../data/enhancedServicesCatalog2025';

const EnhancedServicesLanding2025: React.FC = () => {
  const featuredServices = enhancedServicesCatalog2025.flatMap(category => 
    category.items.filter(service => 
      service.id.includes('ai-') || service.id.includes('quantum') || service.id.includes('blockchain')
    )
  ).slice(0, 6);

  const industrySolutions = [
    {
      icon: Heart,
      title: 'Healthcare & Life Sciences',
      description: 'AI-powered medical imaging, telemedicine platforms, and compliance solutions',
      services: ['AI Healthcare Analytics', 'Telemedicine Platform', 'Medical Imaging AI']
    },
    {
      icon: Factory,
      title: 'Manufacturing & Industry 4.0',
      description: 'Smart factories, predictive maintenance, and quality control automation',
      services: ['Predictive Maintenance', 'Quality Control AI', 'Smart Factory Platform']
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce & Retail',
      description: 'AI-driven pricing, inventory optimization, and customer experience enhancement',
      services: ['E-commerce Personalization', 'Inventory Optimization', 'Customer Analytics']
    },
    {
      icon: GraduationCap,
      title: 'Education & Training',
      description: 'Personalized learning platforms and AI-powered educational content creation',
      services: ['AI Education Platform', 'Learning Analytics', 'Content Generation']
    },
    {
      icon: Home,
      title: 'Real Estate & Property',
      description: 'AI-powered property valuation and market analysis platforms',
      services: ['Property Valuation AI', 'Market Analysis', 'Investment Analytics']
    },
    {
      icon: Scale,
      title: 'Legal & Compliance',
      description: 'Contract analysis, legal research, and compliance monitoring automation',
      services: ['Legal Research AI', 'Compliance Automation', 'Contract Analysis']
    }
  ];

  const technologyStack = [
    { icon: Brain, name: 'AI & Machine Learning', tech: 'TensorFlow, PyTorch, OpenAI, Custom Models' },
    { icon: Rocket, name: 'Quantum Computing', tech: 'IBM Q, Google Quantum, Custom Algorithms' },
    { icon: Lock, name: 'Blockchain & Web3', tech: 'Ethereum, Solana, Smart Contracts, DeFi' },
    { icon: Cloud, name: 'Cloud & DevOps', tech: 'AWS, Azure, GCP, Kubernetes, Docker' },
    { icon: Database, name: 'Data & Analytics', tech: 'Snowflake, BigQuery, Databricks, Apache' },
    { icon: Shield, name: 'Cybersecurity', tech: 'Zero Trust, SOC 2, ISO 27001, NIST' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Transform Your Business
              <span className="block text-3xl md:text-5xl text-blue-200 mt-2">
                With Zion Tech Group
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-8">
              Discover our comprehensive portfolio of innovative micro SaaS solutions, cutting-edge AI services, 
              and enterprise-grade technology solutions designed to drive growth and competitive advantage.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://ziontechgroup.com/services"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                View All Services
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center"
          >
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{successMetrics.totalClients}</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">{successMetrics.successRate}</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">{successMetrics.averageROI}</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">{successMetrics.timeToValue}</div>
              <div className="text-gray-600">Time to Value</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">{successMetrics.satisfactionScore}</div>
              <div className="text-gray-600">Satisfaction Score</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and innovative solutions that are transforming businesses across industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                      {service.category}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{service.price}</div>
                      <div className="text-sm text-gray-500">per {service.billing}</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>

                  {service.marketSize && (
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <BarChart3 className="w-4 h-4" />
                      <span>Market: {service.marketSize}</span>
                    </div>
                  )}

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={service.href}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 w-full justify-center"
                  >
                    {service.ctaLabel}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry-Specific Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions designed to address the unique challenges and opportunities in your industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4 text-blue-600">
                  <industry.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.title}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                
                <div className="space-y-2">
                  {industry.services.map((service, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cutting-Edge Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on the latest technologies and frameworks to ensure scalability, security, and performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologyStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-blue-100 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-gray-600 text-sm">{tech.tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine innovation, expertise, and proven results to deliver exceptional value to our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Star,
                title: "Proven Excellence",
                description: "98% client satisfaction rate with measurable business impact"
              },
              {
                icon: TrendingUp,
                title: "Innovation First",
                description: "Cutting-edge AI, quantum computing, and emerging technologies"
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Experienced professionals with deep industry knowledge"
              },
              {
                icon: Zap,
                title: "Rapid Results",
                description: "Quick implementation with proven deployment methodologies"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let's discuss how our innovative solutions can drive growth, efficiency, and competitive advantage for your organization.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 mb-3" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-blue-100">{contactInfo.phone}</p>
                <p className="text-sm text-blue-200">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
              </div>
              
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 mb-3" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-blue-100">{contactInfo.email}</p>
                <p className="text-sm text-blue-200">24/7 Support Available</p>
              </div>
              
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 mb-3" />
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-blue-100">{contactInfo.address}</p>
                <p className="text-sm text-blue-200">Professional Office Space</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <a
                href="https://ziontechgroup.com/services"
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                View All Services
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
              <p className="text-gray-400 text-sm">
                Leading provider of innovative IT services, AI solutions, and micro SaaS platforms.
              </p>
            </div>
            
            <div>
              <h4 className="text-md font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://ziontechgroup.com" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="https://ziontechgroup.com/services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="https://ziontechgroup.com/about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="https://ziontechgroup.com/contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-md font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://ziontechgroup.com/micro-saas" className="hover:text-white transition-colors">Micro SaaS</a></li>
                <li><a href="https://ziontechgroup.com/ai-services" className="hover:text-white transition-colors">AI Solutions</a></li>
                <li><a href="https://ziontechgroup.com/it-services" className="hover:text-white transition-colors">IT Services</a></li>
                <li><a href="https://ziontechgroup.com/consulting" className="hover:text-white transition-colors">Consulting</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-md font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>{contactInfo.phone}</p>
                <p>{contactInfo.email}</p>
                <p className="text-xs">{contactInfo.address}</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Zion Tech Group. All rights reserved. | <a href="https://ziontechgroup.com/privacy" className="hover:text-white transition-colors">Privacy Policy</a> | <a href="https://ziontechgroup.com/terms" className="hover:text-white transition-colors">Terms of Service</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EnhancedServicesLanding2025;